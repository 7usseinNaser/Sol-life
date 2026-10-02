const fs = require('fs');
const path = require('path');
const os = require('os');

const TARGET_DIR = path.join(os.homedir(), 'AppData', 'Local', 'next-swc');
const TARGET_FILE = path.join(TARGET_DIR, 'swc-wasm-nodejs-15.5.26.tgz');
const TEMP_FILE = TARGET_FILE + '.downloading';
const TOTAL_SIZE = 6793578;
const CHUNK_SIZE = 256 * 1024; // 256 KB per chunk
const CONCURRENCY = 4; // 4 simultaneous connections
const URL = 'https://registry.npmjs.org/@next/swc-wasm-nodejs/-/swc-wasm-nodejs-15.5.26.tgz';

async function fetchRangeWithRetry(start, end, retries = 5) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(URL, {
        headers: { Range: `bytes=${start}-${end}` },
        signal: AbortSignal.timeout(45000),
      });
      if (res.status === 206 || res.status === 200) {
        const ab = await res.arrayBuffer();
        return Buffer.from(ab);
      }
      console.warn(`Attempt ${attempt}: HTTP ${res.status} for range ${start}-${end}`);
    } catch (e) {
      console.warn(`Attempt ${attempt} error for ${start}-${end}: ${e.message}`);
      await new Promise((r) => setTimeout(r, 1000 * attempt));
    }
  }
  throw new Error(`Failed range ${start}-${end}`);
}

async function main() {
  if (!fs.existsSync(TARGET_DIR)) {
    fs.mkdirSync(TARGET_DIR, { recursive: true });
  }

  // Pre-allocate or open existing file
  let fd;
  if (!fs.existsSync(TEMP_FILE)) {
    fd = fs.openSync(TEMP_FILE, 'w+');
    fs.ftruncateSync(fd, TOTAL_SIZE);
  } else {
    fd = fs.openSync(TEMP_FILE, 'r+');
    const stat = fs.fstatSync(fd);
    if (stat.size !== TOTAL_SIZE) {
      fs.ftruncateSync(fd, TOTAL_SIZE);
    }
  }

  // Build chunk task list starting from downloaded offset
  let downloadedBytes = 3014656; // Already verified downloaded
  const tasks = [];
  let curr = downloadedBytes;
  while (curr < TOTAL_SIZE) {
    const end = Math.min(curr + CHUNK_SIZE - 1, TOTAL_SIZE - 1);
    tasks.push({ start: curr, end });
    curr = end + 1;
  }

  console.log(`Remaining chunks to fetch: ${tasks.length} with concurrency ${CONCURRENCY}...`);

  let completedChunks = 0;
  async function worker() {
    while (tasks.length > 0) {
      const task = tasks.shift();
      if (!task) break;
      const buf = await fetchRangeWithRetry(task.start, task.end);
      fs.writeSync(fd, buf, 0, buf.length, task.start);
      completedChunks++;
      downloadedBytes += buf.length;
      const pct = ((downloadedBytes / TOTAL_SIZE) * 100).toFixed(1);
      console.log(`Progress: ${pct}% (${downloadedBytes}/${TOTAL_SIZE} bytes)`);
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()));
  fs.closeSync(fd);

  if (fs.existsSync(TARGET_FILE)) {
    fs.unlinkSync(TARGET_FILE);
  }
  fs.renameSync(TEMP_FILE, TARGET_FILE);
  console.log('SUCCESS: Completely finalized swc-wasm-nodejs-15.5.26.tgz in cache!');
}

main().catch((err) => {
  console.error('Fatal error in parallel downloader:', err);
  process.exit(1);
});

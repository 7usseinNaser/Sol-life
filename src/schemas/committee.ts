import { z } from 'zod';

export const CommitteeSchema = z.object({
  id: z.string(),
  nameAr: z.string(),
  nameEn: z.string(),
  description: z.string(),
  confirmed: z.boolean().default(false), // Pending formal confirmation
  coordinators: z.array(z.string()),
  keyTasks: z.array(z.string()),
});

export type Committee = z.infer<typeof CommitteeSchema>;

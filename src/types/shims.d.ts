declare module 'next' {
  export type Metadata = {
    title?: string | { default: string; template: string };
    description?: string;
    keywords?: string[];
    authors?: { name: string; url?: string }[];
    metadataBase?: URL;
    alternates?: {
      canonical?: string;
      languages?: Record<string, string>;
    };
    openGraph?: {
      title?: string;
      description?: string;
      url?: string;
      siteName?: string;
      images?: { url: string; width?: number; height?: number; alt?: string }[];
      locale?: string;
      type?: string;
    };
  };
  const next: any;
  export default next;
}

declare module 'next/navigation' {
  export function notFound(): never;
  export function usePathname(): string;
  export function useRouter(): any;
  export function redirect(url: string): never;
}

declare module 'next/image' {
  export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string | any;
    alt: string;
    width?: number;
    height?: number;
    fill?: boolean;
    priority?: boolean;
    quality?: number;
  }
  const Image: React.FC<ImageProps>;
  export default Image;
}

declare module 'next/link' {
  export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    locale?: string | false;
    replace?: boolean;
    scroll?: boolean;
  }
  const Link: React.FC<LinkProps>;
  export default Link;
}

declare module 'next/font/google' {
  export interface FontOptions {
    subsets?: string[];
    weight?: string | string[];
    variable?: string;
    display?: 'auto' | 'block' | 'swap' | 'fallback' | 'optional';
  }
  export interface FontResult {
    className: string;
    variable: string;
    style: { fontFamily: string };
  }
  export function IBM_Plex_Sans_Arabic(options: FontOptions): FontResult;
  export function Readex_Pro(options: FontOptions): FontResult;
  export function Inter(options: FontOptions): FontResult;
}

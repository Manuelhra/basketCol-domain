export interface FileSystem {
  getFiles(pattern: string, options: object): string[];
  requireModule(path: string): { default: (router: any) => void };
}

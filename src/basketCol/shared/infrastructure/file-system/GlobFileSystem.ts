import { glob } from 'glob';
import { Router } from 'express';

import { FileSystem } from '../../domain/file-system/FileSystem';

export class GlobFileSystem implements FileSystem {
  private basePath: string;

  constructor(dependencies: {
    basePath: string;
  }) {
    this.basePath = `${dependencies.basePath}/../..`;
  }

  public getFiles(pattern: string, options: object): string[] {
    return glob.sync(pattern, { ...options, cwd: this.basePath });
  }

  public requireModule(path: string): { default: (router: Router) => void } {
    // eslint-disable-next-line import/no-dynamic-require, global-require
    return require(`${this.basePath}/${path}`);
  }
}

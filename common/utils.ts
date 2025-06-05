import path from 'node:path';

export const APP_DIR: string = path
	.resolve(import.meta.dirname, '..')
	.replaceAll('\\', '/');

export function appDirResolve(...targetPath: readonly string[]): string {
	return path.resolve(APP_DIR, path.join(...targetPath)).replaceAll('\\', '/');
}

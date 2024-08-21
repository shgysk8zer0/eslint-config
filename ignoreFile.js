import { includeIgnoreFile } from '@eslint/compat';

export const ignoreFile = includeIgnoreFile(`${process.cwd()}/.gitignore`);

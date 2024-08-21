import { node as nodeGlobals, browser as browserGlobals } from './globals.js';

export const node =  {
	ecmaVersion: 'latest',
	sourceType: 'module',
	globals: nodeGlobals,
};

export const browser = {
	ecmaVersion: 'latest',
	sourceType: 'module',
	globals: browserGlobals,
};

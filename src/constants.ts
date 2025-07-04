export const FILES_GLOB_IGNORES: string[] = [
	'{build,dist,out}{,-*,_*}/**',
	'{coverage,node_modules,patches}/**',
];

export const FILES_GLOB_JS_TS: string[] = [
	'**/*.{js,jsx,cjs,mjs,ts,tsx,cts,mts}',
];

export const FILES_GLOB_JS_TS_TEST: string[] = [
	'**/*.{spec,test}.{js,jsx,cjs,mjs,ts,tsx,cts,mts}',
];

export const FILES_GLOB_JSX: string[] = ['**/*.{jsx,tsx}'];

export const FILES_GLOB_JSX_TEST: string[] = ['**/*.{spec,test}.{jsx,tsx}'];

export const FILES_GLOB_PACKAGE_JSON: string[] = ['**/package.json'];

export const FILES_GLOB_TS: string[] = ['**/*.{ts,tsx,cts,mts}'];

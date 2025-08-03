import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		coverage: {
			all: false,
			provider: 'v8',
		},
		environment: 'node',
		globals: true,
		include: ['**/{__mocks__,__tests__,spec,tests}/**/*.{spec,test}.ts'],
		reporters: 'verbose',
		testTimeout: 2e4,
		watch: false,
	},
});

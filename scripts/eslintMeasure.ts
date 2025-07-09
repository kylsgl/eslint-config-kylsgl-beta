import { ESLint } from 'eslint';

async function eslintMeasure(): Promise<void> {
	const eslint = new ESLint();

	const start: number = performance.now();

	await eslint.lintFiles('./src');

	const end: number = performance.now();

	const duration: string = ((end - start) / 1_000).toFixed(2);

	console.info(`⌛ ESLint took ${duration}s to finish`);
}

await eslintMeasure();

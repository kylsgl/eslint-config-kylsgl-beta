import { FILES_GLOB_JSX } from '../constants';
import { type RuleConfig } from '../types';
import { airbnbReactTypescriptConfig } from './airbnb';

const baseConfig: RuleConfig = {
	files: FILES_GLOB_JSX,
	name: 'react/base-typescript',
	rules: {},
};

export default [baseConfig, ...airbnbReactTypescriptConfig];

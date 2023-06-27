import type { Config } from '@jest/types';
import { defaults } from 'jest-config';

export default async (): Promise<Config.InitialOptions> => {
	return {
		preset: 'ts-jest',
		testEnvironment: 'node',
		coverageDirectory: 'coverage',
		collectCoverage: true,
		verbose: true,
		resetMocks: true,
		restoreMocks: true,
		setupFilesAfterEnv: ['./test/unit/jest.setup.ts'],
		testMatch: ['**/*.test.tsx', '**/*.test.ts'],
		moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
		coverageThreshold: {
			global: {
				functions: 80,
				lines: 80,
				statements: 80,
			},
		},
	};
};

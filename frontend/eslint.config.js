// eslint.config.js
import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
	{
		files: ["**/*.ts", "**/*.tsx"],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: 2023,
				sourceType: "module",
				project: "./tsconfig.json",
			},
			globals: {
				browser: true,
				document: "readonly", // Add document to globals to fix 'document' is not defined
			},
		},
		plugins: {
			react,
			"react-hooks": reactHooks,
			"@typescript-eslint": typescriptEslint,
		},
		settings: {
			react: {
				version: "detect", // Automatically detect the React version from package.json
			},
		},
		rules: {
			...js.configs.recommended.rules,
			...react.configs.recommended.rules,
			...reactHooks.configs.recommended.rules,
			...typescriptEslint.configs.recommended.rules,
			"react/prop-types": "off", // Disable prop-types for TypeScript
			"react/jsx-uses-react": "off", // Not needed with react-jsx
			"react/react-in-jsx-scope": "off", // Disable since react-jsx doesn't require React import
			"no-undef": "error", // Ensure undefined variables are caught, but globals are defined
		},
	},
];

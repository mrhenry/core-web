'use strict';
const assert = require('assert');
const parser = require('@babel/parser');
const Injector = require("../lib/injector");
const { required } = require("@mrhenry/core-web");

const featureSetChrome17 = required({
	browsers: {
		'chrome': '17'
	},
	engines: {},
});

const featureSetChrome28 = required({
	browsers: {
		'chrome': '28'
	},
	engines: {},
});

const featureSetIE8 = required({
	browsers: {
		'ie': '8'
	},
	engines: {},
});


main();

function main() {
	testIdentifiers();
	testMemberExpressions();
	testNewExpressions();
	testNewExpressionsWithStringLiterals();
	testQSAScope();
	testQSAHas();
}

function testIdentifiers() {
	const testCases = [
		{
			expression: 'AbortController',
			feature: 'AbortController',
			featureSet: featureSetChrome17,
		},
		{
			expression: 'innerHeight',
			feature: '~viewport',
			featureSet: featureSetIE8,
		}
	];

	for (const testCase of testCases) {
		const injector = new Injector(
			testCase.featureSet,
			{
				debug: false,
			}
		);

		const parsed = parser.parseExpression(testCase.expression);

		injector.handleIdentifier({node: parsed}, {});
		assert.ok(injector.importSet.has(testCase.feature), `expected import set to have : ${testCase.feature}, got : ${JSON.stringify(Array.from(injector.importSet))}`);
	}
}

function testMemberExpressions() {
	const testCases = [
		{
			expression: 'document.timeline',
			feature: 'WebAnimations',
			featureSet: featureSetChrome17,
		},
	];

	for (const testCase of testCases) {
		const injector = new Injector(
			testCase.featureSet,
			{
				debug: false,
			}
		);

		const parsed = parser.parseExpression(testCase.expression);

		injector.handleMemberExpression({ node: parsed }, {});
		assert.ok(injector.importSet.has(testCase.feature), `expected import set to have : ${testCase.feature}, got : ${JSON.stringify(Array.from(injector.importSet))}`);
	}
}

function testNewExpressions() {
	const testCases = [
		{
			expression: 'new Animation()',
			feature: 'WebAnimations',
			featureSet: featureSetChrome17,
		},
	];

	for (const testCase of testCases) {
		const injector = new Injector(
			testCase.featureSet,
			{
				debug: false,
			}
		);

		const parsed = parser.parseExpression(testCase.expression);

		injector.handleNewExpression({ node: parsed }, {});
		assert.ok(injector.importSet.has(testCase.feature), `expected import set to have : ${testCase.feature}, got : ${JSON.stringify(Array.from(injector.importSet))}`);
	}
}

function testNewExpressionsWithStringLiterals() {
	const testCases = [
		{
			expression: 'new Intl.NumberFormat("es", { style: "currency", currency: "EUR" })',
			feature: 'Intl.NumberFormat.~locale.es',
			featureSet: featureSetChrome28,
		}
	];

	for (const testCase of testCases) {
		const injector = new Injector(
			testCase.featureSet,
			{
				debug: false,
			}
		);

		const parsed = parser.parseExpression(testCase.expression);

		injector.handleNewExpressionStringLiterals({ node: parsed }, {});
		assert.ok(injector.importSet.has(testCase.feature), `expected import set to have : ${testCase.feature}, got : ${JSON.stringify(Array.from(injector.importSet))}`);
	}
}

function testQSAScope() {
	const testCases = [
		{
			expression: "document.querySelectorAll(`:scope ${'p:last-child'}`)",
			feature: '~element-qsa-scope',
			featureSet: featureSetChrome17,
		},
		{
			expression: "document.querySelectorAll(':scope div')",
			feature: '~element-qsa-scope',
			featureSet: featureSetChrome17,
		},
		{
			expression: "document.querySelectorAll(':scope.foo')",
			feature: '~element-qsa-scope',
			featureSet: featureSetChrome17,
		},
		{
			expression: "document.querySelectorAll('.foo:scope')",
			feature: '~element-qsa-scope',
			featureSet: featureSetChrome17,
		},
		{
			expression: "document.querySelectorAll('div :scope')",
			feature: '~element-qsa-scope',
			featureSet: featureSetChrome17,
		},
	];

	for (const testCase of testCases) {
		const injector = new Injector(
			testCase.featureSet,
			{
				debug: false,
			}
		);

		const parsed = parser.parseExpression(testCase.expression);

		injector.handleElementQsaCallExpression({ node: parsed }, {});
		assert.ok(injector.importSet.has(testCase.feature), `expected import set to have : ${testCase.feature}, got : ${JSON.stringify(Array.from(injector.importSet))}`);
	}
}

function testQSAHas() {
	const testCases = [
		{
			expression: "document.querySelectorAll(`:has(${'p:last-child'})`)",
			feature: '~element-qsa-has',
			featureSet: featureSetChrome17,
		},
		{
			expression: "document.querySelectorAll(':has(div)')",
			feature: '~element-qsa-has',
			featureSet: featureSetChrome17,
		},
		{
			expression: "document.querySelectorAll(':has(.foo)')",
			feature: '~element-qsa-has',
			featureSet: featureSetChrome17,
		},
		{
			expression: "document.querySelectorAll('.foo:has()')",
			feature: '~element-qsa-has',
			featureSet: featureSetChrome17,
		},
		{
			expression: "document.querySelectorAll('div :has()')",
			feature: '~element-qsa-has',
			featureSet: featureSetChrome17,
		},
	];

	for (const testCase of testCases) {
		const injector = new Injector(
			testCase.featureSet,
			{
				debug: false,
			}
		);

		const parsed = parser.parseExpression(testCase.expression);

		injector.handleElementQsaCallExpression({ node: parsed }, {});
		assert.ok(injector.importSet.has(testCase.feature), `expected import set to have : ${testCase.feature}, got : ${JSON.stringify(Array.from(injector.importSet))}`);
	}
}

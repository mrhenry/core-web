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
	testNewExpressions();
	testNewExpressionsWithStringLiterals();
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

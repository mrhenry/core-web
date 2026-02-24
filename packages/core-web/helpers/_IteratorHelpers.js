
// _IteratorHelpers
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){(function (){
'use strict';

var possibleNames = require('possible-typed-array-names');

var g = typeof globalThis === 'undefined' ? global : globalThis;

/** @type {import('.')} */
module.exports = function availableTypedArrays() {
	var /** @type {ReturnType<typeof availableTypedArrays>} */ out = [];
	for (var i = 0; i < possibleNames.length; i++) {
		if (typeof g[possibleNames[i]] === 'function') {
			// @ts-expect-error
			out[out.length] = possibleNames[i];
		}
	}
	return out;
};

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"possible-typed-array-names":192}],2:[function(require,module,exports){

},{}],3:[function(require,module,exports){
'use strict';

var bind = require('function-bind');

var $apply = require('./functionApply');
var $call = require('./functionCall');
var $reflectApply = require('./reflectApply');

/** @type {import('./actualApply')} */
module.exports = $reflectApply || bind.call($call, $apply);

},{"./functionApply":5,"./functionCall":6,"./reflectApply":8,"function-bind":142}],4:[function(require,module,exports){
'use strict';

var bind = require('function-bind');
var $apply = require('./functionApply');
var actualApply = require('./actualApply');

/** @type {import('./applyBind')} */
module.exports = function applyBind() {
	return actualApply(bind, $apply, arguments);
};

},{"./actualApply":3,"./functionApply":5,"function-bind":142}],5:[function(require,module,exports){
'use strict';

/** @type {import('./functionApply')} */
module.exports = Function.prototype.apply;

},{}],6:[function(require,module,exports){
'use strict';

/** @type {import('./functionCall')} */
module.exports = Function.prototype.call;

},{}],7:[function(require,module,exports){
'use strict';

var bind = require('function-bind');
var $TypeError = require('es-errors/type');

var $call = require('./functionCall');
var $actualApply = require('./actualApply');

/** @type {(args: [Function, thisArg?: unknown, ...args: unknown[]]) => Function} TODO FIXME, find a way to use import('.') */
module.exports = function callBindBasic(args) {
	if (args.length < 1 || typeof args[0] !== 'function') {
		throw new $TypeError('a function is required');
	}
	return $actualApply(bind, $call, args);
};

},{"./actualApply":3,"./functionCall":6,"es-errors/type":71,"function-bind":142}],8:[function(require,module,exports){
'use strict';

/** @type {import('./reflectApply')} */
module.exports = typeof Reflect !== 'undefined' && Reflect && Reflect.apply;

},{}],9:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var callBind = require('./');

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
		return callBind(intrinsic);
	}
	return intrinsic;
};

},{"./":10,"get-intrinsic":148}],10:[function(require,module,exports){
'use strict';

var setFunctionLength = require('set-function-length');

var $defineProperty = require('es-define-property');

var callBindBasic = require('call-bind-apply-helpers');
var applyBind = require('call-bind-apply-helpers/applyBind');

module.exports = function callBind(originalFunction) {
	var func = callBindBasic(arguments);
	var adjustedLength = originalFunction.length - (arguments.length - 1);
	return setFunctionLength(
		func,
		1 + (adjustedLength > 0 ? adjustedLength : 0),
		true
	);
};

if ($defineProperty) {
	$defineProperty(module.exports, 'apply', { value: applyBind });
} else {
	module.exports.apply = applyBind;
}

},{"call-bind-apply-helpers":7,"call-bind-apply-helpers/applyBind":4,"es-define-property":65,"set-function-length":200}],11:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var callBindBasic = require('call-bind-apply-helpers');

/** @type {(thisArg: string, searchString: string, position?: number) => number} */
var $indexOf = callBindBasic([GetIntrinsic('%String.prototype.indexOf%')]);

/** @type {import('.')} */
module.exports = function callBoundIntrinsic(name, allowMissing) {
	/* eslint no-extra-parens: 0 */

	var intrinsic = /** @type {(this: unknown, ...args: unknown[]) => unknown} */ (GetIntrinsic(name, !!allowMissing));
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
		return callBindBasic(/** @type {const} */ ([intrinsic]));
	}
	return intrinsic;
};

},{"call-bind-apply-helpers":7,"get-intrinsic":148}],12:[function(require,module,exports){
'use strict';

var $defineProperty = require('es-define-property');

var $SyntaxError = require('es-errors/syntax');
var $TypeError = require('es-errors/type');

var gopd = require('gopd');

/** @type {import('.')} */
module.exports = function defineDataProperty(
	obj,
	property,
	value
) {
	if (!obj || (typeof obj !== 'object' && typeof obj !== 'function')) {
		throw new $TypeError('`obj` must be an object or a function`');
	}
	if (typeof property !== 'string' && typeof property !== 'symbol') {
		throw new $TypeError('`property` must be a string or a symbol`');
	}
	if (arguments.length > 3 && typeof arguments[3] !== 'boolean' && arguments[3] !== null) {
		throw new $TypeError('`nonEnumerable`, if provided, must be a boolean or null');
	}
	if (arguments.length > 4 && typeof arguments[4] !== 'boolean' && arguments[4] !== null) {
		throw new $TypeError('`nonWritable`, if provided, must be a boolean or null');
	}
	if (arguments.length > 5 && typeof arguments[5] !== 'boolean' && arguments[5] !== null) {
		throw new $TypeError('`nonConfigurable`, if provided, must be a boolean or null');
	}
	if (arguments.length > 6 && typeof arguments[6] !== 'boolean') {
		throw new $TypeError('`loose`, if provided, must be a boolean');
	}

	var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
	var nonWritable = arguments.length > 4 ? arguments[4] : null;
	var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
	var loose = arguments.length > 6 ? arguments[6] : false;

	/* @type {false | TypedPropertyDescriptor<unknown>} */
	var desc = !!gopd && gopd(obj, property);

	if ($defineProperty) {
		$defineProperty(obj, property, {
			configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
			enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
			value: value,
			writable: nonWritable === null && desc ? desc.writable : !nonWritable
		});
	} else if (loose || (!nonEnumerable && !nonWritable && !nonConfigurable)) {
		// must fall back to [[Set]], and was not explicitly asked to make non-enumerable, non-writable, or non-configurable
		obj[property] = value; // eslint-disable-line no-param-reassign
	} else {
		throw new $SyntaxError('This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.');
	}
};

},{"es-define-property":65,"es-errors/syntax":70,"es-errors/type":71,"gopd":157}],13:[function(require,module,exports){
'use strict';

var keys = require('object-keys');
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var defineDataProperty = require('define-data-property');

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var supportsDescriptors = require('has-property-descriptors')();

var defineProperty = function (object, name, value, predicate) {
	if (name in object) {
		if (predicate === true) {
			if (object[name] === value) {
				return;
			}
		} else if (!isFunction(predicate) || !predicate()) {
			return;
		}
	}

	if (supportsDescriptors) {
		defineDataProperty(object, name, value, true);
	} else {
		defineDataProperty(object, name, value);
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = concat.call(props, Object.getOwnPropertySymbols(map));
	}
	for (var i = 0; i < props.length; i += 1) {
		defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
	}
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;

},{"define-data-property":12,"has-property-descriptors":159,"object-keys":15}],14:[function(require,module,exports){
'use strict';

var keysShim;
if (!Object.keys) {
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var isArgs = require('./isArguments'); // eslint-disable-line global-require
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$applicationCache: true,
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$onmozfullscreenchange: true,
		$onmozfullscreenerror: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};

	keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}

		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
}
module.exports = keysShim;

},{"./isArguments":16}],15:[function(require,module,exports){
'use strict';

var slice = Array.prototype.slice;
var isArgs = require('./isArguments');

var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) { return origKeys(o); } : require('./implementation');

var originalKeys = Object.keys;

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			var args = Object.keys(arguments);
			return args && args.length === arguments.length;
		}(1, 2));
		if (!keysWorksWithArguments) {
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				}
				return originalKeys(object);
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;

},{"./implementation":14,"./isArguments":16}],16:[function(require,module,exports){
'use strict';

var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};

},{}],17:[function(require,module,exports){
'use strict';

var callBind = require('call-bind-apply-helpers');
var gOPD = require('gopd');

var hasProtoAccessor;
try {
	// eslint-disable-next-line no-extra-parens, no-proto
	hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */ ([]).__proto__ === Array.prototype;
} catch (e) {
	if (!e || typeof e !== 'object' || !('code' in e) || e.code !== 'ERR_PROTO_ACCESS') {
		throw e;
	}
}

// eslint-disable-next-line no-extra-parens
var desc = !!hasProtoAccessor && gOPD && gOPD(Object.prototype, /** @type {keyof typeof Object.prototype} */ ('__proto__'));

var $Object = Object;
var $getPrototypeOf = $Object.getPrototypeOf;

/** @type {import('./get')} */
module.exports = desc && typeof desc.get === 'function'
	? callBind([desc.get])
	: typeof $getPrototypeOf === 'function'
		? /** @type {import('./get')} */ function getDunder(value) {
			// eslint-disable-next-line eqeqeq
			return $getPrototypeOf(value == null ? value : $Object(value));
		}
		: false;

},{"call-bind-apply-helpers":7,"gopd":157}],18:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');

var hasOwn = require('hasown');

var IsPropertyKey = require('./IsPropertyKey');
var Type = require('./Type');

// https://262.ecma-international.org/6.0/#sec-hasownproperty

module.exports = function HasOwnProperty(O, P) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: `O` must be an Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: `P` must be a Property Key');
	}
	return hasOwn(O, P);
};

},{"./IsPropertyKey":20,"./Type":21,"es-errors/type":71,"hasown":164}],19:[function(require,module,exports){
'use strict';

// http://262.ecma-international.org/5.1/#sec-9.11

module.exports = require('is-callable');

},{"is-callable":169}],20:[function(require,module,exports){
'use strict';

// https://262.ecma-international.org/6.0/#sec-ispropertykey

module.exports = function IsPropertyKey(argument) {
	return typeof argument === 'string' || typeof argument === 'symbol';
};

},{}],21:[function(require,module,exports){
'use strict';

var ES5Type = require('../5/Type');

// https://262.ecma-international.org/11.0/#sec-ecmascript-data-types-and-values

module.exports = function Type(x) {
	if (typeof x === 'symbol') {
		return 'Symbol';
	}
	if (typeof x === 'bigint') {
		return 'BigInt';
	}
	return ES5Type(x);
};

},{"../5/Type":52}],22:[function(require,module,exports){
'use strict';

var CodePointAt = require('./CodePointAt');

var isInteger = require('../helpers/isInteger');
var MAX_SAFE_INTEGER = require('../helpers/maxSafeInteger');

var $TypeError = require('es-errors/type');

// https://262.ecma-international.org/12.0/#sec-advancestringindex

module.exports = function AdvanceStringIndex(S, index, unicode) {
	if (typeof S !== 'string') {
		throw new $TypeError('Assertion failed: `S` must be a String');
	}
	if (!isInteger(index) || index < 0 || index > MAX_SAFE_INTEGER) {
		throw new $TypeError('Assertion failed: `length` must be an integer >= 0 and <= 2**53');
	}
	if (typeof unicode !== 'boolean') {
		throw new $TypeError('Assertion failed: `unicode` must be a Boolean');
	}
	if (!unicode) {
		return index + 1;
	}
	var length = S.length;
	if ((index + 1) >= length) {
		return index + 1;
	}
	var cp = CodePointAt(S, index);
	return index + cp['[[CodeUnitCount]]'];
};

},{"../helpers/isInteger":58,"../helpers/maxSafeInteger":63,"./CodePointAt":24,"es-errors/type":71}],23:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');
var callBound = require('call-bind/callBound');

var $TypeError = require('es-errors/type');

var IsArray = require('./IsArray');

var $apply = GetIntrinsic('%Reflect.apply%', true) || callBound('Function.prototype.apply');

// https://262.ecma-international.org/6.0/#sec-call

module.exports = function Call(F, V) {
	var argumentsList = arguments.length > 2 ? arguments[2] : [];
	if (!IsArray(argumentsList)) {
		throw new $TypeError('Assertion failed: optional `argumentsList`, if provided, must be a List');
	}
	return $apply(F, V, argumentsList);
};

},{"./IsArray":30,"call-bind/callBound":9,"es-errors/type":71,"get-intrinsic":148}],24:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');
var callBound = require('call-bind/callBound');
var isLeadingSurrogate = require('../helpers/isLeadingSurrogate');
var isTrailingSurrogate = require('../helpers/isTrailingSurrogate');

var UTF16SurrogatePairToCodePoint = require('./UTF16SurrogatePairToCodePoint');

var $charAt = callBound('String.prototype.charAt');
var $charCodeAt = callBound('String.prototype.charCodeAt');

// https://262.ecma-international.org/12.0/#sec-codepointat

module.exports = function CodePointAt(string, position) {
	if (typeof string !== 'string') {
		throw new $TypeError('Assertion failed: `string` must be a String');
	}
	var size = string.length;
	if (position < 0 || position >= size) {
		throw new $TypeError('Assertion failed: `position` must be >= 0, and < the length of `string`');
	}
	var first = $charCodeAt(string, position);
	var cp = $charAt(string, position);
	var firstIsLeading = isLeadingSurrogate(first);
	var firstIsTrailing = isTrailingSurrogate(first);
	if (!firstIsLeading && !firstIsTrailing) {
		return {
			'[[CodePoint]]': cp,
			'[[CodeUnitCount]]': 1,
			'[[IsUnpairedSurrogate]]': false
		};
	}
	if (firstIsTrailing || (position + 1 === size)) {
		return {
			'[[CodePoint]]': cp,
			'[[CodeUnitCount]]': 1,
			'[[IsUnpairedSurrogate]]': true
		};
	}
	var second = $charCodeAt(string, position + 1);
	if (!isTrailingSurrogate(second)) {
		return {
			'[[CodePoint]]': cp,
			'[[CodeUnitCount]]': 1,
			'[[IsUnpairedSurrogate]]': true
		};
	}

	return {
		'[[CodePoint]]': UTF16SurrogatePairToCodePoint(first, second),
		'[[CodeUnitCount]]': 2,
		'[[IsUnpairedSurrogate]]': false
	};
};

},{"../helpers/isLeadingSurrogate":59,"../helpers/isTrailingSurrogate":62,"./UTF16SurrogatePairToCodePoint":49,"call-bind/callBound":9,"es-errors/type":71}],25:[function(require,module,exports){
'use strict';

var $SyntaxError = require('es-errors/syntax');

var SLOT = require('internal-slot');

// https://262.ecma-international.org/7.0/#sec-completion-record-specification-type

var CompletionRecord = function CompletionRecord(type, value) {
	if (!(this instanceof CompletionRecord)) {
		return new CompletionRecord(type, value);
	}
	if (type !== 'normal' && type !== 'break' && type !== 'continue' && type !== 'return' && type !== 'throw') {
		throw new $SyntaxError('Assertion failed: `type` must be one of "normal", "break", "continue", "return", or "throw"');
	}
	SLOT.set(this, '[[Type]]', type);
	SLOT.set(this, '[[Value]]', value);
	// [[Target]] slot?
};

CompletionRecord.prototype.type = function Type() {
	return SLOT.get(this, '[[Type]]');
};

CompletionRecord.prototype.value = function Value() {
	return SLOT.get(this, '[[Value]]');
};

CompletionRecord.prototype['?'] = function ReturnIfAbrupt() {
	var type = SLOT.get(this, '[[Type]]');
	var value = SLOT.get(this, '[[Value]]');

	if (type === 'normal') {
		return value;
	}
	if (type === 'throw') {
		throw value;
	}
	throw new $SyntaxError('Completion Record is not of type "normal" or "throw": other types not supported');
};

CompletionRecord.prototype['!'] = function assert() {
	var type = SLOT.get(this, '[[Type]]');

	if (type !== 'normal') {
		throw new $SyntaxError('Assertion failed: Completion Record is not of type "normal"');
	}
	return SLOT.get(this, '[[Value]]');
};

module.exports = CompletionRecord;

},{"es-errors/syntax":70,"internal-slot":165}],26:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');

// https://262.ecma-international.org/6.0/#sec-createiterresultobject

module.exports = function CreateIterResultObject(value, done) {
	if (typeof done !== 'boolean') {
		throw new $TypeError('Assertion failed: Type(done) is not Boolean');
	}
	return {
		value: value,
		done: done
	};
};

},{"es-errors/type":71}],27:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');

var inspect = require('object-inspect');

var IsPropertyKey = require('./IsPropertyKey');
var Type = require('./Type');

// https://262.ecma-international.org/6.0/#sec-get-o-p

module.exports = function Get(O, P) {
	// 7.3.1.1
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	// 7.3.1.2
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true, got ' + inspect(P));
	}
	// 7.3.1.3
	return O[P];
};

},{"./IsPropertyKey":32,"./Type":48,"es-errors/type":71,"object-inspect":191}],28:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');

var GetV = require('./GetV');
var IsCallable = require('./IsCallable');
var IsPropertyKey = require('./IsPropertyKey');

var inspect = require('object-inspect');

// https://262.ecma-international.org/6.0/#sec-getmethod

module.exports = function GetMethod(O, P) {
	// 7.3.9.1
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}

	// 7.3.9.2
	var func = GetV(O, P);

	// 7.3.9.4
	if (func == null) {
		return void 0;
	}

	// 7.3.9.5
	if (!IsCallable(func)) {
		throw new $TypeError(inspect(P) + ' is not a function: ' + inspect(func));
	}

	// 7.3.9.6
	return func;
};

},{"./GetV":29,"./IsCallable":31,"./IsPropertyKey":32,"es-errors/type":71,"object-inspect":191}],29:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');

var inspect = require('object-inspect');

var IsPropertyKey = require('./IsPropertyKey');
// var ToObject = require('./ToObject');

// https://262.ecma-international.org/6.0/#sec-getv

module.exports = function GetV(V, P) {
	// 7.3.2.1
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true, got ' + inspect(P));
	}

	// 7.3.2.2-3
	// var O = ToObject(V);

	// 7.3.2.4
	return V[P];
};

},{"./IsPropertyKey":32,"es-errors/type":71,"object-inspect":191}],30:[function(require,module,exports){
'use strict';

// https://262.ecma-international.org/6.0/#sec-isarray
module.exports = require('../helpers/IsArray');

},{"../helpers/IsArray":53}],31:[function(require,module,exports){
arguments[4][19][0].apply(exports,arguments)
},{"dup":19,"is-callable":169}],32:[function(require,module,exports){
arguments[4][20][0].apply(exports,arguments)
},{"dup":20}],33:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');

var Call = require('./Call');
var CompletionRecord = require('./CompletionRecord');
var GetMethod = require('./GetMethod');
var IsCallable = require('./IsCallable');
var Type = require('./Type');

var isIteratorRecord = require('../helpers/records/iterator-record');

// https://262.ecma-international.org/14.0/#sec-iteratorclose

module.exports = function IteratorClose(iteratorRecord, completion) {
	if (!isIteratorRecord(iteratorRecord)) {
		throw new $TypeError('Assertion failed: `iteratorRecord` must be an Iterator Record'); // step 1
	}
	if (Type(iteratorRecord['[[Iterator]]']) !== 'Object') {
		throw new $TypeError('Assertion failed: iteratorRecord.[[Iterator]] must be an Object'); // step 1
	}

	if (!IsCallable(completion) && !(completion instanceof CompletionRecord)) { // step 2
		throw new $TypeError('Assertion failed: completion is not a thunk representing a Completion Record, nor a Completion Record instance');
	}
	var completionThunk = completion instanceof CompletionRecord ? function () { return completion['?'](); } : completion;

	var iterator = iteratorRecord['[[Iterator]]']; // step 3

	var iteratorReturn;
	try {
		iteratorReturn = GetMethod(iterator, 'return'); // step 4
	} catch (e) {
		completionThunk(); // throws if `completion` is a throw completion // step 6
		completionThunk = null; // ensure it's not called twice.
		throw e; // step 7
	}
	if (typeof iteratorReturn === 'undefined') {
		return completionThunk(); // step 5.a - 5.b
	}

	var innerResult;
	try {
		innerResult = Call(iteratorReturn, iterator, []);
	} catch (e) {
		// if we hit here, then "e" is the innerResult completion that needs re-throwing

		completionThunk(); // throws if `completion` is a throw completion // step 6
		completionThunk = null; // ensure it's not called twice.

		// if not, then return the innerResult completion
		throw e; // step 7
	}
	var completionRecord = completionThunk(); // if innerResult worked, then throw if the completion does
	completionThunk = null; // ensure it's not called twice.

	if (Type(innerResult) !== 'Object') {
		throw new $TypeError('iterator .return must return an object');
	}

	return completionRecord;
};

},{"../helpers/records/iterator-record":64,"./Call":23,"./CompletionRecord":25,"./GetMethod":28,"./IsCallable":31,"./Type":48,"es-errors/type":71}],34:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');

var Get = require('./Get');
var ToBoolean = require('./ToBoolean');
var Type = require('./Type');

// https://262.ecma-international.org/6.0/#sec-iteratorcomplete

module.exports = function IteratorComplete(iterResult) {
	if (Type(iterResult) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(iterResult) is not Object');
	}
	return ToBoolean(Get(iterResult, 'done'));
};

},{"./Get":27,"./ToBoolean":43,"./Type":48,"es-errors/type":71}],35:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');

var Call = require('./Call');
var Type = require('./Type');

var isIteratorRecord = require('../helpers/records/iterator-record');

// https://262.ecma-international.org/14.0/#sec-iteratornext

module.exports = function IteratorNext(iteratorRecord) {
	if (!isIteratorRecord(iteratorRecord)) {
		throw new $TypeError('Assertion failed: `iteratorRecord` must be an Iterator Record'); // step 1
	}

	var result;
	if (arguments.length < 2) { // step 1
		result = Call(iteratorRecord['[[NextMethod]]'], iteratorRecord['[[Iterator]]']); // step 1.a
	} else { // step 2
		result = Call(iteratorRecord['[[NextMethod]]'], iteratorRecord['[[Iterator]]'], [arguments[1]]); // step 2.a
	}

	if (Type(result) !== 'Object') {
		throw new $TypeError('iterator next must return an object'); // step 3
	}
	return result; // step 4
};

},{"../helpers/records/iterator-record":64,"./Call":23,"./Type":48,"es-errors/type":71}],36:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');

var IteratorComplete = require('./IteratorComplete');
var IteratorNext = require('./IteratorNext');

var isIteratorRecord = require('../helpers/records/iterator-record');

// https://262.ecma-international.org/14.0/#sec-iteratorstep

module.exports = function IteratorStep(iteratorRecord) {
	if (!isIteratorRecord(iteratorRecord)) {
		throw new $TypeError('Assertion failed: `iteratorRecord` must be an Iterator Record'); // step 1
	}

	var result = IteratorNext(iteratorRecord); // step 1
	var done = IteratorComplete(result); // step 2
	return done === true ? false : result; // steps 3-4
};


},{"../helpers/records/iterator-record":64,"./IteratorComplete":34,"./IteratorNext":35,"es-errors/type":71}],37:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');

var Get = require('./Get');
var IteratorComplete = require('./IteratorComplete');
var IteratorNext = require('./IteratorNext');

var isIteratorRecord = require('../helpers/records/iterator-record');

// https://262.ecma-international.org/15.0/#sec-iteratorstepvalue

module.exports = function IteratorStepValue(iteratorRecord) {
	if (!isIteratorRecord(iteratorRecord)) {
		throw new $TypeError('Assertion failed: `iteratorRecord` must be an Iterator Record');
	}
	/* eslint no-param-reassign: 0 */

	var result;
	try {
		result = IteratorNext(iteratorRecord); // step 1
	} catch (e) { // step 2
		iteratorRecord['[[Done]]'] = true; // step 2.a
		throw e; // step 2.b
	}

	var done;
	try {
		done = IteratorComplete(result); // step 4
	} catch (e) { // step 5
		iteratorRecord['[[Done]]'] = true; // step 5.a
		throw e; // step 5.b
	}

	if (done) { // step 7
		iteratorRecord['[[Done]]'] = true; // step 7.a
		return 'DONE'; // step 7.b
	}

	var value;
	try {
		value = Get(result, 'value'); // step 8
	} catch (e) { // step 9
		iteratorRecord['[[Done]]'] = true; // step 9.a
		throw e; // step 10
	}

	return value; // step 10
};

},{"../helpers/records/iterator-record":64,"./Get":27,"./IteratorComplete":34,"./IteratorNext":35,"es-errors/type":71}],38:[function(require,module,exports){
'use strict';

var CompletionRecord = require('./CompletionRecord');

// https://262.ecma-international.org/6.0/#sec-normalcompletion

module.exports = function NormalCompletion(value) {
	return new CompletionRecord('normal', value);
};

},{"./CompletionRecord":25}],39:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');

var Get = require('./Get');
var IsCallable = require('./IsCallable');
var Type = require('./Type');

// https://262.ecma-international.org/6.0/#sec-ordinaryhasinstance

module.exports = function OrdinaryHasInstance(C, O) {
	if (!IsCallable(C)) {
		return false;
	}
	if (Type(O) !== 'Object') {
		return false;
	}
	var P = Get(C, 'prototype');
	if (Type(P) !== 'Object') {
		throw new $TypeError('OrdinaryHasInstance called on an object with an invalid prototype property.');
	}
	return O instanceof C;
};

},{"./Get":27,"./IsCallable":31,"./Type":48,"es-errors/type":71}],40:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var $ObjectCreate = GetIntrinsic('%Object.create%', true);
var $TypeError = require('es-errors/type');
var $SyntaxError = require('es-errors/syntax');

var IsArray = require('./IsArray');
var Type = require('./Type');

var forEach = require('../helpers/forEach');

var SLOT = require('internal-slot');

var hasProto = require('has-proto')();

// https://262.ecma-international.org/11.0/#sec-objectcreate

module.exports = function OrdinaryObjectCreate(proto) {
	if (proto !== null && Type(proto) !== 'Object') {
		throw new $TypeError('Assertion failed: `proto` must be null or an object');
	}
	var additionalInternalSlotsList = arguments.length < 2 ? [] : arguments[1];
	if (!IsArray(additionalInternalSlotsList)) {
		throw new $TypeError('Assertion failed: `additionalInternalSlotsList` must be an Array');
	}

	// var internalSlotsList = ['[[Prototype]]', '[[Extensible]]']; // step 1
	// internalSlotsList.push(...additionalInternalSlotsList); // step 2
	// var O = MakeBasicObject(internalSlotsList); // step 3
	// setProto(O, proto); // step 4
	// return O; // step 5

	var O;
	if ($ObjectCreate) {
		O = $ObjectCreate(proto);
	} else if (hasProto) {
		O = { __proto__: proto };
	} else {
		if (proto === null) {
			throw new $SyntaxError('native Object.create support is required to create null objects');
		}
		var T = function T() {};
		T.prototype = proto;
		O = new T();
	}

	if (additionalInternalSlotsList.length > 0) {
		forEach(additionalInternalSlotsList, function (slot) {
			SLOT.set(O, slot, void undefined);
		});
	}

	return O;
};

},{"../helpers/forEach":55,"./IsArray":30,"./Type":48,"es-errors/syntax":70,"es-errors/type":71,"get-intrinsic":148,"has-proto":160,"internal-slot":165}],41:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var $Number = GetIntrinsic('%Number%');
var $RegExp = GetIntrinsic('%RegExp%');
var $TypeError = require('es-errors/type');
var $parseInteger = GetIntrinsic('%parseInt%');

var callBound = require('call-bind/callBound');
var regexTester = require('safe-regex-test');

var $strSlice = callBound('String.prototype.slice');
var isBinary = regexTester(/^0b[01]+$/i);
var isOctal = regexTester(/^0o[0-7]+$/i);
var isInvalidHexLiteral = regexTester(/^[-+]0x[0-9a-f]+$/i);
var nonWS = ['\u0085', '\u200b', '\ufffe'].join('');
var nonWSregex = new $RegExp('[' + nonWS + ']', 'g');
var hasNonWS = regexTester(nonWSregex);

var $trim = require('string.prototype.trim');

// https://262.ecma-international.org/13.0/#sec-stringtonumber

module.exports = function StringToNumber(argument) {
	if (typeof argument !== 'string') {
		throw new $TypeError('Assertion failed: `argument` is not a String');
	}
	if (isBinary(argument)) {
		return $Number($parseInteger($strSlice(argument, 2), 2));
	}
	if (isOctal(argument)) {
		return $Number($parseInteger($strSlice(argument, 2), 8));
	}
	if (hasNonWS(argument) || isInvalidHexLiteral(argument)) {
		return NaN;
	}
	var trimmed = $trim(argument);
	if (trimmed !== argument) {
		return StringToNumber(trimmed);
	}
	return $Number(argument);
};

},{"call-bind/callBound":9,"es-errors/type":71,"get-intrinsic":148,"safe-regex-test":199,"string.prototype.trim":207}],42:[function(require,module,exports){
'use strict';

var CompletionRecord = require('./CompletionRecord');

// https://262.ecma-international.org/9.0/#sec-throwcompletion

module.exports = function ThrowCompletion(argument) {
	return new CompletionRecord('throw', argument);
};

},{"./CompletionRecord":25}],43:[function(require,module,exports){
'use strict';

// http://262.ecma-international.org/5.1/#sec-9.2

module.exports = function ToBoolean(value) { return !!value; };

},{}],44:[function(require,module,exports){
'use strict';

var ToNumber = require('./ToNumber');
var truncate = require('./truncate');

var $isNaN = require('../helpers/isNaN');
var $isFinite = require('../helpers/isFinite');

// https://262.ecma-international.org/14.0/#sec-tointegerorinfinity

module.exports = function ToIntegerOrInfinity(value) {
	var number = ToNumber(value);
	if ($isNaN(number) || number === 0) { return 0; }
	if (!$isFinite(number)) { return number; }
	return truncate(number);
};

},{"../helpers/isFinite":57,"../helpers/isNaN":60,"./ToNumber":45,"./truncate":51}],45:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var $TypeError = require('es-errors/type');
var $Number = GetIntrinsic('%Number%');
var isPrimitive = require('../helpers/isPrimitive');

var ToPrimitive = require('./ToPrimitive');
var StringToNumber = require('./StringToNumber');

// https://262.ecma-international.org/13.0/#sec-tonumber

module.exports = function ToNumber(argument) {
	var value = isPrimitive(argument) ? argument : ToPrimitive(argument, $Number);
	if (typeof value === 'symbol') {
		throw new $TypeError('Cannot convert a Symbol value to a number');
	}
	if (typeof value === 'bigint') {
		throw new $TypeError('Conversion from \'BigInt\' to \'number\' is not allowed.');
	}
	if (typeof value === 'string') {
		return StringToNumber(value);
	}
	return $Number(value);
};

},{"../helpers/isPrimitive":61,"./StringToNumber":41,"./ToPrimitive":46,"es-errors/type":71,"get-intrinsic":148}],46:[function(require,module,exports){
'use strict';

var toPrimitive = require('es-to-primitive/es2015');

// https://262.ecma-international.org/6.0/#sec-toprimitive

module.exports = function ToPrimitive(input) {
	if (arguments.length > 1) {
		return toPrimitive(input, arguments[1]);
	}
	return toPrimitive(input);
};

},{"es-to-primitive/es2015":138}],47:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var $String = GetIntrinsic('%String%');
var $TypeError = require('es-errors/type');

// https://262.ecma-international.org/6.0/#sec-tostring

module.exports = function ToString(argument) {
	if (typeof argument === 'symbol') {
		throw new $TypeError('Cannot convert a Symbol value to a string');
	}
	return $String(argument);
};

},{"es-errors/type":71,"get-intrinsic":148}],48:[function(require,module,exports){
arguments[4][21][0].apply(exports,arguments)
},{"../5/Type":52,"dup":21}],49:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var $TypeError = require('es-errors/type');
var $fromCharCode = GetIntrinsic('%String.fromCharCode%');

var isLeadingSurrogate = require('../helpers/isLeadingSurrogate');
var isTrailingSurrogate = require('../helpers/isTrailingSurrogate');

// https://tc39.es/ecma262/2020/#sec-utf16decodesurrogatepair

module.exports = function UTF16SurrogatePairToCodePoint(lead, trail) {
	if (!isLeadingSurrogate(lead) || !isTrailingSurrogate(trail)) {
		throw new $TypeError('Assertion failed: `lead` must be a leading surrogate char code, and `trail` must be a trailing surrogate char code');
	}
	// var cp = (lead - 0xD800) * 0x400 + (trail - 0xDC00) + 0x10000;
	return $fromCharCode(lead) + $fromCharCode(trail);
};

},{"../helpers/isLeadingSurrogate":59,"../helpers/isTrailingSurrogate":62,"es-errors/type":71,"get-intrinsic":148}],50:[function(require,module,exports){
'use strict';

// var modulo = require('./modulo');
var $floor = Math.floor;

// http://262.ecma-international.org/11.0/#eqn-floor

module.exports = function floor(x) {
	// return x - modulo(x, 1);
	if (typeof x === 'bigint') {
		return x;
	}
	return $floor(x);
};

},{}],51:[function(require,module,exports){
'use strict';

var floor = require('./floor');

var $TypeError = require('es-errors/type');

// https://262.ecma-international.org/14.0/#eqn-truncate

module.exports = function truncate(x) {
	if (typeof x !== 'number' && typeof x !== 'bigint') {
		throw new $TypeError('argument must be a Number or a BigInt');
	}
	var result = x < 0 ? -floor(-x) : floor(x);
	return result === 0 ? 0 : result; // in the spec, these are math values, so we filter out -0 here
};

},{"./floor":50,"es-errors/type":71}],52:[function(require,module,exports){
'use strict';

// https://262.ecma-international.org/5.1/#sec-8

module.exports = function Type(x) {
	if (x === null) {
		return 'Null';
	}
	if (typeof x === 'undefined') {
		return 'Undefined';
	}
	if (typeof x === 'function' || typeof x === 'object') {
		return 'Object';
	}
	if (typeof x === 'number') {
		return 'Number';
	}
	if (typeof x === 'boolean') {
		return 'Boolean';
	}
	if (typeof x === 'string') {
		return 'String';
	}
};

},{}],53:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var $Array = GetIntrinsic('%Array%');

// eslint-disable-next-line global-require
var toStr = !$Array.isArray && require('call-bind/callBound')('Object.prototype.toString');

module.exports = $Array.isArray || function IsArray(argument) {
	return toStr(argument) === '[object Array]';
};

},{"call-bind/callBound":9,"get-intrinsic":148}],54:[function(require,module,exports){
'use strict';

module.exports = function every(array, predicate) {
	for (var i = 0; i < array.length; i += 1) {
		if (!predicate(array[i], i, array)) {
			return false;
		}
	}
	return true;
};

},{}],55:[function(require,module,exports){
'use strict';

module.exports = function forEach(array, callback) {
	for (var i = 0; i < array.length; i += 1) {
		callback(array[i], i, array); // eslint-disable-line callback-return
	}
};

},{}],56:[function(require,module,exports){
'use strict';

var hasSymbols = require('has-symbols')();
var GetIntrinsic = require('get-intrinsic');
var callBound = require('call-bind/callBound');
var isString = require('is-string');

var $iterator = GetIntrinsic('%Symbol.iterator%', true);
var $stringSlice = callBound('String.prototype.slice');
var $String = GetIntrinsic('%String%');

module.exports = function getIteratorMethod(ES, iterable) {
	var usingIterator;
	if (hasSymbols) {
		usingIterator = ES.GetMethod(iterable, $iterator);
	} else if (ES.IsArray(iterable)) {
		usingIterator = function () {
			var i = -1;
			var arr = this; // eslint-disable-line no-invalid-this
			return {
				next: function () {
					i += 1;
					return {
						done: i >= arr.length,
						value: arr[i]
					};
				}
			};
		};
	} else if (isString(iterable)) {
		usingIterator = function () {
			var i = 0;
			return {
				next: function () {
					var nextIndex = ES.AdvanceStringIndex($String(iterable), i, true);
					var value = $stringSlice(iterable, i, nextIndex);
					i = nextIndex;
					return {
						done: nextIndex > iterable.length,
						value: value
					};
				}
			};
		};
	}
	return usingIterator;
};

},{"call-bind/callBound":9,"get-intrinsic":148,"has-symbols":161,"is-string":177}],57:[function(require,module,exports){
'use strict';

var $isNaN = require('./isNaN');

module.exports = function (x) { return (typeof x === 'number' || typeof x === 'bigint') && !$isNaN(x) && x !== Infinity && x !== -Infinity; };

},{"./isNaN":60}],58:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var $abs = GetIntrinsic('%Math.abs%');
var $floor = GetIntrinsic('%Math.floor%');

var $isNaN = require('./isNaN');
var $isFinite = require('./isFinite');

module.exports = function isInteger(argument) {
	if (typeof argument !== 'number' || $isNaN(argument) || !$isFinite(argument)) {
		return false;
	}
	var absValue = $abs(argument);
	return $floor(absValue) === absValue;
};


},{"./isFinite":57,"./isNaN":60,"get-intrinsic":148}],59:[function(require,module,exports){
'use strict';

module.exports = function isLeadingSurrogate(charCode) {
	return typeof charCode === 'number' && charCode >= 0xD800 && charCode <= 0xDBFF;
};

},{}],60:[function(require,module,exports){
'use strict';

module.exports = Number.isNaN || function isNaN(a) {
	return a !== a;
};

},{}],61:[function(require,module,exports){
'use strict';

module.exports = function isPrimitive(value) {
	return value === null || (typeof value !== 'function' && typeof value !== 'object');
};

},{}],62:[function(require,module,exports){
'use strict';

module.exports = function isTrailingSurrogate(charCode) {
	return typeof charCode === 'number' && charCode >= 0xDC00 && charCode <= 0xDFFF;
};

},{}],63:[function(require,module,exports){
'use strict';

module.exports = Number.MAX_SAFE_INTEGER || 9007199254740991; // Math.pow(2, 53) - 1;

},{}],64:[function(require,module,exports){
'use strict';

var hasOwn = require('hasown');

module.exports = function isIteratorRecord(value) {
	return !!value
		&& typeof value === 'object'
		&& hasOwn(value, '[[Iterator]]')
		&& hasOwn(value, '[[NextMethod]]')
		&& typeof value['[[NextMethod]]'] === 'function'
		&& hasOwn(value, '[[Done]]')
		&& typeof value['[[Done]]'] === 'boolean';
};

},{"hasown":164}],65:[function(require,module,exports){
'use strict';

/** @type {import('.')} */
var $defineProperty = Object.defineProperty || false;
if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = false;
	}
}

module.exports = $defineProperty;

},{}],66:[function(require,module,exports){
'use strict';

/** @type {import('./eval')} */
module.exports = EvalError;

},{}],67:[function(require,module,exports){
'use strict';

/** @type {import('.')} */
module.exports = Error;

},{}],68:[function(require,module,exports){
'use strict';

/** @type {import('./range')} */
module.exports = RangeError;

},{}],69:[function(require,module,exports){
'use strict';

/** @type {import('./ref')} */
module.exports = ReferenceError;

},{}],70:[function(require,module,exports){
'use strict';

/** @type {import('./syntax')} */
module.exports = SyntaxError;

},{}],71:[function(require,module,exports){
'use strict';

/** @type {import('./type')} */
module.exports = TypeError;

},{}],72:[function(require,module,exports){
'use strict';

/** @type {import('./uri')} */
module.exports = URIError;

},{}],73:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');

var GetIteratorFlattenable = require('../aos/GetIteratorFlattenable');
var OrdinaryHasInstance = require('es-abstract/2024/OrdinaryHasInstance');
var OrdinaryObjectCreate = require('es-abstract/2024/OrdinaryObjectCreate');

var $Iterator = require('../Iterator/polyfill')();
var $WrapForValidIteratorPrototype = require('../WrapForValidIteratorPrototype');

var SLOT = require('internal-slot');

module.exports = function from(O) {
	if (this instanceof from) {
		throw new $TypeError('`Iterator.from` is not a constructor');
	}

	var iteratorRecord = GetIteratorFlattenable(O, 'iterate-strings'); // step 1

	var hasInstance = OrdinaryHasInstance($Iterator, iteratorRecord['[[Iterator]]']); // step 2

	if (hasInstance) { // step 3
		return iteratorRecord['[[Iterator]]']; // step 3.a
	}

	var wrapper = OrdinaryObjectCreate($WrapForValidIteratorPrototype); // , ['[[Iterated]]']); // step 4

	SLOT.set(wrapper, '[[Iterated]]', iteratorRecord); // step 5

	return wrapper; // step 6
};

},{"../Iterator/polyfill":124,"../WrapForValidIteratorPrototype":127,"../aos/GetIteratorFlattenable":134,"es-abstract/2024/OrdinaryHasInstance":39,"es-abstract/2024/OrdinaryObjectCreate":40,"es-errors/type":71,"internal-slot":165}],74:[function(require,module,exports){
'use strict';

var callBind = require('call-bind');
var define = require('define-properties');

var implementation = require('./implementation');
var getPolyfill = require('./polyfill');
var shim = require('./shim');

var bound = callBind(getPolyfill(), null);

define(bound, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = bound;

},{"./implementation":73,"./polyfill":75,"./shim":76,"call-bind":10,"define-properties":13}],75:[function(require,module,exports){
'use strict';

var implementation = require('./implementation');

var $Iterator = require('../Iterator');

module.exports = function getPolyfill() {
	return typeof $Iterator.from === 'function' ? $Iterator.from : implementation;
};

},{"../Iterator":123,"./implementation":73}],76:[function(require,module,exports){
'use strict';

var getPolyfill = require('./polyfill');
var define = require('define-properties');

var getIteratorPolyfill = require('../Iterator/polyfill');

module.exports = function shimIteratorFrom() {
	var $Iterator = getIteratorPolyfill();
	var polyfill = getPolyfill();
	define(
		$Iterator,
		{ from: polyfill },
		{ from: function () { return $Iterator.from !== polyfill; } }
	);

	return polyfill;
};

},{"../Iterator/polyfill":124,"./polyfill":75,"define-properties":13}],77:[function(require,module,exports){
'use strict';

var $RangeError = require('es-errors/range');
var $TypeError = require('es-errors/type');

var CompletionRecord = require('es-abstract/2024/CompletionRecord');
var CreateIteratorFromClosure = require('../aos/CreateIteratorFromClosure');
var GetIteratorDirect = require('../aos/GetIteratorDirect');
var IteratorClose = require('es-abstract/2024/IteratorClose');
var IteratorStep = require('es-abstract/2024/IteratorStep');
var IteratorStepValue = require('es-abstract/2024/IteratorStepValue');
var ThrowCompletion = require('es-abstract/2024/ThrowCompletion');
var ToIntegerOrInfinity = require('es-abstract/2024/ToIntegerOrInfinity');
var ToNumber = require('es-abstract/2024/ToNumber');
var Type = require('es-abstract/2024/Type');

var iterHelperProto = require('../IteratorHelperPrototype');

var isNaN = require('es-abstract/helpers/isNaN');

var SLOT = require('internal-slot');

module.exports = function drop(limit) {
	if (this instanceof drop) {
		throw new $TypeError('`drop` is not a constructor');
	}

	var O = this; // step 1
	if (Type(O) !== 'Object') {
		throw new $TypeError('`this` value must be an Object'); // step 2
	}

	var numLimit = ToNumber(limit); // step 2
	if (isNaN(numLimit)) {
		throw new $RangeError('`limit` must be a non-NaN number'); // step 3
	}

	var iterated = GetIteratorDirect(O); // step 4

	var integerLimit = ToIntegerOrInfinity(numLimit); // step 4
	if (integerLimit < 0) {
		throw new $RangeError('`limit` must be a >= 0'); // step 5
	}

	var closeIfAbrupt = function (abruptCompletion) {
		if (!(abruptCompletion instanceof CompletionRecord)) {
			throw new $TypeError('`abruptCompletion` must be a Completion Record');
		}
		IteratorClose(
			iterated,
			abruptCompletion
		);
	};

	var sentinel = {};
	var remaining = integerLimit; // step 6.a
	var closure = function () { // step 6
		var next;
		while (remaining > 0) { // step 6.b
			if (remaining !== Infinity) { // step 6.b.i
				remaining -= 1; // step 6.b.i.1
			}

			next = IteratorStep(iterated); // step 6.b.ii
			if (!next) {
				// return void undefined; // step 6.b.iii
				return sentinel;
			}
		}
		// while (true) { // step 6.c
		try {
			var value = IteratorStepValue(iterated); // step 6.b.i
			if (iterated['[[Done]]']) {
				return sentinel; // step 6.b.ii
			}
			return value;
		} catch (e) {
			// close iterator // step 6.c.icv
			closeIfAbrupt(ThrowCompletion(e));
			throw e;
		}
		// }
		// return void undefined;
	};
	SLOT.set(closure, '[[Sentinel]]', sentinel); // for the userland implementation
	SLOT.set(closure, '[[CloseIfAbrupt]]', closeIfAbrupt); // for the userland implementation

	var result = CreateIteratorFromClosure(closure, 'Iterator Helper', iterHelperProto, ['[[UnderlyingIterator]]']); // step 4

	SLOT.set(result, '[[UnderlyingIterator]]', iterated); // step 5

	return result; // step 6
};

},{"../IteratorHelperPrototype":126,"../aos/CreateIteratorFromClosure":128,"../aos/GetIteratorDirect":133,"es-abstract/2024/CompletionRecord":25,"es-abstract/2024/IteratorClose":33,"es-abstract/2024/IteratorStep":36,"es-abstract/2024/IteratorStepValue":37,"es-abstract/2024/ThrowCompletion":42,"es-abstract/2024/ToIntegerOrInfinity":44,"es-abstract/2024/ToNumber":45,"es-abstract/2024/Type":48,"es-abstract/helpers/isNaN":60,"es-errors/range":68,"es-errors/type":71,"internal-slot":165}],78:[function(require,module,exports){
'use strict';

var define = require('define-properties');
var callBind = require('call-bind');

var implementation = require('./implementation');
var getPolyfill = require('./polyfill');
var shim = require('./shim');

var polyfill = callBind(getPolyfill());

define(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;

},{"./implementation":77,"./polyfill":79,"./shim":80,"call-bind":10,"define-properties":13}],79:[function(require,module,exports){
'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	if (typeof Iterator === 'function' && typeof Iterator.prototype.drop === 'function') {
		try {
			// https://issues.chromium.org/issues/336839115
			Iterator.prototype.drop.call({ next: null }, 0).next();
		} catch (e) {
			return Iterator.prototype.drop;
		}
	}
	return implementation;
};

},{"./implementation":77}],80:[function(require,module,exports){
'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

var $IteratorPrototype = require('../Iterator.prototype/implementation');

module.exports = function shimIteratorPrototypeDrop() {
	var polyfill = getPolyfill();

	define(
		$IteratorPrototype,
		{ drop: polyfill },
		{ drop: function () { return $IteratorPrototype.drop !== polyfill; } }
	);

	return polyfill;
};

},{"../Iterator.prototype/implementation":121,"./polyfill":79,"define-properties":13}],81:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');

var Call = require('es-abstract/2024/Call');
var GetIteratorDirect = require('../aos/GetIteratorDirect');
var IsCallable = require('es-abstract/2024/IsCallable');
var IteratorClose = require('es-abstract/2024/IteratorClose');
var IteratorStepValue = require('es-abstract/2024/IteratorStepValue');
var NormalCompletion = require('es-abstract/2024/NormalCompletion');
var ThrowCompletion = require('es-abstract/2024/ThrowCompletion');
var ToBoolean = require('es-abstract/2024/ToBoolean');
var Type = require('es-abstract/2024/Type');

module.exports = function every(predicate) {
	if (this instanceof every) {
		throw new $TypeError('`every` is not a constructor');
	}

	var O = this; // step 1
	if (Type(O) !== 'Object') {
		throw new $TypeError('`this` value must be an Object'); // step 2
	}

	if (!IsCallable(predicate)) {
		throw new $TypeError('`predicate` must be a function'); // step 3
	}

	var iterated = GetIteratorDirect(O); // step 4

	var counter = 0; // step 5

	// eslint-disable-next-line no-constant-condition
	while (true) { // step 6
		var value = IteratorStepValue(iterated); // step 6.a
		if (iterated['[[Done]]']) {
			return true; // step 6.b
		}
		var result;
		try {
			result = Call(predicate, void undefined, [value, counter]); // step 6.c
		} catch (e) {
			// close iterator // step 6.d
			IteratorClose(
				iterated,
				ThrowCompletion(e)
			);
		} finally {
			counter += 1; // step 6.f
		}
		if (!ToBoolean(result)) {
			return IteratorClose(
				iterated,
				NormalCompletion(false)
			); // step 6.e
		}
	}
};

},{"../aos/GetIteratorDirect":133,"es-abstract/2024/Call":23,"es-abstract/2024/IsCallable":31,"es-abstract/2024/IteratorClose":33,"es-abstract/2024/IteratorStepValue":37,"es-abstract/2024/NormalCompletion":38,"es-abstract/2024/ThrowCompletion":42,"es-abstract/2024/ToBoolean":43,"es-abstract/2024/Type":48,"es-errors/type":71}],82:[function(require,module,exports){
arguments[4][78][0].apply(exports,arguments)
},{"./implementation":81,"./polyfill":83,"./shim":84,"call-bind":10,"define-properties":13,"dup":78}],83:[function(require,module,exports){
'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	return typeof Iterator === 'function' && typeof Iterator.prototype.every === 'function'
		? Iterator.prototype.every
		: implementation;
};

},{"./implementation":81}],84:[function(require,module,exports){
'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

var $IteratorPrototype = require('../Iterator.prototype/implementation');

module.exports = function shimIteratorPrototypeEvery() {
	var polyfill = getPolyfill();

	define(
		$IteratorPrototype,
		{ every: polyfill },
		{ every: function () { return $IteratorPrototype.every !== polyfill; } }
	);

	return polyfill;
};

},{"../Iterator.prototype/implementation":121,"./polyfill":83,"define-properties":13}],85:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');

var Call = require('es-abstract/2024/Call');
var CompletionRecord = require('es-abstract/2024/CompletionRecord');
var CreateIteratorFromClosure = require('../aos/CreateIteratorFromClosure');
var GetIteratorDirect = require('../aos/GetIteratorDirect');
var IsCallable = require('es-abstract/2024/IsCallable');
var IteratorClose = require('es-abstract/2024/IteratorClose');
var IteratorStepValue = require('es-abstract/2024/IteratorStepValue');
var ThrowCompletion = require('es-abstract/2024/ThrowCompletion');
var ToBoolean = require('es-abstract/2024/ToBoolean');
var Type = require('es-abstract/2024/Type');

var iterHelperProto = require('../IteratorHelperPrototype');

var SLOT = require('internal-slot');

module.exports = function filter(predicate) {
	if (this instanceof filter) {
		throw new $TypeError('`filter` is not a constructor');
	}

	var O = this; // step 1
	if (Type(O) !== 'Object') {
		throw new $TypeError('`this` value must be an Object'); // step 2
	}

	if (!IsCallable(predicate)) {
		throw new $TypeError('`predicate` must be a function'); // step 3
	}

	var iterated = GetIteratorDirect(O); // step 4

	var closeIfAbrupt = function (abruptCompletion) {
		if (!(abruptCompletion instanceof CompletionRecord)) {
			throw new $TypeError('`abruptCompletion` must be a Completion Record');
		}
		IteratorClose(
			iterated,
			abruptCompletion
		);
	};

	var sentinel = {};
	var counter = 0; // step 6.a
	var closure = function () {
		// eslint-disable-next-line no-constant-condition
		while (true) { // step 6.b
			var value = IteratorStepValue(iterated); // step 6.b.i
			if (iterated['[[Done]]']) {
				return sentinel; // step 6.b.ii
			}

			var selected;
			try {
				selected = Call(predicate, void undefined, [value, counter]); // step 6.b.iv
				// yield mapped // step 6.b.vi
				if (ToBoolean(selected)) {
					return value;
				}
			} catch (e) {
				// close iterator // step 6.b.v, 6.b.vii
				closeIfAbrupt(ThrowCompletion(e));
				throw e;
			} finally {
				counter += 1; // step 6.b.viii
			}
		}
	};
	SLOT.set(closure, '[[Sentinel]]', sentinel); // for the userland implementation
	SLOT.set(closure, '[[CloseIfAbrupt]]', closeIfAbrupt); // for the userland implementation

	var result = CreateIteratorFromClosure(closure, 'Iterator Helper', iterHelperProto, ['[[UnderlyingIterator]]']); // step 7

	SLOT.set(result, '[[UnderlyingIterator]]', iterated); // step 8

	return result; // step 9
};

},{"../IteratorHelperPrototype":126,"../aos/CreateIteratorFromClosure":128,"../aos/GetIteratorDirect":133,"es-abstract/2024/Call":23,"es-abstract/2024/CompletionRecord":25,"es-abstract/2024/IsCallable":31,"es-abstract/2024/IteratorClose":33,"es-abstract/2024/IteratorStepValue":37,"es-abstract/2024/ThrowCompletion":42,"es-abstract/2024/ToBoolean":43,"es-abstract/2024/Type":48,"es-errors/type":71,"internal-slot":165}],86:[function(require,module,exports){
arguments[4][78][0].apply(exports,arguments)
},{"./implementation":85,"./polyfill":87,"./shim":88,"call-bind":10,"define-properties":13,"dup":78}],87:[function(require,module,exports){
'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	if (typeof Iterator === 'function' && typeof Iterator.prototype.filter === 'function') {
		try {
			// https://issues.chromium.org/issues/336839115
			Iterator.prototype.filter.call({ next: null }, function () {}).next();
		} catch (e) {
			return Iterator.prototype.filter;
		}
	}
	return implementation;
};

},{"./implementation":85}],88:[function(require,module,exports){
'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

var $IteratorPrototype = require('../Iterator.prototype/implementation');

module.exports = function shimIteratorPrototypeFilter() {
	var polyfill = getPolyfill();

	define(
		$IteratorPrototype,
		{ filter: polyfill },
		{ filter: function () { return $IteratorPrototype.filter !== polyfill; } }
	);

	return polyfill;
};

},{"../Iterator.prototype/implementation":121,"./polyfill":87,"define-properties":13}],89:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');

var Call = require('es-abstract/2024/Call');
var GetIteratorDirect = require('../aos/GetIteratorDirect');
var IsCallable = require('es-abstract/2024/IsCallable');
var IteratorClose = require('es-abstract/2024/IteratorClose');
var IteratorStepValue = require('es-abstract/2024/IteratorStepValue');
var NormalCompletion = require('es-abstract/2024/NormalCompletion');
var ThrowCompletion = require('es-abstract/2024/ThrowCompletion');
var ToBoolean = require('es-abstract/2024/ToBoolean');
var Type = require('es-abstract/2024/Type');

module.exports = function find(predicate) {
	if (this instanceof find) {
		throw new $TypeError('`find` is not a constructor');
	}

	var O = this; // step 1

	if (Type(O) !== 'Object') {
		throw new $TypeError('`this` value must be an Object'); // step 2
	}

	if (!IsCallable(predicate)) {
		throw new $TypeError('`predicate` must be a function'); // step 3
	}

	var iterated = GetIteratorDirect(O); // step 4

	var counter = 0; // step 5

	// eslint-disable-next-line no-constant-condition
	while (true) { // step 6
		var value = IteratorStepValue(iterated); // step 6.a
		if (iterated['[[Done]]']) {
			return void undefined; // step 6.b
		}
		var result;
		try {
			result = Call(predicate, void undefined, [value, counter]); // step 6.c
		} catch (e) {
			// close iterator // step 6.d
			IteratorClose(
				iterated,
				ThrowCompletion(e)
			);
		} finally {
			counter += 1; // step 6.f
		}
		if (ToBoolean(result)) {
			return IteratorClose(
				iterated,
				NormalCompletion(value)
			); // step 6.e
		}
	}
};

},{"../aos/GetIteratorDirect":133,"es-abstract/2024/Call":23,"es-abstract/2024/IsCallable":31,"es-abstract/2024/IteratorClose":33,"es-abstract/2024/IteratorStepValue":37,"es-abstract/2024/NormalCompletion":38,"es-abstract/2024/ThrowCompletion":42,"es-abstract/2024/ToBoolean":43,"es-abstract/2024/Type":48,"es-errors/type":71}],90:[function(require,module,exports){
arguments[4][78][0].apply(exports,arguments)
},{"./implementation":89,"./polyfill":91,"./shim":92,"call-bind":10,"define-properties":13,"dup":78}],91:[function(require,module,exports){
'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	return typeof Iterator === 'function' && typeof Iterator.prototype.find === 'function'
		? Iterator.prototype.find
		: implementation;
};

},{"./implementation":89}],92:[function(require,module,exports){
'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

var $IteratorPrototype = require('../Iterator.prototype/implementation');

module.exports = function shimIteratorPrototypeFind() {
	var polyfill = getPolyfill();

	define(
		$IteratorPrototype,
		{ find: polyfill },
		{ find: function () { return $IteratorPrototype.find !== polyfill; } }
	);

	return polyfill;
};

},{"../Iterator.prototype/implementation":121,"./polyfill":91,"define-properties":13}],93:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');

var Call = require('es-abstract/2024/Call');
var CompletionRecord = require('es-abstract/2024/CompletionRecord');
var CreateIteratorFromClosure = require('../aos/CreateIteratorFromClosure');
var GetIteratorDirect = require('../aos/GetIteratorDirect');
var GetIteratorFlattenable = require('../aos/GetIteratorFlattenable');
var IsCallable = require('es-abstract/2024/IsCallable');
var IteratorClose = require('es-abstract/2024/IteratorClose');
var IteratorStepValue = require('es-abstract/2024/IteratorStepValue');
var ThrowCompletion = require('es-abstract/2024/ThrowCompletion');
var Type = require('es-abstract/2024/Type');

var iterHelperProto = require('../IteratorHelperPrototype');

var SLOT = require('internal-slot');

module.exports = function flatMap(mapper) {
	if (this instanceof flatMap) {
		throw new $TypeError('`flatMap` is not a constructor');
	}

	var O = this; // step 1
	if (Type(O) !== 'Object') {
		throw new $TypeError('`this` value must be an Object'); // step 2
	}

	if (!IsCallable(mapper)) {
		throw new $TypeError('`mapper` must be a function'); // step 3
	}

	var iterated = GetIteratorDirect(O); // step 4

	var sentinel = { sentinel: true };
	var innerIterator = sentinel;

	var closeIfAbrupt = function (abruptCompletion) {
		if (!(abruptCompletion instanceof CompletionRecord)) {
			throw new $TypeError('`abruptCompletion` must be a Completion Record');
		}
		try {
			if (innerIterator !== sentinel) {
				IteratorClose(
					innerIterator,
					abruptCompletion
				);
			}
		} finally {
			innerIterator = sentinel;

			IteratorClose(
				iterated,
				abruptCompletion
			);
		}
	};

	var counter = 0; // step 5.a
	var innerAlive = false;
	var closure = function () {
		// while (true) { // step 5.b
		if (innerIterator === sentinel) {
			var value = IteratorStepValue(iterated); // step 5.b.i
			if (iterated['[[Done]]']) {
				innerAlive = false;
				innerIterator = sentinel;
				// return void undefined; // step 5.b.ii
				return sentinel;
			}
		}

		if (innerIterator === sentinel) {
			innerAlive = true; // step 5.b.viii
			try {
				var mapped = Call(mapper, void undefined, [value, counter]); // step 5.b.iv
				// yield mapped // step 5.b.vi
				innerIterator = GetIteratorFlattenable(mapped, 'reject-strings'); // step 5.b.vi
			} catch (e) {
				innerAlive = false;
				innerIterator = sentinel;
				closeIfAbrupt(ThrowCompletion(e)); // steps 5.b.v, 5.b.vii
			} finally {
				counter += 1; // step 5.b.x
			}
		}
		// while (innerAlive) { // step 5.b.ix
		if (innerAlive) {
			// step 5.b.ix.4
			var innerValue;
			try {
				innerValue = IteratorStepValue(innerIterator); // step 5.b.ix.4.a
			} catch (e) {
				innerAlive = false;
				innerIterator = sentinel;
				closeIfAbrupt(ThrowCompletion(e)); // step 5.b.ix.4.b
			}
			if (innerIterator['[[Done]]']) {
				innerAlive = false;
				innerIterator = sentinel;
				return closure();
			}
			return innerValue; // step 5.b.ix.4.c
		}
		// }
		// return void undefined;
		return sentinel;
	};
	SLOT.set(closure, '[[Sentinel]]', sentinel); // for the userland implementation
	SLOT.set(closure, '[[CloseIfAbrupt]]', closeIfAbrupt); // for the userland implementation

	var result = CreateIteratorFromClosure(closure, 'Iterator Helper', iterHelperProto, ['[[UnderlyingIterator]]']); // step 7

	SLOT.set(result, '[[UnderlyingIterator]]', iterated); // step 8

	return result; // step 9
};

},{"../IteratorHelperPrototype":126,"../aos/CreateIteratorFromClosure":128,"../aos/GetIteratorDirect":133,"../aos/GetIteratorFlattenable":134,"es-abstract/2024/Call":23,"es-abstract/2024/CompletionRecord":25,"es-abstract/2024/IsCallable":31,"es-abstract/2024/IteratorClose":33,"es-abstract/2024/IteratorStepValue":37,"es-abstract/2024/ThrowCompletion":42,"es-abstract/2024/Type":48,"es-errors/type":71,"internal-slot":165}],94:[function(require,module,exports){
arguments[4][78][0].apply(exports,arguments)
},{"./implementation":93,"./polyfill":95,"./shim":96,"call-bind":10,"define-properties":13,"dup":78}],95:[function(require,module,exports){
'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	if (typeof Iterator === 'function' && typeof Iterator.prototype.flatMap === 'function') {
		try {
			// https://issues.chromium.org/issues/336839115
			Iterator.prototype.flatMap.call({ next: null }, function () {}).next();
		} catch (e) {
			return Iterator.prototype.flatMap;
		}
	}
	return implementation;
};

},{"./implementation":93}],96:[function(require,module,exports){
'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

var $IteratorPrototype = require('../Iterator.prototype/implementation');

module.exports = function shimIteratorPrototypeFlatMap() {
	var polyfill = getPolyfill();

	define(
		$IteratorPrototype,
		{ flatMap: polyfill },
		{ flatMap: function () { return $IteratorPrototype.flatMap !== polyfill; } }
	);

	return polyfill;
};

},{"../Iterator.prototype/implementation":121,"./polyfill":95,"define-properties":13}],97:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');

var Call = require('es-abstract/2024/Call');
var GetIteratorDirect = require('../aos/GetIteratorDirect');
var IsCallable = require('es-abstract/2024/IsCallable');
var IteratorClose = require('es-abstract/2024/IteratorClose');
var IteratorStepValue = require('es-abstract/2024/IteratorStepValue');
var ThrowCompletion = require('es-abstract/2024/ThrowCompletion');
var Type = require('es-abstract/2024/Type');

module.exports = function forEach(fn) {
	if (this instanceof forEach) {
		throw new $TypeError('`forEach` is not a constructor');
	}

	var O = this; // step 1
	if (Type(O) !== 'Object') {
		throw new $TypeError('`this` value must be an Object'); // step 2
	}

	if (!IsCallable(fn)) {
		throw new $TypeError('`fn` must be a function'); // step 3
	}

	var iterated = GetIteratorDirect(O); // step 4

	var counter = 0; // step 5

	// eslint-disable-next-line no-constant-condition
	while (true) { // step 6
		var value = IteratorStepValue(iterated); // step 6.a
		if (iterated['[[Done]]']) {
			return void undefined; // step 6.b
		}
		try {
			Call(fn, void undefined, [value, counter]); // step 6.c
		} catch (e) {
			IteratorClose(
				iterated,
				ThrowCompletion(e)
			); // steps 6.d
			throw e;
		} finally {
			counter += 1; // step 6.e
		}
	}
};

},{"../aos/GetIteratorDirect":133,"es-abstract/2024/Call":23,"es-abstract/2024/IsCallable":31,"es-abstract/2024/IteratorClose":33,"es-abstract/2024/IteratorStepValue":37,"es-abstract/2024/ThrowCompletion":42,"es-abstract/2024/Type":48,"es-errors/type":71}],98:[function(require,module,exports){
arguments[4][78][0].apply(exports,arguments)
},{"./implementation":97,"./polyfill":99,"./shim":100,"call-bind":10,"define-properties":13,"dup":78}],99:[function(require,module,exports){
'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	return typeof Iterator === 'function' && typeof Iterator.prototype.forEach === 'function'
		? Iterator.prototype.forEach
		: implementation;
};

},{"./implementation":97}],100:[function(require,module,exports){
'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

var $IteratorPrototype = require('../Iterator.prototype/implementation');

module.exports = function shimIteratorPrototypeForEach() {
	var polyfill = getPolyfill();

	define(
		$IteratorPrototype,
		{ forEach: polyfill },
		{ forEach: function () { return $IteratorPrototype.forEach !== polyfill; } }
	);

	return polyfill;
};

},{"../Iterator.prototype/implementation":121,"./polyfill":99,"define-properties":13}],101:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');

var Call = require('es-abstract/2024/Call');
var CompletionRecord = require('es-abstract/2024/CompletionRecord');
var CreateIteratorFromClosure = require('../aos/CreateIteratorFromClosure');
var GetIteratorDirect = require('../aos/GetIteratorDirect');
var IsCallable = require('es-abstract/2024/IsCallable');
var IteratorClose = require('es-abstract/2024/IteratorClose');
var IteratorStepValue = require('es-abstract/2024/IteratorStepValue');
var ThrowCompletion = require('es-abstract/2024/ThrowCompletion');
var Type = require('es-abstract/2024/Type');

var iterHelperProto = require('../IteratorHelperPrototype');

var SLOT = require('internal-slot');

module.exports = function map(mapper) {
	if (this instanceof map) {
		throw new $TypeError('`map` is not a constructor');
	}

	var O = this; // step 1
	if (Type(O) !== 'Object') {
		throw new $TypeError('`this` value must be an Object'); // step 2
	}

	if (!IsCallable(mapper)) {
		throw new $TypeError('`mapper` must be a function'); // step 3
	}

	var iterated = GetIteratorDirect(O); // step 4

	var closeIfAbrupt = function (abruptCompletion) {
		if (!(abruptCompletion instanceof CompletionRecord)) {
			throw new $TypeError('`abruptCompletion` must be a Completion Record');
		}
		IteratorClose(
			iterated,
			abruptCompletion
		);
	};

	var sentinel = {};
	var counter = 0; // step 6.a
	var closure = function () {
		// while (true) { // step 6.b
		var value = IteratorStepValue(iterated); // step 6.b.i
		if (iterated['[[Done]]']) {
			return sentinel; // step 6.b.ii
		}

		var mapped;
		try {
			mapped = Call(mapper, void undefined, [value, counter]); // step 6.b.iii
			// yield mapped // step 6.b.vi
			return mapped;
		} catch (e) {
			// close iterator // step 6.b.v, 6.b.vii
			closeIfAbrupt(ThrowCompletion(e));
			throw e;
		} finally {
			counter += 1; // step 6.b.viii
		}
		// }
	};
	SLOT.set(closure, '[[Sentinel]]', sentinel); // for the userland implementation
	SLOT.set(closure, '[[CloseIfAbrupt]]', closeIfAbrupt); // for the userland implementation

	var result = CreateIteratorFromClosure(closure, 'Iterator Helper', iterHelperProto, ['[[UnderlyingIterator]]']); // step 7

	SLOT.set(result, '[[UnderlyingIterator]]', iterated); // step 8

	return result; // step 9
};

},{"../IteratorHelperPrototype":126,"../aos/CreateIteratorFromClosure":128,"../aos/GetIteratorDirect":133,"es-abstract/2024/Call":23,"es-abstract/2024/CompletionRecord":25,"es-abstract/2024/IsCallable":31,"es-abstract/2024/IteratorClose":33,"es-abstract/2024/IteratorStepValue":37,"es-abstract/2024/ThrowCompletion":42,"es-abstract/2024/Type":48,"es-errors/type":71,"internal-slot":165}],102:[function(require,module,exports){
arguments[4][78][0].apply(exports,arguments)
},{"./implementation":101,"./polyfill":103,"./shim":104,"call-bind":10,"define-properties":13,"dup":78}],103:[function(require,module,exports){
'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	if (typeof Iterator === 'function' && typeof Iterator.prototype.map === 'function') {
		try {
			// https://issues.chromium.org/issues/336839115
			Iterator.prototype.map.call({ next: null }, function () {}).next();
		} catch (e) {
			return Iterator.prototype.map;
		}
	}
	return implementation;
};

},{"./implementation":101}],104:[function(require,module,exports){
'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

var $IteratorPrototype = require('../Iterator.prototype/implementation');

module.exports = function shimIteratorPrototypeMap() {
	var polyfill = getPolyfill();

	define(
		$IteratorPrototype,
		{ map: polyfill },
		{ map: function () { return $IteratorPrototype.map !== polyfill; } }
	);

	return polyfill;
};

},{"../Iterator.prototype/implementation":121,"./polyfill":103,"define-properties":13}],105:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');

var Call = require('es-abstract/2024/Call');
var GetIteratorDirect = require('../aos/GetIteratorDirect');
var IsCallable = require('es-abstract/2024/IsCallable');
var IteratorClose = require('es-abstract/2024/IteratorClose');
var IteratorStepValue = require('es-abstract/2024/IteratorStepValue');
var ThrowCompletion = require('es-abstract/2024/ThrowCompletion');
var Type = require('es-abstract/2024/Type');

module.exports = function reduce(reducer) {
	if (this instanceof reduce) {
		throw new $TypeError('`reduce` is not a constructor');
	}

	var O = this; // step 1
	if (Type(O) !== 'Object') {
		throw new $TypeError('`this` value must be an Object'); // step 2
	}

	if (!IsCallable(reducer)) {
		throw new $TypeError('`reducer` must be a function'); // step 3
	}

	var iterated = GetIteratorDirect(O); // step 4

	var accumulator;
	var counter;
	if (arguments.length < 2) { // step 6
		accumulator = IteratorStepValue(iterated); // step 6.a
		if (iterated['[[Done]]']) {
			throw new $TypeError('Reduce of empty iterator with no initial value');
		}
		counter = 1;
	} else { // step 7
		accumulator = arguments[1]; // step 7.a
		counter = 0;
	}

	// eslint-disable-next-line no-constant-condition
	while (true) { // step 8
		var value = IteratorStepValue(iterated); // step 8.a
		if (iterated['[[Done]]']) {
			return accumulator; // step 8.b
		}
		try {
			var result = Call(reducer, void undefined, [accumulator, value, counter]); // step 8.d
			accumulator = result; // step 8.f
		} catch (e) {
			// close iterator // step 8.e
			IteratorClose(
				iterated,
				ThrowCompletion(e)
			);
		}
		counter += 1; // step 8.g
	}
};

},{"../aos/GetIteratorDirect":133,"es-abstract/2024/Call":23,"es-abstract/2024/IsCallable":31,"es-abstract/2024/IteratorClose":33,"es-abstract/2024/IteratorStepValue":37,"es-abstract/2024/ThrowCompletion":42,"es-abstract/2024/Type":48,"es-errors/type":71}],106:[function(require,module,exports){
arguments[4][78][0].apply(exports,arguments)
},{"./implementation":105,"./polyfill":107,"./shim":108,"call-bind":10,"define-properties":13,"dup":78}],107:[function(require,module,exports){
'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	return typeof Iterator === 'function' && typeof Iterator.prototype.reduce === 'function'
		? Iterator.prototype.reduce
		: implementation;
};

},{"./implementation":105}],108:[function(require,module,exports){
'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

var $IteratorPrototype = require('../Iterator.prototype/implementation');

module.exports = function shimIteratorPrototypeReduce() {
	var polyfill = getPolyfill();

	define(
		$IteratorPrototype,
		{ reduce: polyfill },
		{ reduce: function () { return $IteratorPrototype.reduce !== polyfill; } }
	);

	return polyfill;
};

},{"../Iterator.prototype/implementation":121,"./polyfill":107,"define-properties":13}],109:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');

var Call = require('es-abstract/2024/Call');
var GetIteratorDirect = require('../aos/GetIteratorDirect');
var IsCallable = require('es-abstract/2024/IsCallable');
var IteratorClose = require('es-abstract/2024/IteratorClose');
var IteratorStepValue = require('es-abstract/2024/IteratorStepValue');
var NormalCompletion = require('es-abstract/2024/NormalCompletion');
var ThrowCompletion = require('es-abstract/2024/ThrowCompletion');
var ToBoolean = require('es-abstract/2024/ToBoolean');
var Type = require('es-abstract/2024/Type');

module.exports = function some(predicate) {
	if (this instanceof some) {
		throw new $TypeError('`some` is not a constructor');
	}

	var O = this; // step 1
	if (Type(O) !== 'Object') {
		throw new $TypeError('`this` value must be an Object'); // step 2
	}

	if (!IsCallable(predicate)) {
		throw new $TypeError('`predicate` must be a function'); // step 3
	}

	var iterated = GetIteratorDirect(O); // step 4

	var counter = 0; // step 5

	// eslint-disable-next-line no-constant-condition
	while (true) { // step 6
		var value = IteratorStepValue(iterated); // step 6.a
		if (iterated['[[Done]]']) {
			return false; // step 6.b
		}
		var result;
		try {
			result = Call(predicate, void undefined, [value, counter]); // step 6.c
		} catch (e) {
			// close iterator // step 6.d
			IteratorClose(
				iterated,
				ThrowCompletion(e)
			);
		} finally {
			counter += 1; // step 6.f
		}
		if (ToBoolean(result)) {
			return IteratorClose(
				iterated,
				NormalCompletion(true)
			); // step 6.e
		}
	}
};

},{"../aos/GetIteratorDirect":133,"es-abstract/2024/Call":23,"es-abstract/2024/IsCallable":31,"es-abstract/2024/IteratorClose":33,"es-abstract/2024/IteratorStepValue":37,"es-abstract/2024/NormalCompletion":38,"es-abstract/2024/ThrowCompletion":42,"es-abstract/2024/ToBoolean":43,"es-abstract/2024/Type":48,"es-errors/type":71}],110:[function(require,module,exports){
arguments[4][78][0].apply(exports,arguments)
},{"./implementation":109,"./polyfill":111,"./shim":112,"call-bind":10,"define-properties":13,"dup":78}],111:[function(require,module,exports){
'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	return typeof Iterator === 'function' && typeof Iterator.prototype.some === 'function'
		? Iterator.prototype.some
		: implementation;
};

},{"./implementation":109}],112:[function(require,module,exports){
'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

var $IteratorPrototype = require('../Iterator.prototype/implementation');

module.exports = function shimIteratorPrototypeSome() {
	var polyfill = getPolyfill();

	define(
		$IteratorPrototype,
		{ some: polyfill },
		{ some: function () { return $IteratorPrototype.some !== polyfill; } }
	);

	return polyfill;
};

},{"../Iterator.prototype/implementation":121,"./polyfill":111,"define-properties":13}],113:[function(require,module,exports){
'use strict';

var $RangeError = require('es-errors/range');
var $TypeError = require('es-errors/type');

var CompletionRecord = require('es-abstract/2024/CompletionRecord');
var CreateIteratorFromClosure = require('../aos/CreateIteratorFromClosure');
var GetIteratorDirect = require('../aos/GetIteratorDirect');
var IteratorClose = require('es-abstract/2024/IteratorClose');
var IteratorStepValue = require('es-abstract/2024/IteratorStepValue');
var NormalCompletion = require('es-abstract/2024/NormalCompletion');
var ToIntegerOrInfinity = require('es-abstract/2024/ToIntegerOrInfinity');
var ToNumber = require('es-abstract/2024/ToNumber');
var Type = require('es-abstract/2024/Type');

var iterHelperProto = require('../IteratorHelperPrototype');

var isNaN = require('es-abstract/helpers/isNaN');

var SLOT = require('internal-slot');

module.exports = function take(limit) {
	if (this instanceof take) {
		throw new $TypeError('`take` is not a constructor');
	}

	var O = this; // step 1
	if (Type(O) !== 'Object') {
		throw new $TypeError('`this` value must be an Object'); // step 2
	}

	var numLimit = ToNumber(limit); // step 2
	if (isNaN(numLimit)) {
		throw new $RangeError('`limit` must be a non-NaN number'); // step 3
	}

	var iterated = GetIteratorDirect(O); // step 4

	var integerLimit = ToIntegerOrInfinity(numLimit); // step 7
	if (integerLimit < 0) {
		throw new $RangeError('`limit` must be a >= 0'); // step 8
	}

	var closeIfAbrupt = function (abruptCompletion) {
		if (!(abruptCompletion instanceof CompletionRecord)) {
			throw new $TypeError('`abruptCompletion` must be a Completion Record');
		}
		IteratorClose(
			iterated,
			abruptCompletion
		);
	};

	var sentinel = {};
	var remaining = integerLimit; // step 9.a
	var closure = function () { // step 9
		// while (true) { // step 9.b
		if (remaining === 0) { // step 9.b.i
			return IteratorClose( // step 9.b.i.1
				iterated,
				NormalCompletion(sentinel)
			);
		}
		if (remaining !== Infinity) { // step 9.b.ii
			remaining -= 1; // step 9.b.ii.1
		}

		var value = IteratorStepValue(iterated); // step 6.b.i
		if (iterated['[[Done]]']) {
			return sentinel; // step 6.b.ii
		}

		return value; // step 9.b.iv
		// }
	};
	SLOT.set(closure, '[[Sentinel]]', sentinel); // for the userland implementation
	SLOT.set(closure, '[[CloseIfAbrupt]]', closeIfAbrupt); // for the userland implementation

	var result = CreateIteratorFromClosure(closure, 'Iterator Helper', iterHelperProto, ['[[UnderlyingIterator]]']); // step 7

	SLOT.set(result, '[[UnderlyingIterator]]', iterated); // step 8

	return result; // step 9
};

},{"../IteratorHelperPrototype":126,"../aos/CreateIteratorFromClosure":128,"../aos/GetIteratorDirect":133,"es-abstract/2024/CompletionRecord":25,"es-abstract/2024/IteratorClose":33,"es-abstract/2024/IteratorStepValue":37,"es-abstract/2024/NormalCompletion":38,"es-abstract/2024/ToIntegerOrInfinity":44,"es-abstract/2024/ToNumber":45,"es-abstract/2024/Type":48,"es-abstract/helpers/isNaN":60,"es-errors/range":68,"es-errors/type":71,"internal-slot":165}],114:[function(require,module,exports){
arguments[4][78][0].apply(exports,arguments)
},{"./implementation":113,"./polyfill":115,"./shim":116,"call-bind":10,"define-properties":13,"dup":78}],115:[function(require,module,exports){
'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	return typeof Iterator === 'function' && typeof Iterator.prototype.take === 'function'
		? Iterator.prototype.take
		: implementation;
};

},{"./implementation":113}],116:[function(require,module,exports){
'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

var $IteratorPrototype = require('../Iterator.prototype/implementation');

module.exports = function shimIteratorPrototypeTake() {
	var polyfill = getPolyfill();

	define(
		$IteratorPrototype,
		{ take: polyfill },
		{ take: function () { return $IteratorPrototype.take !== polyfill; } }
	);

	return polyfill;
};

},{"../Iterator.prototype/implementation":121,"./polyfill":115,"define-properties":13}],117:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');

var GetIteratorDirect = require('../aos/GetIteratorDirect');
var IteratorStepValue = require('es-abstract/2024/IteratorStepValue');
var Type = require('es-abstract/2024/Type');

var callBound = require('call-bind/callBound');

var $push = callBound('Array.prototype.push');

module.exports = function toArray() {
	if (this instanceof toArray) {
		throw new $TypeError('`toArray` is not a constructor');
	}

	var O = this; // step 1

	if (Type(O) !== 'Object') {
		throw new $TypeError('`this` value must be an Object'); // step 2
	}

	var iterated = GetIteratorDirect(O); // step 3

	var items = []; // step 4

	// eslint-disable-next-line no-constant-condition
	while (true) { // step 5
		var value = IteratorStepValue(iterated); // step 5.a
		if (iterated['[[Done]]']) {
			return items; // step 5.b
		}
		$push(items, value); // step 5.d
	}
};

},{"../aos/GetIteratorDirect":133,"call-bind/callBound":9,"es-abstract/2024/IteratorStepValue":37,"es-abstract/2024/Type":48,"es-errors/type":71}],118:[function(require,module,exports){
arguments[4][78][0].apply(exports,arguments)
},{"./implementation":117,"./polyfill":119,"./shim":120,"call-bind":10,"define-properties":13,"dup":78}],119:[function(require,module,exports){
'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	return typeof Iterator === 'function' && typeof Iterator.prototype.toArray === 'function'
		? Iterator.prototype.toArray
		: implementation;
};

},{"./implementation":117}],120:[function(require,module,exports){
'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

var $IteratorPrototype = require('../Iterator.prototype/implementation');

module.exports = function shimIteratorPrototypeToArray() {
	var polyfill = getPolyfill();

	define(
		$IteratorPrototype,
		{ toArray: polyfill },
		{ toArray: function () { return $IteratorPrototype.toArray !== polyfill; } }
	);

	return polyfill;
};

},{"../Iterator.prototype/implementation":121,"./polyfill":119,"define-properties":13}],121:[function(require,module,exports){
'use strict';

module.exports = require('iterator.prototype');

},{"iterator.prototype":182}],122:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');
var hasPropertyDescriptors = require('has-property-descriptors')();

var $TypeError = require('es-errors/type');
var $defineProperty = hasPropertyDescriptors && GetIntrinsic('%Object.defineProperty%', true);

var iterProto = require('iterator.prototype');
var callBound = require('call-bind/callBound');

var $isPrototypeOf = callBound('Object.prototype.isPrototypeOf');

var $Iterator = typeof Iterator === 'function' ? Iterator : function Iterator() {
	if (
		!(this instanceof Iterator)
		|| this.constructor === Iterator
		|| !$isPrototypeOf(Iterator, this.constructor)
	) {
		throw new $TypeError('`Iterator` can not be called or constructed directly');
	}
};

if ($Iterator.prototype !== iterProto) {
	$Iterator.prototype = iterProto;
}
$defineProperty($Iterator, 'prototype', { writable: false });

module.exports = $Iterator;

},{"call-bind/callBound":9,"es-errors/type":71,"get-intrinsic":148,"has-property-descriptors":159,"iterator.prototype":182}],123:[function(require,module,exports){
arguments[4][78][0].apply(exports,arguments)
},{"./implementation":122,"./polyfill":124,"./shim":125,"call-bind":10,"define-properties":13,"dup":78}],124:[function(require,module,exports){
'use strict';

var globalThis = require('globalthis')();
var implementation = require('./implementation');

module.exports = function getPolyfill() {
	return typeof globalThis.Iterator === 'function' ? globalThis.Iterator : implementation;
};

},{"./implementation":122,"globalthis":153}],125:[function(require,module,exports){
'use strict';

var define = require('define-properties');
var globalThis = require('globalthis')();

var getPolyfill = require('./polyfill');

module.exports = function shimIterator() {
	var polyfill = getPolyfill();

	define(
		globalThis,
		{ Iterator: polyfill },
		{ Iterator: function () { return Iterator !== polyfill; } }
	);

	return polyfill;
};

},{"./polyfill":124,"define-properties":13,"globalthis":153}],126:[function(require,module,exports){
'use strict';

var setToStringTag = require('es-set-tostringtag');
var hasProto = require('has-proto')();
var iterProto = require('../Iterator.prototype/implementation');
var SLOT = require('internal-slot');

var CompletionRecord = require('es-abstract/2024/CompletionRecord');
var CreateIterResultObject = require('es-abstract/2024/CreateIterResultObject');
var GeneratorResume = require('../aos/GeneratorResume');
var GeneratorResumeAbrupt = require('../aos/GeneratorResumeAbrupt');
var IteratorClose = require('es-abstract/2024/IteratorClose');
var NormalCompletion = require('es-abstract/2024/NormalCompletion');

var implementation;
if (hasProto) {
	implementation = {
		__proto__: iterProto,
		next: function next() {
			return GeneratorResume(this, void undefined, 'Iterator Helper');
		},
		'return': function () {
			var O = this; // step 1

			SLOT.assert(O, '[[UnderlyingIterator]]'); // step 2

			SLOT.assert(O, '[[GeneratorState]]'); // step 3

			if (SLOT.get(O, '[[GeneratorState]]') === 'suspendedStart') { // step 4
				SLOT.set(O, '[[GeneratorState]]', 'completed'); // step 4.a
				IteratorClose(SLOT.get(O, '[[UnderlyingIterator]]'), NormalCompletion('unused')); // step 4.c
				return CreateIterResultObject(void undefined, true); // step 4.d
			}

			var C = new CompletionRecord('return', void undefined); // step 5

			return GeneratorResumeAbrupt(O, C, 'Iterator Helper'); // step 6
		}
	};
	setToStringTag(implementation, 'Iterator Helper');
} else {
	var IteratorHelper = function IteratorHelper() {};
	IteratorHelper.prototype = iterProto;
	implementation = new IteratorHelper();
	delete implementation.constructor;
	implementation.next = function next() {
		return GeneratorResume(this, void undefined, 'Iterator Helper');
	};
	implementation['return'] = function () {
		var C = new CompletionRecord('return', void undefined); // step 1
		return GeneratorResumeAbrupt(this, C, 'Iterator Helper');
	};
}

module.exports = implementation;

},{"../Iterator.prototype/implementation":121,"../aos/GeneratorResume":129,"../aos/GeneratorResumeAbrupt":130,"es-abstract/2024/CompletionRecord":25,"es-abstract/2024/CreateIterResultObject":26,"es-abstract/2024/IteratorClose":33,"es-abstract/2024/NormalCompletion":38,"es-set-tostringtag":137,"has-proto":160,"internal-slot":165}],127:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');

var Call = require('es-abstract/2024/Call');
var CreateIterResultObject = require('es-abstract/2024/CreateIterResultObject');
var GetMethod = require('es-abstract/2024/GetMethod');
var Type = require('es-abstract/2024/Type');

var SLOT = require('internal-slot');
var iterProto = require('../Iterator.prototype/implementation');

// https://tc39.es/proposal-iterator-helpers/#sec-wrapforvaliditeratorprototype-object

module.exports = /* GetIntrinsic('%WrapForValidIteratorPrototype%', true) || */ {
	__proto__: iterProto,
	next: function next() {
		var O = this; // step 1

		// RequireInternalSlot(O, [[Iterated]]); // step 2
		SLOT.assert(O, '[[Iterated]]');

		var iteratorRecord = SLOT.get(O, '[[Iterated]]'); // step 3

		return Call(iteratorRecord['[[NextMethod]]'], iteratorRecord['[[Iterator]]']); // step 4
	},
	'return': function () {
		var O = this; // step 1

		// RequireInternalSlot(O, [[Iterated]]); // step 2
		SLOT.assert(O, '[[Iterated]]');

		var iterator = SLOT.get(O, '[[Iterated]]')['[[Iterator]]']; // step 3

		if (Type(iterator) !== 'Object') {
			throw new $TypeError('iterator must be an Object'); // step 4
		}

		var returnMethod = GetMethod(iterator, 'return'); // step 5

		if (typeof returnMethod === 'undefined') { // step 6
			return CreateIterResultObject(undefined, true); // step 6.a
		}
		return Call(returnMethod, iterator); // step 7
	}
};

},{"../Iterator.prototype/implementation":121,"es-abstract/2024/Call":23,"es-abstract/2024/CreateIterResultObject":26,"es-abstract/2024/GetMethod":28,"es-abstract/2024/Type":48,"es-errors/type":71,"internal-slot":165}],128:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');

var GeneratorStart = require('./GeneratorStart');
var IsArray = require('es-abstract/2024/IsArray');
var IsCallable = require('es-abstract/2024/IsCallable');
var OrdinaryObjectCreate = require('es-abstract/2024/OrdinaryObjectCreate');

var every = require('es-abstract/helpers/every');

var SLOT = require('internal-slot');

var safeConcat = require('safe-array-concat');

var isString = function isString(slot) {
	return typeof slot === 'string';
};

module.exports = function CreateIteratorFromClosure(closure, generatorBrand, proto) {
	if (!IsCallable(closure)) {
		throw new $TypeError('`closure` must be a function');
	}
	if (typeof generatorBrand !== 'string') {
		throw new $TypeError('`generatorBrand` must be a string');
	}
	var extraSlots = arguments.length > 3 ? arguments[3] : [];
	if (arguments.length > 3) {
		if (!IsArray(extraSlots) || !every(extraSlots, isString)) {
			throw new $TypeError('`extraSlots` must be a List of String internal slot names');
		}
	}
	var internalSlotsList = safeConcat(extraSlots, ['[[GeneratorContext]]', '[[GeneratorBrand]]', '[[GeneratorState]]']); // step 3
	var generator = OrdinaryObjectCreate(proto, internalSlotsList); // steps 4, 6
	SLOT.set(generator, '[[GeneratorBrand]]', generatorBrand); // step 5

	SLOT.assert(closure, '[[Sentinel]]'); // our userland slot
	SLOT.set(generator, '[[Sentinel]]', SLOT.get(closure, '[[Sentinel]]')); // our userland slot
	SLOT.assert(closure, '[[CloseIfAbrupt]]'); // our second userland slot
	SLOT.set(generator, '[[CloseIfAbrupt]]', SLOT.get(closure, '[[CloseIfAbrupt]]')); // our second userland slot

	GeneratorStart(generator, closure); // step 13

	return generator; // step 15
};

},{"./GeneratorStart":131,"es-abstract/2024/IsArray":30,"es-abstract/2024/IsCallable":31,"es-abstract/2024/OrdinaryObjectCreate":40,"es-abstract/helpers/every":54,"es-errors/type":71,"internal-slot":165,"safe-array-concat":197}],129:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');

var CreateIterResultObject = require('es-abstract/2024/CreateIterResultObject');
var GeneratorValidate = require('./GeneratorValidate');

var SLOT = require('internal-slot');

module.exports = function GeneratorResume(generator, value, generatorBrand) {
	var state = GeneratorValidate(generator, generatorBrand); // step 1
	if (state === 'completed') {
		return CreateIterResultObject(void undefined, true); // step 2
	}

	if (state !== 'suspendedStart' && state !== 'suspendedYield') {
		throw new $TypeError('Assertion failed: generator state is unexpected: ' + state); // step 3
	}

	var genContext = SLOT.get(generator, '[[GeneratorContext]]');

	SLOT.set(generator, '[[GeneratorState]]', 'executing'); // step 7

	var result = genContext(value); // steps 5-6, 8-10

	return result;
};

},{"./GeneratorValidate":132,"es-abstract/2024/CreateIterResultObject":26,"es-errors/type":71,"internal-slot":165}],130:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');

var CompletionRecord = require('es-abstract/2024/CompletionRecord');
var CreateIterResultObject = require('es-abstract/2024/CreateIterResultObject');
var GeneratorValidate = require('./GeneratorValidate');
var NormalCompletion = require('es-abstract/2024/NormalCompletion');

var SLOT = require('internal-slot');

module.exports = function GeneratorResumeAbrupt(generator, abruptCompletion, generatorBrand) {
	if (!(abruptCompletion instanceof CompletionRecord)) {
		throw new $TypeError('Assertion failed: abruptCompletion must be a Completion Record');
	}

	var state = GeneratorValidate(generator, generatorBrand); // step 1

	if (state === 'suspendedStart') { // step 2
		SLOT.set(generator, '[[GeneratorState]]', 'completed'); // step 3.a
		SLOT.set(generator, '[[GeneratorContext]]', null); // step 3.b
		state = 'completed'; // step 3.c
	}

	var value = abruptCompletion.value();

	if (state === 'completed') { // step 3
		return CreateIterResultObject(value, true); // steps 3.a-b
	}

	if (state !== 'suspendedYield') {
		throw new $TypeError('Assertion failed: generator state is unexpected: ' + state); // step 4
	}
	if (abruptCompletion.type() === 'return') {
		// due to representing `GeneratorContext` as a function, we can't safely re-invoke it, so we can't support sending it a return completion
		return CreateIterResultObject(SLOT.get(generator, '[[CloseIfAbrupt]]')(NormalCompletion(abruptCompletion.value())), true);
	}

	var genContext = SLOT.get(generator, '[[GeneratorContext]]'); // step 5

	SLOT.set(generator, '[[GeneratorState]]', 'executing'); // step 8

	var result = genContext(value); // steps 6-7, 8-11

	return result; // step 12
};

},{"./GeneratorValidate":132,"es-abstract/2024/CompletionRecord":25,"es-abstract/2024/CreateIterResultObject":26,"es-abstract/2024/NormalCompletion":38,"es-errors/type":71,"internal-slot":165}],131:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');

var CreateIterResultObject = require('es-abstract/2024/CreateIterResultObject');
var IsCallable = require('es-abstract/2024/IsCallable');
var Type = require('es-abstract/2024/Type');

var SLOT = require('internal-slot');

module.exports = function GeneratorStart(generator, closure) {
	SLOT.assert(generator, '[[GeneratorState]]');
	SLOT.assert(generator, '[[GeneratorContext]]');
	SLOT.assert(generator, '[[GeneratorBrand]]');
	SLOT.assert(generator, '[[Sentinel]]'); // our userland slot
	SLOT.assert(generator, '[[CloseIfAbrupt]]'); // our second userland slot

	if (!IsCallable(closure) || closure.length !== 0) {
		throw new $TypeError('`closure` must be a function that takes no arguments');
	}

	var sentinel = SLOT.get(closure, '[[Sentinel]]');
	if (Type(sentinel) !== 'Object') {
		throw new $TypeError('`closure.[[Sentinel]]` must be an object');
	}
	SLOT.set(generator, '[[GeneratorContext]]', function () { // steps 2-5
		try {
			var result = closure();
			if (result === sentinel) {
				SLOT.set(generator, '[[GeneratorState]]', 'completed');
				SLOT.set(generator, '[[GeneratorContext]]', null);
				return CreateIterResultObject(void undefined, true);
			}
			SLOT.set(generator, '[[GeneratorState]]', 'suspendedYield');
			return CreateIterResultObject(result, false);
		} catch (e) {
			SLOT.set(generator, '[[GeneratorState]]', 'completed');
			SLOT.set(generator, '[[GeneratorContext]]', null);
			throw e;
		}
	});

	SLOT.set(generator, '[[GeneratorState]]', 'suspendedStart'); // step 6
};

},{"es-abstract/2024/CreateIterResultObject":26,"es-abstract/2024/IsCallable":31,"es-abstract/2024/Type":48,"es-errors/type":71,"internal-slot":165}],132:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');

var SLOT = require('internal-slot');

module.exports = function GeneratorValidate(generator, generatorBrand) {
	SLOT.assert(generator, '[[GeneratorState]]'); // step 1
	SLOT.assert(generator, '[[GeneratorBrand]]'); // step 2

	var brand = SLOT.get(generator, '[[GeneratorBrand]]');
	if (brand !== generatorBrand) {
		throw new $TypeError('Assertion failed: generator brand is unexpected: ' + brand);
	}
	SLOT.assert(generator, '[[GeneratorContext]]'); // step 4
	var state = SLOT.get(generator, '[[GeneratorState]]'); // step 5
	if (state === 'executing') {
		throw new $TypeError('generator is executing');
	}

	return state; // step 7
};

},{"es-errors/type":71,"internal-slot":165}],133:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');

var Get = require('es-abstract/2024/Get');
var Type = require('es-abstract/2024/Type');

module.exports = function GetIteratorDirect(obj) {
	if (Type(obj) !== 'Object') {
		throw new $TypeError('Assertion failed: `obj` must be an Object');
	}

	var nextMethod = Get(obj, 'next'); // step 2

	var iteratorRecord = { '[[Iterator]]': obj, '[[NextMethod]]': nextMethod, '[[Done]]': false }; // step 3

	return iteratorRecord; // step 4
};

},{"es-abstract/2024/Get":27,"es-abstract/2024/Type":48,"es-errors/type":71}],134:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');

var AdvanceStringIndex = require('es-abstract/2024/AdvanceStringIndex');
var Call = require('es-abstract/2024/Call');
var GetIteratorDirect = require('./GetIteratorDirect');
var GetMethod = require('es-abstract/2024/GetMethod');
var IsArray = require('es-abstract/2024/IsArray');
var Type = require('es-abstract/2024/Type');

var getIteratorMethod = require('es-abstract/helpers/getIteratorMethod');

module.exports = function GetIteratorFlattenable(obj, stringHandling) {
	if (Type(obj) !== 'Object') {
		if (stringHandling === 'reject-strings' || typeof obj !== 'string') {
			throw new $TypeError('obj must be an Object'); // step 1.a
		}
	}

	var method = void undefined; // step 2

	// method = GetMethod(obj, Symbol.iterator); // step 5.a
	method = getIteratorMethod(
		{
			AdvanceStringIndex: AdvanceStringIndex,
			GetMethod: GetMethod,
			IsArray: IsArray
		},
		obj
	);

	var iterator;
	if (typeof method === 'undefined') { // step 3
		iterator = obj; // step 3.a
	} else { // step 4
		iterator = Call(method, obj); // step 4.a
	}

	if (Type(iterator) !== 'Object') {
		throw new $TypeError('iterator must be an Object'); // step 5
	}
	return GetIteratorDirect(iterator); // step 6
};

},{"./GetIteratorDirect":133,"es-abstract/2024/AdvanceStringIndex":22,"es-abstract/2024/Call":23,"es-abstract/2024/GetMethod":28,"es-abstract/2024/IsArray":30,"es-abstract/2024/Type":48,"es-abstract/helpers/getIteratorMethod":56,"es-errors/type":71}],135:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');

/** @type {import('./RequireObjectCoercible')} */
module.exports = function RequireObjectCoercible(value) {
	if (value == null) {
		throw new $TypeError((arguments.length > 0 && arguments[1]) || ('Cannot call method on ' + value));
	}
	return value;
};

},{"es-errors/type":71}],136:[function(require,module,exports){
'use strict';

/** @type {import('.')} */
module.exports = Object;

},{}],137:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);

var hasToStringTag = require('has-tostringtag/shams')();
var hasOwn = require('hasown');
var $TypeError = require('es-errors/type');

var toStringTag = hasToStringTag ? Symbol.toStringTag : null;

/** @type {import('.')} */
module.exports = function setToStringTag(object, value) {
	var overrideIfSet = arguments.length > 2 && !!arguments[2] && arguments[2].force;
	var nonConfigurable = arguments.length > 2 && !!arguments[2] && arguments[2].nonConfigurable;
	if (
		(typeof overrideIfSet !== 'undefined' && typeof overrideIfSet !== 'boolean')
		|| (typeof nonConfigurable !== 'undefined' && typeof nonConfigurable !== 'boolean')
	) {
		throw new $TypeError('if provided, the `overrideIfSet` and `nonConfigurable` options must be booleans');
	}
	if (toStringTag && (overrideIfSet || !hasOwn(object, toStringTag))) {
		if ($defineProperty) {
			$defineProperty(object, toStringTag, {
				configurable: !nonConfigurable,
				enumerable: false,
				value: value,
				writable: false
			});
		} else {
			object[toStringTag] = value; // eslint-disable-line no-param-reassign
		}
	}
};

},{"es-errors/type":71,"get-intrinsic":148,"has-tostringtag/shams":163,"hasown":164}],138:[function(require,module,exports){
'use strict';

var hasSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol';

var isPrimitive = require('./helpers/isPrimitive');
var isCallable = require('is-callable');
var isDate = require('is-date-object');
var isSymbol = require('is-symbol');

var ordinaryToPrimitive = function OrdinaryToPrimitive(O, hint) {
	if (typeof O === 'undefined' || O === null) {
		throw new TypeError('Cannot call method on ' + O);
	}
	if (typeof hint !== 'string' || (hint !== 'number' && hint !== 'string')) {
		throw new TypeError('hint must be "string" or "number"');
	}
	var methodNames = hint === 'string' ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
	var method, result, i;
	for (i = 0; i < methodNames.length; ++i) {
		method = O[methodNames[i]];
		if (isCallable(method)) {
			result = method.call(O);
			if (isPrimitive(result)) {
				return result;
			}
		}
	}
	throw new TypeError('No default value');
};

var GetMethod = function GetMethod(O, P) {
	var func = O[P];
	if (func !== null && typeof func !== 'undefined') {
		if (!isCallable(func)) {
			throw new TypeError(func + ' returned for property ' + P + ' of object ' + O + ' is not a function');
		}
		return func;
	}
	return void 0;
};

// http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive
module.exports = function ToPrimitive(input) {
	if (isPrimitive(input)) {
		return input;
	}
	var hint = 'default';
	if (arguments.length > 1) {
		if (arguments[1] === String) {
			hint = 'string';
		} else if (arguments[1] === Number) {
			hint = 'number';
		}
	}

	var exoticToPrim;
	if (hasSymbols) {
		if (Symbol.toPrimitive) {
			exoticToPrim = GetMethod(input, Symbol.toPrimitive);
		} else if (isSymbol(input)) {
			exoticToPrim = Symbol.prototype.valueOf;
		}
	}
	if (typeof exoticToPrim !== 'undefined') {
		var result = exoticToPrim.call(input, hint);
		if (isPrimitive(result)) {
			return result;
		}
		throw new TypeError('unable to convert exotic object to primitive');
	}
	if (hint === 'default' && (isDate(input) || isSymbol(input))) {
		hint = 'string';
	}
	return ordinaryToPrimitive(input, hint === 'default' ? 'number' : hint);
};

},{"./helpers/isPrimitive":139,"is-callable":169,"is-date-object":170,"is-symbol":178}],139:[function(require,module,exports){
arguments[4][61][0].apply(exports,arguments)
},{"dup":61}],140:[function(require,module,exports){
'use strict';

var isCallable = require('is-callable');

var toStr = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

/** @type {<This, A extends readonly unknown[]>(arr: A, iterator: (this: This | void, value: A[number], index: number, arr: A) => void, receiver: This | undefined) => void} */
var forEachArray = function forEachArray(array, iterator, receiver) {
    for (var i = 0, len = array.length; i < len; i++) {
        if (hasOwnProperty.call(array, i)) {
            if (receiver == null) {
                iterator(array[i], i, array);
            } else {
                iterator.call(receiver, array[i], i, array);
            }
        }
    }
};

/** @type {<This, S extends string>(string: S, iterator: (this: This | void, value: S[number], index: number, string: S) => void, receiver: This | undefined) => void} */
var forEachString = function forEachString(string, iterator, receiver) {
    for (var i = 0, len = string.length; i < len; i++) {
        // no such thing as a sparse string.
        if (receiver == null) {
            iterator(string.charAt(i), i, string);
        } else {
            iterator.call(receiver, string.charAt(i), i, string);
        }
    }
};

/** @type {<This, O>(obj: O, iterator: (this: This | void, value: O[keyof O], index: keyof O, obj: O) => void, receiver: This | undefined) => void} */
var forEachObject = function forEachObject(object, iterator, receiver) {
    for (var k in object) {
        if (hasOwnProperty.call(object, k)) {
            if (receiver == null) {
                iterator(object[k], k, object);
            } else {
                iterator.call(receiver, object[k], k, object);
            }
        }
    }
};

/** @type {(x: unknown) => x is readonly unknown[]} */
function isArray(x) {
    return toStr.call(x) === '[object Array]';
}

/** @type {import('.')._internal} */
module.exports = function forEach(list, iterator, thisArg) {
    if (!isCallable(iterator)) {
        throw new TypeError('iterator must be a function');
    }

    var receiver;
    if (arguments.length >= 3) {
        receiver = thisArg;
    }

    if (isArray(list)) {
        forEachArray(list, iterator, receiver);
    } else if (typeof list === 'string') {
        forEachString(list, iterator, receiver);
    } else {
        forEachObject(list, iterator, receiver);
    }
};

},{"is-callable":169}],141:[function(require,module,exports){
'use strict';

/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var toStr = Object.prototype.toString;
var max = Math.max;
var funcType = '[object Function]';

var concatty = function concatty(a, b) {
    var arr = [];

    for (var i = 0; i < a.length; i += 1) {
        arr[i] = a[i];
    }
    for (var j = 0; j < b.length; j += 1) {
        arr[j + a.length] = b[j];
    }

    return arr;
};

var slicy = function slicy(arrLike, offset) {
    var arr = [];
    for (var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1) {
        arr[j] = arrLike[i];
    }
    return arr;
};

var joiny = function (arr, joiner) {
    var str = '';
    for (var i = 0; i < arr.length; i += 1) {
        str += arr[i];
        if (i + 1 < arr.length) {
            str += joiner;
        }
    }
    return str;
};

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.apply(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slicy(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                concatty(args, arguments)
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        }
        return target.apply(
            that,
            concatty(args, arguments)
        );

    };

    var boundLength = max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs[i] = '$' + i;
    }

    bound = Function('binder', 'return function (' + joiny(boundArgs, ',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};

},{}],142:[function(require,module,exports){
'use strict';

var implementation = require('./implementation');

module.exports = Function.prototype.bind || implementation;

},{"./implementation":141}],143:[function(require,module,exports){
'use strict';

var IsCallable = require('es-abstract/2023/IsCallable');
var HasOwnProperty = require('es-abstract/2023/HasOwnProperty');
var functionsHaveNames = require('functions-have-names')();
var callBound = require('call-bind/callBound');
var $functionToString = callBound('Function.prototype.toString');
var $stringMatch = callBound('String.prototype.match');
var toStr = callBound('Object.prototype.toString');

var classRegex = /^class /;

var isClass = function isClassConstructor(fn) {
	if (IsCallable(fn)) {
		return false;
	}
	if (typeof fn !== 'function') {
		return false;
	}
	try {
		var match = $stringMatch($functionToString(fn), classRegex);
		return !!match;
	} catch (e) {}
	return false;
};

var regex = /\s*function\s+([^(\s]*)\s*/;

var isIE68 = !(0 in [,]); // eslint-disable-line no-sparse-arrays, comma-spacing

var objectClass = '[object Object]';
var ddaClass = '[object HTMLAllCollection]';

var functionProto = Function.prototype;

var isDDA = function isDocumentDotAll() {
	return false;
};
if (typeof document === 'object') {
	// Firefox 3 canonicalizes DDA to undefined when it's not accessed directly
	var all = document.all;
	if (toStr(all) === toStr(document.all)) {
		isDDA = function isDocumentDotAll(value) {
			/* globals document: false */
			// in IE 6-8, typeof document.all is "object" and it's truthy
			if ((isIE68 || !value) && (typeof value === 'undefined' || typeof value === 'object')) {
				try {
					var str = toStr(value);
					// IE 6-8 uses `objectClass`
					return (str === ddaClass || str === objectClass) && value('') == null; // eslint-disable-line eqeqeq
				} catch (e) { /**/ }
			}
			return false;
		};
	}
}

module.exports = function getName() {
	if (isDDA(this) || (!isClass(this) && !IsCallable(this))) {
		throw new TypeError('Function.prototype.name sham getter called on non-function');
	}
	if (functionsHaveNames && HasOwnProperty(this, 'name')) {
		return this.name;
	}
	if (this === functionProto) {
		return '';
	}
	var str = $functionToString(this);
	var match = $stringMatch(str, regex);
	var name = match && match[1];
	return name;
};

},{"call-bind/callBound":9,"es-abstract/2023/HasOwnProperty":18,"es-abstract/2023/IsCallable":19,"functions-have-names":147}],144:[function(require,module,exports){
'use strict';

var define = require('define-properties');
var callBind = require('call-bind');

var implementation = require('./implementation');
var getPolyfill = require('./polyfill');
var shim = require('./shim');

var bound = callBind(implementation);

define(bound, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = bound;

},{"./implementation":143,"./polyfill":145,"./shim":146,"call-bind":10,"define-properties":13}],145:[function(require,module,exports){
'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	return implementation;
};

},{"./implementation":143}],146:[function(require,module,exports){
'use strict';

var supportsDescriptors = require('define-properties').supportsDescriptors;
var functionsHaveNames = require('functions-have-names')();
var getPolyfill = require('./polyfill');
var defineProperty = Object.defineProperty;
var TypeErr = TypeError;

module.exports = function shimName() {
	var polyfill = getPolyfill();
	if (functionsHaveNames) {
		return polyfill;
	}
	if (!supportsDescriptors) {
		throw new TypeErr('Shimming Function.prototype.name support requires ES5 property descriptor support.');
	}
	var functionProto = Function.prototype;
	defineProperty(functionProto, 'name', {
		configurable: true,
		enumerable: false,
		get: function () {
			var name = polyfill.call(this);
			if (this !== functionProto) {
				defineProperty(this, 'name', {
					configurable: true,
					enumerable: false,
					value: name,
					writable: false
				});
			}
			return name;
		}
	});
	return polyfill;
};

},{"./polyfill":145,"define-properties":13,"functions-have-names":147}],147:[function(require,module,exports){
'use strict';

var functionsHaveNames = function functionsHaveNames() {
	return typeof function f() {}.name === 'string';
};

var gOPD = Object.getOwnPropertyDescriptor;
if (gOPD) {
	try {
		gOPD([], 'length');
	} catch (e) {
		// IE 8 has a broken gOPD
		gOPD = null;
	}
}

functionsHaveNames.functionsHaveConfigurableNames = function functionsHaveConfigurableNames() {
	if (!functionsHaveNames() || !gOPD) {
		return false;
	}
	var desc = gOPD(function () {}, 'name');
	return !!desc && !!desc.configurable;
};

var $bind = Function.prototype.bind;

functionsHaveNames.boundFunctionsHaveNames = function boundFunctionsHaveNames() {
	return functionsHaveNames() && typeof $bind === 'function' && function f() {}.bind().name !== '';
};

module.exports = functionsHaveNames;

},{}],148:[function(require,module,exports){
'use strict';

var undefined;

var $Object = require('es-object-atoms');

var $Error = require('es-errors');
var $EvalError = require('es-errors/eval');
var $RangeError = require('es-errors/range');
var $ReferenceError = require('es-errors/ref');
var $SyntaxError = require('es-errors/syntax');
var $TypeError = require('es-errors/type');
var $URIError = require('es-errors/uri');

var abs = require('math-intrinsics/abs');
var floor = require('math-intrinsics/floor');
var max = require('math-intrinsics/max');
var min = require('math-intrinsics/min');
var pow = require('math-intrinsics/pow');
var round = require('math-intrinsics/round');
var sign = require('math-intrinsics/sign');

var $Function = Function;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function (expressionSyntax) {
	try {
		return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};

var $gOPD = require('gopd');
var $defineProperty = require('es-define-property');

var throwTypeError = function () {
	throw new $TypeError();
};
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = require('has-symbols')();

var getProto = require('get-proto');
var $ObjectGPO = require('get-proto/Object.getPrototypeOf');
var $ReflectGPO = require('get-proto/Reflect.getPrototypeOf');

var $apply = require('call-bind-apply-helpers/functionApply');
var $call = require('call-bind-apply-helpers/functionCall');

var needsEval = {};

var TypedArray = typeof Uint8Array === 'undefined' || !getProto ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	__proto__: null,
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': needsEval,
	'%AsyncGenerator%': needsEval,
	'%AsyncGeneratorFunction%': needsEval,
	'%AsyncIteratorPrototype%': needsEval,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
	'%BigInt64Array%': typeof BigInt64Array === 'undefined' ? undefined : BigInt64Array,
	'%BigUint64Array%': typeof BigUint64Array === 'undefined' ? undefined : BigUint64Array,
	'%Boolean%': Boolean,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%Date%': Date,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': $Error,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': $EvalError,
	'%Float16Array%': typeof Float16Array === 'undefined' ? undefined : Float16Array,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
	'%Function%': $Function,
	'%GeneratorFunction%': needsEval,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%Math%': Math,
	'%Number%': Number,
	'%Object%': $Object,
	'%Object.getOwnPropertyDescriptor%': $gOPD,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': $RangeError,
	'%ReferenceError%': $ReferenceError,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols && getProto ? getProto(''[Symbol.iterator]()) : undefined,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SyntaxError%': $SyntaxError,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypeError%': $TypeError,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%URIError%': $URIError,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,

	'%Function.prototype.call%': $call,
	'%Function.prototype.apply%': $apply,
	'%Object.defineProperty%': $defineProperty,
	'%Object.getPrototypeOf%': $ObjectGPO,
	'%Math.abs%': abs,
	'%Math.floor%': floor,
	'%Math.max%': max,
	'%Math.min%': min,
	'%Math.pow%': pow,
	'%Math.round%': round,
	'%Math.sign%': sign,
	'%Reflect.getPrototypeOf%': $ReflectGPO
};

if (getProto) {
	try {
		null.error; // eslint-disable-line no-unused-expressions
	} catch (e) {
		// https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
		var errorProto = getProto(getProto(e));
		INTRINSICS['%Error.prototype%'] = errorProto;
	}
}

var doEval = function doEval(name) {
	var value;
	if (name === '%AsyncFunction%') {
		value = getEvalledConstructor('async function () {}');
	} else if (name === '%GeneratorFunction%') {
		value = getEvalledConstructor('function* () {}');
	} else if (name === '%AsyncGeneratorFunction%') {
		value = getEvalledConstructor('async function* () {}');
	} else if (name === '%AsyncGenerator%') {
		var fn = doEval('%AsyncGeneratorFunction%');
		if (fn) {
			value = fn.prototype;
		}
	} else if (name === '%AsyncIteratorPrototype%') {
		var gen = doEval('%AsyncGenerator%');
		if (gen && getProto) {
			value = getProto(gen.prototype);
		}
	}

	INTRINSICS[name] = value;

	return value;
};

var LEGACY_ALIASES = {
	__proto__: null,
	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
	'%ArrayPrototype%': ['Array', 'prototype'],
	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
	'%BooleanPrototype%': ['Boolean', 'prototype'],
	'%DataViewPrototype%': ['DataView', 'prototype'],
	'%DatePrototype%': ['Date', 'prototype'],
	'%ErrorPrototype%': ['Error', 'prototype'],
	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
	'%FunctionPrototype%': ['Function', 'prototype'],
	'%Generator%': ['GeneratorFunction', 'prototype'],
	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
	'%JSONParse%': ['JSON', 'parse'],
	'%JSONStringify%': ['JSON', 'stringify'],
	'%MapPrototype%': ['Map', 'prototype'],
	'%NumberPrototype%': ['Number', 'prototype'],
	'%ObjectPrototype%': ['Object', 'prototype'],
	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
	'%PromisePrototype%': ['Promise', 'prototype'],
	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
	'%Promise_all%': ['Promise', 'all'],
	'%Promise_reject%': ['Promise', 'reject'],
	'%Promise_resolve%': ['Promise', 'resolve'],
	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
	'%RegExpPrototype%': ['RegExp', 'prototype'],
	'%SetPrototype%': ['Set', 'prototype'],
	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
	'%StringPrototype%': ['String', 'prototype'],
	'%SymbolPrototype%': ['Symbol', 'prototype'],
	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
	'%URIErrorPrototype%': ['URIError', 'prototype'],
	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
	'%WeakSetPrototype%': ['WeakSet', 'prototype']
};

var bind = require('function-bind');
var hasOwn = require('hasown');
var $concat = bind.call($call, Array.prototype.concat);
var $spliceApply = bind.call($apply, Array.prototype.splice);
var $replace = bind.call($call, String.prototype.replace);
var $strSlice = bind.call($call, String.prototype.slice);
var $exec = bind.call($call, RegExp.prototype.exec);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var first = $strSlice(string, 0, 1);
	var last = $strSlice(string, -1);
	if (first === '%' && last !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
	} else if (last === '%' && first !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
	}
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	var intrinsicName = name;
	var alias;
	if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
		alias = LEGACY_ALIASES[intrinsicName];
		intrinsicName = '%' + alias[0] + '%';
	}

	if (hasOwn(INTRINSICS, intrinsicName)) {
		var value = INTRINSICS[intrinsicName];
		if (value === needsEval) {
			value = doEval(intrinsicName);
		}
		if (typeof value === 'undefined' && !allowMissing) {
			throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}

		return {
			alias: alias,
			name: intrinsicName,
			value: value
		};
	}

	throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new $TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new $TypeError('"allowMissing" argument must be a boolean');
	}

	if ($exec(/^%?[^%]*%?$/, name) === null) {
		throw new $SyntaxError('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
	}
	var parts = stringToPath(name);
	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
	var intrinsicRealName = intrinsic.name;
	var value = intrinsic.value;
	var skipFurtherCaching = false;

	var alias = intrinsic.alias;
	if (alias) {
		intrinsicBaseName = alias[0];
		$spliceApply(parts, $concat([0, 1], alias));
	}

	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
		var part = parts[i];
		var first = $strSlice(part, 0, 1);
		var last = $strSlice(part, -1);
		if (
			(
				(first === '"' || first === "'" || first === '`')
				|| (last === '"' || last === "'" || last === '`')
			)
			&& first !== last
		) {
			throw new $SyntaxError('property names with quotes must have matching quotes');
		}
		if (part === 'constructor' || !isOwn) {
			skipFurtherCaching = true;
		}

		intrinsicBaseName += '.' + part;
		intrinsicRealName = '%' + intrinsicBaseName + '%';

		if (hasOwn(INTRINSICS, intrinsicRealName)) {
			value = INTRINSICS[intrinsicRealName];
		} else if (value != null) {
			if (!(part in value)) {
				if (!allowMissing) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				return void undefined;
			}
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, part);
				isOwn = !!desc;

				// By convention, when a data property is converted to an accessor
				// property to emulate a data property that does not suffer from
				// the override mistake, that accessor's getter is marked with
				// an `originalValue` property. Here, when we detect this, we
				// uphold the illusion by pretending to see that original data
				// property, i.e., returning the value rather than the getter
				// itself.
				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
					value = desc.get;
				} else {
					value = value[part];
				}
			} else {
				isOwn = hasOwn(value, part);
				value = value[part];
			}

			if (isOwn && !skipFurtherCaching) {
				INTRINSICS[intrinsicRealName] = value;
			}
		}
	}
	return value;
};

},{"call-bind-apply-helpers/functionApply":5,"call-bind-apply-helpers/functionCall":6,"es-define-property":65,"es-errors":67,"es-errors/eval":66,"es-errors/range":68,"es-errors/ref":69,"es-errors/syntax":70,"es-errors/type":71,"es-errors/uri":72,"es-object-atoms":136,"function-bind":142,"get-proto":151,"get-proto/Object.getPrototypeOf":149,"get-proto/Reflect.getPrototypeOf":150,"gopd":157,"has-symbols":161,"hasown":164,"math-intrinsics/abs":183,"math-intrinsics/floor":184,"math-intrinsics/max":186,"math-intrinsics/min":187,"math-intrinsics/pow":188,"math-intrinsics/round":189,"math-intrinsics/sign":190}],149:[function(require,module,exports){
'use strict';

var $Object = require('es-object-atoms');

/** @type {import('./Object.getPrototypeOf')} */
module.exports = $Object.getPrototypeOf || null;

},{"es-object-atoms":136}],150:[function(require,module,exports){
'use strict';

/** @type {import('./Reflect.getPrototypeOf')} */
module.exports = (typeof Reflect !== 'undefined' && Reflect.getPrototypeOf) || null;

},{}],151:[function(require,module,exports){
'use strict';

var reflectGetProto = require('./Reflect.getPrototypeOf');
var originalGetProto = require('./Object.getPrototypeOf');

var getDunderProto = require('dunder-proto/get');

/** @type {import('.')} */
module.exports = reflectGetProto
	? function getProto(O) {
		// @ts-expect-error TS can't narrow inside a closure, for some reason
		return reflectGetProto(O);
	}
	: originalGetProto
		? function getProto(O) {
			if (!O || (typeof O !== 'object' && typeof O !== 'function')) {
				throw new TypeError('getProto: not an object');
			}
			// @ts-expect-error TS can't narrow inside a closure, for some reason
			return originalGetProto(O);
		}
		: getDunderProto
			? function getProto(O) {
				// @ts-expect-error TS can't narrow inside a closure, for some reason
				return getDunderProto(O);
			}
			: null;

},{"./Object.getPrototypeOf":149,"./Reflect.getPrototypeOf":150,"dunder-proto/get":17}],152:[function(require,module,exports){
/* eslint no-negated-condition: 0, no-new-func: 0 */

'use strict';

if (typeof self !== 'undefined') {
	module.exports = self;
} else if (typeof window !== 'undefined') {
	module.exports = window;
} else {
	module.exports = Function('return this')();
}

},{}],153:[function(require,module,exports){
'use strict';

var defineProperties = require('define-properties');

var implementation = require('./implementation');
var getPolyfill = require('./polyfill');
var shim = require('./shim');

var polyfill = getPolyfill();

var getGlobal = function () { return polyfill; };

defineProperties(getGlobal, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = getGlobal;

},{"./implementation":152,"./polyfill":154,"./shim":155,"define-properties":13}],154:[function(require,module,exports){
(function (global){(function (){
'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	if (typeof global !== 'object' || !global || global.Math !== Math || global.Array !== Array) {
		return implementation;
	}
	return global;
};

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./implementation":152}],155:[function(require,module,exports){
'use strict';

var define = require('define-properties');
var gOPD = require('gopd');
var getPolyfill = require('./polyfill');

module.exports = function shimGlobal() {
	var polyfill = getPolyfill();
	if (define.supportsDescriptors) {
		var descriptor = gOPD(polyfill, 'globalThis');
		if (
			!descriptor
			|| (
				descriptor.configurable
				&& (descriptor.enumerable || !descriptor.writable || globalThis !== polyfill)
			)
		) {
			Object.defineProperty(polyfill, 'globalThis', {
				configurable: true,
				enumerable: false,
				value: polyfill,
				writable: true
			});
		}
	} else if (typeof globalThis !== 'object' || globalThis !== polyfill) {
		polyfill.globalThis = polyfill;
	}
	return polyfill;
};

},{"./polyfill":154,"define-properties":13,"gopd":157}],156:[function(require,module,exports){
'use strict';

/** @type {import('./gOPD')} */
module.exports = Object.getOwnPropertyDescriptor;

},{}],157:[function(require,module,exports){
'use strict';

/** @type {import('.')} */
var $gOPD = require('./gOPD');

if ($gOPD) {
	try {
		$gOPD([], 'length');
	} catch (e) {
		// IE 8 has a broken gOPD
		$gOPD = null;
	}
}

module.exports = $gOPD;

},{"./gOPD":156}],158:[function(require,module,exports){
'use strict';

var $BigInt = typeof BigInt !== 'undefined' && BigInt;

module.exports = function hasNativeBigInts() {
	return typeof $BigInt === 'function'
		&& typeof BigInt === 'function'
		&& typeof $BigInt(42) === 'bigint' // eslint-disable-line no-magic-numbers
		&& typeof BigInt(42) === 'bigint'; // eslint-disable-line no-magic-numbers
};

},{}],159:[function(require,module,exports){
'use strict';

var $defineProperty = require('es-define-property');

var hasPropertyDescriptors = function hasPropertyDescriptors() {
	return !!$defineProperty;
};

hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
	// node v0.6 has a bug where array lengths can be Set but not Defined
	if (!$defineProperty) {
		return null;
	}
	try {
		return $defineProperty([], 'length', { value: 1 }).length !== 1;
	} catch (e) {
		// In Firefox 4-22, defining length on an array throws an exception.
		return true;
	}
};

module.exports = hasPropertyDescriptors;

},{"es-define-property":65}],160:[function(require,module,exports){
'use strict';

var test = {
	__proto__: null,
	foo: {}
};

var $Object = Object;

/** @type {import('.')} */
module.exports = function hasProto() {
	// @ts-expect-error: TS errors on an inherited property for some reason
	return { __proto__: test }.foo === test.foo
		&& !(test instanceof $Object);
};

},{}],161:[function(require,module,exports){
'use strict';

var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = require('./shams');

/** @type {import('.')} */
module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};

},{"./shams":162}],162:[function(require,module,exports){
'use strict';

/** @type {import('./shams')} */
/* eslint complexity: [2, 18], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	/** @type {{ [k in symbol]?: unknown }} */
	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (var _ in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		// eslint-disable-next-line no-extra-parens
		var descriptor = /** @type {PropertyDescriptor} */ (Object.getOwnPropertyDescriptor(obj, sym));
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};

},{}],163:[function(require,module,exports){
'use strict';

var hasSymbols = require('has-symbols/shams');

/** @type {import('.')} */
module.exports = function hasToStringTagShams() {
	return hasSymbols() && !!Symbol.toStringTag;
};

},{"has-symbols/shams":162}],164:[function(require,module,exports){
'use strict';

var call = Function.prototype.call;
var $hasOwn = Object.prototype.hasOwnProperty;
var bind = require('function-bind');

/** @type {import('.')} */
module.exports = bind.call(call, $hasOwn);

},{"function-bind":142}],165:[function(require,module,exports){
'use strict';

var hasOwn = require('hasown');
var channel = require('side-channel')();

var $TypeError = require('es-errors/type');

var SLOT = {
	assert: function (O, slot) {
		if (!O || (typeof O !== 'object' && typeof O !== 'function')) {
			throw new $TypeError('`O` is not an object');
		}
		if (typeof slot !== 'string') {
			throw new $TypeError('`slot` must be a string');
		}
		channel.assert(O);
		if (!SLOT.has(O, slot)) {
			throw new $TypeError('`' + slot + '` is not present on `O`');
		}
	},
	get: function (O, slot) {
		if (!O || (typeof O !== 'object' && typeof O !== 'function')) {
			throw new $TypeError('`O` is not an object');
		}
		if (typeof slot !== 'string') {
			throw new $TypeError('`slot` must be a string');
		}
		var slots = channel.get(O);
		return slots && slots['$' + slot];
	},
	has: function (O, slot) {
		if (!O || (typeof O !== 'object' && typeof O !== 'function')) {
			throw new $TypeError('`O` is not an object');
		}
		if (typeof slot !== 'string') {
			throw new $TypeError('`slot` must be a string');
		}
		var slots = channel.get(O);
		return !!slots && hasOwn(slots, '$' + slot);
	},
	set: function (O, slot, V) {
		if (!O || (typeof O !== 'object' && typeof O !== 'function')) {
			throw new $TypeError('`O` is not an object');
		}
		if (typeof slot !== 'string') {
			throw new $TypeError('`slot` must be a string');
		}
		var slots = channel.get(O);
		if (!slots) {
			slots = {};
			channel.set(O, slots);
		}
		slots['$' + slot] = V;
	}
};

if (Object.freeze) {
	Object.freeze(SLOT);
}

module.exports = SLOT;

},{"es-errors/type":71,"hasown":164,"side-channel":205}],166:[function(require,module,exports){
'use strict';

var toStr = Object.prototype.toString;
var fnToStr = Function.prototype.toString;
var isFnRegex = /^\s*async(?:\s+function(?:\s+|\()|\s*\()/;
var hasToStringTag = require('has-tostringtag/shams')();
var getProto = Object.getPrototypeOf;
var getAsyncFunc = function () { // eslint-disable-line consistent-return
	if (!hasToStringTag) {
		return false;
	}
	try {
		return Function('return async function () {}')();
	} catch (e) {
	}
};
var AsyncFunction;

module.exports = function isAsyncFunction(fn) {
	if (typeof fn !== 'function') {
		return false;
	}
	if (isFnRegex.test(fnToStr.call(fn))) {
		return true;
	}
	if (!hasToStringTag) {
		var str = toStr.call(fn);
		return str === '[object AsyncFunction]';
	}
	if (!getProto) {
		return false;
	}
	if (typeof AsyncFunction === 'undefined') {
		var asyncFunc = getAsyncFunc();
		AsyncFunction = asyncFunc ? getProto(asyncFunc) : false;
	}
	return getProto(fn) === AsyncFunction;
};

},{"has-tostringtag/shams":163}],167:[function(require,module,exports){
'use strict';

var hasBigInts = require('has-bigints')();

if (hasBigInts) {
	var bigIntValueOf = BigInt.prototype.valueOf;
	var tryBigInt = function tryBigIntObject(value) {
		try {
			bigIntValueOf.call(value);
			return true;
		} catch (e) {
		}
		return false;
	};

	module.exports = function isBigInt(value) {
		if (
			value === null
			|| typeof value === 'undefined'
			|| typeof value === 'boolean'
			|| typeof value === 'string'
			|| typeof value === 'number'
			|| typeof value === 'symbol'
			|| typeof value === 'function'
		) {
			return false;
		}
		if (typeof value === 'bigint') {
			return true;
		}

		return tryBigInt(value);
	};
} else {
	module.exports = function isBigInt(value) {
		return false && value;
	};
}

},{"has-bigints":158}],168:[function(require,module,exports){
'use strict';

var callBound = require('call-bind/callBound');
var $boolToStr = callBound('Boolean.prototype.toString');
var $toString = callBound('Object.prototype.toString');

var tryBooleanObject = function booleanBrandCheck(value) {
	try {
		$boolToStr(value);
		return true;
	} catch (e) {
		return false;
	}
};
var boolClass = '[object Boolean]';
var hasToStringTag = require('has-tostringtag/shams')();

module.exports = function isBoolean(value) {
	if (typeof value === 'boolean') {
		return true;
	}
	if (value === null || typeof value !== 'object') {
		return false;
	}
	return hasToStringTag && Symbol.toStringTag in value ? tryBooleanObject(value) : $toString(value) === boolClass;
};

},{"call-bind/callBound":9,"has-tostringtag/shams":163}],169:[function(require,module,exports){
'use strict';

var fnToStr = Function.prototype.toString;
var reflectApply = typeof Reflect === 'object' && Reflect !== null && Reflect.apply;
var badArrayLike;
var isCallableMarker;
if (typeof reflectApply === 'function' && typeof Object.defineProperty === 'function') {
	try {
		badArrayLike = Object.defineProperty({}, 'length', {
			get: function () {
				throw isCallableMarker;
			}
		});
		isCallableMarker = {};
		// eslint-disable-next-line no-throw-literal
		reflectApply(function () { throw 42; }, null, badArrayLike);
	} catch (_) {
		if (_ !== isCallableMarker) {
			reflectApply = null;
		}
	}
} else {
	reflectApply = null;
}

var constructorRegex = /^\s*class\b/;
var isES6ClassFn = function isES6ClassFunction(value) {
	try {
		var fnStr = fnToStr.call(value);
		return constructorRegex.test(fnStr);
	} catch (e) {
		return false; // not a function
	}
};

var tryFunctionObject = function tryFunctionToStr(value) {
	try {
		if (isES6ClassFn(value)) { return false; }
		fnToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var objectClass = '[object Object]';
var fnClass = '[object Function]';
var genClass = '[object GeneratorFunction]';
var ddaClass = '[object HTMLAllCollection]'; // IE 11
var ddaClass2 = '[object HTML document.all class]';
var ddaClass3 = '[object HTMLCollection]'; // IE 9-10
var hasToStringTag = typeof Symbol === 'function' && !!Symbol.toStringTag; // better: use `has-tostringtag`

var isIE68 = !(0 in [,]); // eslint-disable-line no-sparse-arrays, comma-spacing

var isDDA = function isDocumentDotAll() { return false; };
if (typeof document === 'object') {
	// Firefox 3 canonicalizes DDA to undefined when it's not accessed directly
	var all = document.all;
	if (toStr.call(all) === toStr.call(document.all)) {
		isDDA = function isDocumentDotAll(value) {
			/* globals document: false */
			// in IE 6-8, typeof document.all is "object" and it's truthy
			if ((isIE68 || !value) && (typeof value === 'undefined' || typeof value === 'object')) {
				try {
					var str = toStr.call(value);
					return (
						str === ddaClass
						|| str === ddaClass2
						|| str === ddaClass3 // opera 12.16
						|| str === objectClass // IE 6-8
					) && value('') == null; // eslint-disable-line eqeqeq
				} catch (e) { /**/ }
			}
			return false;
		};
	}
}

module.exports = reflectApply
	? function isCallable(value) {
		if (isDDA(value)) { return true; }
		if (!value) { return false; }
		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
		try {
			reflectApply(value, null, badArrayLike);
		} catch (e) {
			if (e !== isCallableMarker) { return false; }
		}
		return !isES6ClassFn(value) && tryFunctionObject(value);
	}
	: function isCallable(value) {
		if (isDDA(value)) { return true; }
		if (!value) { return false; }
		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
		if (hasToStringTag) { return tryFunctionObject(value); }
		if (isES6ClassFn(value)) { return false; }
		var strClass = toStr.call(value);
		if (strClass !== fnClass && strClass !== genClass && !(/^\[object HTML/).test(strClass)) { return false; }
		return tryFunctionObject(value);
	};

},{}],170:[function(require,module,exports){
'use strict';

var getDay = Date.prototype.getDay;
var tryDateObject = function tryDateGetDayCall(value) {
	try {
		getDay.call(value);
		return true;
	} catch (e) {
		return false;
	}
};

var toStr = Object.prototype.toString;
var dateClass = '[object Date]';
var hasToStringTag = require('has-tostringtag/shams')();

module.exports = function isDateObject(value) {
	if (typeof value !== 'object' || value === null) {
		return false;
	}
	return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
};

},{"has-tostringtag/shams":163}],171:[function(require,module,exports){
'use strict';

var callBound = require('call-bind/callBound');

var $register = callBound('FinalizationRegistry.prototype.register', true);

module.exports = $register
	? function isFinalizationRegistry(value) {
		if (!value || typeof value !== 'object') {
			return false;
		}
		try {
			$register(value, {});
			return true;
		} catch (e) {
			return false;
		}
	}
	: function isFinalizationRegistry(value) { // eslint-disable-line no-unused-vars
		return false;
	};

},{"call-bind/callBound":9}],172:[function(require,module,exports){
'use strict';

var toStr = Object.prototype.toString;
var fnToStr = Function.prototype.toString;
var isFnRegex = /^\s*(?:function)?\*/;
var hasToStringTag = require('has-tostringtag/shams')();
var getProto = Object.getPrototypeOf;
var getGeneratorFunc = function () { // eslint-disable-line consistent-return
	if (!hasToStringTag) {
		return false;
	}
	try {
		return Function('return function*() {}')();
	} catch (e) {
	}
};
var GeneratorFunction;

module.exports = function isGeneratorFunction(fn) {
	if (typeof fn !== 'function') {
		return false;
	}
	if (isFnRegex.test(fnToStr.call(fn))) {
		return true;
	}
	if (!hasToStringTag) {
		var str = toStr.call(fn);
		return str === '[object GeneratorFunction]';
	}
	if (!getProto) {
		return false;
	}
	if (typeof GeneratorFunction === 'undefined') {
		var generatorFunc = getGeneratorFunc();
		GeneratorFunction = generatorFunc ? getProto(generatorFunc) : false;
	}
	return getProto(fn) === GeneratorFunction;
};

},{"has-tostringtag/shams":163}],173:[function(require,module,exports){
'use strict';

/** @const */
var $Map = typeof Map === 'function' && Map.prototype ? Map : null;
var $Set = typeof Set === 'function' && Set.prototype ? Set : null;

var exported;

if (!$Map) {
	/** @type {import('.')} */
	// eslint-disable-next-line no-unused-vars
	exported = function isMap(x) {
		// `Map` is not present in this environment.
		return false;
	};
}

var $mapHas = $Map ? Map.prototype.has : null;
var $setHas = $Set ? Set.prototype.has : null;
if (!exported && !$mapHas) {
	/** @type {import('.')} */
	// eslint-disable-next-line no-unused-vars
	exported = function isMap(x) {
		// `Map` does not have a `has` method
		return false;
	};
}

/** @type {import('.')} */
module.exports = exported || function isMap(x) {
	if (!x || typeof x !== 'object') {
		return false;
	}
	try {
		$mapHas.call(x);
		if ($setHas) {
			try {
				$setHas.call(x);
			} catch (e) {
				return true;
			}
		}
		// @ts-expect-error TS can't figure out that $Map is always truthy here
		return x instanceof $Map; // core-js workaround, pre-v2.5.0
	} catch (e) {}
	return false;
};

},{}],174:[function(require,module,exports){
'use strict';

var numToStr = Number.prototype.toString;
var tryNumberObject = function tryNumberObject(value) {
	try {
		numToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var numClass = '[object Number]';
var hasToStringTag = require('has-tostringtag/shams')();

module.exports = function isNumberObject(value) {
	if (typeof value === 'number') {
		return true;
	}
	if (typeof value !== 'object') {
		return false;
	}
	return hasToStringTag ? tryNumberObject(value) : toStr.call(value) === numClass;
};

},{"has-tostringtag/shams":163}],175:[function(require,module,exports){
'use strict';

var callBound = require('call-bind/callBound');
var hasToStringTag = require('has-tostringtag/shams')();
var has;
var $exec;
var isRegexMarker;
var badStringifier;

if (hasToStringTag) {
	has = callBound('Object.prototype.hasOwnProperty');
	$exec = callBound('RegExp.prototype.exec');
	isRegexMarker = {};

	var throwRegexMarker = function () {
		throw isRegexMarker;
	};
	badStringifier = {
		toString: throwRegexMarker,
		valueOf: throwRegexMarker
	};

	if (typeof Symbol.toPrimitive === 'symbol') {
		badStringifier[Symbol.toPrimitive] = throwRegexMarker;
	}
}

var $toString = callBound('Object.prototype.toString');
var gOPD = Object.getOwnPropertyDescriptor;
var regexClass = '[object RegExp]';

module.exports = hasToStringTag
	// eslint-disable-next-line consistent-return
	? function isRegex(value) {
		if (!value || typeof value !== 'object') {
			return false;
		}

		var descriptor = gOPD(value, 'lastIndex');
		var hasLastIndexDataProperty = descriptor && has(descriptor, 'value');
		if (!hasLastIndexDataProperty) {
			return false;
		}

		try {
			$exec(value, badStringifier);
		} catch (e) {
			return e === isRegexMarker;
		}
	}
	: function isRegex(value) {
		// In older browsers, typeof regex incorrectly returns 'function'
		if (!value || (typeof value !== 'object' && typeof value !== 'function')) {
			return false;
		}

		return $toString(value) === regexClass;
	};

},{"call-bind/callBound":9,"has-tostringtag/shams":163}],176:[function(require,module,exports){
'use strict';

var $Map = typeof Map === 'function' && Map.prototype ? Map : null;
var $Set = typeof Set === 'function' && Set.prototype ? Set : null;

var exported;

if (!$Set) {
	/** @type {import('.')} */
	// eslint-disable-next-line no-unused-vars
	exported = function isSet(x) {
		// `Set` is not present in this environment.
		return false;
	};
}

var $mapHas = $Map ? Map.prototype.has : null;
var $setHas = $Set ? Set.prototype.has : null;
if (!exported && !$setHas) {
	/** @type {import('.')} */
	// eslint-disable-next-line no-unused-vars
	exported = function isSet(x) {
		// `Set` does not have a `has` method
		return false;
	};
}

/** @type {import('.')} */
module.exports = exported || function isSet(x) {
	if (!x || typeof x !== 'object') {
		return false;
	}
	try {
		$setHas.call(x);
		if ($mapHas) {
			try {
				$mapHas.call(x);
			} catch (e) {
				return true;
			}
		}
		// @ts-expect-error TS can't figure out that $Set is always truthy here
		return x instanceof $Set; // core-js workaround, pre-v2.5.0
	} catch (e) {}
	return false;
};

},{}],177:[function(require,module,exports){
'use strict';

var strValue = String.prototype.valueOf;
var tryStringObject = function tryStringObject(value) {
	try {
		strValue.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var strClass = '[object String]';
var hasToStringTag = require('has-tostringtag/shams')();

module.exports = function isString(value) {
	if (typeof value === 'string') {
		return true;
	}
	if (typeof value !== 'object') {
		return false;
	}
	return hasToStringTag ? tryStringObject(value) : toStr.call(value) === strClass;
};

},{"has-tostringtag/shams":163}],178:[function(require,module,exports){
'use strict';

var toStr = Object.prototype.toString;
var hasSymbols = require('has-symbols')();

if (hasSymbols) {
	var symToStr = Symbol.prototype.toString;
	var symStringRegex = /^Symbol\(.*\)$/;
	var isSymbolObject = function isRealSymbolObject(value) {
		if (typeof value.valueOf() !== 'symbol') {
			return false;
		}
		return symStringRegex.test(symToStr.call(value));
	};

	module.exports = function isSymbol(value) {
		if (typeof value === 'symbol') {
			return true;
		}
		if (toStr.call(value) !== '[object Symbol]') {
			return false;
		}
		try {
			return isSymbolObject(value);
		} catch (e) {
			return false;
		}
	};
} else {

	module.exports = function isSymbol(value) {
		// this environment does not support Symbols.
		return false && value;
	};
}

},{"has-symbols":161}],179:[function(require,module,exports){
'use strict';

var $WeakMap = typeof WeakMap === 'function' && WeakMap.prototype ? WeakMap : null;
var $WeakSet = typeof WeakSet === 'function' && WeakSet.prototype ? WeakSet : null;

var exported;

if (!$WeakMap) {
	/** @type {import('.')} */
	// eslint-disable-next-line no-unused-vars
	exported = function isWeakMap(x) {
		// `WeakMap` is not present in this environment.
		return false;
	};
}

var $mapHas = $WeakMap ? $WeakMap.prototype.has : null;
var $setHas = $WeakSet ? $WeakSet.prototype.has : null;
if (!exported && !$mapHas) {
	/** @type {import('.')} */
	// eslint-disable-next-line no-unused-vars
	exported = function isWeakMap(x) {
		// `WeakMap` does not have a `has` method
		return false;
	};
}

/** @type {import('.')} */
module.exports = exported || function isWeakMap(x) {
	if (!x || typeof x !== 'object') {
		return false;
	}
	try {
		$mapHas.call(x, $mapHas);
		if ($setHas) {
			try {
				$setHas.call(x, $setHas);
			} catch (e) {
				return true;
			}
		}
		// @ts-expect-error TS can't figure out that $WeakMap is always truthy here
		return x instanceof $WeakMap; // core-js workaround, pre-v3
	} catch (e) {}
	return false;
};

},{}],180:[function(require,module,exports){
'use strict';

var callBound = require('call-bind/callBound');

var $deref = callBound('WeakRef.prototype.deref', true);

module.exports = typeof WeakRef === 'undefined'
	? function isWeakRef(value) { // eslint-disable-line no-unused-vars
		return false;
	}
	: function isWeakRef(value) {
		if (!value || typeof value !== 'object') {
			return false;
		}
		try {
			$deref(value);
			return true;
		} catch (e) {
			return false;
		}
	};

},{"call-bind/callBound":9}],181:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');
var callBound = require('call-bind/callBound');

var $WeakSet = GetIntrinsic('%WeakSet%', true);

var $setHas = callBound('WeakSet.prototype.has', true);

if ($setHas) {
	var $mapHas = callBound('WeakMap.prototype.has', true);

	/** @type {import('.')} */
	module.exports = function isWeakSet(x) {
		if (!x || typeof x !== 'object') {
			return false;
		}
		try {
			$setHas(x, $setHas);
			if ($mapHas) {
				try {
					$mapHas(x, $mapHas);
				} catch (e) {
					return true;
				}
			}
			// @ts-expect-error TS can't figure out that $WeakSet is always truthy here
			return x instanceof $WeakSet; // core-js workaround, pre-v3
		} catch (e) {}
		return false;
	};
} else {
	/** @type {import('.')} */
	// eslint-disable-next-line no-unused-vars
	module.exports = function isWeakSet(x) {
		// `WeakSet` does not exist, or does not have a `has` method
		return false;
	};
}

},{"call-bind/callBound":9,"get-intrinsic":148}],182:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');
var gPO = require('reflect.getprototypeof');
var hasSymbols = require('has-symbols');
var define = require('define-properties');
var setFunctionName = require('set-function-name');

var arrayIterProto = GetIntrinsic('%ArrayIteratorPrototype%', true);

var iterProto = arrayIterProto && gPO(arrayIterProto);

var result = (iterProto !== Object.prototype && iterProto) || {};

if (hasSymbols()) {
	var defined = {};
	var predicates = {};
	var trueThunk = function () {
		return true;
	};

	if (!(Symbol.iterator in result)) {
		// needed when result === iterProto, or, node 0.11.15 - 3
		defined[Symbol.iterator] = setFunctionName(function SymbolIterator() {
			return this;
		}, '[Symbol.iterator]', true);

		predicates[Symbol.iterator] = trueThunk;
	}

	define(result, defined, predicates);
}

module.exports = result;

},{"define-properties":13,"get-intrinsic":148,"has-symbols":161,"reflect.getprototypeof":194,"set-function-name":201}],183:[function(require,module,exports){
'use strict';

/** @type {import('./abs')} */
module.exports = Math.abs;

},{}],184:[function(require,module,exports){
'use strict';

/** @type {import('./floor')} */
module.exports = Math.floor;

},{}],185:[function(require,module,exports){
'use strict';

/** @type {import('./isNaN')} */
module.exports = Number.isNaN || function isNaN(a) {
	return a !== a;
};

},{}],186:[function(require,module,exports){
'use strict';

/** @type {import('./max')} */
module.exports = Math.max;

},{}],187:[function(require,module,exports){
'use strict';

/** @type {import('./min')} */
module.exports = Math.min;

},{}],188:[function(require,module,exports){
'use strict';

/** @type {import('./pow')} */
module.exports = Math.pow;

},{}],189:[function(require,module,exports){
'use strict';

/** @type {import('./round')} */
module.exports = Math.round;

},{}],190:[function(require,module,exports){
'use strict';

var $isNaN = require('./isNaN');

/** @type {import('./sign')} */
module.exports = function sign(number) {
	if ($isNaN(number) || number === 0) {
		return number;
	}
	return number < 0 ? -1 : +1;
};

},{"./isNaN":185}],191:[function(require,module,exports){
(function (global){(function (){
var hasMap = typeof Map === 'function' && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === 'function' && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var hasWeakRef = typeof WeakRef === 'function' && WeakRef.prototype;
var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var $match = String.prototype.match;
var $slice = String.prototype.slice;
var $replace = String.prototype.replace;
var $toUpperCase = String.prototype.toUpperCase;
var $toLowerCase = String.prototype.toLowerCase;
var $test = RegExp.prototype.test;
var $concat = Array.prototype.concat;
var $join = Array.prototype.join;
var $arrSlice = Array.prototype.slice;
var $floor = Math.floor;
var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? Symbol.prototype.toString : null;
var hasShammedSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'object';
// ie, `has-tostringtag/shams
var toStringTag = typeof Symbol === 'function' && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? 'object' : 'symbol')
    ? Symbol.toStringTag
    : null;
var isEnumerable = Object.prototype.propertyIsEnumerable;

var gPO = (typeof Reflect === 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) || (
    [].__proto__ === Array.prototype // eslint-disable-line no-proto
        ? function (O) {
            return O.__proto__; // eslint-disable-line no-proto
        }
        : null
);

function addNumericSeparator(num, str) {
    if (
        num === Infinity
        || num === -Infinity
        || num !== num
        || (num && num > -1000 && num < 1000)
        || $test.call(/e/, str)
    ) {
        return str;
    }
    var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof num === 'number') {
        var int = num < 0 ? -$floor(-num) : $floor(num); // trunc(num)
        if (int !== num) {
            var intStr = String(int);
            var dec = $slice.call(str, intStr.length + 1);
            return $replace.call(intStr, sepRegex, '$&_') + '.' + $replace.call($replace.call(dec, /([0-9]{3})/g, '$&_'), /_$/, '');
        }
    }
    return $replace.call(str, sepRegex, '$&_');
}

var utilInspect = require('./util.inspect');
var inspectCustom = utilInspect.custom;
var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;

var quotes = {
    __proto__: null,
    'double': '"',
    single: "'"
};
var quoteREs = {
    __proto__: null,
    'double': /(["\\])/g,
    single: /(['\\])/g
};

module.exports = function inspect_(obj, options, depth, seen) {
    var opts = options || {};

    if (has(opts, 'quoteStyle') && !has(quotes, opts.quoteStyle)) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }
    if (
        has(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number'
            ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity
            : opts.maxStringLength !== null
        )
    ) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    }
    var customInspect = has(opts, 'customInspect') ? opts.customInspect : true;
    if (typeof customInspect !== 'boolean' && customInspect !== 'symbol') {
        throw new TypeError('option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`');
    }

    if (
        has(opts, 'indent')
        && opts.indent !== null
        && opts.indent !== '\t'
        && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)
    ) {
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    }
    if (has(opts, 'numericSeparator') && typeof opts.numericSeparator !== 'boolean') {
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    }
    var numericSeparator = opts.numericSeparator;

    if (typeof obj === 'undefined') {
        return 'undefined';
    }
    if (obj === null) {
        return 'null';
    }
    if (typeof obj === 'boolean') {
        return obj ? 'true' : 'false';
    }

    if (typeof obj === 'string') {
        return inspectString(obj, opts);
    }
    if (typeof obj === 'number') {
        if (obj === 0) {
            return Infinity / obj > 0 ? '0' : '-0';
        }
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
    }
    if (typeof obj === 'bigint') {
        var bigIntStr = String(obj) + 'n';
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
    }

    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
    if (typeof depth === 'undefined') { depth = 0; }
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
        return isArray(obj) ? '[Array]' : '[Object]';
    }

    var indent = getIndent(opts, depth);

    if (typeof seen === 'undefined') {
        seen = [];
    } else if (indexOf(seen, obj) >= 0) {
        return '[Circular]';
    }

    function inspect(value, from, noIndent) {
        if (from) {
            seen = $arrSlice.call(seen);
            seen.push(from);
        }
        if (noIndent) {
            var newOpts = {
                depth: opts.depth
            };
            if (has(opts, 'quoteStyle')) {
                newOpts.quoteStyle = opts.quoteStyle;
            }
            return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
    }

    if (typeof obj === 'function' && !isRegExp(obj)) { // in older engines, regexes are callable
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + $join.call(keys, ', ') + ' }' : '');
    }
    if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, '$1') : symToString.call(obj);
        return typeof obj === 'object' && !hasShammedSymbols ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = '<' + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
        }
        s += '>';
        if (obj.childNodes && obj.childNodes.length) { s += '...'; }
        s += '</' + $toLowerCase.call(String(obj.nodeName)) + '>';
        return s;
    }
    if (isArray(obj)) {
        if (obj.length === 0) { return '[]'; }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
            return '[' + indentedJoin(xs, indent) + ']';
        }
        return '[ ' + $join.call(xs, ', ') + ' ]';
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (!('cause' in Error.prototype) && 'cause' in obj && !isEnumerable.call(obj, 'cause')) {
            return '{ [' + String(obj) + '] ' + $join.call($concat.call('[cause]: ' + inspect(obj.cause), parts), ', ') + ' }';
        }
        if (parts.length === 0) { return '[' + String(obj) + ']'; }
        return '{ [' + String(obj) + '] ' + $join.call(parts, ', ') + ' }';
    }
    if (typeof obj === 'object' && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === 'function' && utilInspect) {
            return utilInspect(obj, { depth: maxDepth - depth });
        } else if (customInspect !== 'symbol' && typeof obj.inspect === 'function') {
            return obj.inspect();
        }
    }
    if (isMap(obj)) {
        var mapParts = [];
        if (mapForEach) {
            mapForEach.call(obj, function (value, key) {
                mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
            });
        }
        return collectionOf('Map', mapSize.call(obj), mapParts, indent);
    }
    if (isSet(obj)) {
        var setParts = [];
        if (setForEach) {
            setForEach.call(obj, function (value) {
                setParts.push(inspect(value, obj));
            });
        }
        return collectionOf('Set', setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) {
        return weakCollectionOf('WeakMap');
    }
    if (isWeakSet(obj)) {
        return weakCollectionOf('WeakSet');
    }
    if (isWeakRef(obj)) {
        return weakCollectionOf('WeakRef');
    }
    if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
    }
    if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
    }
    // note: in IE 8, sometimes `global !== window` but both are the prototypes of each other
    /* eslint-env browser */
    if (typeof window !== 'undefined' && obj === window) {
        return '{ [object Window] }';
    }
    if (
        (typeof globalThis !== 'undefined' && obj === globalThis)
        || (typeof global !== 'undefined' && obj === global)
    ) {
        return '{ [object globalThis] }';
    }
    if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? '' : 'null prototype';
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? 'Object' : '';
        var constructorTag = isPlainObject || typeof obj.constructor !== 'function' ? '' : obj.constructor.name ? obj.constructor.name + ' ' : '';
        var tag = constructorTag + (stringTag || protoTag ? '[' + $join.call($concat.call([], stringTag || [], protoTag || []), ': ') + '] ' : '');
        if (ys.length === 0) { return tag + '{}'; }
        if (indent) {
            return tag + '{' + indentedJoin(ys, indent) + '}';
        }
        return tag + '{ ' + $join.call(ys, ', ') + ' }';
    }
    return String(obj);
};

function wrapQuotes(s, defaultStyle, opts) {
    var style = opts.quoteStyle || defaultStyle;
    var quoteChar = quotes[style];
    return quoteChar + s + quoteChar;
}

function quote(s) {
    return $replace.call(String(s), /"/g, '&quot;');
}

function canTrustToString(obj) {
    return !toStringTag || !(typeof obj === 'object' && (toStringTag in obj || typeof obj[toStringTag] !== 'undefined'));
}
function isArray(obj) { return toStr(obj) === '[object Array]' && canTrustToString(obj); }
function isDate(obj) { return toStr(obj) === '[object Date]' && canTrustToString(obj); }
function isRegExp(obj) { return toStr(obj) === '[object RegExp]' && canTrustToString(obj); }
function isError(obj) { return toStr(obj) === '[object Error]' && canTrustToString(obj); }
function isString(obj) { return toStr(obj) === '[object String]' && canTrustToString(obj); }
function isNumber(obj) { return toStr(obj) === '[object Number]' && canTrustToString(obj); }
function isBoolean(obj) { return toStr(obj) === '[object Boolean]' && canTrustToString(obj); }

// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
function isSymbol(obj) {
    if (hasShammedSymbols) {
        return obj && typeof obj === 'object' && obj instanceof Symbol;
    }
    if (typeof obj === 'symbol') {
        return true;
    }
    if (!obj || typeof obj !== 'object' || !symToString) {
        return false;
    }
    try {
        symToString.call(obj);
        return true;
    } catch (e) {}
    return false;
}

function isBigInt(obj) {
    if (!obj || typeof obj !== 'object' || !bigIntValueOf) {
        return false;
    }
    try {
        bigIntValueOf.call(obj);
        return true;
    } catch (e) {}
    return false;
}

var hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };
function has(obj, key) {
    return hasOwn.call(obj, key);
}

function toStr(obj) {
    return objectToString.call(obj);
}

function nameOf(f) {
    if (f.name) { return f.name; }
    var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
    if (m) { return m[1]; }
    return null;
}

function indexOf(xs, x) {
    if (xs.indexOf) { return xs.indexOf(x); }
    for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) { return i; }
    }
    return -1;
}

function isMap(x) {
    if (!mapSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        mapSize.call(x);
        try {
            setSize.call(x);
        } catch (s) {
            return true;
        }
        return x instanceof Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakMapHas.call(x, weakMapHas);
        try {
            weakSetHas.call(x, weakSetHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakRef(x) {
    if (!weakRefDeref || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakRefDeref.call(x);
        return true;
    } catch (e) {}
    return false;
}

function isSet(x) {
    if (!setSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        setSize.call(x);
        try {
            mapSize.call(x);
        } catch (m) {
            return true;
        }
        return x instanceof Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakSetHas.call(x, weakSetHas);
        try {
            weakMapHas.call(x, weakMapHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isElement(x) {
    if (!x || typeof x !== 'object') { return false; }
    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
        return true;
    }
    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
}

function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
    }
    var quoteRE = quoteREs[opts.quoteStyle || 'single'];
    quoteRE.lastIndex = 0;
    // eslint-disable-next-line no-control-regex
    var s = $replace.call($replace.call(str, quoteRE, '\\$1'), /[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, 'single', opts);
}

function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
        8: 'b',
        9: 't',
        10: 'n',
        12: 'f',
        13: 'r'
    }[n];
    if (x) { return '\\' + x; }
    return '\\x' + (n < 0x10 ? '0' : '') + $toUpperCase.call(n.toString(16));
}

function markBoxed(str) {
    return 'Object(' + str + ')';
}

function weakCollectionOf(type) {
    return type + ' { ? }';
}

function collectionOf(type, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ', ');
    return type + ' (' + size + ') {' + joinedEntries + '}';
}

function singleLineValues(xs) {
    for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], '\n') >= 0) {
            return false;
        }
    }
    return true;
}

function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === '\t') {
        baseIndent = '\t';
    } else if (typeof opts.indent === 'number' && opts.indent > 0) {
        baseIndent = $join.call(Array(opts.indent + 1), ' ');
    } else {
        return null;
    }
    return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
    };
}

function indentedJoin(xs, indent) {
    if (xs.length === 0) { return ''; }
    var lineJoiner = '\n' + indent.prev + indent.base;
    return lineJoiner + $join.call(xs, ',' + lineJoiner) + '\n' + indent.prev;
}

function arrObjKeys(obj, inspect) {
    var isArr = isArray(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
        }
    }
    var syms = typeof gOPS === 'function' ? gOPS(obj) : [];
    var symMap;
    if (hasShammedSymbols) {
        symMap = {};
        for (var k = 0; k < syms.length; k++) {
            symMap['$' + syms[k]] = syms[k];
        }
    }

    for (var key in obj) { // eslint-disable-line no-restricted-syntax
        if (!has(obj, key)) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (isArr && String(Number(key)) === key && key < obj.length) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (hasShammedSymbols && symMap['$' + key] instanceof Symbol) {
            // this is to prevent shammed Symbols, which are stored as strings, from being included in the string key section
            continue; // eslint-disable-line no-restricted-syntax, no-continue
        } else if ($test.call(/[^\w$]/, key)) {
            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
        } else {
            xs.push(key + ': ' + inspect(obj[key], obj));
        }
    }
    if (typeof gOPS === 'function') {
        for (var j = 0; j < syms.length; j++) {
            if (isEnumerable.call(obj, syms[j])) {
                xs.push('[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj));
            }
        }
    }
    return xs;
}

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./util.inspect":2}],192:[function(require,module,exports){
'use strict';

/** @type {import('.')} */
module.exports = [
	'Float32Array',
	'Float64Array',
	'Int8Array',
	'Int16Array',
	'Int32Array',
	'Uint8Array',
	'Uint8ClampedArray',
	'Uint16Array',
	'Uint32Array',
	'BigInt64Array',
	'BigUint64Array'
];

},{}],193:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');
var IsCallable = require('es-abstract/2024/IsCallable');
var Type = require('es-abstract/2024/Type');
var whichBuiltinType = require('which-builtin-type');
var $TypeError = require('es-errors/type');

var $gPO = GetIntrinsic('%Object.getPrototypeOf%', true);
var $ObjectPrototype = GetIntrinsic('%Object.prototype%');

var hasProto = [].__proto__ === Array.prototype; // eslint-disable-line no-proto

module.exports = function getPrototypeOf(O) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Reflect.getPrototypeOf called on non-object');
	}

	if ($gPO) {
		return $gPO(O);
	}

	if (hasProto) {
		// eslint-disable-next-line no-proto
		var proto = O.__proto__;
		if (proto || proto === null) {
			return proto;
		}
	}
	var type = whichBuiltinType(O);
	if (type) {
		var intrinsic = GetIntrinsic('%' + type + '.prototype%', true);
		if (intrinsic) {
			return intrinsic;
		}
	}
	if (IsCallable(O.constructor)) {
		return O.constructor.prototype;
	}
	if (O instanceof Object) {
		return $ObjectPrototype;
	}

	/*
	 * Correctly return null for Objects created with `Object.create(null)` (shammed or native) or `{ __proto__: null}`.  Also returns null for
	 * cross-realm objects on browsers that lack `__proto__` support (like IE <11), but that's the best we can do.
	 */
	return null;
};

},{"es-abstract/2024/IsCallable":31,"es-abstract/2024/Type":48,"es-errors/type":71,"get-intrinsic":148,"which-builtin-type":211}],194:[function(require,module,exports){
'use strict';

var callBind = require('call-bind');
var define = require('define-properties');

var implementation = require('./implementation');
var getPolyfill = require('./polyfill');
var shim = require('./shim');

var bound = callBind(getPolyfill(), typeof Reflect === 'object' ? Reflect : Object);

define(bound, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = bound;

},{"./implementation":193,"./polyfill":195,"./shim":196,"call-bind":10,"define-properties":13}],195:[function(require,module,exports){
'use strict';

var Type = require('es-abstract/2024/Type');

var $TypeError = require('es-errors/type');

var implementation = require('./implementation');

var hasProto = [].__proto__ === Array.prototype; // eslint-disable-line no-proto

var getProto = function getPrototypeOf(value) {
	if (Type(value) !== 'Object') {
		throw new $TypeError('Reflect.getPrototypeOf called on non-object');
	}
	return value.__proto__; // eslint-disable-line no-proto
};

module.exports = function getPolyfill() {
	if (typeof Reflect === 'object' && Reflect && Reflect.getPrototypeOf) {
		return Reflect.getPrototypeOf;
	}
	if (hasProto) {
		return getProto;
	}
	return implementation;
};

},{"./implementation":193,"es-abstract/2024/Type":48,"es-errors/type":71}],196:[function(require,module,exports){
(function (global){(function (){
'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

module.exports = function shimGetPrototypeOf() {
	define(
		global,
		{ Reflect: {} },
		{ Reflect: function () { return typeof Reflect !== 'object' || !Reflect; } }
	);

	var polyfill = getPolyfill();
	define(
		Reflect,
		{ getPrototypeOf: polyfill },
		{ getPrototypeOf: function () { return Reflect.getPrototypeOf !== polyfill; } }
	);

	return polyfill;
};

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./polyfill":195,"define-properties":13}],197:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');
var $concat = GetIntrinsic('%Array.prototype.concat%');

var callBind = require('call-bind');

var callBound = require('call-bind/callBound');
var $slice = callBound('Array.prototype.slice');

var hasSymbols = require('has-symbols/shams')();
var isConcatSpreadable = hasSymbols && Symbol.isConcatSpreadable;

/** @type {never[]} */ var empty = [];
var $concatApply = isConcatSpreadable ? callBind.apply($concat, empty) : null;

// eslint-disable-next-line no-extra-parens
var isArray = isConcatSpreadable ? /** @type {(value: unknown) => value is unknown[]} */ (require('isarray')) : null;

/** @type {import('.')} */
module.exports = isConcatSpreadable
	// eslint-disable-next-line no-unused-vars
	? function safeArrayConcat(item) {
		for (var i = 0; i < arguments.length; i += 1) {
			/** @type {typeof item} */ var arg = arguments[i];
			// @ts-expect-error ts(2538) see https://github.com/microsoft/TypeScript/issues/9998#issuecomment-1890787975; works if `const`
			if (arg && typeof arg === 'object' && typeof arg[isConcatSpreadable] === 'boolean') {
				// @ts-expect-error ts(7015) TS doesn't yet support Symbol indexing
				if (!empty[isConcatSpreadable]) {
					// @ts-expect-error ts(7015) TS doesn't yet support Symbol indexing
					empty[isConcatSpreadable] = true;
				}
				// @ts-expect-error ts(2721) ts(18047) not sure why TS can't figure out this can't be null
				var arr = isArray(arg) ? $slice(arg) : [arg];
				// @ts-expect-error ts(7015) TS can't handle expandos on an array
				arr[isConcatSpreadable] = true; // shadow the property. TODO: use [[Define]]
				arguments[i] = arr;
			}
		}
		// @ts-expect-error ts(2345) https://github.com/microsoft/TypeScript/issues/57164 TS doesn't understand that apply can take an arguments object
		return $concatApply(arguments);
	}
	: callBind($concat, empty);

},{"call-bind":10,"call-bind/callBound":9,"get-intrinsic":148,"has-symbols/shams":162,"isarray":198}],198:[function(require,module,exports){
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],199:[function(require,module,exports){
'use strict';

var callBound = require('call-bind/callBound');
var isRegex = require('is-regex');

var $exec = callBound('RegExp.prototype.exec');
var $TypeError = require('es-errors/type');

module.exports = function regexTester(regex) {
	if (!isRegex(regex)) {
		throw new $TypeError('`regex` must be a RegExp');
	}
	return function test(s) {
		return $exec(regex, s) !== null;
	};
};

},{"call-bind/callBound":9,"es-errors/type":71,"is-regex":175}],200:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');
var define = require('define-data-property');
var hasDescriptors = require('has-property-descriptors')();
var gOPD = require('gopd');

var $TypeError = require('es-errors/type');
var $floor = GetIntrinsic('%Math.floor%');

/** @type {import('.')} */
module.exports = function setFunctionLength(fn, length) {
	if (typeof fn !== 'function') {
		throw new $TypeError('`fn` is not a function');
	}
	if (typeof length !== 'number' || length < 0 || length > 0xFFFFFFFF || $floor(length) !== length) {
		throw new $TypeError('`length` must be a positive 32-bit integer');
	}

	var loose = arguments.length > 2 && !!arguments[2];

	var functionLengthIsConfigurable = true;
	var functionLengthIsWritable = true;
	if ('length' in fn && gOPD) {
		var desc = gOPD(fn, 'length');
		if (desc && !desc.configurable) {
			functionLengthIsConfigurable = false;
		}
		if (desc && !desc.writable) {
			functionLengthIsWritable = false;
		}
	}

	if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {
		if (hasDescriptors) {
			define(/** @type {Parameters<define>[0]} */ (fn), 'length', length, true, true);
		} else {
			define(/** @type {Parameters<define>[0]} */ (fn), 'length', length);
		}
	}
	return fn;
};

},{"define-data-property":12,"es-errors/type":71,"get-intrinsic":148,"gopd":157,"has-property-descriptors":159}],201:[function(require,module,exports){
'use strict';

var define = require('define-data-property');
var hasDescriptors = require('has-property-descriptors')();
var functionsHaveConfigurableNames = require('functions-have-names').functionsHaveConfigurableNames();

var $TypeError = require('es-errors/type');

/** @type {import('.')} */
module.exports = function setFunctionName(fn, name) {
	if (typeof fn !== 'function') {
		throw new $TypeError('`fn` is not a function');
	}
	var loose = arguments.length > 2 && !!arguments[2];
	if (!loose || functionsHaveConfigurableNames) {
		if (hasDescriptors) {
			define(/** @type {Parameters<define>[0]} */ (fn), 'name', name, true, true);
		} else {
			define(/** @type {Parameters<define>[0]} */ (fn), 'name', name);
		}
	}
	return fn;
};

},{"define-data-property":12,"es-errors/type":71,"functions-have-names":147,"has-property-descriptors":159}],202:[function(require,module,exports){
'use strict';

var inspect = require('object-inspect');

var $TypeError = require('es-errors/type');

/*
* This function traverses the list returning the node corresponding to the given key.
*
* That node is also moved to the head of the list, so that if it's accessed again we don't need to traverse the whole list.
* By doing so, all the recently used nodes can be accessed relatively quickly.
*/
/** @type {import('./list.d.ts').listGetNode} */
// eslint-disable-next-line consistent-return
var listGetNode = function (list, key, isDelete) {
	/** @type {typeof list | NonNullable<(typeof list)['next']>} */
	var prev = list;
	/** @type {(typeof list)['next']} */
	var curr;
	// eslint-disable-next-line eqeqeq
	for (; (curr = prev.next) != null; prev = curr) {
		if (curr.key === key) {
			prev.next = curr.next;
			if (!isDelete) {
				// eslint-disable-next-line no-extra-parens
				curr.next = /** @type {NonNullable<typeof list.next>} */ (list.next);
				list.next = curr; // eslint-disable-line no-param-reassign
			}
			return curr;
		}
	}
};

/** @type {import('./list.d.ts').listGet} */
var listGet = function (objects, key) {
	if (!objects) {
		return void undefined;
	}
	var node = listGetNode(objects, key);
	return node && node.value;
};
/** @type {import('./list.d.ts').listSet} */
var listSet = function (objects, key, value) {
	var node = listGetNode(objects, key);
	if (node) {
		node.value = value;
	} else {
		// Prepend the new node to the beginning of the list
		objects.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */ ({ // eslint-disable-line no-param-reassign, no-extra-parens
			key: key,
			next: objects.next,
			value: value
		});
	}
};
/** @type {import('./list.d.ts').listHas} */
var listHas = function (objects, key) {
	if (!objects) {
		return false;
	}
	return !!listGetNode(objects, key);
};
/** @type {import('./list.d.ts').listDelete} */
// eslint-disable-next-line consistent-return
var listDelete = function (objects, key) {
	if (objects) {
		return listGetNode(objects, key, true);
	}
};

/** @type {import('.')} */
module.exports = function getSideChannelList() {
	/** @typedef {ReturnType<typeof getSideChannelList>} Channel */
	/** @typedef {Parameters<Channel['get']>[0]} K */
	/** @typedef {Parameters<Channel['set']>[1]} V */

	/** @type {import('./list.d.ts').RootNode<V, K> | undefined} */ var $o;

	/** @type {Channel} */
	var channel = {
		assert: function (key) {
			if (!channel.has(key)) {
				throw new $TypeError('Side channel does not contain ' + inspect(key));
			}
		},
		'delete': function (key) {
			var root = $o && $o.next;
			var deletedNode = listDelete($o, key);
			if (deletedNode && root && root === deletedNode) {
				$o = void undefined;
			}
			return !!deletedNode;
		},
		get: function (key) {
			return listGet($o, key);
		},
		has: function (key) {
			return listHas($o, key);
		},
		set: function (key, value) {
			if (!$o) {
				// Initialize the linked list as an empty node, so that we don't have to special-case handling of the first node: we can always refer to it as (previous node).next, instead of something like (list).head
				$o = {
					next: void undefined
				};
			}
			// eslint-disable-next-line no-extra-parens
			listSet(/** @type {NonNullable<typeof $o>} */ ($o), key, value);
		}
	};
	// @ts-expect-error TODO: figure out why this is erroring
	return channel;
};

},{"es-errors/type":71,"object-inspect":191}],203:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');
var callBound = require('call-bound');
var inspect = require('object-inspect');

var $TypeError = require('es-errors/type');
var $Map = GetIntrinsic('%Map%', true);

/** @type {<K, V>(thisArg: Map<K, V>, key: K) => V} */
var $mapGet = callBound('Map.prototype.get', true);
/** @type {<K, V>(thisArg: Map<K, V>, key: K, value: V) => void} */
var $mapSet = callBound('Map.prototype.set', true);
/** @type {<K, V>(thisArg: Map<K, V>, key: K) => boolean} */
var $mapHas = callBound('Map.prototype.has', true);
/** @type {<K, V>(thisArg: Map<K, V>, key: K) => boolean} */
var $mapDelete = callBound('Map.prototype.delete', true);
/** @type {<K, V>(thisArg: Map<K, V>) => number} */
var $mapSize = callBound('Map.prototype.size', true);

/** @type {import('.')} */
module.exports = !!$Map && /** @type {Exclude<import('.'), false>} */ function getSideChannelMap() {
	/** @typedef {ReturnType<typeof getSideChannelMap>} Channel */
	/** @typedef {Parameters<Channel['get']>[0]} K */
	/** @typedef {Parameters<Channel['set']>[1]} V */

	/** @type {Map<K, V> | undefined} */ var $m;

	/** @type {Channel} */
	var channel = {
		assert: function (key) {
			if (!channel.has(key)) {
				throw new $TypeError('Side channel does not contain ' + inspect(key));
			}
		},
		'delete': function (key) {
			if ($m) {
				var result = $mapDelete($m, key);
				if ($mapSize($m) === 0) {
					$m = void undefined;
				}
				return result;
			}
			return false;
		},
		get: function (key) { // eslint-disable-line consistent-return
			if ($m) {
				return $mapGet($m, key);
			}
		},
		has: function (key) {
			if ($m) {
				return $mapHas($m, key);
			}
			return false;
		},
		set: function (key, value) {
			if (!$m) {
				// @ts-expect-error TS can't handle narrowing a variable inside a closure
				$m = new $Map();
			}
			$mapSet($m, key, value);
		}
	};

	// @ts-expect-error TODO: figure out why TS is erroring here
	return channel;
};

},{"call-bound":11,"es-errors/type":71,"get-intrinsic":148,"object-inspect":191}],204:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');
var callBound = require('call-bound');
var inspect = require('object-inspect');
var getSideChannelMap = require('side-channel-map');

var $TypeError = require('es-errors/type');
var $WeakMap = GetIntrinsic('%WeakMap%', true);

/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K) => V} */
var $weakMapGet = callBound('WeakMap.prototype.get', true);
/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K, value: V) => void} */
var $weakMapSet = callBound('WeakMap.prototype.set', true);
/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K) => boolean} */
var $weakMapHas = callBound('WeakMap.prototype.has', true);
/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K) => boolean} */
var $weakMapDelete = callBound('WeakMap.prototype.delete', true);

/** @type {import('.')} */
module.exports = $WeakMap
	? /** @type {Exclude<import('.'), false>} */ function getSideChannelWeakMap() {
		/** @typedef {ReturnType<typeof getSideChannelWeakMap>} Channel */
		/** @typedef {Parameters<Channel['get']>[0]} K */
		/** @typedef {Parameters<Channel['set']>[1]} V */

		/** @type {WeakMap<K & object, V> | undefined} */ var $wm;
		/** @type {Channel | undefined} */ var $m;

		/** @type {Channel} */
		var channel = {
			assert: function (key) {
				if (!channel.has(key)) {
					throw new $TypeError('Side channel does not contain ' + inspect(key));
				}
			},
			'delete': function (key) {
				if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
					if ($wm) {
						return $weakMapDelete($wm, key);
					}
				} else if (getSideChannelMap) {
					if ($m) {
						return $m['delete'](key);
					}
				}
				return false;
			},
			get: function (key) {
				if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
					if ($wm) {
						return $weakMapGet($wm, key);
					}
				}
				return $m && $m.get(key);
			},
			has: function (key) {
				if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
					if ($wm) {
						return $weakMapHas($wm, key);
					}
				}
				return !!$m && $m.has(key);
			},
			set: function (key, value) {
				if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
					if (!$wm) {
						$wm = new $WeakMap();
					}
					$weakMapSet($wm, key, value);
				} else if (getSideChannelMap) {
					if (!$m) {
						$m = getSideChannelMap();
					}
					// eslint-disable-next-line no-extra-parens
					/** @type {NonNullable<typeof $m>} */ ($m).set(key, value);
				}
			}
		};

		// @ts-expect-error TODO: figure out why this is erroring
		return channel;
	}
	: getSideChannelMap;

},{"call-bound":11,"es-errors/type":71,"get-intrinsic":148,"object-inspect":191,"side-channel-map":203}],205:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');
var inspect = require('object-inspect');
var getSideChannelList = require('side-channel-list');
var getSideChannelMap = require('side-channel-map');
var getSideChannelWeakMap = require('side-channel-weakmap');

var makeChannel = getSideChannelWeakMap || getSideChannelMap || getSideChannelList;

/** @type {import('.')} */
module.exports = function getSideChannel() {
	/** @typedef {ReturnType<typeof getSideChannel>} Channel */

	/** @type {Channel | undefined} */ var $channelData;

	/** @type {Channel} */
	var channel = {
		assert: function (key) {
			if (!channel.has(key)) {
				throw new $TypeError('Side channel does not contain ' + inspect(key));
			}
		},
		'delete': function (key) {
			return !!$channelData && $channelData['delete'](key);
		},
		get: function (key) {
			return $channelData && $channelData.get(key);
		},
		has: function (key) {
			return !!$channelData && $channelData.has(key);
		},
		set: function (key, value) {
			if (!$channelData) {
				$channelData = makeChannel();
			}

			$channelData.set(key, value);
		}
	};
	// @ts-expect-error TODO: figure out why this is erroring
	return channel;
};

},{"es-errors/type":71,"object-inspect":191,"side-channel-list":202,"side-channel-map":203,"side-channel-weakmap":204}],206:[function(require,module,exports){
'use strict';

var RequireObjectCoercible = require('es-object-atoms/RequireObjectCoercible');
var ToString = require('es-abstract/2024/ToString');
var callBound = require('call-bind/callBound');
var $replace = callBound('String.prototype.replace');

var mvsIsWS = (/^\s$/).test('\u180E');
/* eslint-disable no-control-regex */
var leftWhitespace = mvsIsWS
	? /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/
	: /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/;
var rightWhitespace = mvsIsWS
	? /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/
	: /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/;
/* eslint-enable no-control-regex */

module.exports = function trim() {
	var S = ToString(RequireObjectCoercible(this));
	return $replace($replace(S, leftWhitespace, ''), rightWhitespace, '');
};

},{"call-bind/callBound":9,"es-abstract/2024/ToString":47,"es-object-atoms/RequireObjectCoercible":135}],207:[function(require,module,exports){
'use strict';

var callBind = require('call-bind');
var define = require('define-properties');
var RequireObjectCoercible = require('es-object-atoms/RequireObjectCoercible');

var implementation = require('./implementation');
var getPolyfill = require('./polyfill');
var shim = require('./shim');

var bound = callBind(getPolyfill());
var boundMethod = function trim(receiver) {
	RequireObjectCoercible(receiver);
	return bound(receiver);
};

define(boundMethod, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = boundMethod;

},{"./implementation":206,"./polyfill":208,"./shim":209,"call-bind":10,"define-properties":13,"es-object-atoms/RequireObjectCoercible":135}],208:[function(require,module,exports){
'use strict';

var implementation = require('./implementation');

var zeroWidthSpace = '\u200b';
var mongolianVowelSeparator = '\u180E';

module.exports = function getPolyfill() {
	if (
		String.prototype.trim
		&& zeroWidthSpace.trim() === zeroWidthSpace
		&& mongolianVowelSeparator.trim() === mongolianVowelSeparator
		&& ('_' + mongolianVowelSeparator).trim() === ('_' + mongolianVowelSeparator)
		&& (mongolianVowelSeparator + '_').trim() === (mongolianVowelSeparator + '_')
	) {
		return String.prototype.trim;
	}
	return implementation;
};

},{"./implementation":206}],209:[function(require,module,exports){
'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

module.exports = function shimStringTrim() {
	var polyfill = getPolyfill();
	define(String.prototype, { trim: polyfill }, {
		trim: function testTrim() {
			return String.prototype.trim !== polyfill;
		}
	});
	return polyfill;
};

},{"./polyfill":208,"define-properties":13}],210:[function(require,module,exports){
'use strict';

var isString = require('is-string');
var isNumber = require('is-number-object');
var isBoolean = require('is-boolean-object');
var isSymbol = require('is-symbol');
var isBigInt = require('is-bigint');

// eslint-disable-next-line consistent-return
module.exports = function whichBoxedPrimitive(value) {
	// eslint-disable-next-line eqeqeq
	if (value == null || (typeof value !== 'object' && typeof value !== 'function')) {
		return null;
	}
	if (isString(value)) {
		return 'String';
	}
	if (isNumber(value)) {
		return 'Number';
	}
	if (isBoolean(value)) {
		return 'Boolean';
	}
	if (isSymbol(value)) {
		return 'Symbol';
	}
	if (isBigInt(value)) {
		return 'BigInt';
	}
};

},{"is-bigint":167,"is-boolean-object":168,"is-number-object":174,"is-string":177,"is-symbol":178}],211:[function(require,module,exports){
'use strict';

var whichBoxedPrimitive = require('which-boxed-primitive');
var whichCollection = require('which-collection');
var whichTypedArray = require('which-typed-array');
var isArray = require('isarray');
var isDate = require('is-date-object');
var isRegex = require('is-regex');
var isWeakRef = require('is-weakref');
var isFinalizationRegistry = require('is-finalizationregistry');
var name = require('function.prototype.name');
var isGeneratorFunction = require('is-generator-function');
var isAsyncFunction = require('is-async-function');
var hasToStringTag = require('has-tostringtag/shams')();
var toStringTag = hasToStringTag && Symbol.toStringTag;

var $Object = Object;

var promiseThen = typeof Promise === 'function' && Promise.prototype.then;
var isPromise = function isPromise(value) {
	if (!value || typeof value !== 'object' || !promiseThen) {
		return false;
	}
	try {
		promiseThen.call(value, null, function () {});
		return true;
	} catch (e) {}
	return false;
};

var isKnownBuiltin = function isKnownBuiltin(builtinName) {
	return builtinName
		// primitives
		&& builtinName !== 'BigInt'
		&& builtinName !== 'Boolean'
		&& builtinName !== 'Null'
		&& builtinName !== 'Number'
		&& builtinName !== 'String'
		&& builtinName !== 'Symbol'
		&& builtinName !== 'Undefined'
		// namespaces
		&& builtinName !== 'Math'
		&& builtinName !== 'JSON'
		&& builtinName !== 'Reflect'
		&& builtinName !== 'Atomics'
		// collections
		&& builtinName !== 'Map'
		&& builtinName !== 'Set'
		&& builtinName !== 'WeakMap'
		&& builtinName !== 'WeakSet'
		// typed arrays
		&& builtinName !== 'BigInt64Array'
		&& builtinName !== 'BigUint64Array'
		&& builtinName !== 'Float32Array'
		&& builtinName !== 'Float64Array'
		&& builtinName !== 'Int16Array'
		&& builtinName !== 'Int32Array'
		&& builtinName !== 'Int8Array'
		&& builtinName !== 'Uint16Array'
		&& builtinName !== 'Uint32Array'
		&& builtinName !== 'Uint8Array'
		&& builtinName !== 'Uint8ClampedArray'
		// checked explicitly
		&& builtinName !== 'Array'
		&& builtinName !== 'Date'
		&& builtinName !== 'FinalizationRegistry'
		&& builtinName !== 'Promise'
		&& builtinName !== 'RegExp'
		&& builtinName !== 'WeakRef'
		// functions
		&& builtinName !== 'Function'
		&& builtinName !== 'GeneratorFunction'
		&& builtinName !== 'AsyncFunction';
};

module.exports = function whichBuiltinType(value) {
	if (value == null) {
		return value;
	}
	// covers: primitives, {,Weak}Map/Set, typed arrays
	var which = whichBoxedPrimitive($Object(value)) || whichCollection(value) || whichTypedArray(value);
	if (which) {
		return which;
	}
	if (isArray(value)) {
		return 'Array';
	}
	if (isDate(value)) {
		return 'Date';
	}
	if (isRegex(value)) {
		return 'RegExp';
	}
	if (isWeakRef(value)) {
		return 'WeakRef';
	}
	if (isFinalizationRegistry(value)) {
		return 'FinalizationRegistry';
	}
	if (typeof value === 'function') {
		if (isGeneratorFunction(value)) {
			return 'GeneratorFunction';
		}
		if (isAsyncFunction(value)) {
			return 'AsyncFunction';
		}
		return 'Function';
	}
	if (isPromise(value)) {
		return 'Promise';
	}
	if (toStringTag && toStringTag in value) {
		var tag = value[toStringTag];
		if (isKnownBuiltin(tag)) {
			return tag;
		}
	}
	if (typeof value.constructor === 'function') {
		var constructorName = name(value.constructor);
		if (isKnownBuiltin(constructorName)) {
			return constructorName;
		}
	}
	return 'Object';
};

},{"function.prototype.name":144,"has-tostringtag/shams":163,"is-async-function":166,"is-date-object":170,"is-finalizationregistry":171,"is-generator-function":172,"is-regex":175,"is-weakref":180,"isarray":212,"which-boxed-primitive":210,"which-collection":213,"which-typed-array":214}],212:[function(require,module,exports){
arguments[4][198][0].apply(exports,arguments)
},{"dup":198}],213:[function(require,module,exports){
'use strict';

var isMap = require('is-map');
var isSet = require('is-set');
var isWeakMap = require('is-weakmap');
var isWeakSet = require('is-weakset');

/** @type {import('.')} */
module.exports = function whichCollection(/** @type {unknown} */ value) {
	if (value && typeof value === 'object') {
		if (isMap(value)) {
			return 'Map';
		}
		if (isSet(value)) {
			return 'Set';
		}
		if (isWeakMap(value)) {
			return 'WeakMap';
		}
		if (isWeakSet(value)) {
			return 'WeakSet';
		}
	}
	return false;
};

},{"is-map":173,"is-set":176,"is-weakmap":179,"is-weakset":181}],214:[function(require,module,exports){
(function (global){(function (){
'use strict';

var forEach = require('for-each');
var availableTypedArrays = require('available-typed-arrays');
var callBind = require('call-bind');
var callBound = require('call-bound');
var gOPD = require('gopd');
var getProto = require('get-proto');

var $toString = callBound('Object.prototype.toString');
var hasToStringTag = require('has-tostringtag/shams')();

var g = typeof globalThis === 'undefined' ? global : globalThis;
var typedArrays = availableTypedArrays();

var $slice = callBound('String.prototype.slice');

/** @type {<T = unknown>(array: readonly T[], value: unknown) => number} */
var $indexOf = callBound('Array.prototype.indexOf', true) || function indexOf(array, value) {
	for (var i = 0; i < array.length; i += 1) {
		if (array[i] === value) {
			return i;
		}
	}
	return -1;
};

/** @typedef {import('./types').Getter} Getter */
/** @type {import('./types').Cache} */
var cache = { __proto__: null };
if (hasToStringTag && gOPD && getProto) {
	forEach(typedArrays, function (typedArray) {
		var arr = new g[typedArray]();
		if (Symbol.toStringTag in arr && getProto) {
			var proto = getProto(arr);
			// @ts-expect-error TS won't narrow inside a closure
			var descriptor = gOPD(proto, Symbol.toStringTag);
			if (!descriptor && proto) {
				var superProto = getProto(proto);
				// @ts-expect-error TS won't narrow inside a closure
				descriptor = gOPD(superProto, Symbol.toStringTag);
			}
			// @ts-expect-error TODO: fix
			cache['$' + typedArray] = callBind(descriptor.get);
		}
	});
} else {
	forEach(typedArrays, function (typedArray) {
		var arr = new g[typedArray]();
		var fn = arr.slice || arr.set;
		if (fn) {
			cache[
				/** @type {`$${import('.').TypedArrayName}`} */ ('$' + typedArray)
			] = /** @type {import('./types').BoundSlice | import('./types').BoundSet} */ (
				// @ts-expect-error TODO FIXME
				callBind(fn)
			);
		}
	});
}

/** @type {(value: object) => false | import('.').TypedArrayName} */
var tryTypedArrays = function tryAllTypedArrays(value) {
	/** @type {ReturnType<typeof tryAllTypedArrays>} */ var found = false;
	forEach(
		/** @type {Record<`\$${import('.').TypedArrayName}`, Getter>} */ (cache),
		/** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
		function (getter, typedArray) {
			if (!found) {
				try {
					// @ts-expect-error a throw is fine here
					if ('$' + getter(value) === typedArray) {
						found = /** @type {import('.').TypedArrayName} */ ($slice(typedArray, 1));
					}
				} catch (e) { /**/ }
			}
		}
	);
	return found;
};

/** @type {(value: object) => false | import('.').TypedArrayName} */
var trySlices = function tryAllSlices(value) {
	/** @type {ReturnType<typeof tryAllSlices>} */ var found = false;
	forEach(
		/** @type {Record<`\$${import('.').TypedArrayName}`, Getter>} */(cache),
		/** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */ function (getter, name) {
			if (!found) {
				try {
					// @ts-expect-error a throw is fine here
					getter(value);
					found = /** @type {import('.').TypedArrayName} */ ($slice(name, 1));
				} catch (e) { /**/ }
			}
		}
	);
	return found;
};

/** @type {import('.')} */
module.exports = function whichTypedArray(value) {
	if (!value || typeof value !== 'object') { return false; }
	if (!hasToStringTag) {
		/** @type {string} */
		var tag = $slice($toString(value), 8, -1);
		if ($indexOf(typedArrays, tag) > -1) {
			return tag;
		}
		if (tag !== 'Object') {
			return false;
		}
		// node < 0.6 hits here on real Typed Arrays
		return trySlices(value);
	}
	if (!gOPD) { return null; } // unknown engine
	return tryTypedArrays(value);
};

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"available-typed-arrays":1,"call-bind":10,"call-bound":11,"for-each":140,"get-proto":151,"gopd":157,"has-tostringtag/shams":163}],215:[function(require,module,exports){

self._IteratorHelpersUtils = {
  iteratorPrototype: {
	  drop: require("es-iterator-helpers/Iterator.prototype.drop"),
	  every: require("es-iterator-helpers/Iterator.prototype.every"),
	  filter: require("es-iterator-helpers/Iterator.prototype.filter"),
	  find: require("es-iterator-helpers/Iterator.prototype.find"),
	  flatMap: require("es-iterator-helpers/Iterator.prototype.flatMap"),
	  forEach: require("es-iterator-helpers/Iterator.prototype.forEach"),
	  map: require("es-iterator-helpers/Iterator.prototype.map"),
	  reduce: require("es-iterator-helpers/Iterator.prototype.reduce"),
	  some: require("es-iterator-helpers/Iterator.prototype.some"),
	  take: require("es-iterator-helpers/Iterator.prototype.take"),
	  toArray: require("es-iterator-helpers/Iterator.prototype.toArray")
	},
	iterator: {
	  from: require("es-iterator-helpers/Iterator.from")
	}
}

},{"es-iterator-helpers/Iterator.from":74,"es-iterator-helpers/Iterator.prototype.drop":78,"es-iterator-helpers/Iterator.prototype.every":82,"es-iterator-helpers/Iterator.prototype.filter":86,"es-iterator-helpers/Iterator.prototype.find":90,"es-iterator-helpers/Iterator.prototype.flatMap":94,"es-iterator-helpers/Iterator.prototype.forEach":98,"es-iterator-helpers/Iterator.prototype.map":102,"es-iterator-helpers/Iterator.prototype.reduce":106,"es-iterator-helpers/Iterator.prototype.some":110,"es-iterator-helpers/Iterator.prototype.take":114,"es-iterator-helpers/Iterator.prototype.toArray":118}]},{},[215]);


var IteratorHelpersUtils = self._IteratorHelpersUtils;
delete self._IteratorHelpersUtils;
export default IteratorHelpers;

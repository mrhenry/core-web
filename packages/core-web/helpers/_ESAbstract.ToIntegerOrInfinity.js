import ToNumber from "@mrhenry/core-web/helpers/_ESAbstract.ToNumber.js";

// _ESAbstract.ToIntegerOrInfinity
/* global ToNumber */
// 7.1.5. ToIntegerOrInfinity ( argument )
function ToIntegerOrInfinity(argument) { // eslint-disable-line no-unused-vars
	// 1. Let number be ? ToNumber(argument).
	var number = ToNumber(argument);
	// 2. If number is NaN, +0𝔽, or -0𝔽, return 0.
	if (isNaN(number) || number === 0 || 1/number === -Infinity) return 0;
	// 3. If number is +∞𝔽, return +∞.
	if (number === Infinity) return Infinity;
	// 4. If number is -∞𝔽, return -∞.
	if (number === -Infinity) return -Infinity;
	// 5. Let integer be floor(abs(ℝ(number))).
	var integer = Math.floor(Math.abs(number));
	// 6. If number < +0𝔽, set integer to -integer.
	if (number < 0) integer = -integer;
	// 7. Return integer.
	return integer;
}
export default ToIntegerOrInfinity;

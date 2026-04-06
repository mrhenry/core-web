import Type from "@mrhenry/core-web/helpers/_ESAbstract.Type.js";
import IsInteger from "@mrhenry/core-web/helpers/_ESAbstract.IsInteger.js";

// _ESAbstract.IsValidIntegerIndex
/* globals IsInteger */
// 10.4.5.9 IsValidIntegerIndex ( O, index )
function IsValidIntegerIndex(O, index) { // eslint-disable-line no-unused-vars
	// 1. If IsDetachedBuffer(O.[[ViewedArrayBuffer]]) is true, return false.
	// 2. If IsIntegralNumber(index) is false, return false.
	if (IsInteger(index) === false) return false;
	// 3. If index is -0𝔽, return false.
	if (1 / index === -Infinity) return false;
	// 4. If ℝ(index) < 0 or ℝ(index) ≥ O.[[ArrayLength]], return false.
	if (index < 0 || index >= O.length) return false;
	// 5. Return true.
	return true;
}
export default IsValidIntegerIndex;

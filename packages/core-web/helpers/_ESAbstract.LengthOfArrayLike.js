import Type from "@mrhenry/core-web/helpers/_ESAbstract.Type";
import ToInteger from "@mrhenry/core-web/helpers/_ESAbstract.ToInteger";
import Get from "@mrhenry/core-web/helpers/_ESAbstract.Get";
import ToLength from "@mrhenry/core-web/helpers/_ESAbstract.ToLength";

// _ESAbstract.LengthOfArrayLike
/* global Get, ToLength */
// 7.3.19. LengthOfArrayLike ( obj )
function LengthOfArrayLike(obj) { // eslint-disable-line no-unused-vars
	// 1. Return ℝ(? ToLength(? Get(obj, "length"))).
	return ToLength(Get(obj, 'length'));
}
export default LengthOfArrayLike;

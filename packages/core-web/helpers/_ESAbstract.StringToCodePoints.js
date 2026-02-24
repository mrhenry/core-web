import UTF16SurrogatePairToCodePoint from "@mrhenry/core-web/helpers/_ESAbstract.UTF16SurrogatePairToCodePoint";
import CodePointAt from "@mrhenry/core-web/helpers/_ESAbstract.CodePointAt";

// _ESAbstract.StringToCodePoints
/* global CodePointAt */
// 11.1.5 Static Semantics: StringToCodePoints ( string )
// eslint-disable-next-line no-unused-vars
function StringToCodePoints(string) {
	// 1. Let codePoints be a new empty List.
	var codePoints = [];
	// 2. Let size be the length of string.
	var size = string.length;
	// 3. Let position be 0.
	var position = 0;
	// 4. Repeat, while position < size,
	while (position < size) {
		// a. Let cp be CodePointAt(string, position).
		var cp = CodePointAt(string, position);
		// b. Append cp.[[CodePoint]] to codePoints.
		codePoints.push(cp["[[CodePoint]]"]);
		// c. Set position to position + cp.[[CodeUnitCount]].
		position += cp["[[CodeUnitCount]]"];
	}
	// 5. Return codePoints.
	return codePoints;
}
export default StringToCodePoints;

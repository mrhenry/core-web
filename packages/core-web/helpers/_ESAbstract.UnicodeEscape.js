import StringPad from "@mrhenry/core-web/helpers/_ESAbstract.StringPad";

// _ESAbstract.UnicodeEscape
/* global StringPad */
// 25.5.2.4 UnicodeEscape ( C )
// eslint-disable-next-line no-unused-vars
function UnicodeEscape(C) {
	// 1. Let n be the numeric value of C.
	var n = String.prototype.charCodeAt.call(C, 0);
	// 2. Assert: n ≤ 0xFFFF.
	// 3. Let hex be the String representation of n, formatted as a lowercase hexadecimal number.
	var hex = Number.prototype.toString.call(n, 16);
	// 4. Return the string-concatenation of the code unit 0x005C (REVERSE SOLIDUS), "u", and StringPad(hex, 4, "0", start).
	return "\\u" + StringPad(hex, 4, "0", "START");
}
export default UnicodeEscape;

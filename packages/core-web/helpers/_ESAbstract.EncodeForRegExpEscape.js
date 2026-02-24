import StringPad from "@mrhenry/core-web/helpers/_ESAbstract.StringPad";
import UTF16SurrogatePairToCodePoint from "@mrhenry/core-web/helpers/_ESAbstract.UTF16SurrogatePairToCodePoint";
import CodePointAt from "@mrhenry/core-web/helpers/_ESAbstract.CodePointAt";
import StringToCodePoints from "@mrhenry/core-web/helpers/_ESAbstract.StringToCodePoints";
import UTF16EncodeCodePoint from "@mrhenry/core-web/helpers/_ESAbstract.UTF16EncodeCodePoint";
import UnicodeEscape from "@mrhenry/core-web/helpers/_ESAbstract.UnicodeEscape";

// _ESAbstract.EncodeForRegExpEscape
/* global StringPad, StringToCodePoints, UTF16EncodeCodePoint, UnicodeEscape */
// 22.2.5.1.1 EncodeForRegExpEscape ( c )
// eslint-disable-next-line no-unused-vars
function EncodeForRegExpEscape(c) {
	// 1. If c is matched by SyntaxCharacter or c is U+002F (SOLIDUS), then
	if (
		c === 0x005e || // ^
		c === 0x0024 || // $
		c === 0x005c || // \
		c === 0x002e || // .
		c === 0x002a || // *
		c === 0x002b || // +
		c === 0x003f || // ?
		c === 0x0028 || // (
		c === 0x0029 || // )
		c === 0x005b || // [
		c === 0x005d || // ]
		c === 0x007b || // {
		c === 0x007d || // }
		c === 0x007c || // |
		c === 0x002f // /
	) {
		// a. Return the string-concatenation of 0x005C (REVERSE SOLIDUS) and UTF16EncodeCodePoint(c).
		return "\\" + UTF16EncodeCodePoint(c);
	}
	// 2. Else if c is the code point listed in some cell of the “Code Point” column of Table 63, then
	else if (c >= 0x0009 && c <= 0x000d) {
		// a. Return the string-concatenation of 0x005C (REVERSE SOLIDUS) and the string in the “ControlEscape” column of the row whose “Code Point” column contains c.
		return (
			"\\" +
			{
				0x0009: "t", // CHARACTER TABULATION
				0x000a: "n", // LINE FEED
				0x000b: "v", // LINE TABULATION
				0x000c: "f", // FORM FEED
				0x000d: "r" // CARRIAGE RETURN
			}[c]
		);
	}
	// 3. Let otherPunctuators be the string-concatenation of ",-=<>#&!%:;@~'`" and the code unit 0x0022 (QUOTATION MARK).
	var otherPunctuators = ",-=<>#&!%:;@~'`\"";
	// 4. Let toEscape be StringToCodePoints(otherPunctuators).
	var toEscape = StringToCodePoints(otherPunctuators);
	// 5. If toEscape contains c, c is matched by either WhiteSpace or LineTerminator, or c has the same numeric value as a leading surrogate or trailing surrogate, then
	if (
		toEscape.indexOf(c) > -1 ||
		// https://www.compart.com/en/unicode/category/Zs
		c === 0xfeff || // ZERO WIDTH NO-BREAK SPACE
		c === 0x0020 || // SPACE
		c === 0x00a0 || // NO-BREAK SPACE
		c === 0x1680 || // OGHAM SPACE MARK
		(c >= 0x2000 && c <= 0x200a) || // other spaces
		c === 0x202f || // NARROW NO-BREAK SPACE
		c === 0x205f || // MEDIUM MATHEMATICAL SPACE
		c === 0x3000 || // IDEOGRAPHIC SPACE
		c === 0x2028 || // LINE SEPARATOR
		c === 0x2029 || // PARAGRAPH SEPARATOR
		(c >= 0xd800 && c <= 0xdbff) || // leading surrogate
		(c >= 0xdc00 && c <= 0xdfff) // trailing surrogate
	) {
		// a. Let cNum be the numeric value of c.
		var cNum = c;
		// b. If cNum ≤ 0xFF, then
		if (cNum <= 0x00ff) {
			// i. Let hex be Number::toString(𝔽(cNum), 16).
			var hex = Number.prototype.toString.call(cNum, 16);
			// ii. Return the string-concatenation of the code unit 0x005C (REVERSE SOLIDUS), "x", and StringPad(hex, 2, "0", start).
			return "\\x" + StringPad(hex, 2, "0", "START");
		}
		// c. Let escaped be the empty String.
		var escaped = "";
		// d. Let codeUnits be UTF16EncodeCodePoint(c).
		var codeUnits = UTF16EncodeCodePoint(c);
		// e. For each code unit cu of codeUnits, do
		for (var i = 0; i < codeUnits.length; i++) {
			var cu = codeUnits[i];
			// i. Set escaped to the string-concatenation of escaped and UnicodeEscape(cu).
			escaped += UnicodeEscape(cu);
		}
		// f. Return escaped.
		return escaped;
	}
	// 6. Return UTF16EncodeCodePoint(c).
	return UTF16EncodeCodePoint(c);
}
export default EncodeForRegExpEscape;

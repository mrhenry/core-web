
// _ESAbstract.StringPad
// 22.1.3.17.2 StringPad ( S, maxLength, fillString, placement )
// eslint-disable-next-line no-unused-vars
function StringPad(S, maxLength, fillString, placement) {
	// 1. Let stringLength be the length of S.
	var stringLength = S.length;
	// 2. If maxLength ≤ stringLength, return S.
	if (maxLength <= stringLength) {
		return S;
	}
	// 3. If fillString is the empty String, return S.
	if (fillString === "") {
		return S;
	}
	// 4. Let fillLen be maxLength - stringLength.
	var fillLen = maxLength - stringLength;
	// 5. Let truncatedStringFiller be the String value consisting of repeated concatenations of fillString truncated to length fillLen.
	var truncatedStringFiller = "";
	for (var i = 0; i < fillLen; i++) {
		truncatedStringFiller += fillString;
	}
	truncatedStringFiller = truncatedStringFiller.substr(0, fillLen);
	// 6. If placement is start, return the string-concatenation of truncatedStringFiller and S.
	if (placement === "START") {
		return truncatedStringFiller + S;
	}
	// 7. Else, return the string-concatenation of S and truncatedStringFiller.
	else {
		return S + truncatedStringFiller;
	}
}
export default StringPad;

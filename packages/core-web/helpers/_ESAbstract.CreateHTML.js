import Call from "@mrhenry/core-web/helpers/_ESAbstract.Call.js";
import Get from "@mrhenry/core-web/helpers/_ESAbstract.Get.js";
import IsCallable from "@mrhenry/core-web/helpers/_ESAbstract.IsCallable.js";
import Type from "@mrhenry/core-web/helpers/_ESAbstract.Type.js";
import ToObject from "@mrhenry/core-web/helpers/_ESAbstract.ToObject.js";
import GetV from "@mrhenry/core-web/helpers/_ESAbstract.GetV.js";
import GetMethod from "@mrhenry/core-web/helpers/_ESAbstract.GetMethod.js";
import OrdinaryToPrimitive from "@mrhenry/core-web/helpers/_ESAbstract.OrdinaryToPrimitive.js";
import ToPrimitive from "@mrhenry/core-web/helpers/_ESAbstract.ToPrimitive.js";
import RequireObjectCoercible from "@mrhenry/core-web/helpers/_ESAbstract.RequireObjectCoercible.js";
import ToString from "@mrhenry/core-web/helpers/_ESAbstract.ToString.js";

// _ESAbstract.CreateHTML
/* global RequireObjectCoercible, ToString */
// B.2.3.2.1Runtime Semantics: CreateHTML ( string, tag, attribute, value )
// The abstract operation CreateHTML is called with arguments string, tag, attribute, and value. The arguments tag and attribute must be String values. The following steps are taken:
function CreateHTML(string, tag, attribute, value) { // eslint-disable-line no-unused-vars
	// 1. Let str be ? RequireObjectCoercible(string).
	var str = RequireObjectCoercible(string);
	// 2. Let S be ? ToString(str).
	var S = ToString(str);
	// 3. Let p1 be the string-concatenation of "<" and tag.
	var p1 = "<" + tag;
	// 4. If attribute is not the empty String, then
	if (attribute !== '') {
		// a. Let V be ? ToString(value).
		var V = ToString(value);
		// b. Let escapedV be the String value that is the same as V except that each occurrence of the code unit 0x0022 (QUOTATION MARK) in V has been replaced with the six code unit sequence  "&quot;".
		var escapedV = V.replace(/"/g, '&quot;');
		// c. Set p1 to the string-concatenation of:
		// - p1
		// - the code unit 0x0020 (SPACE)
		// - attribute
		// - the code unit 0x003D (EQUALS SIGN)
		// - the code unit 0x0022 (QUOTATION MARK)
		// - escapedV
		// - the code unit 0x0022 (QUOTATION MARK)
		p1 = p1 + ' ' + attribute + '=' + '"' + escapedV + '"';
	}
	// 5. Let p2 be the string-concatenation of p1 and ">".
	var p2 = p1 + ">";
	// 6. Let p3 be the string-concatenation of p2 and S.
	var p3 = p2 + S;
	// 7. Let p4 be the string-concatenation of p3, "</", tag, and ">".
	var p4 = p3 + "</" + tag + ">";
	// 8. Return p4.
	return p4;
}
export default CreateHTML;

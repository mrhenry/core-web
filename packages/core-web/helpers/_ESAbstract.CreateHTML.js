import RequireObjectCoercible from "../helpers/_ESAbstract.RequireObjectCoercible";
import ToString from "../helpers/_ESAbstract.ToString";
import ToPrimitive from "../helpers/_ESAbstract.ToPrimitive";
import Call from "../helpers/_ESAbstract.Call";
import GetMethod from "../helpers/_ESAbstract.GetMethod";
import GetV from "../helpers/_ESAbstract.GetV";
import ToObject from "../helpers/_ESAbstract.ToObject";
import IsCallable from "../helpers/_ESAbstract.IsCallable";
import OrdinaryToPrimitive from "../helpers/_ESAbstract.OrdinaryToPrimitive";
import Get from "../helpers/_ESAbstract.Get";
import Type from "../helpers/_ESAbstract.Type";

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
}export default CreateHTML;

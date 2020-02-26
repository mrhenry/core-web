import Type from "../helpers/_ESAbstract.Type";
import ToLength from "../helpers/_ESAbstract.ToLength";
import ToInteger from "../helpers/_ESAbstract.ToInteger";
import Get from "../helpers/_ESAbstract.Get";
import ToString from "../helpers/_ESAbstract.ToString";
import ToPrimitive from "../helpers/_ESAbstract.ToPrimitive";
import Call from "../helpers/_ESAbstract.Call";
import GetMethod from "../helpers/_ESAbstract.GetMethod";
import GetV from "../helpers/_ESAbstract.GetV";
import ToObject from "../helpers/_ESAbstract.ToObject";
import IsCallable from "../helpers/_ESAbstract.IsCallable";
import OrdinaryToPrimitive from "../helpers/_ESAbstract.OrdinaryToPrimitive";
import CreateMethodProperty from "../helpers/_ESAbstract.CreateMethodProperty";
import SameValueZero from "../helpers/_ESAbstract.SameValueZero";
import SameValueNonNumber from "../helpers/_ESAbstract.SameValueNonNumber";

// _ESAbstract.CreateListFromArrayLike
/* global Type, ToLength, Get, ToString */
// 7.3.17 CreateListFromArrayLike ( obj [ , elementTypes ] )
function CreateListFromArrayLike(obj /*[ , elementTypes ]*/) { // eslint-disable-line no-unused-vars
    // 1. If elementTypes is not present, set elementTypes to « Undefined, Null, Boolean, String, Symbol, Number, Object ».
    var elementTypes = 1 in arguments ? arguments[1] : ['undefined', 'null', 'boolean', 'string', 'symbol', 'number', 'object'];
    // 2. If Type(obj) is not Object, throw a TypeError exception.
    if (Type(obj) !== 'object') {
        throw new TypeError(Object.prototype.toString.call(obj) + ' is not an Object');
    }
    // 3. Let len be ? ToLength(? Get(obj, "length")).
    var len = ToLength(Get(obj, 'length'));
    // 4. Let list be a new empty List.
    var list = [];
    // 5. Let index be 0.
    var index = 0;
    // 6. Repeat, while index < len
    while (index < len) {
        // a. Let indexName be ! ToString(index).
        var indexName = ToString(index);
        // b. Let next be ? Get(obj, indexName).
        var next = Get(obj, indexName);
        // c. If Type(next) is not an element of elementTypes, throw a TypeError exception.
        if (!elementTypes.includes(Type(next))) {
            throw new TypeError(Object.prototype.toString.call(next) + ' is not one of the required types: ' + Array.prototype.join.call(elementTypes, ','));
        }
        // d. Append next as the last element of list.
        list.push(next);
        // e. Increase index by 1.
        index = index + 1;
    }
    // 7. Return list.
    return list;
}export default CreateListFromArrayLike;

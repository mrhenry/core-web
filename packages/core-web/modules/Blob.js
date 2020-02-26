import CreateMethodProperty from "../helpers/_ESAbstract.CreateMethodProperty";
import Get from "../helpers/_ESAbstract.Get";
import ToObject from "../helpers/_ESAbstract.ToObject";
import Type from "../helpers/_ESAbstract.Type";
import HasOwnProperty from "../helpers/_ESAbstract.HasOwnProperty";
import ToPropertyKey from "../helpers/_ESAbstract.ToPropertyKey";
import ToPrimitive from "../helpers/_ESAbstract.ToPrimitive";
import Call from "../helpers/_ESAbstract.Call";
import GetMethod from "../helpers/_ESAbstract.GetMethod";
import GetV from "../helpers/_ESAbstract.GetV";
import IsCallable from "../helpers/_ESAbstract.IsCallable";
import OrdinaryToPrimitive from "../helpers/_ESAbstract.OrdinaryToPrimitive";
import ToString from "../helpers/_ESAbstract.ToString";
import ToLength from "../helpers/_ESAbstract.ToLength";
import ToInteger from "../helpers/_ESAbstract.ToInteger";
import HasProperty from "../helpers/_ESAbstract.HasProperty";
import IsArray from "../helpers/_ESAbstract.IsArray";
(function(undefined) {
if (!("Blob"in self&&function(){try{return new Blob,!0}catch(n){return!1}}()&&function(){try{return Blob(),!1}catch(n){return!0}}()
)) {
// Blob
// Local modification of https://github.com/eligrey/Blob.js/blob

/* Blob.js
 * A Blob implementation.
 * 2014-07-24
 *
 * By Eli Grey, http://eligrey.com
 * By Devin Samarin, https://github.com/dsamarin
 * License: MIT
 *   See https://github.com/eligrey/Blob.js/blob/master/LICENSE.md
 */

/*jslint bitwise: true, regexp: true, confusion: true, es5: true, vars: true, white: true,
  plusplus: true */

/*! @source http://purl.eligrey.com/github/Blob.js/blob/master/Blob.js */

(function (view) {
	"use strict";

	view.URL = view.URL || view.webkitURL;
	var ArrayBuffer = view.ArrayBuffer;
	var Uint8Array = view.Uint8Array;
	var get_class = function (object) {
		return Object.prototype.toString.call(object).match(/^\[object\s(.*)\]$/)[1];
	};
	var FakeBlob;

	// Internally we use a BlobBuilder implementation to base Blob off of
	// in order to support older browsers that only have BlobBuilder
	var BlobBuilder = view.BlobBuilder || view.WebKitBlobBuilder || view.MozBlobBuilder || (function (view) {
		var FakeBlobBuilder = function BlobBuilder() {
				this.data = [];
			};
		FakeBlob = function Blob(data, type, encoding) {
			this.data = data;
			this.size = data.length;
			this.type = type;
			this.encoding = encoding;
		};
		var FBB_proto = FakeBlobBuilder.prototype;
		var FB_proto = FakeBlob.prototype;
		var FileReaderSync = view.FileReaderSync;
		var FileException = function (type) {
			this.code = this[this.name = type];
		};
		var file_ex_codes = (
			"NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR " +
			"NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR"
		).split(" ");
		var file_ex_code = file_ex_codes.length;
		var real_URL = view.URL || view.webkitURL || view;
		var real_create_object_URL = real_URL.createObjectURL;
		var real_revoke_object_URL = real_URL.revokeObjectURL;
		var URL = real_URL;
		var btoa = view.btoa;
		var atob = view.atob;
		var origin = /^[\w-]+:\/*\[?[\w.:-]+\]?(?::[0-9]+)?/;
		FakeBlob.fake = FB_proto.fake = true;
		while (file_ex_code--) {
			FileException.prototype[file_ex_codes[file_ex_code]] = file_ex_code + 1;
		}
		// Polyfill URL
		if (!real_URL.createObjectURL) {
			URL = view.URL = function (uri) {
				var
					uri_info = document.createElementNS("http://www.w3.org/1999/xhtml", "a"),
					uri_origin;
				uri_info.href = uri;
				if (!("origin" in uri_info)) {
					if (uri_info.protocol.toLowerCase() === "data:") {
						uri_info.origin = null;
					} else {
						uri_origin = uri.match(origin);
						uri_info.origin = uri_origin && uri_origin[1];
					}
				}
				return uri_info;
			};
		}
		URL.createObjectURL = function (blob) {
			var
				type = blob.type,
				data_URI_header;
			if (type === null) {
				type = "application/octet-stream";
			}
			if (blob instanceof FakeBlob) {
				data_URI_header = "data:" + type;
				if (blob.encoding === "base64") {
					return data_URI_header + ";base64," + blob.data;
				} else if (blob.encoding === "URI") {
					return data_URI_header + "," + decodeURIComponent(blob.data);
				}
				if (btoa) {
					return data_URI_header + ";base64," + btoa(blob.data);
				} else {
					return data_URI_header + "," + encodeURIComponent(blob.data);
				}
			} else if (real_create_object_URL) {
				return real_create_object_URL.call(real_URL, blob);
			}
		};
		URL.revokeObjectURL = function (object_URL) {
			if (object_URL.substring(0, 5) !== "data:" && real_revoke_object_URL) {
				real_revoke_object_URL.call(real_URL, object_URL);
			}
		};
		FBB_proto.append = function (data /*, endings*/ ) {
			var bb = this.data;
			// decode data to a binary string
			if (Uint8Array && (data instanceof ArrayBuffer || data instanceof Uint8Array)) {
				var
					str = "",
					buf = new Uint8Array(data),
					i = 0,
					buf_len = buf.length;
				for (; i < buf_len; i++) {
					str += String.fromCharCode(buf[i]);
				}
				bb.push(str);
			} else if (get_class(data) === "Blob" || get_class(data) === "File") {
				if (FileReaderSync) {
					var fr = new FileReaderSync;
					bb.push(fr.readAsBinaryString(data));
				} else {
					// async FileReader won't work as BlobBuilder is sync
					throw new FileException("NOT_READABLE_ERR");
				}
			} else if (data instanceof FakeBlob) {
				if (data.encoding === "base64" && atob) {
					bb.push(atob(data.data));
				} else if (data.encoding === "URI") {
					bb.push(decodeURIComponent(data.data));
				} else if (data.encoding === "raw") {
					bb.push(data.data);
				}
			} else {
				if (typeof data !== "string") {
					data += ""; // convert unsupported types to strings
				}
				// decode UTF-16 to binary string
				bb.push(unescape(encodeURIComponent(data)));
			}
		};
		FBB_proto.getBlob = function (type) {
			if (!arguments.length) {
				type = null;
			}
			return new FakeBlob(this.data.join(""), type, "raw");
		};
		FBB_proto.toString = function () {
			return "[object BlobBuilder]";
		};
		FB_proto.slice = function () {
			var start = arguments[0];
			var end = arguments[1];
			var type = arguments[2];

			var args = arguments.length;
			if (args < 3) {
				type = '';
			}
			return new FakeBlob(
				this.data.slice(start, args > 1 ? end : this.data.length), type, this.encoding
			);
		};
		FB_proto.toString = function () {
			return "[object Blob]";
		};
		FB_proto.close = function () {
			this.size = 0;
			delete this.data;
		};
		return FakeBlobBuilder;
	}(view));

	(function(){
		try {
			var builder = new BlobBuilder();
			builder.append(1);
		} catch (err) {
			var nativeAppend = BlobBuilder.prototype.append;
			BlobBuilder.prototype.append = function append(data /*, endings*/ ) {
				if (!(Uint8Array && (data instanceof ArrayBuffer || data instanceof Uint8Array)) && !(get_class(data) === "Blob" || get_class(data) === "File") && !(FakeBlob && data instanceof FakeBlob)) {
					if (typeof data !== "string") {
						data += ""; // convert unsupported types to strings
					}
				}
				if (1 in arguments) {
					nativeAppend.call(this, data, arguments[1]);
				} else {
					nativeAppend.call(this, data);
				}
			};
		}
	}());

	view.Blob = function () {
		var blobParts = arguments[0];
		var options = arguments[1];

		try {
			var isInstanceOfBlob = this instanceof Blob;
		} catch (e) {
			// Polyfill.io - IE 8 throws an error when using instanceof
		}
		if (isInstanceOfBlob === false) {
			throw new TypeError("Failed to construct 'Blob': Please use the 'new' operator, this DOM object constructor cannot be called as a function.");
		}

		if (blobParts !== undefined && typeof blobParts.length !== 'number') {
			throw new TypeError("Failed to construct 'Blob': Iterator getter is not callable.");
		}

		if (typeof blobParts !== 'undefined' && typeof blobParts !== 'object') {
			throw new TypeError("Failed to construct 'Blob': Iterator getter is not callable.");
		}

		if (typeof options !== 'undefined' && typeof options !== 'object') {
			throw new TypeError("Failed to construct 'Blob': parameter 2 ('options') is not an object.");
		}
		var type = options ? (options.type || "") : "";
		var builder = new BlobBuilder();
		if (blobParts) {
			for (var i = 0, len = blobParts.length; i < len; i++) {
				if (typeof Uint8Array !== 'undefined' && blobParts[i] instanceof Uint8Array) {
					builder.append(blobParts[i].buffer);
				} else {
					builder.append(blobParts[i]);
				}
			}
		}
		var blob = builder.getBlob(type);
		if (!blob.slice && blob.webkitSlice) {
			blob.slice = blob.webkitSlice;
		}
		return blob;
	};

	var getPrototypeOf = Object.getPrototypeOf || function (object) {
		return object.__proto__;
	};
	view.Blob.prototype = getPrototypeOf(new view.Blob());
}(self));
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

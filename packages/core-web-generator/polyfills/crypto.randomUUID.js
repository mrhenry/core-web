// MIT License

// Copyright (c) 2021 UUID JavaScript Module https://github.com/uuidjs

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.


(function (global) {
	if ('crypto' in global && 'randomUUID' in global.crypto) {
		return;
	}

	if (!('crypto' in global)) {
		global.crypto = {};
	}

	function supportsUint8Array_ArrayLikeAccess() {
		try {
			if (!('Uint8Array' in global)) {
				return false;
			}
			var arr = new Uint8Array([42,43]);
			return arr[0] === 42;
		} catch (_) {
			return false;
		}
	}
	

	if (
		(
			'getRandomValues' in global.crypto ||
			(
				'msCrypto' in global &&
				'getRandomValues' in global.msCrypto
			)
		) &&
		'Uint8Array' in global &&
		supportsUint8Array_ArrayLikeAccess()
	) {
		function getRandomValues(arr) {
			if ('getRandomValues' in global.crypto) {
				return global.crypto.getRandomValues(arr);
			}

			if ('msCrypto' in global && 'getRandomValues' in global.msCrypto) {
				return global.msCrypto.getRandomValues(arr);
			}
		}

		// Code based on Node.js' `lib/internal/crypto/random.js`, subject
		// to Node.js license found at:
		// https://raw.githubusercontent.com/nodejs/node/master/LICENSE
		//
		// crypto
		//
			
		// Implements an RFC 4122 version 4 random UUID.
		var kHexDigits = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99, 100, 101, 102];

		global.crypto.randomUUID = function randomUUID() {
			var uuid = new Uint8Array(36);
			uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'.charCodeAt(0);
			uuid[14] = 52; // '4', identifies the UUID version

			var uuidBuf = new Uint8Array(16);
			getRandomValues(uuidBuf);

			// Variant byte: 10xxxxxx (variant 1)
			uuidBuf[8] = (uuidBuf[8] & 0x3f) | 0x80;

			// This function is structured the way it is for performance.
			// The uuid buffer stores the serialization of the random
			// bytes from uuidData.
			// xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
			var n = 0;
			uuid[0] = kHexDigits[uuidBuf[n] >> 4];
			uuid[1] = kHexDigits[uuidBuf[n++] & 0xf];
			uuid[2] = kHexDigits[uuidBuf[n] >> 4];
			uuid[3] = kHexDigits[uuidBuf[n++] & 0xf];
			uuid[4] = kHexDigits[uuidBuf[n] >> 4];
			uuid[5] = kHexDigits[uuidBuf[n++] & 0xf];
			uuid[6] = kHexDigits[uuidBuf[n] >> 4];
			uuid[7] = kHexDigits[uuidBuf[n++] & 0xf];
			// -
			uuid[9] = kHexDigits[uuidBuf[n] >> 4];
			uuid[10] = kHexDigits[uuidBuf[n++] & 0xf];
			uuid[11] = kHexDigits[uuidBuf[n] >> 4];
			uuid[12] = kHexDigits[uuidBuf[n++] & 0xf];
			// -
			// 4, uuid[14] is set already...
			uuid[15] = kHexDigits[uuidBuf[n++] & 0xf];
			uuid[16] = kHexDigits[uuidBuf[n] >> 4];
			uuid[17] = kHexDigits[uuidBuf[n++] & 0xf];
			// -
			uuid[19] = kHexDigits[uuidBuf[n] >> 4];
			uuid[20] = kHexDigits[uuidBuf[n++] & 0xf];
			uuid[21] = kHexDigits[uuidBuf[n] >> 4];
			uuid[22] = kHexDigits[uuidBuf[n++] & 0xf];
			// -
			uuid[24] = kHexDigits[uuidBuf[n] >> 4];
			uuid[25] = kHexDigits[uuidBuf[n++] & 0xf];
			uuid[26] = kHexDigits[uuidBuf[n] >> 4];
			uuid[27] = kHexDigits[uuidBuf[n++] & 0xf];
			uuid[28] = kHexDigits[uuidBuf[n] >> 4];
			uuid[29] = kHexDigits[uuidBuf[n++] & 0xf];
			uuid[30] = kHexDigits[uuidBuf[n] >> 4];
			uuid[31] = kHexDigits[uuidBuf[n++] & 0xf];
			uuid[32] = kHexDigits[uuidBuf[n] >> 4];
			uuid[33] = kHexDigits[uuidBuf[n++] & 0xf];
			uuid[34] = kHexDigits[uuidBuf[n] >> 4];
			uuid[35] = kHexDigits[uuidBuf[n] & 0xf];

			var out = '';
			for (var i = 0; i < uuid.length; i++) {
				out += String.fromCharCode(uuid[i]);
			}
			return out;
		}
		
		return;
	}
})(self);
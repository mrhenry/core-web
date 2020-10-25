module.exports = [
  {
    "name": "AbortController",
    "deps": [
      "fetch",
      "_ESAbstract.CreateMethodProperty",
      "_ESAbstract.ToObject",
      "_ESAbstract.ToLength",
      "_ESAbstract.ToInteger",
      "_ESAbstract.Get",
      "_ESAbstract.IsCallable",
      "_ESAbstract.HasProperty",
      "_ESAbstract.Call",
      "_ESAbstract.ToString",
      "_ESAbstract.ToPrimitive",
      "_ESAbstract.GetMethod",
      "_ESAbstract.GetV",
      "_ESAbstract.OrdinaryToPrimitive",
      "_ESAbstract.Type",
      "_ESAbstract.SameValueZero",
      "_ESAbstract.SameValueNonNumber",
      "_ESAbstract.ArraySpeciesCreate",
      "_ESAbstract.IsArray",
      "_ESAbstract.ArrayCreate",
      "_ESAbstract.IsConstructor",
      "_ESAbstract.Construct",
      "_ESAbstract.OrdinaryCreateFromConstructor",
      "_ESAbstract.GetPrototypeFromConstructor",
      "_ESAbstract.HasOwnProperty",
      "_ESAbstract.ToPropertyKey",
      "_ESAbstract.ToBoolean",
      "_ESAbstract.CreateDataPropertyOrThrow",
      "_ESAbstract.CreateDataProperty",
      "XMLHttpRequest",
      "Event",
      "Window",
      "document",
      "Element",
      "_ESAbstract.CreateIterResultObject",
      "_ESAbstract.GetIterator",
      "_ESAbstract.IteratorClose",
      "_ESAbstract.IteratorComplete",
      "_ESAbstract.IteratorNext",
      "_ESAbstract.IteratorStep",
      "_ESAbstract.IteratorValue",
      "_ESAbstract.SameValue"
    ],
    "browsers": {
      "edge": "12 - 15",
      "edge_mob": "*",
      "ie": "10 - *",
      "ie_mob": "10 - *",
      "firefox": "2 - 56",
      "opera": "10 - 52",
      "safari": "3.1 - 12",
      "chrome": "4 - 65",
      "ios_saf": "3.2 - 11.2",
      "firefox_mob": "<64",
      "samsung_mob": "*",
      "android": "<67"
    },
    "detectSource": "\"AbortController\"in self&&\"function\"==typeof self.AbortController\n"
  },
  {
    "name": "AudioContext",
    "deps": [],
    "detectSource": "\"AudioContext\"in self||!(\"webkitAudioContext\"in self)\n"
  },
  {
    "name": "Blob",
    "deps": [
      "atob",
      "URL",
      "_ESAbstract.CreateMethodProperty",
      "_ESAbstract.Get",
      "_ESAbstract.ToObject",
      "_ESAbstract.Type",
      "_ESAbstract.HasOwnProperty",
      "_ESAbstract.ToPropertyKey",
      "_ESAbstract.ToPrimitive",
      "_ESAbstract.Call",
      "_ESAbstract.GetMethod",
      "_ESAbstract.GetV",
      "_ESAbstract.IsCallable",
      "_ESAbstract.OrdinaryToPrimitive",
      "_ESAbstract.ToString",
      "_ESAbstract.ToLength",
      "_ESAbstract.ToInteger",
      "_ESAbstract.HasProperty",
      "_ESAbstract.IsArray"
    ],
    "browsers": {
      "chrome": "<20",
      "edge": "*",
      "edge_mob": "*",
      "firefox": "<13",
      "firefox_mob": "<14",
      "safari": "<6",
      "ie": "<10",
      "opera": "<12"
    },
    "detectSource": "\"Blob\"in self&&function(){try{return new Blob,!0}catch(n){return!1}}()&&function(){try{return Blob(),!1}catch(n){return!0}}()\n",
    "detector": true
  },
  {
    "name": "CSS.supports",
    "deps": [],
    "browsers": {
      "ie": "*",
      "firefox": "<=21",
      "chrome": "<=27",
      "safari": "<9",
      "ios_saf": "<9.0",
      "opera": "<15",
      "op_mini": "*",
      "android": "<4.4"
    },
    "detectSource": "(\"function\"==typeof self.CSS||\"object\"==typeof self.CSS)&&\"function\"==typeof self.CSS.supports\n"
  },
  {
    "name": "CustomEvent",
    "deps": [
      "Event",
      "Window",
      "document",
      "Element",
      "_ESAbstract.CreateMethodProperty",
      "_ESAbstract.ToObject",
      "_ESAbstract.ToLength",
      "_ESAbstract.ToInteger",
      "_ESAbstract.Get",
      "_ESAbstract.HasProperty",
      "_ESAbstract.ToString",
      "_ESAbstract.ToPrimitive",
      "_ESAbstract.Call",
      "_ESAbstract.GetMethod",
      "_ESAbstract.GetV",
      "_ESAbstract.IsCallable",
      "_ESAbstract.OrdinaryToPrimitive",
      "_ESAbstract.Type",
      "_ESAbstract.SameValueZero",
      "_ESAbstract.SameValueNonNumber"
    ],
    "browsers": {
      "edge": "<14",
      "edge_mob": "<14",
      "firefox": "6 - 10",
      "ie": "*",
      "ie_mob": "10 - *",
      "opera": "10 - 11.5",
      "safari": "4 - 7",
      "chrome": "1 - 14",
      "android": "<=4.3",
      "firefox_mob": "6 - 10"
    },
    "detectSource": "\"CustomEvent\"in self&&(\"function\"==typeof self.CustomEvent||self.CustomEvent.toString().indexOf(\"CustomEventConstructor\")>-1)\n"
  },
  {
    "name": "DOMRect",
    "deps": [
      "_ESAbstract.CreateMethodProperty",
      "_ESAbstract.Get",
      "_ESAbstract.ToObject",
      "_ESAbstract.Type",
      "_ESAbstract.HasOwnProperty",
      "_ESAbstract.ToPropertyKey",
      "_ESAbstract.ToPrimitive",
      "_ESAbstract.Call",
      "_ESAbstract.GetMethod",
      "_ESAbstract.GetV",
      "_ESAbstract.IsCallable",
      "_ESAbstract.OrdinaryToPrimitive",
      "_ESAbstract.ToString"
    ],
    "browsers": {
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "chrome": "<60",
      "ios_chr": "<10.1",
      "safari": "<10.1",
      "ios_saf": "<10.1",
      "firefox": "<=30",
      "android": "<6"
    },
    "detectSource": "\"DOMRect\"in self&&function(e){try{return new e}catch(t){return!1}}(self.DOMRect)\n"
  },
  {
    "name": "DOMTokenList",
    "deps": [
      "_DOMTokenList"
    ],
    "browsers": {
      "edge": "<14",
      "edge_mob": "<14",
      "ie": "*",
      "safari": "4 - 6.0",
      "ie_mob": "10 - *"
    },
    "detectSource": "\"DOMTokenList\"in self&&function(e){return!(\"classList\"in e)||!e.classList.toggle(\"x\",!1)&&!e.className}(document.createElement(\"x\"))\n",
    "detector": true
  },
  {
    "name": "DocumentFragment",
    "deps": [],
    "browsers": {
      "android": "<3",
      "firefox": "<4",
      "ios_chr": "<4",
      "ios_saf": "<4",
      "ie": "8 - 9",
      "ie_mob": "<9",
      "opera": "<11",
      "op_mini": "<11",
      "safari": "<4",
      "firefox_mob": "<4",
      "samsung_mob": "<3"
    },
    "detectSource": "\"DocumentFragment\"in self&&self.DocumentFragment===document.createDocumentFragment().constructor\n"
  },
  {
    "name": "DocumentFragment.prototype.append",
    "deps": [
      "document",
      "DocumentFragment",
      "Element",
      "_mutation"
    ],
    "browsers": {
      "android": "*",
      "bb": "*",
      "chrome": "<54",
      "edge": "<17",
      "edge_mob": "<17",
      "firefox": "<49",
      "ios_chr": "*",
      "ios_saf": "<10",
      "ie": "8 - *",
      "ie_mob": "10 - *",
      "opera": "<39",
      "op_mini": "*",
      "safari": "<10",
      "firefox_mob": "<49",
      "samsung_mob": "<6"
    },
    "detectSource": "\"DocumentFragment\"in self&&\"append\"in DocumentFragment.prototype\n"
  },
  {
    "name": "DocumentFragment.prototype.prepend",
    "deps": [
      "document",
      "DocumentFragment",
      "Element",
      "_mutation"
    ],
    "browsers": {
      "android": "*",
      "bb": "*",
      "chrome": "<54",
      "edge": "<17",
      "edge_mob": "<17",
      "firefox": "<49",
      "ios_chr": "*",
      "ios_saf": "<10",
      "ie": "8 - *",
      "ie_mob": "10 - *",
      "opera": "<39",
      "op_mini": "*",
      "safari": "<10",
      "firefox_mob": "<49",
      "samsung_mob": "<6"
    },
    "detectSource": "\"DocumentFragment\"in self&&\"prepend\"in DocumentFragment.prototype\n"
  },
  {
    "name": "Element",
    "deps": [
      "document"
    ],
    "browsers": {
      "ie": "6 - 8"
    },
    "detectSource": "\"Element\"in self&&\"HTMLElement\"in self\n",
    "detector": true
  },
  {
    "name": "Element.prototype.after",
    "deps": [
      "document",
      "Element",
      "_ESAbstract.CreateMethodProperty",
      "_ESAbstract.ToObject",
      "_ESAbstract.ToLength",
      "_ESAbstract.ToInteger",
      "_ESAbstract.Get",
      "_ESAbstract.HasProperty",
      "_ESAbstract.ToString",
      "_ESAbstract.ToPrimitive",
      "_ESAbstract.Call",
      "_ESAbstract.GetMethod",
      "_ESAbstract.GetV",
      "_ESAbstract.IsCallable",
      "_ESAbstract.OrdinaryToPrimitive",
      "_ESAbstract.Type",
      "_mutation"
    ],
    "browsers": {
      "android": "*",
      "bb": "*",
      "chrome": "<54",
      "edge": "<17",
      "edge_mob": "<17",
      "firefox": "<49",
      "ios_chr": "*",
      "ios_saf": "<10",
      "ie": "6 - *",
      "ie_mob": "10 - *",
      "opera": "<39",
      "op_mini": "*",
      "safari": "<10",
      "firefox_mob": "<49",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Element\"in self&&\"after\"in Element.prototype\n"
  },
  {
    "name": "Element.prototype.append",
    "deps": [
      "document",
      "Element",
      "_mutation"
    ],
    "browsers": {
      "android": "<5",
      "bb": "*",
      "chrome": "<54",
      "edge": "<17",
      "edge_mob": "<17",
      "firefox": "<49",
      "ios_chr": "*",
      "ios_saf": "<10",
      "ie": "6 - *",
      "ie_mob": "10 - *",
      "opera": "<39",
      "op_mini": "*",
      "safari": "<10",
      "firefox_mob": "<49",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Element\"in self&&\"append\"in Element.prototype\n"
  },
  {
    "name": "Element.prototype.before",
    "deps": [
      "document",
      "Element",
      "_ESAbstract.CreateMethodProperty",
      "_ESAbstract.ToObject",
      "_ESAbstract.ToLength",
      "_ESAbstract.ToInteger",
      "_ESAbstract.Get",
      "_ESAbstract.HasProperty",
      "_ESAbstract.ToString",
      "_ESAbstract.ToPrimitive",
      "_ESAbstract.Call",
      "_ESAbstract.GetMethod",
      "_ESAbstract.GetV",
      "_ESAbstract.IsCallable",
      "_ESAbstract.OrdinaryToPrimitive",
      "_ESAbstract.Type",
      "_mutation"
    ],
    "browsers": {
      "android": "<5",
      "bb": "*",
      "chrome": "<54",
      "edge": "<17",
      "edge_mob": "<17",
      "firefox": "<49",
      "ios_chr": "*",
      "ios_saf": "<10",
      "ie": "6 - *",
      "ie_mob": "10 - *",
      "opera": "<39",
      "op_mini": "*",
      "safari": "<10",
      "firefox_mob": "<49",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Element\"in self&&\"before\"in Element.prototype\n"
  },
  {
    "name": "Element.prototype.classList",
    "deps": [
      "DOMTokenList",
      "_DOMTokenList",
      "Element",
      "document"
    ],
    "browsers": {
      "ie": "8 - 11",
      "safari": "4 - 4.1"
    },
    "detectSource": "\"document\"in self&&\"classList\"in document.documentElement&&\"Element\"in self&&\"classList\"in Element.prototype&&function(){var e=document.createElement(\"span\")\nreturn e.classList.add(\"a\",\"b\"),e.classList.contains(\"b\")}()\n"
  },
  {
    "name": "Element.prototype.cloneNode",
    "deps": [
      "Element",
      "document"
    ],
    "browsers": {
      "ie": "8",
      "firefox": "<30"
    },
    "detectSource": "\"document\"in self&&\"cloneNode\"in document.documentElement&&function(){var e=document.createElement(\"div\"),n=document.createElement(\"input\")\nn.type=\"radio\",n.checked=!0,e.appendChild(n)\nvar c,t=n.cloneNode(!1)\ntry{c=e.cloneNode()}catch(d){return!1}return t.checked&&void 0!==c&&0===c.childNodes.length}()\n"
  },
  {
    "name": "Element.prototype.closest",
    "deps": [
      "Element.prototype.matches",
      "Element",
      "document",
      "document.querySelector"
    ],
    "browsers": {
      "bb": "*",
      "android": "<5",
      "chrome": "<41",
      "edge": "<15",
      "edge_mob": "<15",
      "ie": "*",
      "ie_mob": "*",
      "ios_saf": "<9",
      "firefox": "<35",
      "opera": "<28",
      "op_mini": "*",
      "op_mob": "<33",
      "safari": "<9",
      "firefox_mob": "<35"
    },
    "detectSource": "\"document\"in self&&\"closest\"in document.documentElement\n"
  },
  {
    "name": "Element.prototype.dataset",
    "deps": [
      "_ESAbstract.CreateMethodProperty",
      "_ESAbstract.HasOwnProperty",
      "_ESAbstract.ToObject",
      "_ESAbstract.ToPropertyKey",
      "_ESAbstract.ToPrimitive",
      "_ESAbstract.Call",
      "_ESAbstract.GetMethod",
      "_ESAbstract.GetV",
      "_ESAbstract.IsCallable",
      "_ESAbstract.OrdinaryToPrimitive",
      "_ESAbstract.Get",
      "_ESAbstract.Type",
      "_ESAbstract.ToString",
      "document.querySelector",
      "Element",
      "document"
    ],
    "browsers": {
      "chrome": "< 8",
      "firefox": "< 6",
      "ie": "9 - 10",
      "safari": "< 6",
      "firefox_mob": "< 6"
    },
    "detectSource": "(function(){if(!document.documentElement.dataset)return!1\nvar t=document.createElement(\"div\")\nreturn t.setAttribute(\"data-a-b\",\"c\"),t.dataset&&\"c\"==t.dataset.aB})()\n"
  },
  {
    "name": "Element.prototype.inert",
    "deps": [
      "_ESAbstract.CreateMethodProperty",
      "_ESAbstract.ToObject",
      "_ESAbstract.ToLength",
      "_ESAbstract.ToInteger",
      "_ESAbstract.Get",
      "_ESAbstract.IsCallable",
      "_ESAbstract.HasProperty",
      "_ESAbstract.Call",
      "_ESAbstract.ToString",
      "_ESAbstract.ToPrimitive",
      "_ESAbstract.GetMethod",
      "_ESAbstract.GetV",
      "_ESAbstract.OrdinaryToPrimitive",
      "_ESAbstract.Type",
      "Element",
      "document",
      "Element.prototype.matches",
      "document.querySelector",
      "_ESAbstract.CreateIterResultObject",
      "_ESAbstract.CreateDataProperty",
      "_ESAbstract.GetIterator",
      "_ESAbstract.HasOwnProperty",
      "_ESAbstract.ToPropertyKey",
      "_ESAbstract.ArraySpeciesCreate",
      "_ESAbstract.IsArray",
      "_ESAbstract.ArrayCreate",
      "_ESAbstract.IsConstructor",
      "_ESAbstract.Construct",
      "_ESAbstract.OrdinaryCreateFromConstructor",
      "_ESAbstract.GetPrototypeFromConstructor",
      "_ESAbstract.ToBoolean",
      "_ESAbstract.CreateDataPropertyOrThrow",
      "_ESAbstract.SameValueZero",
      "_ESAbstract.SameValueNonNumber",
      "_ESAbstract.IteratorClose",
      "_ESAbstract.IteratorComplete",
      "_ESAbstract.IteratorNext",
      "_ESAbstract.IteratorStep",
      "_ESAbstract.IteratorValue",
      "MutationObserver",
      "Node.prototype.contains",
      "_ESAbstract.SameValue"
    ],
    "browsers": {
      "edge": "*",
      "edge_mob": "*",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "*",
      "opera": "*",
      "safari": "*",
      "chrome": "*",
      "ios_saf": "*",
      "firefox_mob": "*",
      "android": "*",
      "op_mob": "*"
    },
    "detectSource": "\"Element\"in self&&\"inert\"in Element.prototype\n"
  },
  {
    "name": "Element.prototype.matches",
    "deps": [
      "Element",
      "document",
      "document.querySelector"
    ],
    "browsers": {
      "edge": "<18",
      "edge_mob": "<18",
      "ie": "6 - *",
      "ie_mob": "10 - 11",
      "chrome": "* - 33",
      "firefox": "* - 33",
      "safari": "4 - 7.0",
      "opera": "* - 20",
      "op_mini": "*",
      "op_mob": "* - 32",
      "android": "* - 4.4.4",
      "bb": "*",
      "ios_chr": "*",
      "ios_saf": "* - 7"
    },
    "detectSource": "\"document\"in self&&\"matches\"in document.documentElement\n"
  },
  {
    "name": "Element.prototype.nextElementSibling",
    "deps": [
      "Element",
      "document"
    ],
    "browsers": {
      "chrome": "<4",
      "edge": "<12",
      "firefox": "<3.5",
      "ie": "<9",
      "opera": "<10",
      "op_mob": "<10.1",
      "safari": "<4",
      "firefox_mob": "<4"
    },
    "detectSource": "\"document\"in self&&\"nextElementSibling\"in document.documentElement\n"
  },
  {
    "name": "Element.prototype.placeholder",
    "deps": [
      "document.querySelector",
      "Element",
      "document"
    ],
    "browsers": {
      "ie": "8 - 9"
    },
    "detectSource": "\"document\"in self&&\"placeholder\"in document.createElement(\"input\")\n"
  },
  {
    "name": "Element.prototype.prepend",
    "deps": [
      "document",
      "Element",
      "_mutation"
    ],
    "browsers": {
      "android": "<5",
      "bb": "*",
      "chrome": "<54",
      "edge": "<17",
      "edge_mob": "<17",
      "firefox": "<49",
      "ios_chr": "*",
      "ios_saf": "<10",
      "ie": "6 - *",
      "ie_mob": "10 - *",
      "opera": "<39",
      "op_mini": "*",
      "safari": "<10",
      "firefox_mob": "<49",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Element\"in self&&\"prepend\"in Element.prototype\n"
  },
  {
    "name": "Element.prototype.previousElementSibling",
    "deps": [
      "Element",
      "document"
    ],
    "browsers": {
      "chrome": "<4",
      "edge": "<12",
      "firefox": "<3.5",
      "ie": "<9",
      "opera": "<10",
      "op_mob": "<10.1",
      "safari": "<4",
      "firefox_mob": "<4"
    },
    "detectSource": "\"document\"in self&&\"previousElementSibling\"in document.documentElement\n"
  },
  {
    "name": "Element.prototype.remove",
    "deps": [
      "document",
      "Element",
      "_mutation"
    ],
    "browsers": {
      "android": "*",
      "bb": "*",
      "chrome": "* - 28",
      "edge": "<14",
      "edge_mob": "<14",
      "firefox": "<45",
      "ios_chr": "*",
      "ios_saf": "<9",
      "ie": "*",
      "ie_mob": "10 - *",
      "opera": "* - 15",
      "op_mini": "*",
      "safari": "<9.1",
      "firefox_mob": "3.6 - *"
    },
    "detectSource": "\"Element\"in self&&\"remove\"in Element.prototype\n"
  },
  {
    "name": "Element.prototype.replaceWith",
    "deps": [
      "document",
      "Element",
      "_mutation"
    ],
    "browsers": {
      "android": "<5",
      "bb": "*",
      "chrome": "<54",
      "edge": "<17",
      "edge_mob": "<17",
      "firefox": "<49",
      "ios_chr": "*",
      "ios_saf": "<10",
      "ie": "6 - *",
      "ie_mob": "10 - *",
      "opera": "<39",
      "op_mini": "*",
      "safari": "<10",
      "firefox_mob": "<49",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Element\"in self&&\"replaceWith\"in Element.prototype\n"
  },
  {
    "name": "Element.prototype.toggleAttribute",
    "deps": [
      "Element",
      "document"
    ],
    "browsers": {
      "android": "<69",
      "bb": "*",
      "chrome": "<69",
      "edge": "<18",
      "edge_mob": "<18",
      "firefox": "<63",
      "ios_chr": "<12",
      "ios_saf": "<12",
      "ie": "*",
      "ie_mob": "*",
      "opera": "<56",
      "op_mini": "*",
      "op_mob": "<51",
      "safari": "<12",
      "firefox_mob": "<63",
      "samsung_mob": "*"
    },
    "detectSource": "\"document\"in self&&\"toggleAttribute\"in document.documentElement\n"
  },
  {
    "name": "Event",
    "deps": [
      "Window",
      "document",
      "Element",
      "_ESAbstract.CreateMethodProperty",
      "_ESAbstract.ToObject",
      "_ESAbstract.ToLength",
      "_ESAbstract.ToInteger",
      "_ESAbstract.Get",
      "_ESAbstract.HasProperty",
      "_ESAbstract.ToString",
      "_ESAbstract.ToPrimitive",
      "_ESAbstract.Call",
      "_ESAbstract.GetMethod",
      "_ESAbstract.GetV",
      "_ESAbstract.IsCallable",
      "_ESAbstract.OrdinaryToPrimitive",
      "_ESAbstract.Type",
      "_ESAbstract.SameValueZero",
      "_ESAbstract.SameValueNonNumber"
    ],
    "browsers": {
      "firefox": "6 - 10",
      "ie": "6 - 11",
      "ie_mob": "10",
      "opera": "10 - 11.5",
      "safari": "4 - 7",
      "firefox_mob": "6 - 10"
    },
    "detectSource": "(function(n){if(!(\"Event\"in n))return!1\ntry{return new Event(\"click\"),!0}catch(t){return!1}})(self)\n"
  },
  {
    "name": "Event.focusin",
    "deps": [
      "Event",
      "Window",
      "document",
      "Element",
      "_ESAbstract.CreateMethodProperty",
      "_ESAbstract.ToObject",
      "_ESAbstract.ToLength",
      "_ESAbstract.ToInteger",
      "_ESAbstract.Get",
      "_ESAbstract.HasProperty",
      "_ESAbstract.ToString",
      "_ESAbstract.ToPrimitive",
      "_ESAbstract.Call",
      "_ESAbstract.GetMethod",
      "_ESAbstract.GetV",
      "_ESAbstract.IsCallable",
      "_ESAbstract.OrdinaryToPrimitive",
      "_ESAbstract.Type",
      "_ESAbstract.SameValueZero",
      "_ESAbstract.SameValueNonNumber"
    ],
    "browsers": {
      "firefox": "<52",
      "firefox_mob": "<52"
    },
    "detectSource": "(function(){var n=!1\nreturn document.documentElement.addEventListener(\"focusin\",function(){n=!0}),document.documentElement.dispatchEvent(new Event(\"focusin\")),n})()\n"
  },
  {
    "name": "Event.hashchange",
    "deps": [
      "Event",
      "Window",
      "document",
      "Element",
      "_ESAbstract.CreateMethodProperty",
      "_ESAbstract.ToObject",
      "_ESAbstract.ToLength",
      "_ESAbstract.ToInteger",
      "_ESAbstract.Get",
      "_ESAbstract.HasProperty",
      "_ESAbstract.ToString",
      "_ESAbstract.ToPrimitive",
      "_ESAbstract.Call",
      "_ESAbstract.GetMethod",
      "_ESAbstract.GetV",
      "_ESAbstract.IsCallable",
      "_ESAbstract.OrdinaryToPrimitive",
      "_ESAbstract.Type",
      "_ESAbstract.SameValueZero",
      "_ESAbstract.SameValueNonNumber"
    ],
    "browsers": {
      "ie": "6 - 7",
      "safari": "4",
      "chrome": "<55",
      "firefox": "<51",
      "ios_saf": "<10",
      "samsung_mob": "<5"
    },
    "detectSource": "\"onhashchange\"in self&&(null==self.onhashchange||\"function\"==typeof self.onhashchange)\n"
  },
  {
    "name": "EventSource",
    "deps": [],
    "browsers": {
      "firefox": "<36",
      "chrome": "<26",
      "edge": "*",
      "edge_mob": "*",
      "safari": "<7",
      "opera": "<12",
      "ie": "*",
      "ie_mob": "*",
      "android": "<4.4"
    },
    "detectSource": "\"EventSource\"in self&&\"function\"==typeof self.EventSource\n"
  },
  {
    "name": "HTMLCanvasElement.prototype.toBlob",
    "deps": [
      "_ESAbstract.CreateMethodProperty",
      "atob",
      "Blob",
      "URL",
      "_ESAbstract.Get",
      "_ESAbstract.ToObject",
      "_ESAbstract.Type",
      "_ESAbstract.HasOwnProperty",
      "_ESAbstract.ToPropertyKey",
      "_ESAbstract.ToPrimitive",
      "_ESAbstract.Call",
      "_ESAbstract.GetMethod",
      "_ESAbstract.GetV",
      "_ESAbstract.IsCallable",
      "_ESAbstract.OrdinaryToPrimitive",
      "_ESAbstract.ToString",
      "_ESAbstract.ToLength",
      "_ESAbstract.ToInteger",
      "_ESAbstract.HasProperty",
      "_ESAbstract.IsArray"
    ],
    "browsers": {
      "chrome": "<50",
      "edge": "*",
      "edge_mob": "*",
      "firefox": "<19",
      "safari": "<11",
      "ie": ">=10",
      "opera": "<37",
      "ios_saf": "<11"
    },
    "detectSource": "\"toBlob\"in HTMLCanvasElement.prototype\n"
  },
  {
    "name": "HTMLDocument",
    "deps": [],
    "browsers": {
      "ie": "9"
    },
    "detectSource": "\"HTMLDocument\"in self\n"
  },
  {
    "name": "HTMLPictureElement",
    "deps": [
      "~html5-elements",
      "document"
    ],
    "browsers": {
      "edge": "<12",
      "edge_mob": "<12",
      "ie": "*",
      "ie_mob": "10 - *",
      "firefox": "4 - 37",
      "opera": "11.6 - 29",
      "safari": "6 - 9",
      "chrome": "* - 38",
      "ios_saf": "* - 9.2",
      "firefox_mob": "4 - 37",
      "bb": "7 - 10",
      "android": "<52"
    },
    "detectSource": "\"HTMLPictureElement\"in self||\"picturefill\"in self\n"
  },
  {
    "name": "HTMLTemplateElement",
    "deps": [
      "DocumentFragment",
      "document.querySelector",
      "Element",
      "document",
      "_ESAbstract.CreateMethodProperty",
      "_ESAbstract.Get",
      "_ESAbstract.ToObject",
      "_ESAbstract.Type",
      "_ESAbstract.HasOwnProperty",
      "_ESAbstract.ToPropertyKey",
      "_ESAbstract.ToPrimitive",
      "_ESAbstract.Call",
      "_ESAbstract.GetMethod",
      "_ESAbstract.GetV",
      "_ESAbstract.IsCallable",
      "_ESAbstract.OrdinaryToPrimitive",
      "_ESAbstract.ToString",
      "Event",
      "Window",
      "_ESAbstract.ToLength",
      "_ESAbstract.ToInteger",
      "_ESAbstract.HasProperty",
      "_ESAbstract.SameValueZero",
      "_ESAbstract.SameValueNonNumber"
    ],
    "browsers": {
      "edge": "<13",
      "edge_mob": "<13",
      "ie": "11",
      "ie_mob": "11",
      "firefox": "4 - 22",
      "opera": "10 - 22",
      "safari": "6 - 8",
      "chrome": "* - 26",
      "ios_saf": "* - 8",
      "firefox_mob": "<67",
      "bb": "7 - 10",
      "android": "<67"
    },
    "detectSource": "\"HTMLTemplateElement\"in self\n",
    "detector": true
  },
  {
    "name": "IntersectionObserver",
    "deps": [
      "getComputedStyle",
      "Window",
      "_ESAbstract.CreateMethodProperty",
      "_ESAbstract.IsArray",
      "_ESAbstract.ToObject",
      "_ESAbstract.ToLength",
      "_ESAbstract.ToInteger",
      "_ESAbstract.Get",
      "_ESAbstract.IsCallable",
      "_ESAbstract.ArraySpeciesCreate",
      "_ESAbstract.ArrayCreate",
      "_ESAbstract.Type",
      "_ESAbstract.IsConstructor",
      "_ESAbstract.GetMethod",
      "_ESAbstract.GetV",
      "_ESAbstract.Construct",
      "_ESAbstract.OrdinaryCreateFromConstructor",
      "_ESAbstract.GetPrototypeFromConstructor",
      "_ESAbstract.HasOwnProperty",
      "_ESAbstract.ToPropertyKey",
      "_ESAbstract.ToPrimitive",
      "_ESAbstract.Call",
      "_ESAbstract.OrdinaryToPrimitive",
      "_ESAbstract.ToString",
      "_ESAbstract.HasProperty",
      "_ESAbstract.ToBoolean",
      "_ESAbstract.CreateDataPropertyOrThrow",
      "_ESAbstract.CreateDataProperty",
      "Event",
      "document",
      "Element",
      "_ESAbstract.SameValueZero",
      "_ESAbstract.SameValueNonNumber",
      "performance.now"
    ],
    "browsers": {
      "android": "*",
      "bb": "*",
      "chrome": "< 51",
      "edge": "< 16",
      "edge_mob": "< 16",
      "firefox": "< 55",
      "firefox_mob": "< 55",
      "ie": "*",
      "ie_mob": "*",
      "ios_saf": "< 12.2",
      "op_mini": "*",
      "op_mob": "< 46",
      "opera": "< 45",
      "safari": "< 12.2",
      "samsung_mob": "< 7"
    },
    "detectSource": "\"IntersectionObserver\"in window&&\"IntersectionObserverEntry\"in window&&\"intersectionRatio\"in window.IntersectionObserverEntry.prototype\n"
  },
  {
    "name": "IntersectionObserverEntry",
    "deps": [
      "IntersectionObserver",
      "getComputedStyle",
      "Window",
      "_ESAbstract.CreateMethodProperty",
      "_ESAbstract.IsArray",
      "_ESAbstract.ToObject",
      "_ESAbstract.ToLength",
      "_ESAbstract.ToInteger",
      "_ESAbstract.Get",
      "_ESAbstract.IsCallable",
      "_ESAbstract.ArraySpeciesCreate",
      "_ESAbstract.ArrayCreate",
      "_ESAbstract.Type",
      "_ESAbstract.IsConstructor",
      "_ESAbstract.GetMethod",
      "_ESAbstract.GetV",
      "_ESAbstract.Construct",
      "_ESAbstract.OrdinaryCreateFromConstructor",
      "_ESAbstract.GetPrototypeFromConstructor",
      "_ESAbstract.HasOwnProperty",
      "_ESAbstract.ToPropertyKey",
      "_ESAbstract.ToPrimitive",
      "_ESAbstract.Call",
      "_ESAbstract.OrdinaryToPrimitive",
      "_ESAbstract.ToString",
      "_ESAbstract.HasProperty",
      "_ESAbstract.ToBoolean",
      "_ESAbstract.CreateDataPropertyOrThrow",
      "_ESAbstract.CreateDataProperty",
      "Event",
      "document",
      "Element",
      "_ESAbstract.SameValueZero",
      "_ESAbstract.SameValueNonNumber",
      "performance.now"
    ],
    "browsers": {
      "edge": "15",
      "edge_mob": "15"
    },
    "detectSource": "\"IntersectionObserverEntry\"in window&&\"isIntersecting\"in window.IntersectionObserverEntry.prototype\n",
    "detector": true
  },
  {
    "name": "Intl",
    "deps": [],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && \n Intl.Collator && \n Intl.DateTimeFormat && \n Intl.NumberFormat && \n Intl.NumberFormat.supportedLocalesOf && (function() {\n\tfunction supportsLocale(locale) {\n\t\ttry {\n\t\t\treturn Intl.Collator.supportedLocalesOf(locale).length === 1 &&\n\t\t\t\tIntl.DateTimeFormat.supportedLocalesOf(locale).length === 1 &&\n\t\t\t\tIntl.NumberFormat.supportedLocalesOf(locale).length === 1;\n\t\t} catch (e) {\n\t\t\treturn false;\n\t\t}\n\t}var locales = [\"af-NA\",\"af-ZA\",\"af\",\"agq-CM\",\"agq\",\"ak-GH\",\"ak\",\"am-ET\",\"am\",\"ar-001\",\"ar-AE\",\"ar-BH\",\"ar-DJ\",\"ar-DZ\",\"ar-EG\",\"ar-EH\",\"ar-ER\",\"ar-IL\",\"ar-IQ\",\"ar-JO\",\"ar-KM\",\"ar-KW\",\"ar-LB\",\"ar-LY\",\"ar-MA\",\"ar-MR\",\"ar-OM\",\"ar-PS\",\"ar-QA\",\"ar-SA\",\"ar-SD\",\"ar-SO\",\"ar-SS\",\"ar-SY\",\"ar-TD\",\"ar-TN\",\"ar-YE\",\"ar\",\"as-IN\",\"as\",\"asa-TZ\",\"asa\",\"ast-ES\",\"ast\",\"az-Arab\",\"az-Cyrl-AZ\",\"az-Cyrl\",\"az-Latn-AZ\",\"az-Latn\",\"az\",\"bas-CM\",\"bas\",\"be-BY\",\"be\",\"bem-ZM\",\"bem\",\"bez-TZ\",\"bez\",\"bg-BG\",\"bg\",\"bm-ML\",\"bm-Nkoo\",\"bm\",\"bn-BD\",\"bn-IN\",\"bn\",\"bo-CN\",\"bo-IN\",\"bo\",\"br-FR\",\"br\",\"brx-IN\",\"brx\",\"bs-Cyrl-BA\",\"bs-Cyrl\",\"bs-Latn-BA\",\"bs-Latn\",\"bs\",\"ca-AD\",\"ca-ES-VALENCIA\",\"ca-ES\",\"ca-FR\",\"ca-IT\",\"ca\",\"ce-RU\",\"ce\",\"cgg-UG\",\"cgg\",\"chr-US\",\"chr\",\"ckb-IQ\",\"ckb-IR\",\"ckb\",\"cs-CZ\",\"cs\",\"cu-RU\",\"cu\",\"cy-GB\",\"cy\",\"da-DK\",\"da-GL\",\"da\",\"dav-KE\",\"dav\",\"de-AT\",\"de-BE\",\"de-CH\",\"de-DE\",\"de-LI\",\"de-LU\",\"de\",\"dje-NE\",\"dje\",\"dsb-DE\",\"dsb\",\"dua-CM\",\"dua\",\"dyo-SN\",\"dyo\",\"dz-BT\",\"dz\",\"ebu-KE\",\"ebu\",\"ee-GH\",\"ee-TG\",\"ee\",\"el-CY\",\"el-GR\",\"el\",\"en-001\",\"en-150\",\"en-AG\",\"en-AI\",\"en-AS\",\"en-AT\",\"en-AU\",\"en-BB\",\"en-BE\",\"en-BI\",\"en-BM\",\"en-BS\",\"en-BW\",\"en-BZ\",\"en-CA\",\"en-CC\",\"en-CH\",\"en-CK\",\"en-CM\",\"en-CX\",\"en-CY\",\"en-DE\",\"en-DG\",\"en-DK\",\"en-DM\",\"en-Dsrt\",\"en-ER\",\"en-FI\",\"en-FJ\",\"en-FK\",\"en-FM\",\"en-GB\",\"en-GD\",\"en-GG\",\"en-GH\",\"en-GI\",\"en-GM\",\"en-GU\",\"en-GY\",\"en-HK\",\"en-IE\",\"en-IL\",\"en-IM\",\"en-IN\",\"en-IO\",\"en-JE\",\"en-JM\",\"en-KE\",\"en-KI\",\"en-KN\",\"en-KY\",\"en-LC\",\"en-LR\",\"en-LS\",\"en-MG\",\"en-MH\",\"en-MO\",\"en-MP\",\"en-MS\",\"en-MT\",\"en-MU\",\"en-MW\",\"en-MY\",\"en-NA\",\"en-NF\",\"en-NG\",\"en-NL\",\"en-NR\",\"en-NU\",\"en-NZ\",\"en-PG\",\"en-PH\",\"en-PK\",\"en-PN\",\"en-PR\",\"en-PW\",\"en-RW\",\"en-SB\",\"en-SC\",\"en-SD\",\"en-SE\",\"en-SG\",\"en-SH\",\"en-SI\",\"en-SL\",\"en-SS\",\"en-SX\",\"en-SZ\",\"en-Shaw\",\"en-TC\",\"en-TK\",\"en-TO\",\"en-TT\",\"en-TV\",\"en-TZ\",\"en-UG\",\"en-UM\",\"en-US\",\"en-VC\",\"en-VG\",\"en-VI\",\"en-VU\",\"en-WS\",\"en-ZA\",\"en-ZM\",\"en-ZW\",\"en\",\"eo-001\",\"eo\",\"es-419\",\"es-AR\",\"es-BO\",\"es-CL\",\"es-CO\",\"es-CR\",\"es-CU\",\"es-DO\",\"es-EA\",\"es-EC\",\"es-ES\",\"es-GQ\",\"es-GT\",\"es-HN\",\"es-IC\",\"es-MX\",\"es-NI\",\"es-PA\",\"es-PE\",\"es-PH\",\"es-PR\",\"es-PY\",\"es-SV\",\"es-US\",\"es-UY\",\"es-VE\",\"es\",\"et-EE\",\"et\",\"eu-ES\",\"eu\",\"ewo-CM\",\"ewo\",\"fa-AF\",\"fa-IR\",\"fa\",\"ff-CM\",\"ff-GN\",\"ff-MR\",\"ff-SN\",\"ff\",\"fi-FI\",\"fi\",\"fil-PH\",\"fil\",\"fo-DK\",\"fo-FO\",\"fo\",\"fr-BE\",\"fr-BF\",\"fr-BI\",\"fr-BJ\",\"fr-BL\",\"fr-CA\",\"fr-CD\",\"fr-CF\",\"fr-CG\",\"fr-CH\",\"fr-CI\",\"fr-CM\",\"fr-DJ\",\"fr-DZ\",\"fr-FR\",\"fr-GA\",\"fr-GF\",\"fr-GN\",\"fr-GP\",\"fr-GQ\",\"fr-HT\",\"fr-KM\",\"fr-LU\",\"fr-MA\",\"fr-MC\",\"fr-MF\",\"fr-MG\",\"fr-ML\",\"fr-MQ\",\"fr-MR\",\"fr-MU\",\"fr-NC\",\"fr-NE\",\"fr-PF\",\"fr-PM\",\"fr-RE\",\"fr-RW\",\"fr-SC\",\"fr-SN\",\"fr-SY\",\"fr-TD\",\"fr-TG\",\"fr-TN\",\"fr-VU\",\"fr-WF\",\"fr-YT\",\"fr\",\"fur-IT\",\"fur\",\"fy-NL\",\"fy\",\"ga-IE\",\"ga\",\"gd-GB\",\"gd\",\"gl-ES\",\"gl\",\"gsw-CH\",\"gsw-FR\",\"gsw-LI\",\"gsw\",\"gu-IN\",\"gu\",\"guz-KE\",\"guz\",\"gv-IM\",\"gv\",\"ha-Arab\",\"ha-GH\",\"ha-NE\",\"ha-NG\",\"ha\",\"haw-US\",\"haw\",\"he-IL\",\"he\",\"hi-IN\",\"hi\",\"hr-BA\",\"hr-HR\",\"hr\",\"hsb-DE\",\"hsb\",\"hu-HU\",\"hu\",\"hy-AM\",\"hy\",\"id-ID\",\"id\",\"ig-NG\",\"ig\",\"ii-CN\",\"ii\",\"is-IS\",\"is\",\"it-CH\",\"it-IT\",\"it-SM\",\"it\",\"iu-Latn\",\"ja-JP\",\"ja\",\"jgo-CM\",\"jgo\",\"jmc-TZ\",\"jmc\",\"ka-GE\",\"ka\",\"kab-DZ\",\"kab\",\"kam-KE\",\"kam\",\"kde-TZ\",\"kde\",\"kea-CV\",\"kea\",\"khq-ML\",\"khq\",\"ki-KE\",\"ki\",\"kk-KZ\",\"kk\",\"kkj-CM\",\"kkj\",\"kl-GL\",\"kl\",\"kln-KE\",\"kln\",\"km-KH\",\"km\",\"kn-IN\",\"kn\",\"ko-KP\",\"ko-KR\",\"ko\",\"kok-IN\",\"kok\",\"ks-IN\",\"ks\",\"ksb-TZ\",\"ksb\",\"ksf-CM\",\"ksf\",\"ksh-DE\",\"ksh\",\"kw-GB\",\"kw\",\"ky-KG\",\"ky\",\"lag-TZ\",\"lag\",\"lb-LU\",\"lb\",\"lg-UG\",\"lg\",\"lkt-US\",\"lkt\",\"ln-AO\",\"ln-CD\",\"ln-CF\",\"ln-CG\",\"ln\",\"lo-LA\",\"lo\",\"lrc-IQ\",\"lrc-IR\",\"lrc\",\"lt-LT\",\"lt\",\"lu-CD\",\"lu\",\"luo-KE\",\"luo\",\"luy-KE\",\"luy\",\"lv-LV\",\"lv\",\"mas-KE\",\"mas-TZ\",\"mas\",\"mer-KE\",\"mer\",\"mfe-MU\",\"mfe\",\"mg-MG\",\"mg\",\"mgh-MZ\",\"mgh\",\"mgo-CM\",\"mgo\",\"mk-MK\",\"mk\",\"ml-IN\",\"ml\",\"mn-MN\",\"mn-Mong\",\"mn\",\"mr-IN\",\"mr\",\"ms-Arab\",\"ms-BN\",\"ms-MY\",\"ms-SG\",\"ms\",\"mt-MT\",\"mt\",\"mua-CM\",\"mua\",\"my-MM\",\"my\",\"mzn-IR\",\"mzn\",\"naq-NA\",\"naq\",\"nb-NO\",\"nb-SJ\",\"nb\",\"nd-ZW\",\"nd\",\"ne-IN\",\"ne-NP\",\"ne\",\"nl-AW\",\"nl-BE\",\"nl-BQ\",\"nl-CW\",\"nl-NL\",\"nl-SR\",\"nl-SX\",\"nl\",\"nmg-CM\",\"nmg\",\"nn-NO\",\"nn\",\"nnh-CM\",\"nnh\",\"nus-SS\",\"nus\",\"nyn-UG\",\"nyn\",\"om-ET\",\"om-KE\",\"om\",\"or-IN\",\"or\",\"os-GE\",\"os-RU\",\"os\",\"pa-Arab-PK\",\"pa-Arab\",\"pa-Guru-IN\",\"pa-Guru\",\"pa\",\"pl-PL\",\"pl\",\"prg-001\",\"prg\",\"ps-AF\",\"ps\",\"pt-AO\",\"pt-BR\",\"pt-CV\",\"pt-GW\",\"pt-MO\",\"pt-MZ\",\"pt-PT\",\"pt-ST\",\"pt-TL\",\"pt\",\"qu-BO\",\"qu-EC\",\"qu-PE\",\"qu\",\"rm-CH\",\"rm\",\"rn-BI\",\"rn\",\"ro-MD\",\"ro-RO\",\"ro\",\"rof-TZ\",\"rof\",\"ru-BY\",\"ru-KG\",\"ru-KZ\",\"ru-MD\",\"ru-RU\",\"ru-UA\",\"ru\",\"rw-RW\",\"rw\",\"rwk-TZ\",\"rwk\",\"sah-RU\",\"sah\",\"saq-KE\",\"saq\",\"sbp-TZ\",\"sbp\",\"se-FI\",\"se-NO\",\"se-SE\",\"se\",\"seh-MZ\",\"seh\",\"ses-ML\",\"ses\",\"sg-CF\",\"sg\",\"shi-Latn-MA\",\"shi-Latn\",\"shi-Tfng-MA\",\"shi-Tfng\",\"shi\",\"si-LK\",\"si\",\"sk-SK\",\"sk\",\"sl-SI\",\"sl\",\"smn-FI\",\"smn\",\"sn-ZW\",\"sn\",\"so-DJ\",\"so-ET\",\"so-KE\",\"so-SO\",\"so\",\"sq-AL\",\"sq-MK\",\"sq-XK\",\"sq\",\"sr-Cyrl-BA\",\"sr-Cyrl-ME\",\"sr-Cyrl-RS\",\"sr-Cyrl-XK\",\"sr-Cyrl\",\"sr-Latn-BA\",\"sr-Latn-ME\",\"sr-Latn-RS\",\"sr-Latn-XK\",\"sr-Latn\",\"sr\",\"sv-AX\",\"sv-FI\",\"sv-SE\",\"sv\",\"sw-CD\",\"sw-KE\",\"sw-TZ\",\"sw-UG\",\"sw\",\"ta-IN\",\"ta-LK\",\"ta-MY\",\"ta-SG\",\"ta\",\"te-IN\",\"te\",\"teo-KE\",\"teo-UG\",\"teo\",\"th-TH\",\"th\",\"ti-ER\",\"ti-ET\",\"ti\",\"tk-TM\",\"tk\",\"to-TO\",\"to\",\"tr-CY\",\"tr-TR\",\"tr\",\"twq-NE\",\"twq\",\"tzm-MA\",\"tzm\",\"ug-CN\",\"ug\",\"uk-UA\",\"uk\",\"ur-IN\",\"ur-PK\",\"ur\",\"uz-Arab-AF\",\"uz-Arab\",\"uz-Cyrl-UZ\",\"uz-Cyrl\",\"uz-Latn-UZ\",\"uz-Latn\",\"uz\",\"vai-Latn-LR\",\"vai-Latn\",\"vai-Vaii-LR\",\"vai-Vaii\",\"vai\",\"vi-VN\",\"vi\",\"vo-001\",\"vo\",\"vun-TZ\",\"vun\",\"wae-CH\",\"wae\",\"xog-UG\",\"xog\",\"yav-CM\",\"yav\",\"yi-001\",\"yi\",\"yo-BJ\",\"yo-NG\",\"yo\",\"zgh-MA\",\"zgh\",\"zh-Hans-CN\",\"zh-Hans-HK\",\"zh-Hans-MO\",\"zh-Hans-SG\",\"zh-Hans\",\"zh-Hant-HK\",\"zh-Hant-MO\",\"zh-Hant-TW\",\"zh-Hant\",\"zh\",\"zu-ZA\",\"zu\"];for(var i = 0; i < locales.length; i++) {\n\t\tvar locale = locales[i];\n\t\tif (supportsLocale(locale)) {\n\t\t\tcontinue;\n\t\t} else {\n\t\t\treturn false;\n\t\t}\n\t}\n})()\n",
    "detector": true
  },
  {
    "name": "Intl.PluralRules",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in self&&\"PluralRules\"in self.Intl\n"
  },
  {
    "name": "Intl.PluralRules.~locale.af",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"af\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.ak",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"ak\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.am",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"am\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.ar",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"ar\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.as",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"as\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.asa",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"asa\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.ast",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"ast\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.az",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"az\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.be",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"be\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.bem",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"bem\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.bez",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"bez\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.bg",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"bg\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.bm",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"bm\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.bn",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"bn\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.bo",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"bo\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.br",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"br\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.brx",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"brx\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.bs",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"bs\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.ca",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"ca\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.ce",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"ce\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.ceb",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"ceb\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.cgg",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"cgg\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.chr",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"chr\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.ckb",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"ckb\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.cs",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"cs\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.cy",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"cy\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.da",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"da\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.de",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"de\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.dsb",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"dsb\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.dz",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"dz\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.ee",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"ee\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.el",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"el\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.en",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"en\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.eo",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"eo\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.es",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"es\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.et",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"et\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.eu",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"eu\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.fa",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"fa\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.ff",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"ff\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.fi",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"fi\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.fil",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"fil\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.fo",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"fo\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.fr",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"fr\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.fur",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"fur\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.fy",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"fy\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.ga",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"ga\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.gd",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"gd\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.gl",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"gl\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.gsw",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"gsw\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.gu",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"gu\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.gv",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"gv\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.ha",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"ha\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.haw",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"haw\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.he",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"he\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.hi",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"hi\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.hr",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"hr\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.hsb",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"hsb\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.hu",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"hu\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.hy",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"hy\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.ia",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"ia\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.id",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"id\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.ig",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"ig\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.ii",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"ii\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.is",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"is\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.it",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"it\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.ja",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"ja\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.jgo",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"jgo\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.jmc",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"jmc\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.jv",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"jv\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.ka",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"ka\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.kab",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"kab\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.kde",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"kde\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.kea",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"kea\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.kk",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"kk\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.kkj",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"kkj\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.kl",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"kl\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.km",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"km\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.kn",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"kn\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.ko",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"ko\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.ks",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"ks\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.ksb",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"ksb\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.ksh",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"ksh\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.ku",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"ku\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.kw",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"kw\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.ky",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"ky\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.lag",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"lag\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.lb",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"lb\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.lg",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"lg\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.lkt",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"lkt\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.ln",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"ln\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.lo",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"lo\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.lt",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"lt\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.lv",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"lv\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.mas",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"mas\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.mg",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"mg\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.mgo",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"mgo\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.mk",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"mk\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.ml",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"ml\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.mn",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"mn\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.mr",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"mr\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.ms",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"ms\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.mt",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"mt\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.my",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"my\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.naq",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"naq\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.nb",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"nb\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.nd",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"nd\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.ne",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"ne\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.nl",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"nl\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.nn",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"nn\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.nnh",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"nnh\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.nyn",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"nyn\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.om",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"om\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.or",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"or\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.os",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"os\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.pa",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"pa\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.pl",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"pl\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.prg",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"prg\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.ps",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"ps\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.pt",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"pt\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.rm",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"rm\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.ro",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"ro\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.rof",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"rof\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.root",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"root\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.ru",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"ru\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.rwk",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"rwk\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.sah",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"sah\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.saq",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"saq\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.sd",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"sd\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.se",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"se\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.seh",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"seh\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.ses",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"ses\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.sg",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"sg\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.shi",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"shi\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.si",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"si\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.sk",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"sk\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.sl",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"sl\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.smn",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"smn\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.sn",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"sn\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.so",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"so\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.sq",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"sq\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.sr",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"sr\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.sv",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"sv\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.sw",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"sw\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.ta",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"ta\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.te",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"te\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.teo",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"teo\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.th",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"th\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.ti",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"ti\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.tk",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"tk\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.to",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"to\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.tr",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"tr\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.tzm",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"tzm\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.ug",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"ug\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.uk",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"uk\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.ur",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"ur\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.uz",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"uz\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.vi",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"vi\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.vo",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"vo\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.vun",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"vun\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.wae",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"wae\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.wo",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"wo\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.xh",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"xh\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.xog",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"xog\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.yi",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"yi\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.yo",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"yo\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.yue",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"yue\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.zh",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"zh\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.PluralRules.~locale.zu",
    "deps": [
      "Intl",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "edge": "<18",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<58",
      "opera": "<50",
      "chrome": "<63",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<58",
      "samsung_mob": "*"
    },
    "detectSource": "\"Intl\"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf(\"zu\").length}catch(l){return!1}}()\n"
  },
  {
    "name": "Intl.RelativeTimeFormat",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&\"RelativeTimeFormat\"in self.Intl\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.af",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"af\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.agq",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"agq\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.ak",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"ak\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.am",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"am\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.ar",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"ar\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.as",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"as\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.asa",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"asa\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.ast",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"ast\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.az",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"az\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.bas",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"bas\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.be",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"be\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.bem",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"bem\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.bez",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"bez\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.bg",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"bg\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.bm",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"bm\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.bn",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"bn\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.bo",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"bo\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.br",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"br\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.brx",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"brx\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.bs",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"bs\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.ca",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"ca\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.ccp",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"ccp\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.ce",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"ce\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.ceb",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"ceb\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.cgg",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"cgg\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.chr",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"chr\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.ckb",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"ckb\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.cs",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"cs\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.cu",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"cu\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.cy",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"cy\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.da",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"da\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.dav",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"dav\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.de",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"de\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.dje",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"dje\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.dsb",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"dsb\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.dua",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"dua\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.dyo",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"dyo\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.dz",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"dz\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.ebu",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"ebu\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.ee",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"ee\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.el",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"el\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.en",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"en\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.eo",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"eo\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.es",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"es\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.et",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"et\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.eu",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"eu\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.ewo",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"ewo\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.fa",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"fa\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.ff",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"ff\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.fi",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"fi\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.fil",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"fil\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.fo",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"fo\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.fr",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"fr\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.fur",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"fur\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.fy",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"fy\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.ga",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"ga\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.gd",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"gd\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.gl",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"gl\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.gsw",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"gsw\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.gu",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"gu\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.guz",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"guz\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.gv",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"gv\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.ha",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"ha\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.haw",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"haw\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.he",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"he\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.hi",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"hi\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.hr",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"hr\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.hsb",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"hsb\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.hu",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"hu\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.hy",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"hy\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.ia",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"ia\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.id",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"id\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.ig",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"ig\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.ii",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"ii\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.is",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"is\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.it",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"it\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.ja",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"ja\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.jgo",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"jgo\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.jmc",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"jmc\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.jv",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"jv\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.ka",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"ka\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.kab",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"kab\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.kam",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"kam\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.kde",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"kde\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.kea",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"kea\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.khq",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"khq\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.ki",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"ki\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.kk",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"kk\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.kkj",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"kkj\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.kl",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"kl\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.kln",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"kln\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.km",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"km\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.kn",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"kn\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.ko",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"ko\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.kok",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"kok\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.ks",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"ks\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.ksb",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"ksb\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.ksf",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"ksf\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.ksh",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"ksh\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.ku",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"ku\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.kw",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"kw\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.ky",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"ky\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.lag",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"lag\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.lb",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"lb\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.lg",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"lg\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.lkt",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"lkt\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.ln",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"ln\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.lo",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"lo\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.lrc",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"lrc\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.lt",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"lt\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.lu",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"lu\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.luo",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"luo\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.luy",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"luy\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.lv",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"lv\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.mas",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"mas\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.mer",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"mer\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.mfe",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"mfe\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.mg",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"mg\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.mgh",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"mgh\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.mgo",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"mgo\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.mi",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"mi\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.mk",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"mk\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.ml",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"ml\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.mn",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"mn\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.mr",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"mr\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.ms",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"ms\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.mt",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"mt\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.mua",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"mua\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.my",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"my\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.mzn",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"mzn\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.naq",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"naq\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.nb",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"nb\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.nd",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"nd\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.nds",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"nds\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.ne",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"ne\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.nl",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"nl\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.nmg",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"nmg\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.nn",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"nn\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.nnh",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"nnh\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.nus",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"nus\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.nyn",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"nyn\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.om",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"om\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.or",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"or\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.os",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"os\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.pa",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"pa\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.pl",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"pl\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.prg",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"prg\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.ps",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"ps\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.pt",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"pt\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.qu",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"qu\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.rm",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"rm\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.rn",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"rn\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.ro",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"ro\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.rof",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"rof\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.ru",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"ru\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.rw",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"rw\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.rwk",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"rwk\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.sah",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"sah\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.saq",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"saq\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.sbp",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"sbp\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.sd",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"sd\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.se",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"se\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.seh",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"seh\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.ses",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"ses\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.sg",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"sg\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.shi",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"shi\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.si",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"si\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.sk",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"sk\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.sl",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"sl\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.smn",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"smn\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.sn",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"sn\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.so",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"so\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.sq",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"sq\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.sr",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"sr\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.sv",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"sv\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.sw",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"sw\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.ta",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"ta\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.te",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"te\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.teo",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"teo\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.tg",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"tg\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.th",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"th\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.ti",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"ti\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.tk",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"tk\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.to",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"to\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.tr",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"tr\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.tt",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"tt\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.twq",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"twq\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.tzm",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"tzm\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.ug",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"ug\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.uk",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"uk\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.ur",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"ur\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.uz",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"uz\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.vai",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"vai\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.vi",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"vi\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.vo",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"vo\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.vun",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"vun\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.wae",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"wae\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.wo",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"wo\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.xh",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"xh\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.xog",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"xog\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.yav",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"yav\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.yi",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"yi\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.yo",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"yo\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.yue",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"yue\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.zgh",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"zgh\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.zh",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"zh\").length\n"
  },
  {
    "name": "Intl.RelativeTimeFormat.~locale.zu",
    "deps": [
      "Intl",
      "Intl.~locale.en",
      "Intl.PluralRules",
      "Intl.RelativeTimeFormat"
    ],
    "browsers": {
      "android": "<63",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "<65",
      "opera": "<50",
      "chrome": "<71",
      "safari": "*",
      "ios_saf": "*",
      "firefox_mob": "<65",
      "samsung_mob": "<6"
    },
    "detectSource": "\"Intl\"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf(\"zu\").length\n"
  },
  {
    "name": "Intl.~locale.af",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"af\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"af\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"af\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.af-NA",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"af-NA\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"af-NA\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"af-NA\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.af-ZA",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"af-ZA\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"af-ZA\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"af-ZA\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.agq",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"agq\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"agq\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"agq\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.agq-CM",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"agq-CM\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"agq-CM\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"agq-CM\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ak",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ak\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ak\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ak\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ak-GH",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ak-GH\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ak-GH\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ak-GH\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.am",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"am\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"am\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"am\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.am-ET",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"am-ET\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"am-ET\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"am-ET\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ar",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ar\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ar\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ar\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ar-001",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ar-001\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ar-001\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ar-001\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ar-AE",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ar-AE\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ar-AE\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ar-AE\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ar-BH",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ar-BH\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ar-BH\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ar-BH\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ar-DJ",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ar-DJ\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ar-DJ\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ar-DJ\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ar-DZ",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ar-DZ\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ar-DZ\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ar-DZ\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ar-EG",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ar-EG\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ar-EG\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ar-EG\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ar-EH",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ar-EH\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ar-EH\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ar-EH\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ar-ER",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ar-ER\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ar-ER\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ar-ER\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ar-IL",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ar-IL\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ar-IL\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ar-IL\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ar-IQ",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ar-IQ\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ar-IQ\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ar-IQ\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ar-JO",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ar-JO\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ar-JO\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ar-JO\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ar-KM",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ar-KM\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ar-KM\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ar-KM\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ar-KW",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ar-KW\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ar-KW\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ar-KW\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ar-LB",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ar-LB\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ar-LB\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ar-LB\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ar-LY",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ar-LY\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ar-LY\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ar-LY\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ar-MA",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ar-MA\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ar-MA\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ar-MA\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ar-MR",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ar-MR\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ar-MR\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ar-MR\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ar-OM",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ar-OM\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ar-OM\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ar-OM\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ar-PS",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ar-PS\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ar-PS\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ar-PS\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ar-QA",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ar-QA\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ar-QA\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ar-QA\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ar-SA",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ar-SA\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ar-SA\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ar-SA\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ar-SD",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ar-SD\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ar-SD\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ar-SD\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ar-SO",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ar-SO\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ar-SO\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ar-SO\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ar-SS",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ar-SS\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ar-SS\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ar-SS\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ar-SY",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ar-SY\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ar-SY\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ar-SY\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ar-TD",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ar-TD\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ar-TD\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ar-TD\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ar-TN",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ar-TN\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ar-TN\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ar-TN\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ar-YE",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ar-YE\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ar-YE\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ar-YE\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.as",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"as\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"as\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"as\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.as-IN",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"as-IN\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"as-IN\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"as-IN\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.asa",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"asa\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"asa\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"asa\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.asa-TZ",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"asa-TZ\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"asa-TZ\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"asa-TZ\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ast",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ast\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ast\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ast\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ast-ES",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ast-ES\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ast-ES\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ast-ES\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.az",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"az\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"az\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"az\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.az-Arab",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"az-Arab\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"az-Arab\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"az-Arab\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.az-Cyrl",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"az-Cyrl\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"az-Cyrl\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"az-Cyrl\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.az-Cyrl-AZ",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"az-Cyrl-AZ\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"az-Cyrl-AZ\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"az-Cyrl-AZ\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.az-Latn",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"az-Latn\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"az-Latn\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"az-Latn\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.az-Latn-AZ",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"az-Latn-AZ\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"az-Latn-AZ\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"az-Latn-AZ\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.bas",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"bas\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"bas\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"bas\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.bas-CM",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"bas-CM\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"bas-CM\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"bas-CM\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.be",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"be\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"be\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"be\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.be-BY",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"be-BY\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"be-BY\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"be-BY\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.bem",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"bem\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"bem\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"bem\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.bem-ZM",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"bem-ZM\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"bem-ZM\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"bem-ZM\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.bez",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"bez\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"bez\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"bez\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.bez-TZ",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"bez-TZ\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"bez-TZ\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"bez-TZ\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.bg",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"bg\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"bg\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"bg\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.bg-BG",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"bg-BG\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"bg-BG\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"bg-BG\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.bm",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"bm\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"bm\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"bm\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.bm-ML",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"bm-ML\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"bm-ML\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"bm-ML\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.bm-Nkoo",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"bm-Nkoo\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"bm-Nkoo\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"bm-Nkoo\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.bn",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"bn\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"bn\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"bn\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.bn-BD",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"bn-BD\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"bn-BD\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"bn-BD\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.bn-IN",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"bn-IN\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"bn-IN\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"bn-IN\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.bo",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"bo\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"bo\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"bo\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.bo-CN",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"bo-CN\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"bo-CN\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"bo-CN\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.bo-IN",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"bo-IN\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"bo-IN\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"bo-IN\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.br",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"br\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"br\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"br\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.br-FR",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"br-FR\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"br-FR\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"br-FR\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.brx",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"brx\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"brx\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"brx\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.brx-IN",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"brx-IN\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"brx-IN\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"brx-IN\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.bs",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"bs\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"bs\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"bs\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.bs-Cyrl",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"bs-Cyrl\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"bs-Cyrl\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"bs-Cyrl\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.bs-Cyrl-BA",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"bs-Cyrl-BA\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"bs-Cyrl-BA\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"bs-Cyrl-BA\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.bs-Latn",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"bs-Latn\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"bs-Latn\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"bs-Latn\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.bs-Latn-BA",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"bs-Latn-BA\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"bs-Latn-BA\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"bs-Latn-BA\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ca",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ca\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ca\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ca\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ca-AD",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ca-AD\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ca-AD\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ca-AD\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ca-ES",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ca-ES\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ca-ES\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ca-ES\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ca-ES-VALENCIA",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ca-ES-VALENCIA\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ca-ES-VALENCIA\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ca-ES-VALENCIA\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ca-FR",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ca-FR\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ca-FR\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ca-FR\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ca-IT",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ca-IT\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ca-IT\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ca-IT\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ce",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ce\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ce\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ce\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ce-RU",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ce-RU\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ce-RU\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ce-RU\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.cgg",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"cgg\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"cgg\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"cgg\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.cgg-UG",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"cgg-UG\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"cgg-UG\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"cgg-UG\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.chr",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"chr\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"chr\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"chr\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.chr-US",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"chr-US\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"chr-US\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"chr-US\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ckb",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ckb\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ckb\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ckb\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ckb-IQ",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ckb-IQ\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ckb-IQ\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ckb-IQ\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ckb-IR",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ckb-IR\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ckb-IR\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ckb-IR\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.cs",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"cs\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"cs\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"cs\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.cs-CZ",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"cs-CZ\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"cs-CZ\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"cs-CZ\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.cu",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"cu\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"cu\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"cu\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.cu-RU",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"cu-RU\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"cu-RU\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"cu-RU\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.cy",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"cy\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"cy\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"cy\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.cy-GB",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"cy-GB\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"cy-GB\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"cy-GB\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.da",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"da\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"da\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"da\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.da-DK",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"da-DK\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"da-DK\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"da-DK\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.da-GL",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"da-GL\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"da-GL\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"da-GL\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.dav",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"dav\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"dav\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"dav\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.dav-KE",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"dav-KE\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"dav-KE\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"dav-KE\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.de",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"de\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"de\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"de\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.de-AT",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"de-AT\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"de-AT\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"de-AT\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.de-BE",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"de-BE\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"de-BE\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"de-BE\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.de-CH",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"de-CH\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"de-CH\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"de-CH\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.de-DE",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"de-DE\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"de-DE\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"de-DE\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.de-LI",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"de-LI\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"de-LI\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"de-LI\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.de-LU",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"de-LU\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"de-LU\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"de-LU\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.dje",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"dje\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"dje\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"dje\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.dje-NE",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"dje-NE\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"dje-NE\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"dje-NE\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.dsb",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"dsb\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"dsb\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"dsb\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.dsb-DE",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"dsb-DE\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"dsb-DE\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"dsb-DE\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.dua",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"dua\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"dua\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"dua\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.dua-CM",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"dua-CM\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"dua-CM\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"dua-CM\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.dyo",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"dyo\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"dyo\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"dyo\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.dyo-SN",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"dyo-SN\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"dyo-SN\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"dyo-SN\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.dz",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"dz\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"dz\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"dz\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.dz-BT",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"dz-BT\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"dz-BT\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"dz-BT\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ebu",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ebu\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ebu\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ebu\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ebu-KE",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ebu-KE\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ebu-KE\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ebu-KE\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ee",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ee\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ee\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ee\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ee-GH",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ee-GH\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ee-GH\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ee-GH\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ee-TG",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ee-TG\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ee-TG\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ee-TG\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.el",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"el\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"el\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"el\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.el-CY",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"el-CY\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"el-CY\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"el-CY\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.el-GR",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"el-GR\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"el-GR\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"el-GR\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-001",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-001\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-001\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-001\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-150",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-150\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-150\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-150\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-AG",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-AG\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-AG\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-AG\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-AI",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-AI\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-AI\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-AI\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-AS",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-AS\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-AS\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-AS\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-AT",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-AT\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-AT\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-AT\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-AU",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-AU\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-AU\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-AU\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-BB",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-BB\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-BB\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-BB\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-BE",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-BE\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-BE\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-BE\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-BI",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-BI\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-BI\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-BI\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-BM",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-BM\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-BM\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-BM\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-BS",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-BS\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-BS\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-BS\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-BW",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-BW\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-BW\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-BW\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-BZ",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-BZ\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-BZ\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-BZ\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-CA",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-CA\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-CA\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-CA\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-CC",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-CC\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-CC\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-CC\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-CH",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-CH\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-CH\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-CH\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-CK",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-CK\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-CK\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-CK\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-CM",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-CM\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-CM\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-CM\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-CX",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-CX\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-CX\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-CX\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-CY",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-CY\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-CY\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-CY\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-DE",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-DE\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-DE\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-DE\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-DG",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-DG\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-DG\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-DG\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-DK",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-DK\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-DK\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-DK\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-DM",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-DM\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-DM\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-DM\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-Dsrt",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-Dsrt\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-Dsrt\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-Dsrt\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-ER",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-ER\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-ER\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-ER\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-FI",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-FI\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-FI\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-FI\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-FJ",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-FJ\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-FJ\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-FJ\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-FK",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-FK\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-FK\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-FK\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-FM",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-FM\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-FM\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-FM\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-GB",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-GB\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-GB\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-GB\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-GD",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-GD\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-GD\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-GD\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-GG",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-GG\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-GG\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-GG\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-GH",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-GH\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-GH\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-GH\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-GI",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-GI\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-GI\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-GI\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-GM",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-GM\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-GM\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-GM\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-GU",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-GU\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-GU\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-GU\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-GY",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-GY\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-GY\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-GY\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-HK",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-HK\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-HK\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-HK\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-IE",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-IE\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-IE\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-IE\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-IL",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-IL\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-IL\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-IL\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-IM",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-IM\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-IM\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-IM\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-IN",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-IN\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-IN\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-IN\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-IO",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-IO\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-IO\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-IO\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-JE",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-JE\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-JE\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-JE\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-JM",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-JM\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-JM\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-JM\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-KE",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-KE\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-KE\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-KE\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-KI",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-KI\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-KI\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-KI\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-KN",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-KN\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-KN\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-KN\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-KY",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-KY\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-KY\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-KY\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-LC",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-LC\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-LC\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-LC\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-LR",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-LR\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-LR\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-LR\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-LS",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-LS\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-LS\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-LS\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-MG",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-MG\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-MG\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-MG\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-MH",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-MH\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-MH\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-MH\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-MO",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-MO\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-MO\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-MO\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-MP",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-MP\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-MP\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-MP\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-MS",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-MS\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-MS\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-MS\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-MT",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-MT\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-MT\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-MT\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-MU",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-MU\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-MU\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-MU\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-MW",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-MW\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-MW\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-MW\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-MY",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-MY\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-MY\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-MY\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-NA",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-NA\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-NA\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-NA\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-NF",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-NF\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-NF\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-NF\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-NG",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-NG\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-NG\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-NG\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-NL",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-NL\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-NL\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-NL\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-NR",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-NR\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-NR\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-NR\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-NU",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-NU\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-NU\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-NU\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-NZ",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-NZ\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-NZ\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-NZ\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-PG",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-PG\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-PG\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-PG\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-PH",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-PH\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-PH\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-PH\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-PK",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-PK\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-PK\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-PK\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-PN",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-PN\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-PN\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-PN\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-PR",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-PR\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-PR\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-PR\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-PW",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-PW\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-PW\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-PW\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-RW",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-RW\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-RW\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-RW\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-SB",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-SB\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-SB\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-SB\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-SC",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-SC\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-SC\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-SC\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-SD",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-SD\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-SD\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-SD\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-SE",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-SE\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-SE\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-SE\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-SG",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-SG\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-SG\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-SG\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-SH",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-SH\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-SH\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-SH\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-SI",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-SI\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-SI\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-SI\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-SL",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-SL\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-SL\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-SL\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-SS",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-SS\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-SS\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-SS\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-SX",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-SX\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-SX\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-SX\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-SZ",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-SZ\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-SZ\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-SZ\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-Shaw",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-Shaw\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-Shaw\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-Shaw\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-TC",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-TC\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-TC\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-TC\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-TK",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-TK\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-TK\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-TK\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-TO",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-TO\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-TO\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-TO\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-TT",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-TT\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-TT\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-TT\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-TV",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-TV\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-TV\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-TV\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-TZ",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-TZ\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-TZ\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-TZ\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-UG",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-UG\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-UG\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-UG\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-UM",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-UM\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-UM\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-UM\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-US",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-US\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-US\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-US\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-VC",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-VC\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-VC\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-VC\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-VG",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-VG\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-VG\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-VG\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-VI",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-VI\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-VI\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-VI\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-VU",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-VU\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-VU\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-VU\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-WS",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-WS\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-WS\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-WS\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-ZA",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-ZA\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-ZA\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-ZA\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-ZM",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-ZM\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-ZM\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-ZM\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.en-ZW",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"en-ZW\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"en-ZW\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"en-ZW\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.eo",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"eo\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"eo\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"eo\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.eo-001",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"eo-001\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"eo-001\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"eo-001\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.es",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"es\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"es\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"es\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.es-419",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"es-419\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"es-419\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"es-419\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.es-AR",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"es-AR\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"es-AR\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"es-AR\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.es-BO",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"es-BO\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"es-BO\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"es-BO\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.es-CL",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"es-CL\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"es-CL\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"es-CL\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.es-CO",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"es-CO\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"es-CO\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"es-CO\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.es-CR",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"es-CR\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"es-CR\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"es-CR\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.es-CU",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"es-CU\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"es-CU\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"es-CU\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.es-DO",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"es-DO\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"es-DO\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"es-DO\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.es-EA",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"es-EA\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"es-EA\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"es-EA\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.es-EC",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"es-EC\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"es-EC\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"es-EC\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.es-ES",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"es-ES\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"es-ES\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"es-ES\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.es-GQ",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"es-GQ\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"es-GQ\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"es-GQ\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.es-GT",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"es-GT\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"es-GT\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"es-GT\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.es-HN",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"es-HN\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"es-HN\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"es-HN\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.es-IC",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"es-IC\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"es-IC\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"es-IC\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.es-MX",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"es-MX\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"es-MX\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"es-MX\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.es-NI",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"es-NI\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"es-NI\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"es-NI\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.es-PA",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"es-PA\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"es-PA\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"es-PA\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.es-PE",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"es-PE\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"es-PE\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"es-PE\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.es-PH",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"es-PH\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"es-PH\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"es-PH\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.es-PR",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"es-PR\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"es-PR\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"es-PR\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.es-PY",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"es-PY\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"es-PY\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"es-PY\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.es-SV",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"es-SV\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"es-SV\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"es-SV\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.es-US",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"es-US\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"es-US\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"es-US\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.es-UY",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"es-UY\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"es-UY\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"es-UY\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.es-VE",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"es-VE\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"es-VE\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"es-VE\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.et",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"et\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"et\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"et\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.et-EE",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"et-EE\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"et-EE\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"et-EE\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.eu",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"eu\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"eu\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"eu\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.eu-ES",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"eu-ES\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"eu-ES\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"eu-ES\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ewo",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ewo\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ewo\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ewo\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ewo-CM",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ewo-CM\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ewo-CM\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ewo-CM\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fa",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fa\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fa\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fa\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fa-AF",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fa-AF\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fa-AF\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fa-AF\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fa-IR",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fa-IR\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fa-IR\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fa-IR\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ff",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ff\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ff\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ff\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ff-CM",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ff-CM\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ff-CM\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ff-CM\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ff-GN",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ff-GN\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ff-GN\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ff-GN\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ff-MR",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ff-MR\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ff-MR\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ff-MR\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ff-SN",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ff-SN\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ff-SN\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ff-SN\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fi",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fi\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fi\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fi\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fi-FI",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fi-FI\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fi-FI\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fi-FI\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fil",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fil\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fil\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fil\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fil-PH",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fil-PH\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fil-PH\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fil-PH\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fo",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fo\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fo\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fo\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fo-DK",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fo-DK\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fo-DK\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fo-DK\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fo-FO",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fo-FO\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fo-FO\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fo-FO\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fr",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fr\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fr\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fr\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fr-BE",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fr-BE\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fr-BE\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fr-BE\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fr-BF",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fr-BF\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fr-BF\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fr-BF\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fr-BI",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fr-BI\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fr-BI\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fr-BI\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fr-BJ",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fr-BJ\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fr-BJ\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fr-BJ\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fr-BL",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fr-BL\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fr-BL\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fr-BL\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fr-CA",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fr-CA\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fr-CA\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fr-CA\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fr-CD",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fr-CD\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fr-CD\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fr-CD\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fr-CF",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fr-CF\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fr-CF\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fr-CF\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fr-CG",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fr-CG\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fr-CG\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fr-CG\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fr-CH",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fr-CH\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fr-CH\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fr-CH\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fr-CI",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fr-CI\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fr-CI\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fr-CI\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fr-CM",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fr-CM\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fr-CM\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fr-CM\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fr-DJ",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fr-DJ\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fr-DJ\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fr-DJ\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fr-DZ",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fr-DZ\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fr-DZ\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fr-DZ\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fr-FR",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fr-FR\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fr-FR\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fr-FR\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fr-GA",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fr-GA\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fr-GA\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fr-GA\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fr-GF",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fr-GF\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fr-GF\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fr-GF\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fr-GN",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fr-GN\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fr-GN\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fr-GN\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fr-GP",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fr-GP\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fr-GP\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fr-GP\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fr-GQ",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fr-GQ\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fr-GQ\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fr-GQ\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fr-HT",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fr-HT\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fr-HT\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fr-HT\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fr-KM",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fr-KM\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fr-KM\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fr-KM\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fr-LU",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fr-LU\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fr-LU\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fr-LU\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fr-MA",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fr-MA\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fr-MA\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fr-MA\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fr-MC",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fr-MC\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fr-MC\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fr-MC\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fr-MF",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fr-MF\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fr-MF\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fr-MF\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fr-MG",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fr-MG\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fr-MG\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fr-MG\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fr-ML",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fr-ML\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fr-ML\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fr-ML\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fr-MQ",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fr-MQ\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fr-MQ\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fr-MQ\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fr-MR",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fr-MR\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fr-MR\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fr-MR\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fr-MU",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fr-MU\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fr-MU\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fr-MU\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fr-NC",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fr-NC\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fr-NC\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fr-NC\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fr-NE",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fr-NE\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fr-NE\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fr-NE\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fr-PF",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fr-PF\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fr-PF\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fr-PF\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fr-PM",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fr-PM\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fr-PM\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fr-PM\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fr-RE",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fr-RE\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fr-RE\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fr-RE\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fr-RW",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fr-RW\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fr-RW\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fr-RW\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fr-SC",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fr-SC\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fr-SC\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fr-SC\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fr-SN",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fr-SN\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fr-SN\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fr-SN\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fr-SY",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fr-SY\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fr-SY\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fr-SY\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fr-TD",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fr-TD\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fr-TD\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fr-TD\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fr-TG",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fr-TG\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fr-TG\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fr-TG\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fr-TN",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fr-TN\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fr-TN\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fr-TN\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fr-VU",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fr-VU\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fr-VU\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fr-VU\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fr-WF",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fr-WF\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fr-WF\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fr-WF\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fr-YT",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fr-YT\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fr-YT\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fr-YT\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fur",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fur\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fur\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fur\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fur-IT",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fur-IT\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fur-IT\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fur-IT\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fy",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fy\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fy\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fy\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.fy-NL",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"fy-NL\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"fy-NL\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"fy-NL\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ga",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ga\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ga\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ga\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ga-IE",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ga-IE\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ga-IE\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ga-IE\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.gd",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"gd\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"gd\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"gd\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.gd-GB",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"gd-GB\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"gd-GB\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"gd-GB\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.gl",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"gl\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"gl\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"gl\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.gl-ES",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"gl-ES\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"gl-ES\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"gl-ES\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.gsw",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"gsw\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"gsw\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"gsw\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.gsw-CH",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"gsw-CH\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"gsw-CH\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"gsw-CH\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.gsw-FR",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"gsw-FR\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"gsw-FR\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"gsw-FR\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.gsw-LI",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"gsw-LI\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"gsw-LI\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"gsw-LI\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.gu",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"gu\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"gu\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"gu\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.gu-IN",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"gu-IN\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"gu-IN\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"gu-IN\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.guz",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"guz\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"guz\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"guz\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.guz-KE",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"guz-KE\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"guz-KE\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"guz-KE\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.gv",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"gv\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"gv\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"gv\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.gv-IM",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"gv-IM\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"gv-IM\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"gv-IM\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ha",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ha\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ha\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ha\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ha-Arab",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ha-Arab\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ha-Arab\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ha-Arab\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ha-GH",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ha-GH\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ha-GH\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ha-GH\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ha-NE",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ha-NE\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ha-NE\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ha-NE\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ha-NG",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ha-NG\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ha-NG\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ha-NG\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.haw",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"haw\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"haw\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"haw\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.haw-US",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"haw-US\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"haw-US\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"haw-US\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.he",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"he\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"he\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"he\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.he-IL",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"he-IL\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"he-IL\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"he-IL\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.hi",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"hi\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"hi\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"hi\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.hi-IN",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"hi-IN\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"hi-IN\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"hi-IN\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.hr",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"hr\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"hr\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"hr\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.hr-BA",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"hr-BA\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"hr-BA\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"hr-BA\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.hr-HR",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"hr-HR\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"hr-HR\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"hr-HR\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.hsb",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"hsb\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"hsb\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"hsb\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.hsb-DE",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"hsb-DE\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"hsb-DE\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"hsb-DE\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.hu",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"hu\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"hu\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"hu\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.hu-HU",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"hu-HU\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"hu-HU\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"hu-HU\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.hy",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"hy\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"hy\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"hy\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.hy-AM",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"hy-AM\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"hy-AM\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"hy-AM\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.id",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"id\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"id\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"id\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.id-ID",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"id-ID\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"id-ID\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"id-ID\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ig",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ig\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ig\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ig\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ig-NG",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ig-NG\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ig-NG\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ig-NG\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ii",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ii\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ii\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ii\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ii-CN",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ii-CN\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ii-CN\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ii-CN\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.is",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"is\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"is\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"is\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.is-IS",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"is-IS\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"is-IS\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"is-IS\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.it",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"it\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"it\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"it\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.it-CH",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"it-CH\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"it-CH\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"it-CH\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.it-IT",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"it-IT\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"it-IT\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"it-IT\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.it-SM",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"it-SM\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"it-SM\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"it-SM\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.iu-Latn",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"iu-Latn\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"iu-Latn\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"iu-Latn\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ja",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ja\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ja\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ja\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ja-JP",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ja-JP\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ja-JP\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ja-JP\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.jgo",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"jgo\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"jgo\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"jgo\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.jgo-CM",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"jgo-CM\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"jgo-CM\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"jgo-CM\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.jmc",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"jmc\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"jmc\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"jmc\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.jmc-TZ",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"jmc-TZ\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"jmc-TZ\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"jmc-TZ\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ka",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ka\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ka\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ka\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ka-GE",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ka-GE\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ka-GE\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ka-GE\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.kab",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"kab\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"kab\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"kab\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.kab-DZ",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"kab-DZ\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"kab-DZ\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"kab-DZ\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.kam",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"kam\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"kam\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"kam\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.kam-KE",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"kam-KE\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"kam-KE\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"kam-KE\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.kde",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"kde\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"kde\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"kde\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.kde-TZ",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"kde-TZ\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"kde-TZ\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"kde-TZ\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.kea",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"kea\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"kea\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"kea\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.kea-CV",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"kea-CV\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"kea-CV\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"kea-CV\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.khq",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"khq\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"khq\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"khq\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.khq-ML",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"khq-ML\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"khq-ML\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"khq-ML\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ki",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ki\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ki\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ki\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ki-KE",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ki-KE\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ki-KE\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ki-KE\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.kk",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"kk\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"kk\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"kk\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.kk-KZ",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"kk-KZ\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"kk-KZ\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"kk-KZ\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.kkj",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"kkj\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"kkj\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"kkj\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.kkj-CM",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"kkj-CM\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"kkj-CM\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"kkj-CM\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.kl",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"kl\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"kl\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"kl\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.kl-GL",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"kl-GL\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"kl-GL\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"kl-GL\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.kln",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"kln\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"kln\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"kln\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.kln-KE",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"kln-KE\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"kln-KE\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"kln-KE\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.km",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"km\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"km\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"km\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.km-KH",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"km-KH\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"km-KH\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"km-KH\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.kn",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"kn\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"kn\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"kn\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.kn-IN",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"kn-IN\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"kn-IN\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"kn-IN\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ko",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ko\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ko\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ko\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ko-KP",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ko-KP\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ko-KP\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ko-KP\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ko-KR",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ko-KR\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ko-KR\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ko-KR\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.kok",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"kok\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"kok\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"kok\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.kok-IN",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"kok-IN\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"kok-IN\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"kok-IN\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ks",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ks\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ks\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ks\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ks-IN",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ks-IN\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ks-IN\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ks-IN\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ksb",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ksb\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ksb\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ksb\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ksb-TZ",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ksb-TZ\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ksb-TZ\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ksb-TZ\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ksf",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ksf\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ksf\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ksf\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ksf-CM",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ksf-CM\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ksf-CM\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ksf-CM\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ksh",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ksh\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ksh\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ksh\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ksh-DE",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ksh-DE\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ksh-DE\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ksh-DE\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.kw",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"kw\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"kw\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"kw\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.kw-GB",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"kw-GB\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"kw-GB\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"kw-GB\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ky",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ky\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ky\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ky\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ky-KG",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ky-KG\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ky-KG\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ky-KG\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.lag",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"lag\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"lag\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"lag\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.lag-TZ",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"lag-TZ\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"lag-TZ\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"lag-TZ\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.lb",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"lb\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"lb\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"lb\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.lb-LU",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"lb-LU\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"lb-LU\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"lb-LU\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.lg",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"lg\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"lg\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"lg\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.lg-UG",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"lg-UG\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"lg-UG\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"lg-UG\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.lkt",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"lkt\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"lkt\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"lkt\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.lkt-US",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"lkt-US\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"lkt-US\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"lkt-US\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ln",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ln\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ln\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ln\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ln-AO",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ln-AO\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ln-AO\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ln-AO\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ln-CD",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ln-CD\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ln-CD\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ln-CD\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ln-CF",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ln-CF\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ln-CF\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ln-CF\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ln-CG",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ln-CG\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ln-CG\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ln-CG\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.lo",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"lo\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"lo\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"lo\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.lo-LA",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"lo-LA\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"lo-LA\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"lo-LA\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.lrc",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"lrc\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"lrc\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"lrc\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.lrc-IQ",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"lrc-IQ\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"lrc-IQ\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"lrc-IQ\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.lrc-IR",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"lrc-IR\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"lrc-IR\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"lrc-IR\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.lt",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"lt\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"lt\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"lt\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.lt-LT",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"lt-LT\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"lt-LT\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"lt-LT\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.lu",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"lu\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"lu\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"lu\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.lu-CD",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"lu-CD\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"lu-CD\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"lu-CD\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.luo",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"luo\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"luo\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"luo\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.luo-KE",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"luo-KE\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"luo-KE\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"luo-KE\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.luy",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"luy\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"luy\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"luy\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.luy-KE",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"luy-KE\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"luy-KE\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"luy-KE\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.lv",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"lv\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"lv\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"lv\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.lv-LV",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"lv-LV\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"lv-LV\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"lv-LV\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.mas",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"mas\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"mas\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"mas\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.mas-KE",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"mas-KE\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"mas-KE\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"mas-KE\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.mas-TZ",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"mas-TZ\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"mas-TZ\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"mas-TZ\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.mer",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"mer\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"mer\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"mer\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.mer-KE",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"mer-KE\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"mer-KE\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"mer-KE\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.mfe",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"mfe\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"mfe\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"mfe\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.mfe-MU",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"mfe-MU\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"mfe-MU\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"mfe-MU\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.mg",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"mg\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"mg\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"mg\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.mg-MG",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"mg-MG\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"mg-MG\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"mg-MG\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.mgh",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"mgh\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"mgh\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"mgh\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.mgh-MZ",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"mgh-MZ\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"mgh-MZ\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"mgh-MZ\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.mgo",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"mgo\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"mgo\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"mgo\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.mgo-CM",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"mgo-CM\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"mgo-CM\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"mgo-CM\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.mk",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"mk\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"mk\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"mk\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.mk-MK",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"mk-MK\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"mk-MK\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"mk-MK\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ml",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ml\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ml\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ml\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ml-IN",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ml-IN\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ml-IN\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ml-IN\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.mn",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"mn\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"mn\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"mn\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.mn-MN",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"mn-MN\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"mn-MN\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"mn-MN\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.mn-Mong",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"mn-Mong\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"mn-Mong\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"mn-Mong\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.mr",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"mr\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"mr\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"mr\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.mr-IN",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"mr-IN\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"mr-IN\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"mr-IN\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ms",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ms\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ms\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ms\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ms-Arab",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ms-Arab\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ms-Arab\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ms-Arab\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ms-BN",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ms-BN\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ms-BN\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ms-BN\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ms-MY",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ms-MY\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ms-MY\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ms-MY\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ms-SG",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ms-SG\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ms-SG\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ms-SG\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.mt",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"mt\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"mt\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"mt\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.mt-MT",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"mt-MT\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"mt-MT\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"mt-MT\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.mua",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"mua\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"mua\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"mua\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.mua-CM",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"mua-CM\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"mua-CM\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"mua-CM\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.my",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"my\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"my\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"my\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.my-MM",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"my-MM\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"my-MM\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"my-MM\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.mzn",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"mzn\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"mzn\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"mzn\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.mzn-IR",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"mzn-IR\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"mzn-IR\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"mzn-IR\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.naq",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"naq\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"naq\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"naq\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.naq-NA",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"naq-NA\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"naq-NA\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"naq-NA\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.nb",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"nb\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"nb\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"nb\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.nb-NO",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"nb-NO\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"nb-NO\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"nb-NO\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.nb-SJ",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"nb-SJ\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"nb-SJ\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"nb-SJ\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.nd",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"nd\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"nd\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"nd\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.nd-ZW",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"nd-ZW\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"nd-ZW\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"nd-ZW\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ne",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ne\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ne\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ne\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ne-IN",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ne-IN\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ne-IN\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ne-IN\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ne-NP",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ne-NP\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ne-NP\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ne-NP\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.nl",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"nl\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"nl\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"nl\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.nl-AW",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"nl-AW\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"nl-AW\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"nl-AW\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.nl-BE",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"nl-BE\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"nl-BE\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"nl-BE\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.nl-BQ",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"nl-BQ\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"nl-BQ\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"nl-BQ\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.nl-CW",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"nl-CW\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"nl-CW\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"nl-CW\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.nl-NL",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"nl-NL\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"nl-NL\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"nl-NL\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.nl-SR",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"nl-SR\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"nl-SR\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"nl-SR\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.nl-SX",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"nl-SX\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"nl-SX\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"nl-SX\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.nmg",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"nmg\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"nmg\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"nmg\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.nmg-CM",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"nmg-CM\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"nmg-CM\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"nmg-CM\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.nn",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"nn\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"nn\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"nn\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.nn-NO",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"nn-NO\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"nn-NO\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"nn-NO\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.nnh",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"nnh\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"nnh\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"nnh\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.nnh-CM",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"nnh-CM\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"nnh-CM\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"nnh-CM\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.nus",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"nus\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"nus\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"nus\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.nus-SS",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"nus-SS\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"nus-SS\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"nus-SS\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.nyn",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"nyn\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"nyn\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"nyn\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.nyn-UG",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"nyn-UG\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"nyn-UG\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"nyn-UG\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.om",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"om\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"om\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"om\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.om-ET",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"om-ET\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"om-ET\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"om-ET\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.om-KE",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"om-KE\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"om-KE\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"om-KE\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.or",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"or\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"or\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"or\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.or-IN",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"or-IN\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"or-IN\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"or-IN\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.os",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"os\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"os\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"os\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.os-GE",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"os-GE\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"os-GE\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"os-GE\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.os-RU",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"os-RU\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"os-RU\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"os-RU\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.pa",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"pa\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"pa\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"pa\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.pa-Arab",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"pa-Arab\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"pa-Arab\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"pa-Arab\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.pa-Arab-PK",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"pa-Arab-PK\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"pa-Arab-PK\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"pa-Arab-PK\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.pa-Guru",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"pa-Guru\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"pa-Guru\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"pa-Guru\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.pa-Guru-IN",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"pa-Guru-IN\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"pa-Guru-IN\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"pa-Guru-IN\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.pl",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"pl\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"pl\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"pl\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.pl-PL",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"pl-PL\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"pl-PL\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"pl-PL\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.prg",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"prg\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"prg\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"prg\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.prg-001",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"prg-001\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"prg-001\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"prg-001\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ps",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ps\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ps\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ps\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ps-AF",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ps-AF\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ps-AF\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ps-AF\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.pt",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"pt\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"pt\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"pt\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.pt-AO",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"pt-AO\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"pt-AO\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"pt-AO\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.pt-BR",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"pt-BR\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"pt-BR\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"pt-BR\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.pt-CV",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"pt-CV\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"pt-CV\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"pt-CV\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.pt-GW",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"pt-GW\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"pt-GW\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"pt-GW\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.pt-MO",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"pt-MO\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"pt-MO\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"pt-MO\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.pt-MZ",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"pt-MZ\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"pt-MZ\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"pt-MZ\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.pt-PT",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"pt-PT\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"pt-PT\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"pt-PT\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.pt-ST",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"pt-ST\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"pt-ST\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"pt-ST\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.pt-TL",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"pt-TL\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"pt-TL\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"pt-TL\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.qu",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"qu\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"qu\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"qu\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.qu-BO",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"qu-BO\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"qu-BO\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"qu-BO\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.qu-EC",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"qu-EC\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"qu-EC\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"qu-EC\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.qu-PE",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"qu-PE\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"qu-PE\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"qu-PE\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.rm",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"rm\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"rm\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"rm\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.rm-CH",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"rm-CH\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"rm-CH\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"rm-CH\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.rn",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"rn\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"rn\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"rn\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.rn-BI",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"rn-BI\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"rn-BI\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"rn-BI\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ro",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ro\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ro\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ro\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ro-MD",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ro-MD\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ro-MD\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ro-MD\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ro-RO",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ro-RO\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ro-RO\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ro-RO\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.rof",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"rof\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"rof\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"rof\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.rof-TZ",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"rof-TZ\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"rof-TZ\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"rof-TZ\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.root",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"root\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"root\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"root\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ru",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ru\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ru\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ru\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ru-BY",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ru-BY\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ru-BY\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ru-BY\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ru-KG",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ru-KG\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ru-KG\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ru-KG\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ru-KZ",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ru-KZ\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ru-KZ\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ru-KZ\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ru-MD",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ru-MD\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ru-MD\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ru-MD\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ru-RU",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ru-RU\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ru-RU\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ru-RU\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ru-UA",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ru-UA\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ru-UA\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ru-UA\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.rw",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"rw\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"rw\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"rw\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.rw-RW",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"rw-RW\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"rw-RW\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"rw-RW\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.rwk",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"rwk\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"rwk\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"rwk\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.rwk-TZ",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"rwk-TZ\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"rwk-TZ\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"rwk-TZ\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.sah",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"sah\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"sah\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"sah\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.sah-RU",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"sah-RU\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"sah-RU\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"sah-RU\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.saq",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"saq\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"saq\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"saq\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.saq-KE",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"saq-KE\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"saq-KE\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"saq-KE\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.sbp",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"sbp\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"sbp\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"sbp\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.sbp-TZ",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"sbp-TZ\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"sbp-TZ\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"sbp-TZ\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.se",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"se\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"se\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"se\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.se-FI",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"se-FI\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"se-FI\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"se-FI\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.se-NO",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"se-NO\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"se-NO\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"se-NO\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.se-SE",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"se-SE\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"se-SE\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"se-SE\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.seh",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"seh\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"seh\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"seh\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.seh-MZ",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"seh-MZ\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"seh-MZ\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"seh-MZ\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ses",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ses\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ses\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ses\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ses-ML",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ses-ML\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ses-ML\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ses-ML\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.sg",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"sg\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"sg\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"sg\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.sg-CF",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"sg-CF\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"sg-CF\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"sg-CF\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.shi",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"shi\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"shi\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"shi\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.shi-Latn",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"shi-Latn\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"shi-Latn\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"shi-Latn\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.shi-Latn-MA",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"shi-Latn-MA\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"shi-Latn-MA\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"shi-Latn-MA\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.shi-Tfng",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"shi-Tfng\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"shi-Tfng\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"shi-Tfng\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.shi-Tfng-MA",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"shi-Tfng-MA\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"shi-Tfng-MA\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"shi-Tfng-MA\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.si",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"si\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"si\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"si\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.si-LK",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"si-LK\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"si-LK\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"si-LK\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.sk",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"sk\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"sk\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"sk\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.sk-SK",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"sk-SK\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"sk-SK\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"sk-SK\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.sl",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"sl\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"sl\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"sl\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.sl-SI",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"sl-SI\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"sl-SI\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"sl-SI\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.smn",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"smn\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"smn\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"smn\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.smn-FI",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"smn-FI\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"smn-FI\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"smn-FI\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.sn",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"sn\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"sn\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"sn\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.sn-ZW",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"sn-ZW\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"sn-ZW\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"sn-ZW\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.so",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"so\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"so\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"so\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.so-DJ",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"so-DJ\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"so-DJ\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"so-DJ\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.so-ET",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"so-ET\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"so-ET\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"so-ET\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.so-KE",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"so-KE\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"so-KE\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"so-KE\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.so-SO",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"so-SO\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"so-SO\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"so-SO\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.sq",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"sq\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"sq\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"sq\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.sq-AL",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"sq-AL\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"sq-AL\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"sq-AL\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.sq-MK",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"sq-MK\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"sq-MK\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"sq-MK\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.sq-XK",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"sq-XK\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"sq-XK\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"sq-XK\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.sr",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"sr\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"sr\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"sr\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.sr-Cyrl",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"sr-Cyrl\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"sr-Cyrl\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"sr-Cyrl\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.sr-Cyrl-BA",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"sr-Cyrl-BA\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"sr-Cyrl-BA\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"sr-Cyrl-BA\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.sr-Cyrl-ME",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"sr-Cyrl-ME\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"sr-Cyrl-ME\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"sr-Cyrl-ME\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.sr-Cyrl-RS",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"sr-Cyrl-RS\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"sr-Cyrl-RS\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"sr-Cyrl-RS\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.sr-Cyrl-XK",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"sr-Cyrl-XK\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"sr-Cyrl-XK\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"sr-Cyrl-XK\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.sr-Latn",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"sr-Latn\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"sr-Latn\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"sr-Latn\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.sr-Latn-BA",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"sr-Latn-BA\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"sr-Latn-BA\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"sr-Latn-BA\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.sr-Latn-ME",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"sr-Latn-ME\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"sr-Latn-ME\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"sr-Latn-ME\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.sr-Latn-RS",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"sr-Latn-RS\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"sr-Latn-RS\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"sr-Latn-RS\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.sr-Latn-XK",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"sr-Latn-XK\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"sr-Latn-XK\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"sr-Latn-XK\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.sv",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"sv\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"sv\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"sv\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.sv-AX",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"sv-AX\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"sv-AX\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"sv-AX\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.sv-FI",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"sv-FI\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"sv-FI\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"sv-FI\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.sv-SE",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"sv-SE\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"sv-SE\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"sv-SE\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.sw",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"sw\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"sw\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"sw\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.sw-CD",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"sw-CD\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"sw-CD\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"sw-CD\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.sw-KE",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"sw-KE\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"sw-KE\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"sw-KE\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.sw-TZ",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"sw-TZ\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"sw-TZ\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"sw-TZ\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.sw-UG",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"sw-UG\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"sw-UG\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"sw-UG\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ta",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ta\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ta\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ta\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ta-IN",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ta-IN\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ta-IN\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ta-IN\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ta-LK",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ta-LK\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ta-LK\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ta-LK\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ta-MY",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ta-MY\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ta-MY\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ta-MY\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ta-SG",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ta-SG\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ta-SG\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ta-SG\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.te",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"te\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"te\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"te\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.te-IN",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"te-IN\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"te-IN\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"te-IN\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.teo",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"teo\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"teo\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"teo\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.teo-KE",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"teo-KE\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"teo-KE\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"teo-KE\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.teo-UG",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"teo-UG\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"teo-UG\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"teo-UG\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.th",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"th\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"th\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"th\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.th-TH",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"th-TH\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"th-TH\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"th-TH\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ti",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ti\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ti\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ti\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ti-ER",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ti-ER\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ti-ER\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ti-ER\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ti-ET",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ti-ET\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ti-ET\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ti-ET\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.tk",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"tk\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"tk\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"tk\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.tk-TM",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"tk-TM\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"tk-TM\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"tk-TM\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.to",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"to\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"to\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"to\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.to-TO",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"to-TO\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"to-TO\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"to-TO\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.tr",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"tr\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"tr\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"tr\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.tr-CY",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"tr-CY\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"tr-CY\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"tr-CY\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.tr-TR",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"tr-TR\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"tr-TR\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"tr-TR\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.twq",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"twq\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"twq\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"twq\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.twq-NE",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"twq-NE\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"twq-NE\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"twq-NE\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.tzm",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"tzm\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"tzm\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"tzm\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.tzm-MA",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"tzm-MA\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"tzm-MA\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"tzm-MA\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ug",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ug\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ug\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ug\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ug-CN",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ug-CN\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ug-CN\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ug-CN\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.uk",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"uk\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"uk\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"uk\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.uk-UA",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"uk-UA\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"uk-UA\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"uk-UA\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ur",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ur\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ur\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ur\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ur-IN",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ur-IN\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ur-IN\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ur-IN\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.ur-PK",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"ur-PK\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"ur-PK\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"ur-PK\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.uz",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"uz\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"uz\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"uz\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.uz-Arab",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"uz-Arab\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"uz-Arab\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"uz-Arab\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.uz-Arab-AF",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"uz-Arab-AF\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"uz-Arab-AF\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"uz-Arab-AF\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.uz-Cyrl",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"uz-Cyrl\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"uz-Cyrl\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"uz-Cyrl\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.uz-Cyrl-UZ",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"uz-Cyrl-UZ\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"uz-Cyrl-UZ\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"uz-Cyrl-UZ\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.uz-Latn",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"uz-Latn\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"uz-Latn\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"uz-Latn\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.uz-Latn-UZ",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"uz-Latn-UZ\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"uz-Latn-UZ\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"uz-Latn-UZ\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.vai",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"vai\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"vai\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"vai\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.vai-Latn",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"vai-Latn\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"vai-Latn\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"vai-Latn\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.vai-Latn-LR",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"vai-Latn-LR\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"vai-Latn-LR\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"vai-Latn-LR\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.vai-Vaii",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"vai-Vaii\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"vai-Vaii\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"vai-Vaii\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.vai-Vaii-LR",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"vai-Vaii-LR\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"vai-Vaii-LR\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"vai-Vaii-LR\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.vi",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"vi\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"vi\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"vi\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.vi-VN",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"vi-VN\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"vi-VN\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"vi-VN\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.vo",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"vo\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"vo\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"vo\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.vo-001",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"vo-001\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"vo-001\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"vo-001\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.vun",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"vun\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"vun\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"vun\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.vun-TZ",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"vun-TZ\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"vun-TZ\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"vun-TZ\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.wae",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"wae\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"wae\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"wae\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.wae-CH",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"wae-CH\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"wae-CH\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"wae-CH\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.xog",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"xog\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"xog\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"xog\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.xog-UG",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"xog-UG\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"xog-UG\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"xog-UG\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.yav",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"yav\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"yav\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"yav\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.yav-CM",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"yav-CM\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"yav-CM\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"yav-CM\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.yi",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"yi\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"yi\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"yi\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.yi-001",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"yi-001\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"yi-001\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"yi-001\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.yo",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"yo\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"yo\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"yo\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.yo-BJ",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"yo-BJ\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"yo-BJ\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"yo-BJ\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.yo-NG",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"yo-NG\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"yo-NG\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"yo-NG\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.zgh",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"zgh\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"zgh\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"zgh\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.zgh-MA",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"zgh-MA\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"zgh-MA\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"zgh-MA\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.zh",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"zh\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"zh\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"zh\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.zh-Hans",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"zh-Hans\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"zh-Hans\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"zh-Hans\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.zh-Hans-CN",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"zh-Hans-CN\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"zh-Hans-CN\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"zh-Hans-CN\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.zh-Hans-HK",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"zh-Hans-HK\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"zh-Hans-HK\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"zh-Hans-HK\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.zh-Hans-MO",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"zh-Hans-MO\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"zh-Hans-MO\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"zh-Hans-MO\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.zh-Hans-SG",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"zh-Hans-SG\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"zh-Hans-SG\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"zh-Hans-SG\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.zh-Hant",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"zh-Hant\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"zh-Hant\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"zh-Hant\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.zh-Hant-HK",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"zh-Hant-HK\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"zh-Hant-HK\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"zh-Hant-HK\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.zh-Hant-MO",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"zh-Hant-MO\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"zh-Hant-MO\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"zh-Hant-MO\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.zh-Hant-TW",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"zh-Hant-TW\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"zh-Hant-TW\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"zh-Hant-TW\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.zu",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"zu\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"zu\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"zu\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "Intl.~locale.zu-ZA",
    "deps": [
      "Intl"
    ],
    "browsers": {
      "android": "<=4.3",
      "ie": "<12",
      "ie_mob": "*",
      "firefox": "<29",
      "opera": "<15",
      "chrome": "<=34",
      "safari": "<10",
      "ios_saf": "<10",
      "firefox_mob": "*",
      "samsung_mob": "<6"
    },
    "detectSource": "'Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf(\"zu-ZA\").length === 1; } catch (e) { return false; }}()) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf(\"zu-ZA\").length === 1; } catch (e) { return false; } }()) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf(\"zu-ZA\").length === 1; } catch (e) { return false; } }())\n"
  },
  {
    "name": "JSON",
    "deps": [],
    "browsers": {
      "ie": "6 - 7",
      "firefox": "< 3.5",
      "safari": "< 4",
      "opera": "8.54 - 10.4"
    },
    "detectSource": "\"JSON\"in self\n"
  },
  {
    "name": "MutationObserver",
    "deps": [],
    "browsers": {
      "chrome": "<26",
      "edge": "<12",
      "edge_mob": "<12",
      "firefox": "<14",
      "ie": "<11",
      "opera": "<15",
      "safari": "<6",
      "android": "<4.4",
      "firefox_mob": "<14",
      "ie_mob": "<11",
      "op_mob": "<15",
      "ios_saf": "<7"
    },
    "detectSource": "\"MutationObserver\"in self\n"
  },
  {
    "name": "Node.prototype.contains",
    "deps": [
      "Element",
      "document"
    ],
    "browsers": {
      "firefox": "* - 8",
      "safari": "* - 2",
      "edge": "<14",
      "edge_mob": "<14",
      "ie": "*",
      "ie_mob": "10 - *",
      "firefox_mob": "* - 8"
    },
    "detectSource": "document.contains\n"
  },
  {
    "name": "NodeList.prototype.forEach",
    "deps": [
      "_ESAbstract.CreateMethodProperty",
      "_ESAbstract.ToObject",
      "_ESAbstract.ToLength",
      "_ESAbstract.ToInteger",
      "_ESAbstract.Get",
      "_ESAbstract.IsCallable",
      "_ESAbstract.HasProperty",
      "_ESAbstract.Call",
      "_ESAbstract.ToString",
      "_ESAbstract.ToPrimitive",
      "_ESAbstract.GetMethod",
      "_ESAbstract.GetV",
      "_ESAbstract.OrdinaryToPrimitive",
      "_ESAbstract.Type"
    ],
    "browsers": {
      "edge": "<16",
      "edge_mob": "<16",
      "ie": "*",
      "ie_mob": "*",
      "chrome": "<51",
      "firefox": "<50",
      "opera": "<38",
      "op_mob": "<38",
      "safari": "<10",
      "android": "<51",
      "firefox_mob": "<50",
      "ios_saf": "<10",
      "samsung_mob": "<5"
    },
    "detectSource": "\"forEach\"in NodeList.prototype\n"
  },
  {
    "name": "ResizeObserver",
    "deps": [],
    "browsers": {
      "chrome": "<64",
      "edge": "*",
      "edge_mob": "*",
      "firefox": "<69",
      "ie": "*",
      "opera": "<51",
      "safari": "*",
      "android": "<5",
      "firefox_mob": "*",
      "samsung_mob": "<9",
      "ie_mob": "*",
      "op_mob": "<47",
      "ios_saf": "*"
    },
    "detectSource": "\"ResizeObserver\"in self\n"
  },
  {
    "name": "URL",
    "deps": [
      "_ESAbstract.CreateMethodProperty",
      "_ESAbstract.Get",
      "_ESAbstract.ToObject",
      "_ESAbstract.Type",
      "_ESAbstract.HasOwnProperty",
      "_ESAbstract.ToPropertyKey",
      "_ESAbstract.ToPrimitive",
      "_ESAbstract.Call",
      "_ESAbstract.GetMethod",
      "_ESAbstract.GetV",
      "_ESAbstract.IsCallable",
      "_ESAbstract.OrdinaryToPrimitive",
      "_ESAbstract.ToString",
      "_ESAbstract.ToLength",
      "_ESAbstract.ToInteger",
      "_ESAbstract.HasProperty",
      "_ESAbstract.IsArray"
    ],
    "browsers": {
      "chrome": "<60",
      "firefox": "<44",
      "edge": "<18.17134",
      "edge_mob": "<17",
      "ie": "9 - *",
      "ie_mob": "*",
      "safari": "<12",
      "firefox_mob": "<44",
      "opera": "<36",
      "op_mini": "*",
      "android": "*",
      "samsung_mob": "<5",
      "bb": "*",
      "ios_saf": "<12"
    },
    "detectSource": "(function(e){\"use strict\"\ntry{var a=new e.URL(\"http://example.com\")\nif(\"href\"in a&&\"searchParams\"in a){var r=new URL(\"http://example.com\")\nif(r.search=\"a=1&b=2\",\"http://example.com/?a=1&b=2\"===r.href&&(r.search=\"\",\"http://example.com/\"===r.href)){var t=new e.URLSearchParams(\"a=1\"),c=new e.URLSearchParams(t)\nif(\"a=1\"===String(c))return!0}}return!1}catch(h){return!1}})(self)\n",
    "detector": true
  },
  {
    "name": "UserTiming",
    "deps": [],
    "browsers": {
      "android": "<=4",
      "chrome": "<=24",
      "firefox": "<=37",
      "firefox_mob": "*",
      "ie": "6 - 9",
      "ie_mob": "<=9",
      "ios_chr": "*",
      "ios_saf": "*",
      "op_mob": "*",
      "opera": "<=12",
      "safari": "*",
      "edge": "<18.17134"
    },
    "detectSource": "\"performance\"in self&&\"function\"==typeof self.performance.getEntriesByType&&\"function\"==typeof self.performance.mark\n"
  },
  {
    "name": "WebAnimations",
    "deps": [],
    "browsers": {
      "edge": "*",
      "edge_mob": "*",
      "ie": "10 - *",
      "ie_mob": "10 - *",
      "firefox": "27 - 50",
      "opera": "11.6 - 42",
      "safari": "9 - *",
      "chrome": "* - 38",
      "ios_saf": "7.1 - *",
      "firefox_mob": "27 - 50",
      "android": "<53"
    },
    "detectSource": "\"function\"==typeof document.head.animate\n",
    "detector": true
  },
  {
    "name": "Window",
    "deps": [],
    "browsers": {
      "chrome": "14 - 18",
      "ie": "6 - 7",
      "opera": "10 - 11.6",
      "safari": "4 - 5.1"
    },
    "detectSource": "\"Window\"in self\n"
  },
  {
    "name": "XMLHttpRequest",
    "deps": [
      "Event",
      "Window",
      "document",
      "Element",
      "_ESAbstract.CreateMethodProperty",
      "_ESAbstract.ToObject",
      "_ESAbstract.ToLength",
      "_ESAbstract.ToInteger",
      "_ESAbstract.Get",
      "_ESAbstract.HasProperty",
      "_ESAbstract.ToString",
      "_ESAbstract.ToPrimitive",
      "_ESAbstract.Call",
      "_ESAbstract.GetMethod",
      "_ESAbstract.GetV",
      "_ESAbstract.IsCallable",
      "_ESAbstract.OrdinaryToPrimitive",
      "_ESAbstract.Type",
      "_ESAbstract.SameValueZero",
      "_ESAbstract.SameValueNonNumber"
    ],
    "browsers": {
      "ie": "6 - 8"
    },
    "detectSource": "\"XMLHttpRequest\"in self&&\"prototype\"in self.XMLHttpRequest&&\"addEventListener\"in self.XMLHttpRequest.prototype\n"
  },
  {
    "name": "atob",
    "deps": [],
    "browsers": {
      "ie": "<10"
    },
    "detectSource": "\"atob\"in self\n",
    "detector": true
  },
  {
    "name": "console",
    "deps": [
      "Window"
    ],
    "browsers": {
      "ie": "*",
      "firefox": "1 - 4"
    },
    "detectSource": "\"console\"in self\n"
  },
  {
    "name": "console.assert",
    "deps": [
      "Window",
      "console"
    ],
    "browsers": {
      "ie": "*",
      "firefox": "1 - 4"
    },
    "detectSource": "\"console\"in self&&\"assert\"in self.console\n"
  },
  {
    "name": "console.clear",
    "deps": [
      "Window",
      "console"
    ],
    "browsers": {
      "ie": "*",
      "firefox": "<39"
    },
    "detectSource": "\"console\"in self&&\"clear\"in self.console\n"
  },
  {
    "name": "console.count",
    "deps": [
      "Window",
      "console"
    ],
    "browsers": {
      "ie": "*",
      "firefox": "1 - 4"
    },
    "detectSource": "\"console\"in self&&\"count\"in self.console\n"
  },
  {
    "name": "console.debug",
    "deps": [
      "Window",
      "console",
      "console.log"
    ],
    "browsers": {
      "ie": "*",
      "firefox": "1 - 4"
    },
    "detectSource": "\"console\"in self&&\"debug\"in self.console\n"
  },
  {
    "name": "console.dir",
    "deps": [
      "Window",
      "console"
    ],
    "browsers": {
      "ie": "*",
      "firefox": "1 - 4"
    },
    "detectSource": "\"console\"in self&&\"dir\"in self.console\n"
  },
  {
    "name": "console.dirxml",
    "deps": [
      "Window",
      "console"
    ],
    "browsers": {
      "ie": "*",
      "firefox": "<39"
    },
    "detectSource": "\"console\"in self&&\"dirxml\"in self.console\n"
  },
  {
    "name": "console.error",
    "deps": [
      "Window",
      "console",
      "console.log"
    ],
    "browsers": {
      "ie": "*",
      "ie_mob": "<10",
      "firefox": "1 - 4"
    },
    "detectSource": "\"console\"in self&&\"error\"in self.console\n"
  },
  {
    "name": "console.exception",
    "deps": [
      "Window",
      "console"
    ],
    "browsers": {
      "ie": "*",
      "firefox": "1 - 4",
      "samsung_mob": "*",
      "chrome": "*"
    },
    "detectSource": "\"console\"in self&&\"exception\"in self.console\n"
  },
  {
    "name": "console.group",
    "deps": [
      "Window",
      "console"
    ],
    "browsers": {
      "ie": "*",
      "firefox": "1 - 4"
    },
    "detectSource": "\"console\"in self&&\"group\"in self.console\n"
  },
  {
    "name": "console.groupCollapsed",
    "deps": [
      "Window",
      "console"
    ],
    "browsers": {
      "ie": "*",
      "firefox": "1 - 4"
    },
    "detectSource": "\"console\"in self&&\"groupCollapsed\"in self.console\n"
  },
  {
    "name": "console.groupEnd",
    "deps": [
      "Window",
      "console"
    ],
    "browsers": {
      "ie": "*",
      "firefox": "1 - 4"
    },
    "detectSource": "\"console\"in self&&\"groupEnd\"in self.console\n"
  },
  {
    "name": "console.info",
    "deps": [
      "Window",
      "console",
      "console.log"
    ],
    "browsers": {
      "ie": "*",
      "ie_mob": "<10",
      "firefox": "1 - 4"
    },
    "detectSource": "\"console\"in self&&\"info\"in self.console\n"
  },
  {
    "name": "console.log",
    "deps": [
      "Window",
      "console"
    ],
    "browsers": {
      "ie": "*",
      "firefox": "1 - 4"
    },
    "detectSource": "\"console\"in self&&\"log\"in self.console\n"
  },
  {
    "name": "console.markTimeline",
    "deps": [
      "Window",
      "console"
    ],
    "browsers": {
      "edge": "<17.17134.0",
      "edge_mob": "*",
      "ie": "*",
      "firefox": "<75",
      "chrome": "<68.0.0"
    },
    "detectSource": "\"console\"in self&&\"markTimeline\"in self.console\n"
  },
  {
    "name": "console.profile",
    "deps": [
      "Window",
      "console"
    ],
    "browsers": {
      "ie": "*",
      "firefox": "1 - 4"
    },
    "detectSource": "\"console\"in self&&\"profile\"in self.console\n"
  },
  {
    "name": "console.profileEnd",
    "deps": [
      "Window",
      "console"
    ],
    "browsers": {
      "ie": "*",
      "firefox": "1 - 4"
    },
    "detectSource": "\"console\"in self&&\"profileEnd\"in self.console\n"
  },
  {
    "name": "console.profiles",
    "deps": [
      "Window",
      "console"
    ],
    "browsers": {
      "ie": "*",
      "firefox": "1 - 4"
    },
    "detectSource": "\"console\"in self&&\"profiles\"in self.console\n"
  },
  {
    "name": "console.table",
    "deps": [
      "Window",
      "console"
    ],
    "browsers": {
      "ie": "*",
      "firefox": "1 - 4"
    },
    "detectSource": "\"console\"in self&&\"table\"in self.console\n"
  },
  {
    "name": "console.time",
    "deps": [
      "Window",
      "console"
    ],
    "browsers": {
      "ie": "*",
      "firefox": "1 - 4",
      "chrome": "<31"
    },
    "detectSource": "\"console\"in self&&\"time\"in self.console\n"
  },
  {
    "name": "console.timeEnd",
    "deps": [
      "Window",
      "console",
      "console.time"
    ],
    "browsers": {
      "ie": "*",
      "firefox": "1 - 4"
    },
    "detectSource": "\"console\"in self&&\"timeEnd\"in self.console\n"
  },
  {
    "name": "console.timeStamp",
    "deps": [
      "Window",
      "console"
    ],
    "browsers": {
      "edge": "<16.15063",
      "edge_mob": "<12",
      "ie": "<11",
      "firefox": "<39",
      "firefox_mob": "<10"
    },
    "detectSource": "\"console\"in self&&\"timeStamp\"in self.console\n"
  },
  {
    "name": "console.timeline",
    "deps": [
      "Window",
      "console"
    ],
    "browsers": {
      "edge": "<17.17134.0",
      "edge_mob": "*",
      "ie": "*",
      "firefox": "<75",
      "chrome": "<81"
    },
    "detectSource": "\"console\"in self&&\"timeline\"in self.console\n"
  },
  {
    "name": "console.timelineEnd",
    "deps": [
      "Window",
      "console"
    ],
    "browsers": {
      "edge": "<17.17134.0",
      "edge_mob": "*",
      "ie": "*",
      "firefox": "<75",
      "chrome": "<81"
    },
    "detectSource": "\"console\"in self&&\"timelineEnd\"in self.console\n"
  },
  {
    "name": "console.trace",
    "deps": [
      "Window",
      "console"
    ],
    "browsers": {
      "ie": "*",
      "firefox": "1 - 4"
    },
    "detectSource": "\"console\"in self&&\"trace\"in self.console\n"
  },
  {
    "name": "console.warn",
    "deps": [
      "Window",
      "console",
      "console.log"
    ],
    "browsers": {
      "ie": "*",
      "firefox": "1 - 4"
    },
    "detectSource": "\"console\"in self&&\"warn\"in self.console\n"
  },
  {
    "name": "devicePixelRatio",
    "deps": [],
    "browsers": {
      "safari": "4 - 9.1",
      "ie": "6 - 10",
      "firefox": "<=17",
      "ios_saf": "<9.3"
    },
    "detectSource": "\"devicePixelRatio\"in self\n"
  },
  {
    "name": "document",
    "deps": [],
    "browsers": {
      "ie": "6 - 8"
    },
    "detectSource": "\"document\"in self\n"
  },
  {
    "name": "document.currentScript",
    "deps": [],
    "browsers": {
      "ie": "*"
    },
    "detectSource": "\"document\"in self&&\"currentScript\"in self.document\n"
  },
  {
    "name": "document.getElementsByClassName",
    "deps": [
      "document.querySelector",
      "Element",
      "document"
    ],
    "browsers": {
      "ie": "<9"
    },
    "detectSource": "\"document\"in self&&\"getElementsByClassName\"in self.document\n"
  },
  {
    "name": "document.head",
    "deps": [
      "document"
    ],
    "browsers": {
      "ie": "6 - 8",
      "safari": "4"
    },
    "detectSource": "\"document\"in self&&\"head\"in self.document\n"
  },
  {
    "name": "document.querySelector",
    "deps": [
      "Element",
      "document"
    ],
    "browsers": {
      "ie": "6 - 8"
    },
    "detectSource": "\"document\"in self&&\"querySelector\"in self.document\n"
  },
  {
    "name": "document.visibilityState",
    "deps": [
      "CustomEvent",
      "Event",
      "Window",
      "document",
      "Element",
      "_ESAbstract.CreateMethodProperty",
      "_ESAbstract.ToObject",
      "_ESAbstract.ToLength",
      "_ESAbstract.ToInteger",
      "_ESAbstract.Get",
      "_ESAbstract.HasProperty",
      "_ESAbstract.ToString",
      "_ESAbstract.ToPrimitive",
      "_ESAbstract.Call",
      "_ESAbstract.GetMethod",
      "_ESAbstract.GetV",
      "_ESAbstract.IsCallable",
      "_ESAbstract.OrdinaryToPrimitive",
      "_ESAbstract.Type",
      "_ESAbstract.SameValueZero",
      "_ESAbstract.SameValueNonNumber"
    ],
    "browsers": {
      "firefox": "10 - 17",
      "safari": "4",
      "android": "4.4 - *",
      "opera": "15 - 19",
      "chrome": "14 - 32"
    },
    "detectSource": "\"document\"in self&&\"hidden\"in document&&\"visibilityState\"in document\n"
  },
  {
    "name": "fetch",
    "deps": [
      "_ESAbstract.CreateMethodProperty",
      "_ESAbstract.ToObject",
      "_ESAbstract.ToLength",
      "_ESAbstract.ToInteger",
      "_ESAbstract.Get",
      "_ESAbstract.IsCallable",
      "_ESAbstract.HasProperty",
      "_ESAbstract.Call",
      "_ESAbstract.ToString",
      "_ESAbstract.ToPrimitive",
      "_ESAbstract.GetMethod",
      "_ESAbstract.GetV",
      "_ESAbstract.OrdinaryToPrimitive",
      "_ESAbstract.Type",
      "_ESAbstract.SameValueZero",
      "_ESAbstract.SameValueNonNumber",
      "_ESAbstract.ArraySpeciesCreate",
      "_ESAbstract.IsArray",
      "_ESAbstract.ArrayCreate",
      "_ESAbstract.IsConstructor",
      "_ESAbstract.Construct",
      "_ESAbstract.OrdinaryCreateFromConstructor",
      "_ESAbstract.GetPrototypeFromConstructor",
      "_ESAbstract.HasOwnProperty",
      "_ESAbstract.ToPropertyKey",
      "_ESAbstract.ToBoolean",
      "_ESAbstract.CreateDataPropertyOrThrow",
      "_ESAbstract.CreateDataProperty",
      "XMLHttpRequest",
      "Event",
      "Window",
      "document",
      "Element"
    ],
    "browsers": {
      "android": "<67",
      "bb": "10 - *",
      "edge": "<16",
      "edge_mob": "<16",
      "ie": "*",
      "ie_mob": "*",
      "firefox": "<57",
      "opera": "<53",
      "safari": "<12",
      "chrome": "<66",
      "ios_saf": "<12",
      "firefox_mob": "<64"
    },
    "detectSource": "\"fetch\"in self\n",
    "detector": true
  },
  {
    "name": "getComputedStyle",
    "deps": [
      "Window"
    ],
    "browsers": {
      "ie": "6 - 8"
    },
    "detectSource": "\"getComputedStyle\"in self\n"
  },
  {
    "name": "globalThis",
    "deps": [],
    "browsers": {
      "android": "<71",
      "bb": "*",
      "chrome": "<71",
      "edge": "*",
      "edge_mob": "*",
      "firefox": "<65",
      "firefox_mob": "<65",
      "ie": "*",
      "ie_mob": "*",
      "ios_chr": "*",
      "ios_saf": "<12.1",
      "op_mini": "*",
      "op_mob": "*",
      "opera": "*",
      "safari": "<12.1",
      "samsung_mob": "<10"
    },
    "detectSource": "\"object\"==typeof globalThis\n"
  },
  {
    "name": "localStorage",
    "deps": [
      "_ESAbstract.CreateMethodProperty",
      "_ESAbstract.ToObject",
      "_ESAbstract.ToLength",
      "_ESAbstract.ToInteger",
      "_ESAbstract.Get",
      "_ESAbstract.IsCallable",
      "_ESAbstract.HasProperty",
      "_ESAbstract.Call",
      "_ESAbstract.ToString",
      "_ESAbstract.ToPrimitive",
      "_ESAbstract.GetMethod",
      "_ESAbstract.GetV",
      "_ESAbstract.OrdinaryToPrimitive",
      "_ESAbstract.Type",
      "Window"
    ],
    "browsers": {
      "ie": "6 - 7",
      "op_mini": "*"
    },
    "detectSource": "(function(){try{return self.localStorage.setItem(\"storage_test\",1),self.localStorage.removeItem(\"storage_test\"),!0}catch(t){return!1}})()\n"
  },
  {
    "name": "location.origin",
    "deps": [
      "_ESAbstract.CreateMethodProperty",
      "_ESAbstract.Get",
      "_ESAbstract.ToObject",
      "_ESAbstract.Type",
      "_ESAbstract.HasOwnProperty",
      "_ESAbstract.ToPropertyKey",
      "_ESAbstract.ToPrimitive",
      "_ESAbstract.Call",
      "_ESAbstract.GetMethod",
      "_ESAbstract.GetV",
      "_ESAbstract.IsCallable",
      "_ESAbstract.OrdinaryToPrimitive",
      "_ESAbstract.ToString"
    ],
    "browsers": {
      "ie": "6 - 10",
      "ie_mob": "10",
      "firefox": "<=20",
      "safari": "<=6",
      "ios_saf": "<=6",
      "chrome": "<29.0.0",
      "firefox_mob": "<=20"
    },
    "detectSource": "\"location\"in self&&\"origin\"in self.location\n"
  },
  {
    "name": "matchMedia",
    "deps": [
      "Event",
      "Window",
      "document",
      "Element",
      "_ESAbstract.CreateMethodProperty",
      "_ESAbstract.ToObject",
      "_ESAbstract.ToLength",
      "_ESAbstract.ToInteger",
      "_ESAbstract.Get",
      "_ESAbstract.HasProperty",
      "_ESAbstract.ToString",
      "_ESAbstract.ToPrimitive",
      "_ESAbstract.Call",
      "_ESAbstract.GetMethod",
      "_ESAbstract.GetV",
      "_ESAbstract.IsCallable",
      "_ESAbstract.OrdinaryToPrimitive",
      "_ESAbstract.Type",
      "_ESAbstract.SameValueZero",
      "_ESAbstract.SameValueNonNumber"
    ],
    "browsers": {
      "android": "2.1 - 2.3",
      "blackberry": "7",
      "ie": "<10",
      "opera": "11.5 - 12.1",
      "op_mini": "*",
      "op_mob": "10 - 12",
      "safari": "4 - 5",
      "chrome": "<37"
    },
    "detectSource": "\"matchMedia\"in self&&\"MediaQueryList\"in self\n",
    "detector": true
  },
  {
    "name": "navigator.geolocation",
    "deps": [
      "document.head",
      "document"
    ],
    "browsers": {
      "ie": "<9",
      "opera": "15",
      "safari": "4"
    },
    "detectSource": "\"navigator\"in self&&\"geolocation\"in self.navigator\n"
  },
  {
    "name": "navigator.sendBeacon",
    "deps": [
      "XMLHttpRequest",
      "Event",
      "Window",
      "document",
      "Element",
      "_ESAbstract.CreateMethodProperty",
      "_ESAbstract.ToObject",
      "_ESAbstract.ToLength",
      "_ESAbstract.ToInteger",
      "_ESAbstract.Get",
      "_ESAbstract.HasProperty",
      "_ESAbstract.ToString",
      "_ESAbstract.ToPrimitive",
      "_ESAbstract.Call",
      "_ESAbstract.GetMethod",
      "_ESAbstract.GetV",
      "_ESAbstract.IsCallable",
      "_ESAbstract.OrdinaryToPrimitive",
      "_ESAbstract.Type",
      "_ESAbstract.SameValueZero",
      "_ESAbstract.SameValueNonNumber"
    ],
    "browsers": {
      "chrome": "<39",
      "edge": "<14",
      "edge_mob": "<14",
      "firefox": "<31",
      "ie": "*",
      "opera": "<26",
      "safari": "<11.1",
      "android": "<5",
      "firefox_mob": "<31",
      "ie_mob": "*",
      "op_mob": "*",
      "ios_saf": "<11.3",
      "samsung_mob": "<4"
    },
    "detectSource": "\"navigator\"in self&&\"sendBeacon\"in navigator\n"
  },
  {
    "name": "performance.now",
    "deps": [],
    "browsers": {
      "android": "<=4.3",
      "bb": "<10",
      "chrome": "<24",
      "ie": "<10",
      "ios_saf": "<9",
      "firefox": "<15",
      "opera": "<15",
      "op_mini": "*",
      "op_mob": "<24",
      "safari": "<8",
      "firefox_mob": "<15"
    },
    "detectSource": "\"performance\"in self&&\"now\"in self.performance\n"
  },
  {
    "name": "queueMicrotask",
    "deps": [
      "_ESAbstract.CreateMethodProperty",
      "_ESAbstract.ToObject",
      "_ESAbstract.ToLength",
      "_ESAbstract.ToInteger",
      "_ESAbstract.Get",
      "_ESAbstract.IsCallable",
      "_ESAbstract.HasProperty",
      "_ESAbstract.Call",
      "_ESAbstract.ToString",
      "_ESAbstract.ToPrimitive",
      "_ESAbstract.GetMethod",
      "_ESAbstract.GetV",
      "_ESAbstract.OrdinaryToPrimitive",
      "_ESAbstract.Type",
      "_ESAbstract.ArraySpeciesCreate",
      "_ESAbstract.IsArray",
      "_ESAbstract.ArrayCreate",
      "_ESAbstract.IsConstructor",
      "_ESAbstract.Construct",
      "_ESAbstract.OrdinaryCreateFromConstructor",
      "_ESAbstract.GetPrototypeFromConstructor",
      "_ESAbstract.HasOwnProperty",
      "_ESAbstract.ToPropertyKey",
      "_ESAbstract.ToBoolean",
      "_ESAbstract.CreateDataPropertyOrThrow",
      "_ESAbstract.CreateDataProperty",
      "_ESAbstract.SameValueZero",
      "_ESAbstract.SameValueNonNumber",
      "Event",
      "Window",
      "document",
      "Element"
    ],
    "browsers": {
      "chrome": "<71",
      "edge": "*",
      "firefox": "<69",
      "ie": "*",
      "opera": "<58",
      "safari": "<12.1",
      "android": "<71",
      "firefox_mob": "*",
      "op_mob": "<50",
      "ios_saf": "<12.2",
      "samsung_mob": "<10.0"
    },
    "detectSource": "\"queueMicrotask\"in self\n"
  },
  {
    "name": "requestAnimationFrame",
    "deps": [],
    "browsers": {
      "android": "*",
      "bb": "7",
      "chrome": "<46",
      "ie": "6 - 9",
      "ios_saf": "3.2 - 6",
      "firefox": "3.6 - 22",
      "opera": "<15",
      "op_mini": "5 - *",
      "op_mob": "10 - 12.1",
      "safari": "3.1 - 6",
      "firefox_mob": "3.6"
    },
    "detectSource": "\"requestAnimationFrame\"in self\n"
  },
  {
    "name": "requestIdleCallback",
    "deps": [
      "_ESAbstract.CreateMethodProperty",
      "_ESAbstract.ToObject",
      "_ESAbstract.ToLength",
      "_ESAbstract.ToInteger",
      "_ESAbstract.Get",
      "_ESAbstract.IsCallable",
      "_ESAbstract.ArraySpeciesCreate",
      "_ESAbstract.IsArray",
      "_ESAbstract.ArrayCreate",
      "_ESAbstract.Type",
      "_ESAbstract.IsConstructor",
      "_ESAbstract.GetMethod",
      "_ESAbstract.GetV",
      "_ESAbstract.Construct",
      "_ESAbstract.OrdinaryCreateFromConstructor",
      "_ESAbstract.GetPrototypeFromConstructor",
      "_ESAbstract.HasOwnProperty",
      "_ESAbstract.ToPropertyKey",
      "_ESAbstract.ToPrimitive",
      "_ESAbstract.Call",
      "_ESAbstract.OrdinaryToPrimitive",
      "_ESAbstract.ToString",
      "_ESAbstract.HasProperty",
      "_ESAbstract.ToBoolean",
      "_ESAbstract.CreateDataPropertyOrThrow",
      "_ESAbstract.CreateDataProperty",
      "_ESAbstract.SameValueZero",
      "_ESAbstract.SameValueNonNumber",
      "requestAnimationFrame",
      "performance.now",
      "Event",
      "Window",
      "document",
      "Element"
    ],
    "browsers": {
      "android": "*",
      "bb": "*",
      "chrome": "<47",
      "edge": "*",
      "edge_mob": "*",
      "firefox": "<55",
      "ios_chr": "*",
      "ios_saf": "*",
      "ie": "*",
      "ie_mob": "*",
      "opera": "<34",
      "op_mini": "*",
      "op_mob": "*",
      "safari": "9 - *",
      "firefox_mob": "<55",
      "samsung_mob": "<5"
    },
    "detectSource": "\"requestIdleCallback\"in self\n"
  },
  {
    "name": "screen.orientation",
    "deps": [],
    "browsers": {
      "edge": "*",
      "edge_mob": "*",
      "ie": "9 - *",
      "ie_mob": "*",
      "firefox": "<30",
      "chrome": "<49",
      "safari": "*",
      "ios_saf": "*",
      "opera": "<25",
      "op_mob": "*",
      "android": "<5",
      "bb": "*",
      "firefox_mob": "<30"
    },
    "detectSource": "\"screen\"in self&&\"orientation\"in self.screen&&\"object\"==typeof self.screen.orientation\n"
  },
  {
    "name": "setImmediate",
    "deps": [],
    "browsers": {
      "chrome": "*",
      "firefox": "*",
      "opera": "*",
      "safari": "*",
      "ie": "* - 9",
      "ios_saf": "*",
      "ios_chr": "*",
      "android": "*",
      "op_mob": "*",
      "ie_mob": "<10",
      "firefox_mob": "*",
      "bb": "*",
      "op_mini": "*",
      "samsung_mob": "*"
    },
    "detectSource": "\"setImmediate\"in self\n"
  },
  {
    "name": "smoothscroll",
    "deps": [
      "requestAnimationFrame",
      "_ESAbstract.CreateMethodProperty",
      "_ESAbstract.IsCallable",
      "getComputedStyle",
      "Window"
    ],
    "browsers": {
      "edge": "* - 76",
      "edge_mob": "*",
      "ie": "9 - *",
      "ie_mob": "9 - *",
      "firefox": "4 - 36",
      "opera": "*",
      "safari": "*",
      "chrome": "* - 60",
      "ios_saf": "*",
      "android": "*"
    },
    "detectSource": "\"document\"in self&&\"documentElement\"in self.document&&\"style\"in self.document.documentElement&&\"scrollBehavior\"in document.documentElement.style||function(){try{var e=!1,t={top:0,left:0}\nreturn Object.defineProperty(t,\"behavior\",{get:function(){return e=!0,\"smooth\"}}),document.body.scrollTo(t),e}catch(n){return!1}}()\n"
  },
  {
    "name": "~html5-elements",
    "deps": [
      "document"
    ],
    "browsers": {
      "ie": "6 - 9",
      "safari": "4"
    },
    "detectSource": "(function(){var e=document.createElement(\"p\"),t=!1\nreturn e.innerHTML=\"<section></section>\",document.documentElement.appendChild(e),e.firstChild&&(\"getComputedStyle\"in window?t=\"block\"===getComputedStyle(e.firstChild).display:e.firstChild.currentStyle&&(t=\"block\"===e.firstChild.currentStyle.display)),document.documentElement.removeChild(e),t})()\n"
  },
  {
    "name": "~viewport",
    "deps": [
      "_ESAbstract.CreateMethodProperty",
      "_ESAbstract.Get",
      "_ESAbstract.ToObject",
      "_ESAbstract.Type",
      "_ESAbstract.HasOwnProperty",
      "_ESAbstract.ToPropertyKey",
      "_ESAbstract.ToPrimitive",
      "_ESAbstract.Call",
      "_ESAbstract.GetMethod",
      "_ESAbstract.GetV",
      "_ESAbstract.IsCallable",
      "_ESAbstract.OrdinaryToPrimitive",
      "_ESAbstract.ToString"
    ],
    "browsers": {
      "ie": "6 - 8"
    },
    "detectSource": "\"innerHeight\"in self&&\"innerWidth\"in self&&\"pageXOffset\"in self&&\"pageYOffset\"in self&&\"scrollX\"in self&&\"scrollY\"in self\n",
    "detector": true
  },
  {
    "name": "HTMLTemplateElement",
    "deps": [
      "console.error",
      "console.log",
      "console",
      "document.head",
      "document",
      "DocumentFragment",
      "Element.prototype.cloneNode",
      "Element",
      "HTMLDocument",
      "Window"
    ],
    "browsers": {
      "chrome": "<35",
      "edge": "<15",
      "edge_mob": "<15",
      "firefox": "<22",
      "safari": "<9",
      "ie": "*",
      "opera": "<22"
    },
    "detector": true
  },
  {
    "name": "~shadydom",
    "deps": [
      "console.error",
      "console.log",
      "console",
      "CustomEvent",
      "document.head",
      "document.querySelector",
      "document",
      "DocumentFragment",
      "Element.prototype.cloneNode",
      "Element.prototype.matches",
      "Element",
      "Event",
      "HTMLDocument",
      "HTMLTemplateElement",
      "MutationObserver",
      "Node.prototype.contains",
      "NodeList.prototype.forEach",
      "Window"
    ],
    "browsers": {
      "chrome": "<53",
      "edge": "<79",
      "edge_mob": "*",
      "firefox": "<63",
      "safari": "*",
      "ie": "*",
      "opera": "<40"
    },
    "detector": true
  },
  {
    "name": "~shadycss-scoping-shim",
    "deps": [
      "~shadydom",
      "console.error",
      "console.log",
      "console",
      "CustomEvent",
      "document.head",
      "document.querySelector",
      "document",
      "DocumentFragment",
      "DOMTokenList",
      "Element.prototype.classList",
      "Element.prototype.cloneNode",
      "Element.prototype.matches",
      "Element.prototype.remove",
      "Element",
      "Event",
      "getComputedStyle",
      "HTMLDocument",
      "HTMLTemplateElement",
      "matchMedia",
      "MutationObserver",
      "Node.prototype.contains",
      "NodeList.prototype.forEach",
      "requestAnimationFrame",
      "Window"
    ],
    "browsers": {
      "chrome": "<53",
      "edge": "<79",
      "edge_mob": "*",
      "firefox": "<63",
      "safari": "*",
      "ie": "*",
      "opera": "<40"
    },
    "detector": true
  },
  {
    "name": "~shadycss-apply-shim",
    "deps": [
      "~shadycss-scoping-shim",
      "~shadydom",
      "console.error",
      "console.log",
      "console",
      "CustomEvent",
      "document.head",
      "document.querySelector",
      "document",
      "DocumentFragment",
      "Element.prototype.cloneNode",
      "Element.prototype.matches",
      "Element",
      "Event",
      "getComputedStyle",
      "HTMLDocument",
      "HTMLTemplateElement",
      "matchMedia",
      "MutationObserver",
      "Node.prototype.contains",
      "NodeList.prototype.forEach",
      "requestAnimationFrame",
      "Window"
    ],
    "browsers": {
      "chrome": "<53",
      "edge": "<79",
      "edge_mob": "*",
      "firefox": "<63",
      "safari": "*",
      "ie": "*",
      "opera": "<40"
    },
    "detector": true
  },
  {
    "name": "~shadycss-custom-style-interface",
    "deps": [
      "~shadycss-apply-shim",
      "~shadycss-scoping-shim",
      "~shadydom",
      "console.error",
      "console.log",
      "console",
      "CustomEvent",
      "document.head",
      "document.querySelector",
      "document",
      "DocumentFragment",
      "DOMTokenList",
      "Element.prototype.classList",
      "Element.prototype.cloneNode",
      "Element.prototype.matches",
      "Element.prototype.remove",
      "Element",
      "Event",
      "getComputedStyle",
      "HTMLDocument",
      "HTMLTemplateElement",
      "matchMedia",
      "MutationObserver",
      "Node.prototype.contains",
      "NodeList.prototype.forEach",
      "requestAnimationFrame",
      "Window"
    ],
    "browsers": {
      "chrome": "<53",
      "edge": "<79",
      "edge_mob": "*",
      "firefox": "<63",
      "safari": "*",
      "ie": "*",
      "opera": "<40"
    },
    "detector": true
  },
  {
    "name": "~custom-elements",
    "deps": [
      "console.error",
      "console.log",
      "console.warn",
      "console",
      "CustomEvent",
      "document.head",
      "document.querySelector",
      "document",
      "DocumentFragment.prototype.append",
      "DocumentFragment.prototype.prepend",
      "DocumentFragment",
      "Element.prototype.after",
      "Element.prototype.append",
      "Element.prototype.before",
      "Element.prototype.cloneNode",
      "Element.prototype.matches",
      "Element.prototype.prepend",
      "Element.prototype.remove",
      "Element.prototype.replaceWith",
      "Element",
      "Event",
      "HTMLDocument",
      "HTMLTemplateElement",
      "MutationObserver",
      "Node.prototype.contains",
      "NodeList.prototype.forEach",
      "Window"
    ],
    "browsers": {
      "chrome": "<67",
      "edge": "<79",
      "edge_mob": "*",
      "firefox": "<63",
      "safari": "<11",
      "ie": "*",
      "opera": "<64",
      "op_mob": "<46",
      "op_mini": "*",
      "samsung_mob": "<8"
    },
    "detector": true
  },
  {
    "name": "URLSearchParams",
    "deps": [
      "URL"
    ],
    "isAlias": true
  },
  {
    "name": "Document",
    "deps": [
      "document"
    ],
    "isAlias": true
  },
  {
    "name": "PageVisibility",
    "deps": [
      "document.visibilityState"
    ],
    "isAlias": true
  },
  {
    "name": "Navigator.prototype.geolocation",
    "deps": [
      "navigator.geolocation"
    ],
    "isAlias": true
  },
  {
    "name": "scroll",
    "deps": [
      "smoothscroll"
    ],
    "isAlias": true
  },
  {
    "name": "scrollBy",
    "deps": [
      "smoothscroll"
    ],
    "isAlias": true
  },
  {
    "name": "scrollIntoView",
    "deps": [
      "smoothscroll"
    ],
    "isAlias": true
  },
  {
    "name": "Element.prototype.scroll",
    "deps": [
      "smoothscroll"
    ],
    "isAlias": true
  },
  {
    "name": "Element.prototype.scrollBy",
    "deps": [
      "smoothscroll"
    ],
    "isAlias": true
  },
  {
    "name": "Element.prototype.scrollIntoView",
    "deps": [
      "smoothscroll"
    ],
    "isAlias": true
  },
  {
    "name": "window.scroll",
    "deps": [
      "smoothscroll"
    ],
    "isAlias": true
  },
  {
    "name": "window.scrollBy",
    "deps": [
      "smoothscroll"
    ],
    "isAlias": true
  },
  {
    "name": "viewport",
    "deps": [
      "~viewport"
    ],
    "isAlias": true
  },
  {
    "name": "innerHeight",
    "deps": [
      "~viewport"
    ],
    "isAlias": true
  },
  {
    "name": "innerWidth",
    "deps": [
      "~viewport"
    ],
    "isAlias": true
  },
  {
    "name": "pageXOffset",
    "deps": [
      "~viewport"
    ],
    "isAlias": true
  },
  {
    "name": "pageYOffset",
    "deps": [
      "~viewport"
    ],
    "isAlias": true
  },
  {
    "name": "scrollX",
    "deps": [
      "~viewport"
    ],
    "isAlias": true
  },
  {
    "name": "scrollY",
    "deps": [
      "~viewport"
    ],
    "isAlias": true
  }
]
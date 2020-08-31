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
    }
  },
  {
    "name": "AudioContext",
    "deps": []
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
  },
  {
    "name": "Element",
    "deps": [
      "document"
    ],
    "browsers": {
      "ie": "6 - 8"
    },
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
  },
  {
    "name": "HTMLDocument",
    "deps": [],
    "browsers": {
      "ie": "9"
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
  },
  {
    "name": "JSON",
    "deps": [],
    "browsers": {
      "ie": "6 - 7",
      "firefox": "< 3.5",
      "safari": "< 4",
      "opera": "8.54 - 10.4"
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
  },
  {
    "name": "atob",
    "deps": [],
    "browsers": {
      "ie": "<10"
    },
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
  },
  {
    "name": "devicePixelRatio",
    "deps": [],
    "browsers": {
      "safari": "4 - 9.1",
      "ie": "6 - 10",
      "firefox": "<=17",
      "ios_saf": "<9.3"
    }
  },
  {
    "name": "document",
    "deps": [],
    "browsers": {
      "ie": "6 - 8"
    }
  },
  {
    "name": "document.currentScript",
    "deps": [],
    "browsers": {
      "ie": "*"
    }
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
    }
  },
  {
    "name": "document.head",
    "deps": [
      "document"
    ],
    "browsers": {
      "ie": "6 - 8",
      "safari": "4"
    }
  },
  {
    "name": "document.querySelector",
    "deps": [
      "Element",
      "document"
    ],
    "browsers": {
      "ie": "6 - 8"
    }
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
    }
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
    "detector": true
  },
  {
    "name": "getComputedStyle",
    "deps": [
      "Window"
    ],
    "browsers": {
      "ie": "6 - 8"
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
  },
  {
    "name": "~html5-elements",
    "deps": [
      "document"
    ],
    "browsers": {
      "ie": "6 - 9",
      "safari": "4"
    }
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
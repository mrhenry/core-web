module.exports = {
  "ie": {
    "family": "ie",
    "versionList": [
      "5.5.0",
      "6.0.0",
      "7.0.0",
      "8.0.0",
      "9.0.0",
      "10.0.0",
      "11.0.0"
    ],
    "versions": {
      "5.5.0": {
        "detectors": []
      },
      "6.0.0": {
        "detectors": []
      },
      "7.0.0": {
        "detectors": [
          {
            "name": "Event.hashchange",
            "detectSource": "\"onhashchange\"in self&&(null==self.onhashchange||\"function\"==typeof self.onhashchange)\n"
          },
          {
            "name": "JSON",
            "detectSource": "\"JSON\"in self\n"
          },
          {
            "name": "Window",
            "detectSource": "\"Window\"in self\n"
          },
          {
            "name": "localStorage",
            "detectSource": "(function(){try{return self.localStorage.setItem(\"storage_test\",1),self.localStorage.removeItem(\"storage_test\"),!0}catch(t){return!1}})()\n"
          }
        ]
      },
      "8.0.0": {
        "detectors": [
          {
            "name": "Element",
            "detectSource": "\"Element\"in self&&\"HTMLElement\"in self\n"
          },
          {
            "name": "Element.prototype.cloneNode",
            "detectSource": "\"document\"in self&&\"cloneNode\"in document.documentElement&&function(){var e=document.createElement(\"div\"),n=document.createElement(\"input\")\nn.type=\"radio\",n.checked=!0,e.appendChild(n)\nvar c,t=n.cloneNode(!1)\ntry{c=e.cloneNode()}catch(d){return!1}return t.checked&&void 0!==c&&0===c.childNodes.length}()\n"
          },
          {
            "name": "Element.prototype.nextElementSibling",
            "detectSource": "\"document\"in self&&\"nextElementSibling\"in document.documentElement\n"
          },
          {
            "name": "Element.prototype.previousElementSibling",
            "detectSource": "\"document\"in self&&\"previousElementSibling\"in document.documentElement\n"
          },
          {
            "name": "XMLHttpRequest",
            "detectSource": "\"XMLHttpRequest\"in self&&\"prototype\"in self.XMLHttpRequest&&\"addEventListener\"in self.XMLHttpRequest.prototype\n"
          },
          {
            "name": "document",
            "detectSource": "\"document\"in self\n"
          },
          {
            "name": "document.getElementsByClassName",
            "detectSource": "\"document\"in self&&\"getElementsByClassName\"in self.document\n"
          },
          {
            "name": "document.head",
            "detectSource": "\"document\"in self&&\"head\"in self.document\n"
          },
          {
            "name": "document.querySelector",
            "detectSource": "\"document\"in self&&\"querySelector\"in self.document\n"
          },
          {
            "name": "getComputedStyle",
            "detectSource": "\"getComputedStyle\"in self\n"
          },
          {
            "name": "navigator.geolocation",
            "detectSource": "\"navigator\"in self&&\"geolocation\"in self.navigator\n"
          },
          {
            "name": "~viewport",
            "detectSource": "\"innerHeight\"in self&&\"innerWidth\"in self&&\"pageXOffset\"in self&&\"pageYOffset\"in self&&\"scrollX\"in self&&\"scrollY\"in self\n"
          }
        ]
      },
      "9.0.0": {
        "detectors": [
          {
            "name": "Blob",
            "detectSource": "\"Blob\"in self&&function(){try{return new Blob,!0}catch(n){return!1}}()&&function(){try{return Blob(),!1}catch(n){return!0}}()\n"
          },
          {
            "name": "DocumentFragment",
            "detectSource": "\"DocumentFragment\"in self&&function(){try{return new DocumentFragment,!0}catch(n){return!1}}()\n"
          },
          {
            "name": "Element.prototype.placeholder",
            "detectSource": "\"document\"in self&&\"placeholder\"in document.createElement(\"input\")\n"
          },
          {
            "name": "HTMLDocument",
            "detectSource": "\"HTMLDocument\"in self\n"
          },
          {
            "name": "UserTiming",
            "detectSource": "\"performance\"in self&&\"function\"==typeof self.performance.getEntriesByType&&\"function\"==typeof self.performance.mark\n"
          },
          {
            "name": "atob",
            "detectSource": "\"atob\"in self\n"
          },
          {
            "name": "matchMedia",
            "detectSource": "\"matchMedia\"in self&&\"MediaQueryList\"in self\n"
          },
          {
            "name": "performance.now",
            "detectSource": "\"performance\"in self&&\"now\"in self.performance\n"
          },
          {
            "name": "requestAnimationFrame",
            "detectSource": "\"requestAnimationFrame\"in self\n"
          },
          {
            "name": "~html5-elements",
            "detectSource": "(function(){var e=document.createElement(\"p\"),t=!1\nreturn e.innerHTML=\"<section></section>\",document.documentElement.appendChild(e),e.firstChild&&(\"getComputedStyle\"in window?t=\"block\"===getComputedStyle(e.firstChild).display:e.firstChild.currentStyle&&(t=\"block\"===e.firstChild.currentStyle.display)),document.documentElement.removeChild(e),t})()\n"
          }
        ]
      },
      "10.0.0": {
        "detectors": [
          {
            "name": "Element.prototype.dataset",
            "detectSource": "(function(){if(!document.documentElement.dataset)return!1\nvar t=document.createElement(\"div\")\nreturn t.setAttribute(\"data-a-b\",\"c\"),t.dataset&&\"c\"==t.dataset.aB})()\n"
          },
          {
            "name": "MutationObserver",
            "detectSource": "\"MutationObserver\"in self\n"
          },
          {
            "name": "devicePixelRatio",
            "detectSource": "\"devicePixelRatio\"in self\n"
          },
          {
            "name": "location.origin",
            "detectSource": "\"location\"in self&&\"origin\"in self.location\n"
          }
        ]
      },
      "11.0.0": {
        "detectors": [
          {
            "name": "Element.prototype.classList",
            "detectSource": "\"document\"in self&&\"classList\"in document.documentElement&&\"Element\"in self&&\"classList\"in Element.prototype&&function(){var e=document.createElement(\"span\")\nreturn e.classList.add(\"a\",\"b\"),e.classList.contains(\"b\")}()\n"
          },
          {
            "name": "Event",
            "detectSource": "(function(n){if(!(\"Event\"in n))return!1\ntry{return new Event(\"click\"),!0}catch(t){return!1}})(self)\n"
          },
          {
            "name": "HTMLCanvasElement.prototype.toBlob",
            "detectSource": "\"toBlob\"in HTMLCanvasElement.prototype\n"
          },
          {
            "name": "HTMLTemplateElement",
            "detectSource": "\"HTMLTemplateElement\"in self\n"
          }
        ]
      }
    }
  },
  "edge": {
    "family": "edge",
    "versionList": [
      "12.0.0",
      "13.0.0",
      "14.0.0",
      "15.0.0",
      "16.0.0",
      "17.0.0",
      "18.0.0",
      "79.0.0",
      "80.0.0",
      "81.0.0",
      "83.0.0",
      "84.0.0",
      "85.0.0",
      "86.0.0"
    ],
    "versions": {
      "12.0.0": {
        "detectors": [
          {
            "name": "HTMLTemplateElement",
            "detectSource": "\"HTMLTemplateElement\"in self\n"
          }
        ]
      },
      "13.0.0": {
        "detectors": [
          {
            "name": "CustomEvent",
            "detectSource": "\"CustomEvent\"in self&&(\"function\"==typeof self.CustomEvent||self.CustomEvent.toString().indexOf(\"CustomEventConstructor\")>-1)\n"
          },
          {
            "name": "DOMTokenList",
            "detectSource": "\"DOMTokenList\"in self&&function(e){return!(\"classList\"in e)||!e.classList.toggle(\"x\",!1)&&!e.className}(document.createElement(\"x\"))\n"
          },
          {
            "name": "Element.prototype.remove",
            "detectSource": "\"Element\"in self&&\"remove\"in Element.prototype\n"
          },
          {
            "name": "Node.prototype.contains",
            "detectSource": "document.contains\n"
          },
          {
            "name": "navigator.sendBeacon",
            "detectSource": "\"navigator\"in self&&\"sendBeacon\"in navigator\n"
          }
        ]
      },
      "14.0.0": {
        "detectors": [
          {
            "name": "Element.prototype.closest",
            "detectSource": "\"document\"in self&&\"closest\"in document.documentElement\n"
          }
        ]
      },
      "15.0.0": {
        "detectors": [
          {
            "name": "AbortController",
            "detectSource": "\"AbortController\"in self&&\"function\"==typeof self.AbortController\n"
          },
          {
            "name": "IntersectionObserver",
            "detectSource": "\"IntersectionObserver\"in window&&\"IntersectionObserverEntry\"in window&&\"intersectionRatio\"in window.IntersectionObserverEntry.prototype\n"
          },
          {
            "name": "IntersectionObserverEntry",
            "detectSource": "\"IntersectionObserverEntry\"in window&&\"isIntersecting\"in window.IntersectionObserverEntry.prototype\n"
          },
          {
            "name": "NodeList.prototype.forEach",
            "detectSource": "\"forEach\"in NodeList.prototype\n"
          },
          {
            "name": "fetch",
            "detectSource": "\"fetch\"in self\n"
          }
        ]
      },
      "16.0.0": {
        "detectors": [
          {
            "name": "DocumentFragment.prototype.append",
            "detectSource": "\"DocumentFragment\"in self&&\"append\"in DocumentFragment.prototype\n"
          },
          {
            "name": "DocumentFragment.prototype.prepend",
            "detectSource": "\"DocumentFragment\"in self&&\"prepend\"in DocumentFragment.prototype\n"
          },
          {
            "name": "Element.prototype.after",
            "detectSource": "\"Element\"in self&&\"after\"in Element.prototype\n"
          },
          {
            "name": "Element.prototype.append",
            "detectSource": "\"Element\"in self&&\"append\"in Element.prototype\n"
          },
          {
            "name": "Element.prototype.before",
            "detectSource": "\"Element\"in self&&\"before\"in Element.prototype\n"
          },
          {
            "name": "Element.prototype.prepend",
            "detectSource": "\"Element\"in self&&\"prepend\"in Element.prototype\n"
          },
          {
            "name": "Element.prototype.replaceWith",
            "detectSource": "\"Element\"in self&&\"replaceWith\"in Element.prototype\n"
          }
        ]
      },
      "17.0.0": {
        "detectors": [
          {
            "name": "DOMTokenList.prototype.replace",
            "detectSource": "\"replace\"in(document.createElement(\"div\").classList||{})\n"
          },
          {
            "name": "Element.prototype.matches",
            "detectSource": "\"document\"in self&&\"matches\"in document.documentElement\n"
          },
          {
            "name": "Element.prototype.toggleAttribute",
            "detectSource": "\"document\"in self&&\"toggleAttribute\"in document.documentElement\n"
          }
        ]
      },
      "18.0.0": {
        "detectors": [
          {
            "name": "TextEncoder",
            "detectSource": "\"TextEncoder\"in self&&\"TextDecoder\"in self\n"
          },
          {
            "name": "URL",
            "detectSource": "(function(e){\"use strict\"\ntry{var a=new e.URL(\"http://example.com\")\nif(\"href\"in a&&\"searchParams\"in a){var r=new URL(\"http://example.com\")\nif(r.search=\"a=1&b=2\",\"http://example.com/?a=1&b=2\"===r.href&&(r.search=\"\",\"http://example.com/\"===r.href)){var t=new e.URLSearchParams(\"a=1\"),c=new e.URLSearchParams(t)\nif(\"a=1\"===String(c))return!0}}return!1}catch(h){return!1}})(self)\n"
          },
          {
            "name": "UserTiming",
            "detectSource": "\"performance\"in self&&\"function\"==typeof self.performance.getEntriesByType&&\"function\"==typeof self.performance.mark\n"
          }
        ]
      },
      "79.0.0": {
        "detectors": []
      },
      "80.0.0": {
        "detectors": []
      },
      "81.0.0": {
        "detectors": []
      },
      "83.0.0": {
        "detectors": []
      },
      "84.0.0": {
        "detectors": []
      },
      "85.0.0": {
        "detectors": []
      },
      "86.0.0": {
        "detectors": []
      }
    }
  },
  "firefox": {
    "family": "firefox",
    "versionList": [
      "2.0.0",
      "3.0.0",
      "3.5.0",
      "3.6.0",
      "4.0.0",
      "5.0.0",
      "6.0.0",
      "7.0.0",
      "8.0.0",
      "9.0.0",
      "10.0.0",
      "11.0.0",
      "12.0.0",
      "13.0.0",
      "14.0.0",
      "15.0.0",
      "16.0.0",
      "17.0.0",
      "18.0.0",
      "19.0.0",
      "20.0.0",
      "21.0.0",
      "22.0.0",
      "23.0.0",
      "24.0.0",
      "25.0.0",
      "26.0.0",
      "27.0.0",
      "28.0.0",
      "29.0.0",
      "30.0.0",
      "31.0.0",
      "32.0.0",
      "33.0.0",
      "34.0.0",
      "35.0.0",
      "36.0.0",
      "37.0.0",
      "38.0.0",
      "39.0.0",
      "40.0.0",
      "41.0.0",
      "42.0.0",
      "43.0.0",
      "44.0.0",
      "45.0.0",
      "46.0.0",
      "47.0.0",
      "48.0.0",
      "49.0.0",
      "50.0.0",
      "51.0.0",
      "52.0.0",
      "53.0.0",
      "54.0.0",
      "55.0.0",
      "56.0.0",
      "57.0.0",
      "58.0.0",
      "59.0.0",
      "60.0.0",
      "61.0.0",
      "62.0.0",
      "63.0.0",
      "64.0.0",
      "65.0.0",
      "66.0.0",
      "67.0.0",
      "68.0.0",
      "69.0.0",
      "70.0.0",
      "71.0.0",
      "72.0.0",
      "73.0.0",
      "74.0.0",
      "75.0.0",
      "76.0.0",
      "77.0.0",
      "78.0.0",
      "79.0.0",
      "80.0.0",
      "81.0.0",
      "82.0.0",
      "83.0.0",
      "84.0.0"
    ],
    "versions": {
      "2.0.0": {
        "detectors": []
      },
      "3.0.0": {
        "detectors": [
          {
            "name": "Element.prototype.nextElementSibling",
            "detectSource": "\"document\"in self&&\"nextElementSibling\"in document.documentElement\n"
          },
          {
            "name": "Element.prototype.previousElementSibling",
            "detectSource": "\"document\"in self&&\"previousElementSibling\"in document.documentElement\n"
          },
          {
            "name": "JSON",
            "detectSource": "\"JSON\"in self\n"
          }
        ]
      },
      "3.5.0": {
        "detectors": []
      },
      "3.6.0": {
        "detectors": [
          {
            "name": "DocumentFragment",
            "detectSource": "\"DocumentFragment\"in self&&function(){try{return new DocumentFragment,!0}catch(n){return!1}}()\n"
          }
        ]
      },
      "4.0.0": {
        "detectors": []
      },
      "5.0.0": {
        "detectors": [
          {
            "name": "Element.prototype.dataset",
            "detectSource": "(function(){if(!document.documentElement.dataset)return!1\nvar t=document.createElement(\"div\")\nreturn t.setAttribute(\"data-a-b\",\"c\"),t.dataset&&\"c\"==t.dataset.aB})()\n"
          }
        ]
      },
      "6.0.0": {
        "detectors": []
      },
      "7.0.0": {
        "detectors": []
      },
      "8.0.0": {
        "detectors": []
      },
      "9.0.0": {
        "detectors": []
      },
      "10.0.0": {
        "detectors": [
          {
            "name": "CustomEvent",
            "detectSource": "\"CustomEvent\"in self&&(\"function\"==typeof self.CustomEvent||self.CustomEvent.toString().indexOf(\"CustomEventConstructor\")>-1)\n"
          },
          {
            "name": "Event",
            "detectSource": "(function(n){if(!(\"Event\"in n))return!1\ntry{return new Event(\"click\"),!0}catch(t){return!1}})(self)\n"
          }
        ]
      },
      "11.0.0": {
        "detectors": []
      },
      "12.0.0": {
        "detectors": [
          {
            "name": "Blob",
            "detectSource": "\"Blob\"in self&&function(){try{return new Blob,!0}catch(n){return!1}}()&&function(){try{return Blob(),!1}catch(n){return!0}}()\n"
          }
        ]
      },
      "13.0.0": {
        "detectors": [
          {
            "name": "MutationObserver",
            "detectSource": "\"MutationObserver\"in self\n"
          }
        ]
      },
      "14.0.0": {
        "detectors": [
          {
            "name": "performance.now",
            "detectSource": "\"performance\"in self&&\"now\"in self.performance\n"
          }
        ]
      },
      "15.0.0": {
        "detectors": []
      },
      "16.0.0": {
        "detectors": []
      },
      "17.0.0": {
        "detectors": [
          {
            "name": "devicePixelRatio",
            "detectSource": "\"devicePixelRatio\"in self\n"
          },
          {
            "name": "document.visibilityState",
            "detectSource": "\"document\"in self&&\"hidden\"in document&&\"visibilityState\"in document\n"
          }
        ]
      },
      "18.0.0": {
        "detectors": [
          {
            "name": "HTMLCanvasElement.prototype.toBlob",
            "detectSource": "\"toBlob\"in HTMLCanvasElement.prototype\n"
          },
          {
            "name": "TextEncoder",
            "detectSource": "\"TextEncoder\"in self&&\"TextDecoder\"in self\n"
          }
        ]
      },
      "19.0.0": {
        "detectors": []
      },
      "20.0.0": {
        "detectors": [
          {
            "name": "location.origin",
            "detectSource": "\"location\"in self&&\"origin\"in self.location\n"
          }
        ]
      },
      "21.0.0": {
        "detectors": [
          {
            "name": "CSS.supports",
            "detectSource": "(\"function\"==typeof self.CSS||\"object\"==typeof self.CSS)&&\"function\"==typeof self.CSS.supports\n"
          }
        ]
      },
      "22.0.0": {
        "detectors": [
          {
            "name": "HTMLTemplateElement",
            "detectSource": "\"HTMLTemplateElement\"in self\n"
          },
          {
            "name": "requestAnimationFrame",
            "detectSource": "\"requestAnimationFrame\"in self\n"
          }
        ]
      },
      "23.0.0": {
        "detectors": []
      },
      "24.0.0": {
        "detectors": []
      },
      "25.0.0": {
        "detectors": []
      },
      "26.0.0": {
        "detectors": []
      },
      "27.0.0": {
        "detectors": []
      },
      "28.0.0": {
        "detectors": []
      },
      "29.0.0": {
        "detectors": [
          {
            "name": "Element.prototype.cloneNode",
            "detectSource": "\"document\"in self&&\"cloneNode\"in document.documentElement&&function(){var e=document.createElement(\"div\"),n=document.createElement(\"input\")\nn.type=\"radio\",n.checked=!0,e.appendChild(n)\nvar c,t=n.cloneNode(!1)\ntry{c=e.cloneNode()}catch(d){return!1}return t.checked&&void 0!==c&&0===c.childNodes.length}()\n"
          },
          {
            "name": "screen.orientation",
            "detectSource": "\"screen\"in self&&\"orientation\"in self.screen&&\"object\"==typeof self.screen.orientation\n"
          }
        ]
      },
      "30.0.0": {
        "detectors": [
          {
            "name": "DOMRect",
            "detectSource": "\"DOMRect\"in self&&function(e){try{return new e}catch(t){return!1}}(self.DOMRect)\n"
          },
          {
            "name": "navigator.sendBeacon",
            "detectSource": "\"navigator\"in self&&\"sendBeacon\"in navigator\n"
          }
        ]
      },
      "31.0.0": {
        "detectors": []
      },
      "32.0.0": {
        "detectors": []
      },
      "33.0.0": {
        "detectors": []
      },
      "34.0.0": {
        "detectors": [
          {
            "name": "Element.prototype.closest",
            "detectSource": "\"document\"in self&&\"closest\"in document.documentElement\n"
          }
        ]
      },
      "35.0.0": {
        "detectors": [
          {
            "name": "EventSource",
            "detectSource": "\"EventSource\"in self&&\"function\"==typeof self.EventSource\n"
          }
        ]
      },
      "36.0.0": {
        "detectors": [
          {
            "name": "smoothscroll",
            "detectSource": "\"document\"in self&&\"documentElement\"in self.document&&\"style\"in self.document.documentElement&&\"scrollBehavior\"in document.documentElement.style||function(){try{var e=!1,t={top:1,left:0}\nObject.defineProperty(t,\"behavior\",{get:function(){return e=!0,\"smooth\"},enumerable:!0})\nvar n=document.createElement(\"DIV\"),o=document.createElement(\"DIV\")\nreturn n.setAttribute(\"style\",\"height: 1px; overflow: scroll;\"),o.setAttribute(\"style\",\"height: 2px; overflow: scroll;\"),n.appendChild(o),n.scrollTo(t),e}catch(l){return!1}}()\n"
          }
        ]
      },
      "37.0.0": {
        "detectors": [
          {
            "name": "HTMLPictureElement",
            "detectSource": "\"HTMLPictureElement\"in self||\"picturefill\"in self\n"
          },
          {
            "name": "UserTiming",
            "detectSource": "\"performance\"in self&&\"function\"==typeof self.performance.getEntriesByType&&\"function\"==typeof self.performance.mark\n"
          }
        ]
      },
      "38.0.0": {
        "detectors": []
      },
      "39.0.0": {
        "detectors": []
      },
      "40.0.0": {
        "detectors": []
      },
      "41.0.0": {
        "detectors": []
      },
      "42.0.0": {
        "detectors": []
      },
      "43.0.0": {
        "detectors": [
          {
            "name": "URL",
            "detectSource": "(function(e){\"use strict\"\ntry{var a=new e.URL(\"http://example.com\")\nif(\"href\"in a&&\"searchParams\"in a){var r=new URL(\"http://example.com\")\nif(r.search=\"a=1&b=2\",\"http://example.com/?a=1&b=2\"===r.href&&(r.search=\"\",\"http://example.com/\"===r.href)){var t=new e.URLSearchParams(\"a=1\"),c=new e.URLSearchParams(t)\nif(\"a=1\"===String(c))return!0}}return!1}catch(h){return!1}})(self)\n"
          }
        ]
      },
      "44.0.0": {
        "detectors": [
          {
            "name": "Element.prototype.remove",
            "detectSource": "\"Element\"in self&&\"remove\"in Element.prototype\n"
          }
        ]
      },
      "45.0.0": {
        "detectors": []
      },
      "46.0.0": {
        "detectors": []
      },
      "47.0.0": {
        "detectors": []
      },
      "48.0.0": {
        "detectors": [
          {
            "name": "DocumentFragment.prototype.append",
            "detectSource": "\"DocumentFragment\"in self&&\"append\"in DocumentFragment.prototype\n"
          },
          {
            "name": "DocumentFragment.prototype.prepend",
            "detectSource": "\"DocumentFragment\"in self&&\"prepend\"in DocumentFragment.prototype\n"
          },
          {
            "name": "Element.prototype.after",
            "detectSource": "\"Element\"in self&&\"after\"in Element.prototype\n"
          },
          {
            "name": "Element.prototype.append",
            "detectSource": "\"Element\"in self&&\"append\"in Element.prototype\n"
          },
          {
            "name": "Element.prototype.before",
            "detectSource": "\"Element\"in self&&\"before\"in Element.prototype\n"
          },
          {
            "name": "Element.prototype.prepend",
            "detectSource": "\"Element\"in self&&\"prepend\"in Element.prototype\n"
          },
          {
            "name": "Element.prototype.replaceWith",
            "detectSource": "\"Element\"in self&&\"replaceWith\"in Element.prototype\n"
          }
        ]
      },
      "49.0.0": {
        "detectors": [
          {
            "name": "NodeList.prototype.forEach",
            "detectSource": "\"forEach\"in NodeList.prototype\n"
          }
        ]
      },
      "50.0.0": {
        "detectors": [
          {
            "name": "Event.hashchange",
            "detectSource": "\"onhashchange\"in self&&(null==self.onhashchange||\"function\"==typeof self.onhashchange)\n"
          },
          {
            "name": "WebAnimations",
            "detectSource": "\"function\"==typeof document.head.animate\n"
          }
        ]
      },
      "51.0.0": {
        "detectors": [
          {
            "name": "Event.focusin",
            "detectSource": "(function(){var n=!1\nreturn document.documentElement.addEventListener(\"focusin\",function(){n=!0}),document.documentElement.dispatchEvent(new Event(\"focusin\")),n})()\n"
          }
        ]
      },
      "52.0.0": {
        "detectors": []
      },
      "53.0.0": {
        "detectors": []
      },
      "54.0.0": {
        "detectors": [
          {
            "name": "IntersectionObserver",
            "detectSource": "\"IntersectionObserver\"in window&&\"IntersectionObserverEntry\"in window&&\"intersectionRatio\"in window.IntersectionObserverEntry.prototype\n"
          },
          {
            "name": "requestIdleCallback",
            "detectSource": "\"requestIdleCallback\"in self\n"
          }
        ]
      },
      "55.0.0": {
        "detectors": []
      },
      "56.0.0": {
        "detectors": [
          {
            "name": "AbortController",
            "detectSource": "\"AbortController\"in self&&\"function\"==typeof self.AbortController\n"
          },
          {
            "name": "fetch",
            "detectSource": "\"fetch\"in self\n"
          }
        ]
      },
      "57.0.0": {
        "detectors": []
      },
      "58.0.0": {
        "detectors": []
      },
      "59.0.0": {
        "detectors": []
      },
      "60.0.0": {
        "detectors": [
          {
            "name": "DOMTokenList.prototype.replace",
            "detectSource": "\"replace\"in(document.createElement(\"div\").classList||{})\n"
          }
        ]
      },
      "61.0.0": {
        "detectors": []
      },
      "62.0.0": {
        "detectors": [
          {
            "name": "Element.prototype.toggleAttribute",
            "detectSource": "\"document\"in self&&\"toggleAttribute\"in document.documentElement\n"
          }
        ]
      },
      "63.0.0": {
        "detectors": []
      },
      "64.0.0": {
        "detectors": [
          {
            "name": "globalThis",
            "detectSource": "\"object\"==typeof globalThis\n"
          }
        ]
      },
      "65.0.0": {
        "detectors": []
      },
      "66.0.0": {
        "detectors": []
      },
      "67.0.0": {
        "detectors": []
      },
      "68.0.0": {
        "detectors": [
          {
            "name": "ResizeObserver",
            "detectSource": "\"ResizeObserver\"in self\n"
          },
          {
            "name": "queueMicrotask",
            "detectSource": "\"queueMicrotask\"in self\n"
          }
        ]
      },
      "69.0.0": {
        "detectors": []
      },
      "70.0.0": {
        "detectors": []
      },
      "71.0.0": {
        "detectors": []
      },
      "72.0.0": {
        "detectors": []
      },
      "73.0.0": {
        "detectors": []
      },
      "74.0.0": {
        "detectors": []
      },
      "75.0.0": {
        "detectors": []
      },
      "76.0.0": {
        "detectors": []
      },
      "77.0.0": {
        "detectors": []
      },
      "78.0.0": {
        "detectors": []
      },
      "79.0.0": {
        "detectors": []
      },
      "80.0.0": {
        "detectors": []
      },
      "81.0.0": {
        "detectors": []
      },
      "82.0.0": {
        "detectors": []
      },
      "83.0.0": {
        "detectors": []
      },
      "84.0.0": {
        "detectors": []
      }
    }
  },
  "chrome": {
    "family": "chrome",
    "versionList": [
      "4.0.0",
      "5.0.0",
      "6.0.0",
      "7.0.0",
      "8.0.0",
      "9.0.0",
      "10.0.0",
      "11.0.0",
      "12.0.0",
      "13.0.0",
      "14.0.0",
      "15.0.0",
      "16.0.0",
      "17.0.0",
      "18.0.0",
      "19.0.0",
      "20.0.0",
      "21.0.0",
      "22.0.0",
      "23.0.0",
      "24.0.0",
      "25.0.0",
      "26.0.0",
      "27.0.0",
      "28.0.0",
      "29.0.0",
      "30.0.0",
      "31.0.0",
      "32.0.0",
      "33.0.0",
      "34.0.0",
      "35.0.0",
      "36.0.0",
      "37.0.0",
      "38.0.0",
      "39.0.0",
      "40.0.0",
      "41.0.0",
      "42.0.0",
      "43.0.0",
      "44.0.0",
      "45.0.0",
      "46.0.0",
      "47.0.0",
      "48.0.0",
      "49.0.0",
      "50.0.0",
      "51.0.0",
      "52.0.0",
      "53.0.0",
      "54.0.0",
      "55.0.0",
      "56.0.0",
      "57.0.0",
      "58.0.0",
      "59.0.0",
      "60.0.0",
      "61.0.0",
      "62.0.0",
      "63.0.0",
      "64.0.0",
      "65.0.0",
      "66.0.0",
      "67.0.0",
      "68.0.0",
      "69.0.0",
      "70.0.0",
      "71.0.0",
      "72.0.0",
      "73.0.0",
      "74.0.0",
      "75.0.0",
      "76.0.0",
      "77.0.0",
      "78.0.0",
      "79.0.0",
      "80.0.0",
      "81.0.0",
      "83.0.0",
      "84.0.0",
      "85.0.0",
      "86.0.0",
      "87.0.0",
      "88.0.0",
      "89.0.0"
    ],
    "versions": {
      "4.0.0": {
        "detectors": []
      },
      "5.0.0": {
        "detectors": []
      },
      "6.0.0": {
        "detectors": []
      },
      "7.0.0": {
        "detectors": [
          {
            "name": "Element.prototype.dataset",
            "detectSource": "(function(){if(!document.documentElement.dataset)return!1\nvar t=document.createElement(\"div\")\nreturn t.setAttribute(\"data-a-b\",\"c\"),t.dataset&&\"c\"==t.dataset.aB})()\n"
          }
        ]
      },
      "8.0.0": {
        "detectors": []
      },
      "9.0.0": {
        "detectors": []
      },
      "10.0.0": {
        "detectors": []
      },
      "11.0.0": {
        "detectors": []
      },
      "12.0.0": {
        "detectors": []
      },
      "13.0.0": {
        "detectors": []
      },
      "14.0.0": {
        "detectors": [
          {
            "name": "CustomEvent",
            "detectSource": "\"CustomEvent\"in self&&(\"function\"==typeof self.CustomEvent||self.CustomEvent.toString().indexOf(\"CustomEventConstructor\")>-1)\n"
          }
        ]
      },
      "15.0.0": {
        "detectors": []
      },
      "16.0.0": {
        "detectors": []
      },
      "17.0.0": {
        "detectors": []
      },
      "18.0.0": {
        "detectors": [
          {
            "name": "Window",
            "detectSource": "\"Window\"in self\n"
          }
        ]
      },
      "19.0.0": {
        "detectors": [
          {
            "name": "Blob",
            "detectSource": "\"Blob\"in self&&function(){try{return new Blob,!0}catch(n){return!1}}()&&function(){try{return Blob(),!1}catch(n){return!0}}()\n"
          }
        ]
      },
      "20.0.0": {
        "detectors": []
      },
      "21.0.0": {
        "detectors": []
      },
      "22.0.0": {
        "detectors": []
      },
      "23.0.0": {
        "detectors": [
          {
            "name": "performance.now",
            "detectSource": "\"performance\"in self&&\"now\"in self.performance\n"
          }
        ]
      },
      "24.0.0": {
        "detectors": [
          {
            "name": "UserTiming",
            "detectSource": "\"performance\"in self&&\"function\"==typeof self.performance.getEntriesByType&&\"function\"==typeof self.performance.mark\n"
          }
        ]
      },
      "25.0.0": {
        "detectors": [
          {
            "name": "EventSource",
            "detectSource": "\"EventSource\"in self&&\"function\"==typeof self.EventSource\n"
          },
          {
            "name": "MutationObserver",
            "detectSource": "\"MutationObserver\"in self\n"
          }
        ]
      },
      "26.0.0": {
        "detectors": []
      },
      "27.0.0": {
        "detectors": [
          {
            "name": "CSS.supports",
            "detectSource": "(\"function\"==typeof self.CSS||\"object\"==typeof self.CSS)&&\"function\"==typeof self.CSS.supports\n"
          }
        ]
      },
      "28.0.0": {
        "detectors": [
          {
            "name": "location.origin",
            "detectSource": "\"location\"in self&&\"origin\"in self.location\n"
          }
        ]
      },
      "29.0.0": {
        "detectors": []
      },
      "30.0.0": {
        "detectors": []
      },
      "31.0.0": {
        "detectors": []
      },
      "32.0.0": {
        "detectors": [
          {
            "name": "document.visibilityState",
            "detectSource": "\"document\"in self&&\"hidden\"in document&&\"visibilityState\"in document\n"
          }
        ]
      },
      "33.0.0": {
        "detectors": []
      },
      "34.0.0": {
        "detectors": []
      },
      "35.0.0": {
        "detectors": []
      },
      "36.0.0": {
        "detectors": [
          {
            "name": "matchMedia",
            "detectSource": "\"matchMedia\"in self&&\"MediaQueryList\"in self\n"
          }
        ]
      },
      "37.0.0": {
        "detectors": [
          {
            "name": "TextEncoder",
            "detectSource": "\"TextEncoder\"in self&&\"TextDecoder\"in self\n"
          }
        ]
      },
      "38.0.0": {
        "detectors": [
          {
            "name": "navigator.sendBeacon",
            "detectSource": "\"navigator\"in self&&\"sendBeacon\"in navigator\n"
          }
        ]
      },
      "39.0.0": {
        "detectors": []
      },
      "40.0.0": {
        "detectors": [
          {
            "name": "Element.prototype.closest",
            "detectSource": "\"document\"in self&&\"closest\"in document.documentElement\n"
          }
        ]
      },
      "41.0.0": {
        "detectors": []
      },
      "42.0.0": {
        "detectors": []
      },
      "43.0.0": {
        "detectors": []
      },
      "44.0.0": {
        "detectors": []
      },
      "45.0.0": {
        "detectors": [
          {
            "name": "requestAnimationFrame",
            "detectSource": "\"requestAnimationFrame\"in self\n"
          }
        ]
      },
      "46.0.0": {
        "detectors": [
          {
            "name": "requestIdleCallback",
            "detectSource": "\"requestIdleCallback\"in self\n"
          }
        ]
      },
      "47.0.0": {
        "detectors": []
      },
      "48.0.0": {
        "detectors": [
          {
            "name": "screen.orientation",
            "detectSource": "\"screen\"in self&&\"orientation\"in self.screen&&\"object\"==typeof self.screen.orientation\n"
          }
        ]
      },
      "49.0.0": {
        "detectors": [
          {
            "name": "HTMLCanvasElement.prototype.toBlob",
            "detectSource": "\"toBlob\"in HTMLCanvasElement.prototype\n"
          }
        ]
      },
      "50.0.0": {
        "detectors": [
          {
            "name": "IntersectionObserver",
            "detectSource": "\"IntersectionObserver\"in window&&\"IntersectionObserverEntry\"in window&&\"intersectionRatio\"in window.IntersectionObserverEntry.prototype\n"
          },
          {
            "name": "NodeList.prototype.forEach",
            "detectSource": "\"forEach\"in NodeList.prototype\n"
          }
        ]
      },
      "51.0.0": {
        "detectors": []
      },
      "52.0.0": {
        "detectors": []
      },
      "53.0.0": {
        "detectors": [
          {
            "name": "DocumentFragment.prototype.append",
            "detectSource": "\"DocumentFragment\"in self&&\"append\"in DocumentFragment.prototype\n"
          },
          {
            "name": "DocumentFragment.prototype.prepend",
            "detectSource": "\"DocumentFragment\"in self&&\"prepend\"in DocumentFragment.prototype\n"
          },
          {
            "name": "Element.prototype.after",
            "detectSource": "\"Element\"in self&&\"after\"in Element.prototype\n"
          },
          {
            "name": "Element.prototype.append",
            "detectSource": "\"Element\"in self&&\"append\"in Element.prototype\n"
          },
          {
            "name": "Element.prototype.before",
            "detectSource": "\"Element\"in self&&\"before\"in Element.prototype\n"
          },
          {
            "name": "Element.prototype.prepend",
            "detectSource": "\"Element\"in self&&\"prepend\"in Element.prototype\n"
          },
          {
            "name": "Element.prototype.replaceWith",
            "detectSource": "\"Element\"in self&&\"replaceWith\"in Element.prototype\n"
          }
        ]
      },
      "54.0.0": {
        "detectors": [
          {
            "name": "Event.hashchange",
            "detectSource": "\"onhashchange\"in self&&(null==self.onhashchange||\"function\"==typeof self.onhashchange)\n"
          }
        ]
      },
      "55.0.0": {
        "detectors": []
      },
      "56.0.0": {
        "detectors": []
      },
      "57.0.0": {
        "detectors": []
      },
      "58.0.0": {
        "detectors": []
      },
      "59.0.0": {
        "detectors": [
          {
            "name": "DOMRect",
            "detectSource": "\"DOMRect\"in self&&function(e){try{return new e}catch(t){return!1}}(self.DOMRect)\n"
          },
          {
            "name": "URL",
            "detectSource": "(function(e){\"use strict\"\ntry{var a=new e.URL(\"http://example.com\")\nif(\"href\"in a&&\"searchParams\"in a){var r=new URL(\"http://example.com\")\nif(r.search=\"a=1&b=2\",\"http://example.com/?a=1&b=2\"===r.href&&(r.search=\"\",\"http://example.com/\"===r.href)){var t=new e.URLSearchParams(\"a=1\"),c=new e.URLSearchParams(t)\nif(\"a=1\"===String(c))return!0}}return!1}catch(h){return!1}})(self)\n"
          }
        ]
      },
      "60.0.0": {
        "detectors": []
      },
      "61.0.0": {
        "detectors": []
      },
      "62.0.0": {
        "detectors": []
      },
      "63.0.0": {
        "detectors": [
          {
            "name": "ResizeObserver",
            "detectSource": "\"ResizeObserver\"in self\n"
          }
        ]
      },
      "64.0.0": {
        "detectors": []
      },
      "65.0.0": {
        "detectors": [
          {
            "name": "AbortController",
            "detectSource": "\"AbortController\"in self&&\"function\"==typeof self.AbortController\n"
          },
          {
            "name": "fetch",
            "detectSource": "\"fetch\"in self\n"
          }
        ]
      },
      "66.0.0": {
        "detectors": [
          {
            "name": "DOMTokenList.prototype.replace",
            "detectSource": "\"replace\"in(document.createElement(\"div\").classList||{})\n"
          }
        ]
      },
      "67.0.0": {
        "detectors": []
      },
      "68.0.0": {
        "detectors": [
          {
            "name": "Element.prototype.toggleAttribute",
            "detectSource": "\"document\"in self&&\"toggleAttribute\"in document.documentElement\n"
          }
        ]
      },
      "69.0.0": {
        "detectors": []
      },
      "70.0.0": {
        "detectors": [
          {
            "name": "globalThis",
            "detectSource": "\"object\"==typeof globalThis\n"
          },
          {
            "name": "queueMicrotask",
            "detectSource": "\"queueMicrotask\"in self\n"
          }
        ]
      },
      "71.0.0": {
        "detectors": []
      },
      "72.0.0": {
        "detectors": []
      },
      "73.0.0": {
        "detectors": []
      },
      "74.0.0": {
        "detectors": []
      },
      "75.0.0": {
        "detectors": []
      },
      "76.0.0": {
        "detectors": []
      },
      "77.0.0": {
        "detectors": []
      },
      "78.0.0": {
        "detectors": []
      },
      "79.0.0": {
        "detectors": []
      },
      "80.0.0": {
        "detectors": []
      },
      "81.0.0": {
        "detectors": []
      },
      "83.0.0": {
        "detectors": []
      },
      "84.0.0": {
        "detectors": []
      },
      "85.0.0": {
        "detectors": []
      },
      "86.0.0": {
        "detectors": []
      },
      "87.0.0": {
        "detectors": []
      },
      "88.0.0": {
        "detectors": []
      },
      "89.0.0": {
        "detectors": []
      }
    }
  },
  "safari": {
    "family": "safari",
    "versionList": [
      "3.1.0",
      "3.2.0",
      "4.0.0",
      "5.0.0",
      "5.1.0",
      "6.0.0",
      "6.1.0",
      "7.0.0",
      "7.1.0",
      "8.0.0",
      "9.0.0",
      "9.1.0",
      "10.0.0",
      "10.1.0",
      "11.0.0",
      "11.1.0",
      "12.0.0",
      "12.1.0",
      "13.0.0",
      "13.1.0",
      "14.0.0"
    ],
    "versions": {
      "3.1.0": {
        "detectors": []
      },
      "3.2.0": {
        "detectors": [
          {
            "name": "DocumentFragment",
            "detectSource": "\"DocumentFragment\"in self&&function(){try{return new DocumentFragment,!0}catch(n){return!1}}()\n"
          },
          {
            "name": "Element.prototype.nextElementSibling",
            "detectSource": "\"document\"in self&&\"nextElementSibling\"in document.documentElement\n"
          },
          {
            "name": "Element.prototype.previousElementSibling",
            "detectSource": "\"document\"in self&&\"previousElementSibling\"in document.documentElement\n"
          },
          {
            "name": "JSON",
            "detectSource": "\"JSON\"in self\n"
          }
        ]
      },
      "4.0.0": {
        "detectors": [
          {
            "name": "Element.prototype.classList",
            "detectSource": "\"document\"in self&&\"classList\"in document.documentElement&&\"Element\"in self&&\"classList\"in Element.prototype&&function(){var e=document.createElement(\"span\")\nreturn e.classList.add(\"a\",\"b\"),e.classList.contains(\"b\")}()\n"
          },
          {
            "name": "Event.hashchange",
            "detectSource": "\"onhashchange\"in self&&(null==self.onhashchange||\"function\"==typeof self.onhashchange)\n"
          },
          {
            "name": "document.head",
            "detectSource": "\"document\"in self&&\"head\"in self.document\n"
          },
          {
            "name": "document.visibilityState",
            "detectSource": "\"document\"in self&&\"hidden\"in document&&\"visibilityState\"in document\n"
          },
          {
            "name": "navigator.geolocation",
            "detectSource": "\"navigator\"in self&&\"geolocation\"in self.navigator\n"
          },
          {
            "name": "~html5-elements",
            "detectSource": "(function(){var e=document.createElement(\"p\"),t=!1\nreturn e.innerHTML=\"<section></section>\",document.documentElement.appendChild(e),e.firstChild&&(\"getComputedStyle\"in window?t=\"block\"===getComputedStyle(e.firstChild).display:e.firstChild.currentStyle&&(t=\"block\"===e.firstChild.currentStyle.display)),document.documentElement.removeChild(e),t})()\n"
          }
        ]
      },
      "5.0.0": {
        "detectors": []
      },
      "5.1.0": {
        "detectors": [
          {
            "name": "Blob",
            "detectSource": "\"Blob\"in self&&function(){try{return new Blob,!0}catch(n){return!1}}()&&function(){try{return Blob(),!1}catch(n){return!0}}()\n"
          },
          {
            "name": "Element.prototype.dataset",
            "detectSource": "(function(){if(!document.documentElement.dataset)return!1\nvar t=document.createElement(\"div\")\nreturn t.setAttribute(\"data-a-b\",\"c\"),t.dataset&&\"c\"==t.dataset.aB})()\n"
          },
          {
            "name": "MutationObserver",
            "detectSource": "\"MutationObserver\"in self\n"
          },
          {
            "name": "Window",
            "detectSource": "\"Window\"in self\n"
          },
          {
            "name": "matchMedia",
            "detectSource": "\"matchMedia\"in self&&\"MediaQueryList\"in self\n"
          }
        ]
      },
      "6.0.0": {
        "detectors": [
          {
            "name": "DOMTokenList",
            "detectSource": "\"DOMTokenList\"in self&&function(e){return!(\"classList\"in e)||!e.classList.toggle(\"x\",!1)&&!e.className}(document.createElement(\"x\"))\n"
          }
        ]
      },
      "6.1.0": {
        "detectors": [
          {
            "name": "EventSource",
            "detectSource": "\"EventSource\"in self&&\"function\"==typeof self.EventSource\n"
          },
          {
            "name": "location.origin",
            "detectSource": "\"location\"in self&&\"origin\"in self.location\n"
          },
          {
            "name": "requestAnimationFrame",
            "detectSource": "\"requestAnimationFrame\"in self\n"
          }
        ]
      },
      "7.0.0": {
        "detectors": [
          {
            "name": "Element.prototype.matches",
            "detectSource": "\"document\"in self&&\"matches\"in document.documentElement\n"
          }
        ]
      },
      "7.1.0": {
        "detectors": [
          {
            "name": "CustomEvent",
            "detectSource": "\"CustomEvent\"in self&&(\"function\"==typeof self.CustomEvent||self.CustomEvent.toString().indexOf(\"CustomEventConstructor\")>-1)\n"
          },
          {
            "name": "Event",
            "detectSource": "(function(n){if(!(\"Event\"in n))return!1\ntry{return new Event(\"click\"),!0}catch(t){return!1}})(self)\n"
          },
          {
            "name": "performance.now",
            "detectSource": "\"performance\"in self&&\"now\"in self.performance\n"
          }
        ]
      },
      "8.0.0": {
        "detectors": [
          {
            "name": "CSS.supports",
            "detectSource": "(\"function\"==typeof self.CSS||\"object\"==typeof self.CSS)&&\"function\"==typeof self.CSS.supports\n"
          },
          {
            "name": "Element.prototype.closest",
            "detectSource": "\"document\"in self&&\"closest\"in document.documentElement\n"
          },
          {
            "name": "HTMLTemplateElement",
            "detectSource": "\"HTMLTemplateElement\"in self\n"
          }
        ]
      },
      "9.0.0": {
        "detectors": [
          {
            "name": "Element.prototype.remove",
            "detectSource": "\"Element\"in self&&\"remove\"in Element.prototype\n"
          }
        ]
      },
      "9.1.0": {
        "detectors": [
          {
            "name": "DocumentFragment.prototype.append",
            "detectSource": "\"DocumentFragment\"in self&&\"append\"in DocumentFragment.prototype\n"
          },
          {
            "name": "DocumentFragment.prototype.prepend",
            "detectSource": "\"DocumentFragment\"in self&&\"prepend\"in DocumentFragment.prototype\n"
          },
          {
            "name": "Element.prototype.after",
            "detectSource": "\"Element\"in self&&\"after\"in Element.prototype\n"
          },
          {
            "name": "Element.prototype.append",
            "detectSource": "\"Element\"in self&&\"append\"in Element.prototype\n"
          },
          {
            "name": "Element.prototype.before",
            "detectSource": "\"Element\"in self&&\"before\"in Element.prototype\n"
          },
          {
            "name": "Element.prototype.prepend",
            "detectSource": "\"Element\"in self&&\"prepend\"in Element.prototype\n"
          },
          {
            "name": "Element.prototype.replaceWith",
            "detectSource": "\"Element\"in self&&\"replaceWith\"in Element.prototype\n"
          },
          {
            "name": "HTMLPictureElement",
            "detectSource": "\"HTMLPictureElement\"in self||\"picturefill\"in self\n"
          },
          {
            "name": "NodeList.prototype.forEach",
            "detectSource": "\"forEach\"in NodeList.prototype\n"
          },
          {
            "name": "devicePixelRatio",
            "detectSource": "\"devicePixelRatio\"in self\n"
          }
        ]
      },
      "10.0.0": {
        "detectors": [
          {
            "name": "DOMRect",
            "detectSource": "\"DOMRect\"in self&&function(e){try{return new e}catch(t){return!1}}(self.DOMRect)\n"
          },
          {
            "name": "TextEncoder",
            "detectSource": "\"TextEncoder\"in self&&\"TextDecoder\"in self\n"
          }
        ]
      },
      "10.1.0": {
        "detectors": [
          {
            "name": "HTMLCanvasElement.prototype.toBlob",
            "detectSource": "\"toBlob\"in HTMLCanvasElement.prototype\n"
          }
        ]
      },
      "11.0.0": {
        "detectors": [
          {
            "name": "navigator.sendBeacon",
            "detectSource": "\"navigator\"in self&&\"sendBeacon\"in navigator\n"
          }
        ]
      },
      "11.1.0": {
        "detectors": [
          {
            "name": "DOMTokenList.prototype.replace",
            "detectSource": "\"replace\"in(document.createElement(\"div\").classList||{})\n"
          },
          {
            "name": "Element.prototype.toggleAttribute",
            "detectSource": "\"document\"in self&&\"toggleAttribute\"in document.documentElement\n"
          },
          {
            "name": "URL",
            "detectSource": "(function(e){\"use strict\"\ntry{var a=new e.URL(\"http://example.com\")\nif(\"href\"in a&&\"searchParams\"in a){var r=new URL(\"http://example.com\")\nif(r.search=\"a=1&b=2\",\"http://example.com/?a=1&b=2\"===r.href&&(r.search=\"\",\"http://example.com/\"===r.href)){var t=new e.URLSearchParams(\"a=1\"),c=new e.URLSearchParams(t)\nif(\"a=1\"===String(c))return!0}}return!1}catch(h){return!1}})(self)\n"
          },
          {
            "name": "fetch",
            "detectSource": "\"fetch\"in self\n"
          }
        ]
      },
      "12.0.0": {
        "detectors": [
          {
            "name": "globalThis",
            "detectSource": "\"object\"==typeof globalThis\n"
          },
          {
            "name": "queueMicrotask",
            "detectSource": "\"queueMicrotask\"in self\n"
          }
        ]
      },
      "12.1.0": {
        "detectors": [
          {
            "name": "AbortController",
            "detectSource": "\"AbortController\"in self&&\"function\"==typeof self.AbortController\n"
          },
          {
            "name": "IntersectionObserver",
            "detectSource": "\"IntersectionObserver\"in window&&\"IntersectionObserverEntry\"in window&&\"intersectionRatio\"in window.IntersectionObserverEntry.prototype\n"
          }
        ]
      },
      "13.0.0": {
        "detectors": []
      },
      "13.1.0": {
        "detectors": []
      },
      "14.0.0": {
        "detectors": []
      }
    }
  },
  "opera": {
    "family": "opera",
    "versionList": [
      "9.0.0",
      "9.5.0",
      "10.0.0",
      "10.5.0",
      "10.6.0",
      "11.0.0",
      "11.1.0",
      "11.5.0",
      "11.6.0",
      "12.0.0",
      "12.1.0",
      "15.0.0",
      "16.0.0",
      "17.0.0",
      "18.0.0",
      "19.0.0",
      "20.0.0",
      "21.0.0",
      "22.0.0",
      "23.0.0",
      "24.0.0",
      "25.0.0",
      "26.0.0",
      "27.0.0",
      "28.0.0",
      "29.0.0",
      "30.0.0",
      "31.0.0",
      "32.0.0",
      "33.0.0",
      "34.0.0",
      "35.0.0",
      "36.0.0",
      "37.0.0",
      "38.0.0",
      "39.0.0",
      "40.0.0",
      "41.0.0",
      "42.0.0",
      "43.0.0",
      "44.0.0",
      "45.0.0",
      "46.0.0",
      "47.0.0",
      "48.0.0",
      "49.0.0",
      "50.0.0",
      "51.0.0",
      "52.0.0",
      "53.0.0",
      "54.0.0",
      "55.0.0",
      "56.0.0",
      "57.0.0",
      "58.0.0",
      "60.0.0",
      "62.0.0",
      "63.0.0",
      "64.0.0",
      "65.0.0",
      "66.0.0",
      "67.0.0",
      "68.0.0",
      "69.0.0",
      "70.0.0",
      "71.0.0"
    ],
    "versions": {
      "9.0.0": {
        "detectors": []
      },
      "9.5.0": {
        "detectors": [
          {
            "name": "Element.prototype.nextElementSibling",
            "detectSource": "\"document\"in self&&\"nextElementSibling\"in document.documentElement\n"
          },
          {
            "name": "Element.prototype.previousElementSibling",
            "detectSource": "\"document\"in self&&\"previousElementSibling\"in document.documentElement\n"
          }
        ]
      },
      "10.0.0": {
        "detectors": [
          {
            "name": "JSON",
            "detectSource": "\"JSON\"in self\n"
          }
        ]
      },
      "10.5.0": {
        "detectors": []
      },
      "10.6.0": {
        "detectors": [
          {
            "name": "DocumentFragment",
            "detectSource": "\"DocumentFragment\"in self&&function(){try{return new DocumentFragment,!0}catch(n){return!1}}()\n"
          }
        ]
      },
      "11.0.0": {
        "detectors": []
      },
      "11.1.0": {
        "detectors": []
      },
      "11.5.0": {
        "detectors": [
          {
            "name": "CustomEvent",
            "detectSource": "\"CustomEvent\"in self&&(\"function\"==typeof self.CustomEvent||self.CustomEvent.toString().indexOf(\"CustomEventConstructor\")>-1)\n"
          },
          {
            "name": "Event",
            "detectSource": "(function(n){if(!(\"Event\"in n))return!1\ntry{return new Event(\"click\"),!0}catch(t){return!1}})(self)\n"
          }
        ]
      },
      "11.6.0": {
        "detectors": [
          {
            "name": "Blob",
            "detectSource": "\"Blob\"in self&&function(){try{return new Blob,!0}catch(n){return!1}}()&&function(){try{return Blob(),!1}catch(n){return!0}}()\n"
          },
          {
            "name": "EventSource",
            "detectSource": "\"EventSource\"in self&&\"function\"==typeof self.EventSource\n"
          },
          {
            "name": "Window",
            "detectSource": "\"Window\"in self\n"
          }
        ]
      },
      "12.0.0": {
        "detectors": []
      },
      "12.1.0": {
        "detectors": [
          {
            "name": "CSS.supports",
            "detectSource": "(\"function\"==typeof self.CSS||\"object\"==typeof self.CSS)&&\"function\"==typeof self.CSS.supports\n"
          },
          {
            "name": "MutationObserver",
            "detectSource": "\"MutationObserver\"in self\n"
          },
          {
            "name": "UserTiming",
            "detectSource": "\"performance\"in self&&\"function\"==typeof self.performance.getEntriesByType&&\"function\"==typeof self.performance.mark\n"
          },
          {
            "name": "matchMedia",
            "detectSource": "\"matchMedia\"in self&&\"MediaQueryList\"in self\n"
          },
          {
            "name": "performance.now",
            "detectSource": "\"performance\"in self&&\"now\"in self.performance\n"
          },
          {
            "name": "requestAnimationFrame",
            "detectSource": "\"requestAnimationFrame\"in self\n"
          }
        ]
      },
      "15.0.0": {
        "detectors": [
          {
            "name": "navigator.geolocation",
            "detectSource": "\"navigator\"in self&&\"geolocation\"in self.navigator\n"
          }
        ]
      },
      "16.0.0": {
        "detectors": []
      },
      "17.0.0": {
        "detectors": []
      },
      "18.0.0": {
        "detectors": []
      },
      "19.0.0": {
        "detectors": [
          {
            "name": "document.visibilityState",
            "detectSource": "\"document\"in self&&\"hidden\"in document&&\"visibilityState\"in document\n"
          }
        ]
      },
      "20.0.0": {
        "detectors": []
      },
      "21.0.0": {
        "detectors": []
      },
      "22.0.0": {
        "detectors": [
          {
            "name": "HTMLTemplateElement",
            "detectSource": "\"HTMLTemplateElement\"in self\n"
          }
        ]
      },
      "23.0.0": {
        "detectors": []
      },
      "24.0.0": {
        "detectors": [
          {
            "name": "TextEncoder",
            "detectSource": "\"TextEncoder\"in self&&\"TextDecoder\"in self\n"
          },
          {
            "name": "screen.orientation",
            "detectSource": "\"screen\"in self&&\"orientation\"in self.screen&&\"object\"==typeof self.screen.orientation\n"
          }
        ]
      },
      "25.0.0": {
        "detectors": [
          {
            "name": "navigator.sendBeacon",
            "detectSource": "\"navigator\"in self&&\"sendBeacon\"in navigator\n"
          }
        ]
      },
      "26.0.0": {
        "detectors": []
      },
      "27.0.0": {
        "detectors": [
          {
            "name": "Element.prototype.closest",
            "detectSource": "\"document\"in self&&\"closest\"in document.documentElement\n"
          }
        ]
      },
      "28.0.0": {
        "detectors": []
      },
      "29.0.0": {
        "detectors": [
          {
            "name": "HTMLPictureElement",
            "detectSource": "\"HTMLPictureElement\"in self||\"picturefill\"in self\n"
          }
        ]
      },
      "30.0.0": {
        "detectors": []
      },
      "31.0.0": {
        "detectors": []
      },
      "32.0.0": {
        "detectors": []
      },
      "33.0.0": {
        "detectors": [
          {
            "name": "requestIdleCallback",
            "detectSource": "\"requestIdleCallback\"in self\n"
          }
        ]
      },
      "34.0.0": {
        "detectors": []
      },
      "35.0.0": {
        "detectors": [
          {
            "name": "URL",
            "detectSource": "(function(e){\"use strict\"\ntry{var a=new e.URL(\"http://example.com\")\nif(\"href\"in a&&\"searchParams\"in a){var r=new URL(\"http://example.com\")\nif(r.search=\"a=1&b=2\",\"http://example.com/?a=1&b=2\"===r.href&&(r.search=\"\",\"http://example.com/\"===r.href)){var t=new e.URLSearchParams(\"a=1\"),c=new e.URLSearchParams(t)\nif(\"a=1\"===String(c))return!0}}return!1}catch(h){return!1}})(self)\n"
          }
        ]
      },
      "36.0.0": {
        "detectors": [
          {
            "name": "HTMLCanvasElement.prototype.toBlob",
            "detectSource": "\"toBlob\"in HTMLCanvasElement.prototype\n"
          }
        ]
      },
      "37.0.0": {
        "detectors": [
          {
            "name": "NodeList.prototype.forEach",
            "detectSource": "\"forEach\"in NodeList.prototype\n"
          }
        ]
      },
      "38.0.0": {
        "detectors": [
          {
            "name": "DocumentFragment.prototype.append",
            "detectSource": "\"DocumentFragment\"in self&&\"append\"in DocumentFragment.prototype\n"
          },
          {
            "name": "DocumentFragment.prototype.prepend",
            "detectSource": "\"DocumentFragment\"in self&&\"prepend\"in DocumentFragment.prototype\n"
          },
          {
            "name": "Element.prototype.after",
            "detectSource": "\"Element\"in self&&\"after\"in Element.prototype\n"
          },
          {
            "name": "Element.prototype.append",
            "detectSource": "\"Element\"in self&&\"append\"in Element.prototype\n"
          },
          {
            "name": "Element.prototype.before",
            "detectSource": "\"Element\"in self&&\"before\"in Element.prototype\n"
          },
          {
            "name": "Element.prototype.prepend",
            "detectSource": "\"Element\"in self&&\"prepend\"in Element.prototype\n"
          },
          {
            "name": "Element.prototype.replaceWith",
            "detectSource": "\"Element\"in self&&\"replaceWith\"in Element.prototype\n"
          }
        ]
      },
      "39.0.0": {
        "detectors": []
      },
      "40.0.0": {
        "detectors": []
      },
      "41.0.0": {
        "detectors": []
      },
      "42.0.0": {
        "detectors": [
          {
            "name": "WebAnimations",
            "detectSource": "\"function\"==typeof document.head.animate\n"
          }
        ]
      },
      "43.0.0": {
        "detectors": []
      },
      "44.0.0": {
        "detectors": [
          {
            "name": "IntersectionObserver",
            "detectSource": "\"IntersectionObserver\"in window&&\"IntersectionObserverEntry\"in window&&\"intersectionRatio\"in window.IntersectionObserverEntry.prototype\n"
          }
        ]
      },
      "45.0.0": {
        "detectors": []
      },
      "46.0.0": {
        "detectors": []
      },
      "47.0.0": {
        "detectors": []
      },
      "48.0.0": {
        "detectors": []
      },
      "49.0.0": {
        "detectors": []
      },
      "50.0.0": {
        "detectors": [
          {
            "name": "ResizeObserver",
            "detectSource": "\"ResizeObserver\"in self\n"
          }
        ]
      },
      "51.0.0": {
        "detectors": []
      },
      "52.0.0": {
        "detectors": [
          {
            "name": "AbortController",
            "detectSource": "\"AbortController\"in self&&\"function\"==typeof self.AbortController\n"
          },
          {
            "name": "fetch",
            "detectSource": "\"fetch\"in self\n"
          }
        ]
      },
      "53.0.0": {
        "detectors": [
          {
            "name": "DOMTokenList.prototype.replace",
            "detectSource": "\"replace\"in(document.createElement(\"div\").classList||{})\n"
          }
        ]
      },
      "54.0.0": {
        "detectors": []
      },
      "55.0.0": {
        "detectors": [
          {
            "name": "Element.prototype.toggleAttribute",
            "detectSource": "\"document\"in self&&\"toggleAttribute\"in document.documentElement\n"
          }
        ]
      },
      "56.0.0": {
        "detectors": []
      },
      "57.0.0": {
        "detectors": [
          {
            "name": "queueMicrotask",
            "detectSource": "\"queueMicrotask\"in self\n"
          }
        ]
      },
      "58.0.0": {
        "detectors": []
      },
      "60.0.0": {
        "detectors": []
      },
      "62.0.0": {
        "detectors": []
      },
      "63.0.0": {
        "detectors": []
      },
      "64.0.0": {
        "detectors": []
      },
      "65.0.0": {
        "detectors": []
      },
      "66.0.0": {
        "detectors": []
      },
      "67.0.0": {
        "detectors": []
      },
      "68.0.0": {
        "detectors": []
      },
      "69.0.0": {
        "detectors": []
      },
      "70.0.0": {
        "detectors": []
      },
      "71.0.0": {
        "detectors": []
      }
    }
  },
  "ios_saf": {
    "family": "ios_saf",
    "versionList": [
      "3.2.0",
      "4.0.0",
      "4.2.0",
      "5.0.0",
      "6.0.0",
      "7.0.0",
      "8.0.0",
      "8.1.0",
      "9.0.0",
      "9.3.0",
      "10.0.0",
      "10.3.0",
      "11.0.0",
      "11.3.0",
      "12.0.0",
      "12.2.0",
      "13.0.0",
      "13.2.0",
      "13.3.0",
      "13.4.0",
      "14.0.0"
    ],
    "versions": {
      "3.2.0": {
        "detectors": [
          {
            "name": "DocumentFragment",
            "detectSource": "\"DocumentFragment\"in self&&function(){try{return new DocumentFragment,!0}catch(n){return!1}}()\n"
          }
        ]
      },
      "4.0.0": {
        "detectors": []
      },
      "4.2.0": {
        "detectors": []
      },
      "5.0.0": {
        "detectors": []
      },
      "6.0.0": {
        "detectors": [
          {
            "name": "MutationObserver",
            "detectSource": "\"MutationObserver\"in self\n"
          },
          {
            "name": "location.origin",
            "detectSource": "\"location\"in self&&\"origin\"in self.location\n"
          },
          {
            "name": "requestAnimationFrame",
            "detectSource": "\"requestAnimationFrame\"in self\n"
          }
        ]
      },
      "7.0.0": {
        "detectors": []
      },
      "8.0.0": {
        "detectors": []
      },
      "8.1.0": {
        "detectors": [
          {
            "name": "CSS.supports",
            "detectSource": "(\"function\"==typeof self.CSS||\"object\"==typeof self.CSS)&&\"function\"==typeof self.CSS.supports\n"
          },
          {
            "name": "Element.prototype.closest",
            "detectSource": "\"document\"in self&&\"closest\"in document.documentElement\n"
          },
          {
            "name": "Element.prototype.remove",
            "detectSource": "\"Element\"in self&&\"remove\"in Element.prototype\n"
          },
          {
            "name": "performance.now",
            "detectSource": "\"performance\"in self&&\"now\"in self.performance\n"
          }
        ]
      },
      "9.0.0": {
        "detectors": [
          {
            "name": "devicePixelRatio",
            "detectSource": "\"devicePixelRatio\"in self\n"
          }
        ]
      },
      "9.3.0": {
        "detectors": [
          {
            "name": "DocumentFragment.prototype.append",
            "detectSource": "\"DocumentFragment\"in self&&\"append\"in DocumentFragment.prototype\n"
          },
          {
            "name": "DocumentFragment.prototype.prepend",
            "detectSource": "\"DocumentFragment\"in self&&\"prepend\"in DocumentFragment.prototype\n"
          },
          {
            "name": "Element.prototype.after",
            "detectSource": "\"Element\"in self&&\"after\"in Element.prototype\n"
          },
          {
            "name": "Element.prototype.append",
            "detectSource": "\"Element\"in self&&\"append\"in Element.prototype\n"
          },
          {
            "name": "Element.prototype.before",
            "detectSource": "\"Element\"in self&&\"before\"in Element.prototype\n"
          },
          {
            "name": "Element.prototype.prepend",
            "detectSource": "\"Element\"in self&&\"prepend\"in Element.prototype\n"
          },
          {
            "name": "Element.prototype.replaceWith",
            "detectSource": "\"Element\"in self&&\"replaceWith\"in Element.prototype\n"
          },
          {
            "name": "Event.hashchange",
            "detectSource": "\"onhashchange\"in self&&(null==self.onhashchange||\"function\"==typeof self.onhashchange)\n"
          },
          {
            "name": "NodeList.prototype.forEach",
            "detectSource": "\"forEach\"in NodeList.prototype\n"
          }
        ]
      },
      "10.0.0": {
        "detectors": [
          {
            "name": "DOMRect",
            "detectSource": "\"DOMRect\"in self&&function(e){try{return new e}catch(t){return!1}}(self.DOMRect)\n"
          },
          {
            "name": "TextEncoder",
            "detectSource": "\"TextEncoder\"in self&&\"TextDecoder\"in self\n"
          }
        ]
      },
      "10.3.0": {
        "detectors": [
          {
            "name": "HTMLCanvasElement.prototype.toBlob",
            "detectSource": "\"toBlob\"in HTMLCanvasElement.prototype\n"
          }
        ]
      },
      "11.0.0": {
        "detectors": [
          {
            "name": "AbortController",
            "detectSource": "\"AbortController\"in self&&\"function\"==typeof self.AbortController\n"
          },
          {
            "name": "navigator.sendBeacon",
            "detectSource": "\"navigator\"in self&&\"sendBeacon\"in navigator\n"
          }
        ]
      },
      "11.3.0": {
        "detectors": [
          {
            "name": "DOMTokenList.prototype.replace",
            "detectSource": "\"replace\"in(document.createElement(\"div\").classList||{})\n"
          },
          {
            "name": "Element.prototype.toggleAttribute",
            "detectSource": "\"document\"in self&&\"toggleAttribute\"in document.documentElement\n"
          },
          {
            "name": "URL",
            "detectSource": "(function(e){\"use strict\"\ntry{var a=new e.URL(\"http://example.com\")\nif(\"href\"in a&&\"searchParams\"in a){var r=new URL(\"http://example.com\")\nif(r.search=\"a=1&b=2\",\"http://example.com/?a=1&b=2\"===r.href&&(r.search=\"\",\"http://example.com/\"===r.href)){var t=new e.URLSearchParams(\"a=1\"),c=new e.URLSearchParams(t)\nif(\"a=1\"===String(c))return!0}}return!1}catch(h){return!1}})(self)\n"
          },
          {
            "name": "fetch",
            "detectSource": "\"fetch\"in self\n"
          }
        ]
      },
      "12.0.0": {
        "detectors": [
          {
            "name": "IntersectionObserver",
            "detectSource": "\"IntersectionObserver\"in window&&\"IntersectionObserverEntry\"in window&&\"intersectionRatio\"in window.IntersectionObserverEntry.prototype\n"
          },
          {
            "name": "globalThis",
            "detectSource": "\"object\"==typeof globalThis\n"
          },
          {
            "name": "queueMicrotask",
            "detectSource": "\"queueMicrotask\"in self\n"
          }
        ]
      },
      "12.2.0": {
        "detectors": []
      },
      "13.0.0": {
        "detectors": []
      },
      "13.2.0": {
        "detectors": []
      },
      "13.3.0": {
        "detectors": []
      },
      "13.4.0": {
        "detectors": []
      },
      "14.0.0": {
        "detectors": []
      }
    }
  },
  "op_mini": {
    "family": "op_mini",
    "versionList": [],
    "versions": {}
  },
  "android": {
    "family": "android",
    "versionList": [
      "2.1.0",
      "2.2.0",
      "2.3.0",
      "3.0.0",
      "4.0.0",
      "4.1.0",
      "4.2.0",
      "4.4.0",
      "4.4.3-4.4.4",
      "81.0.0"
    ],
    "versions": {
      "2.1.0": {
        "detectors": []
      },
      "2.2.0": {
        "detectors": []
      },
      "2.3.0": {
        "detectors": [
          {
            "name": "DocumentFragment",
            "detectSource": "\"DocumentFragment\"in self&&function(){try{return new DocumentFragment,!0}catch(n){return!1}}()\n"
          },
          {
            "name": "matchMedia",
            "detectSource": "\"matchMedia\"in self&&\"MediaQueryList\"in self\n"
          }
        ]
      },
      "3.0.0": {
        "detectors": []
      },
      "4.0.0": {
        "detectors": []
      },
      "4.1.0": {
        "detectors": []
      },
      "4.2.0": {
        "detectors": [
          {
            "name": "CSS.supports",
            "detectSource": "(\"function\"==typeof self.CSS||\"object\"==typeof self.CSS)&&\"function\"==typeof self.CSS.supports\n"
          },
          {
            "name": "CustomEvent",
            "detectSource": "\"CustomEvent\"in self&&(\"function\"==typeof self.CustomEvent||self.CustomEvent.toString().indexOf(\"CustomEventConstructor\")>-1)\n"
          },
          {
            "name": "EventSource",
            "detectSource": "\"EventSource\"in self&&\"function\"==typeof self.EventSource\n"
          },
          {
            "name": "MutationObserver",
            "detectSource": "\"MutationObserver\"in self\n"
          },
          {
            "name": "performance.now",
            "detectSource": "\"performance\"in self&&\"now\"in self.performance\n"
          }
        ]
      },
      "4.4.0": {
        "detectors": [
          {
            "name": "AbortController",
            "detectSource": "\"AbortController\"in self&&\"function\"==typeof self.AbortController\n"
          },
          {
            "name": "DOMRect",
            "detectSource": "\"DOMRect\"in self&&function(e){try{return new e}catch(t){return!1}}(self.DOMRect)\n"
          },
          {
            "name": "DOMTokenList.prototype.replace",
            "detectSource": "\"replace\"in(document.createElement(\"div\").classList||{})\n"
          },
          {
            "name": "Element.prototype.append",
            "detectSource": "\"Element\"in self&&\"append\"in Element.prototype\n"
          },
          {
            "name": "Element.prototype.before",
            "detectSource": "\"Element\"in self&&\"before\"in Element.prototype\n"
          },
          {
            "name": "Element.prototype.closest",
            "detectSource": "\"document\"in self&&\"closest\"in document.documentElement\n"
          },
          {
            "name": "Element.prototype.prepend",
            "detectSource": "\"Element\"in self&&\"prepend\"in Element.prototype\n"
          },
          {
            "name": "Element.prototype.replaceWith",
            "detectSource": "\"Element\"in self&&\"replaceWith\"in Element.prototype\n"
          },
          {
            "name": "Element.prototype.toggleAttribute",
            "detectSource": "\"document\"in self&&\"toggleAttribute\"in document.documentElement\n"
          },
          {
            "name": "HTMLPictureElement",
            "detectSource": "\"HTMLPictureElement\"in self||\"picturefill\"in self\n"
          },
          {
            "name": "HTMLTemplateElement",
            "detectSource": "\"HTMLTemplateElement\"in self\n"
          },
          {
            "name": "NodeList.prototype.forEach",
            "detectSource": "\"forEach\"in NodeList.prototype\n"
          },
          {
            "name": "ResizeObserver",
            "detectSource": "\"ResizeObserver\"in self\n"
          },
          {
            "name": "UserTiming",
            "detectSource": "\"performance\"in self&&\"function\"==typeof self.performance.getEntriesByType&&\"function\"==typeof self.performance.mark\n"
          },
          {
            "name": "WebAnimations",
            "detectSource": "\"function\"==typeof document.head.animate\n"
          },
          {
            "name": "fetch",
            "detectSource": "\"fetch\"in self\n"
          },
          {
            "name": "globalThis",
            "detectSource": "\"object\"==typeof globalThis\n"
          },
          {
            "name": "navigator.sendBeacon",
            "detectSource": "\"navigator\"in self&&\"sendBeacon\"in navigator\n"
          },
          {
            "name": "queueMicrotask",
            "detectSource": "\"queueMicrotask\"in self\n"
          },
          {
            "name": "screen.orientation",
            "detectSource": "\"screen\"in self&&\"orientation\"in self.screen&&\"object\"==typeof self.screen.orientation\n"
          }
        ]
      },
      "4.4.3-4.4.4": {
        "detectors": []
      },
      "81.0.0": {
        "detectors": []
      }
    }
  },
  "bb": {
    "family": "bb",
    "versionList": [
      "7.0.0",
      "10.0.0"
    ],
    "versions": {
      "7.0.0": {
        "detectors": [
          {
            "name": "performance.now",
            "detectSource": "\"performance\"in self&&\"now\"in self.performance\n"
          },
          {
            "name": "requestAnimationFrame",
            "detectSource": "\"requestAnimationFrame\"in self\n"
          }
        ]
      },
      "10.0.0": {
        "detectors": [
          {
            "name": "HTMLPictureElement",
            "detectSource": "\"HTMLPictureElement\"in self||\"picturefill\"in self\n"
          },
          {
            "name": "HTMLTemplateElement",
            "detectSource": "\"HTMLTemplateElement\"in self\n"
          }
        ]
      }
    }
  },
  "op_mob": {
    "family": "op_mob",
    "versionList": [
      "10.0.0",
      "11.0.0",
      "11.1.0",
      "11.5.0",
      "12.0.0",
      "12.1.0",
      "59.0.0"
    ],
    "versions": {
      "10.0.0": {
        "detectors": [
          {
            "name": "Element.prototype.nextElementSibling",
            "detectSource": "\"document\"in self&&\"nextElementSibling\"in document.documentElement\n"
          },
          {
            "name": "Element.prototype.previousElementSibling",
            "detectSource": "\"document\"in self&&\"previousElementSibling\"in document.documentElement\n"
          }
        ]
      },
      "11.0.0": {
        "detectors": []
      },
      "11.1.0": {
        "detectors": []
      },
      "11.5.0": {
        "detectors": []
      },
      "12.0.0": {
        "detectors": []
      },
      "12.1.0": {
        "detectors": [
          {
            "name": "DOMTokenList.prototype.replace",
            "detectSource": "\"replace\"in(document.createElement(\"div\").classList||{})\n"
          },
          {
            "name": "Element.prototype.closest",
            "detectSource": "\"document\"in self&&\"closest\"in document.documentElement\n"
          },
          {
            "name": "Element.prototype.toggleAttribute",
            "detectSource": "\"document\"in self&&\"toggleAttribute\"in document.documentElement\n"
          },
          {
            "name": "IntersectionObserver",
            "detectSource": "\"IntersectionObserver\"in window&&\"IntersectionObserverEntry\"in window&&\"intersectionRatio\"in window.IntersectionObserverEntry.prototype\n"
          },
          {
            "name": "MutationObserver",
            "detectSource": "\"MutationObserver\"in self\n"
          },
          {
            "name": "NodeList.prototype.forEach",
            "detectSource": "\"forEach\"in NodeList.prototype\n"
          },
          {
            "name": "ResizeObserver",
            "detectSource": "\"ResizeObserver\"in self\n"
          },
          {
            "name": "matchMedia",
            "detectSource": "\"matchMedia\"in self&&\"MediaQueryList\"in self\n"
          },
          {
            "name": "performance.now",
            "detectSource": "\"performance\"in self&&\"now\"in self.performance\n"
          },
          {
            "name": "queueMicrotask",
            "detectSource": "\"queueMicrotask\"in self\n"
          },
          {
            "name": "requestAnimationFrame",
            "detectSource": "\"requestAnimationFrame\"in self\n"
          }
        ]
      },
      "59.0.0": {
        "detectors": []
      }
    }
  },
  "and_chr": {
    "family": "and_chr",
    "versionList": [
      "85.0.0"
    ],
    "versions": {
      "85.0.0": {
        "detectors": []
      }
    }
  },
  "and_ff": {
    "family": "and_ff",
    "versionList": [
      "79.0.0"
    ],
    "versions": {
      "79.0.0": {
        "detectors": []
      }
    }
  },
  "ie_mob": {
    "family": "ie_mob",
    "versionList": [
      "10.0.0",
      "11.0.0"
    ],
    "versions": {
      "10.0.0": {
        "detectors": [
          {
            "name": "Event",
            "detectSource": "(function(n){if(!(\"Event\"in n))return!1\ntry{return new Event(\"click\"),!0}catch(t){return!1}})(self)\n"
          },
          {
            "name": "MutationObserver",
            "detectSource": "\"MutationObserver\"in self\n"
          },
          {
            "name": "location.origin",
            "detectSource": "\"location\"in self&&\"origin\"in self.location\n"
          }
        ]
      },
      "11.0.0": {
        "detectors": [
          {
            "name": "Element.prototype.matches",
            "detectSource": "\"document\"in self&&\"matches\"in document.documentElement\n"
          },
          {
            "name": "HTMLTemplateElement",
            "detectSource": "\"HTMLTemplateElement\"in self\n"
          }
        ]
      }
    }
  },
  "and_uc": {
    "family": "and_uc",
    "versionList": [
      "12.12.0"
    ],
    "versions": {
      "12.12.0": {
        "detectors": []
      }
    }
  },
  "samsung": {
    "family": "samsung",
    "versionList": [
      "4.0.0",
      "5.0.0",
      "6.2.0",
      "7.2.0",
      "8.2.0",
      "9.2.0",
      "10.1.0",
      "11.1.0",
      "12.0.0"
    ],
    "versions": {
      "4.0.0": {
        "detectors": []
      },
      "5.0.0": {
        "detectors": []
      },
      "6.2.0": {
        "detectors": []
      },
      "7.2.0": {
        "detectors": []
      },
      "8.2.0": {
        "detectors": []
      },
      "9.2.0": {
        "detectors": []
      },
      "10.1.0": {
        "detectors": []
      },
      "11.1.0": {
        "detectors": []
      },
      "12.0.0": {
        "detectors": []
      }
    }
  },
  "and_qq": {
    "family": "and_qq",
    "versionList": [
      "10.4.0"
    ],
    "versions": {
      "10.4.0": {
        "detectors": []
      }
    }
  },
  "baidu": {
    "family": "baidu",
    "versionList": [
      "7.12.0"
    ],
    "versions": {
      "7.12.0": {
        "detectors": []
      }
    }
  },
  "kaios": {
    "family": "kaios",
    "versionList": [
      "2.5.0"
    ],
    "versions": {
      "2.5.0": {
        "detectors": []
      }
    }
  }
}
(function(undefined) {
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("lt").length
)) {
// Intl.RelativeTimeFormat.~locale.lt
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"locale":"lt","fields":{"year":{"displayName":"metai","relative":{"0":"šiais metais","1":"kitais metais","-1":"praėjusiais metais"},"relativeTime":{"future":{"one":"po {0} metų","few":"po {0} metų","many":"po {0} metų","other":"po {0} metų"},"past":{"one":"prieš {0} metus","few":"prieš {0} metus","many":"prieš {0} metų","other":"prieš {0} metų"}},"relativePeriod":undefined},"year-short":{"displayName":"m.","relative":{"0":"šiais metais","1":"kitais metais","-1":"praėjusiais metais"},"relativeTime":{"future":{"one":"po {0} m.","few":"po {0} m.","many":"po {0} m.","other":"po {0} m."},"past":{"one":"prieš {0} m.","few":"prieš {0} m.","many":"prieš {0} m.","other":"prieš {0} m."}},"relativePeriod":undefined},"year-narrow":{"displayName":"m.","relative":{"0":"šiais metais","1":"kitais metais","-1":"praėjusiais metais"},"relativeTime":{"future":{"one":"po {0} m.","few":"po {0} m.","many":"po {0} m.","other":"po {0} m."},"past":{"one":"prieš {0} m.","few":"prieš {0} m.","many":"prieš {0} m.","other":"prieš {0} m."}},"relativePeriod":undefined},"quarter":{"displayName":"ketvirtis","relative":{"0":"šis ketvirtis","1":"kitas ketvirtis","-1":"praėjęs ketvirtis"},"relativeTime":{"future":{"one":"po {0} ketvirčio","few":"po {0} ketvirčių","many":"po {0} ketvirčio","other":"po {0} ketvirčių"},"past":{"one":"prieš {0} ketvirtį","few":"prieš {0} ketvirčius","many":"prieš {0} ketvirčio","other":"prieš {0} ketvirčių"}},"relativePeriod":undefined},"quarter-short":{"displayName":"ketv.","relative":{"0":"šis ketvirtis","1":"kitas ketvirtis","-1":"praėjęs ketvirtis"},"relativeTime":{"future":{"one":"po {0} ketv.","few":"po {0} ketv.","many":"po {0} ketv.","other":"po {0} ketv."},"past":{"one":"prieš {0} ketv.","few":"prieš {0} ketv.","many":"prieš {0} ketv.","other":"prieš {0} ketv."}},"relativePeriod":undefined},"quarter-narrow":{"displayName":"ketv.","relative":{"0":"šis ketvirtis","1":"kitas ketvirtis","-1":"praėjęs ketvirtis"},"relativeTime":{"future":{"one":"po {0} ketv.","few":"po {0} ketv.","many":"po {0} ketv.","other":"po {0} ketv."},"past":{"one":"prieš {0} ketv.","few":"prieš {0} ketv.","many":"prieš {0} ketv.","other":"prieš {0} ketv."}},"relativePeriod":undefined},"month":{"displayName":"mėnuo","relative":{"0":"šį mėnesį","1":"kitą mėnesį","-1":"praėjusį mėnesį"},"relativeTime":{"future":{"one":"po {0} mėnesio","few":"po {0} mėnesių","many":"po {0} mėnesio","other":"po {0} mėnesių"},"past":{"one":"prieš {0} mėnesį","few":"prieš {0} mėnesius","many":"prieš {0} mėnesio","other":"prieš {0} mėnesių"}},"relativePeriod":undefined},"month-short":{"displayName":"mėn.","relative":{"0":"šį mėnesį","1":"kitą mėnesį","-1":"praėjusį mėnesį"},"relativeTime":{"future":{"one":"po {0} mėn.","few":"po {0} mėn.","many":"po {0} mėn.","other":"po {0} mėn."},"past":{"one":"prieš {0} mėn.","few":"prieš {0} mėn.","many":"prieš {0} mėn.","other":"prieš {0} mėn."}},"relativePeriod":undefined},"month-narrow":{"displayName":"mėn.","relative":{"0":"šį mėnesį","1":"kitą mėnesį","-1":"praėjusį mėnesį"},"relativeTime":{"future":{"one":"po {0} mėn.","few":"po {0} mėn.","many":"po {0} mėn.","other":"po {0} mėn."},"past":{"one":"prieš {0} mėn.","few":"prieš {0} mėn.","many":"prieš {0} mėn.","other":"prieš {0} mėn."}},"relativePeriod":undefined},"week":{"displayName":"savaitė","relative":{"0":"šią savaitę","1":"kitą savaitę","-1":"praėjusią savaitę"},"relativeTime":{"future":{"one":"po {0} savaitės","few":"po {0} savaičių","many":"po {0} savaitės","other":"po {0} savaičių"},"past":{"one":"prieš {0} savaitę","few":"prieš {0} savaites","many":"prieš {0} savaitės","other":"prieš {0} savaičių"}},"relativePeriod":"{0} savaitę"},"week-short":{"displayName":"sav.","relative":{"0":"šią savaitę","1":"kitą savaitę","-1":"praėjusią savaitę"},"relativeTime":{"future":{"one":"po {0} sav.","few":"po {0} sav.","many":"po {0} sav.","other":"po {0} sav."},"past":{"one":"prieš {0} sav.","few":"prieš {0} sav.","many":"prieš {0} sav.","other":"prieš {0} sav."}},"relativePeriod":"{0} savaitę"},"week-narrow":{"displayName":"sav.","relative":{"0":"šią savaitę","1":"kitą savaitę","-1":"praėjusią savaitę"},"relativeTime":{"future":{"one":"po {0} sav.","few":"po {0} sav.","many":"po {0} sav.","other":"po {0} sav."},"past":{"one":"prieš {0} sav.","few":"prieš {0} sav.","many":"prieš {0} sav.","other":"prieš {0} sav."}},"relativePeriod":"{0} savaitę"},"day":{"displayName":"diena","relative":{"0":"šiandien","1":"rytoj","2":"poryt","-2":"užvakar","-1":"vakar"},"relativeTime":{"future":{"one":"po {0} dienos","few":"po {0} dienų","many":"po {0} dienos","other":"po {0} dienų"},"past":{"one":"prieš {0} dieną","few":"prieš {0} dienas","many":"prieš {0} dienos","other":"prieš {0} dienų"}},"relativePeriod":undefined},"day-short":{"displayName":"d.","relative":{"0":"šiandien","1":"rytoj","2":"poryt","-2":"užvakar","-1":"vakar"},"relativeTime":{"future":{"one":"po {0} d.","few":"po {0} d.","many":"po {0} d.","other":"po {0} d."},"past":{"one":"prieš {0} d.","few":"prieš {0} d.","many":"prieš {0} d.","other":"prieš {0} d."}},"relativePeriod":undefined},"day-narrow":{"displayName":"d.","relative":{"0":"šiandien","1":"rytoj","2":"poryt","-2":"užvakar","-1":"vakar"},"relativeTime":{"future":{"one":"po {0} d.","few":"po {0} d.","many":"po {0} d.","other":"po {0} d."},"past":{"one":"prieš {0} d.","few":"prieš {0} d.","many":"prieš {0} d.","other":"prieš {0} d."}},"relativePeriod":undefined},"hour":{"displayName":"valanda","relative":{"0":"šią valandą"},"relativeTime":{"future":{"one":"po {0} valandos","few":"po {0} valandų","many":"po {0} valandos","other":"po {0} valandų"},"past":{"one":"prieš {0} valandą","few":"prieš {0} valandas","many":"prieš {0} valandos","other":"prieš {0} valandų"}},"relativePeriod":undefined},"hour-short":{"displayName":"val.","relative":{"0":"šią valandą"},"relativeTime":{"future":{"one":"po {0} val.","few":"po {0} val.","many":"po {0} val.","other":"po {0} val."},"past":{"one":"prieš {0} val.","few":"prieš {0} val.","many":"prieš {0} val.","other":"prieš {0} val."}},"relativePeriod":undefined},"hour-narrow":{"displayName":"h","relative":{"0":"šią valandą"},"relativeTime":{"future":{"one":"po {0} val.","few":"po {0} val.","many":"po {0} val.","other":"po {0} val."},"past":{"one":"prieš {0} val.","few":"prieš {0} val.","many":"prieš {0} val.","other":"prieš {0} val."}},"relativePeriod":undefined},"minute":{"displayName":"minutė","relative":{"0":"šią minutę"},"relativeTime":{"future":{"one":"po {0} minutės","few":"po {0} minučių","many":"po {0} minutės","other":"po {0} minučių"},"past":{"one":"prieš {0} minutę","few":"prieš {0} minutes","many":"prieš {0} minutės","other":"prieš {0} minučių"}},"relativePeriod":undefined},"minute-short":{"displayName":"min.","relative":{"0":"šią minutę"},"relativeTime":{"future":{"one":"po {0} min.","few":"po {0} min.","many":"po {0} min.","other":"po {0} min."},"past":{"one":"prieš {0} min.","few":"prieš {0} min.","many":"prieš {0} min.","other":"prieš {0} min."}},"relativePeriod":undefined},"minute-narrow":{"displayName":"min.","relative":{"0":"šią minutę"},"relativeTime":{"future":{"one":"po {0} min.","few":"po {0} min.","many":"po {0} min.","other":"po {0} min."},"past":{"one":"prieš {0} min.","few":"prieš {0} min.","many":"prieš {0} min.","other":"prieš {0} min."}},"relativePeriod":undefined},"second":{"displayName":"sekundė","relative":{"0":"dabar"},"relativeTime":{"future":{"one":"po {0} sekundės","few":"po {0} sekundžių","many":"po {0} sekundės","other":"po {0} sekundžių"},"past":{"one":"prieš {0} sekundę","few":"prieš {0} sekundes","many":"prieš {0} sekundės","other":"prieš {0} sekundžių"}},"relativePeriod":undefined},"second-short":{"displayName":"sek.","relative":{"0":"dabar"},"relativeTime":{"future":{"one":"po {0} sek.","few":"po {0} sek.","many":"po {0} sek.","other":"po {0} sek."},"past":{"one":"prieš {0} sek.","few":"prieš {0} sek.","many":"prieš {0} sek.","other":"prieš {0} sek."}},"relativePeriod":undefined},"second-narrow":{"displayName":"s","relative":{"0":"dabar"},"relativeTime":{"future":{"one":"po {0} s","few":"po {0} s","many":"po {0} s","other":"po {0} s"},"past":{"one":"prieš {0} s","few":"prieš {0} s","many":"prieš {0} s","other":"prieš {0} s"}},"relativePeriod":undefined}}})
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

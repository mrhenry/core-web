(function(undefined) {
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("ro").length
)) {
// Intl.RelativeTimeFormat.~locale.ro
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"locale":"ro","fields":{"year":{"displayName":"an","relative":{"0":"anul acesta","1":"anul viitor","-1":"anul trecut"},"relativeTime":{"future":{"one":"peste {0} an","few":"peste {0} ani","other":"peste {0} de ani"},"past":{"one":"acum {0} an","few":"acum {0} ani","other":"acum {0} de ani"}},"relativePeriod":undefined},"year-short":{"displayName":"an","relative":{"0":"anul acesta","1":"anul viitor","-1":"anul trecut"},"relativeTime":{"future":{"one":"peste {0} an","few":"peste {0} ani","other":"peste {0} de ani"},"past":{"one":"acum {0} an","few":"acum {0} ani","other":"acum {0} de ani"}},"relativePeriod":undefined},"year-narrow":{"displayName":"an","relative":{"0":"anul acesta","1":"anul viitor","-1":"anul trecut"},"relativeTime":{"future":{"one":"+{0} an","few":"+{0} ani","other":"+{0} ani"},"past":{"one":"-{0} an","few":"-{0} ani","other":"-{0} ani"}},"relativePeriod":undefined},"quarter":{"displayName":"trimestru","relative":{"0":"trimestrul acesta","1":"trimestrul viitor","-1":"trimestrul trecut"},"relativeTime":{"future":{"one":"peste {0} trimestru","few":"peste {0} trimestre","other":"peste {0} de trimestre"},"past":{"one":"acum {0} trimestru","few":"acum {0} trimestre","other":"acum {0} de trimestre"}},"relativePeriod":undefined},"quarter-short":{"displayName":"trim.","relative":{"0":"trim. acesta","1":"trim. viitor","-1":"trim. trecut"},"relativeTime":{"future":{"one":"peste {0} trim.","few":"peste {0} trim.","other":"peste {0} trim."},"past":{"one":"acum {0} trim.","few":"acum {0} trim.","other":"acum {0} trim."}},"relativePeriod":undefined},"quarter-narrow":{"displayName":"trim.","relative":{"0":"trim. acesta","1":"trim. viitor","-1":"trim. trecut"},"relativeTime":{"future":{"one":"+{0} trim.","few":"+{0} trim.","other":"+{0} trim."},"past":{"one":"-{0} trim.","few":"-{0} trim.","other":"-{0} trim."}},"relativePeriod":undefined},"month":{"displayName":"lună","relative":{"0":"luna aceasta","1":"luna viitoare","-1":"luna trecută"},"relativeTime":{"future":{"one":"peste {0} lună","few":"peste {0} luni","other":"peste {0} de luni"},"past":{"one":"acum {0} lună","few":"acum {0} luni","other":"acum {0} de luni"}},"relativePeriod":undefined},"month-short":{"displayName":"lună","relative":{"0":"luna aceasta","1":"luna viitoare","-1":"luna trecută"},"relativeTime":{"future":{"one":"peste {0} lună","few":"peste {0} luni","other":"peste {0} luni"},"past":{"one":"acum {0} lună","few":"acum {0} luni","other":"acum {0} luni"}},"relativePeriod":undefined},"month-narrow":{"displayName":"lună","relative":{"0":"luna aceasta","1":"luna viitoare","-1":"luna trecută"},"relativeTime":{"future":{"one":"+{0} lună","few":"+{0} luni","other":"+{0} luni"},"past":{"one":"-{0} lună","few":"-{0} luni","other":"-{0} luni"}},"relativePeriod":undefined},"week":{"displayName":"săptămână","relative":{"0":"săptămâna aceasta","1":"săptămâna viitoare","-1":"săptămâna trecută"},"relativeTime":{"future":{"one":"peste {0} săptămână","few":"peste {0} săptămâni","other":"peste {0} de săptămâni"},"past":{"one":"acum {0} săptămână","few":"acum {0} săptămâni","other":"acum {0} de săptămâni"}},"relativePeriod":"săptămâna cu {0}"},"week-short":{"displayName":"săpt.","relative":{"0":"săpt. aceasta","1":"săpt. viitoare","-1":"săpt. trecută"},"relativeTime":{"future":{"one":"peste {0} săpt.","few":"peste {0} săpt.","other":"peste {0} săpt."},"past":{"one":"acum {0} săpt.","few":"acum {0} săpt.","other":"acum {0} săpt."}},"relativePeriod":"săpt. cu {0}"},"week-narrow":{"displayName":"săpt.","relative":{"0":"săptămâna aceasta","1":"săpt. viitoare","-1":"săpt. trecută"},"relativeTime":{"future":{"one":"+{0} săpt.","few":"+{0} săpt.","other":"+{0} săpt."},"past":{"one":"-{0} săpt.","few":"-{0} săpt.","other":"-{0} săpt."}},"relativePeriod":"săpt. cu {0}"},"day":{"displayName":"zi","relative":{"0":"azi","1":"mâine","2":"poimâine","-2":"alaltăieri","-1":"ieri"},"relativeTime":{"future":{"one":"peste {0} zi","few":"peste {0} zile","other":"peste {0} de zile"},"past":{"one":"acum {0} zi","few":"acum {0} zile","other":"acum {0} de zile"}},"relativePeriod":undefined},"day-short":{"displayName":"zi","relative":{"0":"azi","1":"mâine","2":"poimâine","-2":"alaltăieri","-1":"ieri"},"relativeTime":{"future":{"one":"peste {0} zi","few":"peste {0} zile","other":"peste {0} de zile"},"past":{"one":"acum {0} zi","few":"acum {0} zile","other":"acum {0} de zile"}},"relativePeriod":undefined},"day-narrow":{"displayName":"zi","relative":{"0":"azi","1":"mâine","2":"poimâine","-2":"alaltăieri","-1":"ieri"},"relativeTime":{"future":{"one":"+{0} zi","few":"+{0} zile","other":"+{0} zile"},"past":{"one":"-{0} zi","few":"-{0} zile","other":"-{0} zile"}},"relativePeriod":undefined},"hour":{"displayName":"oră","relative":{"0":"ora aceasta"},"relativeTime":{"future":{"one":"peste {0} oră","few":"peste {0} ore","other":"peste {0} de ore"},"past":{"one":"acum {0} oră","few":"acum {0} ore","other":"acum {0} de ore"}},"relativePeriod":undefined},"hour-short":{"displayName":"h","relative":{"0":"ora aceasta"},"relativeTime":{"future":{"one":"peste {0} h","few":"peste {0} h","other":"peste {0} h"},"past":{"one":"acum {0} h","few":"acum {0} h","other":"acum {0} h"}},"relativePeriod":undefined},"hour-narrow":{"displayName":"h","relative":{"0":"ora aceasta"},"relativeTime":{"future":{"one":"+{0} h","few":"+{0} h","other":"+{0} h"},"past":{"one":"-{0} h","few":"-{0} h","other":"-{0} h"}},"relativePeriod":undefined},"minute":{"displayName":"minut","relative":{"0":"minutul acesta"},"relativeTime":{"future":{"one":"peste {0} minut","few":"peste {0} minute","other":"peste {0} de minute"},"past":{"one":"acum {0} minut","few":"acum {0} minute","other":"acum {0} de minute"}},"relativePeriod":undefined},"minute-short":{"displayName":"min.","relative":{"0":"minutul acesta"},"relativeTime":{"future":{"one":"peste {0} min.","few":"peste {0} min.","other":"peste {0} min."},"past":{"one":"acum {0} min.","few":"acum {0} min.","other":"acum {0} min."}},"relativePeriod":undefined},"minute-narrow":{"displayName":"m","relative":{"0":"minutul acesta"},"relativeTime":{"future":{"one":"+{0} m","few":"+{0} m","other":"+{0} m"},"past":{"one":"-{0} m","few":"-{0} m","other":"-{0} m"}},"relativePeriod":undefined},"second":{"displayName":"secundă","relative":{"0":"acum"},"relativeTime":{"future":{"one":"peste {0} secundă","few":"peste {0} secunde","other":"peste {0} de secunde"},"past":{"one":"acum {0} secundă","few":"acum {0} secunde","other":"acum {0} de secunde"}},"relativePeriod":undefined},"second-short":{"displayName":"sec.","relative":{"0":"acum"},"relativeTime":{"future":{"one":"peste {0} sec.","few":"peste {0} sec.","other":"peste {0} sec."},"past":{"one":"acum {0} sec.","few":"acum {0} sec.","other":"acum {0} sec."}},"relativePeriod":undefined},"second-narrow":{"displayName":"s","relative":{"0":"acum"},"relativeTime":{"future":{"one":"+{0} s","few":"+{0} s","other":"+{0} s"},"past":{"one":"-{0} s","few":"-{0} s","other":"-{0} s"}},"relativePeriod":undefined}}},{"locale":"ro-MD","parentLocale":"ro"})
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

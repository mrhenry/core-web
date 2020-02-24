(function(undefined) {
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("nb").length
)) {
// Intl.RelativeTimeFormat.~locale.nb
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"locale":"nb","fields":{"year":{"displayName":"år","relative":{"0":"i år","1":"neste år","-1":"i fjor"},"relativeTime":{"future":{"one":"om {0} år","other":"om {0} år"},"past":{"one":"for {0} år siden","other":"for {0} år siden"}},"relativePeriod":undefined},"year-short":{"displayName":"år","relative":{"0":"i år","1":"neste år","-1":"i fjor"},"relativeTime":{"future":{"one":"om {0} år","other":"om {0} år"},"past":{"one":"for {0} år siden","other":"for {0} år siden"}},"relativePeriod":undefined},"year-narrow":{"displayName":"år","relative":{"0":"i år","1":"neste år","-1":"i fjor"},"relativeTime":{"future":{"one":"+{0} år","other":"+{0} år"},"past":{"one":"–{0} år","other":"–{0} år"}},"relativePeriod":undefined},"quarter":{"displayName":"kvartal","relative":{"0":"dette kvartalet","1":"neste kvartal","-1":"forrige kvartal"},"relativeTime":{"future":{"one":"om {0} kvartal","other":"om {0} kvartaler"},"past":{"one":"for {0} kvartal siden","other":"for {0} kvartaler siden"}},"relativePeriod":undefined},"quarter-short":{"displayName":"kv.","relative":{"0":"dette kv.","1":"neste kv.","-1":"forrige kv."},"relativeTime":{"future":{"one":"om {0} kv.","other":"om {0} kv."},"past":{"one":"for {0} kv. siden","other":"for {0} kv. siden"}},"relativePeriod":undefined},"quarter-narrow":{"displayName":"kv.","relative":{"0":"dette kv.","1":"neste kv.","-1":"forrige kv."},"relativeTime":{"future":{"one":"+{0} kv.","other":"+{0} kv."},"past":{"one":"–{0} kv.","other":"–{0} kv."}},"relativePeriod":undefined},"month":{"displayName":"måned","relative":{"0":"denne måneden","1":"neste måned","-1":"forrige måned"},"relativeTime":{"future":{"one":"om {0} måned","other":"om {0} måneder"},"past":{"one":"for {0} måned siden","other":"for {0} måneder siden"}},"relativePeriod":undefined},"month-short":{"displayName":"mnd.","relative":{"0":"denne md.","1":"neste md.","-1":"forrige md."},"relativeTime":{"future":{"one":"om {0} md.","other":"om {0} md."},"past":{"one":"for {0} md. siden","other":"for {0} md. siden"}},"relativePeriod":undefined},"month-narrow":{"displayName":"md.","relative":{"0":"denne md.","1":"neste md.","-1":"forrige md."},"relativeTime":{"future":{"one":"+{0} md.","other":"+{0} md."},"past":{"one":"-{0} md.","other":"-{0} md."}},"relativePeriod":undefined},"week":{"displayName":"uke","relative":{"0":"denne uken","1":"neste uke","-1":"forrige uke"},"relativeTime":{"future":{"one":"om {0} uke","other":"om {0} uker"},"past":{"one":"for {0} uke siden","other":"for {0} uker siden"}},"relativePeriod":"uken som inneholder {0}"},"week-short":{"displayName":"uke","relative":{"0":"denne uken","1":"neste uke","-1":"forrige uke"},"relativeTime":{"future":{"one":"om {0} u.","other":"om {0} u."},"past":{"one":"for {0} u. siden","other":"for {0} u. siden"}},"relativePeriod":"uken med {0}"},"week-narrow":{"displayName":"u.","relative":{"0":"denne uken","1":"neste uke","-1":"forrige uke"},"relativeTime":{"future":{"one":"+{0} u.","other":"+{0} u."},"past":{"one":"-{0} u.","other":"-{0} u."}},"relativePeriod":"u. {0}"},"day":{"displayName":"dag","relative":{"0":"i dag","1":"i morgen","2":"i overmorgen","-2":"i forgårs","-1":"i går"},"relativeTime":{"future":{"one":"om {0} døgn","other":"om {0} døgn"},"past":{"one":"for {0} døgn siden","other":"for {0} døgn siden"}},"relativePeriod":undefined},"day-short":{"displayName":"dag","relative":{"0":"i dag","1":"i morgen","2":"i overmorgen","-2":"i forgårs","-1":"i går"},"relativeTime":{"future":{"one":"om {0} d.","other":"om {0} d."},"past":{"one":"for {0} d. siden","other":"for {0} d. siden"}},"relativePeriod":undefined},"day-narrow":{"displayName":"d.","relative":{"0":"i dag","1":"i morgen","2":"+2 d.","-2":"-2 d.","-1":"i går"},"relativeTime":{"future":{"one":"+{0} d.","other":"+{0} d."},"past":{"one":"-{0} d.","other":"-{0} d."}},"relativePeriod":undefined},"hour":{"displayName":"time","relative":{"0":"denne timen"},"relativeTime":{"future":{"one":"om {0} time","other":"om {0} timer"},"past":{"one":"for {0} time siden","other":"for {0} timer siden"}},"relativePeriod":undefined},"hour-short":{"displayName":"t","relative":{"0":"denne timen"},"relativeTime":{"future":{"one":"om {0} t","other":"om {0} t"},"past":{"one":"for {0} t siden","other":"for {0} t siden"}},"relativePeriod":undefined},"hour-narrow":{"displayName":"t","relative":{"0":"denne timen"},"relativeTime":{"future":{"one":"+{0} t","other":"+{0} t"},"past":{"one":"-{0} t","other":"-{0} t"}},"relativePeriod":undefined},"minute":{"displayName":"minutt","relative":{"0":"dette minuttet"},"relativeTime":{"future":{"one":"om {0} minutt","other":"om {0} minutter"},"past":{"one":"for {0} minutt siden","other":"for {0} minutter siden"}},"relativePeriod":undefined},"minute-short":{"displayName":"min","relative":{"0":"dette minuttet"},"relativeTime":{"future":{"one":"om {0} min","other":"om {0} min"},"past":{"one":"for {0} min siden","other":"for {0} min siden"}},"relativePeriod":undefined},"minute-narrow":{"displayName":"m","relative":{"0":"dette minuttet"},"relativeTime":{"future":{"one":"+{0} min","other":"+{0} min"},"past":{"one":"-{0} min","other":"-{0} min"}},"relativePeriod":undefined},"second":{"displayName":"sekund","relative":{"0":"nå"},"relativeTime":{"future":{"one":"om {0} sekund","other":"om {0} sekunder"},"past":{"one":"for {0} sekund siden","other":"for {0} sekunder siden"}},"relativePeriod":undefined},"second-short":{"displayName":"sek","relative":{"0":"nå"},"relativeTime":{"future":{"one":"om {0} sek","other":"om {0} sek"},"past":{"one":"for {0} sek siden","other":"for {0} sek siden"}},"relativePeriod":undefined},"second-narrow":{"displayName":"s","relative":{"0":"nå"},"relativeTime":{"future":{"one":"+{0} s","other":"+{0} s"},"past":{"one":"-{0} s","other":"-{0} s"}},"relativePeriod":undefined}}},{"locale":"nb-SJ","parentLocale":"nb"})
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

(function(undefined) {
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("gd").length
)) {
// Intl.RelativeTimeFormat.~locale.gd
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"locale":"gd","fields":{"year":{"displayName":"bliadhna","relative":{"0":"am bliadhna","1":"an ath-bhliadhna","-2":"a-bhòn-uiridh","-1":"an-uiridh"},"relativeTime":{"future":{"one":"an ceann {0} bhliadhna","two":"an ceann {0} bhliadhna","few":"an ceann {0} bliadhnaichean","other":"an ceann {0} bliadhna"},"past":{"one":"{0} bhliadhna air ais","two":"{0} bhliadhna air ais","few":"{0} bhliadhnaichean air ais","other":"{0} bliadhna air ais"}},"relativePeriod":undefined},"year-short":{"displayName":"blia.","relative":{"0":"am bliadhna","1":"an ath-bhliadhna","-2":"a-bhòn-uiridh","-1":"an-uiridh"},"relativeTime":{"future":{"one":"an {0} bhlia.","two":"an {0} bhlia.","few":"an {0} blia.","other":"an {0} blia."},"past":{"one":"o {0} bhlia.","two":"o {0} bhlia.","few":"o {0} blia.","other":"o {0} blia."}},"relativePeriod":undefined},"year-narrow":{"displayName":"bl.","relative":{"0":"am bl.","1":"an ath-bhl.","-2":"a-bh-uir.","-1":"an-uir."},"relativeTime":{"future":{"one":"+{0} bhl.","two":"+{0} bhl.","few":"+{0} bl.","other":"+{0} bl."},"past":{"one":"-{0} bhl.","two":"-{0} bhl.","few":"-{0} bl.","other":"-{0} bl."}},"relativePeriod":undefined},"quarter":{"displayName":"cairteal","relative":{"0":"an cairteal seo","1":"an ath-chairteal","-1":"an cairteal seo chaidh"},"relativeTime":{"future":{"one":"an ceann {0} chairteil","two":"an ceann {0} chairteil","few":"an ceann {0} cairtealan","other":"an ceann {0} cairteil"},"past":{"one":"o chionn {0} chairteil","two":"o chionn {0} chairteil","few":"o chionn {0} cairtealan","other":"o chionn {0} cairteil"}},"relativePeriod":undefined},"quarter-short":{"displayName":"cairt.","relative":{"0":"an cairt. seo","1":"an ath-chairt.","-1":"an cairt. sa chaidh"},"relativeTime":{"future":{"one":"an {0} chairt.","two":"an {0} chairt.","few":"an {0} cairt.","other":"an {0} cairt."},"past":{"one":"o {0} chairt.","two":"o {0} chairt.","few":"o {0} cairt.","other":"o {0} cairt."}},"relativePeriod":undefined},"quarter-narrow":{"displayName":"c.","relative":{"0":"an c. seo","1":"ath-ch.","-1":"c. ch."},"relativeTime":{"future":{"one":"+{0} c.","two":"+{0} c.","few":"+{0} c.","other":"+{0} c."},"past":{"one":"-{0} c.","two":"-{0} c.","few":"-{0} c.","other":"-{0} c."}},"relativePeriod":undefined},"month":{"displayName":"mìos","relative":{"0":"am mìos seo","1":"an ath-mhìos","-1":"am mìos seo chaidh"},"relativeTime":{"future":{"one":"an ceann {0} mhìosa","two":"an ceann {0} mhìosa","few":"an ceann {0} mìosan","other":"an ceann {0} mìosa"},"past":{"one":"{0} mhìos air ais","two":"{0} mhìos air ais","few":"{0} mìosan air ais","other":"{0} mìos air ais"}},"relativePeriod":undefined},"month-short":{"displayName":"mìos","relative":{"0":"am mìos seo","1":"an ath-mhìos","-1":"am mìos sa chaidh"},"relativeTime":{"future":{"one":"an {0} mhìos.","two":"an {0} mhìos.","few":"an {0} mìos.","other":"an {0} mìos."},"past":{"one":"o {0} mhìos.","two":"o {0} mhìos.","few":"o {0} mìos.","other":"o {0} mìos."}},"relativePeriod":undefined},"month-narrow":{"displayName":"mì.","relative":{"0":"am mì. seo","1":"ath-mhì.","-1":"mì. ch."},"relativeTime":{"future":{"one":"+{0} mhì.","two":"+{0} mhì.","few":"+{0} mì.","other":"+{0} mì."},"past":{"one":"-{0} mhì.","two":"-{0} mhì.","few":"-{0} mì.","other":"-{0} mì."}},"relativePeriod":undefined},"week":{"displayName":"seachdain","relative":{"0":"an t-seachdain seo","1":"an ath-sheachdain","-1":"an t-seachdain seo chaidh"},"relativeTime":{"future":{"one":"an ceann {0} seachdain","two":"an ceann {0} sheachdain","few":"an ceann {0} seachdainean","other":"an ceann {0} seachdain"},"past":{"one":"{0} seachdain air ais","two":"{0} sheachdain air ais","few":"{0} seachdainean air ais","other":"{0} seachdain air ais"}},"relativePeriod":"an t-seachdain aig {0}"},"week-short":{"displayName":"seachd.","relative":{"0":"an t-seachd. seo","1":"an ath-sheachd.","-1":"seachd. sa chaidh"},"relativeTime":{"future":{"one":"an {0} sheachd.","two":"an {0} sheachd.","few":"an {0} seachd.","other":"an {0} seachd."},"past":{"one":"o {0} sheachd.","two":"o {0} sheachd.","few":"o {0} seachd.","other":"o {0} seachd."}},"relativePeriod":"an t-seachdain aig {0}"},"week-narrow":{"displayName":"sn.","relative":{"0":"an t-sn. seo","1":"ath-shn.","-1":"sn. ch."},"relativeTime":{"future":{"one":"+{0} sn.","two":"+{0} sn.","few":"+{0} sn.","other":"+{0} sn."},"past":{"one":"-{0} sn.","two":"-{0} sn.","few":"-{0} sn.","other":"-{0} sn."}},"relativePeriod":"an t-seachdain aig {0}"},"day":{"displayName":"latha","relative":{"0":"an-diugh","1":"a-màireach","2":"an-earar","3":"an-eararais","-2":"a-bhòin-dè","-1":"an-dè"},"relativeTime":{"future":{"one":"an ceann {0} latha","two":"an ceann {0} latha","few":"an ceann {0} làithean","other":"an ceann {0} latha"},"past":{"one":"{0} latha air ais","two":"{0} latha air ais","few":"{0} làithean air ais","other":"{0} latha air ais"}},"relativePeriod":undefined},"day-short":{"displayName":"là","relative":{"0":"an-diugh","1":"a-màireach","2":"an-earar","3":"an-eararais","-2":"a-bhòin-dè","-1":"an-dè"},"relativeTime":{"future":{"one":"an {0} là","two":"an {0} là","few":"an {0} là.","other":"an {0} là"},"past":{"one":"o {0} là","two":"o {0} là","few":"o {0} là.","other":"o {0} là"}},"relativePeriod":undefined},"day-narrow":{"displayName":"là","relative":{"0":"an-diugh","1":"a-màireach","2":"an-earar","3":"an-eararais","-2":"a-bhòin-dè","-1":"an-dè"},"relativeTime":{"future":{"one":"+{0} là","two":"+{0} là","few":"+{0} là","other":"+{0} là"},"past":{"one":"-{0} là","two":"-{0} là","few":"-{0} là","other":"-{0} là"}},"relativePeriod":undefined},"hour":{"displayName":"uair a thìde","relative":{"0":"am broinn uair a thìde"},"relativeTime":{"future":{"one":"an ceann {0} uair a thìde","two":"an ceann {0} uair a thìde","few":"an ceann {0} uairean a thìde","other":"an ceann {0} uair a thìde"},"past":{"one":"{0} uair a thìde air ais","two":"{0} uair a thìde air ais","few":"{0} uairean a thìde air ais","other":"{0} uair a thìde air ais"}},"relativePeriod":undefined},"hour-short":{"displayName":"uair","relative":{"0":"am broinn uair"},"relativeTime":{"future":{"one":"an {0} uair","two":"an {0} uair","few":"an {0} uair.","other":"an {0} uair"},"past":{"one":"o {0} uair","two":"o {0} uair","few":"o {0} uair.","other":"o {0} uair"}},"relativePeriod":undefined},"hour-narrow":{"displayName":"u","relative":{"0":"san uair"},"relativeTime":{"future":{"one":"+{0} u.","two":"+{0} u.","few":"+{0} u.","other":"+{0} u."},"past":{"one":"-{0} u.","two":"-{0} u.","few":"-{0} u.","other":"-{0} u."}},"relativePeriod":undefined},"minute":{"displayName":"mionaid","relative":{"0":"am broinn mionaid"},"relativeTime":{"future":{"one":"an ceann {0} mhionaid","two":"an ceann {0} mhionaid","few":"an ceann {0} mionaidean","other":"an ceann {0} mionaid"},"past":{"one":"{0} mhionaid air ais","two":"{0} mhionaid air ais","few":"{0} mionaidean air ais","other":"{0} mionaid air ais"}},"relativePeriod":undefined},"minute-short":{"displayName":"mion.","relative":{"0":"am broinn mion."},"relativeTime":{"future":{"one":"an {0} mhion.","two":"an {0} mhion.","few":"an {0} mion.","other":"an {0} mion."},"past":{"one":"o {0} mhion.","two":"o {0} mhion.","few":"o {0} mion.","other":"o {0} mion."}},"relativePeriod":undefined},"minute-narrow":{"displayName":"m","relative":{"0":"sa mhion."},"relativeTime":{"future":{"one":"+{0} m","two":"+{0} m","few":"+{0} m","other":"+{0} m"},"past":{"one":"-{0} m","two":"-{0} m","few":"-{0} m","other":"-{0} m"}},"relativePeriod":undefined},"second":{"displayName":"diog","relative":{"0":"an-dràsta"},"relativeTime":{"future":{"one":"an ceann {0} diog","two":"an ceann {0} dhiog","few":"an ceann {0} diogan","other":"an ceann {0} diog"},"past":{"one":"{0} diog air ais","two":"{0} dhiog air ais","few":"{0} diogan air ais","other":"{0} diog air ais"}},"relativePeriod":undefined},"second-short":{"displayName":"diog","relative":{"0":"an-dràsta"},"relativeTime":{"future":{"one":"an {0} diog","two":"an {0} dhiog","few":"an {0} diog.","other":"an {0} diog"},"past":{"one":"o {0} diog","two":"o {0} dhiog","few":"o {0} diog.","other":"o {0} diog"}},"relativePeriod":undefined},"second-narrow":{"displayName":"d","relative":{"0":"an-dràsta"},"relativeTime":{"future":{"one":"+{0} d","two":"+{0} d","few":"+{0} d","other":"+{0} d"},"past":{"one":"-{0} d","two":"-{0} d","few":"-{0} d","other":"-{0} d"}},"relativePeriod":undefined}}})
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

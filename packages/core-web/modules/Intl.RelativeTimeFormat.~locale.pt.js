(function(undefined) {
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("pt").length
)) {
// Intl.RelativeTimeFormat.~locale.pt
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"locale":"pt","fields":{"year":{"displayName":"ano","relative":{"0":"este ano","1":"próximo ano","-1":"ano passado"},"relativeTime":{"future":{"one":"em {0} ano","other":"em {0} anos"},"past":{"one":"há {0} ano","other":"há {0} anos"}},"relativePeriod":undefined},"year-short":{"displayName":"ano","relative":{"0":"este ano","1":"próximo ano","-1":"ano passado"},"relativeTime":{"future":{"one":"em {0} ano","other":"em {0} anos"},"past":{"one":"há {0} ano","other":"há {0} anos"}},"relativePeriod":undefined},"year-narrow":{"displayName":"ano","relative":{"0":"este ano","1":"próximo ano","-1":"ano passado"},"relativeTime":{"future":{"one":"em {0} ano","other":"em {0} anos"},"past":{"one":"há {0} ano","other":"{0} anos atrás"}},"relativePeriod":undefined},"quarter":{"displayName":"trimestre","relative":{"0":"este trimestre","1":"próximo trimestre","-1":"último trimestre"},"relativeTime":{"future":{"one":"em {0} trimestre","other":"em {0} trimestres"},"past":{"one":"há {0} trimestre","other":"há {0} trimestres"}},"relativePeriod":undefined},"quarter-short":{"displayName":"trim.","relative":{"0":"este trimestre","1":"próximo trimestre","-1":"último trimestre"},"relativeTime":{"future":{"one":"em {0} trim.","other":"em {0} trim."},"past":{"one":"há {0} trim.","other":"{0} trim. atrás"}},"relativePeriod":undefined},"quarter-narrow":{"displayName":"trim.","relative":{"0":"este trimestre","1":"próximo trimestre","-1":"último trimestre"},"relativeTime":{"future":{"one":"em {0} trim.","other":"em {0} trim."},"past":{"one":"há {0} trim.","other":"há {0} trim."}},"relativePeriod":undefined},"month":{"displayName":"mês","relative":{"0":"este mês","1":"próximo mês","-1":"mês passado"},"relativeTime":{"future":{"one":"em {0} mês","other":"em {0} meses"},"past":{"one":"há {0} mês","other":"há {0} meses"}},"relativePeriod":undefined},"month-short":{"displayName":"mês","relative":{"0":"este mês","1":"próximo mês","-1":"mês passado"},"relativeTime":{"future":{"one":"em {0} mês","other":"em {0} meses"},"past":{"one":"há {0} mês","other":"há {0} meses"}},"relativePeriod":undefined},"month-narrow":{"displayName":"mês","relative":{"0":"este mês","1":"próximo mês","-1":"mês passado"},"relativeTime":{"future":{"one":"em {0} mês","other":"em {0} meses"},"past":{"one":"há {0} mês","other":"há {0} meses"}},"relativePeriod":undefined},"week":{"displayName":"semana","relative":{"0":"esta semana","1":"próxima semana","-1":"semana passada"},"relativeTime":{"future":{"one":"em {0} semana","other":"em {0} semanas"},"past":{"one":"há {0} semana","other":"há {0} semanas"}},"relativePeriod":"a semana de {0}"},"week-short":{"displayName":"sem.","relative":{"0":"esta semana","1":"próxima semana","-1":"semana passada"},"relativeTime":{"future":{"one":"em {0} sem.","other":"em {0} sem."},"past":{"one":"há {0} sem.","other":"há {0} sem."}},"relativePeriod":"a semana de {0}"},"week-narrow":{"displayName":"sem.","relative":{"0":"esta semana","1":"próxima semana","-1":"semana passada"},"relativeTime":{"future":{"one":"em {0} sem.","other":"em {0} sem."},"past":{"one":"há {0} sem.","other":"há {0} sem."}},"relativePeriod":"a semana de {0}"},"day":{"displayName":"dia","relative":{"0":"hoje","1":"amanhã","2":"depois de amanhã","-2":"anteontem","-1":"ontem"},"relativeTime":{"future":{"one":"em {0} dia","other":"em {0} dias"},"past":{"one":"há {0} dia","other":"há {0} dias"}},"relativePeriod":undefined},"day-short":{"displayName":"dia","relative":{"0":"hoje","1":"amanhã","2":"depois de amanhã","-2":"anteontem","-1":"ontem"},"relativeTime":{"future":{"one":"em {0} dia","other":"em {0} dias"},"past":{"one":"há {0} dia","other":"há {0} dias"}},"relativePeriod":undefined},"day-narrow":{"displayName":"dia","relative":{"0":"hoje","1":"amanhã","2":"depois de amanhã","-2":"anteontem","-1":"ontem"},"relativeTime":{"future":{"one":"em {0} dia","other":"em {0} dias"},"past":{"one":"há {0} dia","other":"há {0} dias"}},"relativePeriod":undefined},"hour":{"displayName":"hora","relative":{"0":"esta hora"},"relativeTime":{"future":{"one":"em {0} hora","other":"em {0} horas"},"past":{"one":"há {0} hora","other":"há {0} horas"}},"relativePeriod":undefined},"hour-short":{"displayName":"h","relative":{"0":"esta hora"},"relativeTime":{"future":{"one":"em {0} h","other":"em {0} h"},"past":{"one":"há {0} h","other":"há {0} h"}},"relativePeriod":undefined},"hour-narrow":{"displayName":"h","relative":{"0":"esta hora"},"relativeTime":{"future":{"one":"em {0} h","other":"em {0} h"},"past":{"one":"há {0} h","other":"há {0} h"}},"relativePeriod":undefined},"minute":{"displayName":"minuto","relative":{"0":"este minuto"},"relativeTime":{"future":{"one":"em {0} minuto","other":"em {0} minutos"},"past":{"one":"há {0} minuto","other":"há {0} minutos"}},"relativePeriod":undefined},"minute-short":{"displayName":"min.","relative":{"0":"este minuto"},"relativeTime":{"future":{"one":"em {0} min.","other":"em {0} min."},"past":{"one":"há {0} min.","other":"há {0} min."}},"relativePeriod":undefined},"minute-narrow":{"displayName":"min.","relative":{"0":"este minuto"},"relativeTime":{"future":{"one":"em {0} min.","other":"em {0} min."},"past":{"one":"há {0} min.","other":"há {0} min."}},"relativePeriod":undefined},"second":{"displayName":"segundo","relative":{"0":"agora"},"relativeTime":{"future":{"one":"em {0} segundo","other":"em {0} segundos"},"past":{"one":"há {0} segundo","other":"há {0} segundos"}},"relativePeriod":undefined},"second-short":{"displayName":"seg.","relative":{"0":"agora"},"relativeTime":{"future":{"one":"em {0} seg.","other":"em {0} seg."},"past":{"one":"há {0} seg.","other":"há {0} seg."}},"relativePeriod":undefined},"second-narrow":{"displayName":"seg.","relative":{"0":"agora"},"relativeTime":{"future":{"one":"em {0} seg.","other":"em {0} seg."},"past":{"one":"há {0} seg.","other":"há {0} seg."}},"relativePeriod":undefined}}},{"locale":"pt-AO","parentLocale":"pt-PT"},{"locale":"pt-PT","parentLocale":"pt","fields":{"year":{"displayName":"ano","relative":{"0":"este ano","1":"próximo ano","-1":"ano passado"},"relativeTime":{"future":{"one":"dentro de {0} ano","other":"dentro de {0} anos"},"past":{"one":"há {0} ano","other":"há {0} anos"}},"relativePeriod":undefined},"year-short":{"displayName":"ano","relative":{"0":"este ano","1":"próximo ano","-1":"ano passado"},"relativeTime":{"future":{"one":"dentro de {0} ano","other":"dentro de {0} anos"},"past":{"one":"há {0} ano","other":"há {0} anos"}},"relativePeriod":undefined},"year-narrow":{"displayName":"ano","relative":{"0":"este ano","1":"próximo ano","-1":"ano passado"},"relativeTime":{"future":{"one":"+{0} ano","other":"+{0} anos"},"past":{"one":"-{0} ano","other":"-{0} anos"}},"relativePeriod":undefined},"quarter":{"displayName":"trimestre","relative":{"0":"este trimestre","1":"próximo trimestre","-1":"trimestre passado"},"relativeTime":{"future":{"one":"dentro de {0} trimestre","other":"dentro de {0} trimestres"},"past":{"one":"há {0} trimestre","other":"há {0} trimestres"}},"relativePeriod":undefined},"quarter-short":{"displayName":"trim.","relative":{"0":"este trim.","1":"próximo trim.","-1":"trim. passado"},"relativeTime":{"future":{"one":"dentro de {0} trim.","other":"dentro de {0} trim."},"past":{"one":"há {0} trim.","other":"há {0} trim."}},"relativePeriod":undefined},"quarter-narrow":{"displayName":"trim.","relative":{"0":"este trim.","1":"próximo trim.","-1":"trim. passado"},"relativeTime":{"future":{"one":"+{0} trim.","other":"+{0} trim."},"past":{"one":"-{0} trim.","other":"-{0} trim."}},"relativePeriod":undefined},"month":{"displayName":"mês","relative":{"0":"este mês","1":"próximo mês","-1":"mês passado"},"relativeTime":{"future":{"one":"dentro de {0} mês","other":"dentro de {0} meses"},"past":{"one":"há {0} mês","other":"há {0} meses"}},"relativePeriod":undefined},"month-short":{"displayName":"mês","relative":{"0":"este mês","1":"próximo mês","-1":"mês passado"},"relativeTime":{"future":{"one":"dentro de {0} mês","other":"dentro de {0} meses"},"past":{"one":"há {0} mês","other":"há {0} meses"}},"relativePeriod":undefined},"month-narrow":{"displayName":"mês","relative":{"0":"este mês","1":"próximo mês","-1":"mês passado"},"relativeTime":{"future":{"one":"+{0} mês","other":"+{0} meses"},"past":{"one":"-{0} mês","other":"-{0} meses"}},"relativePeriod":undefined},"week":{"displayName":"semana","relative":{"0":"esta semana","1":"próxima semana","-1":"semana passada"},"relativeTime":{"future":{"one":"dentro de {0} semana","other":"dentro de {0} semanas"},"past":{"one":"há {0} semana","other":"há {0} semanas"}},"relativePeriod":"a semana de {0}"},"week-short":{"displayName":"sem.","relative":{"0":"esta semana","1":"próxima semana","-1":"semana passada"},"relativeTime":{"future":{"one":"dentro de {0} sem.","other":"dentro de {0} sem."},"past":{"one":"há {0} sem.","other":"há {0} sem."}},"relativePeriod":"a sem. de {0}"},"week-narrow":{"displayName":"sem.","relative":{"0":"esta semana","1":"próxima semana","-1":"semana passada"},"relativeTime":{"future":{"one":"+{0} sem.","other":"+{0} sem."},"past":{"one":"-{0} sem.","other":"-{0} sem."}},"relativePeriod":"a semana de {0}"},"day":{"displayName":"dia","relative":{"0":"hoje","1":"amanhã","2":"depois de amanhã","-2":"anteontem","-1":"ontem"},"relativeTime":{"future":{"one":"dentro de {0} dia","other":"dentro de {0} dias"},"past":{"one":"há {0} dia","other":"há {0} dias"}},"relativePeriod":undefined},"day-short":{"displayName":"dia","relative":{"0":"hoje","1":"amanhã","2":"depois de amanhã","-2":"anteontem","-1":"ontem"},"relativeTime":{"future":{"one":"dentro de {0} dia","other":"dentro de {0} dias"},"past":{"one":"há {0} dia","other":"há {0} dias"}},"relativePeriod":undefined},"day-narrow":{"displayName":"dia","relative":{"0":"hoje","1":"amanhã","2":"depois de amanhã","-2":"anteontem","-1":"ontem"},"relativeTime":{"future":{"one":"+{0} dia","other":"+{0} dias"},"past":{"one":"há {0} dias","other":"há {0} dias"}},"relativePeriod":undefined},"hour":{"displayName":"hora","relative":{"0":"esta hora"},"relativeTime":{"future":{"one":"dentro de {0} hora","other":"dentro de {0} horas"},"past":{"one":"há {0} hora","other":"há {0} horas"}},"relativePeriod":undefined},"hour-short":{"displayName":"h","relative":{"0":"esta hora"},"relativeTime":{"future":{"one":"dentro de {0} h","other":"dentro de {0} h"},"past":{"one":"há {0} h","other":"há {0} h"}},"relativePeriod":undefined},"hour-narrow":{"displayName":"h","relative":{"0":"esta hora"},"relativeTime":{"future":{"one":"+{0} h","other":"+{0} h"},"past":{"one":"-{0} h","other":"-{0} h"}},"relativePeriod":undefined},"minute":{"displayName":"minuto","relative":{"0":"este minuto"},"relativeTime":{"future":{"one":"dentro de {0} minuto","other":"dentro de {0} minutos"},"past":{"one":"há {0} minuto","other":"há {0} minutos"}},"relativePeriod":undefined},"minute-short":{"displayName":"min","relative":{"0":"este minuto"},"relativeTime":{"future":{"one":"dentro de {0} min","other":"dentro de {0} min"},"past":{"one":"há {0} min","other":"há {0} min"}},"relativePeriod":undefined},"minute-narrow":{"displayName":"min","relative":{"0":"este minuto"},"relativeTime":{"future":{"one":"+{0} min","other":"+{0} min"},"past":{"one":"-{0} min","other":"-{0} min"}},"relativePeriod":undefined},"second":{"displayName":"segundo","relative":{"0":"agora"},"relativeTime":{"future":{"one":"dentro de {0} segundo","other":"dentro de {0} segundos"},"past":{"one":"há {0} segundo","other":"há {0} segundos"}},"relativePeriod":undefined},"second-short":{"displayName":"s","relative":{"0":"agora"},"relativeTime":{"future":{"one":"dentro de {0} s","other":"dentro de {0} s"},"past":{"one":"há {0} s","other":"há {0} s"}},"relativePeriod":undefined},"second-narrow":{"displayName":"s","relative":{"0":"agora"},"relativeTime":{"future":{"one":"+{0} s","other":"+{0} s"},"past":{"one":"-{0} s","other":"-{0} s"}},"relativePeriod":undefined}}},{"locale":"pt-CH","parentLocale":"pt-PT"},{"locale":"pt-CV","parentLocale":"pt-PT"},{"locale":"pt-GQ","parentLocale":"pt-PT"},{"locale":"pt-GW","parentLocale":"pt-PT"},{"locale":"pt-LU","parentLocale":"pt-PT"},{"locale":"pt-MO","parentLocale":"pt-PT"},{"locale":"pt-MZ","parentLocale":"pt-PT"},{"locale":"pt-ST","parentLocale":"pt-PT"},{"locale":"pt-TL","parentLocale":"pt-PT"})
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

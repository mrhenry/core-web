(function(undefined) {
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("bg").length
)) {
// Intl.RelativeTimeFormat.~locale.bg
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"locale":"bg","fields":{"year":{"displayName":"година","relative":{"0":"тази година","1":"следващата година","-1":"миналата година"},"relativeTime":{"future":{"one":"след {0} година","other":"след {0} години"},"past":{"one":"преди {0} година","other":"преди {0} години"}},"relativePeriod":undefined},"year-short":{"displayName":"г.","relative":{"0":"т. г.","1":"следв. г.","-1":"мин. г."},"relativeTime":{"future":{"one":"след {0} г.","other":"след {0} г."},"past":{"one":"преди {0} г.","other":"преди {0} г."}},"relativePeriod":undefined},"year-narrow":{"displayName":"г.","relative":{"0":"т. г.","1":"сл. г.","-1":"мин. г."},"relativeTime":{"future":{"one":"сл. {0} г.","other":"сл. {0} г."},"past":{"one":"пр. {0} г.","other":"пр. {0} г."}},"relativePeriod":undefined},"quarter":{"displayName":"тримесечие","relative":{"0":"това тримесечие","1":"следващо тримесечие","-1":"предходно тримесечие"},"relativeTime":{"future":{"one":"след {0} тримесечие","other":"след {0} тримесечия"},"past":{"one":"преди {0} тримесечие","other":"преди {0} тримесечия"}},"relativePeriod":undefined},"quarter-short":{"displayName":"трим.","relative":{"0":"това трим.","1":"следв. трим.","-1":"мин. трим."},"relativeTime":{"future":{"one":"след {0} трим.","other":"след {0} трим."},"past":{"one":"преди {0} трим.","other":"преди {0} трим."}},"relativePeriod":undefined},"quarter-narrow":{"displayName":"трим.","relative":{"0":"това трим.","1":"следв. трим.","-1":"мин. трим."},"relativeTime":{"future":{"one":"сл. {0} трим.","other":"сл. {0} трим."},"past":{"one":"пр. {0} трим.","other":"пр. {0} трим."}},"relativePeriod":undefined},"month":{"displayName":"месец","relative":{"0":"този месец","1":"следващ месец","-1":"предходен месец"},"relativeTime":{"future":{"one":"след {0} месец","other":"след {0} месеца"},"past":{"one":"преди {0} месец","other":"преди {0} месеца"}},"relativePeriod":undefined},"month-short":{"displayName":"мес.","relative":{"0":"този мес.","1":"следв. мес.","-1":"мин. мес."},"relativeTime":{"future":{"one":"след {0} м.","other":"след {0} м."},"past":{"one":"преди {0} м.","other":"преди {0} м."}},"relativePeriod":undefined},"month-narrow":{"displayName":"мес.","relative":{"0":"т. м.","1":"сл. м.","-1":"мин. м."},"relativeTime":{"future":{"one":"сл. {0} м.","other":"сл. {0} м."},"past":{"one":"пр. {0} м.","other":"пр. {0} м."}},"relativePeriod":undefined},"week":{"displayName":"седмица","relative":{"0":"тази седмица","1":"следващата седмица","-1":"предходната седмица"},"relativeTime":{"future":{"one":"след {0} седмица","other":"след {0} седмици"},"past":{"one":"преди {0} седмица","other":"преди {0} седмици"}},"relativePeriod":"седмицата от {0}"},"week-short":{"displayName":"седм.","relative":{"0":"тази седм.","1":"следв. седм.","-1":"миналата седмица"},"relativeTime":{"future":{"one":"след {0} седм.","other":"след {0} седм."},"past":{"one":"преди {0} седм.","other":"преди {0} седм."}},"relativePeriod":"седмицата от {0}"},"week-narrow":{"displayName":"седм.","relative":{"0":"тази седм.","1":"сл. седм.","-1":"мин. седм."},"relativeTime":{"future":{"one":"сл. {0} седм.","other":"сл. {0} седм."},"past":{"one":"пр. {0} седм.","other":"пр. {0} седм."}},"relativePeriod":"седмицата от {0}"},"day":{"displayName":"ден","relative":{"0":"днес","1":"утре","2":"вдругиден","-2":"онзи ден","-1":"вчера"},"relativeTime":{"future":{"one":"след {0} ден","other":"след {0} дни"},"past":{"one":"преди {0} ден","other":"преди {0} дни"}},"relativePeriod":undefined},"day-short":{"displayName":"д","relative":{"0":"днес","1":"утре","2":"вдругиден","-2":"онзи ден","-1":"вчера"},"relativeTime":{"future":{"one":"след {0} ден","other":"след {0} дни"},"past":{"one":"преди {0} ден","other":"преди {0} дни"}},"relativePeriod":undefined},"day-narrow":{"displayName":"д","relative":{"0":"днес","1":"утре","2":"вдругиден","-2":"онзи ден","-1":"вчера"},"relativeTime":{"future":{"one":"сл. {0} д","other":"сл. {0} д"},"past":{"one":"пр. {0} д","other":"пр. {0} д"}},"relativePeriod":undefined},"hour":{"displayName":"час","relative":{"0":"в този час"},"relativeTime":{"future":{"one":"след {0} час","other":"след {0} часа"},"past":{"one":"преди {0} час","other":"преди {0} часа"}},"relativePeriod":undefined},"hour-short":{"displayName":"ч","relative":{"0":"в този час"},"relativeTime":{"future":{"one":"след {0} ч","other":"след {0} ч"},"past":{"one":"преди {0} ч","other":"преди {0} ч"}},"relativePeriod":undefined},"hour-narrow":{"displayName":"ч","relative":{"0":"в този час"},"relativeTime":{"future":{"one":"сл. {0} ч","other":"сл. {0} ч"},"past":{"one":"пр. {0} ч","other":"пр. {0} ч"}},"relativePeriod":undefined},"minute":{"displayName":"минута","relative":{"0":"в тази минута"},"relativeTime":{"future":{"one":"след {0} минута","other":"след {0} минути"},"past":{"one":"преди {0} минута","other":"преди {0} минути"}},"relativePeriod":undefined},"minute-short":{"displayName":"мин","relative":{"0":"в тази минута"},"relativeTime":{"future":{"one":"след {0} мин","other":"след {0} мин"},"past":{"one":"преди {0} мин","other":"преди {0} мин"}},"relativePeriod":undefined},"minute-narrow":{"displayName":"мин","relative":{"0":"в тази минута"},"relativeTime":{"future":{"one":"сл. {0} мин","other":"сл. {0} мин"},"past":{"one":"пр. {0} мин","other":"пр. {0} мин"}},"relativePeriod":undefined},"second":{"displayName":"секунда","relative":{"0":"сега"},"relativeTime":{"future":{"one":"след {0} секунда","other":"след {0} секунди"},"past":{"one":"преди {0} секунда","other":"преди {0} секунди"}},"relativePeriod":undefined},"second-short":{"displayName":"сек","relative":{"0":"сега"},"relativeTime":{"future":{"one":"след {0} сек","other":"след {0} сек"},"past":{"one":"преди {0} сек","other":"преди {0} сек"}},"relativePeriod":undefined},"second-narrow":{"displayName":"с","relative":{"0":"сега"},"relativeTime":{"future":{"one":"сл. {0} сек","other":"сл. {0} сек"},"past":{"one":"пр. {0} сек","other":"пр. {0} сек"}},"relativePeriod":undefined}}})
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

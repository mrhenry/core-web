(function(undefined) {
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("th").length
)) {
// Intl.RelativeTimeFormat.~locale.th
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"locale":"th","fields":{"year":{"displayName":"ปี","relative":{"0":"ปีนี้","1":"ปีหน้า","-1":"ปีที่แล้ว"},"relativeTime":{"future":{"other":"ในอีก {0} ปี"},"past":{"other":"{0} ปีที่แล้ว"}},"relativePeriod":undefined},"year-short":{"displayName":"ปี","relative":{"0":"ปีนี้","1":"ปีหน้า","-1":"ปีที่แล้ว"},"relativeTime":{"future":{"other":"ใน {0} ปี"},"past":{"other":"{0} ปีที่แล้ว"}},"relativePeriod":undefined},"year-narrow":{"displayName":"ปี","relative":{"0":"ปีนี้","1":"ปีหน้า","-1":"ปีที่แล้ว"},"relativeTime":{"future":{"other":"ใน {0} ปี"},"past":{"other":"{0} ปีที่แล้ว"}},"relativePeriod":undefined},"quarter":{"displayName":"ไตรมาส","relative":{"0":"ไตรมาสนี้","1":"ไตรมาสหน้า","-1":"ไตรมาสที่แล้ว"},"relativeTime":{"future":{"other":"ในอีก {0} ไตรมาส"},"past":{"other":"{0} ไตรมาสที่แล้ว"}},"relativePeriod":undefined},"quarter-short":{"displayName":"ไตรมาส","relative":{"0":"ไตรมาสนี้","1":"ไตรมาสหน้า","-1":"ไตรมาสที่แล้ว"},"relativeTime":{"future":{"other":"ใน {0} ไตรมาส"},"past":{"other":"{0} ไตรมาสที่แล้ว"}},"relativePeriod":undefined},"quarter-narrow":{"displayName":"ไตรมาส","relative":{"0":"ไตรมาสนี้","1":"ไตรมาสหน้า","-1":"ไตรมาสที่แล้ว"},"relativeTime":{"future":{"other":"ใน {0} ไตรมาส"},"past":{"other":"{0} ไตรมาสที่แล้ว"}},"relativePeriod":undefined},"month":{"displayName":"เดือน","relative":{"0":"เดือนนี้","1":"เดือนหน้า","-1":"เดือนที่แล้ว"},"relativeTime":{"future":{"other":"ในอีก {0} เดือน"},"past":{"other":"{0} เดือนที่ผ่านมา"}},"relativePeriod":undefined},"month-short":{"displayName":"เดือน","relative":{"0":"เดือนนี้","1":"เดือนหน้า","-1":"เดือนที่แล้ว"},"relativeTime":{"future":{"other":"ใน {0} เดือน"},"past":{"other":"{0} เดือนที่แล้ว"}},"relativePeriod":undefined},"month-narrow":{"displayName":"เดือน","relative":{"0":"เดือนนี้","1":"เดือนหน้า","-1":"เดือนที่แล้ว"},"relativeTime":{"future":{"other":"ใน {0} เดือน"},"past":{"other":"{0} เดือนที่แล้ว"}},"relativePeriod":undefined},"week":{"displayName":"สัปดาห์","relative":{"0":"สัปดาห์นี้","1":"สัปดาห์หน้า","-1":"สัปดาห์ที่แล้ว"},"relativeTime":{"future":{"other":"ในอีก {0} สัปดาห์"},"past":{"other":"{0} สัปดาห์ที่ผ่านมา"}},"relativePeriod":"สัปดาห์ที่เริ่มต้นวันที่"},"week-short":{"displayName":"สัปดาห์","relative":{"0":"สัปดาห์นี้","1":"สัปดาห์หน้า","-1":"สัปดาห์ที่แล้ว"},"relativeTime":{"future":{"other":"ใน {0} สัปดาห์"},"past":{"other":"{0} สัปดาห์ที่แล้ว"}},"relativePeriod":"สัปดาห์ที่เริ่มต้นวันที่"},"week-narrow":{"displayName":"สัปดาห์","relative":{"0":"สัปดาห์นี้","1":"สัปดาห์หน้า","-1":"สัปดาห์ที่แล้ว"},"relativeTime":{"future":{"other":"ใน {0} สัปดาห์"},"past":{"other":"{0} สัปดาห์ที่แล้ว"}},"relativePeriod":"สัปดาห์ที่เริ่มต้นวันที่"},"day":{"displayName":"วัน","relative":{"0":"วันนี้","1":"พรุ่งนี้","2":"มะรืนนี้","-2":"เมื่อวานซืน","-1":"เมื่อวาน"},"relativeTime":{"future":{"other":"ในอีก {0} วัน"},"past":{"other":"{0} วันที่ผ่านมา"}},"relativePeriod":undefined},"day-short":{"displayName":"วัน","relative":{"0":"วันนี้","1":"พรุ่งนี้","2":"มะรืนนี้","-2":"เมื่อวานซืน","-1":"เมื่อวาน"},"relativeTime":{"future":{"other":"ใน {0} วัน"},"past":{"other":"{0} วันที่แล้ว"}},"relativePeriod":undefined},"day-narrow":{"displayName":"วัน","relative":{"0":"วันนี้","1":"พรุ่งนี้","2":"มะรืนนี้","-2":"เมื่อวานซืน","-1":"เมื่อวาน"},"relativeTime":{"future":{"other":"ใน {0} วัน"},"past":{"other":"{0} วันที่แล้ว"}},"relativePeriod":undefined},"hour":{"displayName":"ชั่วโมง","relative":{"0":"ชั่วโมงนี้"},"relativeTime":{"future":{"other":"ในอีก {0} ชั่วโมง"},"past":{"other":"{0} ชั่วโมงที่ผ่านมา"}},"relativePeriod":undefined},"hour-short":{"displayName":"ชม.","relative":{"0":"ชั่วโมงนี้"},"relativeTime":{"future":{"other":"ใน {0} ชม."},"past":{"other":"{0} ชม. ที่แล้ว"}},"relativePeriod":undefined},"hour-narrow":{"displayName":"ชม.","relative":{"0":"ชั่วโมงนี้"},"relativeTime":{"future":{"other":"ใน {0} ชม."},"past":{"other":"{0} ชม. ที่แล้ว"}},"relativePeriod":undefined},"minute":{"displayName":"นาที","relative":{"0":"นาทีนี้"},"relativeTime":{"future":{"other":"ในอีก {0} นาที"},"past":{"other":"{0} นาทีที่ผ่านมา"}},"relativePeriod":undefined},"minute-short":{"displayName":"น.","relative":{"0":"นาทีนี้"},"relativeTime":{"future":{"other":"ใน {0} นาที"},"past":{"other":"{0} นาทีที่แล้ว"}},"relativePeriod":undefined},"minute-narrow":{"displayName":"น.","relative":{"0":"นาทีนี้"},"relativeTime":{"future":{"other":"ใน {0} นาที"},"past":{"other":"{0} นาทีที่แล้ว"}},"relativePeriod":undefined},"second":{"displayName":"วินาที","relative":{"0":"ขณะนี้"},"relativeTime":{"future":{"other":"ในอีก {0} วินาที"},"past":{"other":"{0} วินาทีที่ผ่านมา"}},"relativePeriod":undefined},"second-short":{"displayName":"วิ","relative":{"0":"ขณะนี้"},"relativeTime":{"future":{"other":"ใน {0} วินาที"},"past":{"other":"{0} วินาทีที่แล้ว"}},"relativePeriod":undefined},"second-narrow":{"displayName":"วิ","relative":{"0":"ขณะนี้"},"relativeTime":{"future":{"other":"ใน {0} วินาที"},"past":{"other":"{0} วินาทีที่แล้ว"}},"relativePeriod":undefined}}})
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

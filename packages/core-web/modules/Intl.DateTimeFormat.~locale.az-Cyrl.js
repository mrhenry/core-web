(function(undefined) {
if (!("Intl"in self&&"DateTimeFormat"in self.Intl&&"formatRangeToParts"in self.Intl.DateTimeFormat&&self.Intl.DateTimeFormat.supportedLocalesOf("az-Cyrl").length
)) {
// Intl.DateTimeFormat.~locale.az-Cyrl
/* @generated */	

  // prettier-ignore
  if (Intl.DateTimeFormat && typeof Intl.DateTimeFormat.__addLocaleData === 'function') {
    Intl.DateTimeFormat.__addLocaleData({"data":{"am":"АМ","pm":"ПМ","weekday":{"narrow":["7","1","2","3","4","5","6"],"short":["Б.","Б.Е.","Ч.А.","Ч.","Ҹ.А.","Ҹ.","Ш."],"long":["базар","базар ертәси","чәршәнбә ахшамы","чәршәнбә","ҹүмә ахшамы","ҹүмә","шәнбә"]},"era":{"narrow":{"BC":"е.ә.","AD":"ј.е."},"short":{"BC":"е.ә.","AD":"ј.е."},"long":{"BC":"ерамыздан әввәл","AD":"јени ера"}},"month":{"narrow":["1","2","3","4","5","6","7","8","9","10","11","12"],"short":["јан","фев","мар","апр","май","ијн","ијл","авг","сен","окт","ној","дек"],"long":["јанвар","феврал","март","апрел","май","ијун","ијул","август","сентјабр","октјабр","нојабр","декабр"]},"timeZoneName":{"UTC":{"short":["UTC","UTC"]}},"gmtFormat":"GMT{0}","hourFormat":"+HH:mm;-HH:mm","dateFormat":{"full":"d MMMM y, EEEE","long":"d MMMM y","medium":"d MMM y","short":"dd.MM.yy"},"timeFormat":{"full":"HH:mm:ss zzzz","long":"HH:mm:ss z","medium":"HH:mm:ss","short":"HH:mm"},"dateTimeFormat":{"full":"{1} {0}","long":"{1} {0}","medium":"{1} {0}","short":"{1} {0}"},"formats":{"gregory":{"Bh":"h B","Bhm":"h:mm B","Bhms":"h:mm:ss B","d":"d","E":"ccc","EBhm":"E h:mm B","EBhms":"E h:mm:ss B","Ed":"d E","Ehm":"E h:mm a","EHm":"E HH:mm","Ehms":"E h:mm:ss a","EHms":"E HH:mm:ss","Gy":"G y","GyMMM":"G MMM y","GyMMMd":"G d MMM y","GyMMMEd":"G d MMM y, E","h":"h a","H":"HH","hm":"h:mm a","Hm":"HH:mm","hms":"h:mm:ss a","Hms":"HH:mm:ss","hmsv":"h:mm:ss a v","Hmsv":"HH:mm:ss v","hmv":"h:mm a v","Hmv":"HH:mm v","M":"L","Md":"dd.MM","MEd":"dd.MM, E","MMM":"LLL","MMMd":"d MMM","MMMEd":"d MMM, E","MMMMd":"MMMM d","ms":"mm:ss","y":"y","yM":"MM.y","yMd":"dd.MM.y","yMEd":"dd.MM.y, E","yMMM":"MMM, y","yMMMd":"d MMM y","yMMMEd":"d MMM y, E","yMMMM":"y MMMM","d MMMM y, EEEE":"d MMMM y, EEEE","d MMMM y":"d MMMM y","d MMM y":"d MMM y","dd.MM.yy":"dd.MM.yy","HH:mm:ss zzzz":"HH:mm:ss zzzz","HH:mm:ss z":"HH:mm:ss z","HH:mm:ss":"HH:mm:ss","HH:mm":"HH:mm","d MMMM y, EEEE HH:mm:ss zzzz":"d MMMM y, EEEE HH:mm:ss zzzz","d MMMM y HH:mm:ss zzzz":"d MMMM y HH:mm:ss zzzz","d MMM y HH:mm:ss zzzz":"d MMM y HH:mm:ss zzzz","dd.MM.yy HH:mm:ss zzzz":"dd.MM.yy HH:mm:ss zzzz","d HH:mm:ss zzzz":"d HH:mm:ss zzzz","E HH:mm:ss zzzz":"ccc HH:mm:ss zzzz","Ed HH:mm:ss zzzz":"d E HH:mm:ss zzzz","Gy HH:mm:ss zzzz":"G y HH:mm:ss zzzz","GyMMM HH:mm:ss zzzz":"G MMM y HH:mm:ss zzzz","GyMMMd HH:mm:ss zzzz":"G d MMM y HH:mm:ss zzzz","GyMMMEd HH:mm:ss zzzz":"G d MMM y, E HH:mm:ss zzzz","M HH:mm:ss zzzz":"L HH:mm:ss zzzz","Md HH:mm:ss zzzz":"dd.MM HH:mm:ss zzzz","MEd HH:mm:ss zzzz":"dd.MM, E HH:mm:ss zzzz","MMM HH:mm:ss zzzz":"LLL HH:mm:ss zzzz","MMMd HH:mm:ss zzzz":"d MMM HH:mm:ss zzzz","MMMEd HH:mm:ss zzzz":"d MMM, E HH:mm:ss zzzz","MMMMd HH:mm:ss zzzz":"MMMM d HH:mm:ss zzzz","y HH:mm:ss zzzz":"y HH:mm:ss zzzz","yM HH:mm:ss zzzz":"MM.y HH:mm:ss zzzz","yMd HH:mm:ss zzzz":"dd.MM.y HH:mm:ss zzzz","yMEd HH:mm:ss zzzz":"dd.MM.y, E HH:mm:ss zzzz","yMMM HH:mm:ss zzzz":"MMM, y HH:mm:ss zzzz","yMMMd HH:mm:ss zzzz":"d MMM y HH:mm:ss zzzz","yMMMEd HH:mm:ss zzzz":"d MMM y, E HH:mm:ss zzzz","yMMMM HH:mm:ss zzzz":"y MMMM HH:mm:ss zzzz","d MMMM y, EEEE HH:mm:ss z":"d MMMM y, EEEE HH:mm:ss z","d MMMM y HH:mm:ss z":"d MMMM y HH:mm:ss z","d MMM y HH:mm:ss z":"d MMM y HH:mm:ss z","dd.MM.yy HH:mm:ss z":"dd.MM.yy HH:mm:ss z","d HH:mm:ss z":"d HH:mm:ss z","E HH:mm:ss z":"ccc HH:mm:ss z","Ed HH:mm:ss z":"d E HH:mm:ss z","Gy HH:mm:ss z":"G y HH:mm:ss z","GyMMM HH:mm:ss z":"G MMM y HH:mm:ss z","GyMMMd HH:mm:ss z":"G d MMM y HH:mm:ss z","GyMMMEd HH:mm:ss z":"G d MMM y, E HH:mm:ss z","M HH:mm:ss z":"L HH:mm:ss z","Md HH:mm:ss z":"dd.MM HH:mm:ss z","MEd HH:mm:ss z":"dd.MM, E HH:mm:ss z","MMM HH:mm:ss z":"LLL HH:mm:ss z","MMMd HH:mm:ss z":"d MMM HH:mm:ss z","MMMEd HH:mm:ss z":"d MMM, E HH:mm:ss z","MMMMd HH:mm:ss z":"MMMM d HH:mm:ss z","y HH:mm:ss z":"y HH:mm:ss z","yM HH:mm:ss z":"MM.y HH:mm:ss z","yMd HH:mm:ss z":"dd.MM.y HH:mm:ss z","yMEd HH:mm:ss z":"dd.MM.y, E HH:mm:ss z","yMMM HH:mm:ss z":"MMM, y HH:mm:ss z","yMMMd HH:mm:ss z":"d MMM y HH:mm:ss z","yMMMEd HH:mm:ss z":"d MMM y, E HH:mm:ss z","yMMMM HH:mm:ss z":"y MMMM HH:mm:ss z","d MMMM y, EEEE HH:mm:ss":"d MMMM y, EEEE HH:mm:ss","d MMMM y HH:mm:ss":"d MMMM y HH:mm:ss","d MMM y HH:mm:ss":"d MMM y HH:mm:ss","dd.MM.yy HH:mm:ss":"dd.MM.yy HH:mm:ss","d HH:mm:ss":"d HH:mm:ss","E HH:mm:ss":"ccc HH:mm:ss","Ed HH:mm:ss":"d E HH:mm:ss","Gy HH:mm:ss":"G y HH:mm:ss","GyMMM HH:mm:ss":"G MMM y HH:mm:ss","GyMMMd HH:mm:ss":"G d MMM y HH:mm:ss","GyMMMEd HH:mm:ss":"G d MMM y, E HH:mm:ss","M HH:mm:ss":"L HH:mm:ss","Md HH:mm:ss":"dd.MM HH:mm:ss","MEd HH:mm:ss":"dd.MM, E HH:mm:ss","MMM HH:mm:ss":"LLL HH:mm:ss","MMMd HH:mm:ss":"d MMM HH:mm:ss","MMMEd HH:mm:ss":"d MMM, E HH:mm:ss","MMMMd HH:mm:ss":"MMMM d HH:mm:ss","y HH:mm:ss":"y HH:mm:ss","yM HH:mm:ss":"MM.y HH:mm:ss","yMd HH:mm:ss":"dd.MM.y HH:mm:ss","yMEd HH:mm:ss":"dd.MM.y, E HH:mm:ss","yMMM HH:mm:ss":"MMM, y HH:mm:ss","yMMMd HH:mm:ss":"d MMM y HH:mm:ss","yMMMEd HH:mm:ss":"d MMM y, E HH:mm:ss","yMMMM HH:mm:ss":"y MMMM HH:mm:ss","d MMMM y, EEEE HH:mm":"d MMMM y, EEEE HH:mm","d MMMM y HH:mm":"d MMMM y HH:mm","d MMM y HH:mm":"d MMM y HH:mm","dd.MM.yy HH:mm":"dd.MM.yy HH:mm","d HH:mm":"d HH:mm","E HH:mm":"ccc HH:mm","Ed HH:mm":"d E HH:mm","Gy HH:mm":"G y HH:mm","GyMMM HH:mm":"G MMM y HH:mm","GyMMMd HH:mm":"G d MMM y HH:mm","GyMMMEd HH:mm":"G d MMM y, E HH:mm","M HH:mm":"L HH:mm","Md HH:mm":"dd.MM HH:mm","MEd HH:mm":"dd.MM, E HH:mm","MMM HH:mm":"LLL HH:mm","MMMd HH:mm":"d MMM HH:mm","MMMEd HH:mm":"d MMM, E HH:mm","MMMMd HH:mm":"MMMM d HH:mm","y HH:mm":"y HH:mm","yM HH:mm":"MM.y HH:mm","yMd HH:mm":"dd.MM.y HH:mm","yMEd HH:mm":"dd.MM.y, E HH:mm","yMMM HH:mm":"MMM, y HH:mm","yMMMd HH:mm":"d MMM y HH:mm","yMMMEd HH:mm":"d MMM y, E HH:mm","yMMMM HH:mm":"y MMMM HH:mm","d MMMM y, EEEE Bh":"d MMMM y, EEEE h B","d MMMM y Bh":"d MMMM y h B","d MMM y Bh":"d MMM y h B","dd.MM.yy Bh":"dd.MM.yy h B","d Bh":"d h B","E Bh":"ccc h B","Ed Bh":"d E h B","Gy Bh":"G y h B","GyMMM Bh":"G MMM y h B","GyMMMd Bh":"G d MMM y h B","GyMMMEd Bh":"G d MMM y, E h B","M Bh":"L h B","Md Bh":"dd.MM h B","MEd Bh":"dd.MM, E h B","MMM Bh":"LLL h B","MMMd Bh":"d MMM h B","MMMEd Bh":"d MMM, E h B","MMMMd Bh":"MMMM d h B","y Bh":"y h B","yM Bh":"MM.y h B","yMd Bh":"dd.MM.y h B","yMEd Bh":"dd.MM.y, E h B","yMMM Bh":"MMM, y h B","yMMMd Bh":"d MMM y h B","yMMMEd Bh":"d MMM y, E h B","yMMMM Bh":"y MMMM h B","d MMMM y, EEEE Bhm":"d MMMM y, EEEE h:mm B","d MMMM y Bhm":"d MMMM y h:mm B","d MMM y Bhm":"d MMM y h:mm B","dd.MM.yy Bhm":"dd.MM.yy h:mm B","d Bhm":"d h:mm B","E Bhm":"ccc h:mm B","Ed Bhm":"d E h:mm B","Gy Bhm":"G y h:mm B","GyMMM Bhm":"G MMM y h:mm B","GyMMMd Bhm":"G d MMM y h:mm B","GyMMMEd Bhm":"G d MMM y, E h:mm B","M Bhm":"L h:mm B","Md Bhm":"dd.MM h:mm B","MEd Bhm":"dd.MM, E h:mm B","MMM Bhm":"LLL h:mm B","MMMd Bhm":"d MMM h:mm B","MMMEd Bhm":"d MMM, E h:mm B","MMMMd Bhm":"MMMM d h:mm B","y Bhm":"y h:mm B","yM Bhm":"MM.y h:mm B","yMd Bhm":"dd.MM.y h:mm B","yMEd Bhm":"dd.MM.y, E h:mm B","yMMM Bhm":"MMM, y h:mm B","yMMMd Bhm":"d MMM y h:mm B","yMMMEd Bhm":"d MMM y, E h:mm B","yMMMM Bhm":"y MMMM h:mm B","d MMMM y, EEEE Bhms":"d MMMM y, EEEE h:mm:ss B","d MMMM y Bhms":"d MMMM y h:mm:ss B","d MMM y Bhms":"d MMM y h:mm:ss B","dd.MM.yy Bhms":"dd.MM.yy h:mm:ss B","d Bhms":"d h:mm:ss B","E Bhms":"ccc h:mm:ss B","Ed Bhms":"d E h:mm:ss B","Gy Bhms":"G y h:mm:ss B","GyMMM Bhms":"G MMM y h:mm:ss B","GyMMMd Bhms":"G d MMM y h:mm:ss B","GyMMMEd Bhms":"G d MMM y, E h:mm:ss B","M Bhms":"L h:mm:ss B","Md Bhms":"dd.MM h:mm:ss B","MEd Bhms":"dd.MM, E h:mm:ss B","MMM Bhms":"LLL h:mm:ss B","MMMd Bhms":"d MMM h:mm:ss B","MMMEd Bhms":"d MMM, E h:mm:ss B","MMMMd Bhms":"MMMM d h:mm:ss B","y Bhms":"y h:mm:ss B","yM Bhms":"MM.y h:mm:ss B","yMd Bhms":"dd.MM.y h:mm:ss B","yMEd Bhms":"dd.MM.y, E h:mm:ss B","yMMM Bhms":"MMM, y h:mm:ss B","yMMMd Bhms":"d MMM y h:mm:ss B","yMMMEd Bhms":"d MMM y, E h:mm:ss B","yMMMM Bhms":"y MMMM h:mm:ss B","d MMMM y, EEEE h":"d MMMM y, EEEE h a","d MMMM y h":"d MMMM y h a","d MMM y h":"d MMM y h a","dd.MM.yy h":"dd.MM.yy h a","d h":"d h a","E h":"ccc h a","Ed h":"d E h a","Gy h":"G y h a","GyMMM h":"G MMM y h a","GyMMMd h":"G d MMM y h a","GyMMMEd h":"G d MMM y, E h a","M h":"L h a","Md h":"dd.MM h a","MEd h":"dd.MM, E h a","MMM h":"LLL h a","MMMd h":"d MMM h a","MMMEd h":"d MMM, E h a","MMMMd h":"MMMM d h a","y h":"y h a","yM h":"MM.y h a","yMd h":"dd.MM.y h a","yMEd h":"dd.MM.y, E h a","yMMM h":"MMM, y h a","yMMMd h":"d MMM y h a","yMMMEd h":"d MMM y, E h a","yMMMM h":"y MMMM h a","d MMMM y, EEEE H":"d MMMM y, EEEE HH","d MMMM y H":"d MMMM y HH","d MMM y H":"d MMM y HH","dd.MM.yy H":"dd.MM.yy HH","d H":"d HH","E H":"ccc HH","Ed H":"d E HH","Gy H":"G y HH","GyMMM H":"G MMM y HH","GyMMMd H":"G d MMM y HH","GyMMMEd H":"G d MMM y, E HH","M H":"L HH","Md H":"dd.MM HH","MEd H":"dd.MM, E HH","MMM H":"LLL HH","MMMd H":"d MMM HH","MMMEd H":"d MMM, E HH","MMMMd H":"MMMM d HH","y H":"y HH","yM H":"MM.y HH","yMd H":"dd.MM.y HH","yMEd H":"dd.MM.y, E HH","yMMM H":"MMM, y HH","yMMMd H":"d MMM y HH","yMMMEd H":"d MMM y, E HH","yMMMM H":"y MMMM HH","d MMMM y, EEEE hm":"d MMMM y, EEEE h:mm a","d MMMM y hm":"d MMMM y h:mm a","d MMM y hm":"d MMM y h:mm a","dd.MM.yy hm":"dd.MM.yy h:mm a","d hm":"d h:mm a","E hm":"ccc h:mm a","Ed hm":"d E h:mm a","Gy hm":"G y h:mm a","GyMMM hm":"G MMM y h:mm a","GyMMMd hm":"G d MMM y h:mm a","GyMMMEd hm":"G d MMM y, E h:mm a","M hm":"L h:mm a","Md hm":"dd.MM h:mm a","MEd hm":"dd.MM, E h:mm a","MMM hm":"LLL h:mm a","MMMd hm":"d MMM h:mm a","MMMEd hm":"d MMM, E h:mm a","MMMMd hm":"MMMM d h:mm a","y hm":"y h:mm a","yM hm":"MM.y h:mm a","yMd hm":"dd.MM.y h:mm a","yMEd hm":"dd.MM.y, E h:mm a","yMMM hm":"MMM, y h:mm a","yMMMd hm":"d MMM y h:mm a","yMMMEd hm":"d MMM y, E h:mm a","yMMMM hm":"y MMMM h:mm a","d MMMM y, EEEE Hm":"d MMMM y, EEEE HH:mm","d MMMM y Hm":"d MMMM y HH:mm","d MMM y Hm":"d MMM y HH:mm","dd.MM.yy Hm":"dd.MM.yy HH:mm","d Hm":"d HH:mm","E Hm":"ccc HH:mm","Ed Hm":"d E HH:mm","Gy Hm":"G y HH:mm","GyMMM Hm":"G MMM y HH:mm","GyMMMd Hm":"G d MMM y HH:mm","GyMMMEd Hm":"G d MMM y, E HH:mm","M Hm":"L HH:mm","Md Hm":"dd.MM HH:mm","MEd Hm":"dd.MM, E HH:mm","MMM Hm":"LLL HH:mm","MMMd Hm":"d MMM HH:mm","MMMEd Hm":"d MMM, E HH:mm","MMMMd Hm":"MMMM d HH:mm","y Hm":"y HH:mm","yM Hm":"MM.y HH:mm","yMd Hm":"dd.MM.y HH:mm","yMEd Hm":"dd.MM.y, E HH:mm","yMMM Hm":"MMM, y HH:mm","yMMMd Hm":"d MMM y HH:mm","yMMMEd Hm":"d MMM y, E HH:mm","yMMMM Hm":"y MMMM HH:mm","d MMMM y, EEEE hms":"d MMMM y, EEEE h:mm:ss a","d MMMM y hms":"d MMMM y h:mm:ss a","d MMM y hms":"d MMM y h:mm:ss a","dd.MM.yy hms":"dd.MM.yy h:mm:ss a","d hms":"d h:mm:ss a","E hms":"ccc h:mm:ss a","Ed hms":"d E h:mm:ss a","Gy hms":"G y h:mm:ss a","GyMMM hms":"G MMM y h:mm:ss a","GyMMMd hms":"G d MMM y h:mm:ss a","GyMMMEd hms":"G d MMM y, E h:mm:ss a","M hms":"L h:mm:ss a","Md hms":"dd.MM h:mm:ss a","MEd hms":"dd.MM, E h:mm:ss a","MMM hms":"LLL h:mm:ss a","MMMd hms":"d MMM h:mm:ss a","MMMEd hms":"d MMM, E h:mm:ss a","MMMMd hms":"MMMM d h:mm:ss a","y hms":"y h:mm:ss a","yM hms":"MM.y h:mm:ss a","yMd hms":"dd.MM.y h:mm:ss a","yMEd hms":"dd.MM.y, E h:mm:ss a","yMMM hms":"MMM, y h:mm:ss a","yMMMd hms":"d MMM y h:mm:ss a","yMMMEd hms":"d MMM y, E h:mm:ss a","yMMMM hms":"y MMMM h:mm:ss a","d MMMM y, EEEE Hms":"d MMMM y, EEEE HH:mm:ss","d MMMM y Hms":"d MMMM y HH:mm:ss","d MMM y Hms":"d MMM y HH:mm:ss","dd.MM.yy Hms":"dd.MM.yy HH:mm:ss","d Hms":"d HH:mm:ss","E Hms":"ccc HH:mm:ss","Ed Hms":"d E HH:mm:ss","Gy Hms":"G y HH:mm:ss","GyMMM Hms":"G MMM y HH:mm:ss","GyMMMd Hms":"G d MMM y HH:mm:ss","GyMMMEd Hms":"G d MMM y, E HH:mm:ss","M Hms":"L HH:mm:ss","Md Hms":"dd.MM HH:mm:ss","MEd Hms":"dd.MM, E HH:mm:ss","MMM Hms":"LLL HH:mm:ss","MMMd Hms":"d MMM HH:mm:ss","MMMEd Hms":"d MMM, E HH:mm:ss","MMMMd Hms":"MMMM d HH:mm:ss","y Hms":"y HH:mm:ss","yM Hms":"MM.y HH:mm:ss","yMd Hms":"dd.MM.y HH:mm:ss","yMEd Hms":"dd.MM.y, E HH:mm:ss","yMMM Hms":"MMM, y HH:mm:ss","yMMMd Hms":"d MMM y HH:mm:ss","yMMMEd Hms":"d MMM y, E HH:mm:ss","yMMMM Hms":"y MMMM HH:mm:ss","d MMMM y, EEEE hmsv":"d MMMM y, EEEE h:mm:ss a v","d MMMM y hmsv":"d MMMM y h:mm:ss a v","d MMM y hmsv":"d MMM y h:mm:ss a v","dd.MM.yy hmsv":"dd.MM.yy h:mm:ss a v","d hmsv":"d h:mm:ss a v","E hmsv":"ccc h:mm:ss a v","Ed hmsv":"d E h:mm:ss a v","Gy hmsv":"G y h:mm:ss a v","GyMMM hmsv":"G MMM y h:mm:ss a v","GyMMMd hmsv":"G d MMM y h:mm:ss a v","GyMMMEd hmsv":"G d MMM y, E h:mm:ss a v","M hmsv":"L h:mm:ss a v","Md hmsv":"dd.MM h:mm:ss a v","MEd hmsv":"dd.MM, E h:mm:ss a v","MMM hmsv":"LLL h:mm:ss a v","MMMd hmsv":"d MMM h:mm:ss a v","MMMEd hmsv":"d MMM, E h:mm:ss a v","MMMMd hmsv":"MMMM d h:mm:ss a v","y hmsv":"y h:mm:ss a v","yM hmsv":"MM.y h:mm:ss a v","yMd hmsv":"dd.MM.y h:mm:ss a v","yMEd hmsv":"dd.MM.y, E h:mm:ss a v","yMMM hmsv":"MMM, y h:mm:ss a v","yMMMd hmsv":"d MMM y h:mm:ss a v","yMMMEd hmsv":"d MMM y, E h:mm:ss a v","yMMMM hmsv":"y MMMM h:mm:ss a v","d MMMM y, EEEE Hmsv":"d MMMM y, EEEE HH:mm:ss v","d MMMM y Hmsv":"d MMMM y HH:mm:ss v","d MMM y Hmsv":"d MMM y HH:mm:ss v","dd.MM.yy Hmsv":"dd.MM.yy HH:mm:ss v","d Hmsv":"d HH:mm:ss v","E Hmsv":"ccc HH:mm:ss v","Ed Hmsv":"d E HH:mm:ss v","Gy Hmsv":"G y HH:mm:ss v","GyMMM Hmsv":"G MMM y HH:mm:ss v","GyMMMd Hmsv":"G d MMM y HH:mm:ss v","GyMMMEd Hmsv":"G d MMM y, E HH:mm:ss v","M Hmsv":"L HH:mm:ss v","Md Hmsv":"dd.MM HH:mm:ss v","MEd Hmsv":"dd.MM, E HH:mm:ss v","MMM Hmsv":"LLL HH:mm:ss v","MMMd Hmsv":"d MMM HH:mm:ss v","MMMEd Hmsv":"d MMM, E HH:mm:ss v","MMMMd Hmsv":"MMMM d HH:mm:ss v","y Hmsv":"y HH:mm:ss v","yM Hmsv":"MM.y HH:mm:ss v","yMd Hmsv":"dd.MM.y HH:mm:ss v","yMEd Hmsv":"dd.MM.y, E HH:mm:ss v","yMMM Hmsv":"MMM, y HH:mm:ss v","yMMMd Hmsv":"d MMM y HH:mm:ss v","yMMMEd Hmsv":"d MMM y, E HH:mm:ss v","yMMMM Hmsv":"y MMMM HH:mm:ss v","d MMMM y, EEEE hmv":"d MMMM y, EEEE h:mm a v","d MMMM y hmv":"d MMMM y h:mm a v","d MMM y hmv":"d MMM y h:mm a v","dd.MM.yy hmv":"dd.MM.yy h:mm a v","d hmv":"d h:mm a v","E hmv":"ccc h:mm a v","Ed hmv":"d E h:mm a v","Gy hmv":"G y h:mm a v","GyMMM hmv":"G MMM y h:mm a v","GyMMMd hmv":"G d MMM y h:mm a v","GyMMMEd hmv":"G d MMM y, E h:mm a v","M hmv":"L h:mm a v","Md hmv":"dd.MM h:mm a v","MEd hmv":"dd.MM, E h:mm a v","MMM hmv":"LLL h:mm a v","MMMd hmv":"d MMM h:mm a v","MMMEd hmv":"d MMM, E h:mm a v","MMMMd hmv":"MMMM d h:mm a v","y hmv":"y h:mm a v","yM hmv":"MM.y h:mm a v","yMd hmv":"dd.MM.y h:mm a v","yMEd hmv":"dd.MM.y, E h:mm a v","yMMM hmv":"MMM, y h:mm a v","yMMMd hmv":"d MMM y h:mm a v","yMMMEd hmv":"d MMM y, E h:mm a v","yMMMM hmv":"y MMMM h:mm a v","d MMMM y, EEEE Hmv":"d MMMM y, EEEE HH:mm v","d MMMM y Hmv":"d MMMM y HH:mm v","d MMM y Hmv":"d MMM y HH:mm v","dd.MM.yy Hmv":"dd.MM.yy HH:mm v","d Hmv":"d HH:mm v","E Hmv":"ccc HH:mm v","Ed Hmv":"d E HH:mm v","Gy Hmv":"G y HH:mm v","GyMMM Hmv":"G MMM y HH:mm v","GyMMMd Hmv":"G d MMM y HH:mm v","GyMMMEd Hmv":"G d MMM y, E HH:mm v","M Hmv":"L HH:mm v","Md Hmv":"dd.MM HH:mm v","MEd Hmv":"dd.MM, E HH:mm v","MMM Hmv":"LLL HH:mm v","MMMd Hmv":"d MMM HH:mm v","MMMEd Hmv":"d MMM, E HH:mm v","MMMMd Hmv":"MMMM d HH:mm v","y Hmv":"y HH:mm v","yM Hmv":"MM.y HH:mm v","yMd Hmv":"dd.MM.y HH:mm v","yMEd Hmv":"dd.MM.y, E HH:mm v","yMMM Hmv":"MMM, y HH:mm v","yMMMd Hmv":"d MMM y HH:mm v","yMMMEd Hmv":"d MMM y, E HH:mm v","yMMMM Hmv":"y MMMM HH:mm v","d MMMM y, EEEE ms":"d MMMM y, EEEE mm:ss","d MMMM y ms":"d MMMM y mm:ss","d MMM y ms":"d MMM y mm:ss","dd.MM.yy ms":"dd.MM.yy mm:ss","d ms":"d mm:ss","E ms":"ccc mm:ss","Ed ms":"d E mm:ss","Gy ms":"G y mm:ss","GyMMM ms":"G MMM y mm:ss","GyMMMd ms":"G d MMM y mm:ss","GyMMMEd ms":"G d MMM y, E mm:ss","M ms":"L mm:ss","Md ms":"dd.MM mm:ss","MEd ms":"dd.MM, E mm:ss","MMM ms":"LLL mm:ss","MMMd ms":"d MMM mm:ss","MMMEd ms":"d MMM, E mm:ss","MMMMd ms":"MMMM d mm:ss","y ms":"y mm:ss","yM ms":"MM.y mm:ss","yMd ms":"dd.MM.y mm:ss","yMEd ms":"dd.MM.y, E mm:ss","yMMM ms":"MMM, y mm:ss","yMMMd ms":"d MMM y mm:ss","yMMMEd ms":"d MMM y, E mm:ss","yMMMM ms":"y MMMM mm:ss"}},"intervalFormats":{"intervalFormatFallback":"{0} – {1}","Bh":{"B":"h B – h B","h":"h–h B"},"Bhm":{"B":"h:mm B – h:mm B","h":"h:mm–h:mm B","m":"h:mm–h:mm B"},"d":{"d":"d–d"},"Gy":{"G":"G y – G y","y":"G y–y"},"GyM":{"G":"GGGGG y-MM – GGGGG y-MM","M":"GGGGG y-MM – y-MM","y":"GGGGG y-MM – y-MM"},"GyMd":{"d":"GGGGG y-MM-dd – y-MM-dd","G":"GGGGG y-MM-dd – GGGGG y-MM-dd","M":"GGGGG y-MM-dd – y-MM-dd","y":"GGGGG y-MM-dd – y-MM-dd"},"GyMEd":{"d":"GGGGG y-MM-dd, E – y-MM-dd, E","G":"GGGGG y-MM-dd, E – GGGGG y-MM-dd, E","M":"GGGGG y-MM-dd, E – y-MM-dd, E","y":"GGGGG y-MM-dd, E – y-MM-dd, E"},"GyMMM":{"G":"G y MMM – G y MMM","M":"G y MMM–MMM","y":"G y MMM – y MMM"},"GyMMMd":{"d":"G y MMM d–d","G":"G y MMM d – G y MMM d","M":"G y MMM d – MMM d","y":"G y MMM d – y MMM d"},"GyMMMEd":{"d":"G y MMM d, E – MMM d, E","G":"G y MMM d, E – G y MMM d, E","M":"G y MMM d, E – MMM d, E","y":"G y MMM d, E – y MMM d, E"},"h":{"a":"h a – h a","h":"h–h a"},"H":{"H":"HH–HH"},"hm":{"a":"h:mm a – h:mm a","h":"h:mm–h:mm a","m":"h:mm–h:mm a"},"Hm":{"H":"HH:mm–HH:mm","m":"HH:mm–HH:mm"},"hmv":{"a":"h:mm a – h:mm a v","h":"h:mm–h:mm a v","m":"h:mm–h:mm a v"},"Hmv":{"H":"HH:mm–HH:mm v","m":"HH:mm–HH:mm v"},"hv":{"a":"h a – h a v","h":"h–h a v"},"Hv":{"H":"HH–HH v"},"M":{"M":"MM–MM"},"Md":{"d":"dd.MM – dd.MM","M":"dd.MM – dd.MM"},"MEd":{"d":"dd.MM, E – dd.MM, E","M":"dd.MM, E – dd.MM, E"},"MMM":{"M":"LLL–LLL"},"MMMd":{"d":"d–d MMM","M":"d MMM – d MMM"},"MMMEd":{"d":"d MMM, E – d MMM, E","M":"d MMM, E – d MMM, E"},"y":{"y":"y–y"},"yM":{"M":"MM.y – MM.y","y":"MM.y – MM.y"},"yMd":{"d":"dd.MM.y – dd.MM.y","M":"dd.MM.y – dd.MM.y","y":"dd.MM.y – dd.MM.y"},"yMEd":{"d":"dd.MM.y, E – dd.MM.y, E","M":"dd.MM.y, E – dd.MM.y, E","y":"dd.MM.y, E – dd.MM.y, E"},"yMMM":{"M":"MMM – MMM y","y":"y MMM – y MMM"},"yMMMd":{"d":"y MMM d–d","M":"d MMM y – d MMM","y":"d MMM y – d MMM y"},"yMMMEd":{"d":"d MMM y, E – d MMM, E","M":"d MMM y, E – d MMM, E","y":"d MMM y, E – d MMM y, E"},"yMMMM":{"M":"MMMM – MMMM y","y":"MMMM y – MMMM y"}},"hourCycle":"h23","nu":["latn"],"ca":["gregory"],"hc":["h23","","h12"]},"locale":"az-Cyrl"}
)
  }}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

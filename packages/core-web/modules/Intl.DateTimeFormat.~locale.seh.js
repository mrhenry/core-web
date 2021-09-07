(function(undefined) {
if (!("Intl"in self&&"DateTimeFormat"in self.Intl&&"formatRangeToParts"in self.Intl.DateTimeFormat&&self.Intl.DateTimeFormat.supportedLocalesOf("seh").length
)) {
// Intl.DateTimeFormat.~locale.seh
/* @generated */	

  // prettier-ignore
  if (Intl.DateTimeFormat && typeof Intl.DateTimeFormat.__addLocaleData === 'function') {
    Intl.DateTimeFormat.__addLocaleData({"data":{"am":"AM","pm":"PM","weekday":{"narrow":["D","P","C","T","N","S","S"],"short":["Dim","Pos","Pir","Tat","Nai","Sha","Sab"],"long":["Dimingu","Chiposi","Chipiri","Chitatu","Chinai","Chishanu","Sabudu"]},"era":{"narrow":{"BC":"AC","AD":"AD"},"short":{"BC":"AC","AD":"AD"},"long":{"BC":"Antes de Cristo","AD":"Anno Domini"}},"month":{"narrow":["J","F","M","A","M","J","J","A","S","O","N","D"],"short":["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Aug","Set","Otu","Nov","Dec"],"long":["Janeiro","Fevreiro","Marco","Abril","Maio","Junho","Julho","Augusto","Setembro","Otubro","Novembro","Decembro"]},"timeZoneName":{"UTC":{"short":["UTC","UTC"]}},"gmtFormat":"GMT{0}","hourFormat":"+HH:mm;-HH:mm","dateFormat":{"full":"EEEE, d 'de' MMMM 'de' y","long":"d 'de' MMMM 'de' y","medium":"d 'de' MMM 'de' y","short":"d/M/y"},"timeFormat":{"full":"HH:mm:ss zzzz","long":"HH:mm:ss z","medium":"HH:mm:ss","short":"HH:mm"},"dateTimeFormat":{"full":"{1} {0}","long":"{1} {0}","medium":"{1} {0}","short":"{1} {0}"},"formats":{"gregory":{"Bh":"h B","Bhm":"h:mm B","Bhms":"h:mm:ss B","d":"d","E":"ccc","EBhm":"E h:mm B","EBhms":"E h:mm:ss B","Ed":"d, E","Ehm":"E h:mm a","EHm":"E HH:mm","Ehms":"E h:mm:ss a","EHms":"E HH:mm:ss","Gy":"G y","GyMMM":"G y MMM","GyMMMd":"G y MMM d","GyMMMEd":"G y MMM d, E","h":"h a","H":"HH","HHmm":"HH:mm","HHmmss":"HH:mm:ss","hm":"h:mm a","Hm":"H:mm","hms":"h:mm:ss a","Hms":"HH:mm:ss","hmsv":"h:mm:ss a v","Hmsv":"HH:mm:ss v","hmv":"h:mm a v","Hmv":"HH:mm v","M":"L","Md":"d/M","MEd":"E, dd/MM","MMdd":"dd/MM","MMM":"LLL","MMMd":"d MMM","MMMEd":"E, d MMM","MMMMd":"d MMMM","MMMMEd":"E, d MMMM","mmss":"mm:ss","ms":"mm:ss","y":"y","yM":"MM/y","yMd":"y-MM-dd","yMEd":"E, dd/MM/y","yMM":"MM/y","yMMM":"MMM 'de' y","yMMMd":"d 'de' MMM 'de' y","yMMMEd":"E, d 'de' MMM 'de' y","yMMMM":"MMMM 'de' y","EEEE, d 'de' MMMM 'de' y":"EEEE, d 'de' MMMM 'de' y","d 'de' MMMM 'de' y":"d 'de' MMMM 'de' y","d 'de' MMM 'de' y":"d 'de' MMM 'de' y","d/M/y":"d/M/y","HH:mm:ss zzzz":"HH:mm:ss zzzz","HH:mm:ss z":"HH:mm:ss z","HH:mm:ss":"HH:mm:ss","HH:mm":"HH:mm","EEEE, d 'de' MMMM 'de' y HH:mm:ss zzzz":"EEEE, d 'de' MMMM 'de' y HH:mm:ss zzzz","d 'de' MMMM 'de' y HH:mm:ss zzzz":"d 'de' MMMM 'de' y HH:mm:ss zzzz","d 'de' MMM 'de' y HH:mm:ss zzzz":"d 'de' MMM 'de' y HH:mm:ss zzzz","d/M/y HH:mm:ss zzzz":"d/M/y HH:mm:ss zzzz","d HH:mm:ss zzzz":"d HH:mm:ss zzzz","E HH:mm:ss zzzz":"ccc HH:mm:ss zzzz","Ed HH:mm:ss zzzz":"d, E HH:mm:ss zzzz","Gy HH:mm:ss zzzz":"G y HH:mm:ss zzzz","GyMMM HH:mm:ss zzzz":"G y MMM HH:mm:ss zzzz","GyMMMd HH:mm:ss zzzz":"G y MMM d HH:mm:ss zzzz","GyMMMEd HH:mm:ss zzzz":"G y MMM d, E HH:mm:ss zzzz","M HH:mm:ss zzzz":"L HH:mm:ss zzzz","Md HH:mm:ss zzzz":"d/M HH:mm:ss zzzz","MEd HH:mm:ss zzzz":"E, dd/MM HH:mm:ss zzzz","MMdd HH:mm:ss zzzz":"dd/MM HH:mm:ss zzzz","MMM HH:mm:ss zzzz":"LLL HH:mm:ss zzzz","MMMd HH:mm:ss zzzz":"d MMM HH:mm:ss zzzz","MMMEd HH:mm:ss zzzz":"E, d MMM HH:mm:ss zzzz","MMMMd HH:mm:ss zzzz":"d MMMM HH:mm:ss zzzz","MMMMEd HH:mm:ss zzzz":"E, d MMMM HH:mm:ss zzzz","y HH:mm:ss zzzz":"y HH:mm:ss zzzz","yM HH:mm:ss zzzz":"MM/y HH:mm:ss zzzz","yMd HH:mm:ss zzzz":"y-MM-dd HH:mm:ss zzzz","yMEd HH:mm:ss zzzz":"E, dd/MM/y HH:mm:ss zzzz","yMM HH:mm:ss zzzz":"MM/y HH:mm:ss zzzz","yMMM HH:mm:ss zzzz":"MMM 'de' y HH:mm:ss zzzz","yMMMd HH:mm:ss zzzz":"d 'de' MMM 'de' y HH:mm:ss zzzz","yMMMEd HH:mm:ss zzzz":"E, d 'de' MMM 'de' y HH:mm:ss zzzz","yMMMM HH:mm:ss zzzz":"MMMM 'de' y HH:mm:ss zzzz","EEEE, d 'de' MMMM 'de' y HH:mm:ss z":"EEEE, d 'de' MMMM 'de' y HH:mm:ss z","d 'de' MMMM 'de' y HH:mm:ss z":"d 'de' MMMM 'de' y HH:mm:ss z","d 'de' MMM 'de' y HH:mm:ss z":"d 'de' MMM 'de' y HH:mm:ss z","d/M/y HH:mm:ss z":"d/M/y HH:mm:ss z","d HH:mm:ss z":"d HH:mm:ss z","E HH:mm:ss z":"ccc HH:mm:ss z","Ed HH:mm:ss z":"d, E HH:mm:ss z","Gy HH:mm:ss z":"G y HH:mm:ss z","GyMMM HH:mm:ss z":"G y MMM HH:mm:ss z","GyMMMd HH:mm:ss z":"G y MMM d HH:mm:ss z","GyMMMEd HH:mm:ss z":"G y MMM d, E HH:mm:ss z","M HH:mm:ss z":"L HH:mm:ss z","Md HH:mm:ss z":"d/M HH:mm:ss z","MEd HH:mm:ss z":"E, dd/MM HH:mm:ss z","MMdd HH:mm:ss z":"dd/MM HH:mm:ss z","MMM HH:mm:ss z":"LLL HH:mm:ss z","MMMd HH:mm:ss z":"d MMM HH:mm:ss z","MMMEd HH:mm:ss z":"E, d MMM HH:mm:ss z","MMMMd HH:mm:ss z":"d MMMM HH:mm:ss z","MMMMEd HH:mm:ss z":"E, d MMMM HH:mm:ss z","y HH:mm:ss z":"y HH:mm:ss z","yM HH:mm:ss z":"MM/y HH:mm:ss z","yMd HH:mm:ss z":"y-MM-dd HH:mm:ss z","yMEd HH:mm:ss z":"E, dd/MM/y HH:mm:ss z","yMM HH:mm:ss z":"MM/y HH:mm:ss z","yMMM HH:mm:ss z":"MMM 'de' y HH:mm:ss z","yMMMd HH:mm:ss z":"d 'de' MMM 'de' y HH:mm:ss z","yMMMEd HH:mm:ss z":"E, d 'de' MMM 'de' y HH:mm:ss z","yMMMM HH:mm:ss z":"MMMM 'de' y HH:mm:ss z","EEEE, d 'de' MMMM 'de' y HH:mm:ss":"EEEE, d 'de' MMMM 'de' y HH:mm:ss","d 'de' MMMM 'de' y HH:mm:ss":"d 'de' MMMM 'de' y HH:mm:ss","d 'de' MMM 'de' y HH:mm:ss":"d 'de' MMM 'de' y HH:mm:ss","d/M/y HH:mm:ss":"d/M/y HH:mm:ss","d HH:mm:ss":"d HH:mm:ss","E HH:mm:ss":"ccc HH:mm:ss","Ed HH:mm:ss":"d, E HH:mm:ss","Gy HH:mm:ss":"G y HH:mm:ss","GyMMM HH:mm:ss":"G y MMM HH:mm:ss","GyMMMd HH:mm:ss":"G y MMM d HH:mm:ss","GyMMMEd HH:mm:ss":"G y MMM d, E HH:mm:ss","M HH:mm:ss":"L HH:mm:ss","Md HH:mm:ss":"d/M HH:mm:ss","MEd HH:mm:ss":"E, dd/MM HH:mm:ss","MMdd HH:mm:ss":"dd/MM HH:mm:ss","MMM HH:mm:ss":"LLL HH:mm:ss","MMMd HH:mm:ss":"d MMM HH:mm:ss","MMMEd HH:mm:ss":"E, d MMM HH:mm:ss","MMMMd HH:mm:ss":"d MMMM HH:mm:ss","MMMMEd HH:mm:ss":"E, d MMMM HH:mm:ss","y HH:mm:ss":"y HH:mm:ss","yM HH:mm:ss":"MM/y HH:mm:ss","yMd HH:mm:ss":"y-MM-dd HH:mm:ss","yMEd HH:mm:ss":"E, dd/MM/y HH:mm:ss","yMM HH:mm:ss":"MM/y HH:mm:ss","yMMM HH:mm:ss":"MMM 'de' y HH:mm:ss","yMMMd HH:mm:ss":"d 'de' MMM 'de' y HH:mm:ss","yMMMEd HH:mm:ss":"E, d 'de' MMM 'de' y HH:mm:ss","yMMMM HH:mm:ss":"MMMM 'de' y HH:mm:ss","EEEE, d 'de' MMMM 'de' y HH:mm":"EEEE, d 'de' MMMM 'de' y HH:mm","d 'de' MMMM 'de' y HH:mm":"d 'de' MMMM 'de' y HH:mm","d 'de' MMM 'de' y HH:mm":"d 'de' MMM 'de' y HH:mm","d/M/y HH:mm":"d/M/y HH:mm","d HH:mm":"d HH:mm","E HH:mm":"ccc HH:mm","Ed HH:mm":"d, E HH:mm","Gy HH:mm":"G y HH:mm","GyMMM HH:mm":"G y MMM HH:mm","GyMMMd HH:mm":"G y MMM d HH:mm","GyMMMEd HH:mm":"G y MMM d, E HH:mm","M HH:mm":"L HH:mm","Md HH:mm":"d/M HH:mm","MEd HH:mm":"E, dd/MM HH:mm","MMdd HH:mm":"dd/MM HH:mm","MMM HH:mm":"LLL HH:mm","MMMd HH:mm":"d MMM HH:mm","MMMEd HH:mm":"E, d MMM HH:mm","MMMMd HH:mm":"d MMMM HH:mm","MMMMEd HH:mm":"E, d MMMM HH:mm","y HH:mm":"y HH:mm","yM HH:mm":"MM/y HH:mm","yMd HH:mm":"y-MM-dd HH:mm","yMEd HH:mm":"E, dd/MM/y HH:mm","yMM HH:mm":"MM/y HH:mm","yMMM HH:mm":"MMM 'de' y HH:mm","yMMMd HH:mm":"d 'de' MMM 'de' y HH:mm","yMMMEd HH:mm":"E, d 'de' MMM 'de' y HH:mm","yMMMM HH:mm":"MMMM 'de' y HH:mm","EEEE, d 'de' MMMM 'de' y Bh":"EEEE, d 'de' MMMM 'de' y h B","d 'de' MMMM 'de' y Bh":"d 'de' MMMM 'de' y h B","d 'de' MMM 'de' y Bh":"d 'de' MMM 'de' y h B","d/M/y Bh":"d/M/y h B","d Bh":"d h B","E Bh":"ccc h B","Ed Bh":"d, E h B","Gy Bh":"G y h B","GyMMM Bh":"G y MMM h B","GyMMMd Bh":"G y MMM d h B","GyMMMEd Bh":"G y MMM d, E h B","M Bh":"L h B","Md Bh":"d/M h B","MEd Bh":"E, dd/MM h B","MMdd Bh":"dd/MM h B","MMM Bh":"LLL h B","MMMd Bh":"d MMM h B","MMMEd Bh":"E, d MMM h B","MMMMd Bh":"d MMMM h B","MMMMEd Bh":"E, d MMMM h B","y Bh":"y h B","yM Bh":"MM/y h B","yMd Bh":"y-MM-dd h B","yMEd Bh":"E, dd/MM/y h B","yMM Bh":"MM/y h B","yMMM Bh":"MMM 'de' y h B","yMMMd Bh":"d 'de' MMM 'de' y h B","yMMMEd Bh":"E, d 'de' MMM 'de' y h B","yMMMM Bh":"MMMM 'de' y h B","EEEE, d 'de' MMMM 'de' y Bhm":"EEEE, d 'de' MMMM 'de' y h:mm B","d 'de' MMMM 'de' y Bhm":"d 'de' MMMM 'de' y h:mm B","d 'de' MMM 'de' y Bhm":"d 'de' MMM 'de' y h:mm B","d/M/y Bhm":"d/M/y h:mm B","d Bhm":"d h:mm B","E Bhm":"ccc h:mm B","Ed Bhm":"d, E h:mm B","Gy Bhm":"G y h:mm B","GyMMM Bhm":"G y MMM h:mm B","GyMMMd Bhm":"G y MMM d h:mm B","GyMMMEd Bhm":"G y MMM d, E h:mm B","M Bhm":"L h:mm B","Md Bhm":"d/M h:mm B","MEd Bhm":"E, dd/MM h:mm B","MMdd Bhm":"dd/MM h:mm B","MMM Bhm":"LLL h:mm B","MMMd Bhm":"d MMM h:mm B","MMMEd Bhm":"E, d MMM h:mm B","MMMMd Bhm":"d MMMM h:mm B","MMMMEd Bhm":"E, d MMMM h:mm B","y Bhm":"y h:mm B","yM Bhm":"MM/y h:mm B","yMd Bhm":"y-MM-dd h:mm B","yMEd Bhm":"E, dd/MM/y h:mm B","yMM Bhm":"MM/y h:mm B","yMMM Bhm":"MMM 'de' y h:mm B","yMMMd Bhm":"d 'de' MMM 'de' y h:mm B","yMMMEd Bhm":"E, d 'de' MMM 'de' y h:mm B","yMMMM Bhm":"MMMM 'de' y h:mm B","EEEE, d 'de' MMMM 'de' y Bhms":"EEEE, d 'de' MMMM 'de' y h:mm:ss B","d 'de' MMMM 'de' y Bhms":"d 'de' MMMM 'de' y h:mm:ss B","d 'de' MMM 'de' y Bhms":"d 'de' MMM 'de' y h:mm:ss B","d/M/y Bhms":"d/M/y h:mm:ss B","d Bhms":"d h:mm:ss B","E Bhms":"ccc h:mm:ss B","Ed Bhms":"d, E h:mm:ss B","Gy Bhms":"G y h:mm:ss B","GyMMM Bhms":"G y MMM h:mm:ss B","GyMMMd Bhms":"G y MMM d h:mm:ss B","GyMMMEd Bhms":"G y MMM d, E h:mm:ss B","M Bhms":"L h:mm:ss B","Md Bhms":"d/M h:mm:ss B","MEd Bhms":"E, dd/MM h:mm:ss B","MMdd Bhms":"dd/MM h:mm:ss B","MMM Bhms":"LLL h:mm:ss B","MMMd Bhms":"d MMM h:mm:ss B","MMMEd Bhms":"E, d MMM h:mm:ss B","MMMMd Bhms":"d MMMM h:mm:ss B","MMMMEd Bhms":"E, d MMMM h:mm:ss B","y Bhms":"y h:mm:ss B","yM Bhms":"MM/y h:mm:ss B","yMd Bhms":"y-MM-dd h:mm:ss B","yMEd Bhms":"E, dd/MM/y h:mm:ss B","yMM Bhms":"MM/y h:mm:ss B","yMMM Bhms":"MMM 'de' y h:mm:ss B","yMMMd Bhms":"d 'de' MMM 'de' y h:mm:ss B","yMMMEd Bhms":"E, d 'de' MMM 'de' y h:mm:ss B","yMMMM Bhms":"MMMM 'de' y h:mm:ss B","EEEE, d 'de' MMMM 'de' y h":"EEEE, d 'de' MMMM 'de' y h a","d 'de' MMMM 'de' y h":"d 'de' MMMM 'de' y h a","d 'de' MMM 'de' y h":"d 'de' MMM 'de' y h a","d/M/y h":"d/M/y h a","d h":"d h a","E h":"ccc h a","Ed h":"d, E h a","Gy h":"G y h a","GyMMM h":"G y MMM h a","GyMMMd h":"G y MMM d h a","GyMMMEd h":"G y MMM d, E h a","M h":"L h a","Md h":"d/M h a","MEd h":"E, dd/MM h a","MMdd h":"dd/MM h a","MMM h":"LLL h a","MMMd h":"d MMM h a","MMMEd h":"E, d MMM h a","MMMMd h":"d MMMM h a","MMMMEd h":"E, d MMMM h a","y h":"y h a","yM h":"MM/y h a","yMd h":"y-MM-dd h a","yMEd h":"E, dd/MM/y h a","yMM h":"MM/y h a","yMMM h":"MMM 'de' y h a","yMMMd h":"d 'de' MMM 'de' y h a","yMMMEd h":"E, d 'de' MMM 'de' y h a","yMMMM h":"MMMM 'de' y h a","EEEE, d 'de' MMMM 'de' y H":"EEEE, d 'de' MMMM 'de' y HH","d 'de' MMMM 'de' y H":"d 'de' MMMM 'de' y HH","d 'de' MMM 'de' y H":"d 'de' MMM 'de' y HH","d/M/y H":"d/M/y HH","d H":"d HH","E H":"ccc HH","Ed H":"d, E HH","Gy H":"G y HH","GyMMM H":"G y MMM HH","GyMMMd H":"G y MMM d HH","GyMMMEd H":"G y MMM d, E HH","M H":"L HH","Md H":"d/M HH","MEd H":"E, dd/MM HH","MMdd H":"dd/MM HH","MMM H":"LLL HH","MMMd H":"d MMM HH","MMMEd H":"E, d MMM HH","MMMMd H":"d MMMM HH","MMMMEd H":"E, d MMMM HH","y H":"y HH","yM H":"MM/y HH","yMd H":"y-MM-dd HH","yMEd H":"E, dd/MM/y HH","yMM H":"MM/y HH","yMMM H":"MMM 'de' y HH","yMMMd H":"d 'de' MMM 'de' y HH","yMMMEd H":"E, d 'de' MMM 'de' y HH","yMMMM H":"MMMM 'de' y HH","EEEE, d 'de' MMMM 'de' y HHmm":"EEEE, d 'de' MMMM 'de' y HH:mm","d 'de' MMMM 'de' y HHmm":"d 'de' MMMM 'de' y HH:mm","d 'de' MMM 'de' y HHmm":"d 'de' MMM 'de' y HH:mm","d/M/y HHmm":"d/M/y HH:mm","d HHmm":"d HH:mm","E HHmm":"ccc HH:mm","Ed HHmm":"d, E HH:mm","Gy HHmm":"G y HH:mm","GyMMM HHmm":"G y MMM HH:mm","GyMMMd HHmm":"G y MMM d HH:mm","GyMMMEd HHmm":"G y MMM d, E HH:mm","M HHmm":"L HH:mm","Md HHmm":"d/M HH:mm","MEd HHmm":"E, dd/MM HH:mm","MMdd HHmm":"dd/MM HH:mm","MMM HHmm":"LLL HH:mm","MMMd HHmm":"d MMM HH:mm","MMMEd HHmm":"E, d MMM HH:mm","MMMMd HHmm":"d MMMM HH:mm","MMMMEd HHmm":"E, d MMMM HH:mm","y HHmm":"y HH:mm","yM HHmm":"MM/y HH:mm","yMd HHmm":"y-MM-dd HH:mm","yMEd HHmm":"E, dd/MM/y HH:mm","yMM HHmm":"MM/y HH:mm","yMMM HHmm":"MMM 'de' y HH:mm","yMMMd HHmm":"d 'de' MMM 'de' y HH:mm","yMMMEd HHmm":"E, d 'de' MMM 'de' y HH:mm","yMMMM HHmm":"MMMM 'de' y HH:mm","EEEE, d 'de' MMMM 'de' y HHmmss":"EEEE, d 'de' MMMM 'de' y HH:mm:ss","d 'de' MMMM 'de' y HHmmss":"d 'de' MMMM 'de' y HH:mm:ss","d 'de' MMM 'de' y HHmmss":"d 'de' MMM 'de' y HH:mm:ss","d/M/y HHmmss":"d/M/y HH:mm:ss","d HHmmss":"d HH:mm:ss","E HHmmss":"ccc HH:mm:ss","Ed HHmmss":"d, E HH:mm:ss","Gy HHmmss":"G y HH:mm:ss","GyMMM HHmmss":"G y MMM HH:mm:ss","GyMMMd HHmmss":"G y MMM d HH:mm:ss","GyMMMEd HHmmss":"G y MMM d, E HH:mm:ss","M HHmmss":"L HH:mm:ss","Md HHmmss":"d/M HH:mm:ss","MEd HHmmss":"E, dd/MM HH:mm:ss","MMdd HHmmss":"dd/MM HH:mm:ss","MMM HHmmss":"LLL HH:mm:ss","MMMd HHmmss":"d MMM HH:mm:ss","MMMEd HHmmss":"E, d MMM HH:mm:ss","MMMMd HHmmss":"d MMMM HH:mm:ss","MMMMEd HHmmss":"E, d MMMM HH:mm:ss","y HHmmss":"y HH:mm:ss","yM HHmmss":"MM/y HH:mm:ss","yMd HHmmss":"y-MM-dd HH:mm:ss","yMEd HHmmss":"E, dd/MM/y HH:mm:ss","yMM HHmmss":"MM/y HH:mm:ss","yMMM HHmmss":"MMM 'de' y HH:mm:ss","yMMMd HHmmss":"d 'de' MMM 'de' y HH:mm:ss","yMMMEd HHmmss":"E, d 'de' MMM 'de' y HH:mm:ss","yMMMM HHmmss":"MMMM 'de' y HH:mm:ss","EEEE, d 'de' MMMM 'de' y hm":"EEEE, d 'de' MMMM 'de' y h:mm a","d 'de' MMMM 'de' y hm":"d 'de' MMMM 'de' y h:mm a","d 'de' MMM 'de' y hm":"d 'de' MMM 'de' y h:mm a","d/M/y hm":"d/M/y h:mm a","d hm":"d h:mm a","E hm":"ccc h:mm a","Ed hm":"d, E h:mm a","Gy hm":"G y h:mm a","GyMMM hm":"G y MMM h:mm a","GyMMMd hm":"G y MMM d h:mm a","GyMMMEd hm":"G y MMM d, E h:mm a","M hm":"L h:mm a","Md hm":"d/M h:mm a","MEd hm":"E, dd/MM h:mm a","MMdd hm":"dd/MM h:mm a","MMM hm":"LLL h:mm a","MMMd hm":"d MMM h:mm a","MMMEd hm":"E, d MMM h:mm a","MMMMd hm":"d MMMM h:mm a","MMMMEd hm":"E, d MMMM h:mm a","y hm":"y h:mm a","yM hm":"MM/y h:mm a","yMd hm":"y-MM-dd h:mm a","yMEd hm":"E, dd/MM/y h:mm a","yMM hm":"MM/y h:mm a","yMMM hm":"MMM 'de' y h:mm a","yMMMd hm":"d 'de' MMM 'de' y h:mm a","yMMMEd hm":"E, d 'de' MMM 'de' y h:mm a","yMMMM hm":"MMMM 'de' y h:mm a","EEEE, d 'de' MMMM 'de' y Hm":"EEEE, d 'de' MMMM 'de' y H:mm","d 'de' MMMM 'de' y Hm":"d 'de' MMMM 'de' y H:mm","d 'de' MMM 'de' y Hm":"d 'de' MMM 'de' y H:mm","d/M/y Hm":"d/M/y H:mm","d Hm":"d H:mm","E Hm":"ccc H:mm","Ed Hm":"d, E H:mm","Gy Hm":"G y H:mm","GyMMM Hm":"G y MMM H:mm","GyMMMd Hm":"G y MMM d H:mm","GyMMMEd Hm":"G y MMM d, E H:mm","M Hm":"L H:mm","Md Hm":"d/M H:mm","MEd Hm":"E, dd/MM H:mm","MMdd Hm":"dd/MM H:mm","MMM Hm":"LLL H:mm","MMMd Hm":"d MMM H:mm","MMMEd Hm":"E, d MMM H:mm","MMMMd Hm":"d MMMM H:mm","MMMMEd Hm":"E, d MMMM H:mm","y Hm":"y H:mm","yM Hm":"MM/y H:mm","yMd Hm":"y-MM-dd H:mm","yMEd Hm":"E, dd/MM/y H:mm","yMM Hm":"MM/y H:mm","yMMM Hm":"MMM 'de' y H:mm","yMMMd Hm":"d 'de' MMM 'de' y H:mm","yMMMEd Hm":"E, d 'de' MMM 'de' y H:mm","yMMMM Hm":"MMMM 'de' y H:mm","EEEE, d 'de' MMMM 'de' y hms":"EEEE, d 'de' MMMM 'de' y h:mm:ss a","d 'de' MMMM 'de' y hms":"d 'de' MMMM 'de' y h:mm:ss a","d 'de' MMM 'de' y hms":"d 'de' MMM 'de' y h:mm:ss a","d/M/y hms":"d/M/y h:mm:ss a","d hms":"d h:mm:ss a","E hms":"ccc h:mm:ss a","Ed hms":"d, E h:mm:ss a","Gy hms":"G y h:mm:ss a","GyMMM hms":"G y MMM h:mm:ss a","GyMMMd hms":"G y MMM d h:mm:ss a","GyMMMEd hms":"G y MMM d, E h:mm:ss a","M hms":"L h:mm:ss a","Md hms":"d/M h:mm:ss a","MEd hms":"E, dd/MM h:mm:ss a","MMdd hms":"dd/MM h:mm:ss a","MMM hms":"LLL h:mm:ss a","MMMd hms":"d MMM h:mm:ss a","MMMEd hms":"E, d MMM h:mm:ss a","MMMMd hms":"d MMMM h:mm:ss a","MMMMEd hms":"E, d MMMM h:mm:ss a","y hms":"y h:mm:ss a","yM hms":"MM/y h:mm:ss a","yMd hms":"y-MM-dd h:mm:ss a","yMEd hms":"E, dd/MM/y h:mm:ss a","yMM hms":"MM/y h:mm:ss a","yMMM hms":"MMM 'de' y h:mm:ss a","yMMMd hms":"d 'de' MMM 'de' y h:mm:ss a","yMMMEd hms":"E, d 'de' MMM 'de' y h:mm:ss a","yMMMM hms":"MMMM 'de' y h:mm:ss a","EEEE, d 'de' MMMM 'de' y Hms":"EEEE, d 'de' MMMM 'de' y HH:mm:ss","d 'de' MMMM 'de' y Hms":"d 'de' MMMM 'de' y HH:mm:ss","d 'de' MMM 'de' y Hms":"d 'de' MMM 'de' y HH:mm:ss","d/M/y Hms":"d/M/y HH:mm:ss","d Hms":"d HH:mm:ss","E Hms":"ccc HH:mm:ss","Ed Hms":"d, E HH:mm:ss","Gy Hms":"G y HH:mm:ss","GyMMM Hms":"G y MMM HH:mm:ss","GyMMMd Hms":"G y MMM d HH:mm:ss","GyMMMEd Hms":"G y MMM d, E HH:mm:ss","M Hms":"L HH:mm:ss","Md Hms":"d/M HH:mm:ss","MEd Hms":"E, dd/MM HH:mm:ss","MMdd Hms":"dd/MM HH:mm:ss","MMM Hms":"LLL HH:mm:ss","MMMd Hms":"d MMM HH:mm:ss","MMMEd Hms":"E, d MMM HH:mm:ss","MMMMd Hms":"d MMMM HH:mm:ss","MMMMEd Hms":"E, d MMMM HH:mm:ss","y Hms":"y HH:mm:ss","yM Hms":"MM/y HH:mm:ss","yMd Hms":"y-MM-dd HH:mm:ss","yMEd Hms":"E, dd/MM/y HH:mm:ss","yMM Hms":"MM/y HH:mm:ss","yMMM Hms":"MMM 'de' y HH:mm:ss","yMMMd Hms":"d 'de' MMM 'de' y HH:mm:ss","yMMMEd Hms":"E, d 'de' MMM 'de' y HH:mm:ss","yMMMM Hms":"MMMM 'de' y HH:mm:ss","EEEE, d 'de' MMMM 'de' y hmsv":"EEEE, d 'de' MMMM 'de' y h:mm:ss a v","d 'de' MMMM 'de' y hmsv":"d 'de' MMMM 'de' y h:mm:ss a v","d 'de' MMM 'de' y hmsv":"d 'de' MMM 'de' y h:mm:ss a v","d/M/y hmsv":"d/M/y h:mm:ss a v","d hmsv":"d h:mm:ss a v","E hmsv":"ccc h:mm:ss a v","Ed hmsv":"d, E h:mm:ss a v","Gy hmsv":"G y h:mm:ss a v","GyMMM hmsv":"G y MMM h:mm:ss a v","GyMMMd hmsv":"G y MMM d h:mm:ss a v","GyMMMEd hmsv":"G y MMM d, E h:mm:ss a v","M hmsv":"L h:mm:ss a v","Md hmsv":"d/M h:mm:ss a v","MEd hmsv":"E, dd/MM h:mm:ss a v","MMdd hmsv":"dd/MM h:mm:ss a v","MMM hmsv":"LLL h:mm:ss a v","MMMd hmsv":"d MMM h:mm:ss a v","MMMEd hmsv":"E, d MMM h:mm:ss a v","MMMMd hmsv":"d MMMM h:mm:ss a v","MMMMEd hmsv":"E, d MMMM h:mm:ss a v","y hmsv":"y h:mm:ss a v","yM hmsv":"MM/y h:mm:ss a v","yMd hmsv":"y-MM-dd h:mm:ss a v","yMEd hmsv":"E, dd/MM/y h:mm:ss a v","yMM hmsv":"MM/y h:mm:ss a v","yMMM hmsv":"MMM 'de' y h:mm:ss a v","yMMMd hmsv":"d 'de' MMM 'de' y h:mm:ss a v","yMMMEd hmsv":"E, d 'de' MMM 'de' y h:mm:ss a v","yMMMM hmsv":"MMMM 'de' y h:mm:ss a v","EEEE, d 'de' MMMM 'de' y Hmsv":"EEEE, d 'de' MMMM 'de' y HH:mm:ss v","d 'de' MMMM 'de' y Hmsv":"d 'de' MMMM 'de' y HH:mm:ss v","d 'de' MMM 'de' y Hmsv":"d 'de' MMM 'de' y HH:mm:ss v","d/M/y Hmsv":"d/M/y HH:mm:ss v","d Hmsv":"d HH:mm:ss v","E Hmsv":"ccc HH:mm:ss v","Ed Hmsv":"d, E HH:mm:ss v","Gy Hmsv":"G y HH:mm:ss v","GyMMM Hmsv":"G y MMM HH:mm:ss v","GyMMMd Hmsv":"G y MMM d HH:mm:ss v","GyMMMEd Hmsv":"G y MMM d, E HH:mm:ss v","M Hmsv":"L HH:mm:ss v","Md Hmsv":"d/M HH:mm:ss v","MEd Hmsv":"E, dd/MM HH:mm:ss v","MMdd Hmsv":"dd/MM HH:mm:ss v","MMM Hmsv":"LLL HH:mm:ss v","MMMd Hmsv":"d MMM HH:mm:ss v","MMMEd Hmsv":"E, d MMM HH:mm:ss v","MMMMd Hmsv":"d MMMM HH:mm:ss v","MMMMEd Hmsv":"E, d MMMM HH:mm:ss v","y Hmsv":"y HH:mm:ss v","yM Hmsv":"MM/y HH:mm:ss v","yMd Hmsv":"y-MM-dd HH:mm:ss v","yMEd Hmsv":"E, dd/MM/y HH:mm:ss v","yMM Hmsv":"MM/y HH:mm:ss v","yMMM Hmsv":"MMM 'de' y HH:mm:ss v","yMMMd Hmsv":"d 'de' MMM 'de' y HH:mm:ss v","yMMMEd Hmsv":"E, d 'de' MMM 'de' y HH:mm:ss v","yMMMM Hmsv":"MMMM 'de' y HH:mm:ss v","EEEE, d 'de' MMMM 'de' y hmv":"EEEE, d 'de' MMMM 'de' y h:mm a v","d 'de' MMMM 'de' y hmv":"d 'de' MMMM 'de' y h:mm a v","d 'de' MMM 'de' y hmv":"d 'de' MMM 'de' y h:mm a v","d/M/y hmv":"d/M/y h:mm a v","d hmv":"d h:mm a v","E hmv":"ccc h:mm a v","Ed hmv":"d, E h:mm a v","Gy hmv":"G y h:mm a v","GyMMM hmv":"G y MMM h:mm a v","GyMMMd hmv":"G y MMM d h:mm a v","GyMMMEd hmv":"G y MMM d, E h:mm a v","M hmv":"L h:mm a v","Md hmv":"d/M h:mm a v","MEd hmv":"E, dd/MM h:mm a v","MMdd hmv":"dd/MM h:mm a v","MMM hmv":"LLL h:mm a v","MMMd hmv":"d MMM h:mm a v","MMMEd hmv":"E, d MMM h:mm a v","MMMMd hmv":"d MMMM h:mm a v","MMMMEd hmv":"E, d MMMM h:mm a v","y hmv":"y h:mm a v","yM hmv":"MM/y h:mm a v","yMd hmv":"y-MM-dd h:mm a v","yMEd hmv":"E, dd/MM/y h:mm a v","yMM hmv":"MM/y h:mm a v","yMMM hmv":"MMM 'de' y h:mm a v","yMMMd hmv":"d 'de' MMM 'de' y h:mm a v","yMMMEd hmv":"E, d 'de' MMM 'de' y h:mm a v","yMMMM hmv":"MMMM 'de' y h:mm a v","EEEE, d 'de' MMMM 'de' y Hmv":"EEEE, d 'de' MMMM 'de' y HH:mm v","d 'de' MMMM 'de' y Hmv":"d 'de' MMMM 'de' y HH:mm v","d 'de' MMM 'de' y Hmv":"d 'de' MMM 'de' y HH:mm v","d/M/y Hmv":"d/M/y HH:mm v","d Hmv":"d HH:mm v","E Hmv":"ccc HH:mm v","Ed Hmv":"d, E HH:mm v","Gy Hmv":"G y HH:mm v","GyMMM Hmv":"G y MMM HH:mm v","GyMMMd Hmv":"G y MMM d HH:mm v","GyMMMEd Hmv":"G y MMM d, E HH:mm v","M Hmv":"L HH:mm v","Md Hmv":"d/M HH:mm v","MEd Hmv":"E, dd/MM HH:mm v","MMdd Hmv":"dd/MM HH:mm v","MMM Hmv":"LLL HH:mm v","MMMd Hmv":"d MMM HH:mm v","MMMEd Hmv":"E, d MMM HH:mm v","MMMMd Hmv":"d MMMM HH:mm v","MMMMEd Hmv":"E, d MMMM HH:mm v","y Hmv":"y HH:mm v","yM Hmv":"MM/y HH:mm v","yMd Hmv":"y-MM-dd HH:mm v","yMEd Hmv":"E, dd/MM/y HH:mm v","yMM Hmv":"MM/y HH:mm v","yMMM Hmv":"MMM 'de' y HH:mm v","yMMMd Hmv":"d 'de' MMM 'de' y HH:mm v","yMMMEd Hmv":"E, d 'de' MMM 'de' y HH:mm v","yMMMM Hmv":"MMMM 'de' y HH:mm v","EEEE, d 'de' MMMM 'de' y mmss":"EEEE, d 'de' MMMM 'de' y mm:ss","d 'de' MMMM 'de' y mmss":"d 'de' MMMM 'de' y mm:ss","d 'de' MMM 'de' y mmss":"d 'de' MMM 'de' y mm:ss","d/M/y mmss":"d/M/y mm:ss","d mmss":"d mm:ss","E mmss":"ccc mm:ss","Ed mmss":"d, E mm:ss","Gy mmss":"G y mm:ss","GyMMM mmss":"G y MMM mm:ss","GyMMMd mmss":"G y MMM d mm:ss","GyMMMEd mmss":"G y MMM d, E mm:ss","M mmss":"L mm:ss","Md mmss":"d/M mm:ss","MEd mmss":"E, dd/MM mm:ss","MMdd mmss":"dd/MM mm:ss","MMM mmss":"LLL mm:ss","MMMd mmss":"d MMM mm:ss","MMMEd mmss":"E, d MMM mm:ss","MMMMd mmss":"d MMMM mm:ss","MMMMEd mmss":"E, d MMMM mm:ss","y mmss":"y mm:ss","yM mmss":"MM/y mm:ss","yMd mmss":"y-MM-dd mm:ss","yMEd mmss":"E, dd/MM/y mm:ss","yMM mmss":"MM/y mm:ss","yMMM mmss":"MMM 'de' y mm:ss","yMMMd mmss":"d 'de' MMM 'de' y mm:ss","yMMMEd mmss":"E, d 'de' MMM 'de' y mm:ss","yMMMM mmss":"MMMM 'de' y mm:ss","EEEE, d 'de' MMMM 'de' y ms":"EEEE, d 'de' MMMM 'de' y mm:ss","d 'de' MMMM 'de' y ms":"d 'de' MMMM 'de' y mm:ss","d 'de' MMM 'de' y ms":"d 'de' MMM 'de' y mm:ss","d/M/y ms":"d/M/y mm:ss","d ms":"d mm:ss","E ms":"ccc mm:ss","Ed ms":"d, E mm:ss","Gy ms":"G y mm:ss","GyMMM ms":"G y MMM mm:ss","GyMMMd ms":"G y MMM d mm:ss","GyMMMEd ms":"G y MMM d, E mm:ss","M ms":"L mm:ss","Md ms":"d/M mm:ss","MEd ms":"E, dd/MM mm:ss","MMdd ms":"dd/MM mm:ss","MMM ms":"LLL mm:ss","MMMd ms":"d MMM mm:ss","MMMEd ms":"E, d MMM mm:ss","MMMMd ms":"d MMMM mm:ss","MMMMEd ms":"E, d MMMM mm:ss","y ms":"y mm:ss","yM ms":"MM/y mm:ss","yMd ms":"y-MM-dd mm:ss","yMEd ms":"E, dd/MM/y mm:ss","yMM ms":"MM/y mm:ss","yMMM ms":"MMM 'de' y mm:ss","yMMMd ms":"d 'de' MMM 'de' y mm:ss","yMMMEd ms":"E, d 'de' MMM 'de' y mm:ss","yMMMM ms":"MMMM 'de' y mm:ss"}},"intervalFormats":{"intervalFormatFallback":"{0} – {1}","Bh":{"B":"h B – h B","h":"h–h B"},"Bhm":{"B":"h:mm B – h:mm B","h":"h:mm–h:mm B","m":"h:mm–h:mm B"},"d":{"d":"d–d"},"Gy":{"G":"G y – G y","y":"G y–y"},"GyM":{"G":"GGGGG y-MM – GGGGG y-MM","M":"GGGGG y-MM – y-MM","y":"GGGGG y-MM – y-MM"},"GyMd":{"d":"GGGGG y-MM-dd – y-MM-dd","G":"GGGGG y-MM-dd – GGGGG y-MM-dd","M":"GGGGG y-MM-dd – y-MM-dd","y":"GGGGG y-MM-dd – y-MM-dd"},"GyMEd":{"d":"GGGGG y-MM-dd, E – y-MM-dd, E","G":"GGGGG y-MM-dd, E – GGGGG y-MM-dd, E","M":"GGGGG y-MM-dd, E – y-MM-dd, E","y":"GGGGG y-MM-dd, E – y-MM-dd, E"},"GyMMM":{"G":"G y MMM – G y MMM","M":"G y MMM–MMM","y":"G y MMM – y MMM"},"GyMMMd":{"d":"G y MMM d–d","G":"G y MMM d – G y MMM d","M":"G y MMM d – MMM d","y":"G y MMM d – y MMM d"},"GyMMMEd":{"d":"G y MMM d, E – MMM d, E","G":"G y MMM d, E – G y MMM d, E","M":"G y MMM d, E – MMM d, E","y":"G y MMM d, E – y MMM d, E"},"h":{"a":"h a – h a","h":"h–h a"},"H":{"H":"HH–HH"},"hm":{"a":"h:mm a – h:mm a","h":"h:mm–h:mm a","m":"h:mm–h:mm a"},"Hm":{"H":"HH:mm–HH:mm","m":"HH:mm–HH:mm"},"hmv":{"a":"h:mm a – h:mm a v","h":"h:mm–h:mm a v","m":"h:mm–h:mm a v"},"Hmv":{"H":"HH:mm–HH:mm v","m":"HH:mm–HH:mm v"},"hv":{"a":"h a – h a v","h":"h–h a v"},"Hv":{"H":"HH–HH v"},"M":{"M":"MM–MM"},"Md":{"d":"MM-dd – MM-dd","M":"MM-dd – MM-dd"},"MEd":{"d":"MM-dd, E – MM-dd, E","M":"MM-dd, E – MM-dd, E"},"MMM":{"M":"LLL–LLL"},"MMMd":{"d":"MMM d–d","M":"MMM d – MMM d"},"MMMEd":{"d":"MMM d, E – MMM d, E","M":"MMM d, E – MMM d, E"},"y":{"y":"y–y"},"yM":{"M":"y-MM – y-MM","y":"y-MM – y-MM"},"yMd":{"d":"y-MM-dd – y-MM-dd","M":"y-MM-dd – y-MM-dd","y":"y-MM-dd – y-MM-dd"},"yMEd":{"d":"y-MM-dd, E – y-MM-dd, E","M":"y-MM-dd, E – y-MM-dd, E","y":"y-MM-dd, E – y-MM-dd, E"},"yMMM":{"M":"y MMM–MMM","y":"y MMM – y MMM"},"yMMMd":{"d":"y MMM d–d","M":"y MMM d – MMM d","y":"y MMM d – y MMM d"},"yMMMEd":{"d":"y MMM d, E – MMM d, E","M":"y MMM d, E – MMM d, E","y":"y MMM d, E – y MMM d, E"},"yMMMM":{"M":"y MMMM–MMMM","y":"y MMMM – y MMMM"}},"hourCycle":"h23","nu":["latn"],"ca":["gregory"],"hc":["h23",""]},"locale":"seh"}
)
  }}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

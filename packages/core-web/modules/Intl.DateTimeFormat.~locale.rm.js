(function(undefined) {
if (!("Intl"in self&&"DateTimeFormat"in self.Intl&&"formatToParts"in self.Intl.DateTimeFormat&&self.Intl.DateTimeFormat.supportedLocalesOf("rm").length
)) {
// Intl.DateTimeFormat.~locale.rm
/* @generated */	

  // prettier-ignore
  if (Intl.DateTimeFormat && typeof Intl.DateTimeFormat.__addLocaleData === 'function') {
    Intl.DateTimeFormat.__addLocaleData({"data":{"am":"AM","pm":"PM","weekday":{"narrow":["D","G","M","M","G","V","S"],"short":["du","gli","ma","me","gie","ve","so"],"long":["dumengia","glindesdi","mardi","mesemna","gievgia","venderdi","sonda"]},"era":{"narrow":{"BC":"av. Cr.","AD":"s. Cr."},"short":{"BC":"av. Cr.","AD":"s. Cr."},"long":{"BC":"avant Cristus","AD":"suenter Cristus"}},"month":{"narrow":["S","F","M","A","M","Z","F","A","S","O","N","D"],"short":["schan.","favr.","mars","avr.","matg","zercl.","fan.","avust","sett.","oct.","nov.","dec."],"long":["da schaner","da favrer","da mars","d’avrigl","da matg","da zercladur","da fanadur","d’avust","da settember","d’october","da november","da december"]},"timeZoneName":{"America/Chicago":{"long":["Temp da standard central","Temp da stad central"]},"America/Belize":{"long":["Temp da standard central","Temp da stad central"]},"America/Winnipeg":{"long":["Temp da standard central","Temp da stad central"]},"America/Costa_Rica":{"long":["Temp da standard central","Temp da stad central"]},"America/Guatemala":{"long":["Temp da standard central","Temp da stad central"]},"America/Tegucigalpa":{"long":["Temp da standard central","Temp da stad central"]},"America/Mexico_City":{"long":["Temp da standard central","Temp da stad central"]},"America/El_Salvador":{"long":["Temp da standard central","Temp da stad central"]},"America/New_York":{"long":["Temp da standard oriental","Temp da stad oriental"]},"America/Nassau":{"long":["Temp da standard oriental","Temp da stad oriental"]},"America/Toronto":{"long":["Temp da standard oriental","Temp da stad oriental"]},"America/Port-au-Prince":{"long":["Temp da standard oriental","Temp da stad oriental"]},"America/Jamaica":{"long":["Temp da standard oriental","Temp da stad oriental"]},"America/Cayman":{"long":["Temp da standard oriental","Temp da stad oriental"]},"America/Panama":{"long":["Temp da standard oriental","Temp da stad oriental"]},"America/Denver":{"long":["Temp da standard da muntogna","Temp da stad da muntogna"]},"America/Edmonton":{"long":["Temp da standard da muntogna","Temp da stad da muntogna"]},"America/Hermosillo":{"long":["Temp da standard da muntogna","Temp da stad da muntogna"]},"America/Los_Angeles":{"long":["Temp da standard pacific","Temp da stad pacific"]},"America/Vancouver":{"long":["Temp da standard pacific","Temp da stad pacific"]},"America/Tijuana":{"long":["Temp da standard pacific","Temp da stad pacific"]},"America/Halifax":{"long":["Temp da standard atlantic","Temp da stad atlantic"]},"America/Antigua":{"long":["Temp da standard atlantic","Temp da stad atlantic"]},"America/Anguilla":{"long":["Temp da standard atlantic","Temp da stad atlantic"]},"America/Aruba":{"long":["Temp da standard atlantic","Temp da stad atlantic"]},"America/Barbados":{"long":["Temp da standard atlantic","Temp da stad atlantic"]},"Atlantic/Bermuda":{"long":["Temp da standard atlantic","Temp da stad atlantic"]},"America/Kralendijk":{"long":["Temp da standard atlantic","Temp da stad atlantic"]},"America/Curacao":{"long":["Temp da standard atlantic","Temp da stad atlantic"]},"America/Dominica":{"long":["Temp da standard atlantic","Temp da stad atlantic"]},"America/Grenada":{"long":["Temp da standard atlantic","Temp da stad atlantic"]},"America/Thule":{"long":["Temp da standard atlantic","Temp da stad atlantic"]},"America/Guadeloupe":{"long":["Temp da standard atlantic","Temp da stad atlantic"]},"America/St_Kitts":{"long":["Temp da standard atlantic","Temp da stad atlantic"]},"America/St_Lucia":{"long":["Temp da standard atlantic","Temp da stad atlantic"]},"America/Marigot":{"long":["Temp da standard atlantic","Temp da stad atlantic"]},"America/Martinique":{"long":["Temp da standard atlantic","Temp da stad atlantic"]},"America/Montserrat":{"long":["Temp da standard atlantic","Temp da stad atlantic"]},"America/Puerto_Rico":{"long":["Temp da standard atlantic","Temp da stad atlantic"]},"America/Lower_Princes":{"long":["Temp da standard atlantic","Temp da stad atlantic"]},"America/Port_of_Spain":{"long":["Temp da standard atlantic","Temp da stad atlantic"]},"America/St_Vincent":{"long":["Temp da standard atlantic","Temp da stad atlantic"]},"America/Tortola":{"long":["Temp da standard atlantic","Temp da stad atlantic"]},"America/St_Thomas":{"long":["Temp da standard atlantic","Temp da stad atlantic"]},"Europe/London":{"long":["Temp Greenwich","Temp Greenwich"]},"Europe/Paris":{"long":["Temp da standard da l’Europa Centrala","Temp da stad da l’Europa Centrala"]},"Europe/Andorra":{"long":["Temp da standard da l’Europa Centrala","Temp da stad da l’Europa Centrala"]},"Europe/Tirane":{"long":["Temp da standard da l’Europa Centrala","Temp da stad da l’Europa Centrala"]},"Europe/Vienna":{"long":["Temp da standard da l’Europa Centrala","Temp da stad da l’Europa Centrala"]},"Europe/Sarajevo":{"long":["Temp da standard da l’Europa Centrala","Temp da stad da l’Europa Centrala"]},"Europe/Brussels":{"long":["Temp da standard da l’Europa Centrala","Temp da stad da l’Europa Centrala"]},"Europe/Zurich":{"long":["Temp da standard da l’Europa Centrala","Temp da stad da l’Europa Centrala"]},"Europe/Prague":{"long":["Temp da standard da l’Europa Centrala","Temp da stad da l’Europa Centrala"]},"Europe/Berlin":{"long":["Temp da standard da l’Europa Centrala","Temp da stad da l’Europa Centrala"]},"Europe/Copenhagen":{"long":["Temp da standard da l’Europa Centrala","Temp da stad da l’Europa Centrala"]},"Europe/Madrid":{"long":["Temp da standard da l’Europa Centrala","Temp da stad da l’Europa Centrala"]},"Europe/Gibraltar":{"long":["Temp da standard da l’Europa Centrala","Temp da stad da l’Europa Centrala"]},"Europe/Zagreb":{"long":["Temp da standard da l’Europa Centrala","Temp da stad da l’Europa Centrala"]},"Europe/Budapest":{"long":["Temp da standard da l’Europa Centrala","Temp da stad da l’Europa Centrala"]},"Europe/Rome":{"long":["Temp da standard da l’Europa Centrala","Temp da stad da l’Europa Centrala"]},"Europe/Vaduz":{"long":["Temp da standard da l’Europa Centrala","Temp da stad da l’Europa Centrala"]},"Europe/Luxembourg":{"long":["Temp da standard da l’Europa Centrala","Temp da stad da l’Europa Centrala"]},"Europe/Monaco":{"long":["Temp da standard da l’Europa Centrala","Temp da stad da l’Europa Centrala"]},"Europe/Podgorica":{"long":["Temp da standard da l’Europa Centrala","Temp da stad da l’Europa Centrala"]},"Europe/Skopje":{"long":["Temp da standard da l’Europa Centrala","Temp da stad da l’Europa Centrala"]},"Europe/Malta":{"long":["Temp da standard da l’Europa Centrala","Temp da stad da l’Europa Centrala"]},"Europe/Amsterdam":{"long":["Temp da standard da l’Europa Centrala","Temp da stad da l’Europa Centrala"]},"Europe/Oslo":{"long":["Temp da standard da l’Europa Centrala","Temp da stad da l’Europa Centrala"]},"Europe/Warsaw":{"long":["Temp da standard da l’Europa Centrala","Temp da stad da l’Europa Centrala"]},"Europe/Belgrade":{"long":["Temp da standard da l’Europa Centrala","Temp da stad da l’Europa Centrala"]},"Europe/Stockholm":{"long":["Temp da standard da l’Europa Centrala","Temp da stad da l’Europa Centrala"]},"Europe/Ljubljana":{"long":["Temp da standard da l’Europa Centrala","Temp da stad da l’Europa Centrala"]},"Arctic/Longyearbyen":{"long":["Temp da standard da l’Europa Centrala","Temp da stad da l’Europa Centrala"]},"Europe/Bratislava":{"long":["Temp da standard da l’Europa Centrala","Temp da stad da l’Europa Centrala"]},"Europe/San_Marino":{"long":["Temp da standard da l’Europa Centrala","Temp da stad da l’Europa Centrala"]},"Africa/Tunis":{"long":["Temp da standard da l’Europa Centrala","Temp da stad da l’Europa Centrala"]},"Europe/Vatican":{"long":["Temp da standard da l’Europa Centrala","Temp da stad da l’Europa Centrala"]},"Europe/Bucharest":{"long":["Temp da standard da l’Europa Orientala","Temp da stad da l’Europa Orientala"]},"Europe/Mariehamn":{"long":["Temp da standard da l’Europa Orientala","Temp da stad da l’Europa Orientala"]},"Europe/Sofia":{"long":["Temp da standard da l’Europa Orientala","Temp da stad da l’Europa Orientala"]},"Asia/Nicosia":{"long":["Temp da standard da l’Europa Orientala","Temp da stad da l’Europa Orientala"]},"Africa/Cairo":{"long":["Temp da standard da l’Europa Orientala","Temp da stad da l’Europa Orientala"]},"Europe/Helsinki":{"long":["Temp da standard da l’Europa Orientala","Temp da stad da l’Europa Orientala"]},"Europe/Athens":{"long":["Temp da standard da l’Europa Orientala","Temp da stad da l’Europa Orientala"]},"Asia/Amman":{"long":["Temp da standard da l’Europa Orientala","Temp da stad da l’Europa Orientala"]},"Asia/Beirut":{"long":["Temp da standard da l’Europa Orientala","Temp da stad da l’Europa Orientala"]},"Asia/Damascus":{"long":["Temp da standard da l’Europa Orientala","Temp da stad da l’Europa Orientala"]},"Atlantic/Canary":{"long":["Temp da standard da l’Europa dal Vest","Temp da stad da l’Europa dal Vest"]},"Atlantic/Faeroe":{"long":["Temp da standard da l’Europa dal Vest","Temp da stad da l’Europa dal Vest"]},"Atlantic/Reykjavik":{"long":["Temp Greenwich","Temp Greenwich"]},"Africa/Ouagadougou":{"long":["Temp Greenwich","Temp Greenwich"]},"Africa/Abidjan":{"long":["Temp Greenwich","Temp Greenwich"]},"Africa/Accra":{"long":["Temp Greenwich","Temp Greenwich"]},"Africa/Banjul":{"long":["Temp Greenwich","Temp Greenwich"]},"Africa/Conakry":{"long":["Temp Greenwich","Temp Greenwich"]},"Africa/Bamako":{"long":["Temp Greenwich","Temp Greenwich"]},"Africa/Nouakchott":{"long":["Temp Greenwich","Temp Greenwich"]},"Atlantic/St_Helena":{"long":["Temp Greenwich","Temp Greenwich"]},"Africa/Freetown":{"long":["Temp Greenwich","Temp Greenwich"]},"Africa/Dakar":{"long":["Temp Greenwich","Temp Greenwich"]},"Africa/Lome":{"long":["Temp Greenwich","Temp Greenwich"]},"UTC":{"long":["Temp universal coordinà","Temp universal coordinà"],"short":["UTC","UTC"]}},"gmtFormat":"GMT{0}","hourFormat":"+HH:mm;-HH:mm","dateFormat":{"full":"EEEE, 'ils' d MMMM y","long":"d MMMM y","medium":"dd-MM-y","short":"dd-MM-yy"},"timeFormat":{"full":"HH:mm:ss zzzz","long":"HH:mm:ss z","medium":"HH:mm:ss","short":"HH:mm"},"dateTimeFormat":{"full":"{1} {0}","long":"{1} {0}","medium":"{1} {0}","short":"{1} {0}"},"formats":{"gregory":{"Bh":"h B","Bhm":"h:mm B","Bhms":"h:mm:ss B","d":"d","E":"ccc","EBhm":"E h:mm B","EBhms":"E h:mm:ss B","Ed":"E d.","Ehm":"E h:mm a","EHm":"E HH:mm","Ehms":"E h:mm:ss a","EHms":"E HH:mm:ss","Gy":"y G","GyMMM":"LLL y G","GyMMMd":"dd-MM-y GGGGG","GyMMMEd":"E, dd-MM-y GGGGG","GyMMMMd":"d MMMM y G","GyMMMMEd":"E, d MMMM y G","h":"h a","H":"HH","hm":"h:mm a","Hm":"HH:mm","hms":"h:mm:ss a","Hms":"HH:mm:ss","hmsv":"h:mm:ss a v","Hmsv":"HH:mm:ss v","hmv":"h:mm a v","Hmv":"HH:mm v","M":"L","Md":"dd-MM","MEd":"E, dd-MM","MMM":"LLL","MMMd":"dd-MM","MMMEd":"E, dd-MM","MMMMd":"d MMMM","MMMMEd":"E, d MMMM","ms":"mm:ss","y":"y","yM":"LL-y","yMd":"dd-MM-y","yMEd":"E, dd-MM-y","yMMM":"LLL y","yMMMd":"dd-MM-y","yMMMEd":"E, dd-MM-y","yMMMM":"LLLL y","yMMMMd":"d MMMM y","yMMMMEd":"E, d MMMM y","EEEE, 'ils' d MMMM y":"EEEE, 'ils' d MMMM y","d MMMM y":"d MMMM y","dd-MM-y":"dd-MM-y","dd-MM-yy":"dd-MM-yy","HH:mm:ss zzzz":"HH:mm:ss zzzz","HH:mm:ss z":"HH:mm:ss z","HH:mm:ss":"HH:mm:ss","HH:mm":"HH:mm","EEEE, 'ils' d MMMM y HH:mm:ss zzzz":"EEEE, 'ils' d MMMM y HH:mm:ss zzzz","d MMMM y HH:mm:ss zzzz":"d MMMM y HH:mm:ss zzzz","dd-MM-y HH:mm:ss zzzz":"dd-MM-y HH:mm:ss zzzz","dd-MM-yy HH:mm:ss zzzz":"dd-MM-yy HH:mm:ss zzzz","d HH:mm:ss zzzz":"d HH:mm:ss zzzz","E HH:mm:ss zzzz":"ccc HH:mm:ss zzzz","Ed HH:mm:ss zzzz":"E d. HH:mm:ss zzzz","Gy HH:mm:ss zzzz":"y G HH:mm:ss zzzz","GyMMM HH:mm:ss zzzz":"LLL y G HH:mm:ss zzzz","GyMMMd HH:mm:ss zzzz":"dd-MM-y GGGGG HH:mm:ss zzzz","GyMMMEd HH:mm:ss zzzz":"E, dd-MM-y GGGGG HH:mm:ss zzzz","GyMMMMd HH:mm:ss zzzz":"d MMMM y G HH:mm:ss zzzz","GyMMMMEd HH:mm:ss zzzz":"E, d MMMM y G HH:mm:ss zzzz","M HH:mm:ss zzzz":"L HH:mm:ss zzzz","Md HH:mm:ss zzzz":"dd-MM HH:mm:ss zzzz","MEd HH:mm:ss zzzz":"E, dd-MM HH:mm:ss zzzz","MMM HH:mm:ss zzzz":"LLL HH:mm:ss zzzz","MMMd HH:mm:ss zzzz":"dd-MM HH:mm:ss zzzz","MMMEd HH:mm:ss zzzz":"E, dd-MM HH:mm:ss zzzz","MMMMd HH:mm:ss zzzz":"d MMMM HH:mm:ss zzzz","MMMMEd HH:mm:ss zzzz":"E, d MMMM HH:mm:ss zzzz","y HH:mm:ss zzzz":"y HH:mm:ss zzzz","yM HH:mm:ss zzzz":"LL-y HH:mm:ss zzzz","yMd HH:mm:ss zzzz":"dd-MM-y HH:mm:ss zzzz","yMEd HH:mm:ss zzzz":"E, dd-MM-y HH:mm:ss zzzz","yMMM HH:mm:ss zzzz":"LLL y HH:mm:ss zzzz","yMMMd HH:mm:ss zzzz":"dd-MM-y HH:mm:ss zzzz","yMMMEd HH:mm:ss zzzz":"E, dd-MM-y HH:mm:ss zzzz","yMMMM HH:mm:ss zzzz":"LLLL y HH:mm:ss zzzz","yMMMMd HH:mm:ss zzzz":"d MMMM y HH:mm:ss zzzz","yMMMMEd HH:mm:ss zzzz":"E, d MMMM y HH:mm:ss zzzz","EEEE, 'ils' d MMMM y HH:mm:ss z":"EEEE, 'ils' d MMMM y HH:mm:ss z","d MMMM y HH:mm:ss z":"d MMMM y HH:mm:ss z","dd-MM-y HH:mm:ss z":"dd-MM-y HH:mm:ss z","dd-MM-yy HH:mm:ss z":"dd-MM-yy HH:mm:ss z","d HH:mm:ss z":"d HH:mm:ss z","E HH:mm:ss z":"ccc HH:mm:ss z","Ed HH:mm:ss z":"E d. HH:mm:ss z","Gy HH:mm:ss z":"y G HH:mm:ss z","GyMMM HH:mm:ss z":"LLL y G HH:mm:ss z","GyMMMd HH:mm:ss z":"dd-MM-y GGGGG HH:mm:ss z","GyMMMEd HH:mm:ss z":"E, dd-MM-y GGGGG HH:mm:ss z","GyMMMMd HH:mm:ss z":"d MMMM y G HH:mm:ss z","GyMMMMEd HH:mm:ss z":"E, d MMMM y G HH:mm:ss z","M HH:mm:ss z":"L HH:mm:ss z","Md HH:mm:ss z":"dd-MM HH:mm:ss z","MEd HH:mm:ss z":"E, dd-MM HH:mm:ss z","MMM HH:mm:ss z":"LLL HH:mm:ss z","MMMd HH:mm:ss z":"dd-MM HH:mm:ss z","MMMEd HH:mm:ss z":"E, dd-MM HH:mm:ss z","MMMMd HH:mm:ss z":"d MMMM HH:mm:ss z","MMMMEd HH:mm:ss z":"E, d MMMM HH:mm:ss z","y HH:mm:ss z":"y HH:mm:ss z","yM HH:mm:ss z":"LL-y HH:mm:ss z","yMd HH:mm:ss z":"dd-MM-y HH:mm:ss z","yMEd HH:mm:ss z":"E, dd-MM-y HH:mm:ss z","yMMM HH:mm:ss z":"LLL y HH:mm:ss z","yMMMd HH:mm:ss z":"dd-MM-y HH:mm:ss z","yMMMEd HH:mm:ss z":"E, dd-MM-y HH:mm:ss z","yMMMM HH:mm:ss z":"LLLL y HH:mm:ss z","yMMMMd HH:mm:ss z":"d MMMM y HH:mm:ss z","yMMMMEd HH:mm:ss z":"E, d MMMM y HH:mm:ss z","EEEE, 'ils' d MMMM y HH:mm:ss":"EEEE, 'ils' d MMMM y HH:mm:ss","d MMMM y HH:mm:ss":"d MMMM y HH:mm:ss","dd-MM-y HH:mm:ss":"dd-MM-y HH:mm:ss","dd-MM-yy HH:mm:ss":"dd-MM-yy HH:mm:ss","d HH:mm:ss":"d HH:mm:ss","E HH:mm:ss":"ccc HH:mm:ss","Ed HH:mm:ss":"E d. HH:mm:ss","Gy HH:mm:ss":"y G HH:mm:ss","GyMMM HH:mm:ss":"LLL y G HH:mm:ss","GyMMMd HH:mm:ss":"dd-MM-y GGGGG HH:mm:ss","GyMMMEd HH:mm:ss":"E, dd-MM-y GGGGG HH:mm:ss","GyMMMMd HH:mm:ss":"d MMMM y G HH:mm:ss","GyMMMMEd HH:mm:ss":"E, d MMMM y G HH:mm:ss","M HH:mm:ss":"L HH:mm:ss","Md HH:mm:ss":"dd-MM HH:mm:ss","MEd HH:mm:ss":"E, dd-MM HH:mm:ss","MMM HH:mm:ss":"LLL HH:mm:ss","MMMd HH:mm:ss":"dd-MM HH:mm:ss","MMMEd HH:mm:ss":"E, dd-MM HH:mm:ss","MMMMd HH:mm:ss":"d MMMM HH:mm:ss","MMMMEd HH:mm:ss":"E, d MMMM HH:mm:ss","y HH:mm:ss":"y HH:mm:ss","yM HH:mm:ss":"LL-y HH:mm:ss","yMd HH:mm:ss":"dd-MM-y HH:mm:ss","yMEd HH:mm:ss":"E, dd-MM-y HH:mm:ss","yMMM HH:mm:ss":"LLL y HH:mm:ss","yMMMd HH:mm:ss":"dd-MM-y HH:mm:ss","yMMMEd HH:mm:ss":"E, dd-MM-y HH:mm:ss","yMMMM HH:mm:ss":"LLLL y HH:mm:ss","yMMMMd HH:mm:ss":"d MMMM y HH:mm:ss","yMMMMEd HH:mm:ss":"E, d MMMM y HH:mm:ss","EEEE, 'ils' d MMMM y HH:mm":"EEEE, 'ils' d MMMM y HH:mm","d MMMM y HH:mm":"d MMMM y HH:mm","dd-MM-y HH:mm":"dd-MM-y HH:mm","dd-MM-yy HH:mm":"dd-MM-yy HH:mm","d HH:mm":"d HH:mm","E HH:mm":"ccc HH:mm","Ed HH:mm":"E d. HH:mm","Gy HH:mm":"y G HH:mm","GyMMM HH:mm":"LLL y G HH:mm","GyMMMd HH:mm":"dd-MM-y GGGGG HH:mm","GyMMMEd HH:mm":"E, dd-MM-y GGGGG HH:mm","GyMMMMd HH:mm":"d MMMM y G HH:mm","GyMMMMEd HH:mm":"E, d MMMM y G HH:mm","M HH:mm":"L HH:mm","Md HH:mm":"dd-MM HH:mm","MEd HH:mm":"E, dd-MM HH:mm","MMM HH:mm":"LLL HH:mm","MMMd HH:mm":"dd-MM HH:mm","MMMEd HH:mm":"E, dd-MM HH:mm","MMMMd HH:mm":"d MMMM HH:mm","MMMMEd HH:mm":"E, d MMMM HH:mm","y HH:mm":"y HH:mm","yM HH:mm":"LL-y HH:mm","yMd HH:mm":"dd-MM-y HH:mm","yMEd HH:mm":"E, dd-MM-y HH:mm","yMMM HH:mm":"LLL y HH:mm","yMMMd HH:mm":"dd-MM-y HH:mm","yMMMEd HH:mm":"E, dd-MM-y HH:mm","yMMMM HH:mm":"LLLL y HH:mm","yMMMMd HH:mm":"d MMMM y HH:mm","yMMMMEd HH:mm":"E, d MMMM y HH:mm","EEEE, 'ils' d MMMM y Bh":"EEEE, 'ils' d MMMM y h B","d MMMM y Bh":"d MMMM y h B","dd-MM-y Bh":"dd-MM-y h B","dd-MM-yy Bh":"dd-MM-yy h B","d Bh":"d h B","E Bh":"ccc h B","Ed Bh":"E d. h B","Gy Bh":"y G h B","GyMMM Bh":"LLL y G h B","GyMMMd Bh":"dd-MM-y GGGGG h B","GyMMMEd Bh":"E, dd-MM-y GGGGG h B","GyMMMMd Bh":"d MMMM y G h B","GyMMMMEd Bh":"E, d MMMM y G h B","M Bh":"L h B","Md Bh":"dd-MM h B","MEd Bh":"E, dd-MM h B","MMM Bh":"LLL h B","MMMd Bh":"dd-MM h B","MMMEd Bh":"E, dd-MM h B","MMMMd Bh":"d MMMM h B","MMMMEd Bh":"E, d MMMM h B","y Bh":"y h B","yM Bh":"LL-y h B","yMd Bh":"dd-MM-y h B","yMEd Bh":"E, dd-MM-y h B","yMMM Bh":"LLL y h B","yMMMd Bh":"dd-MM-y h B","yMMMEd Bh":"E, dd-MM-y h B","yMMMM Bh":"LLLL y h B","yMMMMd Bh":"d MMMM y h B","yMMMMEd Bh":"E, d MMMM y h B","EEEE, 'ils' d MMMM y Bhm":"EEEE, 'ils' d MMMM y h:mm B","d MMMM y Bhm":"d MMMM y h:mm B","dd-MM-y Bhm":"dd-MM-y h:mm B","dd-MM-yy Bhm":"dd-MM-yy h:mm B","d Bhm":"d h:mm B","E Bhm":"ccc h:mm B","Ed Bhm":"E d. h:mm B","Gy Bhm":"y G h:mm B","GyMMM Bhm":"LLL y G h:mm B","GyMMMd Bhm":"dd-MM-y GGGGG h:mm B","GyMMMEd Bhm":"E, dd-MM-y GGGGG h:mm B","GyMMMMd Bhm":"d MMMM y G h:mm B","GyMMMMEd Bhm":"E, d MMMM y G h:mm B","M Bhm":"L h:mm B","Md Bhm":"dd-MM h:mm B","MEd Bhm":"E, dd-MM h:mm B","MMM Bhm":"LLL h:mm B","MMMd Bhm":"dd-MM h:mm B","MMMEd Bhm":"E, dd-MM h:mm B","MMMMd Bhm":"d MMMM h:mm B","MMMMEd Bhm":"E, d MMMM h:mm B","y Bhm":"y h:mm B","yM Bhm":"LL-y h:mm B","yMd Bhm":"dd-MM-y h:mm B","yMEd Bhm":"E, dd-MM-y h:mm B","yMMM Bhm":"LLL y h:mm B","yMMMd Bhm":"dd-MM-y h:mm B","yMMMEd Bhm":"E, dd-MM-y h:mm B","yMMMM Bhm":"LLLL y h:mm B","yMMMMd Bhm":"d MMMM y h:mm B","yMMMMEd Bhm":"E, d MMMM y h:mm B","EEEE, 'ils' d MMMM y Bhms":"EEEE, 'ils' d MMMM y h:mm:ss B","d MMMM y Bhms":"d MMMM y h:mm:ss B","dd-MM-y Bhms":"dd-MM-y h:mm:ss B","dd-MM-yy Bhms":"dd-MM-yy h:mm:ss B","d Bhms":"d h:mm:ss B","E Bhms":"ccc h:mm:ss B","Ed Bhms":"E d. h:mm:ss B","Gy Bhms":"y G h:mm:ss B","GyMMM Bhms":"LLL y G h:mm:ss B","GyMMMd Bhms":"dd-MM-y GGGGG h:mm:ss B","GyMMMEd Bhms":"E, dd-MM-y GGGGG h:mm:ss B","GyMMMMd Bhms":"d MMMM y G h:mm:ss B","GyMMMMEd Bhms":"E, d MMMM y G h:mm:ss B","M Bhms":"L h:mm:ss B","Md Bhms":"dd-MM h:mm:ss B","MEd Bhms":"E, dd-MM h:mm:ss B","MMM Bhms":"LLL h:mm:ss B","MMMd Bhms":"dd-MM h:mm:ss B","MMMEd Bhms":"E, dd-MM h:mm:ss B","MMMMd Bhms":"d MMMM h:mm:ss B","MMMMEd Bhms":"E, d MMMM h:mm:ss B","y Bhms":"y h:mm:ss B","yM Bhms":"LL-y h:mm:ss B","yMd Bhms":"dd-MM-y h:mm:ss B","yMEd Bhms":"E, dd-MM-y h:mm:ss B","yMMM Bhms":"LLL y h:mm:ss B","yMMMd Bhms":"dd-MM-y h:mm:ss B","yMMMEd Bhms":"E, dd-MM-y h:mm:ss B","yMMMM Bhms":"LLLL y h:mm:ss B","yMMMMd Bhms":"d MMMM y h:mm:ss B","yMMMMEd Bhms":"E, d MMMM y h:mm:ss B","EEEE, 'ils' d MMMM y h":"EEEE, 'ils' d MMMM y h a","d MMMM y h":"d MMMM y h a","dd-MM-y h":"dd-MM-y h a","dd-MM-yy h":"dd-MM-yy h a","d h":"d h a","E h":"ccc h a","Ed h":"E d. h a","Gy h":"y G h a","GyMMM h":"LLL y G h a","GyMMMd h":"dd-MM-y GGGGG h a","GyMMMEd h":"E, dd-MM-y GGGGG h a","GyMMMMd h":"d MMMM y G h a","GyMMMMEd h":"E, d MMMM y G h a","M h":"L h a","Md h":"dd-MM h a","MEd h":"E, dd-MM h a","MMM h":"LLL h a","MMMd h":"dd-MM h a","MMMEd h":"E, dd-MM h a","MMMMd h":"d MMMM h a","MMMMEd h":"E, d MMMM h a","y h":"y h a","yM h":"LL-y h a","yMd h":"dd-MM-y h a","yMEd h":"E, dd-MM-y h a","yMMM h":"LLL y h a","yMMMd h":"dd-MM-y h a","yMMMEd h":"E, dd-MM-y h a","yMMMM h":"LLLL y h a","yMMMMd h":"d MMMM y h a","yMMMMEd h":"E, d MMMM y h a","EEEE, 'ils' d MMMM y H":"EEEE, 'ils' d MMMM y HH","d MMMM y H":"d MMMM y HH","dd-MM-y H":"dd-MM-y HH","dd-MM-yy H":"dd-MM-yy HH","d H":"d HH","E H":"ccc HH","Ed H":"E d. HH","Gy H":"y G HH","GyMMM H":"LLL y G HH","GyMMMd H":"dd-MM-y GGGGG HH","GyMMMEd H":"E, dd-MM-y GGGGG HH","GyMMMMd H":"d MMMM y G HH","GyMMMMEd H":"E, d MMMM y G HH","M H":"L HH","Md H":"dd-MM HH","MEd H":"E, dd-MM HH","MMM H":"LLL HH","MMMd H":"dd-MM HH","MMMEd H":"E, dd-MM HH","MMMMd H":"d MMMM HH","MMMMEd H":"E, d MMMM HH","y H":"y HH","yM H":"LL-y HH","yMd H":"dd-MM-y HH","yMEd H":"E, dd-MM-y HH","yMMM H":"LLL y HH","yMMMd H":"dd-MM-y HH","yMMMEd H":"E, dd-MM-y HH","yMMMM H":"LLLL y HH","yMMMMd H":"d MMMM y HH","yMMMMEd H":"E, d MMMM y HH","EEEE, 'ils' d MMMM y hm":"EEEE, 'ils' d MMMM y h:mm a","d MMMM y hm":"d MMMM y h:mm a","dd-MM-y hm":"dd-MM-y h:mm a","dd-MM-yy hm":"dd-MM-yy h:mm a","d hm":"d h:mm a","E hm":"ccc h:mm a","Ed hm":"E d. h:mm a","Gy hm":"y G h:mm a","GyMMM hm":"LLL y G h:mm a","GyMMMd hm":"dd-MM-y GGGGG h:mm a","GyMMMEd hm":"E, dd-MM-y GGGGG h:mm a","GyMMMMd hm":"d MMMM y G h:mm a","GyMMMMEd hm":"E, d MMMM y G h:mm a","M hm":"L h:mm a","Md hm":"dd-MM h:mm a","MEd hm":"E, dd-MM h:mm a","MMM hm":"LLL h:mm a","MMMd hm":"dd-MM h:mm a","MMMEd hm":"E, dd-MM h:mm a","MMMMd hm":"d MMMM h:mm a","MMMMEd hm":"E, d MMMM h:mm a","y hm":"y h:mm a","yM hm":"LL-y h:mm a","yMd hm":"dd-MM-y h:mm a","yMEd hm":"E, dd-MM-y h:mm a","yMMM hm":"LLL y h:mm a","yMMMd hm":"dd-MM-y h:mm a","yMMMEd hm":"E, dd-MM-y h:mm a","yMMMM hm":"LLLL y h:mm a","yMMMMd hm":"d MMMM y h:mm a","yMMMMEd hm":"E, d MMMM y h:mm a","EEEE, 'ils' d MMMM y Hm":"EEEE, 'ils' d MMMM y HH:mm","d MMMM y Hm":"d MMMM y HH:mm","dd-MM-y Hm":"dd-MM-y HH:mm","dd-MM-yy Hm":"dd-MM-yy HH:mm","d Hm":"d HH:mm","E Hm":"ccc HH:mm","Ed Hm":"E d. HH:mm","Gy Hm":"y G HH:mm","GyMMM Hm":"LLL y G HH:mm","GyMMMd Hm":"dd-MM-y GGGGG HH:mm","GyMMMEd Hm":"E, dd-MM-y GGGGG HH:mm","GyMMMMd Hm":"d MMMM y G HH:mm","GyMMMMEd Hm":"E, d MMMM y G HH:mm","M Hm":"L HH:mm","Md Hm":"dd-MM HH:mm","MEd Hm":"E, dd-MM HH:mm","MMM Hm":"LLL HH:mm","MMMd Hm":"dd-MM HH:mm","MMMEd Hm":"E, dd-MM HH:mm","MMMMd Hm":"d MMMM HH:mm","MMMMEd Hm":"E, d MMMM HH:mm","y Hm":"y HH:mm","yM Hm":"LL-y HH:mm","yMd Hm":"dd-MM-y HH:mm","yMEd Hm":"E, dd-MM-y HH:mm","yMMM Hm":"LLL y HH:mm","yMMMd Hm":"dd-MM-y HH:mm","yMMMEd Hm":"E, dd-MM-y HH:mm","yMMMM Hm":"LLLL y HH:mm","yMMMMd Hm":"d MMMM y HH:mm","yMMMMEd Hm":"E, d MMMM y HH:mm","EEEE, 'ils' d MMMM y hms":"EEEE, 'ils' d MMMM y h:mm:ss a","d MMMM y hms":"d MMMM y h:mm:ss a","dd-MM-y hms":"dd-MM-y h:mm:ss a","dd-MM-yy hms":"dd-MM-yy h:mm:ss a","d hms":"d h:mm:ss a","E hms":"ccc h:mm:ss a","Ed hms":"E d. h:mm:ss a","Gy hms":"y G h:mm:ss a","GyMMM hms":"LLL y G h:mm:ss a","GyMMMd hms":"dd-MM-y GGGGG h:mm:ss a","GyMMMEd hms":"E, dd-MM-y GGGGG h:mm:ss a","GyMMMMd hms":"d MMMM y G h:mm:ss a","GyMMMMEd hms":"E, d MMMM y G h:mm:ss a","M hms":"L h:mm:ss a","Md hms":"dd-MM h:mm:ss a","MEd hms":"E, dd-MM h:mm:ss a","MMM hms":"LLL h:mm:ss a","MMMd hms":"dd-MM h:mm:ss a","MMMEd hms":"E, dd-MM h:mm:ss a","MMMMd hms":"d MMMM h:mm:ss a","MMMMEd hms":"E, d MMMM h:mm:ss a","y hms":"y h:mm:ss a","yM hms":"LL-y h:mm:ss a","yMd hms":"dd-MM-y h:mm:ss a","yMEd hms":"E, dd-MM-y h:mm:ss a","yMMM hms":"LLL y h:mm:ss a","yMMMd hms":"dd-MM-y h:mm:ss a","yMMMEd hms":"E, dd-MM-y h:mm:ss a","yMMMM hms":"LLLL y h:mm:ss a","yMMMMd hms":"d MMMM y h:mm:ss a","yMMMMEd hms":"E, d MMMM y h:mm:ss a","EEEE, 'ils' d MMMM y Hms":"EEEE, 'ils' d MMMM y HH:mm:ss","d MMMM y Hms":"d MMMM y HH:mm:ss","dd-MM-y Hms":"dd-MM-y HH:mm:ss","dd-MM-yy Hms":"dd-MM-yy HH:mm:ss","d Hms":"d HH:mm:ss","E Hms":"ccc HH:mm:ss","Ed Hms":"E d. HH:mm:ss","Gy Hms":"y G HH:mm:ss","GyMMM Hms":"LLL y G HH:mm:ss","GyMMMd Hms":"dd-MM-y GGGGG HH:mm:ss","GyMMMEd Hms":"E, dd-MM-y GGGGG HH:mm:ss","GyMMMMd Hms":"d MMMM y G HH:mm:ss","GyMMMMEd Hms":"E, d MMMM y G HH:mm:ss","M Hms":"L HH:mm:ss","Md Hms":"dd-MM HH:mm:ss","MEd Hms":"E, dd-MM HH:mm:ss","MMM Hms":"LLL HH:mm:ss","MMMd Hms":"dd-MM HH:mm:ss","MMMEd Hms":"E, dd-MM HH:mm:ss","MMMMd Hms":"d MMMM HH:mm:ss","MMMMEd Hms":"E, d MMMM HH:mm:ss","y Hms":"y HH:mm:ss","yM Hms":"LL-y HH:mm:ss","yMd Hms":"dd-MM-y HH:mm:ss","yMEd Hms":"E, dd-MM-y HH:mm:ss","yMMM Hms":"LLL y HH:mm:ss","yMMMd Hms":"dd-MM-y HH:mm:ss","yMMMEd Hms":"E, dd-MM-y HH:mm:ss","yMMMM Hms":"LLLL y HH:mm:ss","yMMMMd Hms":"d MMMM y HH:mm:ss","yMMMMEd Hms":"E, d MMMM y HH:mm:ss","EEEE, 'ils' d MMMM y hmsv":"EEEE, 'ils' d MMMM y h:mm:ss a v","d MMMM y hmsv":"d MMMM y h:mm:ss a v","dd-MM-y hmsv":"dd-MM-y h:mm:ss a v","dd-MM-yy hmsv":"dd-MM-yy h:mm:ss a v","d hmsv":"d h:mm:ss a v","E hmsv":"ccc h:mm:ss a v","Ed hmsv":"E d. h:mm:ss a v","Gy hmsv":"y G h:mm:ss a v","GyMMM hmsv":"LLL y G h:mm:ss a v","GyMMMd hmsv":"dd-MM-y GGGGG h:mm:ss a v","GyMMMEd hmsv":"E, dd-MM-y GGGGG h:mm:ss a v","GyMMMMd hmsv":"d MMMM y G h:mm:ss a v","GyMMMMEd hmsv":"E, d MMMM y G h:mm:ss a v","M hmsv":"L h:mm:ss a v","Md hmsv":"dd-MM h:mm:ss a v","MEd hmsv":"E, dd-MM h:mm:ss a v","MMM hmsv":"LLL h:mm:ss a v","MMMd hmsv":"dd-MM h:mm:ss a v","MMMEd hmsv":"E, dd-MM h:mm:ss a v","MMMMd hmsv":"d MMMM h:mm:ss a v","MMMMEd hmsv":"E, d MMMM h:mm:ss a v","y hmsv":"y h:mm:ss a v","yM hmsv":"LL-y h:mm:ss a v","yMd hmsv":"dd-MM-y h:mm:ss a v","yMEd hmsv":"E, dd-MM-y h:mm:ss a v","yMMM hmsv":"LLL y h:mm:ss a v","yMMMd hmsv":"dd-MM-y h:mm:ss a v","yMMMEd hmsv":"E, dd-MM-y h:mm:ss a v","yMMMM hmsv":"LLLL y h:mm:ss a v","yMMMMd hmsv":"d MMMM y h:mm:ss a v","yMMMMEd hmsv":"E, d MMMM y h:mm:ss a v","EEEE, 'ils' d MMMM y Hmsv":"EEEE, 'ils' d MMMM y HH:mm:ss v","d MMMM y Hmsv":"d MMMM y HH:mm:ss v","dd-MM-y Hmsv":"dd-MM-y HH:mm:ss v","dd-MM-yy Hmsv":"dd-MM-yy HH:mm:ss v","d Hmsv":"d HH:mm:ss v","E Hmsv":"ccc HH:mm:ss v","Ed Hmsv":"E d. HH:mm:ss v","Gy Hmsv":"y G HH:mm:ss v","GyMMM Hmsv":"LLL y G HH:mm:ss v","GyMMMd Hmsv":"dd-MM-y GGGGG HH:mm:ss v","GyMMMEd Hmsv":"E, dd-MM-y GGGGG HH:mm:ss v","GyMMMMd Hmsv":"d MMMM y G HH:mm:ss v","GyMMMMEd Hmsv":"E, d MMMM y G HH:mm:ss v","M Hmsv":"L HH:mm:ss v","Md Hmsv":"dd-MM HH:mm:ss v","MEd Hmsv":"E, dd-MM HH:mm:ss v","MMM Hmsv":"LLL HH:mm:ss v","MMMd Hmsv":"dd-MM HH:mm:ss v","MMMEd Hmsv":"E, dd-MM HH:mm:ss v","MMMMd Hmsv":"d MMMM HH:mm:ss v","MMMMEd Hmsv":"E, d MMMM HH:mm:ss v","y Hmsv":"y HH:mm:ss v","yM Hmsv":"LL-y HH:mm:ss v","yMd Hmsv":"dd-MM-y HH:mm:ss v","yMEd Hmsv":"E, dd-MM-y HH:mm:ss v","yMMM Hmsv":"LLL y HH:mm:ss v","yMMMd Hmsv":"dd-MM-y HH:mm:ss v","yMMMEd Hmsv":"E, dd-MM-y HH:mm:ss v","yMMMM Hmsv":"LLLL y HH:mm:ss v","yMMMMd Hmsv":"d MMMM y HH:mm:ss v","yMMMMEd Hmsv":"E, d MMMM y HH:mm:ss v","EEEE, 'ils' d MMMM y hmv":"EEEE, 'ils' d MMMM y h:mm a v","d MMMM y hmv":"d MMMM y h:mm a v","dd-MM-y hmv":"dd-MM-y h:mm a v","dd-MM-yy hmv":"dd-MM-yy h:mm a v","d hmv":"d h:mm a v","E hmv":"ccc h:mm a v","Ed hmv":"E d. h:mm a v","Gy hmv":"y G h:mm a v","GyMMM hmv":"LLL y G h:mm a v","GyMMMd hmv":"dd-MM-y GGGGG h:mm a v","GyMMMEd hmv":"E, dd-MM-y GGGGG h:mm a v","GyMMMMd hmv":"d MMMM y G h:mm a v","GyMMMMEd hmv":"E, d MMMM y G h:mm a v","M hmv":"L h:mm a v","Md hmv":"dd-MM h:mm a v","MEd hmv":"E, dd-MM h:mm a v","MMM hmv":"LLL h:mm a v","MMMd hmv":"dd-MM h:mm a v","MMMEd hmv":"E, dd-MM h:mm a v","MMMMd hmv":"d MMMM h:mm a v","MMMMEd hmv":"E, d MMMM h:mm a v","y hmv":"y h:mm a v","yM hmv":"LL-y h:mm a v","yMd hmv":"dd-MM-y h:mm a v","yMEd hmv":"E, dd-MM-y h:mm a v","yMMM hmv":"LLL y h:mm a v","yMMMd hmv":"dd-MM-y h:mm a v","yMMMEd hmv":"E, dd-MM-y h:mm a v","yMMMM hmv":"LLLL y h:mm a v","yMMMMd hmv":"d MMMM y h:mm a v","yMMMMEd hmv":"E, d MMMM y h:mm a v","EEEE, 'ils' d MMMM y Hmv":"EEEE, 'ils' d MMMM y HH:mm v","d MMMM y Hmv":"d MMMM y HH:mm v","dd-MM-y Hmv":"dd-MM-y HH:mm v","dd-MM-yy Hmv":"dd-MM-yy HH:mm v","d Hmv":"d HH:mm v","E Hmv":"ccc HH:mm v","Ed Hmv":"E d. HH:mm v","Gy Hmv":"y G HH:mm v","GyMMM Hmv":"LLL y G HH:mm v","GyMMMd Hmv":"dd-MM-y GGGGG HH:mm v","GyMMMEd Hmv":"E, dd-MM-y GGGGG HH:mm v","GyMMMMd Hmv":"d MMMM y G HH:mm v","GyMMMMEd Hmv":"E, d MMMM y G HH:mm v","M Hmv":"L HH:mm v","Md Hmv":"dd-MM HH:mm v","MEd Hmv":"E, dd-MM HH:mm v","MMM Hmv":"LLL HH:mm v","MMMd Hmv":"dd-MM HH:mm v","MMMEd Hmv":"E, dd-MM HH:mm v","MMMMd Hmv":"d MMMM HH:mm v","MMMMEd Hmv":"E, d MMMM HH:mm v","y Hmv":"y HH:mm v","yM Hmv":"LL-y HH:mm v","yMd Hmv":"dd-MM-y HH:mm v","yMEd Hmv":"E, dd-MM-y HH:mm v","yMMM Hmv":"LLL y HH:mm v","yMMMd Hmv":"dd-MM-y HH:mm v","yMMMEd Hmv":"E, dd-MM-y HH:mm v","yMMMM Hmv":"LLLL y HH:mm v","yMMMMd Hmv":"d MMMM y HH:mm v","yMMMMEd Hmv":"E, d MMMM y HH:mm v","EEEE, 'ils' d MMMM y ms":"EEEE, 'ils' d MMMM y mm:ss","d MMMM y ms":"d MMMM y mm:ss","dd-MM-y ms":"dd-MM-y mm:ss","dd-MM-yy ms":"dd-MM-yy mm:ss","d ms":"d mm:ss","E ms":"ccc mm:ss","Ed ms":"E d. mm:ss","Gy ms":"y G mm:ss","GyMMM ms":"LLL y G mm:ss","GyMMMd ms":"dd-MM-y GGGGG mm:ss","GyMMMEd ms":"E, dd-MM-y GGGGG mm:ss","GyMMMMd ms":"d MMMM y G mm:ss","GyMMMMEd ms":"E, d MMMM y G mm:ss","M ms":"L mm:ss","Md ms":"dd-MM mm:ss","MEd ms":"E, dd-MM mm:ss","MMM ms":"LLL mm:ss","MMMd ms":"dd-MM mm:ss","MMMEd ms":"E, dd-MM mm:ss","MMMMd ms":"d MMMM mm:ss","MMMMEd ms":"E, d MMMM mm:ss","y ms":"y mm:ss","yM ms":"LL-y mm:ss","yMd ms":"dd-MM-y mm:ss","yMEd ms":"E, dd-MM-y mm:ss","yMMM ms":"LLL y mm:ss","yMMMd ms":"dd-MM-y mm:ss","yMMMEd ms":"E, dd-MM-y mm:ss","yMMMM ms":"LLLL y mm:ss","yMMMMd ms":"d MMMM y mm:ss","yMMMMEd ms":"E, d MMMM y mm:ss"}},"intervalFormats":{"intervalFormatFallback":"{0} – {1}","Bh":{"B":"h B – h B","h":"h–h B"},"Bhm":{"B":"h:mm B – h:mm B","h":"h:mm–h:mm B","m":"h:mm–h:mm B"},"d":{"d":"d–d"},"Gy":{"G":"G y – G y","y":"G y–y"},"GyM":{"G":"GGGGG y-MM – GGGGG y-MM","M":"GGGGG y-MM – y-MM","y":"GGGGG y-MM – y-MM"},"GyMd":{"d":"GGGGG y-MM-dd – y-MM-dd","G":"GGGGG y-MM-dd – GGGGG y-MM-dd","M":"GGGGG y-MM-dd – y-MM-dd","y":"GGGGG y-MM-dd – y-MM-dd"},"GyMEd":{"d":"GGGGG y-MM-dd, E – y-MM-dd, E","G":"GGGGG y-MM-dd, E – GGGGG y-MM-dd, E","M":"GGGGG y-MM-dd, E – y-MM-dd, E","y":"GGGGG y-MM-dd, E – y-MM-dd, E"},"GyMMM":{"G":"G y MMM – G y MMM","M":"G y MMM–MMM","y":"G y MMM – y MMM"},"GyMMMd":{"d":"G y MMM d–d","G":"G y MMM d – G y MMM d","M":"G y MMM d – MMM d","y":"G y MMM d – y MMM d"},"GyMMMEd":{"d":"G y MMM d, E – MMM d, E","G":"G y MMM d, E – G y MMM d, E","M":"G y MMM d, E – MMM d, E","y":"G y MMM d, E – y MMM d, E"},"h":{"a":"h a – h a","h":"h–h a"},"H":{"H":"HH–HH"},"hm":{"a":"h:mm a – h:mm a","h":"h:mm–h:mm a","m":"h:mm–h:mm a"},"Hm":{"H":"HH:mm–HH:mm","m":"HH:mm–HH:mm"},"hmv":{"a":"h:mm a – h:mm a v","h":"h:mm–h:mm a v","m":"h:mm–h:mm a v"},"Hmv":{"H":"HH:mm–HH:mm v","m":"HH:mm–HH:mm v"},"hv":{"a":"h a – h a v","h":"h–h a v"},"Hv":{"H":"HH–HH v"},"M":{"M":"LL–LL"},"Md":{"d":"dd-MM – dd-MM","M":"dd-MM – dd-MM"},"MEd":{"d":"E, dd-MM – E, dd-MM","M":"E, dd-MM – E, dd-MM"},"MMM":{"M":"LLL–LLL"},"MMMd":{"d":"dd-MM – dd-MM","M":"dd-MM – dd-MM"},"MMMEd":{"d":"E, dd-MM – E, dd-MM","M":"E, dd-MM – E, dd-MM"},"MMMMd":{"d":"d.–d MMMM","M":"d MMMM – d MMMM"},"MMMMEd":{"d":"E, d. – E, d MMMM","M":"E, d MMMM – E, d MMMM"},"y":{"y":"y–y"},"yM":{"M":"LL-y – LL-y","y":"LL-y – LL-y"},"yMd":{"d":"dd-MM-y – dd-MM-y","M":"dd-MM-y – dd-MM-y","y":"dd-MM-y – dd-MM-y"},"yMEd":{"d":"E, dd-MM-y – E, dd-MM-y","M":"E, dd-MM-y – E, dd-MM-y","y":"E, dd-MM-y – E, dd-MM-y"},"yMMM":{"M":"LLL–LLL y","y":"LLL y – LLL y"},"yMMMd":{"d":"dd-MM-y – dd-MM-y","M":"dd-MM-y – dd-MM-y","y":"dd-MM-y – dd-MM-y"},"yMMMEd":{"d":"E, dd-MM-y – E, dd-MM-y","M":"E, dd-MM-y – E, dd-MM-y","y":"E, dd-MM-y – E, dd-MM-y"},"yMMMM":{"M":"LLLL–LLLL y","y":"LLLL y – LLLL y"},"yMMMMd":{"d":"d.–d MMMM y","M":"d MMMM – d MMMM y","y":"d MMMM y – d MMMM y"},"yMMMMEd":{"d":"E, d. – E, d MMMM y","M":"E, d MMMM – E, d MMMM y","y":"E, d MMMM y – E, d MMMM y"}},"hourCycle":"h23","nu":["latn"],"ca":["gregory"],"hc":["h23","","h12"]},"locale":"rm"}
)
  }}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

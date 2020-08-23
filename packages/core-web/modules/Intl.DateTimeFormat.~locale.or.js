import CreateMethodProperty from "../helpers/_ESAbstract.CreateMethodProperty";
import OrdinaryCreateFromConstructor from "../helpers/_ESAbstract.OrdinaryCreateFromConstructor";
import GetPrototypeFromConstructor from "../helpers/_ESAbstract.GetPrototypeFromConstructor";
import Get from "../helpers/_ESAbstract.Get";
import Type from "../helpers/_ESAbstract.Type";
import ToObject from "../helpers/_ESAbstract.ToObject";
import HasOwnProperty from "../helpers/_ESAbstract.HasOwnProperty";
import ToPropertyKey from "../helpers/_ESAbstract.ToPropertyKey";
import ToPrimitive from "../helpers/_ESAbstract.ToPrimitive";
import Call from "../helpers/_ESAbstract.Call";
import GetMethod from "../helpers/_ESAbstract.GetMethod";
import GetV from "../helpers/_ESAbstract.GetV";
import IsCallable from "../helpers/_ESAbstract.IsCallable";
import OrdinaryToPrimitive from "../helpers/_ESAbstract.OrdinaryToPrimitive";
import ToString from "../helpers/_ESAbstract.ToString";
import GetIterator from "../helpers/_ESAbstract.GetIterator";
import ToLength from "../helpers/_ESAbstract.ToLength";
import ToInteger from "../helpers/_ESAbstract.ToInteger";
import HasProperty from "../helpers/_ESAbstract.HasProperty";
import ArraySpeciesCreate from "../helpers/_ESAbstract.ArraySpeciesCreate";
import IsArray from "../helpers/_ESAbstract.IsArray";
import ArrayCreate from "../helpers/_ESAbstract.ArrayCreate";
import IsConstructor from "../helpers/_ESAbstract.IsConstructor";
import Construct from "../helpers/_ESAbstract.Construct";
import ToBoolean from "../helpers/_ESAbstract.ToBoolean";
import CreateDataPropertyOrThrow from "../helpers/_ESAbstract.CreateDataPropertyOrThrow";
import CreateDataProperty from "../helpers/_ESAbstract.CreateDataProperty";
import SameValueZero from "../helpers/_ESAbstract.SameValueZero";
import SameValueNonNumber from "../helpers/_ESAbstract.SameValueNonNumber";
import IteratorStep from "../helpers/_ESAbstract.IteratorStep";
import IteratorNext from "../helpers/_ESAbstract.IteratorNext";
import IteratorComplete from "../helpers/_ESAbstract.IteratorComplete";
import IteratorValue from "../helpers/_ESAbstract.IteratorValue";
import IteratorClose from "../helpers/_ESAbstract.IteratorClose";
import SameValue from "../helpers/_ESAbstract.SameValue";
import CreateIterResultObject from "../helpers/_ESAbstract.CreateIterResultObject";
(function(undefined) {
if (!("Intl"in self&&"DateTimeFormat"in self.Intl&&"formatToParts"in self.Intl.DateTimeFormat&&self.Intl.DateTimeFormat.supportedLocalesOf("or").length
)) {
// Intl.DateTimeFormat.~locale.or
/* @generated */	
  // prettier-ignore
  if (Intl.DateTimeFormat && typeof Intl.DateTimeFormat.__addLocaleData === 'function') {
    Intl.DateTimeFormat.__addLocaleData({"data":{"or":{"am":"AM","pm":"PM","weekday":{"narrow":["ର","ସୋ","ମ","ବୁ","ଗୁ","ଶୁ","ଶ"],"short":["ରବି","ସୋମ","ମଙ୍ଗଳ","ବୁଧ","ଗୁରୁ","ଶୁକ୍ର","ଶନି"],"long":["ରବିବାର","ସୋମବାର","ମଙ୍ଗଳବାର","ବୁଧବାର","ଗୁରୁବାର","ଶୁକ୍ରବାର","ଶନିବାର"]},"era":{"narrow":{"BC":"BC","AD":"AD"},"short":{"BC":"BC","AD":"AD"},"long":{"BC":"ଖ୍ରୀଷ୍ଟପୂର୍ବ","AD":"ଖ୍ରୀଷ୍ଟାବ୍ଦ"}},"month":{"narrow":["ଜା","ଫେ","ମା","ଅ","ମଇ","ଜୁ","ଜୁ","ଅ","ସେ","ଅ","ନ","ଡି"],"short":["ଜାନୁଆରୀ","ଫେବୃଆରୀ","ମାର୍ଚ୍ଚ","ଅପ୍ରେଲ","ମଇ","ଜୁନ","ଜୁଲାଇ","ଅଗଷ୍ଟ","ସେପ୍ଟେମ୍ବର","ଅକ୍ଟୋବର","ନଭେମ୍ବର","ଡିସେମ୍ବର"],"long":["ଜାନୁଆରୀ","ଫେବୃଆରୀ","ମାର୍ଚ୍ଚ","ଅପ୍ରେଲ","ମଇ","ଜୁନ","ଜୁଲାଇ","ଅଗଷ୍ଟ","ସେପ୍ଟେମ୍ବର","ଅକ୍ଟୋବର","ନଭେମ୍ବର","ଡିସେମ୍ବର"]},"timeZoneName":{"Asia/Kabul":{"long":["ଆଫଗାନିସ୍ତାନ ସମୟ","ଆଫଗାନିସ୍ତାନ ସମୟ"]},"Africa/Maputo":{"long":["ମଧ୍ୟ ଆଫ୍ରିକା ସମୟ","ମଧ୍ୟ ଆଫ୍ରିକା ସମୟ"]},"Africa/Bujumbura":{"long":["ମଧ୍ୟ ଆଫ୍ରିକା ସମୟ","ମଧ୍ୟ ଆଫ୍ରିକା ସମୟ"]},"Africa/Gaborone":{"long":["ମଧ୍ୟ ଆଫ୍ରିକା ସମୟ","ମଧ୍ୟ ଆଫ୍ରିକା ସମୟ"]},"Africa/Lubumbashi":{"long":["ମଧ୍ୟ ଆଫ୍ରିକା ସମୟ","ମଧ୍ୟ ଆଫ୍ରିକା ସମୟ"]},"Africa/Blantyre":{"long":["ମଧ୍ୟ ଆଫ୍ରିକା ସମୟ","ମଧ୍ୟ ଆଫ୍ରିକା ସମୟ"]},"Africa/Kigali":{"long":["ମଧ୍ୟ ଆଫ୍ରିକା ସମୟ","ମଧ୍ୟ ଆଫ୍ରିକା ସମୟ"]},"Africa/Lusaka":{"long":["ମଧ୍ୟ ଆଫ୍ରିକା ସମୟ","ମଧ୍ୟ ଆଫ୍ରିକା ସମୟ"]},"Africa/Harare":{"long":["ମଧ୍ୟ ଆଫ୍ରିକା ସମୟ","ମଧ୍ୟ ଆଫ୍ରିକା ସମୟ"]},"Africa/Nairobi":{"long":["ପୂର୍ବ ଆଫ୍ରିକା ସମୟ","ପୂର୍ବ ଆଫ୍ରିକା ସମୟ"]},"Africa/Djibouti":{"long":["ପୂର୍ବ ଆଫ୍ରିକା ସମୟ","ପୂର୍ବ ଆଫ୍ରିକା ସମୟ"]},"Africa/Asmera":{"long":["ପୂର୍ବ ଆଫ୍ରିକା ସମୟ","ପୂର୍ବ ଆଫ୍ରିକା ସମୟ"]},"Africa/Addis_Ababa":{"long":["ପୂର୍ବ ଆଫ୍ରିକା ସମୟ","ପୂର୍ବ ଆଫ୍ରିକା ସମୟ"]},"Indian/Comoro":{"long":["ପୂର୍ବ ଆଫ୍ରିକା ସମୟ","ପୂର୍ବ ଆଫ୍ରିକା ସମୟ"]},"Indian/Antananarivo":{"long":["ପୂର୍ବ ଆଫ୍ରିକା ସମୟ","ପୂର୍ବ ଆଫ୍ରିକା ସମୟ"]},"Africa/Mogadishu":{"long":["ପୂର୍ବ ଆଫ୍ରିକା ସମୟ","ପୂର୍ବ ଆଫ୍ରିକା ସମୟ"]},"Africa/Dar_es_Salaam":{"long":["ପୂର୍ବ ଆଫ୍ରିକା ସମୟ","ପୂର୍ବ ଆଫ୍ରିକା ସମୟ"]},"Africa/Kampala":{"long":["ପୂର୍ବ ଆଫ୍ରିକା ସମୟ","ପୂର୍ବ ଆଫ୍ରିକା ସମୟ"]},"Indian/Mayotte":{"long":["ପୂର୍ବ ଆଫ୍ରିକା ସମୟ","ପୂର୍ବ ଆଫ୍ରିକା ସମୟ"]},"Africa/Johannesburg":{"long":["ଦକ୍ଷିଣ ଆଫ୍ରିକା ମାନାଙ୍କ ସମୟ","ଦକ୍ଷିଣ ଆଫ୍ରିକା ମାନାଙ୍କ ସମୟ"]},"Africa/Maseru":{"long":["ଦକ୍ଷିଣ ଆଫ୍ରିକା ମାନାଙ୍କ ସମୟ","ଦକ୍ଷିଣ ଆଫ୍ରିକା ମାନାଙ୍କ ସମୟ"]},"Africa/Mbabane":{"long":["ଦକ୍ଷିଣ ଆଫ୍ରିକା ମାନାଙ୍କ ସମୟ","ଦକ୍ଷିଣ ଆଫ୍ରିକା ମାନାଙ୍କ ସମୟ"]},"Africa/Lagos":{"long":["ପଶ୍ଚିମ ଆଫ୍ରିକା ମାନାଙ୍କ ସମୟ","ପଶ୍ଚିମ ଆଫ୍ରିକା ଖରାଦିନ ସମୟ"]},"Africa/Luanda":{"long":["ପଶ୍ଚିମ ଆଫ୍ରିକା ମାନାଙ୍କ ସମୟ","ପଶ୍ଚିମ ଆଫ୍ରିକା ଖରାଦିନ ସମୟ"]},"Africa/Porto-Novo":{"long":["ପଶ୍ଚିମ ଆଫ୍ରିକା ମାନାଙ୍କ ସମୟ","ପଶ୍ଚିମ ଆଫ୍ରିକା ଖରାଦିନ ସମୟ"]},"Africa/Kinshasa":{"long":["ପଶ୍ଚିମ ଆଫ୍ରିକା ମାନାଙ୍କ ସମୟ","ପଶ୍ଚିମ ଆଫ୍ରିକା ଖରାଦିନ ସମୟ"]},"Africa/Bangui":{"long":["ପଶ୍ଚିମ ଆଫ୍ରିକା ମାନାଙ୍କ ସମୟ","ପଶ୍ଚିମ ଆଫ୍ରିକା ଖରାଦିନ ସମୟ"]},"Africa/Brazzaville":{"long":["ପଶ୍ଚିମ ଆଫ୍ରିକା ମାନାଙ୍କ ସମୟ","ପଶ୍ଚିମ ଆଫ୍ରିକା ଖରାଦିନ ସମୟ"]},"Africa/Douala":{"long":["ପଶ୍ଚିମ ଆଫ୍ରିକା ମାନାଙ୍କ ସମୟ","ପଶ୍ଚିମ ଆଫ୍ରିକା ଖରାଦିନ ସମୟ"]},"Africa/Libreville":{"long":["ପଶ୍ଚିମ ଆଫ୍ରିକା ମାନାଙ୍କ ସମୟ","ପଶ୍ଚିମ ଆଫ୍ରିକା ଖରାଦିନ ସମୟ"]},"Africa/Malabo":{"long":["ପଶ୍ଚିମ ଆଫ୍ରିକା ମାନାଙ୍କ ସମୟ","ପଶ୍ଚିମ ଆଫ୍ରିକା ଖରାଦିନ ସମୟ"]},"Africa/Niamey":{"long":["ପଶ୍ଚିମ ଆଫ୍ରିକା ମାନାଙ୍କ ସମୟ","ପଶ୍ଚିମ ଆଫ୍ରିକା ଖରାଦିନ ସମୟ"]},"Africa/Ndjamena":{"long":["ପଶ୍ଚିମ ଆଫ୍ରିକା ମାନାଙ୍କ ସମୟ","ପଶ୍ଚିମ ଆଫ୍ରିକା ଖରାଦିନ ସମୟ"]},"Asia/Aqtobe":{"long":["ପଶ୍ଚିମ କାଜାକସ୍ତାନ ସମୟ","ପଶ୍ଚିମ କାଜାକସ୍ତାନ ସମୟ"]},"America/Juneau":{"long":["ଆଲାସ୍କା ମାନାଙ୍କ ସମୟ","ଆଲାସ୍କା ଦିବାଲୋକ ସମୟ"]},"Asia/Almaty":{"long":["ପୂର୍ବ କାଜାକସ୍ତାନ୍ ସମୟ","ପୂର୍ବ କାଜାକସ୍ତାନ୍ ସମୟ"]},"America/Manaus":{"long":["ଆମାଜନ୍ ମାନାଙ୍କ ସମୟ","ଆମାଜନ୍ ଗ୍ରୀଷ୍ମକାଳୀନ ସମୟ"]},"America/Chicago":{"long":["କେନ୍ଦ୍ରୀୟ ମାନାଙ୍କ ସମୟ","କେନ୍ଦ୍ରୀୟ ଦିବାଲୋକ ସମୟ"]},"America/Belize":{"long":["କେନ୍ଦ୍ରୀୟ ମାନାଙ୍କ ସମୟ","କେନ୍ଦ୍ରୀୟ ଦିବାଲୋକ ସମୟ"]},"America/Winnipeg":{"long":["କେନ୍ଦ୍ରୀୟ ମାନାଙ୍କ ସମୟ","କେନ୍ଦ୍ରୀୟ ଦିବାଲୋକ ସମୟ"]},"America/Costa_Rica":{"long":["କେନ୍ଦ୍ରୀୟ ମାନାଙ୍କ ସମୟ","କେନ୍ଦ୍ରୀୟ ଦିବାଲୋକ ସମୟ"]},"America/Guatemala":{"long":["କେନ୍ଦ୍ରୀୟ ମାନାଙ୍କ ସମୟ","କେନ୍ଦ୍ରୀୟ ଦିବାଲୋକ ସମୟ"]},"America/Tegucigalpa":{"long":["କେନ୍ଦ୍ରୀୟ ମାନାଙ୍କ ସମୟ","କେନ୍ଦ୍ରୀୟ ଦିବାଲୋକ ସମୟ"]},"America/Mexico_City":{"long":["କେନ୍ଦ୍ରୀୟ ମାନାଙ୍କ ସମୟ","କେନ୍ଦ୍ରୀୟ ଦିବାଲୋକ ସମୟ"]},"America/El_Salvador":{"long":["କେନ୍ଦ୍ରୀୟ ମାନାଙ୍କ ସମୟ","କେନ୍ଦ୍ରୀୟ ଦିବାଲୋକ ସମୟ"]},"America/New_York":{"long":["ପୂର୍ବାଞ୍ଚଳ ମାନାଙ୍କ ସମୟ","ପୂର୍ବାଞ୍ଚଳ ଦିବାଲୋକ ସମୟ"]},"America/Nassau":{"long":["ପୂର୍ବାଞ୍ଚଳ ମାନାଙ୍କ ସମୟ","ପୂର୍ବାଞ୍ଚଳ ଦିବାଲୋକ ସମୟ"]},"America/Toronto":{"long":["ପୂର୍ବାଞ୍ଚଳ ମାନାଙ୍କ ସମୟ","ପୂର୍ବାଞ୍ଚଳ ଦିବାଲୋକ ସମୟ"]},"America/Port-au-Prince":{"long":["ପୂର୍ବାଞ୍ଚଳ ମାନାଙ୍କ ସମୟ","ପୂର୍ବାଞ୍ଚଳ ଦିବାଲୋକ ସମୟ"]},"America/Jamaica":{"long":["ପୂର୍ବାଞ୍ଚଳ ମାନାଙ୍କ ସମୟ","ପୂର୍ବାଞ୍ଚଳ ଦିବାଲୋକ ସମୟ"]},"America/Cayman":{"long":["ପୂର୍ବାଞ୍ଚଳ ମାନାଙ୍କ ସମୟ","ପୂର୍ବାଞ୍ଚଳ ଦିବାଲୋକ ସମୟ"]},"America/Panama":{"long":["ପୂର୍ବାଞ୍ଚଳ ମାନାଙ୍କ ସମୟ","ପୂର୍ବାଞ୍ଚଳ ଦିବାଲୋକ ସମୟ"]},"America/Denver":{"long":["ପାର୍ବତ୍ୟ ମାନାଙ୍କ ସମୟ","ପାର୍ବତ୍ୟ ଦିବାଲୋକ ସମୟ"]},"America/Edmonton":{"long":["ପାର୍ବତ୍ୟ ମାନାଙ୍କ ସମୟ","ପାର୍ବତ୍ୟ ଦିବାଲୋକ ସମୟ"]},"America/Hermosillo":{"long":["ପାର୍ବତ୍ୟ ମାନାଙ୍କ ସମୟ","ପାର୍ବତ୍ୟ ଦିବାଲୋକ ସମୟ"]},"America/Los_Angeles":{"long":["ପାସିଫିକ୍ ମାନାଙ୍କ ସମୟ","ପାସିଫିକ୍ ଦିବାଲୋକ ସମୟ"]},"America/Vancouver":{"long":["ପାସିଫିକ୍ ମାନାଙ୍କ ସମୟ","ପାସିଫିକ୍ ଦିବାଲୋକ ସମୟ"]},"America/Tijuana":{"long":["ପାସିଫିକ୍ ମାନାଙ୍କ ସମୟ","ପାସିଫିକ୍ ଦିବାଲୋକ ସମୟ"]},"Pacific/Apia":{"long":["ଆପିଆ ମାନାଙ୍କ ସମୟ","ଆପିଆ ଦିବାଲୋକ ସମୟ"]},"Asia/Riyadh":{"long":["ଆରବୀୟ ମାନାଙ୍କ ସମୟ","ଆରବୀୟ ଦିବାଲୋକ ସମୟ"]},"Asia/Bahrain":{"long":["ଆରବୀୟ ମାନାଙ୍କ ସମୟ","ଆରବୀୟ ଦିବାଲୋକ ସମୟ"]},"Asia/Baghdad":{"long":["ଆରବୀୟ ମାନାଙ୍କ ସମୟ","ଆରବୀୟ ଦିବାଲୋକ ସମୟ"]},"Asia/Kuwait":{"long":["ଆରବୀୟ ମାନାଙ୍କ ସମୟ","ଆରବୀୟ ଦିବାଲୋକ ସମୟ"]},"Asia/Qatar":{"long":["ଆରବୀୟ ମାନାଙ୍କ ସମୟ","ଆରବୀୟ ଦିବାଲୋକ ସମୟ"]},"Asia/Aden":{"long":["ଆରବୀୟ ମାନାଙ୍କ ସମୟ","ଆରବୀୟ ଦିବାଲୋକ ସମୟ"]},"America/Buenos_Aires":{"long":["ଆର୍ଜେଣ୍ଟିନା ମାନାଙ୍କ ସମୟ","ଆର୍ଜେଣ୍ଟିନା ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"America/Argentina/San_Luis":{"long":["ପଶ୍ଚିମ ଆର୍ଜେଣ୍ଟିନା ମାନାଙ୍କ ସମୟ","ପଶ୍ଚିମ ଆର୍ଜେଣ୍ଟିନା ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Asia/Ashgabat":{"long":["ତୁର୍କମେନିସ୍ତାନ ମାନାଙ୍କ ସମୟ","ତୁର୍କମେନିସ୍ତାନ ଖରାଦିନ ସମୟ"]},"America/Halifax":{"long":["ଆଟଲାଣ୍ଟିକ୍ ମାନାଙ୍କ ସମୟ","ଆଟଲାଣ୍ଟିକ୍ ଦିବାଲୋକ ସମୟ"]},"America/Antigua":{"long":["ଆଟଲାଣ୍ଟିକ୍ ମାନାଙ୍କ ସମୟ","ଆଟଲାଣ୍ଟିକ୍ ଦିବାଲୋକ ସମୟ"]},"America/Anguilla":{"long":["ଆଟଲାଣ୍ଟିକ୍ ମାନାଙ୍କ ସମୟ","ଆଟଲାଣ୍ଟିକ୍ ଦିବାଲୋକ ସମୟ"]},"America/Aruba":{"long":["ଆଟଲାଣ୍ଟିକ୍ ମାନାଙ୍କ ସମୟ","ଆଟଲାଣ୍ଟିକ୍ ଦିବାଲୋକ ସମୟ"]},"America/Barbados":{"long":["ଆଟଲାଣ୍ଟିକ୍ ମାନାଙ୍କ ସମୟ","ଆଟଲାଣ୍ଟିକ୍ ଦିବାଲୋକ ସମୟ"]},"Atlantic/Bermuda":{"long":["ଆଟଲାଣ୍ଟିକ୍ ମାନାଙ୍କ ସମୟ","ଆଟଲାଣ୍ଟିକ୍ ଦିବାଲୋକ ସମୟ"]},"America/Kralendijk":{"long":["ଆଟଲାଣ୍ଟିକ୍ ମାନାଙ୍କ ସମୟ","ଆଟଲାଣ୍ଟିକ୍ ଦିବାଲୋକ ସମୟ"]},"America/Curacao":{"long":["ଆଟଲାଣ୍ଟିକ୍ ମାନାଙ୍କ ସମୟ","ଆଟଲାଣ୍ଟିକ୍ ଦିବାଲୋକ ସମୟ"]},"America/Dominica":{"long":["ଆଟଲାଣ୍ଟିକ୍ ମାନାଙ୍କ ସମୟ","ଆଟଲାଣ୍ଟିକ୍ ଦିବାଲୋକ ସମୟ"]},"America/Grenada":{"long":["ଆଟଲାଣ୍ଟିକ୍ ମାନାଙ୍କ ସମୟ","ଆଟଲାଣ୍ଟିକ୍ ଦିବାଲୋକ ସମୟ"]},"America/Thule":{"long":["ଆଟଲାଣ୍ଟିକ୍ ମାନାଙ୍କ ସମୟ","ଆଟଲାଣ୍ଟିକ୍ ଦିବାଲୋକ ସମୟ"]},"America/Guadeloupe":{"long":["ଆଟଲାଣ୍ଟିକ୍ ମାନାଙ୍କ ସମୟ","ଆଟଲାଣ୍ଟିକ୍ ଦିବାଲୋକ ସମୟ"]},"America/St_Kitts":{"long":["ଆଟଲାଣ୍ଟିକ୍ ମାନାଙ୍କ ସମୟ","ଆଟଲାଣ୍ଟିକ୍ ଦିବାଲୋକ ସମୟ"]},"America/St_Lucia":{"long":["ଆଟଲାଣ୍ଟିକ୍ ମାନାଙ୍କ ସମୟ","ଆଟଲାଣ୍ଟିକ୍ ଦିବାଲୋକ ସମୟ"]},"America/Marigot":{"long":["ଆଟଲାଣ୍ଟିକ୍ ମାନାଙ୍କ ସମୟ","ଆଟଲାଣ୍ଟିକ୍ ଦିବାଲୋକ ସମୟ"]},"America/Martinique":{"long":["ଆଟଲାଣ୍ଟିକ୍ ମାନାଙ୍କ ସମୟ","ଆଟଲାଣ୍ଟିକ୍ ଦିବାଲୋକ ସମୟ"]},"America/Montserrat":{"long":["ଆଟଲାଣ୍ଟିକ୍ ମାନାଙ୍କ ସମୟ","ଆଟଲାଣ୍ଟିକ୍ ଦିବାଲୋକ ସମୟ"]},"America/Puerto_Rico":{"long":["ଆଟଲାଣ୍ଟିକ୍ ମାନାଙ୍କ ସମୟ","ଆଟଲାଣ୍ଟିକ୍ ଦିବାଲୋକ ସମୟ"]},"America/Lower_Princes":{"long":["ଆଟଲାଣ୍ଟିକ୍ ମାନାଙ୍କ ସମୟ","ଆଟଲାଣ୍ଟିକ୍ ଦିବାଲୋକ ସମୟ"]},"America/Port_of_Spain":{"long":["ଆଟଲାଣ୍ଟିକ୍ ମାନାଙ୍କ ସମୟ","ଆଟଲାଣ୍ଟିକ୍ ଦିବାଲୋକ ସମୟ"]},"America/St_Vincent":{"long":["ଆଟଲାଣ୍ଟିକ୍ ମାନାଙ୍କ ସମୟ","ଆଟଲାଣ୍ଟିକ୍ ଦିବାଲୋକ ସମୟ"]},"America/Tortola":{"long":["ଆଟଲାଣ୍ଟିକ୍ ମାନାଙ୍କ ସମୟ","ଆଟଲାଣ୍ଟିକ୍ ଦିବାଲୋକ ସମୟ"]},"America/St_Thomas":{"long":["ଆଟଲାଣ୍ଟିକ୍ ମାନାଙ୍କ ସମୟ","ଆଟଲାଣ୍ଟିକ୍ ଦିବାଲୋକ ସମୟ"]},"Australia/Adelaide":{"long":["ଅଷ୍ଟ୍ରେଲିୟ ମଧ୍ୟ ମାନାଙ୍କ ସମୟ","ଅଷ୍ଟ୍ରେଲିୟ ମଧ୍ୟ ଦିବାଲୋକ ସମୟ"]},"Australia/Eucla":{"long":["ଅଷ୍ଟ୍ରେଲିୟ ମଧ୍ୟ ପଶ୍ଚିମ ମାନାଙ୍କ ସମୟ","ଅଷ୍ଟ୍ରେଲିୟ ମଧ୍ୟ ପଶ୍ଚିମ ଦିବାଲୋକ ସମୟ"]},"Australia/Sydney":{"long":["ଅଷ୍ଟ୍ରେଲିୟ ପୂର୍ବ ମାନାଙ୍କ ସମୟ","ଅଷ୍ଟ୍ରେଲିୟ ପୂର୍ବ ଦିବାଲୋକ ସମୟ"]},"Australia/Perth":{"long":["ଅଷ୍ଟ୍ରେଲିୟ ପଶ୍ଚିମ ମାନାଙ୍କ ସମୟ","ଅଷ୍ଟ୍ରେଲିୟ ପଶ୍ଚିମ ଦିବାଲୋକ ସମୟ"]},"Atlantic/Azores":{"long":["ଆଜୋରେସ୍ ମାନାଙ୍କ ସମୟ","ଆଜୋରେସ୍ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Asia/Thimphu":{"long":["ଭୁଟାନ ସମୟ","ଭୁଟାନ ସମୟ"]},"America/La_Paz":{"long":["ବଲିଭିଆ ସମୟ","ବଲିଭିଆ ସମୟ"]},"Asia/Kuching":{"long":["ମାଲେସିଆ ସମୟ","ମାଲେସିଆ ସମୟ"]},"America/Sao_Paulo":{"long":["ବ୍ରାସିଲିଆ ମାନାଙ୍କ ସମୟ","ବ୍ରାସିଲିଆ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Europe/London":{"long":["ଗ୍ରୀନୱିଚ୍ ମିନ୍ ସମୟ","ଗ୍ରୀନୱିଚ୍ ମିନ୍ ସମୟ"]},"Asia/Brunei":{"long":["ବ୍ରୁନେଇ ଡାରୁସାଲାମ ସମୟ","ବ୍ରୁନେଇ ଡାରୁସାଲାମ ସମୟ"]},"Atlantic/Cape_Verde":{"long":["କେପ୍‌ ଭର୍ଦେ ମାନାଙ୍କ ସମୟ","କେପ୍‌ ଭର୍ଦେ ଖରାଦିନ ସମୟ"]},"Pacific/Chatham":{"long":["ଚାଥାମ୍‌ ମାନାଙ୍କ ସମୟ","ଚାଥାମ୍‌ ଦିବାଲୋକ ସମୟ"]},"America/Santiago":{"long":["ଚିଲି ମାନାଙ୍କ ସମୟ","ଚିଲି ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Asia/Shanghai":{"long":["ଚୀନ ମାନାଙ୍କ ସମୟ","ଚୀନ ଦିବାଲୋକ ସମୟ"]},"Asia/Choibalsan":{"long":["ଚୋଇବାଲସାନ ମାନାଙ୍କ ସମୟ","ଚୋଇବାଲସାନ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Indian/Christmas":{"long":["ଖ୍ରୀଷ୍ଟମାସ ଦ୍ୱୀପ ସମୟ","ଖ୍ରୀଷ୍ଟମାସ ଦ୍ୱୀପ ସମୟ"]},"Indian/Cocos":{"long":["କୋକୋସ୍‌ ଦ୍ୱୀପପୁଞ୍ଜ ସମୟ","କୋକୋସ୍‌ ଦ୍ୱୀପପୁଞ୍ଜ ସମୟ"]},"America/Bogota":{"long":["କଲମ୍ବିଆ ମାନାଙ୍କ ସମୟ","କଲମ୍ବିଆ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Pacific/Rarotonga":{"long":["କୁକ୍‌ ଦ୍ୱୀପପୁଞ୍ଜ ମାନାଙ୍କ ସମୟ","କୁକ୍‌ ଦ୍ୱୀପପୁଞ୍ଜ ଅର୍ଦ୍ଧ ଗୀଷ୍ମକାଳୀନ ସମୟ"]},"America/Havana":{"long":["କ୍ୟୁବା ମାନାଙ୍କ ସମୟ","କ୍ୟୁବା ଦିବାଲୋକ ସମୟ"]},"Antarctica/Davis":{"long":["ଡେଭିସ୍‌ ସମୟ","ଡେଭିସ୍‌ ସମୟ"]},"Antarctica/DumontDUrville":{"long":["ଡୁମୋଣ୍ଟ-ଡି‘ଉରଭିଲ୍ଲେ ସମୟ","ଡୁମୋଣ୍ଟ-ଡି‘ଉରଭିଲ୍ଲେ ସମୟ"]},"Asia/Dushanbe":{"long":["ତାଜିକିସ୍ତାନ ସମୟ","ତାଜିକିସ୍ତାନ ସମୟ"]},"America/Paramaribo":{"long":["ସୁରିନେମ୍‌ ସମୟ","ସୁରିନେମ୍‌ ସମୟ"]},"Asia/Dili":{"long":["ପୂର୍ବ ତିମୋର୍‌ ସମୟ","ପୂର୍ବ ତିମୋର୍‌ ସମୟ"]},"Pacific/Easter":{"long":["ଇଷ୍ଟର୍‌ ଆଇଲ୍ୟାଣ୍ଡ ମାନାଙ୍କ ସମୟ","ଇଷ୍ଟର୍‌ ଆଇଲ୍ୟାଣ୍ଡ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"America/Guayaquil":{"long":["ଇକ୍ୱେଡର ସମୟ","ଇକ୍ୱେଡର ସମୟ"]},"Europe/Paris":{"long":["କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ମାନାଙ୍କ ସମୟ","କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Europe/Andorra":{"long":["କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ମାନାଙ୍କ ସମୟ","କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Europe/Tirane":{"long":["କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ମାନାଙ୍କ ସମୟ","କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Europe/Vienna":{"long":["କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ମାନାଙ୍କ ସମୟ","କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Europe/Sarajevo":{"long":["କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ମାନାଙ୍କ ସମୟ","କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Europe/Brussels":{"long":["କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ମାନାଙ୍କ ସମୟ","କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Europe/Zurich":{"long":["କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ମାନାଙ୍କ ସମୟ","କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Europe/Prague":{"long":["କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ମାନାଙ୍କ ସମୟ","କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Europe/Berlin":{"long":["କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ମାନାଙ୍କ ସମୟ","କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Europe/Copenhagen":{"long":["କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ମାନାଙ୍କ ସମୟ","କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Europe/Madrid":{"long":["କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ମାନାଙ୍କ ସମୟ","କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Europe/Gibraltar":{"long":["କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ମାନାଙ୍କ ସମୟ","କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Europe/Zagreb":{"long":["କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ମାନାଙ୍କ ସମୟ","କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Europe/Budapest":{"long":["କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ମାନାଙ୍କ ସମୟ","କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Europe/Rome":{"long":["କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ମାନାଙ୍କ ସମୟ","କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Europe/Vaduz":{"long":["କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ମାନାଙ୍କ ସମୟ","କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Europe/Luxembourg":{"long":["କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ମାନାଙ୍କ ସମୟ","କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Europe/Monaco":{"long":["କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ମାନାଙ୍କ ସମୟ","କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Europe/Podgorica":{"long":["କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ମାନାଙ୍କ ସମୟ","କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Europe/Skopje":{"long":["କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ମାନାଙ୍କ ସମୟ","କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Europe/Malta":{"long":["କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ମାନାଙ୍କ ସମୟ","କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Europe/Amsterdam":{"long":["କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ମାନାଙ୍କ ସମୟ","କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Europe/Oslo":{"long":["କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ମାନାଙ୍କ ସମୟ","କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Europe/Warsaw":{"long":["କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ମାନାଙ୍କ ସମୟ","କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Europe/Belgrade":{"long":["କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ମାନାଙ୍କ ସମୟ","କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Europe/Stockholm":{"long":["କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ମାନାଙ୍କ ସମୟ","କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Europe/Ljubljana":{"long":["କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ମାନାଙ୍କ ସମୟ","କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Europe/Bratislava":{"long":["କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ମାନାଙ୍କ ସମୟ","କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Europe/San_Marino":{"long":["କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ମାନାଙ୍କ ସମୟ","କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Africa/Tunis":{"long":["କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ମାନାଙ୍କ ସମୟ","କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Europe/Vatican":{"long":["କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ମାନାଙ୍କ ସମୟ","କେନ୍ଦ୍ରୀୟ ୟୁରୋପୀୟ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Europe/Bucharest":{"long":["ପୂର୍ବାଞ୍ଚଳ ୟୁରୋପୀୟ ମାନାଙ୍କ ସମୟ","ପୂର୍ବାଞ୍ଚଳ ୟୁରୋପୀୟ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Europe/Mariehamn":{"long":["ପୂର୍ବାଞ୍ଚଳ ୟୁରୋପୀୟ ମାନାଙ୍କ ସମୟ","ପୂର୍ବାଞ୍ଚଳ ୟୁରୋପୀୟ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Europe/Sofia":{"long":["ପୂର୍ବାଞ୍ଚଳ ୟୁରୋପୀୟ ମାନାଙ୍କ ସମୟ","ପୂର୍ବାଞ୍ଚଳ ୟୁରୋପୀୟ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Asia/Nicosia":{"long":["ପୂର୍ବାଞ୍ଚଳ ୟୁରୋପୀୟ ମାନାଙ୍କ ସମୟ","ପୂର୍ବାଞ୍ଚଳ ୟୁରୋପୀୟ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Africa/Cairo":{"long":["ପୂର୍ବାଞ୍ଚଳ ୟୁରୋପୀୟ ମାନାଙ୍କ ସମୟ","ପୂର୍ବାଞ୍ଚଳ ୟୁରୋପୀୟ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Europe/Helsinki":{"long":["ପୂର୍ବାଞ୍ଚଳ ୟୁରୋପୀୟ ମାନାଙ୍କ ସମୟ","ପୂର୍ବାଞ୍ଚଳ ୟୁରୋପୀୟ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Europe/Athens":{"long":["ପୂର୍ବାଞ୍ଚଳ ୟୁରୋପୀୟ ମାନାଙ୍କ ସମୟ","ପୂର୍ବାଞ୍ଚଳ ୟୁରୋପୀୟ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Asia/Amman":{"long":["ପୂର୍ବାଞ୍ଚଳ ୟୁରୋପୀୟ ମାନାଙ୍କ ସମୟ","ପୂର୍ବାଞ୍ଚଳ ୟୁରୋପୀୟ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Asia/Beirut":{"long":["ପୂର୍ବାଞ୍ଚଳ ୟୁରୋପୀୟ ମାନାଙ୍କ ସମୟ","ପୂର୍ବାଞ୍ଚଳ ୟୁରୋପୀୟ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Asia/Damascus":{"long":["ପୂର୍ବାଞ୍ଚଳ ୟୁରୋପୀୟ ମାନାଙ୍କ ସମୟ","ପୂର୍ବାଞ୍ଚଳ ୟୁରୋପୀୟ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Europe/Minsk":{"long":["ପରବର୍ତ୍ତୀ-ପୂର୍ବାଞ୍ଚଳ ୟୁରୋପୀୟ ସମୟ","ପରବର୍ତ୍ତୀ-ପୂର୍ବାଞ୍ଚଳ ୟୁରୋପୀୟ ସମୟ"]},"Europe/Kaliningrad":{"long":["ପରବର୍ତ୍ତୀ-ପୂର୍ବାଞ୍ଚଳ ୟୁରୋପୀୟ ସମୟ","ପରବର୍ତ୍ତୀ-ପୂର୍ବାଞ୍ଚଳ ୟୁରୋପୀୟ ସମୟ"]},"Atlantic/Canary":{"long":["ପଶ୍ଚିମାଞ୍ଚଳ ୟୁରୋପୀୟ ମାନାଙ୍କ ସମୟ","ପଶ୍ଚିମାଞ୍ଚଳ ୟୁରୋପୀୟ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Atlantic/Faeroe":{"long":["ପଶ୍ଚିମାଞ୍ଚଳ ୟୁରୋପୀୟ ମାନାଙ୍କ ସମୟ","ପଶ୍ଚିମାଞ୍ଚଳ ୟୁରୋପୀୟ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Atlantic/Stanley":{"long":["ଫକଲ୍ୟାଣ୍ଡ ଦ୍ୱୀପପୁଞ୍ଜ ମାନାଙ୍କ ସମୟ","ଫକଲ୍ୟାଣ୍ଡ ଦ୍ୱୀପପୁଞ୍ଜ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Pacific/Fiji":{"long":["ଫିଜି ମାନାଙ୍କ ସମୟ","ଫିଜି ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"America/Cayenne":{"long":["ଫ୍ରେଞ୍ଚ ଗୁଆନା ସମୟ","ଫ୍ରେଞ୍ଚ ଗୁଆନା ସମୟ"]},"Indian/Kerguelen":{"long":["ଫ୍ରେଞ୍ଚ ଦକ୍ଷିଣ ଏବଂ ଆଣ୍ଟାର୍କାଟିକ୍‌ ସମୟ","ଫ୍ରେଞ୍ଚ ଦକ୍ଷିଣ ଏବଂ ଆଣ୍ଟାର୍କାଟିକ୍‌ ସମୟ"]},"Asia/Bishkek":{"long":["କିର୍ଗିସ୍ତାନ ସମୟ","କିର୍ଗିସ୍ତାନ ସମୟ"]},"Pacific/Galapagos":{"long":["ଗାଲାପାଗୋସ୍ ସମୟ","ଗାଲାପାଗୋସ୍ ସମୟ"]},"Pacific/Gambier":{"long":["ଗାମ୍ବିୟର୍ ସମୟ","ଗାମ୍ବିୟର୍ ସମୟ"]},"Pacific/Tarawa":{"long":["ଗିଲବର୍ଟ୍‌ ଦ୍ୱୀପପୁଞ୍ଜ ସମୟ","ଗିଲବର୍ଟ୍‌ ଦ୍ୱୀପପୁଞ୍ଜ ସମୟ"]},"Atlantic/Reykjavik":{"long":["ଗ୍ରୀନୱିଚ୍ ମିନ୍ ସମୟ","ଗ୍ରୀନୱିଚ୍ ମିନ୍ ସମୟ"]},"Africa/Ouagadougou":{"long":["ଗ୍ରୀନୱିଚ୍ ମିନ୍ ସମୟ","ଗ୍ରୀନୱିଚ୍ ମିନ୍ ସମୟ"]},"Africa/Abidjan":{"long":["ଗ୍ରୀନୱିଚ୍ ମିନ୍ ସମୟ","ଗ୍ରୀନୱିଚ୍ ମିନ୍ ସମୟ"]},"Africa/Accra":{"long":["ଗ୍ରୀନୱିଚ୍ ମିନ୍ ସମୟ","ଗ୍ରୀନୱିଚ୍ ମିନ୍ ସମୟ"]},"Africa/Banjul":{"long":["ଗ୍ରୀନୱିଚ୍ ମିନ୍ ସମୟ","ଗ୍ରୀନୱିଚ୍ ମିନ୍ ସମୟ"]},"Africa/Conakry":{"long":["ଗ୍ରୀନୱିଚ୍ ମିନ୍ ସମୟ","ଗ୍ରୀନୱିଚ୍ ମିନ୍ ସମୟ"]},"Africa/Bamako":{"long":["ଗ୍ରୀନୱିଚ୍ ମିନ୍ ସମୟ","ଗ୍ରୀନୱିଚ୍ ମିନ୍ ସମୟ"]},"Africa/Nouakchott":{"long":["ଗ୍ରୀନୱିଚ୍ ମିନ୍ ସମୟ","ଗ୍ରୀନୱିଚ୍ ମିନ୍ ସମୟ"]},"Atlantic/St_Helena":{"long":["ଗ୍ରୀନୱିଚ୍ ମିନ୍ ସମୟ","ଗ୍ରୀନୱିଚ୍ ମିନ୍ ସମୟ"]},"Africa/Freetown":{"long":["ଗ୍ରୀନୱିଚ୍ ମିନ୍ ସମୟ","ଗ୍ରୀନୱିଚ୍ ମିନ୍ ସମୟ"]},"Africa/Dakar":{"long":["ଗ୍ରୀନୱିଚ୍ ମିନ୍ ସମୟ","ଗ୍ରୀନୱିଚ୍ ମିନ୍ ସମୟ"]},"Africa/Lome":{"long":["ଗ୍ରୀନୱିଚ୍ ମିନ୍ ସମୟ","ଗ୍ରୀନୱିଚ୍ ମିନ୍ ସମୟ"]},"America/Scoresbysund":{"long":["ପୂର୍ବ ଗ୍ରୀନଲ୍ୟାଣ୍ଡ୍ ମାନାଙ୍କ ସମୟ","ପୂର୍ବ ଗ୍ରୀନଲ୍ୟାଣ୍ଡ୍ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"America/Godthab":{"long":["ପଶ୍ଚିମ ଗ୍ରୀନଲ୍ୟାଣ୍ଡ୍ ମାନାଙ୍କ ସମୟ","ପଶ୍ଚିମ ଗ୍ରୀନଲ୍ୟାଣ୍ଡ୍ ଗ୍ରୀଷ୍ମ ସମୟ"]},"Asia/Dubai":{"long":["ଗଲ୍ଫ ମାନାଙ୍କ ସମୟ","ଗଲ୍ଫ ମାନାଙ୍କ ସମୟ"]},"Asia/Muscat":{"long":["ଗଲ୍ଫ ମାନାଙ୍କ ସମୟ","ଗଲ୍ଫ ମାନାଙ୍କ ସମୟ"]},"America/Guyana":{"long":["ଗୁଏନା ସମୟ","ଗୁଏନା ସମୟ"]},"Pacific/Honolulu":{"long":["ହୱାଇ-ଆଲେଉଟିୟ ମାନାଙ୍କ ସମୟ","ହୱାଇ-ଆଲେଉଟିୟ ଦିବାଲୋକ ସମୟ"]},"Asia/Hong_Kong":{"long":["ହଂ କଂ ମାନାଙ୍କ ସମୟ","ହଂ କଂ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Asia/Hovd":{"long":["ହୋଭଡ୍‌ ମାନାଙ୍କ ସମୟ","ହୋଭଡ୍‌ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Asia/Calcutta":{"long":["ଭାରତ ମାନାଙ୍କ ସମୟ","ଭାରତ ମାନାଙ୍କ ସମୟ"],"short":["IST","IST"]},"Indian/Chagos":{"long":["ଭାରତ ମାହାସାଗର ସମୟ","ଭାରତ ମାହାସାଗର ସମୟ"]},"Asia/Bangkok":{"long":["ଇଣ୍ଡୋଚାଇନା ସମୟ","ଇଣ୍ଡୋଚାଇନା ସମୟ"]},"Asia/Phnom_Penh":{"long":["ଇଣ୍ଡୋଚାଇନା ସମୟ","ଇଣ୍ଡୋଚାଇନା ସମୟ"]},"Asia/Vientiane":{"long":["ଇଣ୍ଡୋଚାଇନା ସମୟ","ଇଣ୍ଡୋଚାଇନା ସମୟ"]},"Asia/Makassar":{"long":["ମଧ୍ୟ ଇଣ୍ଡୋନେସିଆ ସମୟ","ମଧ୍ୟ ଇଣ୍ଡୋନେସିଆ ସମୟ"]},"Asia/Jayapura":{"long":["ପୂର୍ବ ଇଣ୍ଡୋନେସିଆ ସମୟ","ପୂର୍ବ ଇଣ୍ଡୋନେସିଆ ସମୟ"]},"Asia/Jakarta":{"long":["ପଶ୍ଚିମ ଇଣ୍ଡୋନେସିଆ ସମୟ","ପଶ୍ଚିମ ଇଣ୍ଡୋନେସିଆ ସମୟ"]},"Asia/Tehran":{"long":["ଇରାନ ମାନାଙ୍କ ସମୟ","ଇରାନ ଦିବାଲୋକ ସମୟ"]},"Asia/Irkutsk":{"long":["ଇଅରକୁଟସ୍କ ମାନାଙ୍କ ସମୟ","ଇର୍କୁଟସ୍କ୍ ଗ୍ରୀଷ୍ମକାଳୀନ ସମୟ"]},"Asia/Jerusalem":{"long":["ଇସ୍ରାଏଲ ମାନାଙ୍କ ସମୟ","ଇସ୍ରାଏଲ ଦିବାଲୋକ ସମୟ"]},"Asia/Tokyo":{"long":["ଜାପାନ ମାନାଙ୍କ ସମୟ","ଜାପାନ ଦିବାଲୋକ ସମୟ"]},"Asia/Karachi":{"long":["ପାକିସ୍ତାନ ମାନାଙ୍କ ସମୟ","ପାକିସ୍ତାନ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Asia/Seoul":{"long":["କୋରିୟ ମାନାଙ୍କ ସମୟ","କୋରିୟ ଦିବାଲୋକ ସମୟ"]},"Pacific/Kosrae":{"long":["କୋସରେଇ ସମୟ","କୋସରେଇ ସମୟ"]},"Asia/Krasnoyarsk":{"long":["କ୍ରାସନୋୟାରସ୍କ ମାନାଙ୍କ ସମୟ","କ୍ରାସନୋୟାରସ୍କ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Pacific/Kiritimati":{"long":["ଲାଇନ୍‌ ଦ୍ୱୀପପୁଞ୍ଜ ସମୟ","ଲାଇନ୍‌ ଦ୍ୱୀପପୁଞ୍ଜ ସମୟ"]},"Australia/Lord_Howe":{"long":["ଲର୍ଡ ହୋୱେ ମାନାଙ୍କ ସମୟ","ଲର୍ଡ ହୋୱେ ଦିବାଲୋକ ସମୟ"]},"Antarctica/Macquarie":{"long":["ମାକ୍ୱେରୀ ଦ୍ୱୀପ ସମୟ","ମାକ୍ୱେରୀ ଦ୍ୱୀପ ସମୟ"]},"Asia/Magadan":{"long":["ମାଗାଡାନ୍ ମାନାଙ୍କ ସମୟ","ମାଗାଡାନ୍ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Indian/Maldives":{"long":["ମାଳଦ୍ୱୀପ ସମୟ","ମାଳଦ୍ୱୀପ ସମୟ"]},"Pacific/Marquesas":{"long":["ମାର୍କ୍ୱେସାସ୍‌ ସମୟ","ମାର୍କ୍ୱେସାସ୍‌ ସମୟ"]},"Pacific/Majuro":{"long":["ମାର୍ଶାଲ୍‌ ଦ୍ୱୀପପୁଞ୍ଜ ସମୟ","ମାର୍ଶାଲ୍‌ ଦ୍ୱୀପପୁଞ୍ଜ ସମୟ"]},"Indian/Mauritius":{"long":["ମୌରିସସ୍‌ ମାନାଙ୍କ ସମୟ","ମୌରିସସ୍‌ ଖରାଦିନ ସମୟ"]},"Antarctica/Mawson":{"long":["ମାୱସନ୍‌ ସମୟ","ମାୱସନ୍‌ ସମୟ"]},"America/Santa_Isabel":{"long":["ଉତ୍ତରପଶ୍ଚିମ ମେକ୍ସିକୋ ମାନାଙ୍କ ସମୟ","ଉତ୍ତରପଶ୍ଚିମ ମେକ୍ସିକୋ ଦିବାଲୋକ ସମୟ"]},"America/Mazatlan":{"long":["ମେକ୍ସିକାନ୍ ପାସିଫିକ୍ ମାନାଙ୍କ ସମୟ","ମେକ୍ସିକାନ୍ ପାସିଫିକ୍ ଦିବାଲୋକ ସମୟ"]},"Asia/Ulaanbaatar":{"long":["ଉଲାନ୍‌ବାଟର୍‌ ମାନାଙ୍କ ସମୟ","ଉଲାନ୍‌ ବାଟର୍‌ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Europe/Moscow":{"long":["ମସ୍କୋ ମାନାଙ୍କ ସମୟ","ମସ୍କୋ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Asia/Rangoon":{"long":["ମିଆଁମାର୍‌ ସମୟ","ମିଆଁମାର୍‌ ସମୟ"]},"Pacific/Nauru":{"long":["ନାଉରୁ ସମୟ","ନାଉରୁ ସମୟ"]},"Asia/Katmandu":{"long":["ନେପାଳ ସମୟ","ନେପାଳ ସମୟ"]},"Pacific/Noumea":{"long":["ନ୍ୟୁ କାଲେଡୋନିଆ ମାନାଙ୍କ ସମୟ","ନ୍ୟୁ କାଲେଡୋନିଆ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Pacific/Auckland":{"long":["ନ୍ୟୁଜିଲାଣ୍ଡ ମାନାଙ୍କ ସମୟ","ନ୍ୟୁଜିଲାଣ୍ଡ ଦିବାଲୋକ ସମୟ"]},"Antarctica/McMurdo":{"long":["ନ୍ୟୁଜିଲାଣ୍ଡ ମାନାଙ୍କ ସମୟ","ନ୍ୟୁଜିଲାଣ୍ଡ ଦିବାଲୋକ ସମୟ"]},"America/St_Johns":{"long":["ନ୍ୟୁଫାଉଣ୍ଡଲ୍ୟାଣ୍ଡ୍ ମାନାଙ୍କ ସମୟ","ନ୍ୟୁଫାଉଣ୍ଡଲ୍ୟାଣ୍ଡ୍ ଦିବାଲୋକ ସମୟ"]},"Pacific/Niue":{"long":["ନିୟୁ ସମୟ","ନିୟୁ ସମୟ"]},"Pacific/Norfolk":{"long":["ନରଫୋକ୍‌ ଦ୍ୱୀପ ସମୟ","ନରଫୋକ୍‌ ଦ୍ୱୀପ ସମୟ"]},"America/Noronha":{"long":["ଫର୍ଣ୍ଣାଣ୍ଡୋ ଡି ନୋରୋନ୍ନା ମାନାଙ୍କ ସମୟ","ଫର୍ଣ୍ଣାଣ୍ଡୋ ଡି ନୋରୋନ୍ନା ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Asia/Novosibirsk":{"long":["ନୋଭୋସିବିରସ୍କ ମାନାଙ୍କ ସମୟ","ନୋଭୋସିବିରସ୍କ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Asia/Omsk":{"long":["ଓମସ୍କ ମାନାଙ୍କ ସମୟ","ଓମସ୍କ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Pacific/Palau":{"long":["ପାଲାଉ ସମୟ","ପାଲାଉ ସମୟ"]},"Pacific/Port_Moresby":{"long":["ପପୁଆ ନ୍ୟୁ ଗୁନିଆ ସମୟ","ପପୁଆ ନ୍ୟୁ ଗୁନିଆ ସମୟ"]},"America/Asuncion":{"long":["ପାରାଗୁଏ ମାନାଙ୍କ ସମୟ","ପାରାଗୁଏ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"America/Lima":{"long":["ପେରୁ ମାନାଙ୍କ ସମୟ","ପେରୁ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Asia/Manila":{"long":["ଫିଲିପାଇନ୍‌ ମାନାଙ୍କ ସମୟ","ଫିଲିପାଇନ୍‌ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Pacific/Enderbury":{"long":["ଫୋନିକ୍ସ ଦ୍ୱୀପପୁଞ୍ଜ ସମୟ","ଫୋନିକ୍ସ ଦ୍ୱୀପପୁଞ୍ଜ ସମୟ"]},"America/Miquelon":{"long":["ସେଣ୍ଟ. ପିଏରେ ଏବଂ ମିକ୍ୟୁଲୋନ୍ ମାନାଙ୍କ ସମୟ","ସେଣ୍ଟ. ପିଏରେ ଏବଂ ମିକ୍ୟୁଲୋନ୍ ଦିବାଲୋକ ସମୟ"]},"Pacific/Pitcairn":{"long":["ପିଟକାରିନ୍‌ ସମୟ","ପିଟକାରିନ୍‌ ସମୟ"]},"Pacific/Ponape":{"long":["ପୋନାପେ ସମୟ","ପୋନାପେ ସମୟ"]},"Asia/Pyongyang":{"long":["ପୋୟଙ୍ଗୟାଙ୍ଗ ସମୟ","ପୋୟଙ୍ଗୟାଙ୍ଗ ସମୟ"]},"Indian/Reunion":{"long":["ରିୟୁନିଅନ୍‌ ସମୟ","ରିୟୁନିଅନ୍‌ ସମୟ"]},"Antarctica/Rothera":{"long":["ରୋଥେରା ସମୟ","ରୋଥେରା ସମୟ"]},"Asia/Sakhalin":{"long":["ସଖାଲିନ୍ ମାନାଙ୍କ ସମୟ","ସଖାଲିନ୍ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Pacific/Pago_Pago":{"long":["ସାମୋଆ ମାନାଙ୍କ ସମୟ","ସାମୋଆ ଦିବାଲୋକ ସମୟ"]},"Indian/Mahe":{"long":["ସେଚେଲ୍ଲେସ୍‌ ସମୟ","ସେଚେଲ୍ଲେସ୍‌ ସମୟ"]},"Asia/Singapore":{"long":["ସିଙ୍ଗାପୁର୍‌ ମାନାଙ୍କ ସମୟ","ସିଙ୍ଗାପୁର୍‌ ମାନାଙ୍କ ସମୟ"]},"Pacific/Guadalcanal":{"long":["ସୋଲୋମନ ଦ୍ୱୀପପୁଞ୍ଜ ସମୟ","ସୋଲୋମନ ଦ୍ୱୀପପୁଞ୍ଜ ସମୟ"]},"Atlantic/South_Georgia":{"long":["ଦକ୍ଷିଣ ଜର୍ଜିଆ ସମୟ","ଦକ୍ଷିଣ ଜର୍ଜିଆ ସମୟ"]},"Asia/Yekaterinburg":{"long":["ୟେକାଟେରିନବର୍ଗ୍ ମାନାଙ୍କ ସମୟ","ୟେକାଟେରିନବର୍ଗ୍ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Antarctica/Syowa":{"long":["ସୋୱା ସମୟ","ସୋୱା ସମୟ"]},"Pacific/Tahiti":{"long":["ତାହିତି ସମୟ","ତାହିତି ସମୟ"]},"Asia/Taipei":{"long":["ତାଇପେଇ ମାନାଙ୍କ ସମୟ","ତାଇପେଇ ଦିବାଲୋକ ସମୟ"]},"Asia/Tashkent":{"long":["ଉଜବେକିସ୍ତାନ ମାନାଙ୍କ ସମୟ","ଉଜବେକିସ୍ତାନ ଖରାଦିନ ସମୟ"]},"Pacific/Fakaofo":{"long":["ଟୋକେଲାଉ ସମୟ","ଟୋକେଲାଉ ସମୟ"]},"Pacific/Tongatapu":{"long":["ଟୋଙ୍ଗା ମାନାଙ୍କ ସମୟ","ଟୋଙ୍ଗା ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Pacific/Truk":{"long":["ଚୂକ୍‌ ସମୟ","ଚୂକ୍‌ ସମୟ"]},"Pacific/Funafuti":{"long":["ତୁଭାଲୁ ସମୟ","ତୁଭାଲୁ ସମୟ"]},"America/Montevideo":{"long":["ଉରୁଗୁଏ ମାନାଙ୍କ ସମୟ","ଉରୁଗୁଏ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Pacific/Efate":{"long":["ଭାନୁଆଟୁ ମାନାଙ୍କ ସମୟ","ଭାନୁଆଟୁ ଖରାଦିନ ସମୟ"]},"America/Caracas":{"long":["ଭେନିଜୁଏଲା ସମୟ","ଭେନିଜୁଏଲା ସମୟ"]},"Asia/Vladivostok":{"long":["ଭ୍ଲାଡିଭୋଷ୍ଟୋକ୍ ମାନାଙ୍କ ସମୟ","ଭ୍ଲାଡିଭୋଷ୍ଟୋକ୍ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Europe/Volgograd":{"long":["ଭୋଲଗୋଗ୍ରାଡ୍ ମାନାଙ୍କ ସମୟ","ଭୋଲଗୋଗ୍ରାଡ୍ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"Antarctica/Vostok":{"long":["ଭୋଷ୍ଟୋକ୍‌ ସମୟ","ଭୋଷ୍ଟୋକ୍‌ ସମୟ"]},"Pacific/Wake":{"long":["ୱେକ୍‌ ଦ୍ୱୀପ ସମୟ","ୱେକ୍‌ ଦ୍ୱୀପ ସମୟ"]},"Pacific/Wallis":{"long":["ୱାଲିସ୍‌ ଏବଂ ଫୁଟୁନା ସମୟ","ୱାଲିସ୍‌ ଏବଂ ଫୁଟୁନା ସମୟ"]},"Asia/Yakutsk":{"long":["ୟାକୁଟସ୍କ ମାନାଙ୍କ ସମୟ","ୟାକୁଟସ୍କ ଗ୍ରୀଷ୍ମକାଳ ସମୟ"]},"UTC":{"long":["ସମନ୍ୱିତ ସାର୍ବଜନୀନ ସମୟ","ସମନ୍ୱିତ ସାର୍ବଜନୀନ ସମୟ"],"short":["UTC","UTC"]}},"gmtFormat":"GMT{0}","hourFormat":"+HH:mm;-HH:mm","formats":{"gregory":["h B","h:mm B","h:mm:ss B","d","ccc","E h:mm B","E h:mm:ss B","d E","E h:mm a","E HH:mm","E h:mm:ss a","E HH:mm:ss","y G","MMM y G","MMM d, y G","E, MMM d, y G","h a","HH","h:mm a","HH:mm","h:mm:ss a","HH:mm:ss","h:mm:ss a v","HH:mm:ss v","h:mm a v","HH:mm v","L","M/d","E, M/d","dd-MM","LLL","MMM d","E, MMM d","MMMM d","MMMM ର ସପ୍ତାହ W","MMMM ର ସପ୍ତାହ W","mm:ss","y","M/y","M/d/y","E, M/d/y","MM-y","MMM y","MMM d, y","E, MMM d, y","MMMM y","QQQ y","QQQQ y","Y ର ସପ୍ତାହ w","Y ର ସପ୍ତାହ w","EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy","h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a","h:mm:ss a zzzz ଠାରେ EEEE, MMMM d, y","h:mm:ss a zzzz ଠାରେ MMMM d, y","MMM d, y, h:mm:ss a zzzz","M/d/yy, h:mm:ss a zzzz","d, h:mm:ss a zzzz","ccc, h:mm:ss a zzzz","d E, h:mm:ss a zzzz","y G, h:mm:ss a zzzz","MMM y G, h:mm:ss a zzzz","MMM d, y G, h:mm:ss a zzzz","E, MMM d, y G, h:mm:ss a zzzz","L, h:mm:ss a zzzz","M/d, h:mm:ss a zzzz","E, M/d, h:mm:ss a zzzz","dd-MM, h:mm:ss a zzzz","LLL, h:mm:ss a zzzz","MMM d, h:mm:ss a zzzz","E, MMM d, h:mm:ss a zzzz","h:mm:ss a zzzz ଠାରେ MMMM d","h:mm:ss a zzzz ଠାରେ MMMM ର ସପ୍ତାହ W","h:mm:ss a zzzz ଠାରେ MMMM ର ସପ୍ତାହ W","y, h:mm:ss a zzzz","M/y, h:mm:ss a zzzz","M/d/y, h:mm:ss a zzzz","E, M/d/y, h:mm:ss a zzzz","MM-y, h:mm:ss a zzzz","MMM y, h:mm:ss a zzzz","MMM d, y, h:mm:ss a zzzz","E, MMM d, y, h:mm:ss a zzzz","h:mm:ss a zzzz ଠାରେ MMMM y","QQQ y, h:mm:ss a zzzz","QQQQ y, h:mm:ss a zzzz","Y ର ସପ୍ତାହ w, h:mm:ss a zzzz","Y ର ସପ୍ତାହ w, h:mm:ss a zzzz","h:mm:ss a z ଠାରେ EEEE, MMMM d, y","h:mm:ss a z ଠାରେ MMMM d, y","MMM d, y, h:mm:ss a z","M/d/yy, h:mm:ss a z","d, h:mm:ss a z","ccc, h:mm:ss a z","d E, h:mm:ss a z","y G, h:mm:ss a z","MMM y G, h:mm:ss a z","MMM d, y G, h:mm:ss a z","E, MMM d, y G, h:mm:ss a z","L, h:mm:ss a z","M/d, h:mm:ss a z","E, M/d, h:mm:ss a z","dd-MM, h:mm:ss a z","LLL, h:mm:ss a z","MMM d, h:mm:ss a z","E, MMM d, h:mm:ss a z","h:mm:ss a z ଠାରେ MMMM d","h:mm:ss a z ଠାରେ MMMM ର ସପ୍ତାହ W","h:mm:ss a z ଠାରେ MMMM ର ସପ୍ତାହ W","y, h:mm:ss a z","M/y, h:mm:ss a z","M/d/y, h:mm:ss a z","E, M/d/y, h:mm:ss a z","MM-y, h:mm:ss a z","MMM y, h:mm:ss a z","MMM d, y, h:mm:ss a z","E, MMM d, y, h:mm:ss a z","h:mm:ss a z ଠାରେ MMMM y","QQQ y, h:mm:ss a z","QQQQ y, h:mm:ss a z","Y ର ସପ୍ତାହ w, h:mm:ss a z","Y ର ସପ୍ତାହ w, h:mm:ss a z","h:mm:ss a ଠାରେ EEEE, MMMM d, y","h:mm:ss a ଠାରେ MMMM d, y","MMM d, y, h:mm:ss a","M/d/yy, h:mm:ss a","d, h:mm:ss a","ccc, h:mm:ss a","d E, h:mm:ss a","y G, h:mm:ss a","MMM y G, h:mm:ss a","MMM d, y G, h:mm:ss a","E, MMM d, y G, h:mm:ss a","L, h:mm:ss a","M/d, h:mm:ss a","E, M/d, h:mm:ss a","dd-MM, h:mm:ss a","LLL, h:mm:ss a","MMM d, h:mm:ss a","E, MMM d, h:mm:ss a","h:mm:ss a ଠାରେ MMMM d","h:mm:ss a ଠାରେ MMMM ର ସପ୍ତାହ W","h:mm:ss a ଠାରେ MMMM ର ସପ୍ତାହ W","y, h:mm:ss a","M/y, h:mm:ss a","M/d/y, h:mm:ss a","E, M/d/y, h:mm:ss a","MM-y, h:mm:ss a","MMM y, h:mm:ss a","MMM d, y, h:mm:ss a","E, MMM d, y, h:mm:ss a","h:mm:ss a ଠାରେ MMMM y","QQQ y, h:mm:ss a","QQQQ y, h:mm:ss a","Y ର ସପ୍ତାହ w, h:mm:ss a","Y ର ସପ୍ତାହ w, h:mm:ss a","h:mm a ଠାରେ EEEE, MMMM d, y","h:mm a ଠାରେ MMMM d, y","MMM d, y, h:mm a","M/d/yy, h:mm a","d, h:mm a","ccc, h:mm a","d E, h:mm a","y G, h:mm a","MMM y G, h:mm a","MMM d, y G, h:mm a","E, MMM d, y G, h:mm a","L, h:mm a","M/d, h:mm a","E, M/d, h:mm a","dd-MM, h:mm a","LLL, h:mm a","MMM d, h:mm a","E, MMM d, h:mm a","h:mm a ଠାରେ MMMM d","h:mm a ଠାରେ MMMM ର ସପ୍ତାହ W","h:mm a ଠାରେ MMMM ର ସପ୍ତାହ W","y, h:mm a","M/y, h:mm a","M/d/y, h:mm a","E, M/d/y, h:mm a","MM-y, h:mm a","MMM y, h:mm a","MMM d, y, h:mm a","E, MMM d, y, h:mm a","h:mm a ଠାରେ MMMM y","QQQ y, h:mm a","QQQQ y, h:mm a","Y ର ସପ୍ତାହ w, h:mm a","Y ର ସପ୍ତାହ w, h:mm a","h B ଠାରେ EEEE, MMMM d, y","h B ଠାରେ MMMM d, y","MMM d, y, h B","M/d/yy, h B","d, h B","ccc, h B","d E, h B","y G, h B","MMM y G, h B","MMM d, y G, h B","E, MMM d, y G, h B","L, h B","M/d, h B","E, M/d, h B","dd-MM, h B","LLL, h B","MMM d, h B","E, MMM d, h B","h B ଠାରେ MMMM d","h B ଠାରେ MMMM ର ସପ୍ତାହ W","h B ଠାରେ MMMM ର ସପ୍ତାହ W","y, h B","M/y, h B","M/d/y, h B","E, M/d/y, h B","MM-y, h B","MMM y, h B","MMM d, y, h B","E, MMM d, y, h B","h B ଠାରେ MMMM y","QQQ y, h B","QQQQ y, h B","Y ର ସପ୍ତାହ w, h B","Y ର ସପ୍ତାହ w, h B","h:mm B ଠାରେ EEEE, MMMM d, y","h:mm B ଠାରେ MMMM d, y","MMM d, y, h:mm B","M/d/yy, h:mm B","d, h:mm B","ccc, h:mm B","d E, h:mm B","y G, h:mm B","MMM y G, h:mm B","MMM d, y G, h:mm B","E, MMM d, y G, h:mm B","L, h:mm B","M/d, h:mm B","E, M/d, h:mm B","dd-MM, h:mm B","LLL, h:mm B","MMM d, h:mm B","E, MMM d, h:mm B","h:mm B ଠାରେ MMMM d","h:mm B ଠାରେ MMMM ର ସପ୍ତାହ W","h:mm B ଠାରେ MMMM ର ସପ୍ତାହ W","y, h:mm B","M/y, h:mm B","M/d/y, h:mm B","E, M/d/y, h:mm B","MM-y, h:mm B","MMM y, h:mm B","MMM d, y, h:mm B","E, MMM d, y, h:mm B","h:mm B ଠାରେ MMMM y","QQQ y, h:mm B","QQQQ y, h:mm B","Y ର ସପ୍ତାହ w, h:mm B","Y ର ସପ୍ତାହ w, h:mm B","h:mm:ss B ଠାରେ EEEE, MMMM d, y","h:mm:ss B ଠାରେ MMMM d, y","MMM d, y, h:mm:ss B","M/d/yy, h:mm:ss B","d, h:mm:ss B","ccc, h:mm:ss B","d E, h:mm:ss B","y G, h:mm:ss B","MMM y G, h:mm:ss B","MMM d, y G, h:mm:ss B","E, MMM d, y G, h:mm:ss B","L, h:mm:ss B","M/d, h:mm:ss B","E, M/d, h:mm:ss B","dd-MM, h:mm:ss B","LLL, h:mm:ss B","MMM d, h:mm:ss B","E, MMM d, h:mm:ss B","h:mm:ss B ଠାରେ MMMM d","h:mm:ss B ଠାରେ MMMM ର ସପ୍ତାହ W","h:mm:ss B ଠାରେ MMMM ର ସପ୍ତାହ W","y, h:mm:ss B","M/y, h:mm:ss B","M/d/y, h:mm:ss B","E, M/d/y, h:mm:ss B","MM-y, h:mm:ss B","MMM y, h:mm:ss B","MMM d, y, h:mm:ss B","E, MMM d, y, h:mm:ss B","h:mm:ss B ଠାରେ MMMM y","QQQ y, h:mm:ss B","QQQQ y, h:mm:ss B","Y ର ସପ୍ତାହ w, h:mm:ss B","Y ର ସପ୍ତାହ w, h:mm:ss B","h a ଠାରେ EEEE, MMMM d, y","h a ଠାରେ MMMM d, y","MMM d, y, h a","M/d/yy, h a","d, h a","ccc, h a","d E, h a","y G, h a","MMM y G, h a","MMM d, y G, h a","E, MMM d, y G, h a","L, h a","M/d, h a","E, M/d, h a","dd-MM, h a","LLL, h a","MMM d, h a","E, MMM d, h a","h a ଠାରେ MMMM d","h a ଠାରେ MMMM ର ସପ୍ତାହ W","h a ଠାରେ MMMM ର ସପ୍ତାହ W","y, h a","M/y, h a","M/d/y, h a","E, M/d/y, h a","MM-y, h a","MMM y, h a","MMM d, y, h a","E, MMM d, y, h a","h a ଠାରେ MMMM y","QQQ y, h a","QQQQ y, h a","Y ର ସପ୍ତାହ w, h a","Y ର ସପ୍ତାହ w, h a","HH ଠାରେ EEEE, MMMM d, y","HH ଠାରେ MMMM d, y","MMM d, y, HH","M/d/yy, HH","d, HH","ccc, HH","d E, HH","y G, HH","MMM y G, HH","MMM d, y G, HH","E, MMM d, y G, HH","L, HH","M/d, HH","E, M/d, HH","dd-MM, HH","LLL, HH","MMM d, HH","E, MMM d, HH","HH ଠାରେ MMMM d","HH ଠାରେ MMMM ର ସପ୍ତାହ W","HH ଠାରେ MMMM ର ସପ୍ତାହ W","y, HH","M/y, HH","M/d/y, HH","E, M/d/y, HH","MM-y, HH","MMM y, HH","MMM d, y, HH","E, MMM d, y, HH","HH ଠାରେ MMMM y","QQQ y, HH","QQQQ y, HH","Y ର ସପ୍ତାହ w, HH","Y ର ସପ୍ତାହ w, HH","h:mm a ଠାରେ EEEE, MMMM d, y","h:mm a ଠାରେ MMMM d, y","MMM d, y, h:mm a","M/d/yy, h:mm a","d, h:mm a","ccc, h:mm a","d E, h:mm a","y G, h:mm a","MMM y G, h:mm a","MMM d, y G, h:mm a","E, MMM d, y G, h:mm a","L, h:mm a","M/d, h:mm a","E, M/d, h:mm a","dd-MM, h:mm a","LLL, h:mm a","MMM d, h:mm a","E, MMM d, h:mm a","h:mm a ଠାରେ MMMM d","h:mm a ଠାରେ MMMM ର ସପ୍ତାହ W","h:mm a ଠାରେ MMMM ର ସପ୍ତାହ W","y, h:mm a","M/y, h:mm a","M/d/y, h:mm a","E, M/d/y, h:mm a","MM-y, h:mm a","MMM y, h:mm a","MMM d, y, h:mm a","E, MMM d, y, h:mm a","h:mm a ଠାରେ MMMM y","QQQ y, h:mm a","QQQQ y, h:mm a","Y ର ସପ୍ତାହ w, h:mm a","Y ର ସପ୍ତାହ w, h:mm a","HH:mm ଠାରେ EEEE, MMMM d, y","HH:mm ଠାରେ MMMM d, y","MMM d, y, HH:mm","M/d/yy, HH:mm","d, HH:mm","ccc, HH:mm","d E, HH:mm","y G, HH:mm","MMM y G, HH:mm","MMM d, y G, HH:mm","E, MMM d, y G, HH:mm","L, HH:mm","M/d, HH:mm","E, M/d, HH:mm","dd-MM, HH:mm","LLL, HH:mm","MMM d, HH:mm","E, MMM d, HH:mm","HH:mm ଠାରେ MMMM d","HH:mm ଠାରେ MMMM ର ସପ୍ତାହ W","HH:mm ଠାରେ MMMM ର ସପ୍ତାହ W","y, HH:mm","M/y, HH:mm","M/d/y, HH:mm","E, M/d/y, HH:mm","MM-y, HH:mm","MMM y, HH:mm","MMM d, y, HH:mm","E, MMM d, y, HH:mm","HH:mm ଠାରେ MMMM y","QQQ y, HH:mm","QQQQ y, HH:mm","Y ର ସପ୍ତାହ w, HH:mm","Y ର ସପ୍ତାହ w, HH:mm","h:mm:ss a ଠାରେ EEEE, MMMM d, y","h:mm:ss a ଠାରେ MMMM d, y","MMM d, y, h:mm:ss a","M/d/yy, h:mm:ss a","d, h:mm:ss a","ccc, h:mm:ss a","d E, h:mm:ss a","y G, h:mm:ss a","MMM y G, h:mm:ss a","MMM d, y G, h:mm:ss a","E, MMM d, y G, h:mm:ss a","L, h:mm:ss a","M/d, h:mm:ss a","E, M/d, h:mm:ss a","dd-MM, h:mm:ss a","LLL, h:mm:ss a","MMM d, h:mm:ss a","E, MMM d, h:mm:ss a","h:mm:ss a ଠାରେ MMMM d","h:mm:ss a ଠାରେ MMMM ର ସପ୍ତାହ W","h:mm:ss a ଠାରେ MMMM ର ସପ୍ତାହ W","y, h:mm:ss a","M/y, h:mm:ss a","M/d/y, h:mm:ss a","E, M/d/y, h:mm:ss a","MM-y, h:mm:ss a","MMM y, h:mm:ss a","MMM d, y, h:mm:ss a","E, MMM d, y, h:mm:ss a","h:mm:ss a ଠାରେ MMMM y","QQQ y, h:mm:ss a","QQQQ y, h:mm:ss a","Y ର ସପ୍ତାହ w, h:mm:ss a","Y ର ସପ୍ତାହ w, h:mm:ss a","HH:mm:ss ଠାରେ EEEE, MMMM d, y","HH:mm:ss ଠାରେ MMMM d, y","MMM d, y, HH:mm:ss","M/d/yy, HH:mm:ss","d, HH:mm:ss","ccc, HH:mm:ss","d E, HH:mm:ss","y G, HH:mm:ss","MMM y G, HH:mm:ss","MMM d, y G, HH:mm:ss","E, MMM d, y G, HH:mm:ss","L, HH:mm:ss","M/d, HH:mm:ss","E, M/d, HH:mm:ss","dd-MM, HH:mm:ss","LLL, HH:mm:ss","MMM d, HH:mm:ss","E, MMM d, HH:mm:ss","HH:mm:ss ଠାରେ MMMM d","HH:mm:ss ଠାରେ MMMM ର ସପ୍ତାହ W","HH:mm:ss ଠାରେ MMMM ର ସପ୍ତାହ W","y, HH:mm:ss","M/y, HH:mm:ss","M/d/y, HH:mm:ss","E, M/d/y, HH:mm:ss","MM-y, HH:mm:ss","MMM y, HH:mm:ss","MMM d, y, HH:mm:ss","E, MMM d, y, HH:mm:ss","HH:mm:ss ଠାରେ MMMM y","QQQ y, HH:mm:ss","QQQQ y, HH:mm:ss","Y ର ସପ୍ତାହ w, HH:mm:ss","Y ର ସପ୍ତାହ w, HH:mm:ss","h:mm:ss a v ଠାରେ EEEE, MMMM d, y","h:mm:ss a v ଠାରେ MMMM d, y","MMM d, y, h:mm:ss a v","M/d/yy, h:mm:ss a v","d, h:mm:ss a v","ccc, h:mm:ss a v","d E, h:mm:ss a v","y G, h:mm:ss a v","MMM y G, h:mm:ss a v","MMM d, y G, h:mm:ss a v","E, MMM d, y G, h:mm:ss a v","L, h:mm:ss a v","M/d, h:mm:ss a v","E, M/d, h:mm:ss a v","dd-MM, h:mm:ss a v","LLL, h:mm:ss a v","MMM d, h:mm:ss a v","E, MMM d, h:mm:ss a v","h:mm:ss a v ଠାରେ MMMM d","h:mm:ss a v ଠାରେ MMMM ର ସପ୍ତାହ W","h:mm:ss a v ଠାରେ MMMM ର ସପ୍ତାହ W","y, h:mm:ss a v","M/y, h:mm:ss a v","M/d/y, h:mm:ss a v","E, M/d/y, h:mm:ss a v","MM-y, h:mm:ss a v","MMM y, h:mm:ss a v","MMM d, y, h:mm:ss a v","E, MMM d, y, h:mm:ss a v","h:mm:ss a v ଠାରେ MMMM y","QQQ y, h:mm:ss a v","QQQQ y, h:mm:ss a v","Y ର ସପ୍ତାହ w, h:mm:ss a v","Y ର ସପ୍ତାହ w, h:mm:ss a v","HH:mm:ss v ଠାରେ EEEE, MMMM d, y","HH:mm:ss v ଠାରେ MMMM d, y","MMM d, y, HH:mm:ss v","M/d/yy, HH:mm:ss v","d, HH:mm:ss v","ccc, HH:mm:ss v","d E, HH:mm:ss v","y G, HH:mm:ss v","MMM y G, HH:mm:ss v","MMM d, y G, HH:mm:ss v","E, MMM d, y G, HH:mm:ss v","L, HH:mm:ss v","M/d, HH:mm:ss v","E, M/d, HH:mm:ss v","dd-MM, HH:mm:ss v","LLL, HH:mm:ss v","MMM d, HH:mm:ss v","E, MMM d, HH:mm:ss v","HH:mm:ss v ଠାରେ MMMM d","HH:mm:ss v ଠାରେ MMMM ର ସପ୍ତାହ W","HH:mm:ss v ଠାରେ MMMM ର ସପ୍ତାହ W","y, HH:mm:ss v","M/y, HH:mm:ss v","M/d/y, HH:mm:ss v","E, M/d/y, HH:mm:ss v","MM-y, HH:mm:ss v","MMM y, HH:mm:ss v","MMM d, y, HH:mm:ss v","E, MMM d, y, HH:mm:ss v","HH:mm:ss v ଠାରେ MMMM y","QQQ y, HH:mm:ss v","QQQQ y, HH:mm:ss v","Y ର ସପ୍ତାହ w, HH:mm:ss v","Y ର ସପ୍ତାହ w, HH:mm:ss v","h:mm a v ଠାରେ EEEE, MMMM d, y","h:mm a v ଠାରେ MMMM d, y","MMM d, y, h:mm a v","M/d/yy, h:mm a v","d, h:mm a v","ccc, h:mm a v","d E, h:mm a v","y G, h:mm a v","MMM y G, h:mm a v","MMM d, y G, h:mm a v","E, MMM d, y G, h:mm a v","L, h:mm a v","M/d, h:mm a v","E, M/d, h:mm a v","dd-MM, h:mm a v","LLL, h:mm a v","MMM d, h:mm a v","E, MMM d, h:mm a v","h:mm a v ଠାରେ MMMM d","h:mm a v ଠାରେ MMMM ର ସପ୍ତାହ W","h:mm a v ଠାରେ MMMM ର ସପ୍ତାହ W","y, h:mm a v","M/y, h:mm a v","M/d/y, h:mm a v","E, M/d/y, h:mm a v","MM-y, h:mm a v","MMM y, h:mm a v","MMM d, y, h:mm a v","E, MMM d, y, h:mm a v","h:mm a v ଠାରେ MMMM y","QQQ y, h:mm a v","QQQQ y, h:mm a v","Y ର ସପ୍ତାହ w, h:mm a v","Y ର ସପ୍ତାହ w, h:mm a v","HH:mm v ଠାରେ EEEE, MMMM d, y","HH:mm v ଠାରେ MMMM d, y","MMM d, y, HH:mm v","M/d/yy, HH:mm v","d, HH:mm v","ccc, HH:mm v","d E, HH:mm v","y G, HH:mm v","MMM y G, HH:mm v","MMM d, y G, HH:mm v","E, MMM d, y G, HH:mm v","L, HH:mm v","M/d, HH:mm v","E, M/d, HH:mm v","dd-MM, HH:mm v","LLL, HH:mm v","MMM d, HH:mm v","E, MMM d, HH:mm v","HH:mm v ଠାରେ MMMM d","HH:mm v ଠାରେ MMMM ର ସପ୍ତାହ W","HH:mm v ଠାରେ MMMM ର ସପ୍ତାହ W","y, HH:mm v","M/y, HH:mm v","M/d/y, HH:mm v","E, M/d/y, HH:mm v","MM-y, HH:mm v","MMM y, HH:mm v","MMM d, y, HH:mm v","E, MMM d, y, HH:mm v","HH:mm v ଠାରେ MMMM y","QQQ y, HH:mm v","QQQQ y, HH:mm v","Y ର ସପ୍ତାହ w, HH:mm v","Y ର ସପ୍ତାହ w, HH:mm v","mm:ss ଠାରେ EEEE, MMMM d, y","mm:ss ଠାରେ MMMM d, y","MMM d, y, mm:ss","M/d/yy, mm:ss","d, mm:ss","ccc, mm:ss","d E, mm:ss","y G, mm:ss","MMM y G, mm:ss","MMM d, y G, mm:ss","E, MMM d, y G, mm:ss","L, mm:ss","M/d, mm:ss","E, M/d, mm:ss","dd-MM, mm:ss","LLL, mm:ss","MMM d, mm:ss","E, MMM d, mm:ss","mm:ss ଠାରେ MMMM d","mm:ss ଠାରେ MMMM ର ସପ୍ତାହ W","mm:ss ଠାରେ MMMM ର ସପ୍ତାହ W","y, mm:ss","M/y, mm:ss","M/d/y, mm:ss","E, M/d/y, mm:ss","MM-y, mm:ss","MMM y, mm:ss","MMM d, y, mm:ss","E, MMM d, y, mm:ss","mm:ss ଠାରେ MMMM y","QQQ y, mm:ss","QQQQ y, mm:ss","Y ର ସପ୍ତାହ w, mm:ss","Y ର ସପ୍ତାହ w, mm:ss"]},"hourCycle":"h12","nu":["latn"],"ca":["gregory","indian"],"hc":["h12","h23"]}},"availableLocales":["or"]})
  }}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

import CreateMethodProperty from "../helpers/_ESAbstract.CreateMethodProperty";
import IsArray from "../helpers/_ESAbstract.IsArray";
import ToObject from "../helpers/_ESAbstract.ToObject";
import ToLength from "../helpers/_ESAbstract.ToLength";
import ToInteger from "../helpers/_ESAbstract.ToInteger";
import Get from "../helpers/_ESAbstract.Get";
import IsCallable from "../helpers/_ESAbstract.IsCallable";
import ArraySpeciesCreate from "../helpers/_ESAbstract.ArraySpeciesCreate";
import ArrayCreate from "../helpers/_ESAbstract.ArrayCreate";
import Type from "../helpers/_ESAbstract.Type";
import IsConstructor from "../helpers/_ESAbstract.IsConstructor";
import GetMethod from "../helpers/_ESAbstract.GetMethod";
import GetV from "../helpers/_ESAbstract.GetV";
import Construct from "../helpers/_ESAbstract.Construct";
import OrdinaryCreateFromConstructor from "../helpers/_ESAbstract.OrdinaryCreateFromConstructor";
import GetPrototypeFromConstructor from "../helpers/_ESAbstract.GetPrototypeFromConstructor";
import HasOwnProperty from "../helpers/_ESAbstract.HasOwnProperty";
import ToPropertyKey from "../helpers/_ESAbstract.ToPropertyKey";
import ToPrimitive from "../helpers/_ESAbstract.ToPrimitive";
import Call from "../helpers/_ESAbstract.Call";
import OrdinaryToPrimitive from "../helpers/_ESAbstract.OrdinaryToPrimitive";
import ToString from "../helpers/_ESAbstract.ToString";
import HasProperty from "../helpers/_ESAbstract.HasProperty";
import ToBoolean from "../helpers/_ESAbstract.ToBoolean";
import CreateDataPropertyOrThrow from "../helpers/_ESAbstract.CreateDataPropertyOrThrow";
import CreateDataProperty from "../helpers/_ESAbstract.CreateDataProperty";
import SameValueZero from "../helpers/_ESAbstract.SameValueZero";
import SameValueNonNumber from "../helpers/_ESAbstract.SameValueNonNumber";
import GetIterator from "../helpers/_ESAbstract.GetIterator";
import IteratorStep from "../helpers/_ESAbstract.IteratorStep";
import IteratorNext from "../helpers/_ESAbstract.IteratorNext";
import IteratorComplete from "../helpers/_ESAbstract.IteratorComplete";
import IteratorValue from "../helpers/_ESAbstract.IteratorValue";
import IteratorClose from "../helpers/_ESAbstract.IteratorClose";
import SameValue from "../helpers/_ESAbstract.SameValue";
import CreateIterResultObject from "../helpers/_ESAbstract.CreateIterResultObject";
(function(undefined) {
if (!("Intl"in self&&"DateTimeFormat"in self.Intl&&"formatToParts"in self.Intl.DateTimeFormat&&self.Intl.DateTimeFormat.supportedLocalesOf("chr").length
)) {
// Intl.DateTimeFormat.~locale.chr
/* @generated */	
  // prettier-ignore
  if (Intl.DateTimeFormat && typeof Intl.DateTimeFormat.__addLocaleData === 'function') {
    Intl.DateTimeFormat.__addLocaleData({"data":{"chr":{"am":"ᏌᎾᎴ","pm":"ᏒᎯᏱᎢ","weekday":{"narrow":["Ꮖ","Ꮙ","Ꮤ","Ꮶ","Ꮕ","Ꮷ","Ꭴ"],"short":["ᏆᏍᎬ","ᏉᏅᎯ","ᏔᎵᏁ","ᏦᎢᏁ","ᏅᎩᏁ","ᏧᎾᎩ","ᏈᏕᎾ"],"long":["ᎤᎾᏙᏓᏆᏍᎬ","ᎤᎾᏙᏓᏉᏅᎯ","ᏔᎵᏁᎢᎦ","ᏦᎢᏁᎢᎦ","ᏅᎩᏁᎢᎦ","ᏧᎾᎩᎶᏍᏗ","ᎤᎾᏙᏓᏈᏕᎾ"]},"era":{"narrow":{"BC":"BC","AD":"AD"},"short":{"BC":"BC","AD":"AD"},"long":{"BC":"ᏧᏓᎷᎸ ᎤᎷᎯᏍᏗ ᎦᎶᏁᏛ","AD":"ᎠᏃ ᏙᎻᏂ"}},"month":{"narrow":["Ꭴ","Ꭷ","Ꭰ","Ꭷ","Ꭰ","Ꮥ","Ꭻ","Ꭶ","Ꮪ","Ꮪ","Ꮕ","Ꭵ"],"short":["ᎤᏃ","ᎧᎦ","ᎠᏅ","ᎧᏬ","ᎠᏂ","ᏕᎭ","ᎫᏰ","ᎦᎶ","ᏚᎵ","ᏚᏂ","ᏅᏓ","ᎥᏍ"],"long":["ᎤᏃᎸᏔᏅ","ᎧᎦᎵ","ᎠᏅᏱ","ᎧᏬᏂ","ᎠᏂᏍᎬᏘ","ᏕᎭᎷᏱ","ᎫᏰᏉᏂ","ᎦᎶᏂ","ᏚᎵᏍᏗ","ᏚᏂᏅᏗ","ᏅᏓᏕᏆ","ᎥᏍᎩᏱ"]},"timeZoneName":{"Asia/Kabul":{"long":["ᎠᏫᎨᏂᏍᏖᏂ ᎠᏟᎢᎵᏒ","ᎠᏫᎨᏂᏍᏖᏂ ᎠᏟᎢᎵᏒ"]},"Africa/Maputo":{"long":["ᎠᏰᏟ ᎬᎿᎨᏍᏛ ᎠᏟᎢᎵᏒ","ᎠᏰᏟ ᎬᎿᎨᏍᏛ ᎠᏟᎢᎵᏒ"]},"Africa/Bujumbura":{"long":["ᎠᏰᏟ ᎬᎿᎨᏍᏛ ᎠᏟᎢᎵᏒ","ᎠᏰᏟ ᎬᎿᎨᏍᏛ ᎠᏟᎢᎵᏒ"]},"Africa/Gaborone":{"long":["ᎠᏰᏟ ᎬᎿᎨᏍᏛ ᎠᏟᎢᎵᏒ","ᎠᏰᏟ ᎬᎿᎨᏍᏛ ᎠᏟᎢᎵᏒ"]},"Africa/Lubumbashi":{"long":["ᎠᏰᏟ ᎬᎿᎨᏍᏛ ᎠᏟᎢᎵᏒ","ᎠᏰᏟ ᎬᎿᎨᏍᏛ ᎠᏟᎢᎵᏒ"]},"Africa/Blantyre":{"long":["ᎠᏰᏟ ᎬᎿᎨᏍᏛ ᎠᏟᎢᎵᏒ","ᎠᏰᏟ ᎬᎿᎨᏍᏛ ᎠᏟᎢᎵᏒ"]},"Africa/Kigali":{"long":["ᎠᏰᏟ ᎬᎿᎨᏍᏛ ᎠᏟᎢᎵᏒ","ᎠᏰᏟ ᎬᎿᎨᏍᏛ ᎠᏟᎢᎵᏒ"]},"Africa/Lusaka":{"long":["ᎠᏰᏟ ᎬᎿᎨᏍᏛ ᎠᏟᎢᎵᏒ","ᎠᏰᏟ ᎬᎿᎨᏍᏛ ᎠᏟᎢᎵᏒ"]},"Africa/Harare":{"long":["ᎠᏰᏟ ᎬᎿᎨᏍᏛ ᎠᏟᎢᎵᏒ","ᎠᏰᏟ ᎬᎿᎨᏍᏛ ᎠᏟᎢᎵᏒ"]},"Africa/Nairobi":{"long":["ᏗᎧᎸᎬ ᎬᎿᎨᏍᏛ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᎬᎿᎨᏍᏛ ᎠᏟᎢᎵᏒ"]},"Africa/Djibouti":{"long":["ᏗᎧᎸᎬ ᎬᎿᎨᏍᏛ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᎬᎿᎨᏍᏛ ᎠᏟᎢᎵᏒ"]},"Africa/Asmera":{"long":["ᏗᎧᎸᎬ ᎬᎿᎨᏍᏛ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᎬᎿᎨᏍᏛ ᎠᏟᎢᎵᏒ"]},"Africa/Addis_Ababa":{"long":["ᏗᎧᎸᎬ ᎬᎿᎨᏍᏛ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᎬᎿᎨᏍᏛ ᎠᏟᎢᎵᏒ"]},"Indian/Comoro":{"long":["ᏗᎧᎸᎬ ᎬᎿᎨᏍᏛ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᎬᎿᎨᏍᏛ ᎠᏟᎢᎵᏒ"]},"Indian/Antananarivo":{"long":["ᏗᎧᎸᎬ ᎬᎿᎨᏍᏛ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᎬᎿᎨᏍᏛ ᎠᏟᎢᎵᏒ"]},"Africa/Mogadishu":{"long":["ᏗᎧᎸᎬ ᎬᎿᎨᏍᏛ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᎬᎿᎨᏍᏛ ᎠᏟᎢᎵᏒ"]},"Africa/Dar_es_Salaam":{"long":["ᏗᎧᎸᎬ ᎬᎿᎨᏍᏛ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᎬᎿᎨᏍᏛ ᎠᏟᎢᎵᏒ"]},"Africa/Kampala":{"long":["ᏗᎧᎸᎬ ᎬᎿᎨᏍᏛ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᎬᎿᎨᏍᏛ ᎠᏟᎢᎵᏒ"]},"Indian/Mayotte":{"long":["ᏗᎧᎸᎬ ᎬᎿᎨᏍᏛ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᎬᎿᎨᏍᏛ ᎠᏟᎢᎵᏒ"]},"Africa/Johannesburg":{"long":["ᏧᎦᎾᏮ ᎬᎿᎨᏍᏛ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏧᎦᎾᏮ ᎬᎿᎨᏍᏛ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ"]},"Africa/Maseru":{"long":["ᏧᎦᎾᏮ ᎬᎿᎨᏍᏛ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏧᎦᎾᏮ ᎬᎿᎨᏍᏛ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ"]},"Africa/Mbabane":{"long":["ᏧᎦᎾᏮ ᎬᎿᎨᏍᏛ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏧᎦᎾᏮ ᎬᎿᎨᏍᏛ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ"]},"Africa/Lagos":{"long":["ᏭᏕᎵᎬ ᎬᎿᎨᏍᏛ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏭᏕᎵᎬ ᎬᎿᎨᏍᏛ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Africa/Luanda":{"long":["ᏭᏕᎵᎬ ᎬᎿᎨᏍᏛ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏭᏕᎵᎬ ᎬᎿᎨᏍᏛ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Africa/Porto-Novo":{"long":["ᏭᏕᎵᎬ ᎬᎿᎨᏍᏛ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏭᏕᎵᎬ ᎬᎿᎨᏍᏛ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Africa/Kinshasa":{"long":["ᏭᏕᎵᎬ ᎬᎿᎨᏍᏛ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏭᏕᎵᎬ ᎬᎿᎨᏍᏛ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Africa/Bangui":{"long":["ᏭᏕᎵᎬ ᎬᎿᎨᏍᏛ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏭᏕᎵᎬ ᎬᎿᎨᏍᏛ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Africa/Brazzaville":{"long":["ᏭᏕᎵᎬ ᎬᎿᎨᏍᏛ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏭᏕᎵᎬ ᎬᎿᎨᏍᏛ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Africa/Douala":{"long":["ᏭᏕᎵᎬ ᎬᎿᎨᏍᏛ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏭᏕᎵᎬ ᎬᎿᎨᏍᏛ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Africa/Libreville":{"long":["ᏭᏕᎵᎬ ᎬᎿᎨᏍᏛ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏭᏕᎵᎬ ᎬᎿᎨᏍᏛ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Africa/Malabo":{"long":["ᏭᏕᎵᎬ ᎬᎿᎨᏍᏛ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏭᏕᎵᎬ ᎬᎿᎨᏍᏛ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Africa/Niamey":{"long":["ᏭᏕᎵᎬ ᎬᎿᎨᏍᏛ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏭᏕᎵᎬ ᎬᎿᎨᏍᏛ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Africa/Ndjamena":{"long":["ᏭᏕᎵᎬ ᎬᎿᎨᏍᏛ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏭᏕᎵᎬ ᎬᎿᎨᏍᏛ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Asia/Aqtobe":{"long":["ᏭᏕᎵᎬ ᎧᏎᎧᏍᏕᏂ ᎠᏟᎢᎵᏒ","ᏭᏕᎵᎬ ᎧᏎᎧᏍᏕᏂ ᎠᏟᎢᎵᏒ"]},"America/Juneau":{"long":["ᎠᎳᏍᎦ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᎳᏍᎦ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"],"short":["AKST","AKDT"]},"Asia/Almaty":{"long":["ᏗᎧᎸᎬ ᎧᏎᎧᏍᏕᏂ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᎧᏎᎧᏍᏕᏂ ᎠᏟᎢᎵᏒ"]},"America/Manaus":{"long":["ᎠᎺᏌᏂ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᎺᏌᏂ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"America/Chicago":{"long":["ᎠᏰᏟ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᏰᏟ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"],"short":["CST","CDT"]},"America/Belize":{"long":["ᎠᏰᏟ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᏰᏟ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"],"short":["CST","CDT"]},"America/Winnipeg":{"long":["ᎠᏰᏟ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᏰᏟ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"],"short":["CST","CDT"]},"America/Costa_Rica":{"long":["ᎠᏰᏟ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᏰᏟ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"],"short":["CST","CDT"]},"America/Guatemala":{"long":["ᎠᏰᏟ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᏰᏟ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"],"short":["CST","CDT"]},"America/Tegucigalpa":{"long":["ᎠᏰᏟ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᏰᏟ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"],"short":["CST","CDT"]},"America/Mexico_City":{"long":["ᎠᏰᏟ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᏰᏟ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"],"short":["CST","CDT"]},"America/El_Salvador":{"long":["ᎠᏰᏟ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᏰᏟ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"],"short":["CST","CDT"]},"America/New_York":{"long":["ᏗᎧᎸᎬ ᏗᏜ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᏗᏜ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"],"short":["EST","EDT"]},"America/Nassau":{"long":["ᏗᎧᎸᎬ ᏗᏜ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᏗᏜ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"],"short":["EST","EDT"]},"America/Toronto":{"long":["ᏗᎧᎸᎬ ᏗᏜ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᏗᏜ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"],"short":["EST","EDT"]},"America/Port-au-Prince":{"long":["ᏗᎧᎸᎬ ᏗᏜ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᏗᏜ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"],"short":["EST","EDT"]},"America/Jamaica":{"long":["ᏗᎧᎸᎬ ᏗᏜ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᏗᏜ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"],"short":["EST","EDT"]},"America/Cayman":{"long":["ᏗᎧᎸᎬ ᏗᏜ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᏗᏜ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"],"short":["EST","EDT"]},"America/Panama":{"long":["ᏗᎧᎸᎬ ᏗᏜ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᏗᏜ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"],"short":["EST","EDT"]},"America/Denver":{"long":["ᎣᏓᎸ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎣᏓᎸ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"],"short":["MST","MDT"]},"America/Edmonton":{"long":["ᎣᏓᎸ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎣᏓᎸ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"],"short":["MST","MDT"]},"America/Hermosillo":{"long":["ᎣᏓᎸ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎣᏓᎸ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"],"short":["MST","MDT"]},"America/Los_Angeles":{"long":["ᏭᏕᎵᎬ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏭᏕᎵᎬ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"],"short":["PST","PDT"]},"America/Vancouver":{"long":["ᏭᏕᎵᎬ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏭᏕᎵᎬ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"],"short":["PST","PDT"]},"America/Tijuana":{"long":["ᏭᏕᎵᎬ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏭᏕᎵᎬ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"],"short":["PST","PDT"]},"Pacific/Apia":{"long":["ᎠᏈᎠ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᏈᎠ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"]},"Asia/Riyadh":{"long":["ᎠᎴᏈᏯ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᎴᏈᏯ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"]},"Asia/Bahrain":{"long":["ᎠᎴᏈᏯ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᎴᏈᏯ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"]},"Asia/Baghdad":{"long":["ᎠᎴᏈᏯ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᎴᏈᏯ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"]},"Asia/Kuwait":{"long":["ᎠᎴᏈᏯ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᎴᏈᏯ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"]},"Asia/Qatar":{"long":["ᎠᎴᏈᏯ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᎴᏈᏯ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"]},"Asia/Aden":{"long":["ᎠᎴᏈᏯ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᎴᏈᏯ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"]},"America/Buenos_Aires":{"long":["ᎠᏥᏂᏘᏂᎠ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᏥᏂᏘᏂᎠ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"America/Argentina/San_Luis":{"long":["ᏭᏕᎵᎬ ᏗᏜ ᎠᏥᏂᏘᏂᎠ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏭᏕᎵᎬ ᏗᏜ ᎠᏥᏂᏘᏂᎠ ᎪᎩ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ"]},"Asia/Ashgabat":{"long":["ᏛᎵᎩᎺᏂᏍᏔᏂ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏛᎵᎩᎺᏂᏍᏔᏂ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"America/Halifax":{"long":["ᏗᎧᎸᎬ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"],"short":["AST","ADT"]},"America/Antigua":{"long":["ᏗᎧᎸᎬ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"],"short":["AST","ADT"]},"America/Anguilla":{"long":["ᏗᎧᎸᎬ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"],"short":["AST","ADT"]},"America/Aruba":{"long":["ᏗᎧᎸᎬ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"],"short":["AST","ADT"]},"America/Barbados":{"long":["ᏗᎧᎸᎬ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"],"short":["AST","ADT"]},"Atlantic/Bermuda":{"long":["ᏗᎧᎸᎬ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"],"short":["AST","ADT"]},"America/Kralendijk":{"long":["ᏗᎧᎸᎬ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"],"short":["AST","ADT"]},"America/Curacao":{"long":["ᏗᎧᎸᎬ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"],"short":["AST","ADT"]},"America/Dominica":{"long":["ᏗᎧᎸᎬ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"],"short":["AST","ADT"]},"America/Grenada":{"long":["ᏗᎧᎸᎬ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"],"short":["AST","ADT"]},"America/Thule":{"long":["ᏗᎧᎸᎬ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"],"short":["AST","ADT"]},"America/Guadeloupe":{"long":["ᏗᎧᎸᎬ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"],"short":["AST","ADT"]},"America/St_Kitts":{"long":["ᏗᎧᎸᎬ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"],"short":["AST","ADT"]},"America/St_Lucia":{"long":["ᏗᎧᎸᎬ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"],"short":["AST","ADT"]},"America/Marigot":{"long":["ᏗᎧᎸᎬ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"],"short":["AST","ADT"]},"America/Martinique":{"long":["ᏗᎧᎸᎬ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"],"short":["AST","ADT"]},"America/Montserrat":{"long":["ᏗᎧᎸᎬ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"],"short":["AST","ADT"]},"America/Puerto_Rico":{"long":["ᏗᎧᎸᎬ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"],"short":["AST","ADT"]},"America/Lower_Princes":{"long":["ᏗᎧᎸᎬ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"],"short":["AST","ADT"]},"America/Port_of_Spain":{"long":["ᏗᎧᎸᎬ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"],"short":["AST","ADT"]},"America/St_Vincent":{"long":["ᏗᎧᎸᎬ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"],"short":["AST","ADT"]},"America/Tortola":{"long":["ᏗᎧᎸᎬ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"],"short":["AST","ADT"]},"America/St_Thomas":{"long":["ᏗᎧᎸᎬ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"],"short":["AST","ADT"]},"Australia/Adelaide":{"long":["ᎠᏰᏟ ᎡᎳᏗᏜ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᏰᏟ ᎡᎳᏗᏜ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"]},"Australia/Eucla":{"long":["ᎠᏰᏟ ᎡᎳᏗᏜ ᏭᏕᎵᎬ ᏗᏜ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᏰᏟ ᎡᎳᏗᏜ ᏭᏕᎵᎬ ᏗᏜ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"]},"Australia/Sydney":{"long":["ᎡᎳᏗᏜ ᏗᎧᎸᎬ ᏗᏜ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎡᎳᏗᏜ ᏗᎧᎸᎬ ᏗᏜ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"]},"Australia/Perth":{"long":["ᎡᎳᏗᏜ ᏭᏕᎵᎬ ᏗᏜ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎡᎳᏗᏜ ᏭᏕᎵᎬ ᏗᏜ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"]},"Atlantic/Azores":{"long":["ᎠᏐᎴᏏ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᏐᎴᏏ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Asia/Thimphu":{"long":["ᏊᏔᏂ ᎠᏟᎢᎵᏒ","ᏊᏔᏂ ᎠᏟᎢᎵᏒ"]},"America/La_Paz":{"long":["ᏉᎵᏫᎠ ᎠᏟᎢᎵᏒ","ᏉᎵᏫᎠ ᎠᏟᎢᎵᏒ"]},"Asia/Kuching":{"long":["ᎹᎴᏏᎢᎠ ᎠᏟᎢᎵᏒ","ᎹᎴᏏᎢᎠ ᎠᏟᎢᎵᏒ"]},"America/Sao_Paulo":{"long":["ᏆᏏᎵᏯ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏆᏏᎵᏯ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Europe/London":{"long":["ᎢᏤ ᎢᏳᏍᏗ ᎠᏟᎢᎵᏒ","ᎢᏤ ᎢᏳᏍᏗ ᎠᏟᎢᎵᏒ"]},"Asia/Brunei":{"long":["ᏊᎾᎢ ᏓᎷᏌᎳᎻ ᎠᏟᎢᎵᏒ","ᏊᎾᎢ ᏓᎷᏌᎳᎻ ᎠᏟᎢᎵᏒ"]},"Atlantic/Cape_Verde":{"long":["ᎢᎬᎾᏕᎾ ᎢᏤᏳᏍᏗ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎢᎬᎾᏕᎾ ᎢᏤᏳᏍᏗ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Pacific/Chatham":{"long":["ᏣᏝᎻ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏣᏝᎻ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"]},"America/Santiago":{"long":["ᏥᎵ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏥᎵ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Asia/Shanghai":{"long":["ᏓᎶᏂᎨᏍᏛ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏓᎶᏂᎨᏍᏛ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"]},"Asia/Choibalsan":{"long":["ᏦᏱᏆᎵᏌᏂ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏦᏱᏆᎵᏌᏂ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Indian/Christmas":{"long":["ᏓᏂᏍᏓᏲᎯᎲ ᎤᎦᏚᏛᎢ ᎠᏟᎢᎵᏒ","ᏓᏂᏍᏓᏲᎯᎲ ᎤᎦᏚᏛᎢ ᎠᏟᎢᎵᏒ"]},"Indian/Cocos":{"long":["ᎪᎪᏍ ᏚᎦᏚᏛᎢ ᎠᏟᎢᎵᏒ","ᎪᎪᏍ ᏚᎦᏚᏛᎢ ᎠᏟᎢᎵᏒ"]},"America/Bogota":{"long":["ᎪᎸᎻᏈᎢᎠ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎪᎸᎻᏈᎢᎠ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Pacific/Rarotonga":{"long":["ᎠᏓᏍᏓᏴᎲᏍᎩ ᏚᎦᏚᏛᎢ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᏓᏍᏓᏴᎲᏍᎩ ᏚᎦᏚᏛᎢ ᎠᏰᏟ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"America/Havana":{"long":["ᎫᏆ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎫᏆ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"]},"Antarctica/Davis":{"long":["ᏕᏫᏏ ᎠᏟᎢᎵᏒ","ᏕᏫᏏ ᎠᏟᎢᎵᏒ"]},"Antarctica/DumontDUrville":{"long":["ᏚᎼᎾᏘ-Ꮧ’ᎤᎵᏫᎵ ᎠᏟᎢᎵᏒ","ᏚᎼᎾᏘ-Ꮧ’ᎤᎵᏫᎵ ᎠᏟᎢᎵᏒ"]},"Asia/Dushanbe":{"long":["ᏔᏥᎩᏍᏕᏂ ᎠᏟᎢᎵᏒ","ᏔᏥᎩᏍᏕᏂ ᎠᏟᎢᎵᏒ"]},"America/Paramaribo":{"long":["ᏒᎵᎾᎻ ᎠᏟᎢᎵᏒ","ᏒᎵᎾᎻ ᎠᏟᎢᎵᏒ"]},"Asia/Dili":{"long":["ᏗᎧᎸᎬ ᏘᎼᎵ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᏘᎼᎵ ᎠᏟᎢᎵᏒ"]},"Pacific/Easter":{"long":["ᏥᏌᏕᎴᎯᏌᏅ ᎤᎦᏚᏛᎢ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏥᏌᏕᎴᎯᏌᏅ ᎤᎦᏚᏛᎢ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"America/Guayaquil":{"long":["ᎡᏆᏙᎵ ᎠᏟᎢᎵᏒ","ᎡᏆᏙᎵ ᎠᏟᎢᎵᏒ"]},"Europe/Paris":{"long":["ᎠᏰᏟ ᏳᎳᏈ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᏰᏟ ᏳᎳᏈ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Europe/Andorra":{"long":["ᎠᏰᏟ ᏳᎳᏈ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᏰᏟ ᏳᎳᏈ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Europe/Tirane":{"long":["ᎠᏰᏟ ᏳᎳᏈ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᏰᏟ ᏳᎳᏈ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Europe/Vienna":{"long":["ᎠᏰᏟ ᏳᎳᏈ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᏰᏟ ᏳᎳᏈ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Europe/Sarajevo":{"long":["ᎠᏰᏟ ᏳᎳᏈ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᏰᏟ ᏳᎳᏈ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Europe/Brussels":{"long":["ᎠᏰᏟ ᏳᎳᏈ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᏰᏟ ᏳᎳᏈ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Europe/Zurich":{"long":["ᎠᏰᏟ ᏳᎳᏈ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᏰᏟ ᏳᎳᏈ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Europe/Prague":{"long":["ᎠᏰᏟ ᏳᎳᏈ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᏰᏟ ᏳᎳᏈ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Europe/Berlin":{"long":["ᎠᏰᏟ ᏳᎳᏈ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᏰᏟ ᏳᎳᏈ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Europe/Copenhagen":{"long":["ᎠᏰᏟ ᏳᎳᏈ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᏰᏟ ᏳᎳᏈ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Europe/Madrid":{"long":["ᎠᏰᏟ ᏳᎳᏈ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᏰᏟ ᏳᎳᏈ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Europe/Gibraltar":{"long":["ᎠᏰᏟ ᏳᎳᏈ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᏰᏟ ᏳᎳᏈ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Europe/Zagreb":{"long":["ᎠᏰᏟ ᏳᎳᏈ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᏰᏟ ᏳᎳᏈ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Europe/Budapest":{"long":["ᎠᏰᏟ ᏳᎳᏈ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᏰᏟ ᏳᎳᏈ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Europe/Rome":{"long":["ᎠᏰᏟ ᏳᎳᏈ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᏰᏟ ᏳᎳᏈ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Europe/Vaduz":{"long":["ᎠᏰᏟ ᏳᎳᏈ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᏰᏟ ᏳᎳᏈ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Europe/Luxembourg":{"long":["ᎠᏰᏟ ᏳᎳᏈ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᏰᏟ ᏳᎳᏈ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Europe/Monaco":{"long":["ᎠᏰᏟ ᏳᎳᏈ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᏰᏟ ᏳᎳᏈ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Europe/Podgorica":{"long":["ᎠᏰᏟ ᏳᎳᏈ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᏰᏟ ᏳᎳᏈ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Europe/Skopje":{"long":["ᎠᏰᏟ ᏳᎳᏈ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᏰᏟ ᏳᎳᏈ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Europe/Malta":{"long":["ᎠᏰᏟ ᏳᎳᏈ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᏰᏟ ᏳᎳᏈ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Europe/Amsterdam":{"long":["ᎠᏰᏟ ᏳᎳᏈ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᏰᏟ ᏳᎳᏈ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Europe/Oslo":{"long":["ᎠᏰᏟ ᏳᎳᏈ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᏰᏟ ᏳᎳᏈ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Europe/Warsaw":{"long":["ᎠᏰᏟ ᏳᎳᏈ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᏰᏟ ᏳᎳᏈ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Europe/Belgrade":{"long":["ᎠᏰᏟ ᏳᎳᏈ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᏰᏟ ᏳᎳᏈ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Europe/Stockholm":{"long":["ᎠᏰᏟ ᏳᎳᏈ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᏰᏟ ᏳᎳᏈ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Europe/Ljubljana":{"long":["ᎠᏰᏟ ᏳᎳᏈ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᏰᏟ ᏳᎳᏈ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Arctic/Longyearbyen":{"long":["ᎠᏰᏟ ᏳᎳᏈ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᏰᏟ ᏳᎳᏈ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Europe/Bratislava":{"long":["ᎠᏰᏟ ᏳᎳᏈ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᏰᏟ ᏳᎳᏈ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Europe/San_Marino":{"long":["ᎠᏰᏟ ᏳᎳᏈ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᏰᏟ ᏳᎳᏈ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Africa/Tunis":{"long":["ᎠᏰᏟ ᏳᎳᏈ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᏰᏟ ᏳᎳᏈ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Europe/Vatican":{"long":["ᎠᏰᏟ ᏳᎳᏈ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᏰᏟ ᏳᎳᏈ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Europe/Bucharest":{"long":["ᏗᎧᎸᎬ ᏗᏜ ᏳᎳᏈ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᏗᏜ ᏳᎳᏈ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Europe/Mariehamn":{"long":["ᏗᎧᎸᎬ ᏗᏜ ᏳᎳᏈ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᏗᏜ ᏳᎳᏈ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Europe/Sofia":{"long":["ᏗᎧᎸᎬ ᏗᏜ ᏳᎳᏈ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᏗᏜ ᏳᎳᏈ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Asia/Nicosia":{"long":["ᏗᎧᎸᎬ ᏗᏜ ᏳᎳᏈ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᏗᏜ ᏳᎳᏈ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Africa/Cairo":{"long":["ᏗᎧᎸᎬ ᏗᏜ ᏳᎳᏈ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᏗᏜ ᏳᎳᏈ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Europe/Helsinki":{"long":["ᏗᎧᎸᎬ ᏗᏜ ᏳᎳᏈ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᏗᏜ ᏳᎳᏈ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Europe/Athens":{"long":["ᏗᎧᎸᎬ ᏗᏜ ᏳᎳᏈ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᏗᏜ ᏳᎳᏈ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Asia/Amman":{"long":["ᏗᎧᎸᎬ ᏗᏜ ᏳᎳᏈ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᏗᏜ ᏳᎳᏈ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Asia/Beirut":{"long":["ᏗᎧᎸᎬ ᏗᏜ ᏳᎳᏈ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᏗᏜ ᏳᎳᏈ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Asia/Damascus":{"long":["ᏗᎧᎸᎬ ᏗᏜ ᏳᎳᏈ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᏗᏜ ᏳᎳᏈ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Europe/Minsk":{"long":["ᏗᎧᎸᎬ ᏳᎳᏈ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᏳᎳᏈ ᎠᏟᎢᎵᏒ"]},"Europe/Kaliningrad":{"long":["ᏗᎧᎸᎬ ᏳᎳᏈ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᏳᎳᏈ ᎠᏟᎢᎵᏒ"]},"Atlantic/Canary":{"long":["ᏭᏕᎵᎬ ᏗᏜ ᏳᎳᏈ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏭᏕᎵᎬ ᏗᏜ ᏳᎳᏈ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Atlantic/Faeroe":{"long":["ᏭᏕᎵᎬ ᏗᏜ ᏳᎳᏈ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏭᏕᎵᎬ ᏗᏜ ᏳᎳᏈ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Atlantic/Stanley":{"long":["ᏩᎩ ᏚᎦᏚᏛᎢ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏩᎩ ᏚᎦᏚᏛᎢ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Pacific/Fiji":{"long":["ᏫᏥ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏫᏥ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"America/Cayenne":{"long":["ᎠᏂᎦᎸ ᏈᏯᎾ ᎠᏟᎢᎵᏒ","ᎠᏂᎦᎸ ᏈᏯᎾ ᎠᏟᎢᎵᏒ"]},"Indian/Kerguelen":{"long":["ᎠᏂᎦᎸᏥ ᎤᎦᏃᏮ & ᎤᏁᏍᏓᎶ ᎠᏟᎢᎵᏒ","ᎠᏂᎦᎸᏥ ᎤᎦᏃᏮ & ᎤᏁᏍᏓᎶ ᎠᏟᎢᎵᏒ"]},"Asia/Bishkek":{"long":["ᎩᎵᏣᎢᏍ ᎠᏟᎢᎵᏒ","ᎩᎵᏣᎢᏍ ᎠᏟᎢᎵᏒ"]},"Pacific/Galapagos":{"long":["ᎡᏆ ᏓᎦᏏ ᎤᎦᏚᏛᎢ ᎠᏟᎢᎵᏒ","ᎡᏆ ᏓᎦᏏ ᎤᎦᏚᏛᎢ ᎠᏟᎢᎵᏒ"]},"Pacific/Gambier":{"long":["ᎦᎻᏇᎵ ᎠᏟᎢᎵᏒ","ᎦᎻᏇᎵ ᎠᏟᎢᎵᏒ"]},"Pacific/Tarawa":{"long":["ᎩᎵᏇᏘ ᏚᎦᏚᏛᎢ ᎠᏟᎢᎵᏒ","ᎩᎵᏇᏘ ᏚᎦᏚᏛᎢ ᎠᏟᎢᎵᏒ"]},"Atlantic/Reykjavik":{"long":["ᎢᏤ ᎢᏳᏍᏗ ᎠᏟᎢᎵᏒ","ᎢᏤ ᎢᏳᏍᏗ ᎠᏟᎢᎵᏒ"]},"Africa/Ouagadougou":{"long":["ᎢᏤ ᎢᏳᏍᏗ ᎠᏟᎢᎵᏒ","ᎢᏤ ᎢᏳᏍᏗ ᎠᏟᎢᎵᏒ"]},"Africa/Abidjan":{"long":["ᎢᏤ ᎢᏳᏍᏗ ᎠᏟᎢᎵᏒ","ᎢᏤ ᎢᏳᏍᏗ ᎠᏟᎢᎵᏒ"]},"Africa/Accra":{"long":["ᎢᏤ ᎢᏳᏍᏗ ᎠᏟᎢᎵᏒ","ᎢᏤ ᎢᏳᏍᏗ ᎠᏟᎢᎵᏒ"]},"Africa/Banjul":{"long":["ᎢᏤ ᎢᏳᏍᏗ ᎠᏟᎢᎵᏒ","ᎢᏤ ᎢᏳᏍᏗ ᎠᏟᎢᎵᏒ"]},"Africa/Conakry":{"long":["ᎢᏤ ᎢᏳᏍᏗ ᎠᏟᎢᎵᏒ","ᎢᏤ ᎢᏳᏍᏗ ᎠᏟᎢᎵᏒ"]},"Africa/Bamako":{"long":["ᎢᏤ ᎢᏳᏍᏗ ᎠᏟᎢᎵᏒ","ᎢᏤ ᎢᏳᏍᏗ ᎠᏟᎢᎵᏒ"]},"Africa/Nouakchott":{"long":["ᎢᏤ ᎢᏳᏍᏗ ᎠᏟᎢᎵᏒ","ᎢᏤ ᎢᏳᏍᏗ ᎠᏟᎢᎵᏒ"]},"Atlantic/St_Helena":{"long":["ᎢᏤ ᎢᏳᏍᏗ ᎠᏟᎢᎵᏒ","ᎢᏤ ᎢᏳᏍᏗ ᎠᏟᎢᎵᏒ"]},"Africa/Freetown":{"long":["ᎢᏤ ᎢᏳᏍᏗ ᎠᏟᎢᎵᏒ","ᎢᏤ ᎢᏳᏍᏗ ᎠᏟᎢᎵᏒ"]},"Africa/Dakar":{"long":["ᎢᏤ ᎢᏳᏍᏗ ᎠᏟᎢᎵᏒ","ᎢᏤ ᎢᏳᏍᏗ ᎠᏟᎢᎵᏒ"]},"Africa/Lome":{"long":["ᎢᏤ ᎢᏳᏍᏗ ᎠᏟᎢᎵᏒ","ᎢᏤ ᎢᏳᏍᏗ ᎠᏟᎢᎵᏒ"]},"America/Scoresbysund":{"long":["ᏗᎧᎸᎬ ᎢᏤᏍᏛᏱ ᎠᏟᎶᏍᏗ ᎠᎵᎢᎵᏒ","ᏗᎧᎸᎬ ᎢᏤᏍᏛᏱ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"America/Godthab":{"long":["ᏭᏕᎵᎬ ᎢᏤᏍᏛᏱ ᎠᏟᎶᏍᏗ ᎠᎵᎢᎵᏒ","ᏭᏕᎵᎬ ᎢᏤᏍᏛᏱ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Asia/Dubai":{"long":["ᎡᏉᏄᎸᏗ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎡᏉᏄᎸᏗ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ"]},"Asia/Muscat":{"long":["ᎡᏉᏄᎸᏗ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎡᏉᏄᎸᏗ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ"]},"America/Guyana":{"long":["ᎦᏯᎾ ᎠᏟᎢᎵᏒ","ᎦᏯᎾ ᎠᏟᎢᎵᏒ"]},"Pacific/Honolulu":{"long":["ᎭᏩᏱ-ᎠᎵᏳᏏᎠᏂ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎭᏩᏱ-ᎠᎵᏳᏏᎠᏂ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"],"short":["HAST","HADT"]},"Asia/Hong_Kong":{"long":["ᎰᏂᎩ ᎪᏂᎩ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎰᏂᎩ ᎪᏂᎩ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Asia/Hovd":{"long":["ᎰᏩᏗ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎰᏩᏗ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Asia/Calcutta":{"long":["ᎢᏂᏗᎢᎠ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎢᏂᏗᎢᎠ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ"]},"Indian/Chagos":{"long":["ᎠᏂᏴᏫᏯ ᎠᎺᏉᎯ ᎠᏟᎢᎵᏒ","ᎠᏂᏴᏫᏯ ᎠᎺᏉᎯ ᎠᏟᎢᎵᏒ"]},"Asia/Bangkok":{"long":["ᎢᏂᏙᏓᎶᏂᎨᏍᏛ ᎠᏟᎢᎵᏒ","ᎢᏂᏙᏓᎶᏂᎨᏍᏛ ᎠᏟᎢᎵᏒ"]},"Asia/Phnom_Penh":{"long":["ᎢᏂᏙᏓᎶᏂᎨᏍᏛ ᎠᏟᎢᎵᏒ","ᎢᏂᏙᏓᎶᏂᎨᏍᏛ ᎠᏟᎢᎵᏒ"]},"Asia/Vientiane":{"long":["ᎢᏂᏙᏓᎶᏂᎨᏍᏛ ᎠᏟᎢᎵᏒ","ᎢᏂᏙᏓᎶᏂᎨᏍᏛ ᎠᏟᎢᎵᏒ"]},"Asia/Makassar":{"long":["ᎠᏰᏟ ᎢᏂᏙᏂᏍᏯ ᎠᏟᎢᎵᏒ","ᎠᏰᏟ ᎢᏂᏙᏂᏍᏯ ᎠᏟᎢᎵᏒ"]},"Asia/Jayapura":{"long":["ᏗᎧᎸᎬ ᏗᏜ ᎢᏂᏙᏂᏍᏯ ᎠᏟᎢᎵᏒ","ᏗᎧᎸᎬ ᏗᏜ ᎢᏂᏙᏂᏍᏯ ᎠᏟᎢᎵᏒ"]},"Asia/Jakarta":{"long":["ᏭᏕᎵᎬ ᏗᏜ ᎢᏂᏙᏂᏍᏯ ᎠᏟᎢᎵᏒ","ᏭᏕᎵᎬ ᏗᏜ ᎢᏂᏙᏂᏍᏯ ᎠᏟᎢᎵᏒ"]},"Asia/Tehran":{"long":["ᎢᎳᏂ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎢᎳᏂ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"]},"Asia/Irkutsk":{"long":["ᎢᎫᏥᎧ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎢᎫᏥᎧ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Asia/Jerusalem":{"long":["ᎢᏏᎵᏱ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎢᏏᎵᏱ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒᎩ"]},"Asia/Tokyo":{"long":["ᏣᏩᏂᏏ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏣᏩᏂᏏ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"]},"Asia/Karachi":{"long":["ᏆᎩᏍᏖᏂ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏆᎩᏍᏖᏂ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Asia/Seoul":{"long":["ᎪᎵᎠᏂ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎪᎵᎠᏂ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"]},"Pacific/Kosrae":{"long":["ᎪᏍᎴ ᎠᏟᎢᎵᏒ","ᎪᏍᎴ ᎠᏟᎢᎵᏒ"]},"Asia/Krasnoyarsk":{"long":["ᏝᏍᏃᏯᏍᎧ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏝᏍᏃᏯᏍᎧ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Pacific/Kiritimati":{"long":["ᎠᏍᏓᏅᏅ ᏚᎦᏚᏛᎢ ᎠᏟᎢᎵᏒ","ᎠᏍᏓᏅᏅ ᏚᎦᏚᏛᎢ ᎠᏟᎢᎵᏒ"]},"Australia/Lord_Howe":{"long":["ᎤᎬᏫᏳᎯ ᎭᏫ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎤᎬᏫᏳᎯ ᎭᏫ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"]},"Antarctica/Macquarie":{"long":["ᎹᏇᎵ ᎤᎦᏚᏛᎢ ᎠᏟᎢᎵᏒ","ᎹᏇᎵ ᎤᎦᏚᏛᎢ ᎠᏟᎢᎵᏒ"]},"Asia/Magadan":{"long":["ᎹᎦᏓᏂ ᎠᏟᎢᎵᏒ ᎠᏟᎢᎵᏒ","ᎹᎦᏓᏂ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Indian/Maldives":{"long":["ᎹᎵᏗᏫᏍ ᎠᏟᎢᎵᏒ","ᎹᎵᏗᏫᏍ ᎠᏟᎢᎵᏒ"]},"Pacific/Marquesas":{"long":["ᎹᎵᎨᏌᏏ ᎠᏟᎢᎵᏒ","ᎹᎵᎨᏌᏏ ᎠᏟᎢᎵᏒ"]},"Pacific/Majuro":{"long":["ᎹᏌᎵ ᏚᎦᏚᏛᎢ ᎠᏟᎢᎵᏒ","ᎹᏌᎵ ᏚᎦᏚᏛᎢ ᎠᏟᎢᎵᏒ"]},"Indian/Mauritius":{"long":["ᎼᎵᏏᎥᏍ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎼᎵᏏᎥᏍ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Antarctica/Mawson":{"long":["ᎹᏌᏂ ᎠᏟᎢᎵᏒ","ᎹᏌᏂ ᎠᏟᎢᎵᏒ"]},"America/Santa_Isabel":{"long":["ᏧᏴᏢ ᏭᏕᎵᎬ ᎠᏂᏍᏆᏂ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏧᏴᏢ ᏭᏕᎵᎬ ᎠᏂᏍᏆᏂ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"]},"America/Mazatlan":{"long":["ᎠᏂᏍᏆᏂ ᏭᏕᎵᎬ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᏂᏍᏆᏂ ᏭᏕᎵᎬ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"]},"Asia/Ulaanbaatar":{"long":["ᎤᎳᏂ ᏆᏙᎸ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎤᎳᏂ ᏆᏙᎸ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Europe/Moscow":{"long":["ᎹᏍᎦᏫ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎹᏍᎦᏫ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Asia/Rangoon":{"long":["ᎹᏯᎹᎵ ᎠᏟᎢᎵᏒ","ᎹᏯᎹᎵ ᎠᏟᎢᎵᏒ"]},"Pacific/Nauru":{"long":["ᎾᎷ ᎠᏟᎢᎵᏒ","ᎾᎷ ᎠᏟᎢᎵᏒ"]},"Asia/Katmandu":{"long":["ᏁᏆᎵ ᎠᏟᎢᎵᏒ","ᏁᏆᎵ ᎠᏟᎢᎵᏒ"]},"Pacific/Noumea":{"long":["ᎢᏤ ᎧᎵᏙᏂᎠᏂ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎢᏤ ᎧᎵᏙᏂᎠᏂ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Pacific/Auckland":{"long":["ᎢᏤ ᏏᎢᎴᏂᏗ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎢᏤ ᏏᎢᎴᏂᏗ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"]},"Antarctica/McMurdo":{"long":["ᎢᏤ ᏏᎢᎴᏂᏗ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎢᏤ ᏏᎢᎴᏂᏗ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"]},"America/St_Johns":{"long":["ᎢᏤᎤᏂᏩᏛᏓᎦᏙᎯ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎢᏤᎤᏂᏩᏛᏓᎦᏙᎯ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"]},"Pacific/Niue":{"long":["ᏂᏳ ᎠᏟᎢᎵᏒ","ᏂᏳ ᎠᏟᎢᎵᏒ"]},"Pacific/Norfolk":{"long":["ᏃᎵᏬᎵᎩ ᎤᎦᏚᏛᎢ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏃᎵᏬᎵᎩ ᎤᎦᏚᏛᎢ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"America/Noronha":{"long":["ᏪᎾᏅᏙ Ꮥ ᏃᎶᎾᎭ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏪᎾᏅᏙ Ꮥ ᏃᎶᎾᎭ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Asia/Novosibirsk":{"long":["ᏃᏬᏏᏈᏍᎧ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏃᏬᏏᏈᏍᎧ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Asia/Omsk":{"long":["ᎣᎻᏍᎧ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎣᎻᏍᎧ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Pacific/Palau":{"long":["ᏆᎷ ᎠᏟᎢᎵᏒ","ᏆᎷ ᎠᏟᎢᎵᏒ"]},"Pacific/Port_Moresby":{"long":["ᏆᏇ ᎢᏤ ᎩᎢᏂ ᎠᏟᎢᎵᏒ","ᏆᏇ ᎢᏤ ᎩᎢᏂ ᎠᏟᎢᎵᏒ"]},"America/Asuncion":{"long":["ᏆᎵᏇ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏆᎵᏇ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"America/Lima":{"long":["ᏇᎷ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏇᎷ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Asia/Manila":{"long":["ᎠᏂᏈᎵᎩᏃ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎠᏂᏈᎵᎩᏃ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Pacific/Enderbury":{"long":["ᏧᎴᎯᏌᏅᎯ ᏚᎦᏚᏛᎢ ᎠᏟᎢᎵᏒ","ᏧᎴᎯᏌᏅᎯ ᏚᎦᏚᏛᎢ ᎠᏟᎢᎵᏒ"]},"America/Miquelon":{"long":["ᎤᏓᏅᏘ ᏈᏰ & ᎻᏇᎶᏂ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎤᏓᏅᏘ ᏈᏰ & ᎻᏇᎶᏂ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"]},"Pacific/Pitcairn":{"long":["ᏈᎧᎵᏂ ᎠᏟᎢᎵᏒ","ᏈᎧᎵᏂ ᎠᏟᎢᎵᏒ"]},"Pacific/Ponape":{"long":["ᏉᎾᏇ ᎠᏟᎢᎵᏒ","ᏉᎾᏇ ᎠᏟᎢᎵᏒ"]},"Asia/Pyongyang":{"long":["ᏈᏯᏂᎩᏰᏂᎩ ᎠᏟᎢᎵᏒ","ᏈᏯᏂᎩᏰᏂᎩ ᎠᏟᎢᎵᏒ"]},"Indian/Reunion":{"long":["ᎴᏳᏂᎠᏂ ᎠᏟᎢᎵᏒ","ᎴᏳᏂᎠᏂ ᎠᏟᎢᎵᏒ"]},"Antarctica/Rothera":{"long":["ᎳᏞᎳ ᎠᏟᎢᎵᏒ","ᎳᏞᎳ ᎠᏟᎢᎵᏒ"]},"Asia/Sakhalin":{"long":["ᏌᎧᎵᏂ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏌᎧᎵᏂ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Pacific/Pago_Pago":{"long":["ᏌᎼᎠ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏌᎼᎠ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"]},"Indian/Mahe":{"long":["ᏎᏤᎴᏏ ᎠᏟᎢᎵᏒ","ᏎᏤᎴᏏ ᎠᏟᎢᎵᏒ"]},"Asia/Singapore":{"long":["ᏏᏂᎦᏉᎵ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏏᏂᎦᏉᎵ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ"]},"Pacific/Guadalcanal":{"long":["ᏐᎶᎹᏂ ᏚᎦᏚᏛᎢ ᎠᏟᎢᎵᏒ","ᏐᎶᎹᏂ ᏚᎦᏚᏛᎢ ᎠᏟᎢᎵᏒ"]},"Atlantic/South_Georgia":{"long":["ᏧᎦᎾᏮ ᏣᎠᏥᎢ ᎠᏟᎢᎵᏒ","ᏧᎦᎾᏮ ᏣᎠᏥᎢ ᎠᏟᎢᎵᏒ"]},"Asia/Yekaterinburg":{"long":["ᏰᎧᏖᎵᏂᏊᎦ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏰᎧᏖᎵᏂᏊᎦ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Antarctica/Syowa":{"long":["ᏏᏲᏩ ᎠᏟᎢᎵᏒ","ᏏᏲᏩ ᎠᏟᎢᎵᏒ"]},"Pacific/Tahiti":{"long":["ᏔᎯᏘ ᎠᏟᎢᎵᏒ","ᏔᎯᏘ ᎠᏟᎢᎵᏒ"]},"Asia/Taipei":{"long":["ᏔᏱᏇ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏔᏱᏇ ᎪᎯ ᎢᎦ ᎠᏟᎢᎵᏒ"]},"Asia/Tashkent":{"long":["ᎤᏍᏇᎩᏍᏖᏂ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᎤᏍᏇᎩᏍᏖᏂ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Pacific/Fakaofo":{"long":["ᏙᎨᎳᎤ ᎠᏟᎢᎵᏒ","ᏙᎨᎳᎤ ᎠᏟᎢᎵᏒ"]},"Pacific/Tongatapu":{"long":["ᏙᎾᎦ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏙᎾᎦ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Pacific/Truk":{"long":["ᏧᎩ ᎠᏟᎢᎵᏒ","ᏧᎩ ᎠᏟᎢᎵᏒ"]},"Pacific/Funafuti":{"long":["ᏚᏩᎷ ᎠᏟᎢᎵᏒ","ᏚᏩᎷ ᎠᏟᎢᎵᏒ"]},"America/Montevideo":{"long":["ᏳᎷᏇ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏳᎷᏇ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Pacific/Efate":{"long":["ᏩᏄᏩᏚ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏩᏄᏩᏚ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"America/Caracas":{"long":["ᏪᏁᏑᏪᎳ ᎠᏟᎢᎵᏒ","ᏪᏁᏑᏪᎳ ᎠᏟᎢᎵᏒ"]},"Asia/Vladivostok":{"long":["ᏭᎳᏗᏬᏍᏙᎩ ᎠᏟᎢᎵᏒ ᎠᏟᎢᎵᏒ","ᏭᎳᏗᏬᏍᏙᎩ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Europe/Volgograd":{"long":["ᏬᎶᎪᏝᏗ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏬᎶᎪᏝᏗ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"Antarctica/Vostok":{"long":["ᏬᏍᏙᎧ ᎠᏟᎢᎵᏒ","ᏬᏍᏙᎧ ᎠᏟᎢᎵᏒ"]},"Pacific/Wake":{"long":["ᎤᏰᏨ ᎤᎦᏚᏛᎢ ᎠᏟᎢᎵᏒ","ᎤᏰᏨ ᎤᎦᏚᏛᎢ ᎠᏟᎢᎵᏒ"]},"Pacific/Wallis":{"long":["ᏩᎵᏍ ᎠᎴ ᏊᏚᎾ ᎠᏟᎢᎵᏒ","ᏩᎵᏍ ᎠᎴ ᏊᏚᎾ ᎠᏟᎢᎵᏒ"]},"Asia/Yakutsk":{"long":["ᏯᎫᏥᎧ ᎠᏟᎶᏍᏗ ᎠᏟᎢᎵᏒ","ᏯᎫᏥᎧ ᎪᎩ ᎠᏟᎢᎵᏒ"]},"UTC":{"long":["ᎢᎩᏠᏱ ᏂᎦᏓ ᎠᏟᎢᎵᏒ","ᎢᎩᏠᏱ ᏂᎦᏓ ᎠᏟᎢᎵᏒ"],"short":["UTC","UTC"]}},"gmtFormat":"GMT{0}","hourFormat":"+HH:mm;-HH:mm","dateFormat":{"full":"EEEE, MMMM d, y","long":"MMMM d, y","medium":"MMM d, y","short":"M/d/yy"},"timeFormat":{"full":"h:mm:ss a zzzz","long":"h:mm:ss a z","medium":"h:mm:ss a","short":"h:mm a"},"dateTimeFormat":{"full":"{1} ᎤᎾᎢ {0}","long":"{1} ᎤᎾᎢ {0}","medium":"{1}, {0}","short":"{1}, {0}"},"formats":{"gregory":{"Bh":"h B","Bhm":"h:mm B","Bhms":"h:mm:ss B","d":"d","E":"ccc","EBhm":"E h:mm B","EBhms":"E h:mm:ss B","Ed":"d E","Ehm":"E h:mm a","EHm":"E HH:mm","Ehms":"E h:mm:ss a","EHms":"E HH:mm:ss","Gy":"y G","GyMMM":"MMM y G","GyMMMd":"MMM d, y G","GyMMMEd":"E, MMM d, y G","h":"h a","H":"HH","hm":"h:mm a","Hm":"HH:mm","hms":"h:mm:ss a","Hms":"HH:mm:ss","hmsv":"h:mm:ss a v","Hmsv":"HH:mm:ss v","hmv":"h:mm a v","Hmv":"HH:mm v","M":"L","Md":"M/d","MEd":"E, M/d","MMM":"LLL","MMMd":"MMM d","MMMEd":"E, MMM d","MMMMd":"MMMM d","ms":"mm:ss","y":"y","yM":"M/y","yMd":"M/d/y","yMEd":"E, M/d/y","yMMM":"MMM y","yMMMd":"MMM d, y","yMMMEd":"E, MMM d, y","yMMMM":"MMMM y","EEEE, MMMM d, y":"EEEE, MMMM d, y","MMMM d, y":"MMMM d, y","MMM d, y":"MMM d, y","M/d/yy":"M/d/yy","h:mm:ss a zzzz":"h:mm:ss a zzzz","h:mm:ss a z":"h:mm:ss a z","h:mm:ss a":"h:mm:ss a","h:mm a":"h:mm a","EEEE, MMMM d, y ᎤᎾᎢ h:mm:ss a zzzz":"EEEE, MMMM d, y ᎤᎾᎢ h:mm:ss a zzzz","MMMM d, y ᎤᎾᎢ h:mm:ss a zzzz":"MMMM d, y ᎤᎾᎢ h:mm:ss a zzzz","MMM d, y, h:mm:ss a zzzz":"MMM d, y, h:mm:ss a zzzz","M/d/yy, h:mm:ss a zzzz":"M/d/yy, h:mm:ss a zzzz","d, h:mm:ss a zzzz":"d, h:mm:ss a zzzz","E, h:mm:ss a zzzz":"ccc, h:mm:ss a zzzz","Ed, h:mm:ss a zzzz":"d E, h:mm:ss a zzzz","Gy, h:mm:ss a zzzz":"y G, h:mm:ss a zzzz","GyMMM, h:mm:ss a zzzz":"MMM y G, h:mm:ss a zzzz","GyMMMd, h:mm:ss a zzzz":"MMM d, y G, h:mm:ss a zzzz","GyMMMEd, h:mm:ss a zzzz":"E, MMM d, y G, h:mm:ss a zzzz","M, h:mm:ss a zzzz":"L, h:mm:ss a zzzz","Md, h:mm:ss a zzzz":"M/d, h:mm:ss a zzzz","MEd, h:mm:ss a zzzz":"E, M/d, h:mm:ss a zzzz","MMM, h:mm:ss a zzzz":"LLL, h:mm:ss a zzzz","MMMd, h:mm:ss a zzzz":"MMM d, h:mm:ss a zzzz","MMMEd, h:mm:ss a zzzz":"E, MMM d, h:mm:ss a zzzz","MMMMd ᎤᎾᎢ h:mm:ss a zzzz":"MMMM d ᎤᎾᎢ h:mm:ss a zzzz","y, h:mm:ss a zzzz":"y, h:mm:ss a zzzz","yM, h:mm:ss a zzzz":"M/y, h:mm:ss a zzzz","yMd, h:mm:ss a zzzz":"M/d/y, h:mm:ss a zzzz","yMEd, h:mm:ss a zzzz":"E, M/d/y, h:mm:ss a zzzz","yMMM, h:mm:ss a zzzz":"MMM y, h:mm:ss a zzzz","yMMMd, h:mm:ss a zzzz":"MMM d, y, h:mm:ss a zzzz","yMMMEd, h:mm:ss a zzzz":"E, MMM d, y, h:mm:ss a zzzz","yMMMM ᎤᎾᎢ h:mm:ss a zzzz":"MMMM y ᎤᎾᎢ h:mm:ss a zzzz","EEEE, MMMM d, y ᎤᎾᎢ h:mm:ss a z":"EEEE, MMMM d, y ᎤᎾᎢ h:mm:ss a z","MMMM d, y ᎤᎾᎢ h:mm:ss a z":"MMMM d, y ᎤᎾᎢ h:mm:ss a z","MMM d, y, h:mm:ss a z":"MMM d, y, h:mm:ss a z","M/d/yy, h:mm:ss a z":"M/d/yy, h:mm:ss a z","d, h:mm:ss a z":"d, h:mm:ss a z","E, h:mm:ss a z":"ccc, h:mm:ss a z","Ed, h:mm:ss a z":"d E, h:mm:ss a z","Gy, h:mm:ss a z":"y G, h:mm:ss a z","GyMMM, h:mm:ss a z":"MMM y G, h:mm:ss a z","GyMMMd, h:mm:ss a z":"MMM d, y G, h:mm:ss a z","GyMMMEd, h:mm:ss a z":"E, MMM d, y G, h:mm:ss a z","M, h:mm:ss a z":"L, h:mm:ss a z","Md, h:mm:ss a z":"M/d, h:mm:ss a z","MEd, h:mm:ss a z":"E, M/d, h:mm:ss a z","MMM, h:mm:ss a z":"LLL, h:mm:ss a z","MMMd, h:mm:ss a z":"MMM d, h:mm:ss a z","MMMEd, h:mm:ss a z":"E, MMM d, h:mm:ss a z","MMMMd ᎤᎾᎢ h:mm:ss a z":"MMMM d ᎤᎾᎢ h:mm:ss a z","y, h:mm:ss a z":"y, h:mm:ss a z","yM, h:mm:ss a z":"M/y, h:mm:ss a z","yMd, h:mm:ss a z":"M/d/y, h:mm:ss a z","yMEd, h:mm:ss a z":"E, M/d/y, h:mm:ss a z","yMMM, h:mm:ss a z":"MMM y, h:mm:ss a z","yMMMd, h:mm:ss a z":"MMM d, y, h:mm:ss a z","yMMMEd, h:mm:ss a z":"E, MMM d, y, h:mm:ss a z","yMMMM ᎤᎾᎢ h:mm:ss a z":"MMMM y ᎤᎾᎢ h:mm:ss a z","EEEE, MMMM d, y ᎤᎾᎢ h:mm:ss a":"EEEE, MMMM d, y ᎤᎾᎢ h:mm:ss a","MMMM d, y ᎤᎾᎢ h:mm:ss a":"MMMM d, y ᎤᎾᎢ h:mm:ss a","MMM d, y, h:mm:ss a":"MMM d, y, h:mm:ss a","M/d/yy, h:mm:ss a":"M/d/yy, h:mm:ss a","d, h:mm:ss a":"d, h:mm:ss a","E, h:mm:ss a":"ccc, h:mm:ss a","Ed, h:mm:ss a":"d E, h:mm:ss a","Gy, h:mm:ss a":"y G, h:mm:ss a","GyMMM, h:mm:ss a":"MMM y G, h:mm:ss a","GyMMMd, h:mm:ss a":"MMM d, y G, h:mm:ss a","GyMMMEd, h:mm:ss a":"E, MMM d, y G, h:mm:ss a","M, h:mm:ss a":"L, h:mm:ss a","Md, h:mm:ss a":"M/d, h:mm:ss a","MEd, h:mm:ss a":"E, M/d, h:mm:ss a","MMM, h:mm:ss a":"LLL, h:mm:ss a","MMMd, h:mm:ss a":"MMM d, h:mm:ss a","MMMEd, h:mm:ss a":"E, MMM d, h:mm:ss a","MMMMd ᎤᎾᎢ h:mm:ss a":"MMMM d ᎤᎾᎢ h:mm:ss a","y, h:mm:ss a":"y, h:mm:ss a","yM, h:mm:ss a":"M/y, h:mm:ss a","yMd, h:mm:ss a":"M/d/y, h:mm:ss a","yMEd, h:mm:ss a":"E, M/d/y, h:mm:ss a","yMMM, h:mm:ss a":"MMM y, h:mm:ss a","yMMMd, h:mm:ss a":"MMM d, y, h:mm:ss a","yMMMEd, h:mm:ss a":"E, MMM d, y, h:mm:ss a","yMMMM ᎤᎾᎢ h:mm:ss a":"MMMM y ᎤᎾᎢ h:mm:ss a","EEEE, MMMM d, y ᎤᎾᎢ h:mm a":"EEEE, MMMM d, y ᎤᎾᎢ h:mm a","MMMM d, y ᎤᎾᎢ h:mm a":"MMMM d, y ᎤᎾᎢ h:mm a","MMM d, y, h:mm a":"MMM d, y, h:mm a","M/d/yy, h:mm a":"M/d/yy, h:mm a","d, h:mm a":"d, h:mm a","E, h:mm a":"ccc, h:mm a","Ed, h:mm a":"d E, h:mm a","Gy, h:mm a":"y G, h:mm a","GyMMM, h:mm a":"MMM y G, h:mm a","GyMMMd, h:mm a":"MMM d, y G, h:mm a","GyMMMEd, h:mm a":"E, MMM d, y G, h:mm a","M, h:mm a":"L, h:mm a","Md, h:mm a":"M/d, h:mm a","MEd, h:mm a":"E, M/d, h:mm a","MMM, h:mm a":"LLL, h:mm a","MMMd, h:mm a":"MMM d, h:mm a","MMMEd, h:mm a":"E, MMM d, h:mm a","MMMMd ᎤᎾᎢ h:mm a":"MMMM d ᎤᎾᎢ h:mm a","y, h:mm a":"y, h:mm a","yM, h:mm a":"M/y, h:mm a","yMd, h:mm a":"M/d/y, h:mm a","yMEd, h:mm a":"E, M/d/y, h:mm a","yMMM, h:mm a":"MMM y, h:mm a","yMMMd, h:mm a":"MMM d, y, h:mm a","yMMMEd, h:mm a":"E, MMM d, y, h:mm a","yMMMM ᎤᎾᎢ h:mm a":"MMMM y ᎤᎾᎢ h:mm a","EEEE, MMMM d, y ᎤᎾᎢ Bh":"EEEE, MMMM d, y ᎤᎾᎢ h B","MMMM d, y ᎤᎾᎢ Bh":"MMMM d, y ᎤᎾᎢ h B","MMM d, y, Bh":"MMM d, y, h B","M/d/yy, Bh":"M/d/yy, h B","d, Bh":"d, h B","E, Bh":"ccc, h B","Ed, Bh":"d E, h B","Gy, Bh":"y G, h B","GyMMM, Bh":"MMM y G, h B","GyMMMd, Bh":"MMM d, y G, h B","GyMMMEd, Bh":"E, MMM d, y G, h B","M, Bh":"L, h B","Md, Bh":"M/d, h B","MEd, Bh":"E, M/d, h B","MMM, Bh":"LLL, h B","MMMd, Bh":"MMM d, h B","MMMEd, Bh":"E, MMM d, h B","MMMMd ᎤᎾᎢ Bh":"MMMM d ᎤᎾᎢ h B","y, Bh":"y, h B","yM, Bh":"M/y, h B","yMd, Bh":"M/d/y, h B","yMEd, Bh":"E, M/d/y, h B","yMMM, Bh":"MMM y, h B","yMMMd, Bh":"MMM d, y, h B","yMMMEd, Bh":"E, MMM d, y, h B","yMMMM ᎤᎾᎢ Bh":"MMMM y ᎤᎾᎢ h B","EEEE, MMMM d, y ᎤᎾᎢ Bhm":"EEEE, MMMM d, y ᎤᎾᎢ h:mm B","MMMM d, y ᎤᎾᎢ Bhm":"MMMM d, y ᎤᎾᎢ h:mm B","MMM d, y, Bhm":"MMM d, y, h:mm B","M/d/yy, Bhm":"M/d/yy, h:mm B","d, Bhm":"d, h:mm B","E, Bhm":"ccc, h:mm B","Ed, Bhm":"d E, h:mm B","Gy, Bhm":"y G, h:mm B","GyMMM, Bhm":"MMM y G, h:mm B","GyMMMd, Bhm":"MMM d, y G, h:mm B","GyMMMEd, Bhm":"E, MMM d, y G, h:mm B","M, Bhm":"L, h:mm B","Md, Bhm":"M/d, h:mm B","MEd, Bhm":"E, M/d, h:mm B","MMM, Bhm":"LLL, h:mm B","MMMd, Bhm":"MMM d, h:mm B","MMMEd, Bhm":"E, MMM d, h:mm B","MMMMd ᎤᎾᎢ Bhm":"MMMM d ᎤᎾᎢ h:mm B","y, Bhm":"y, h:mm B","yM, Bhm":"M/y, h:mm B","yMd, Bhm":"M/d/y, h:mm B","yMEd, Bhm":"E, M/d/y, h:mm B","yMMM, Bhm":"MMM y, h:mm B","yMMMd, Bhm":"MMM d, y, h:mm B","yMMMEd, Bhm":"E, MMM d, y, h:mm B","yMMMM ᎤᎾᎢ Bhm":"MMMM y ᎤᎾᎢ h:mm B","EEEE, MMMM d, y ᎤᎾᎢ Bhms":"EEEE, MMMM d, y ᎤᎾᎢ h:mm:ss B","MMMM d, y ᎤᎾᎢ Bhms":"MMMM d, y ᎤᎾᎢ h:mm:ss B","MMM d, y, Bhms":"MMM d, y, h:mm:ss B","M/d/yy, Bhms":"M/d/yy, h:mm:ss B","d, Bhms":"d, h:mm:ss B","E, Bhms":"ccc, h:mm:ss B","Ed, Bhms":"d E, h:mm:ss B","Gy, Bhms":"y G, h:mm:ss B","GyMMM, Bhms":"MMM y G, h:mm:ss B","GyMMMd, Bhms":"MMM d, y G, h:mm:ss B","GyMMMEd, Bhms":"E, MMM d, y G, h:mm:ss B","M, Bhms":"L, h:mm:ss B","Md, Bhms":"M/d, h:mm:ss B","MEd, Bhms":"E, M/d, h:mm:ss B","MMM, Bhms":"LLL, h:mm:ss B","MMMd, Bhms":"MMM d, h:mm:ss B","MMMEd, Bhms":"E, MMM d, h:mm:ss B","MMMMd ᎤᎾᎢ Bhms":"MMMM d ᎤᎾᎢ h:mm:ss B","y, Bhms":"y, h:mm:ss B","yM, Bhms":"M/y, h:mm:ss B","yMd, Bhms":"M/d/y, h:mm:ss B","yMEd, Bhms":"E, M/d/y, h:mm:ss B","yMMM, Bhms":"MMM y, h:mm:ss B","yMMMd, Bhms":"MMM d, y, h:mm:ss B","yMMMEd, Bhms":"E, MMM d, y, h:mm:ss B","yMMMM ᎤᎾᎢ Bhms":"MMMM y ᎤᎾᎢ h:mm:ss B","EEEE, MMMM d, y ᎤᎾᎢ h":"EEEE, MMMM d, y ᎤᎾᎢ h a","MMMM d, y ᎤᎾᎢ h":"MMMM d, y ᎤᎾᎢ h a","MMM d, y, h":"MMM d, y, h a","M/d/yy, h":"M/d/yy, h a","d, h":"d, h a","E, h":"ccc, h a","Ed, h":"d E, h a","Gy, h":"y G, h a","GyMMM, h":"MMM y G, h a","GyMMMd, h":"MMM d, y G, h a","GyMMMEd, h":"E, MMM d, y G, h a","M, h":"L, h a","Md, h":"M/d, h a","MEd, h":"E, M/d, h a","MMM, h":"LLL, h a","MMMd, h":"MMM d, h a","MMMEd, h":"E, MMM d, h a","MMMMd ᎤᎾᎢ h":"MMMM d ᎤᎾᎢ h a","y, h":"y, h a","yM, h":"M/y, h a","yMd, h":"M/d/y, h a","yMEd, h":"E, M/d/y, h a","yMMM, h":"MMM y, h a","yMMMd, h":"MMM d, y, h a","yMMMEd, h":"E, MMM d, y, h a","yMMMM ᎤᎾᎢ h":"MMMM y ᎤᎾᎢ h a","EEEE, MMMM d, y ᎤᎾᎢ H":"EEEE, MMMM d, y ᎤᎾᎢ HH","MMMM d, y ᎤᎾᎢ H":"MMMM d, y ᎤᎾᎢ HH","MMM d, y, H":"MMM d, y, HH","M/d/yy, H":"M/d/yy, HH","d, H":"d, HH","E, H":"ccc, HH","Ed, H":"d E, HH","Gy, H":"y G, HH","GyMMM, H":"MMM y G, HH","GyMMMd, H":"MMM d, y G, HH","GyMMMEd, H":"E, MMM d, y G, HH","M, H":"L, HH","Md, H":"M/d, HH","MEd, H":"E, M/d, HH","MMM, H":"LLL, HH","MMMd, H":"MMM d, HH","MMMEd, H":"E, MMM d, HH","MMMMd ᎤᎾᎢ H":"MMMM d ᎤᎾᎢ HH","y, H":"y, HH","yM, H":"M/y, HH","yMd, H":"M/d/y, HH","yMEd, H":"E, M/d/y, HH","yMMM, H":"MMM y, HH","yMMMd, H":"MMM d, y, HH","yMMMEd, H":"E, MMM d, y, HH","yMMMM ᎤᎾᎢ H":"MMMM y ᎤᎾᎢ HH","EEEE, MMMM d, y ᎤᎾᎢ hm":"EEEE, MMMM d, y ᎤᎾᎢ h:mm a","MMMM d, y ᎤᎾᎢ hm":"MMMM d, y ᎤᎾᎢ h:mm a","MMM d, y, hm":"MMM d, y, h:mm a","M/d/yy, hm":"M/d/yy, h:mm a","d, hm":"d, h:mm a","E, hm":"ccc, h:mm a","Ed, hm":"d E, h:mm a","Gy, hm":"y G, h:mm a","GyMMM, hm":"MMM y G, h:mm a","GyMMMd, hm":"MMM d, y G, h:mm a","GyMMMEd, hm":"E, MMM d, y G, h:mm a","M, hm":"L, h:mm a","Md, hm":"M/d, h:mm a","MEd, hm":"E, M/d, h:mm a","MMM, hm":"LLL, h:mm a","MMMd, hm":"MMM d, h:mm a","MMMEd, hm":"E, MMM d, h:mm a","MMMMd ᎤᎾᎢ hm":"MMMM d ᎤᎾᎢ h:mm a","y, hm":"y, h:mm a","yM, hm":"M/y, h:mm a","yMd, hm":"M/d/y, h:mm a","yMEd, hm":"E, M/d/y, h:mm a","yMMM, hm":"MMM y, h:mm a","yMMMd, hm":"MMM d, y, h:mm a","yMMMEd, hm":"E, MMM d, y, h:mm a","yMMMM ᎤᎾᎢ hm":"MMMM y ᎤᎾᎢ h:mm a","EEEE, MMMM d, y ᎤᎾᎢ Hm":"EEEE, MMMM d, y ᎤᎾᎢ HH:mm","MMMM d, y ᎤᎾᎢ Hm":"MMMM d, y ᎤᎾᎢ HH:mm","MMM d, y, Hm":"MMM d, y, HH:mm","M/d/yy, Hm":"M/d/yy, HH:mm","d, Hm":"d, HH:mm","E, Hm":"ccc, HH:mm","Ed, Hm":"d E, HH:mm","Gy, Hm":"y G, HH:mm","GyMMM, Hm":"MMM y G, HH:mm","GyMMMd, Hm":"MMM d, y G, HH:mm","GyMMMEd, Hm":"E, MMM d, y G, HH:mm","M, Hm":"L, HH:mm","Md, Hm":"M/d, HH:mm","MEd, Hm":"E, M/d, HH:mm","MMM, Hm":"LLL, HH:mm","MMMd, Hm":"MMM d, HH:mm","MMMEd, Hm":"E, MMM d, HH:mm","MMMMd ᎤᎾᎢ Hm":"MMMM d ᎤᎾᎢ HH:mm","y, Hm":"y, HH:mm","yM, Hm":"M/y, HH:mm","yMd, Hm":"M/d/y, HH:mm","yMEd, Hm":"E, M/d/y, HH:mm","yMMM, Hm":"MMM y, HH:mm","yMMMd, Hm":"MMM d, y, HH:mm","yMMMEd, Hm":"E, MMM d, y, HH:mm","yMMMM ᎤᎾᎢ Hm":"MMMM y ᎤᎾᎢ HH:mm","EEEE, MMMM d, y ᎤᎾᎢ hms":"EEEE, MMMM d, y ᎤᎾᎢ h:mm:ss a","MMMM d, y ᎤᎾᎢ hms":"MMMM d, y ᎤᎾᎢ h:mm:ss a","MMM d, y, hms":"MMM d, y, h:mm:ss a","M/d/yy, hms":"M/d/yy, h:mm:ss a","d, hms":"d, h:mm:ss a","E, hms":"ccc, h:mm:ss a","Ed, hms":"d E, h:mm:ss a","Gy, hms":"y G, h:mm:ss a","GyMMM, hms":"MMM y G, h:mm:ss a","GyMMMd, hms":"MMM d, y G, h:mm:ss a","GyMMMEd, hms":"E, MMM d, y G, h:mm:ss a","M, hms":"L, h:mm:ss a","Md, hms":"M/d, h:mm:ss a","MEd, hms":"E, M/d, h:mm:ss a","MMM, hms":"LLL, h:mm:ss a","MMMd, hms":"MMM d, h:mm:ss a","MMMEd, hms":"E, MMM d, h:mm:ss a","MMMMd ᎤᎾᎢ hms":"MMMM d ᎤᎾᎢ h:mm:ss a","y, hms":"y, h:mm:ss a","yM, hms":"M/y, h:mm:ss a","yMd, hms":"M/d/y, h:mm:ss a","yMEd, hms":"E, M/d/y, h:mm:ss a","yMMM, hms":"MMM y, h:mm:ss a","yMMMd, hms":"MMM d, y, h:mm:ss a","yMMMEd, hms":"E, MMM d, y, h:mm:ss a","yMMMM ᎤᎾᎢ hms":"MMMM y ᎤᎾᎢ h:mm:ss a","EEEE, MMMM d, y ᎤᎾᎢ Hms":"EEEE, MMMM d, y ᎤᎾᎢ HH:mm:ss","MMMM d, y ᎤᎾᎢ Hms":"MMMM d, y ᎤᎾᎢ HH:mm:ss","MMM d, y, Hms":"MMM d, y, HH:mm:ss","M/d/yy, Hms":"M/d/yy, HH:mm:ss","d, Hms":"d, HH:mm:ss","E, Hms":"ccc, HH:mm:ss","Ed, Hms":"d E, HH:mm:ss","Gy, Hms":"y G, HH:mm:ss","GyMMM, Hms":"MMM y G, HH:mm:ss","GyMMMd, Hms":"MMM d, y G, HH:mm:ss","GyMMMEd, Hms":"E, MMM d, y G, HH:mm:ss","M, Hms":"L, HH:mm:ss","Md, Hms":"M/d, HH:mm:ss","MEd, Hms":"E, M/d, HH:mm:ss","MMM, Hms":"LLL, HH:mm:ss","MMMd, Hms":"MMM d, HH:mm:ss","MMMEd, Hms":"E, MMM d, HH:mm:ss","MMMMd ᎤᎾᎢ Hms":"MMMM d ᎤᎾᎢ HH:mm:ss","y, Hms":"y, HH:mm:ss","yM, Hms":"M/y, HH:mm:ss","yMd, Hms":"M/d/y, HH:mm:ss","yMEd, Hms":"E, M/d/y, HH:mm:ss","yMMM, Hms":"MMM y, HH:mm:ss","yMMMd, Hms":"MMM d, y, HH:mm:ss","yMMMEd, Hms":"E, MMM d, y, HH:mm:ss","yMMMM ᎤᎾᎢ Hms":"MMMM y ᎤᎾᎢ HH:mm:ss","EEEE, MMMM d, y ᎤᎾᎢ hmsv":"EEEE, MMMM d, y ᎤᎾᎢ h:mm:ss a v","MMMM d, y ᎤᎾᎢ hmsv":"MMMM d, y ᎤᎾᎢ h:mm:ss a v","MMM d, y, hmsv":"MMM d, y, h:mm:ss a v","M/d/yy, hmsv":"M/d/yy, h:mm:ss a v","d, hmsv":"d, h:mm:ss a v","E, hmsv":"ccc, h:mm:ss a v","Ed, hmsv":"d E, h:mm:ss a v","Gy, hmsv":"y G, h:mm:ss a v","GyMMM, hmsv":"MMM y G, h:mm:ss a v","GyMMMd, hmsv":"MMM d, y G, h:mm:ss a v","GyMMMEd, hmsv":"E, MMM d, y G, h:mm:ss a v","M, hmsv":"L, h:mm:ss a v","Md, hmsv":"M/d, h:mm:ss a v","MEd, hmsv":"E, M/d, h:mm:ss a v","MMM, hmsv":"LLL, h:mm:ss a v","MMMd, hmsv":"MMM d, h:mm:ss a v","MMMEd, hmsv":"E, MMM d, h:mm:ss a v","MMMMd ᎤᎾᎢ hmsv":"MMMM d ᎤᎾᎢ h:mm:ss a v","y, hmsv":"y, h:mm:ss a v","yM, hmsv":"M/y, h:mm:ss a v","yMd, hmsv":"M/d/y, h:mm:ss a v","yMEd, hmsv":"E, M/d/y, h:mm:ss a v","yMMM, hmsv":"MMM y, h:mm:ss a v","yMMMd, hmsv":"MMM d, y, h:mm:ss a v","yMMMEd, hmsv":"E, MMM d, y, h:mm:ss a v","yMMMM ᎤᎾᎢ hmsv":"MMMM y ᎤᎾᎢ h:mm:ss a v","EEEE, MMMM d, y ᎤᎾᎢ Hmsv":"EEEE, MMMM d, y ᎤᎾᎢ HH:mm:ss v","MMMM d, y ᎤᎾᎢ Hmsv":"MMMM d, y ᎤᎾᎢ HH:mm:ss v","MMM d, y, Hmsv":"MMM d, y, HH:mm:ss v","M/d/yy, Hmsv":"M/d/yy, HH:mm:ss v","d, Hmsv":"d, HH:mm:ss v","E, Hmsv":"ccc, HH:mm:ss v","Ed, Hmsv":"d E, HH:mm:ss v","Gy, Hmsv":"y G, HH:mm:ss v","GyMMM, Hmsv":"MMM y G, HH:mm:ss v","GyMMMd, Hmsv":"MMM d, y G, HH:mm:ss v","GyMMMEd, Hmsv":"E, MMM d, y G, HH:mm:ss v","M, Hmsv":"L, HH:mm:ss v","Md, Hmsv":"M/d, HH:mm:ss v","MEd, Hmsv":"E, M/d, HH:mm:ss v","MMM, Hmsv":"LLL, HH:mm:ss v","MMMd, Hmsv":"MMM d, HH:mm:ss v","MMMEd, Hmsv":"E, MMM d, HH:mm:ss v","MMMMd ᎤᎾᎢ Hmsv":"MMMM d ᎤᎾᎢ HH:mm:ss v","y, Hmsv":"y, HH:mm:ss v","yM, Hmsv":"M/y, HH:mm:ss v","yMd, Hmsv":"M/d/y, HH:mm:ss v","yMEd, Hmsv":"E, M/d/y, HH:mm:ss v","yMMM, Hmsv":"MMM y, HH:mm:ss v","yMMMd, Hmsv":"MMM d, y, HH:mm:ss v","yMMMEd, Hmsv":"E, MMM d, y, HH:mm:ss v","yMMMM ᎤᎾᎢ Hmsv":"MMMM y ᎤᎾᎢ HH:mm:ss v","EEEE, MMMM d, y ᎤᎾᎢ hmv":"EEEE, MMMM d, y ᎤᎾᎢ h:mm a v","MMMM d, y ᎤᎾᎢ hmv":"MMMM d, y ᎤᎾᎢ h:mm a v","MMM d, y, hmv":"MMM d, y, h:mm a v","M/d/yy, hmv":"M/d/yy, h:mm a v","d, hmv":"d, h:mm a v","E, hmv":"ccc, h:mm a v","Ed, hmv":"d E, h:mm a v","Gy, hmv":"y G, h:mm a v","GyMMM, hmv":"MMM y G, h:mm a v","GyMMMd, hmv":"MMM d, y G, h:mm a v","GyMMMEd, hmv":"E, MMM d, y G, h:mm a v","M, hmv":"L, h:mm a v","Md, hmv":"M/d, h:mm a v","MEd, hmv":"E, M/d, h:mm a v","MMM, hmv":"LLL, h:mm a v","MMMd, hmv":"MMM d, h:mm a v","MMMEd, hmv":"E, MMM d, h:mm a v","MMMMd ᎤᎾᎢ hmv":"MMMM d ᎤᎾᎢ h:mm a v","y, hmv":"y, h:mm a v","yM, hmv":"M/y, h:mm a v","yMd, hmv":"M/d/y, h:mm a v","yMEd, hmv":"E, M/d/y, h:mm a v","yMMM, hmv":"MMM y, h:mm a v","yMMMd, hmv":"MMM d, y, h:mm a v","yMMMEd, hmv":"E, MMM d, y, h:mm a v","yMMMM ᎤᎾᎢ hmv":"MMMM y ᎤᎾᎢ h:mm a v","EEEE, MMMM d, y ᎤᎾᎢ Hmv":"EEEE, MMMM d, y ᎤᎾᎢ HH:mm v","MMMM d, y ᎤᎾᎢ Hmv":"MMMM d, y ᎤᎾᎢ HH:mm v","MMM d, y, Hmv":"MMM d, y, HH:mm v","M/d/yy, Hmv":"M/d/yy, HH:mm v","d, Hmv":"d, HH:mm v","E, Hmv":"ccc, HH:mm v","Ed, Hmv":"d E, HH:mm v","Gy, Hmv":"y G, HH:mm v","GyMMM, Hmv":"MMM y G, HH:mm v","GyMMMd, Hmv":"MMM d, y G, HH:mm v","GyMMMEd, Hmv":"E, MMM d, y G, HH:mm v","M, Hmv":"L, HH:mm v","Md, Hmv":"M/d, HH:mm v","MEd, Hmv":"E, M/d, HH:mm v","MMM, Hmv":"LLL, HH:mm v","MMMd, Hmv":"MMM d, HH:mm v","MMMEd, Hmv":"E, MMM d, HH:mm v","MMMMd ᎤᎾᎢ Hmv":"MMMM d ᎤᎾᎢ HH:mm v","y, Hmv":"y, HH:mm v","yM, Hmv":"M/y, HH:mm v","yMd, Hmv":"M/d/y, HH:mm v","yMEd, Hmv":"E, M/d/y, HH:mm v","yMMM, Hmv":"MMM y, HH:mm v","yMMMd, Hmv":"MMM d, y, HH:mm v","yMMMEd, Hmv":"E, MMM d, y, HH:mm v","yMMMM ᎤᎾᎢ Hmv":"MMMM y ᎤᎾᎢ HH:mm v","EEEE, MMMM d, y ᎤᎾᎢ ms":"EEEE, MMMM d, y ᎤᎾᎢ mm:ss","MMMM d, y ᎤᎾᎢ ms":"MMMM d, y ᎤᎾᎢ mm:ss","MMM d, y, ms":"MMM d, y, mm:ss","M/d/yy, ms":"M/d/yy, mm:ss","d, ms":"d, mm:ss","E, ms":"ccc, mm:ss","Ed, ms":"d E, mm:ss","Gy, ms":"y G, mm:ss","GyMMM, ms":"MMM y G, mm:ss","GyMMMd, ms":"MMM d, y G, mm:ss","GyMMMEd, ms":"E, MMM d, y G, mm:ss","M, ms":"L, mm:ss","Md, ms":"M/d, mm:ss","MEd, ms":"E, M/d, mm:ss","MMM, ms":"LLL, mm:ss","MMMd, ms":"MMM d, mm:ss","MMMEd, ms":"E, MMM d, mm:ss","MMMMd ᎤᎾᎢ ms":"MMMM d ᎤᎾᎢ mm:ss","y, ms":"y, mm:ss","yM, ms":"M/y, mm:ss","yMd, ms":"M/d/y, mm:ss","yMEd, ms":"E, M/d/y, mm:ss","yMMM, ms":"MMM y, mm:ss","yMMMd, ms":"MMM d, y, mm:ss","yMMMEd, ms":"E, MMM d, y, mm:ss","yMMMM ᎤᎾᎢ ms":"MMMM y ᎤᎾᎢ mm:ss"}},"hourCycle":"h12","nu":["latn"],"ca":["gregory"],"hc":["h12","","h23",""]}},"availableLocales":["chr"]}
)
  }}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

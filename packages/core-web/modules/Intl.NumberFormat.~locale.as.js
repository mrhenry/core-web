import CreateMethodProperty from "@mrhenry/core-web/helpers/_ESAbstract.CreateMethodProperty";
import IsArray from "@mrhenry/core-web/helpers/_ESAbstract.IsArray";
import ToObject from "@mrhenry/core-web/helpers/_ESAbstract.ToObject";
import ToLength from "@mrhenry/core-web/helpers/_ESAbstract.ToLength";
import ToInteger from "@mrhenry/core-web/helpers/_ESAbstract.ToInteger";
import Type from "@mrhenry/core-web/helpers/_ESAbstract.Type";
import Get from "@mrhenry/core-web/helpers/_ESAbstract.Get";
import IsCallable from "@mrhenry/core-web/helpers/_ESAbstract.IsCallable";
import ArraySpeciesCreate from "@mrhenry/core-web/helpers/_ESAbstract.ArraySpeciesCreate";
import ArrayCreate from "@mrhenry/core-web/helpers/_ESAbstract.ArrayCreate";
import IsConstructor from "@mrhenry/core-web/helpers/_ESAbstract.IsConstructor";
import GetMethod from "@mrhenry/core-web/helpers/_ESAbstract.GetMethod";
import GetV from "@mrhenry/core-web/helpers/_ESAbstract.GetV";
import Construct from "@mrhenry/core-web/helpers/_ESAbstract.Construct";
import OrdinaryCreateFromConstructor from "@mrhenry/core-web/helpers/_ESAbstract.OrdinaryCreateFromConstructor";
import GetPrototypeFromConstructor from "@mrhenry/core-web/helpers/_ESAbstract.GetPrototypeFromConstructor";
import HasOwnProperty from "@mrhenry/core-web/helpers/_ESAbstract.HasOwnProperty";
import ToPropertyKey from "@mrhenry/core-web/helpers/_ESAbstract.ToPropertyKey";
import ToPrimitive from "@mrhenry/core-web/helpers/_ESAbstract.ToPrimitive";
import Call from "@mrhenry/core-web/helpers/_ESAbstract.Call";
import OrdinaryToPrimitive from "@mrhenry/core-web/helpers/_ESAbstract.OrdinaryToPrimitive";
import ToString from "@mrhenry/core-web/helpers/_ESAbstract.ToString";
import HasProperty from "@mrhenry/core-web/helpers/_ESAbstract.HasProperty";
import ToBoolean from "@mrhenry/core-web/helpers/_ESAbstract.ToBoolean";
import CreateDataPropertyOrThrow from "@mrhenry/core-web/helpers/_ESAbstract.CreateDataPropertyOrThrow";
import CreateDataProperty from "@mrhenry/core-web/helpers/_ESAbstract.CreateDataProperty";
import CreateIterResultObject from "@mrhenry/core-web/helpers/_ESAbstract.CreateIterResultObject";
import GetIterator from "@mrhenry/core-web/helpers/_ESAbstract.GetIterator";
import SameValueZero from "@mrhenry/core-web/helpers/_ESAbstract.SameValueZero";
import SameValueNonNumber from "@mrhenry/core-web/helpers/_ESAbstract.SameValueNonNumber";
import IteratorClose from "@mrhenry/core-web/helpers/_ESAbstract.IteratorClose";
import IteratorComplete from "@mrhenry/core-web/helpers/_ESAbstract.IteratorComplete";
import IteratorNext from "@mrhenry/core-web/helpers/_ESAbstract.IteratorNext";
import IteratorStep from "@mrhenry/core-web/helpers/_ESAbstract.IteratorStep";
import IteratorValue from "@mrhenry/core-web/helpers/_ESAbstract.IteratorValue";
import SameValue from "@mrhenry/core-web/helpers/_ESAbstract.SameValue";
(function(undefined) {
if (!("Intl"in self&&Intl.NumberFormat&&function(){try{new Intl.NumberFormat("as",{style:"unit",unit:"byte"})}catch(t){return!1}return!0}()&&Intl.NumberFormat.supportedLocalesOf("as").length
)) {
// Intl.NumberFormat.~locale.as
/* @generated */
// prettier-ignore
if (Intl.NumberFormat && typeof Intl.NumberFormat.__addLocaleData === 'function') {
  Intl.NumberFormat.__addLocaleData({"data":{"units":{"simple":{"degree":{"long":{"other":"{0} ডিগ্ৰী"},"short":{"other":"{0} ডিগ্ৰী"},"narrow":{"other":"{0} ডিগ্ৰী"},"perUnit":{}},"hectare":{"long":{"other":"{0} হেক্টৰ"},"short":{"other":"{0} হেক্টৰ"},"narrow":{"other":"{0} হেক্টৰ"},"perUnit":{}},"acre":{"long":{"other":"{0} একৰ"},"short":{"other":"{0} একৰ"},"narrow":{"other":"{0} একৰ"},"perUnit":{}},"percent":{"long":{"other":"{0} শতাংশ"},"short":{"other":"{0}%"},"narrow":{"other":"{0}%"},"perUnit":{}},"liter-per-kilometer":{"long":{"other":"প্ৰতি কিলোমিটাৰত {0} লিটাৰ"},"short":{"other":"{0} লিঃ/কিঃ মিঃ"},"narrow":{"other":"{0} লিঃ/কিঃ মিঃ"},"perUnit":{}},"mile-per-gallon":{"long":{"other":"প্ৰতি গেলনত {0} মাইল"},"short":{"other":"{0} mpg US"},"narrow":{"other":"{0} mpg US"},"perUnit":{}},"petabyte":{"long":{"other":"{0} পেটাবাইট"},"short":{"other":"{0} PB"},"narrow":{"other":"{0} PB"},"perUnit":{}},"terabyte":{"long":{"other":"{0} টেৰাবাইট"},"short":{"other":"{0} টেঃ বাঃ"},"narrow":{"other":"{0} টেঃ বাঃ"},"perUnit":{}},"terabit":{"long":{"other":"{0} টেৰাবিট"},"short":{"other":"{0} টেঃ বিঃ"},"narrow":{"other":"{0} টেঃ বিঃ"},"perUnit":{}},"gigabyte":{"long":{"other":"{0} গিগাবাইট"},"short":{"other":"{0} গিঃ বাঃ"},"narrow":{"other":"{0} গিঃ বাঃ"},"perUnit":{}},"gigabit":{"long":{"other":"{0} গিগাবিট"},"short":{"other":"{0} গিঃ বিঃ"},"narrow":{"other":"{0} গিঃ বিঃ"},"perUnit":{}},"megabyte":{"long":{"other":"{0} মেগাবাইট"},"short":{"other":"{0} মেঃ বাঃ"},"narrow":{"other":"{0} মেঃ বাঃ"},"perUnit":{}},"megabit":{"long":{"other":"{0} মেগাবিট"},"short":{"other":"{0} মেঃ বিঃ"},"narrow":{"other":"{0} মেঃ বিঃ"},"perUnit":{}},"kilobyte":{"long":{"other":"{0} কিলোবাইট"},"short":{"other":"{0} কিঃ বাঃ"},"narrow":{"other":"{0} কিঃ বাঃ"},"perUnit":{}},"kilobit":{"long":{"other":"{0} কিলোবিট"},"short":{"other":"{0} কিঃ বিঃ"},"narrow":{"other":"{0} কিঃ বিঃ"},"perUnit":{}},"byte":{"long":{"other":"{0} বাইট"},"short":{"other":"{0} বাইট"},"narrow":{"other":"{0} বাইট"},"perUnit":{}},"bit":{"long":{"other":"{0} বিট"},"short":{"other":"{0} বিট"},"narrow":{"other":"{0} বিট"},"perUnit":{}},"year":{"long":{"other":"{0} বছৰ"},"short":{"other":"{0} বছৰ"},"narrow":{"other":"{0} বছৰ"},"perUnit":{"long":"{0} প্ৰতি বছৰ","short":"{0}/বছৰ","narrow":"{0}/বছৰ"}},"month":{"long":{"other":"{0} মাহ"},"short":{"other":"{0} মাহ"},"narrow":{"other":"{0} মাহ"},"perUnit":{"long":"{0} প্ৰতি মাহ","short":"{0}/মাহ","narrow":"{0}/মাহ"}},"week":{"long":{"other":"{0} সপ্তাহ"},"short":{"other":"{0} সপ্তাহ"},"narrow":{"other":"{0} সপ্তাহ"},"perUnit":{"long":"{0} প্ৰতি সপ্তাহ","short":"{0}/সপ্তাহ","narrow":"{0}/সপ্তাহ"}},"day":{"long":{"other":"{0} দিন"},"short":{"other":"{0} দিন"},"narrow":{"other":"{0} দিন"},"perUnit":{"long":"{0} প্ৰতি দিন","short":"{0}/দিন","narrow":"{0}/দিন"}},"hour":{"long":{"other":"{0} ঘণ্টা"},"short":{"other":"{0} ঘণ্টা"},"narrow":{"other":"{0} ঘণ্টা"},"perUnit":{"long":"{0} প্ৰতি ঘণ্টা","short":"{0}/ঘণ্টা","narrow":"{0}/ঘণ্টা"}},"minute":{"long":{"other":"{0} মিনিট"},"short":{"other":"{0} মিনিট"},"narrow":{"other":"{0} মিনিট"},"perUnit":{"long":"{0} প্ৰতি মিনিট","short":"{0}/মিনিট","narrow":"{0}/মিনিট"}},"second":{"long":{"other":"{0} ছেকেণ্ড"},"short":{"other":"{0} ছেকেণ্ড"},"narrow":{"other":"{0} ছেকেণ্ড"},"perUnit":{"long":"{0} প্ৰতি ছেকেণ্ড","short":"{0}/ছেকেণ্ড","narrow":"{0}/ছেকেণ্ড"}},"millisecond":{"long":{"other":"{0} মিলিছেকেণ্ড"},"short":{"other":"{0} মিঃ ছেঃ"},"narrow":{"other":"{0} মিঃ ছেঃ"},"perUnit":{}},"kilometer":{"long":{"other":"{0} কিলোমিটাৰ"},"short":{"other":"{0} কিঃ মিঃ"},"narrow":{"other":"{0} কিঃ মিঃ"},"perUnit":{"long":"{0} প্ৰতি কিলোমিটাৰ","short":"{0}/কিঃ মিঃ","narrow":"{0}/কিঃ মিঃ"}},"meter":{"long":{"other":"{0} মিটাৰ"},"short":{"other":"{0} মিঃ"},"narrow":{"other":"{0} মিঃ"},"perUnit":{"long":"{0} প্ৰতি মিটাৰ","short":"{0}/মিঃ","narrow":"{0}/মিঃ"}},"centimeter":{"long":{"other":"{0} ছেণ্টিমিটাৰ"},"short":{"other":"{0} ছেঃ মিঃ"},"narrow":{"other":"{0} ছেঃ মিঃ"},"perUnit":{"long":"{0} প্ৰতি ছেণ্টিমিটাৰ","short":"{0}/ছেঃ মিঃ","narrow":"{0}/ছেঃ মিঃ"}},"millimeter":{"long":{"other":"{0} মিলিমিটাৰ"},"short":{"other":"{0} মিঃ মিঃ"},"narrow":{"other":"{0} মিঃ মিঃ"},"perUnit":{}},"mile":{"long":{"other":"{0} মাইল"},"short":{"other":"{0} মাঃ"},"narrow":{"other":"{0} মাঃ"},"perUnit":{}},"yard":{"long":{"other":"{0} গজ"},"short":{"other":"{0} গজ"},"narrow":{"other":"{0} গজ"},"perUnit":{}},"foot":{"long":{"other":"{0} ফুট"},"short":{"other":"{0} ফুঃ"},"narrow":{"other":"{0} ফুঃ"},"perUnit":{"long":"{0} প্ৰতি ফুট","short":"{0}/ফুঃ","narrow":"{0}/ফুঃ"}},"inch":{"long":{"other":"{0} ইঞ্চি"},"short":{"other":"{0} ইঃ"},"narrow":{"other":"{0} ইঃ"},"perUnit":{"long":"{0} প্ৰতি ইঞ্চি","short":"{0}/ইঃ","narrow":"{0}/ইঃ"}},"mile-scandinavian":{"long":{"other":"{0} মাইল-স্কেণ্ডিনেভিয়ান"},"short":{"other":"{0} মাঃ-স্কেঃ"},"narrow":{"other":"{0} মাঃ-স্কেঃ"},"perUnit":{}},"kilogram":{"long":{"other":"{0} কিলোগ্ৰাম"},"short":{"other":"{0} কিঃ গ্ৰাঃ"},"narrow":{"other":"{0} কিঃ গ্ৰাঃ"},"perUnit":{"long":"{0} প্ৰতি কিলোগ্ৰাম","short":"{0}/কিঃ গ্ৰাঃ","narrow":"{0}/কিঃ গ্ৰাঃ"}},"gram":{"long":{"other":"{0} গ্ৰাম"},"short":{"other":"{0} গ্ৰাঃ"},"narrow":{"other":"{0} গ্ৰাঃ"},"perUnit":{"long":"{0} প্ৰতি গ্ৰাম","short":"{0}/গ্ৰাঃ","narrow":"{0}/গ্ৰাঃ"}},"stone":{"long":{"other":"{0} ষ্ট'ন"},"short":{"other":"{0} ষ্ট'ন"},"narrow":{"other":"{0} ষ্ট'ন"},"perUnit":{}},"pound":{"long":{"other":"{0} পাউণ্ড"},"short":{"other":"{0} পাউণ্ড"},"narrow":{"other":"{0} পাউণ্ড"},"perUnit":{"long":"{0} প্ৰতি পাউণ্ড","short":"{0}/পাউণ্ড","narrow":"{0}/পাউণ্ড"}},"ounce":{"long":{"other":"{0} আউন্স"},"short":{"other":"{0} আউন্স"},"narrow":{"other":"{0} আউন্স"},"perUnit":{"long":"{0} প্ৰতি আউন্স","short":"{0}/আউন্স","narrow":"{0}/আউন্স"}},"kilometer-per-hour":{"long":{"other":"{0} ঘণ্টা প্ৰতি কিলোমিটাৰ"},"short":{"other":"{0} কিঃ মিঃ/ঘঃ"},"narrow":{"other":"{0} km/h"},"perUnit":{}},"meter-per-second":{"long":{"other":"{0} মিটাৰ প্ৰতি ছেকেণ্ড"},"short":{"other":"{0} মিঃ/ছেঃ"},"narrow":{"other":"{0} মিঃ/ছেঃ"},"perUnit":{}},"mile-per-hour":{"long":{"other":"{0} মাইল প্ৰতি ঘণ্টা"},"short":{"other":"{0} মাঃ/ঘঃ"},"narrow":{"other":"{0} মাঃ/ঘঃ"},"perUnit":{}},"celsius":{"long":{"other":"{0} ডিগ্ৰী চেলচিয়াছ"},"short":{"other":"{0}°চেঃ"},"narrow":{"other":"{0}°চেঃ"},"perUnit":{}},"fahrenheit":{"long":{"other":"{0} ডিগ্ৰী ফাৰেনহাইট"},"short":{"other":"{0}°ফাঃ"},"narrow":{"other":"{0}°ফাঃ"},"perUnit":{}},"liter":{"long":{"other":"{0} লিটাৰ"},"short":{"other":"{0} লিঃ"},"narrow":{"other":"{0} লিঃ"},"perUnit":{"long":"{0} প্ৰতি লিটাৰ","short":"{0}/লিঃ","narrow":"{0}/লিঃ"}},"milliliter":{"long":{"other":"{0} মিলিলিটাৰ"},"short":{"other":"{0} মিঃ লিঃ"},"narrow":{"other":"{0} মিঃ লিঃ"},"perUnit":{}},"gallon":{"long":{"other":"{0} গেলন"},"short":{"other":"{0} গেলন"},"narrow":{"other":"{0} গেলন"},"perUnit":{"long":"{0} প্ৰতি গেলন","short":"{0}/গেলন","narrow":"{0}/গেলন"}},"fluid-ounce":{"long":{"other":"{0} ফ্লুইড আউন্স"},"short":{"other":"{0} ফ্লুঃ আঃ"},"narrow":{"other":"{0} ফ্লুঃ আঃ"},"perUnit":{}}},"compound":{"per":{"long":"প্ৰতি {1}ত {0}","short":"{0}/{1}","narrow":"{0}/{1}"}}},"currencies":{"ADP":{"displayName":{"other":"ADP"},"symbol":"ADP","narrow":"ADP"},"AED":{"displayName":{"other":"UAE ডিৰহেম"},"symbol":"AED","narrow":"AED"},"AFA":{"displayName":{"other":"AFA"},"symbol":"AFA","narrow":"AFA"},"AFN":{"displayName":{"other":"আফগান আফগানী"},"symbol":"AFN","narrow":"؋"},"ALK":{"displayName":{"other":"ALK"},"symbol":"ALK","narrow":"ALK"},"ALL":{"displayName":{"other":"আলবেনীয় লেক"},"symbol":"ALL","narrow":"ALL"},"AMD":{"displayName":{"other":"আৰ্মেনিয়ান ড্ৰাম"},"symbol":"AMD","narrow":"֏"},"ANG":{"displayName":{"other":"নেডাৰলেণ্ডছ এণ্টিলিয়েন গিল্ডাৰ"},"symbol":"ANG","narrow":"ANG"},"AOA":{"displayName":{"other":"এংগোলান কোৱাঞ্জা"},"symbol":"AOA","narrow":"Kz"},"AOK":{"displayName":{"other":"AOK"},"symbol":"AOK","narrow":"AOK"},"AON":{"displayName":{"other":"AON"},"symbol":"AON","narrow":"AON"},"AOR":{"displayName":{"other":"AOR"},"symbol":"AOR","narrow":"AOR"},"ARA":{"displayName":{"other":"ARA"},"symbol":"ARA","narrow":"ARA"},"ARL":{"displayName":{"other":"ARL"},"symbol":"ARL","narrow":"ARL"},"ARM":{"displayName":{"other":"ARM"},"symbol":"ARM","narrow":"ARM"},"ARP":{"displayName":{"other":"ARP"},"symbol":"ARP","narrow":"ARP"},"ARS":{"displayName":{"other":"আৰ্জেণ্টাইন পেছো"},"symbol":"ARS","narrow":"$"},"ATS":{"displayName":{"other":"ATS"},"symbol":"ATS","narrow":"ATS"},"AUD":{"displayName":{"other":"অষ্ট্ৰেলিয়ান ডলাৰ"},"symbol":"A$","narrow":"$"},"AWG":{"displayName":{"other":"আৰুবান ফ্ল’ৰিন"},"symbol":"AWG","narrow":"AWG"},"AZM":{"displayName":{"other":"AZM"},"symbol":"AZM","narrow":"AZM"},"AZN":{"displayName":{"other":"আজেৰবাইজানী মানাত"},"symbol":"AZN","narrow":"₼"},"BAD":{"displayName":{"other":"BAD"},"symbol":"BAD","narrow":"BAD"},"BAM":{"displayName":{"other":"ব’ছনিয়া আৰু হাৰ্জেগ’ভিনা কনভাৰ্টিব্‌ল মাৰ্ক"},"symbol":"BAM","narrow":"KM"},"BAN":{"displayName":{"other":"BAN"},"symbol":"BAN","narrow":"BAN"},"BBD":{"displayName":{"other":"বাৰ্বাডিয়ান ডলাৰ"},"symbol":"BBD","narrow":"$"},"BDT":{"displayName":{"other":"বাংলাদেশী টাকা"},"symbol":"BDT","narrow":"৳"},"BEC":{"displayName":{"other":"BEC"},"symbol":"BEC","narrow":"BEC"},"BEF":{"displayName":{"other":"BEF"},"symbol":"BEF","narrow":"BEF"},"BEL":{"displayName":{"other":"BEL"},"symbol":"BEL","narrow":"BEL"},"BGL":{"displayName":{"other":"BGL"},"symbol":"BGL","narrow":"BGL"},"BGM":{"displayName":{"other":"BGM"},"symbol":"BGM","narrow":"BGM"},"BGN":{"displayName":{"other":"বুলগেৰীয় লেভ"},"symbol":"BGN","narrow":"BGN"},"BGO":{"displayName":{"other":"BGO"},"symbol":"BGO","narrow":"BGO"},"BHD":{"displayName":{"other":"বাহৰেইনী ডিনাৰ"},"symbol":"BHD","narrow":"BHD"},"BIF":{"displayName":{"other":"বুৰুণ্ডিয়ান ফ্ৰেংক"},"symbol":"BIF","narrow":"BIF"},"BMD":{"displayName":{"other":"বাৰ্মুডান ডলাৰ"},"symbol":"BMD","narrow":"$"},"BND":{"displayName":{"other":"ব্ৰুনেই ডলাৰ"},"symbol":"BND","narrow":"$"},"BOB":{"displayName":{"other":"বলিভিয়ান বলিভিয়ানো"},"symbol":"BOB","narrow":"Bs"},"BOL":{"displayName":{"other":"BOL"},"symbol":"BOL","narrow":"BOL"},"BOP":{"displayName":{"other":"BOP"},"symbol":"BOP","narrow":"BOP"},"BOV":{"displayName":{"other":"BOV"},"symbol":"BOV","narrow":"BOV"},"BRB":{"displayName":{"other":"BRB"},"symbol":"BRB","narrow":"BRB"},"BRC":{"displayName":{"other":"BRC"},"symbol":"BRC","narrow":"BRC"},"BRE":{"displayName":{"other":"BRE"},"symbol":"BRE","narrow":"BRE"},"BRL":{"displayName":{"other":"ব্ৰাজিলিয়ান ৰিয়েল"},"symbol":"R$","narrow":"R$"},"BRN":{"displayName":{"other":"BRN"},"symbol":"BRN","narrow":"BRN"},"BRR":{"displayName":{"other":"BRR"},"symbol":"BRR","narrow":"BRR"},"BRZ":{"displayName":{"other":"BRZ"},"symbol":"BRZ","narrow":"BRZ"},"BSD":{"displayName":{"other":"বাহামিয়ান ডলাৰ"},"symbol":"BSD","narrow":"$"},"BTN":{"displayName":{"other":"ভুটানী নংগলট্ৰাম"},"symbol":"BTN","narrow":"BTN"},"BUK":{"displayName":{"other":"BUK"},"symbol":"BUK","narrow":"BUK"},"BWP":{"displayName":{"other":"ব’টচোৱানান পুলা"},"symbol":"BWP","narrow":"P"},"BYB":{"displayName":{"other":"BYB"},"symbol":"BYB","narrow":"BYB"},"BYN":{"displayName":{"other":"বেলাৰুছীয় ৰুবেল"},"symbol":"BYN","narrow":"р."},"BYR":{"displayName":{"other":"BYR"},"symbol":"BYR","narrow":"BYR"},"BZD":{"displayName":{"other":"বেলিজ ডলাৰ"},"symbol":"BZD","narrow":"$"},"CAD":{"displayName":{"other":"কানাডিয়ান ডলাৰ"},"symbol":"CA$","narrow":"$"},"CDF":{"displayName":{"other":"কংগো ফ্ৰেংক"},"symbol":"CDF","narrow":"CDF"},"CHE":{"displayName":{"other":"CHE"},"symbol":"CHE","narrow":"CHE"},"CHF":{"displayName":{"other":"চুইছ ফ্ৰেংক"},"symbol":"CHF","narrow":"CHF"},"CHW":{"displayName":{"other":"CHW"},"symbol":"CHW","narrow":"CHW"},"CLE":{"displayName":{"other":"CLE"},"symbol":"CLE","narrow":"CLE"},"CLF":{"displayName":{"other":"CLF"},"symbol":"CLF","narrow":"CLF"},"CLP":{"displayName":{"other":"চিলিয়ান পেছো"},"symbol":"CLP","narrow":"$"},"CNH":{"displayName":{"other":"চীনা ইউৱান (অফশ্ব’ৰ)"},"symbol":"CNH","narrow":"CNH"},"CNX":{"displayName":{"other":"CNX"},"symbol":"CNX","narrow":"CNX"},"CNY":{"displayName":{"other":"চীনা ইউৱান"},"symbol":"CN¥","narrow":"¥"},"COP":{"displayName":{"other":"কলম্বিয়ান পেছো"},"symbol":"COP","narrow":"$"},"COU":{"displayName":{"other":"COU"},"symbol":"COU","narrow":"COU"},"CRC":{"displayName":{"other":"কোষ্টা ৰিকান কোলন"},"symbol":"CRC","narrow":"₡"},"CSD":{"displayName":{"other":"CSD"},"symbol":"CSD","narrow":"CSD"},"CSK":{"displayName":{"other":"CSK"},"symbol":"CSK","narrow":"CSK"},"CUC":{"displayName":{"other":"কিউবান ৰূপান্তৰযোগ্য পেছো"},"symbol":"CUC","narrow":"$"},"CUP":{"displayName":{"other":"কিউবান পেছো"},"symbol":"CUP","narrow":"$"},"CVE":{"displayName":{"other":"কেপ ভাৰ্দে এছকুডো"},"symbol":"CVE","narrow":"CVE"},"CYP":{"displayName":{"other":"CYP"},"symbol":"CYP","narrow":"CYP"},"CZK":{"displayName":{"other":"চেক কোৰুনা"},"symbol":"CZK","narrow":"Kč"},"DDM":{"displayName":{"other":"DDM"},"symbol":"DDM","narrow":"DDM"},"DEM":{"displayName":{"other":"DEM"},"symbol":"DEM","narrow":"DEM"},"DJF":{"displayName":{"other":"জিবুটি ফ্ৰেংক"},"symbol":"DJF","narrow":"DJF"},"DKK":{"displayName":{"other":"ডেনিচ ক্ৰোন"},"symbol":"DKK","narrow":"kr"},"DOP":{"displayName":{"other":"ড’মিনিকান পেছো"},"symbol":"DOP","narrow":"$"},"DZD":{"displayName":{"other":"আলজেৰীয় ডিনাৰ"},"symbol":"DZD","narrow":"DZD"},"ECS":{"displayName":{"other":"ECS"},"symbol":"ECS","narrow":"ECS"},"ECV":{"displayName":{"other":"ECV"},"symbol":"ECV","narrow":"ECV"},"EEK":{"displayName":{"other":"EEK"},"symbol":"EEK","narrow":"EEK"},"EGP":{"displayName":{"other":"ইজিপ্তৰ পাউণ্ড"},"symbol":"EGP","narrow":"E£"},"ERN":{"displayName":{"other":"এৰিট্ৰিয়ন নাক্‌ফা"},"symbol":"ERN","narrow":"ERN"},"ESA":{"displayName":{"other":"ESA"},"symbol":"ESA","narrow":"ESA"},"ESB":{"displayName":{"other":"ESB"},"symbol":"ESB","narrow":"ESB"},"ESP":{"displayName":{"other":"ESP"},"symbol":"ESP","narrow":"₧"},"ETB":{"displayName":{"other":"ইথিঅ’পিয়ান বিৰ"},"symbol":"ETB","narrow":"ETB"},"EUR":{"displayName":{"other":"ইউৰো"},"symbol":"€","narrow":"€"},"FIM":{"displayName":{"other":"FIM"},"symbol":"FIM","narrow":"FIM"},"FJD":{"displayName":{"other":"ফিজিয়ান ডলাৰ"},"symbol":"FJD","narrow":"$"},"FKP":{"displayName":{"other":"ফকলেণ্ড দ্বীপপুঞ্জৰ পাউণ্ড"},"symbol":"FKP","narrow":"£"},"FRF":{"displayName":{"other":"FRF"},"symbol":"FRF","narrow":"FRF"},"GBP":{"displayName":{"other":"ব্ৰিটিছ পাউণ্ড"},"symbol":"£","narrow":"£"},"GEK":{"displayName":{"other":"GEK"},"symbol":"GEK","narrow":"GEK"},"GEL":{"displayName":{"other":"জৰ্জিয়ান লাৰি"},"symbol":"GEL","narrow":"₾"},"GHC":{"displayName":{"other":"GHC"},"symbol":"GHC","narrow":"GHC"},"GHS":{"displayName":{"other":"ঘানাৰ চেডি"},"symbol":"GHS","narrow":"GH₵"},"GIP":{"displayName":{"other":"জিব্ৰাল্টৰ পাউণ্ড"},"symbol":"GIP","narrow":"£"},"GMD":{"displayName":{"other":"গাম্বিয়া ডালাছি"},"symbol":"GMD","narrow":"GMD"},"GNF":{"displayName":{"other":"গিনি ফ্ৰেংক"},"symbol":"GNF","narrow":"FG"},"GNS":{"displayName":{"other":"GNS"},"symbol":"GNS","narrow":"GNS"},"GQE":{"displayName":{"other":"GQE"},"symbol":"GQE","narrow":"GQE"},"GRD":{"displayName":{"other":"GRD"},"symbol":"GRD","narrow":"GRD"},"GTQ":{"displayName":{"other":"গুৱাটেমালা কুৱেৎজাল"},"symbol":"GTQ","narrow":"Q"},"GWE":{"displayName":{"other":"GWE"},"symbol":"GWE","narrow":"GWE"},"GWP":{"displayName":{"other":"GWP"},"symbol":"GWP","narrow":"GWP"},"GYD":{"displayName":{"other":"গায়ানিজ ডলাৰ"},"symbol":"GYD","narrow":"$"},"HKD":{"displayName":{"other":"হং কং ডলাৰ"},"symbol":"HK$","narrow":"$"},"HNL":{"displayName":{"other":"হোন্দুৰান লেম্পিৰা"},"symbol":"HNL","narrow":"L"},"HRD":{"displayName":{"other":"HRD"},"symbol":"HRD","narrow":"HRD"},"HRK":{"displayName":{"other":"ক্ৰোৱেছিয়ান কুনা"},"symbol":"HRK","narrow":"kn"},"HTG":{"displayName":{"other":"হাইটিয়ান গৌৰ্ড"},"symbol":"HTG","narrow":"HTG"},"HUF":{"displayName":{"other":"হাংগেৰীয়ান ফ’ৰিণ্ট"},"symbol":"HUF","narrow":"Ft"},"IDR":{"displayName":{"other":"ইণ্ডোনেচিয়ান ৰুপিয়াহ"},"symbol":"IDR","narrow":"Rp"},"IEP":{"displayName":{"other":"IEP"},"symbol":"IEP","narrow":"IEP"},"ILP":{"displayName":{"other":"ILP"},"symbol":"ILP","narrow":"ILP"},"ILR":{"displayName":{"other":"ILR"},"symbol":"ILR","narrow":"ILR"},"ILS":{"displayName":{"other":"ইজৰাইলী নিউ শ্বেকেল"},"symbol":"₪","narrow":"₪"},"INR":{"displayName":{"other":"ভাৰতীয় ৰুপী"},"symbol":"₹","narrow":"₹"},"IQD":{"displayName":{"other":"ইৰাকী ডিনাৰ"},"symbol":"IQD","narrow":"IQD"},"IRR":{"displayName":{"other":"ইৰানীয়ান ৰিয়েল"},"symbol":"IRR","narrow":"IRR"},"ISJ":{"displayName":{"other":"ISJ"},"symbol":"ISJ","narrow":"ISJ"},"ISK":{"displayName":{"other":"আইচলেণ্ডিক ক্ৰোনাৰ","one":"আইচলেণ্ডিক ক্ৰোনা"},"symbol":"ISK","narrow":"kr"},"ITL":{"displayName":{"other":"ITL"},"symbol":"ITL","narrow":"ITL"},"JMD":{"displayName":{"other":"জামাইকান ডলাৰ"},"symbol":"JMD","narrow":"$"},"JOD":{"displayName":{"other":"জৰ্ডানিয়ান ডিনাৰ"},"symbol":"JOD","narrow":"JOD"},"JPY":{"displayName":{"other":"জাপানী য়েন"},"symbol":"JP¥","narrow":"¥"},"KES":{"displayName":{"other":"কেনিয়ান শ্বিলিং"},"symbol":"KES","narrow":"KES"},"KGS":{"displayName":{"other":"কিৰ্গিস্তানী ছোম"},"symbol":"KGS","narrow":"KGS"},"KHR":{"displayName":{"other":"কেম্ব’ডিয়ান ৰিয়েল"},"symbol":"KHR","narrow":"៛"},"KMF":{"displayName":{"other":"ক’মোৰিয়ান ফ্ৰেংক"},"symbol":"KMF","narrow":"CF"},"KPW":{"displayName":{"other":"উত্তৰ কোৰিয়াৰ ওৱান"},"symbol":"KPW","narrow":"₩"},"KRH":{"displayName":{"other":"KRH"},"symbol":"KRH","narrow":"KRH"},"KRO":{"displayName":{"other":"KRO"},"symbol":"KRO","narrow":"KRO"},"KRW":{"displayName":{"other":"দক্ষিণ কোৰিয়াৰ ওৱান"},"symbol":"₩","narrow":"₩"},"KWD":{"displayName":{"other":"কুৱেইটি ডিনাৰ"},"symbol":"KWD","narrow":"KWD"},"KYD":{"displayName":{"other":"কেইমেন দ্বীপপুঞ্জৰ ডলাৰ"},"symbol":"KYD","narrow":"$"},"KZT":{"displayName":{"other":"কাজাখস্তানী তেঞ্জ"},"symbol":"KZT","narrow":"₸"},"LAK":{"displayName":{"other":"লাওচিয়ান কিপ"},"symbol":"LAK","narrow":"₭"},"LBP":{"displayName":{"other":"লেবানীজ পাউণ্ড"},"symbol":"LBP","narrow":"L£"},"LKR":{"displayName":{"other":"শ্ৰীলংকান ৰুপী"},"symbol":"LKR","narrow":"Rs"},"LRD":{"displayName":{"other":"লাইবেৰিয়ান ডলাৰ"},"symbol":"LRD","narrow":"$"},"LSL":{"displayName":{"other":"LSL"},"symbol":"LSL","narrow":"LSL"},"LTL":{"displayName":{"other":"LTL"},"symbol":"LTL","narrow":"Lt"},"LTT":{"displayName":{"other":"LTT"},"symbol":"LTT","narrow":"LTT"},"LUC":{"displayName":{"other":"LUC"},"symbol":"LUC","narrow":"LUC"},"LUF":{"displayName":{"other":"LUF"},"symbol":"LUF","narrow":"LUF"},"LUL":{"displayName":{"other":"LUL"},"symbol":"LUL","narrow":"LUL"},"LVL":{"displayName":{"other":"LVL"},"symbol":"LVL","narrow":"Ls"},"LVR":{"displayName":{"other":"LVR"},"symbol":"LVR","narrow":"LVR"},"LYD":{"displayName":{"other":"লিবিয়ান ডিনাৰ"},"symbol":"LYD","narrow":"LYD"},"MAD":{"displayName":{"other":"মৰোক্কান ডিৰহাম"},"symbol":"MAD","narrow":"MAD"},"MAF":{"displayName":{"other":"MAF"},"symbol":"MAF","narrow":"MAF"},"MCF":{"displayName":{"other":"MCF"},"symbol":"MCF","narrow":"MCF"},"MDC":{"displayName":{"other":"MDC"},"symbol":"MDC","narrow":"MDC"},"MDL":{"displayName":{"other":"মোলডোভান লেই","one":"মোলডোভান লেউ"},"symbol":"MDL","narrow":"MDL"},"MGA":{"displayName":{"other":"মালাগাছী এৰিয়াৰী"},"symbol":"MGA","narrow":"Ar"},"MGF":{"displayName":{"other":"MGF"},"symbol":"MGF","narrow":"MGF"},"MKD":{"displayName":{"other":"মেচিডোনীয় ডেনাৰ"},"symbol":"MKD","narrow":"MKD"},"MKN":{"displayName":{"other":"MKN"},"symbol":"MKN","narrow":"MKN"},"MLF":{"displayName":{"other":"MLF"},"symbol":"MLF","narrow":"MLF"},"MMK":{"displayName":{"other":"ম্যানমাৰ কিয়াট"},"symbol":"MMK","narrow":"K"},"MNT":{"displayName":{"other":"মঙ্গোলিয়ান টুৰ্গিক"},"symbol":"MNT","narrow":"₮"},"MOP":{"displayName":{"other":"মেকানীজ পাটাকা"},"symbol":"MOP","narrow":"MOP"},"MRO":{"displayName":{"other":"ম’ৰিটেনিয়ান ঔগুইয়া (1973–2017)"},"symbol":"MRO","narrow":"MRO"},"MRU":{"displayName":{"other":"ম’ৰিটেনিয়ান ঔগুইয়া"},"symbol":"MRU","narrow":"MRU"},"MTL":{"displayName":{"other":"MTL"},"symbol":"MTL","narrow":"MTL"},"MTP":{"displayName":{"other":"MTP"},"symbol":"MTP","narrow":"MTP"},"MUR":{"displayName":{"other":"মৰিচিয়ান ৰুপী"},"symbol":"MUR","narrow":"Rs"},"MVP":{"displayName":{"other":"MVP"},"symbol":"MVP","narrow":"MVP"},"MVR":{"displayName":{"other":"মালডিভিয়ান ৰুফিয়া"},"symbol":"MVR","narrow":"MVR"},"MWK":{"displayName":{"other":"মালাউইয়ান কোৱাচা"},"symbol":"MWK","narrow":"MWK"},"MXN":{"displayName":{"other":"মেক্সিকান পেছো"},"symbol":"MX$","narrow":"$"},"MXP":{"displayName":{"other":"MXP"},"symbol":"MXP","narrow":"MXP"},"MXV":{"displayName":{"other":"MXV"},"symbol":"MXV","narrow":"MXV"},"MYR":{"displayName":{"other":"মালায়েচিয়ান ৰিংগিট"},"symbol":"MYR","narrow":"RM"},"MZE":{"displayName":{"other":"MZE"},"symbol":"MZE","narrow":"MZE"},"MZM":{"displayName":{"other":"MZM"},"symbol":"MZM","narrow":"MZM"},"MZN":{"displayName":{"other":"মোজাম্বিকান মেটিকল"},"symbol":"MZN","narrow":"MZN"},"NAD":{"displayName":{"other":"নামিবিয়ান ডলাৰ"},"symbol":"NAD","narrow":"$"},"NGN":{"displayName":{"other":"নাইজেৰিয়ান নাইৰা"},"symbol":"NGN","narrow":"₦"},"NIC":{"displayName":{"other":"NIC"},"symbol":"NIC","narrow":"NIC"},"NIO":{"displayName":{"other":"নিকাৰাগুৱান কোৰ্ডোবা"},"symbol":"NIO","narrow":"C$"},"NLG":{"displayName":{"other":"NLG"},"symbol":"NLG","narrow":"NLG"},"NOK":{"displayName":{"other":"নৰৱেজিয়ান ক্ৰোনাৰ","one":"নৰৱেজিয়ান ক্ৰোন"},"symbol":"NOK","narrow":"kr"},"NPR":{"displayName":{"other":"নেপালী ৰুপী"},"symbol":"NPR","narrow":"Rs"},"NZD":{"displayName":{"other":"নিউজিলেণ্ড ডলাৰ"},"symbol":"NZ$","narrow":"$"},"OMR":{"displayName":{"other":"ওমানি ৰিয়েল"},"symbol":"OMR","narrow":"OMR"},"PAB":{"displayName":{"other":"পানামেনিয়ান বাল্বোৱা"},"symbol":"PAB","narrow":"PAB"},"PEI":{"displayName":{"other":"PEI"},"symbol":"PEI","narrow":"PEI"},"PEN":{"displayName":{"other":"পেৰুভিয়ান ছ’ল"},"symbol":"PEN","narrow":"PEN"},"PES":{"displayName":{"other":"PES"},"symbol":"PES","narrow":"PES"},"PGK":{"displayName":{"other":"পাপুৱা নিউ গিনি কিনা"},"symbol":"PGK","narrow":"PGK"},"PHP":{"displayName":{"other":"ফিলিপিন পেইছ’"},"symbol":"PHP","narrow":"₱"},"PKR":{"displayName":{"other":"পাকিস্তানী ৰুপী"},"symbol":"PKR","narrow":"Rs"},"PLN":{"displayName":{"other":"প’লিচ জোল্টী"},"symbol":"PLN","narrow":"zł"},"PLZ":{"displayName":{"other":"PLZ"},"symbol":"PLZ","narrow":"PLZ"},"PTE":{"displayName":{"other":"PTE"},"symbol":"PTE","narrow":"PTE"},"PYG":{"displayName":{"other":"পাৰাগুয়ান গুৱাৰানি"},"symbol":"PYG","narrow":"₲"},"QAR":{"displayName":{"other":"কাটাৰি ৰিয়েল"},"symbol":"QAR","narrow":"QAR"},"RHD":{"displayName":{"other":"RHD"},"symbol":"RHD","narrow":"RHD"},"ROL":{"displayName":{"other":"ROL"},"symbol":"ROL","narrow":"ROL"},"RON":{"displayName":{"other":"ৰোমানীয় লেউ"},"symbol":"RON","narrow":"lei"},"RSD":{"displayName":{"other":"চাৰ্বিয়ান ডিনাৰ"},"symbol":"RSD","narrow":"RSD"},"RUB":{"displayName":{"other":"ৰাছিয়ান ৰুব্‌ল"},"symbol":"RUB","narrow":"₽"},"RUR":{"displayName":{"other":"RUR"},"symbol":"RUR","narrow":"р."},"RWF":{"displayName":{"other":"ৰোৱান্দান ফ্ৰেংক"},"symbol":"RWF","narrow":"RF"},"SAR":{"displayName":{"other":"চৌডি ৰিয়েল"},"symbol":"SAR","narrow":"SAR"},"SBD":{"displayName":{"other":"চোলোমোন দ্বীপপুঞ্জৰ ডলাৰ"},"symbol":"SBD","narrow":"$"},"SCR":{"displayName":{"other":"ছেচেলৱা ৰুপী"},"symbol":"SCR","narrow":"SCR"},"SDD":{"displayName":{"other":"SDD"},"symbol":"SDD","narrow":"SDD"},"SDG":{"displayName":{"other":"চুডানী পাউণ্ড"},"symbol":"SDG","narrow":"SDG"},"SDP":{"displayName":{"other":"SDP"},"symbol":"SDP","narrow":"SDP"},"SEK":{"displayName":{"other":"চুইডিছ ক্ৰোনোৰ","one":"চুইডিছ ক্ৰোনা"},"symbol":"SEK","narrow":"kr"},"SGD":{"displayName":{"other":"ছিংগাপুৰ ডলাৰ"},"symbol":"SGD","narrow":"$"},"SHP":{"displayName":{"other":"ছেইণ্ট হেলেনা পাউণ্ড"},"symbol":"SHP","narrow":"£"},"SIT":{"displayName":{"other":"SIT"},"symbol":"SIT","narrow":"SIT"},"SKK":{"displayName":{"other":"SKK"},"symbol":"SKK","narrow":"SKK"},"SLL":{"displayName":{"other":"চিয়েৰা লিঅ’নৰ লিঅ’ন"},"symbol":"SLL","narrow":"SLL"},"SOS":{"displayName":{"other":"চোমালি শ্বিলিং"},"symbol":"SOS","narrow":"SOS"},"SRD":{"displayName":{"other":"ছুৰিনামী ডলাৰ"},"symbol":"SRD","narrow":"$"},"SRG":{"displayName":{"other":"SRG"},"symbol":"SRG","narrow":"SRG"},"SSP":{"displayName":{"other":"দক্ষিণ চুডানীজ পাউণ্ড"},"symbol":"SSP","narrow":"£"},"STD":{"displayName":{"other":"চাও টোমে আৰু প্ৰিনচিপে ডোব্‌ৰা (1977–2017)"},"symbol":"STD","narrow":"STD"},"STN":{"displayName":{"other":"চাও টোমে আৰু প্ৰিনচিপে ডোব্‌ৰা"},"symbol":"STN","narrow":"Db"},"SUR":{"displayName":{"other":"SUR"},"symbol":"SUR","narrow":"SUR"},"SVC":{"displayName":{"other":"SVC"},"symbol":"SVC","narrow":"SVC"},"SYP":{"displayName":{"other":"চিৰিয়ান পাউণ্ড"},"symbol":"SYP","narrow":"£"},"SZL":{"displayName":{"other":"স্বাজি এমেলানজেনি","one":"স্বাজি লিলেংগেনি"},"symbol":"SZL","narrow":"SZL"},"THB":{"displayName":{"other":"থাই বাত"},"symbol":"THB","narrow":"฿"},"TJR":{"displayName":{"other":"TJR"},"symbol":"TJR","narrow":"TJR"},"TJS":{"displayName":{"other":"তাজিকিস্তানী ছোমনি"},"symbol":"TJS","narrow":"TJS"},"TMM":{"displayName":{"other":"TMM"},"symbol":"TMM","narrow":"TMM"},"TMT":{"displayName":{"other":"তুৰ্কমেনিস্তানী মানাত"},"symbol":"TMT","narrow":"TMT"},"TND":{"displayName":{"other":"টুনিচিয়ান ডিনাৰ"},"symbol":"TND","narrow":"TND"},"TOP":{"displayName":{"other":"টংগান পাআংগা"},"symbol":"TOP","narrow":"T$"},"TPE":{"displayName":{"other":"TPE"},"symbol":"TPE","narrow":"TPE"},"TRL":{"displayName":{"other":"TRL"},"symbol":"TRL","narrow":"TRL"},"TRY":{"displayName":{"other":"তুৰ্কীৰ লিৰা"},"symbol":"TRY","narrow":"₺"},"TTD":{"displayName":{"other":"ট্ৰিনিডাড আৰু টোবাগো ডলাৰ"},"symbol":"TTD","narrow":"$"},"TWD":{"displayName":{"other":"নিউ টাইৱান ডলাৰ"},"symbol":"NT$","narrow":"$"},"TZS":{"displayName":{"other":"টানজানিয়ান শ্বিলিং"},"symbol":"TZS","narrow":"TZS"},"UAH":{"displayName":{"other":"ইউক্ৰেইনীয় হৃভনিয়া"},"symbol":"UAH","narrow":"₴"},"UAK":{"displayName":{"other":"UAK"},"symbol":"UAK","narrow":"UAK"},"UGS":{"displayName":{"other":"UGS"},"symbol":"UGS","narrow":"UGS"},"UGX":{"displayName":{"other":"উগাণ্ডান শ্বিলিং"},"symbol":"UGX","narrow":"UGX"},"USD":{"displayName":{"other":"ইউ. এছ. ডলাৰ"},"symbol":"US$","narrow":"$"},"USN":{"displayName":{"other":"USN"},"symbol":"USN","narrow":"USN"},"USS":{"displayName":{"other":"USS"},"symbol":"USS","narrow":"USS"},"UYI":{"displayName":{"other":"UYI"},"symbol":"UYI","narrow":"UYI"},"UYP":{"displayName":{"other":"UYP"},"symbol":"UYP","narrow":"UYP"},"UYU":{"displayName":{"other":"উৰুগুৱেয়ান পেছো"},"symbol":"UYU","narrow":"$"},"UYW":{"displayName":{"other":"UYW"},"symbol":"UYW","narrow":"UYW"},"UZS":{"displayName":{"other":"উজবেকিস্তানী ছোম"},"symbol":"UZS","narrow":"UZS"},"VEB":{"displayName":{"other":"ভেনিজুৱেলান বলিভাৰ (1871–2008)"},"symbol":"VEB","narrow":"VEB"},"VEF":{"displayName":{"other":"ভেনিজুৱেলান বলিভাৰ (2008–2018)"},"symbol":"VEF","narrow":"Bs"},"VES":{"displayName":{"other":"ভেনিজুৱেলান ব’লিভাৰছ্","one":"ভেনিজুৱেলান ব’লিভাৰ"},"symbol":"VES","narrow":"VES"},"VND":{"displayName":{"other":"ভিয়েটনামীজ ডং"},"symbol":"₫","narrow":"₫"},"VNN":{"displayName":{"other":"VNN"},"symbol":"VNN","narrow":"VNN"},"VUV":{"displayName":{"other":"ভানাটুৰ ভাটু"},"symbol":"VUV","narrow":"VUV"},"WST":{"displayName":{"other":"ছামোৱান টালা"},"symbol":"WST","narrow":"WST"},"XAF":{"displayName":{"other":"মধ্য আফ্ৰিকান CFA ফ্ৰেংক"},"symbol":"FCFA","narrow":"FCFA"},"XAG":{"displayName":{"other":"XAG"},"symbol":"XAG","narrow":"XAG"},"XAU":{"displayName":{"other":"XAU"},"symbol":"XAU","narrow":"XAU"},"XBA":{"displayName":{"other":"XBA"},"symbol":"XBA","narrow":"XBA"},"XBB":{"displayName":{"other":"XBB"},"symbol":"XBB","narrow":"XBB"},"XBC":{"displayName":{"other":"XBC"},"symbol":"XBC","narrow":"XBC"},"XBD":{"displayName":{"other":"XBD"},"symbol":"XBD","narrow":"XBD"},"XCD":{"displayName":{"other":"ইষ্ট কেৰিবিয়ান ডলাৰ"},"symbol":"EC$","narrow":"$"},"XDR":{"displayName":{"other":"XDR"},"symbol":"XDR","narrow":"XDR"},"XEU":{"displayName":{"other":"XEU"},"symbol":"XEU","narrow":"XEU"},"XFO":{"displayName":{"other":"XFO"},"symbol":"XFO","narrow":"XFO"},"XFU":{"displayName":{"other":"XFU"},"symbol":"XFU","narrow":"XFU"},"XOF":{"displayName":{"other":"পশ্চিম আফ্ৰিকান CFA ফ্ৰেংক"},"symbol":"F CFA","narrow":"F CFA"},"XPD":{"displayName":{"other":"XPD"},"symbol":"XPD","narrow":"XPD"},"XPF":{"displayName":{"other":"CFP ফ্ৰেংক"},"symbol":"CFPF","narrow":"CFPF"},"XPT":{"displayName":{"other":"XPT"},"symbol":"XPT","narrow":"XPT"},"XRE":{"displayName":{"other":"XRE"},"symbol":"XRE","narrow":"XRE"},"XSU":{"displayName":{"other":"XSU"},"symbol":"XSU","narrow":"XSU"},"XTS":{"displayName":{"other":"XTS"},"symbol":"XTS","narrow":"XTS"},"XUA":{"displayName":{"other":"XUA"},"symbol":"XUA","narrow":"XUA"},"XXX":{"displayName":{"other":"(অজ্ঞাত মুদ্ৰা)","one":"(মুদ্ৰাৰ একক অজ্ঞাত)"},"symbol":"¤","narrow":"¤"},"YDD":{"displayName":{"other":"YDD"},"symbol":"YDD","narrow":"YDD"},"YER":{"displayName":{"other":"য়েমেনী ৰিয়েল"},"symbol":"YER","narrow":"YER"},"YUD":{"displayName":{"other":"YUD"},"symbol":"YUD","narrow":"YUD"},"YUM":{"displayName":{"other":"YUM"},"symbol":"YUM","narrow":"YUM"},"YUN":{"displayName":{"other":"YUN"},"symbol":"YUN","narrow":"YUN"},"YUR":{"displayName":{"other":"YUR"},"symbol":"YUR","narrow":"YUR"},"ZAL":{"displayName":{"other":"ZAL"},"symbol":"ZAL","narrow":"ZAL"},"ZAR":{"displayName":{"other":"দক্ষিণ আফ্ৰিকাৰ ৰাণ্ড"},"symbol":"ZAR","narrow":"R"},"ZMK":{"displayName":{"other":"ZMK"},"symbol":"ZMK","narrow":"ZMK"},"ZMW":{"displayName":{"other":"জাম্বিয়ান কোৱাচা"},"symbol":"ZMW","narrow":"ZK"},"ZRN":{"displayName":{"other":"ZRN"},"symbol":"ZRN","narrow":"ZRN"},"ZRZ":{"displayName":{"other":"ZRZ"},"symbol":"ZRZ","narrow":"ZRZ"},"ZWD":{"displayName":{"other":"ZWD"},"symbol":"ZWD","narrow":"ZWD"},"ZWL":{"displayName":{"other":"ZWL"},"symbol":"ZWL","narrow":"ZWL"},"ZWR":{"displayName":{"other":"ZWR"},"symbol":"ZWR","narrow":"ZWR"}},"numbers":{"nu":["beng","latn"],"symbols":{"beng":{"decimal":".","group":",","list":";","percentSign":"%","plusSign":"+","minusSign":"-","approximatelySign":"~","exponential":"E","superscriptingExponent":"×","perMille":"‰","infinity":"∞","nan":"NaN","timeSeparator":":"},"latn":{"decimal":".","group":",","list":";","percentSign":"%","plusSign":"+","minusSign":"-","approximatelySign":"~","exponential":"E","superscriptingExponent":"×","perMille":"‰","infinity":"∞","nan":"NaN","timeSeparator":":"}},"percent":{"beng":"#,##,##0%","latn":"#,##,##0%"},"decimal":{"beng":{"standard":"#,##,##0.###","long":{"1000":{"other":"0 হাজাৰ"},"10000":{"other":"00 হাজাৰ"},"100000":{"other":"0 লাখ"},"1000000":{"other":"0 নিযুত"},"10000000":{"other":"00 নিযুত"},"100000000":{"other":"000 নিযুত"},"1000000000":{"other":"0 শত কোটি"},"10000000000":{"other":"00 শত কোটি"},"100000000000":{"other":"000 শত কোটি"},"1000000000000":{"other":"0 শত পৰাৰ্দ্ধ"},"10000000000000":{"other":"00 শত পৰাৰ্দ্ধ"},"100000000000000":{"other":"000 শত পৰাৰ্দ্ধ"}},"short":{"1000":{"other":"0 হাজাৰ"},"10000":{"other":"00 হাজাৰ"},"100000":{"other":"0 লাখ"},"1000000":{"other":"0 নিযুত"},"10000000":{"other":"00 নিযুত"},"100000000":{"other":"000 নিঃ"},"1000000000":{"other":"0 শঃ কোঃ"},"10000000000":{"other":"00 শঃ কোঃ"},"100000000000":{"other":"000 শঃ কঃ"},"1000000000000":{"other":"0 শঃ পঃ"},"10000000000000":{"other":"00 শঃ পঃ"},"100000000000000":{"other":"000 শঃ পঃ"}}},"latn":{"standard":"#,##,##0.###","long":{"1000":{"other":"0 হাজাৰ"},"10000":{"other":"00 হাজাৰ"},"100000":{"other":"0 লাখ"},"1000000":{"other":"0 নিযুত"},"10000000":{"other":"00 নিযুত"},"100000000":{"other":"000 নিযুত"},"1000000000":{"other":"0 শত কোটি"},"10000000000":{"other":"00 শত কোটি"},"100000000000":{"other":"000 শত কোটি"},"1000000000000":{"other":"0 শত পৰাৰ্দ্ধ"},"10000000000000":{"other":"00 শত পৰাৰ্দ্ধ"},"100000000000000":{"other":"000 শত পৰাৰ্দ্ধ"}},"short":{"1000":{"other":"0 হাজাৰ"},"10000":{"other":"00 হাজাৰ"},"100000":{"other":"0 লাখ"},"1000000":{"other":"0 নিযুত"},"10000000":{"other":"00 নিযুত"},"100000000":{"other":"000 নিঃ"},"1000000000":{"other":"0 শঃ কোঃ"},"10000000000":{"other":"00 শঃ কোঃ"},"100000000000":{"other":"000 শঃ কঃ"},"1000000000000":{"other":"0 শঃ পঃ"},"10000000000000":{"other":"00 শঃ পঃ"},"100000000000000":{"other":"000 শঃ পঃ"}}}},"currency":{"beng":{"currencySpacing":{"beforeInsertBetween":" ","afterInsertBetween":" "},"standard":"¤ #,##,##0.00","accounting":"¤ #,##,##0.00","unitPattern":"{0} {1}","short":{"1000":{"other":"¤ 0 হাজাৰ"},"10000":{"other":"¤ 00 হাজাৰ"},"100000":{"other":"¤ 000 লাখ"},"1000000":{"other":"¤ 0 নিযুত"},"10000000":{"other":"¤ 00 নিযুত"},"100000000":{"other":"¤ 000 নিযুত"},"1000000000":{"other":"¤ 0 শত কোটি"},"10000000000":{"other":"¤ 00 শত কোটি"},"100000000000":{"other":"¤ 000 শত কোটি"},"1000000000000":{"other":"¤ 0 শত পৰাৰ্দ্ধ"},"10000000000000":{"other":"¤ 00 শত পৰাৰ্দ্ধ"},"100000000000000":{"other":"¤ 000 শত পৰাৰ্দ্ধ"}}},"latn":{"currencySpacing":{"beforeInsertBetween":" ","afterInsertBetween":" "},"standard":"¤ #,##,##0.00","accounting":"¤ #,##,##0.00","unitPattern":"{0} {1}","short":{"1000":{"other":"¤ 0 হাজাৰ"},"10000":{"other":"¤ 00 হাজাৰ"},"100000":{"other":"¤ 000 লাখ"},"1000000":{"other":"¤ 0 নিযুত"},"10000000":{"other":"¤ 00 নিযুত"},"100000000":{"other":"¤ 000 নিযুত"},"1000000000":{"other":"¤ 0 শত কোটি"},"10000000000":{"other":"¤ 00 শত কোটি"},"100000000000":{"other":"¤ 000 শত কোটি"},"1000000000000":{"other":"¤ 0 শত পৰাৰ্দ্ধ"},"10000000000000":{"other":"¤ 00 শত পৰাৰ্দ্ধ"},"100000000000000":{"other":"¤ 000 শত পৰাৰ্দ্ধ"}}}}},"nu":["beng","latn"]},"locale":"as"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

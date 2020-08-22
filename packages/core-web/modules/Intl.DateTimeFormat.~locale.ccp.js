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
if (!("Intl"in self&&"DateTimeFormat"in self.Intl&&"formatToParts"in self.Intl.DateTimeFormat&&self.Intl.DateTimeFormat.supportedLocalesOf("ccp").length
)) {
// Intl.DateTimeFormat.~locale.ccp
/* @generated */	
  // prettier-ignore
  if (Intl.DateTimeFormat && typeof Intl.DateTimeFormat.__addLocaleData === 'function') {
    Intl.DateTimeFormat.__addLocaleData({"data":{"ccp":{"am":"AM","pm":"PM","weekday":{"narrow":["𑄢𑄧","𑄥𑄧","𑄟𑄧","𑄝𑄪","𑄝𑄳𑄢𑄨","𑄥𑄪","𑄥𑄧"],"short":["𑄢𑄧𑄝𑄨","𑄥𑄧𑄟𑄴","𑄟𑄧𑄁𑄉𑄧𑄣𑄴","𑄝𑄪𑄖𑄴","𑄝𑄳𑄢𑄨𑄥𑄪𑄛𑄴","𑄥𑄪𑄇𑄴𑄇𑄮𑄢𑄴","𑄥𑄧𑄚𑄨"],"long":["𑄢𑄧𑄝𑄨𑄝𑄢𑄴","𑄥𑄧𑄟𑄴𑄝𑄢𑄴","𑄟𑄧𑄁𑄉𑄧𑄣𑄴𑄝𑄢𑄴","𑄝𑄪𑄖𑄴𑄝𑄢𑄴","𑄝𑄳𑄢𑄨𑄥𑄪𑄛𑄴𑄝𑄢𑄴","𑄥𑄪𑄇𑄴𑄇𑄮𑄢𑄴𑄝𑄢𑄴","𑄥𑄧𑄚𑄨𑄝𑄢𑄴"]},"era":{"narrow":{"BC":"𑄈𑄳𑄢𑄨𑄌𑄴𑄑𑄴𑄛𑄫𑄢𑄴𑄝𑄧","AD":"𑄈𑄳𑄢𑄨𑄌𑄴𑄑𑄛𑄴𑄘𑄧"},"short":{"BC":"𑄈𑄳𑄢𑄨𑄌𑄴𑄑𑄴𑄛𑄫𑄢𑄴𑄝𑄧","AD":"𑄈𑄳𑄢𑄨𑄌𑄴𑄑𑄛𑄴𑄘𑄧"},"long":{"BC":"𑄈𑄳𑄢𑄨𑄌𑄴𑄑𑄴𑄛𑄫𑄢𑄴𑄝𑄧","AD":"𑄈𑄳𑄢𑄨𑄌𑄴𑄑𑄛𑄴𑄘𑄧"}},"month":{"narrow":["𑄎","𑄜𑄬","𑄟","𑄃𑄬","𑄟𑄬","𑄎𑄪𑄚𑄴","𑄎𑄪","𑄃","𑄥𑄬","𑄃𑄧","𑄚𑄧","𑄓𑄨"],"short":["𑄎𑄚𑄪","𑄜𑄬𑄛𑄴","𑄟𑄢𑄴𑄌𑄧","𑄃𑄬𑄛𑄳𑄢𑄨𑄣𑄴","𑄟𑄬","𑄎𑄪𑄚𑄴","𑄎𑄪𑄣𑄭","𑄃𑄉𑄧𑄌𑄴𑄑𑄴","𑄥𑄬𑄛𑄴𑄑𑄬𑄟𑄴𑄝𑄧𑄢𑄴","𑄃𑄧𑄇𑄴𑄑𑄮𑄝𑄧𑄢𑄴","𑄚𑄧𑄞𑄬𑄟𑄴𑄝𑄧𑄢𑄴","𑄓𑄨𑄥𑄬𑄟𑄴𑄝𑄢𑄴"],"long":["𑄎𑄚𑄪𑄠𑄢𑄨","𑄜𑄬𑄛𑄴𑄝𑄳𑄢𑄪𑄠𑄢𑄨","𑄟𑄢𑄴𑄌𑄧","𑄃𑄬𑄛𑄳𑄢𑄨𑄣𑄴","𑄟𑄬","𑄎𑄪𑄚𑄴","𑄎𑄪𑄣𑄭","𑄃𑄉𑄧𑄌𑄴𑄑𑄴","𑄥𑄬𑄛𑄴𑄑𑄬𑄟𑄴𑄝𑄧𑄢𑄴","𑄃𑄧𑄇𑄴𑄑𑄬𑄝𑄧𑄢𑄴","𑄚𑄧𑄞𑄬𑄟𑄴𑄝𑄧𑄢𑄴","𑄓𑄨𑄥𑄬𑄟𑄴𑄝𑄧𑄢𑄴"]},"timeZoneName":{"Asia/Kabul":{"long":["𑄃𑄛𑄴𑄉𑄚𑄨𑄌𑄴𑄖𑄚𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄛𑄴𑄉𑄚𑄨𑄌𑄴𑄖𑄚𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Africa/Maputo":{"long":["𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄜𑄳𑄢𑄨𑄇 𑄃𑄧𑄇𑄴𑄖𑄧","𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄜𑄳𑄢𑄨𑄇 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Africa/Bujumbura":{"long":["𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄜𑄳𑄢𑄨𑄇 𑄃𑄧𑄇𑄴𑄖𑄧","𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄜𑄳𑄢𑄨𑄇 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Africa/Gaborone":{"long":["𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄜𑄳𑄢𑄨𑄇 𑄃𑄧𑄇𑄴𑄖𑄧","𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄜𑄳𑄢𑄨𑄇 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Africa/Lubumbashi":{"long":["𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄜𑄳𑄢𑄨𑄇 𑄃𑄧𑄇𑄴𑄖𑄧","𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄜𑄳𑄢𑄨𑄇 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Africa/Blantyre":{"long":["𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄜𑄳𑄢𑄨𑄇 𑄃𑄧𑄇𑄴𑄖𑄧","𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄜𑄳𑄢𑄨𑄇 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Africa/Kigali":{"long":["𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄜𑄳𑄢𑄨𑄇 𑄃𑄧𑄇𑄴𑄖𑄧","𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄜𑄳𑄢𑄨𑄇 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Africa/Lusaka":{"long":["𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄜𑄳𑄢𑄨𑄇 𑄃𑄧𑄇𑄴𑄖𑄧","𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄜𑄳𑄢𑄨𑄇 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Africa/Harare":{"long":["𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄜𑄳𑄢𑄨𑄇 𑄃𑄧𑄇𑄴𑄖𑄧","𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄜𑄳𑄢𑄨𑄇 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Africa/Nairobi":{"long":["𑄛𑄪𑄉𑄬𑄘𑄨 𑄃𑄜𑄳𑄢𑄨𑄇 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄪𑄉𑄬𑄘𑄨 𑄃𑄜𑄳𑄢𑄨𑄇 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Africa/Djibouti":{"long":["𑄛𑄪𑄉𑄬𑄘𑄨 𑄃𑄜𑄳𑄢𑄨𑄇 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄪𑄉𑄬𑄘𑄨 𑄃𑄜𑄳𑄢𑄨𑄇 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Africa/Asmera":{"long":["𑄛𑄪𑄉𑄬𑄘𑄨 𑄃𑄜𑄳𑄢𑄨𑄇 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄪𑄉𑄬𑄘𑄨 𑄃𑄜𑄳𑄢𑄨𑄇 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Africa/Addis_Ababa":{"long":["𑄛𑄪𑄉𑄬𑄘𑄨 𑄃𑄜𑄳𑄢𑄨𑄇 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄪𑄉𑄬𑄘𑄨 𑄃𑄜𑄳𑄢𑄨𑄇 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Indian/Comoro":{"long":["𑄛𑄪𑄉𑄬𑄘𑄨 𑄃𑄜𑄳𑄢𑄨𑄇 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄪𑄉𑄬𑄘𑄨 𑄃𑄜𑄳𑄢𑄨𑄇 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Indian/Antananarivo":{"long":["𑄛𑄪𑄉𑄬𑄘𑄨 𑄃𑄜𑄳𑄢𑄨𑄇 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄪𑄉𑄬𑄘𑄨 𑄃𑄜𑄳𑄢𑄨𑄇 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Africa/Mogadishu":{"long":["𑄛𑄪𑄉𑄬𑄘𑄨 𑄃𑄜𑄳𑄢𑄨𑄇 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄪𑄉𑄬𑄘𑄨 𑄃𑄜𑄳𑄢𑄨𑄇 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Africa/Dar_es_Salaam":{"long":["𑄛𑄪𑄉𑄬𑄘𑄨 𑄃𑄜𑄳𑄢𑄨𑄇 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄪𑄉𑄬𑄘𑄨 𑄃𑄜𑄳𑄢𑄨𑄇 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Africa/Kampala":{"long":["𑄛𑄪𑄉𑄬𑄘𑄨 𑄃𑄜𑄳𑄢𑄨𑄇 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄪𑄉𑄬𑄘𑄨 𑄃𑄜𑄳𑄢𑄨𑄇 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Indian/Mayotte":{"long":["𑄛𑄪𑄉𑄬𑄘𑄨 𑄃𑄜𑄳𑄢𑄨𑄇 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄪𑄉𑄬𑄘𑄨 𑄃𑄜𑄳𑄢𑄨𑄇 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Africa/Johannesburg":{"long":["𑄘𑄧𑄉𑄨𑄚𑄴 𑄃𑄜𑄳𑄢𑄨𑄇 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄘𑄧𑄉𑄨𑄚𑄴 𑄃𑄜𑄳𑄢𑄨𑄇 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Africa/Maseru":{"long":["𑄘𑄧𑄉𑄨𑄚𑄴 𑄃𑄜𑄳𑄢𑄨𑄇 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄘𑄧𑄉𑄨𑄚𑄴 𑄃𑄜𑄳𑄢𑄨𑄇 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Africa/Mbabane":{"long":["𑄘𑄧𑄉𑄨𑄚𑄴 𑄃𑄜𑄳𑄢𑄨𑄇 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄘𑄧𑄉𑄨𑄚𑄴 𑄃𑄜𑄳𑄢𑄨𑄇 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Africa/Lagos":{"long":["𑄛𑄧𑄏𑄨𑄟𑄬𑄘𑄨 𑄃𑄜𑄳𑄢𑄨𑄇 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄧𑄏𑄨𑄟𑄬𑄘𑄨 𑄃𑄜𑄳𑄢𑄨𑄇 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Africa/Luanda":{"long":["𑄛𑄧𑄏𑄨𑄟𑄬𑄘𑄨 𑄃𑄜𑄳𑄢𑄨𑄇 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄧𑄏𑄨𑄟𑄬𑄘𑄨 𑄃𑄜𑄳𑄢𑄨𑄇 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Africa/Porto-Novo":{"long":["𑄛𑄧𑄏𑄨𑄟𑄬𑄘𑄨 𑄃𑄜𑄳𑄢𑄨𑄇 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄧𑄏𑄨𑄟𑄬𑄘𑄨 𑄃𑄜𑄳𑄢𑄨𑄇 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Africa/Kinshasa":{"long":["𑄛𑄧𑄏𑄨𑄟𑄬𑄘𑄨 𑄃𑄜𑄳𑄢𑄨𑄇 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄧𑄏𑄨𑄟𑄬𑄘𑄨 𑄃𑄜𑄳𑄢𑄨𑄇 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Africa/Bangui":{"long":["𑄛𑄧𑄏𑄨𑄟𑄬𑄘𑄨 𑄃𑄜𑄳𑄢𑄨𑄇 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄧𑄏𑄨𑄟𑄬𑄘𑄨 𑄃𑄜𑄳𑄢𑄨𑄇 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Africa/Brazzaville":{"long":["𑄛𑄧𑄏𑄨𑄟𑄬𑄘𑄨 𑄃𑄜𑄳𑄢𑄨𑄇 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄧𑄏𑄨𑄟𑄬𑄘𑄨 𑄃𑄜𑄳𑄢𑄨𑄇 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Africa/Douala":{"long":["𑄛𑄧𑄏𑄨𑄟𑄬𑄘𑄨 𑄃𑄜𑄳𑄢𑄨𑄇 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄧𑄏𑄨𑄟𑄬𑄘𑄨 𑄃𑄜𑄳𑄢𑄨𑄇 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Africa/Libreville":{"long":["𑄛𑄧𑄏𑄨𑄟𑄬𑄘𑄨 𑄃𑄜𑄳𑄢𑄨𑄇 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄧𑄏𑄨𑄟𑄬𑄘𑄨 𑄃𑄜𑄳𑄢𑄨𑄇 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Africa/Malabo":{"long":["𑄛𑄧𑄏𑄨𑄟𑄬𑄘𑄨 𑄃𑄜𑄳𑄢𑄨𑄇 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄧𑄏𑄨𑄟𑄬𑄘𑄨 𑄃𑄜𑄳𑄢𑄨𑄇 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Africa/Niamey":{"long":["𑄛𑄧𑄏𑄨𑄟𑄬𑄘𑄨 𑄃𑄜𑄳𑄢𑄨𑄇 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄧𑄏𑄨𑄟𑄬𑄘𑄨 𑄃𑄜𑄳𑄢𑄨𑄇 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Africa/Ndjamena":{"long":["𑄛𑄧𑄏𑄨𑄟𑄬𑄘𑄨 𑄃𑄜𑄳𑄢𑄨𑄇 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄧𑄏𑄨𑄟𑄬𑄘𑄨 𑄃𑄜𑄳𑄢𑄨𑄇 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Aqtobe":{"long":["𑄛𑄧𑄏𑄨𑄟𑄬𑄘𑄨 𑄇𑄎𑄇𑄴𑄥𑄳𑄖𑄚𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄧𑄏𑄨𑄟𑄬𑄘𑄨 𑄇𑄎𑄇𑄴𑄥𑄳𑄖𑄚𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Juneau":{"long":["𑄃𑄣𑄌𑄴𑄇 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄣𑄌𑄴𑄇 𑄘𑄨𑄚𑄮𑄃𑄣𑄮 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Almaty":{"long":["𑄛𑄪𑄉𑄬𑄘𑄨 𑄇𑄎𑄇𑄴𑄥𑄳𑄖𑄚𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄪𑄉𑄬𑄘𑄨 𑄇𑄎𑄇𑄴𑄥𑄳𑄖𑄚𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Manaus":{"long":["𑄃𑄳𑄠𑄟𑄎𑄧𑄚𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄳𑄠𑄟𑄎𑄧𑄚𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Chicago":{"long":["𑄃𑄏𑄧𑄣𑄴 𑄉𑄧𑄢𑄳𑄦 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄏𑄧𑄣𑄴 𑄉𑄧𑄢𑄳𑄦 𑄘𑄨𑄚𑄮𑄃𑄣𑄮 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Belize":{"long":["𑄃𑄏𑄧𑄣𑄴 𑄉𑄧𑄢𑄳𑄦 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄏𑄧𑄣𑄴 𑄉𑄧𑄢𑄳𑄦 𑄘𑄨𑄚𑄮𑄃𑄣𑄮 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Winnipeg":{"long":["𑄃𑄏𑄧𑄣𑄴 𑄉𑄧𑄢𑄳𑄦 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄏𑄧𑄣𑄴 𑄉𑄧𑄢𑄳𑄦 𑄘𑄨𑄚𑄮𑄃𑄣𑄮 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Costa_Rica":{"long":["𑄃𑄏𑄧𑄣𑄴 𑄉𑄧𑄢𑄳𑄦 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄏𑄧𑄣𑄴 𑄉𑄧𑄢𑄳𑄦 𑄘𑄨𑄚𑄮𑄃𑄣𑄮 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Guatemala":{"long":["𑄃𑄏𑄧𑄣𑄴 𑄉𑄧𑄢𑄳𑄦 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄏𑄧𑄣𑄴 𑄉𑄧𑄢𑄳𑄦 𑄘𑄨𑄚𑄮𑄃𑄣𑄮 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Tegucigalpa":{"long":["𑄃𑄏𑄧𑄣𑄴 𑄉𑄧𑄢𑄳𑄦 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄏𑄧𑄣𑄴 𑄉𑄧𑄢𑄳𑄦 𑄘𑄨𑄚𑄮𑄃𑄣𑄮 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Mexico_City":{"long":["𑄃𑄏𑄧𑄣𑄴 𑄉𑄧𑄢𑄳𑄦 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄏𑄧𑄣𑄴 𑄉𑄧𑄢𑄳𑄦 𑄘𑄨𑄚𑄮𑄃𑄣𑄮 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/El_Salvador":{"long":["𑄃𑄏𑄧𑄣𑄴 𑄉𑄧𑄢𑄳𑄦 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄏𑄧𑄣𑄴 𑄉𑄧𑄢𑄳𑄦 𑄘𑄨𑄚𑄮𑄃𑄣𑄮 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/New_York":{"long":["𑄛𑄪𑄉𑄮 𑄞𑄨𑄘𑄬𑄢𑄴 𑄛𑄳𑄢𑄧𑄟𑄚𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄪𑄉𑄮 𑄞𑄨𑄘𑄬𑄢𑄴 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Nassau":{"long":["𑄛𑄪𑄉𑄮 𑄞𑄨𑄘𑄬𑄢𑄴 𑄛𑄳𑄢𑄧𑄟𑄚𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄪𑄉𑄮 𑄞𑄨𑄘𑄬𑄢𑄴 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Toronto":{"long":["𑄛𑄪𑄉𑄮 𑄞𑄨𑄘𑄬𑄢𑄴 𑄛𑄳𑄢𑄧𑄟𑄚𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄪𑄉𑄮 𑄞𑄨𑄘𑄬𑄢𑄴 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Port-au-Prince":{"long":["𑄛𑄪𑄉𑄮 𑄞𑄨𑄘𑄬𑄢𑄴 𑄛𑄳𑄢𑄧𑄟𑄚𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄪𑄉𑄮 𑄞𑄨𑄘𑄬𑄢𑄴 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Jamaica":{"long":["𑄛𑄪𑄉𑄮 𑄞𑄨𑄘𑄬𑄢𑄴 𑄛𑄳𑄢𑄧𑄟𑄚𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄪𑄉𑄮 𑄞𑄨𑄘𑄬𑄢𑄴 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Cayman":{"long":["𑄛𑄪𑄉𑄮 𑄞𑄨𑄘𑄬𑄢𑄴 𑄛𑄳𑄢𑄧𑄟𑄚𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄪𑄉𑄮 𑄞𑄨𑄘𑄬𑄢𑄴 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Panama":{"long":["𑄛𑄪𑄉𑄮 𑄞𑄨𑄘𑄬𑄢𑄴 𑄛𑄳𑄢𑄧𑄟𑄚𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄪𑄉𑄮 𑄞𑄨𑄘𑄬𑄢𑄴 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Denver":{"long":["𑄦𑄨𑄣𑄧𑄧𑄱 𑄞𑄨𑄘𑄬𑄢𑄴 𑄛𑄳𑄢𑄧𑄟𑄚𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄦𑄨𑄣𑄧𑄧𑄱 𑄞𑄨𑄘𑄬𑄢𑄴 𑄘𑄨𑄚𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Edmonton":{"long":["𑄦𑄨𑄣𑄧𑄧𑄱 𑄞𑄨𑄘𑄬𑄢𑄴 𑄛𑄳𑄢𑄧𑄟𑄚𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄦𑄨𑄣𑄧𑄧𑄱 𑄞𑄨𑄘𑄬𑄢𑄴 𑄘𑄨𑄚𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Hermosillo":{"long":["𑄦𑄨𑄣𑄧𑄧𑄱 𑄞𑄨𑄘𑄬𑄢𑄴 𑄛𑄳𑄢𑄧𑄟𑄚𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄦𑄨𑄣𑄧𑄧𑄱 𑄞𑄨𑄘𑄬𑄢𑄴 𑄘𑄨𑄚𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Los_Angeles":{"long":["𑄛𑄳𑄢𑄧𑄥𑄚𑄴𑄖𑄧 𑄟𑄧𑄦𑄥𑄉𑄧𑄢𑄧𑄢𑄴 𑄞𑄨𑄘𑄬𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄳𑄢𑄧𑄥𑄚𑄴𑄖𑄧 𑄟𑄧𑄦𑄥𑄉𑄧𑄢𑄧𑄢𑄴 𑄞𑄨𑄘𑄬𑄢𑄴 𑄘𑄨𑄚𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Vancouver":{"long":["𑄛𑄳𑄢𑄧𑄥𑄚𑄴𑄖𑄧 𑄟𑄧𑄦𑄥𑄉𑄧𑄢𑄧𑄢𑄴 𑄞𑄨𑄘𑄬𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄳𑄢𑄧𑄥𑄚𑄴𑄖𑄧 𑄟𑄧𑄦𑄥𑄉𑄧𑄢𑄧𑄢𑄴 𑄞𑄨𑄘𑄬𑄢𑄴 𑄘𑄨𑄚𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Tijuana":{"long":["𑄛𑄳𑄢𑄧𑄥𑄚𑄴𑄖𑄧 𑄟𑄧𑄦𑄥𑄉𑄧𑄢𑄧𑄢𑄴 𑄞𑄨𑄘𑄬𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄳𑄢𑄧𑄥𑄚𑄴𑄖𑄧 𑄟𑄧𑄦𑄥𑄉𑄧𑄢𑄧𑄢𑄴 𑄞𑄨𑄘𑄬𑄢𑄴 𑄘𑄨𑄚𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Anadyr":{"long":["𑄃𑄧𑄚𑄴𑄘𑄠𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄧𑄚𑄴𑄘𑄠𑄢𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Pacific/Apia":{"long":["𑄃𑄧𑄛𑄨𑄠 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄧𑄛𑄨𑄠 𑄘𑄨𑄚𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Riyadh":{"long":["𑄃𑄢𑄧𑄝𑄨 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄢𑄧𑄝𑄨 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Bahrain":{"long":["𑄃𑄢𑄧𑄝𑄨 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄢𑄧𑄝𑄨 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Baghdad":{"long":["𑄃𑄢𑄧𑄝𑄨 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄢𑄧𑄝𑄨 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Kuwait":{"long":["𑄃𑄢𑄧𑄝𑄨 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄢𑄧𑄝𑄨 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Qatar":{"long":["𑄃𑄢𑄧𑄝𑄨 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄢𑄧𑄝𑄨 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Aden":{"long":["𑄃𑄢𑄧𑄝𑄨 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄢𑄧𑄝𑄨 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Buenos_Aires":{"long":["𑄃𑄢𑄴𑄎𑄬𑄚𑄴𑄑𑄨𑄚 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄢𑄴𑄎𑄬𑄚𑄴𑄑𑄨𑄚 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Argentina/San_Luis":{"long":["𑄛𑄧𑄏𑄨𑄟𑄬𑄘𑄨 𑄃𑄢𑄴𑄎𑄬𑄚𑄴𑄑𑄨𑄚 𑄛𑄳𑄢𑄧𑄟𑄚𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄧𑄏𑄨𑄟𑄬𑄘𑄨 𑄃𑄢𑄴𑄎𑄬𑄚𑄴𑄑𑄨𑄚 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Ashgabat":{"long":["𑄖𑄪𑄢𑄴𑄇𑄴𑄟𑄬𑄚𑄨𑄌𑄴𑄖𑄚𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄖𑄪𑄢𑄴𑄇𑄴𑄟𑄬𑄚𑄨𑄌𑄴𑄖𑄚𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Halifax":{"long":["𑄃𑄑𑄴𑄣𑄚𑄴𑄖𑄨𑄉𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄑𑄴𑄣𑄚𑄴𑄖𑄨𑄉𑄮𑄢𑄴 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Antigua":{"long":["𑄃𑄑𑄴𑄣𑄚𑄴𑄖𑄨𑄉𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄑𑄴𑄣𑄚𑄴𑄖𑄨𑄉𑄮𑄢𑄴 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Anguilla":{"long":["𑄃𑄑𑄴𑄣𑄚𑄴𑄖𑄨𑄉𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄑𑄴𑄣𑄚𑄴𑄖𑄨𑄉𑄮𑄢𑄴 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Aruba":{"long":["𑄃𑄑𑄴𑄣𑄚𑄴𑄖𑄨𑄉𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄑𑄴𑄣𑄚𑄴𑄖𑄨𑄉𑄮𑄢𑄴 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Barbados":{"long":["𑄃𑄑𑄴𑄣𑄚𑄴𑄖𑄨𑄉𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄑𑄴𑄣𑄚𑄴𑄖𑄨𑄉𑄮𑄢𑄴 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Atlantic/Bermuda":{"long":["𑄃𑄑𑄴𑄣𑄚𑄴𑄖𑄨𑄉𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄑𑄴𑄣𑄚𑄴𑄖𑄨𑄉𑄮𑄢𑄴 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Kralendijk":{"long":["𑄃𑄑𑄴𑄣𑄚𑄴𑄖𑄨𑄉𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄑𑄴𑄣𑄚𑄴𑄖𑄨𑄉𑄮𑄢𑄴 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Curacao":{"long":["𑄃𑄑𑄴𑄣𑄚𑄴𑄖𑄨𑄉𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄑𑄴𑄣𑄚𑄴𑄖𑄨𑄉𑄮𑄢𑄴 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Dominica":{"long":["𑄃𑄑𑄴𑄣𑄚𑄴𑄖𑄨𑄉𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄑𑄴𑄣𑄚𑄴𑄖𑄨𑄉𑄮𑄢𑄴 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Grenada":{"long":["𑄃𑄑𑄴𑄣𑄚𑄴𑄖𑄨𑄉𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄑𑄴𑄣𑄚𑄴𑄖𑄨𑄉𑄮𑄢𑄴 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Thule":{"long":["𑄃𑄑𑄴𑄣𑄚𑄴𑄖𑄨𑄉𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄑𑄴𑄣𑄚𑄴𑄖𑄨𑄉𑄮𑄢𑄴 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Guadeloupe":{"long":["𑄃𑄑𑄴𑄣𑄚𑄴𑄖𑄨𑄉𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄑𑄴𑄣𑄚𑄴𑄖𑄨𑄉𑄮𑄢𑄴 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/St_Kitts":{"long":["𑄃𑄑𑄴𑄣𑄚𑄴𑄖𑄨𑄉𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄑𑄴𑄣𑄚𑄴𑄖𑄨𑄉𑄮𑄢𑄴 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/St_Lucia":{"long":["𑄃𑄑𑄴𑄣𑄚𑄴𑄖𑄨𑄉𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄑𑄴𑄣𑄚𑄴𑄖𑄨𑄉𑄮𑄢𑄴 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Marigot":{"long":["𑄃𑄑𑄴𑄣𑄚𑄴𑄖𑄨𑄉𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄑𑄴𑄣𑄚𑄴𑄖𑄨𑄉𑄮𑄢𑄴 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Martinique":{"long":["𑄃𑄑𑄴𑄣𑄚𑄴𑄖𑄨𑄉𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄑𑄴𑄣𑄚𑄴𑄖𑄨𑄉𑄮𑄢𑄴 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Montserrat":{"long":["𑄃𑄑𑄴𑄣𑄚𑄴𑄖𑄨𑄉𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄑𑄴𑄣𑄚𑄴𑄖𑄨𑄉𑄮𑄢𑄴 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Puerto_Rico":{"long":["𑄃𑄑𑄴𑄣𑄚𑄴𑄖𑄨𑄉𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄑𑄴𑄣𑄚𑄴𑄖𑄨𑄉𑄮𑄢𑄴 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Lower_Princes":{"long":["𑄃𑄑𑄴𑄣𑄚𑄴𑄖𑄨𑄉𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄑𑄴𑄣𑄚𑄴𑄖𑄨𑄉𑄮𑄢𑄴 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Port_of_Spain":{"long":["𑄃𑄑𑄴𑄣𑄚𑄴𑄖𑄨𑄉𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄑𑄴𑄣𑄚𑄴𑄖𑄨𑄉𑄮𑄢𑄴 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/St_Vincent":{"long":["𑄃𑄑𑄴𑄣𑄚𑄴𑄖𑄨𑄉𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄑𑄴𑄣𑄚𑄴𑄖𑄨𑄉𑄮𑄢𑄴 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Tortola":{"long":["𑄃𑄑𑄴𑄣𑄚𑄴𑄖𑄨𑄉𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄑𑄴𑄣𑄚𑄴𑄖𑄨𑄉𑄮𑄢𑄴 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/St_Thomas":{"long":["𑄃𑄑𑄴𑄣𑄚𑄴𑄖𑄨𑄉𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄑𑄴𑄣𑄚𑄴𑄖𑄨𑄉𑄮𑄢𑄴 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Australia/Adelaide":{"long":["𑄃𑄧𑄌𑄴𑄑𑄳𑄢𑄬𑄣𑄨𑄠𑄧 𑄃𑄏𑄧𑄣𑄴 𑄉𑄧𑄢𑄳𑄦𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄧𑄌𑄴𑄑𑄳𑄢𑄬𑄣𑄨𑄠𑄧 𑄃𑄏𑄧𑄣𑄴 𑄉𑄧𑄢𑄳𑄦𑄢𑄴 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Australia/Sydney":{"long":["𑄃𑄧𑄌𑄴𑄑𑄳𑄢𑄬𑄣𑄨𑄠𑄧 𑄛𑄪𑄉𑄬𑄘𑄨 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄧𑄌𑄴𑄑𑄳𑄢𑄬𑄣𑄨𑄠𑄧 𑄛𑄪𑄉𑄬𑄘𑄨 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Australia/Perth":{"long":["𑄃𑄧𑄌𑄴𑄑𑄳𑄢𑄬𑄣𑄨𑄠𑄧 𑄛𑄧𑄏𑄨𑄟𑄬𑄘𑄨 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄧𑄌𑄴𑄑𑄳𑄢𑄬𑄣𑄨𑄠𑄧 𑄛𑄧𑄏𑄨𑄟𑄬𑄘𑄨 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Atlantic/Azores":{"long":["𑄃𑄬𑄎𑄮𑄢𑄬𑄌𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄬𑄎𑄮𑄢𑄬𑄌𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Thimphu":{"long":["𑄞𑄪𑄑𑄚𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄞𑄪𑄑𑄚𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/La_Paz":{"long":["𑄝𑄮𑄣𑄨𑄞𑄨𑄠 𑄃𑄧𑄇𑄴𑄖𑄧","𑄝𑄮𑄣𑄨𑄞𑄨𑄠 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Kuching":{"long":["𑄟𑄣𑄴𑄠𑄬𑄥𑄨𑄠 𑄃𑄧𑄇𑄴𑄖𑄧","𑄟𑄣𑄴𑄠𑄬𑄥𑄨𑄠 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Sao_Paulo":{"long":["𑄝𑄳𑄢𑄥𑄨𑄣𑄨𑄠 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄝𑄳𑄢𑄥𑄨𑄣𑄨𑄠 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Europe/London":{"long":["𑄉𑄳𑄢𑄨𑄚𑄨𑄌𑄴 𑄟𑄨𑄚𑄴 𑄑𑄬𑄟𑄴","𑄉𑄳𑄢𑄨𑄚𑄨𑄌𑄴 𑄟𑄨𑄚𑄴 𑄑𑄬𑄟𑄴"]},"Asia/Brunei":{"long":["𑄝𑄳𑄢𑄪𑄚𑄬𑄭 𑄘𑄢𑄪𑄌𑄴𑄥𑄣𑄟𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄝𑄳𑄢𑄪𑄚𑄬𑄭 𑄘𑄢𑄪𑄌𑄴𑄥𑄣𑄟𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Atlantic/Cape_Verde":{"long":["𑄇𑄬𑄛𑄴 𑄞𑄢𑄴𑄘𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄇𑄬𑄛𑄴 𑄞𑄢𑄴𑄘𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Pacific/Chatham":{"long":["𑄌𑄳𑄠𑄗𑄟𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄌𑄳𑄠𑄗𑄟𑄴 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Santiago":{"long":["𑄌𑄨𑄣𑄨 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄌𑄨𑄣𑄨 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Shanghai":{"long":["𑄌𑄨𑄚𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄌𑄨𑄚𑄴 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Choibalsan":{"long":["𑄌𑄧𑄠𑄴𑄝𑄣𑄴𑄥𑄧𑄚𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄌𑄧𑄠𑄴𑄝𑄣𑄴𑄥𑄧𑄚𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Indian/Christmas":{"long":["𑄇𑄳𑄢𑄨𑄌𑄴𑄟𑄥𑄴 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄬 𑄃𑄧𑄇𑄴𑄖𑄧","𑄇𑄳𑄢𑄨𑄌𑄴𑄟𑄥𑄴 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄬 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Indian/Cocos":{"long":["𑄇𑄮𑄇𑄮𑄌𑄴 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄬𑄉𑄪𑄚𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄇𑄮𑄇𑄮𑄌𑄴 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄬𑄉𑄪𑄚𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Bogota":{"long":["𑄇𑄧𑄣𑄧𑄟𑄴𑄝𑄨𑄠 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄇𑄧𑄣𑄧𑄟𑄴𑄝𑄨𑄠 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Pacific/Rarotonga":{"long":["𑄇𑄪𑄇𑄴 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄬𑄉𑄪𑄚𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄇𑄪𑄇𑄴 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄬𑄉𑄪𑄚𑄮𑄢𑄴 𑄃𑄧𑄖𑄴𑄙𑄬𑄇𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Havana":{"long":["𑄇𑄨𑄃𑄪𑄝 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄇𑄨𑄃𑄪𑄝 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Antarctica/Davis":{"long":["𑄓𑄬𑄞𑄨𑄥𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄓𑄬𑄞𑄨𑄥𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Antarctica/DumontDUrville":{"long":["𑄓𑄪𑄟𑄧𑄚𑄴𑄑𑄴-𑄘𑄳𑄠𑄧 𑄅𑄪𑄢𑄴𑄞𑄨𑄣𑄬 𑄃𑄧𑄇𑄴𑄖𑄧","𑄓𑄪𑄟𑄧𑄚𑄴𑄑𑄴-𑄘𑄳𑄠𑄧 𑄅𑄪𑄢𑄴𑄞𑄨𑄣𑄬 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Dushanbe":{"long":["𑄖𑄎𑄈𑄥𑄴𑄖𑄚𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄖𑄎𑄈𑄥𑄴𑄖𑄚𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Paramaribo":{"long":["𑄥𑄪𑄢𑄨𑄚𑄟𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄥𑄪𑄢𑄨𑄚𑄟𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Dili":{"long":["𑄛𑄪𑄉𑄬𑄘𑄨 𑄑𑄨𑄟𑄪𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄪𑄉𑄬𑄘𑄨 𑄑𑄨𑄟𑄪𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Pacific/Easter":{"long":["𑄃𑄨𑄥𑄴𑄑𑄢𑄴 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄬 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄨𑄥𑄴𑄑𑄢𑄴 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄬 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Guayaquil":{"long":["𑄃𑄨𑄇𑄪𑄠𑄬𑄓𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄨𑄇𑄪𑄠𑄬𑄓𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Europe/Paris":{"long":["𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Europe/Andorra":{"long":["𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Europe/Tirane":{"long":["𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Europe/Vienna":{"long":["𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Europe/Sarajevo":{"long":["𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Europe/Brussels":{"long":["𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Europe/Zurich":{"long":["𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Europe/Prague":{"long":["𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Europe/Berlin":{"long":["𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Europe/Copenhagen":{"long":["𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Europe/Madrid":{"long":["𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Europe/Gibraltar":{"long":["𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Europe/Zagreb":{"long":["𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Europe/Budapest":{"long":["𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Europe/Rome":{"long":["𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Europe/Vaduz":{"long":["𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Europe/Luxembourg":{"long":["𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Europe/Monaco":{"long":["𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Europe/Podgorica":{"long":["𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Europe/Skopje":{"long":["𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Europe/Malta":{"long":["𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Europe/Amsterdam":{"long":["𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Europe/Oslo":{"long":["𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Europe/Warsaw":{"long":["𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Europe/Belgrade":{"long":["𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Europe/Stockholm":{"long":["𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Europe/Ljubljana":{"long":["𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Europe/Bratislava":{"long":["𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Europe/San_Marino":{"long":["𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Africa/Tunis":{"long":["𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Europe/Vatican":{"long":["𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Europe/Bucharest":{"long":["𑄛𑄪𑄉𑄬𑄘𑄨 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄪𑄉𑄬𑄘𑄨 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Europe/Mariehamn":{"long":["𑄛𑄪𑄉𑄬𑄘𑄨 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄪𑄉𑄬𑄘𑄨 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Europe/Sofia":{"long":["𑄛𑄪𑄉𑄬𑄘𑄨 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄪𑄉𑄬𑄘𑄨 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Nicosia":{"long":["𑄛𑄪𑄉𑄬𑄘𑄨 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄪𑄉𑄬𑄘𑄨 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Africa/Cairo":{"long":["𑄛𑄪𑄉𑄬𑄘𑄨 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄪𑄉𑄬𑄘𑄨 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Europe/Helsinki":{"long":["𑄛𑄪𑄉𑄬𑄘𑄨 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄪𑄉𑄬𑄘𑄨 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Europe/Athens":{"long":["𑄛𑄪𑄉𑄬𑄘𑄨 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄪𑄉𑄬𑄘𑄨 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Amman":{"long":["𑄛𑄪𑄉𑄬𑄘𑄨 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄪𑄉𑄬𑄘𑄨 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Beirut":{"long":["𑄛𑄪𑄉𑄬𑄘𑄨 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄪𑄉𑄬𑄘𑄨 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Damascus":{"long":["𑄛𑄪𑄉𑄬𑄘𑄨 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄪𑄉𑄬𑄘𑄨 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Europe/Minsk":{"long":["𑄃𑄬𑄇𑄴𑄉𑄮𑄙𑄳𑄆𑄬𑄣𑄴 𑄛𑄪𑄉𑄬𑄘𑄨 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄬𑄇𑄴𑄉𑄮𑄙𑄳𑄆𑄬𑄣𑄴 𑄛𑄪𑄉𑄬𑄘𑄨 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Europe/Kaliningrad":{"long":["𑄃𑄬𑄇𑄴𑄉𑄮𑄙𑄳𑄆𑄬𑄣𑄴 𑄛𑄪𑄉𑄬𑄘𑄨 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄬𑄇𑄴𑄉𑄮𑄙𑄳𑄆𑄬𑄣𑄴 𑄛𑄪𑄉𑄬𑄘𑄨 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Atlantic/Canary":{"long":["𑄛𑄧𑄏𑄨𑄟𑄬𑄘𑄨 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄧𑄏𑄬𑄟𑄬𑄘𑄨 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Atlantic/Faeroe":{"long":["𑄛𑄧𑄏𑄨𑄟𑄬𑄘𑄨 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄧𑄏𑄬𑄟𑄬𑄘𑄨 𑄃𑄨𑄃𑄪𑄢𑄮𑄝𑄮𑄢𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Atlantic/Stanley":{"long":["𑄜𑄧𑄇𑄴𑄣𑄳𑄠𑄚𑄴𑄓𑄴 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄬𑄉𑄪𑄚𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄜𑄧𑄇𑄴𑄣𑄳𑄠𑄚𑄴𑄓𑄴 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄬𑄉𑄪𑄚𑄮𑄢𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Pacific/Fiji":{"long":["𑄜𑄨𑄎𑄨 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄜𑄨𑄎𑄨 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Cayenne":{"long":["𑄜𑄧𑄢𑄥𑄨 𑄉𑄠𑄚 𑄃𑄧𑄇𑄴𑄖𑄧","𑄜𑄧𑄢𑄥𑄨 𑄉𑄠𑄚 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Indian/Kerguelen":{"long":["𑄜𑄧𑄢𑄥𑄨 𑄘𑄧𑄉𑄨𑄚𑄴 𑄃𑄳𑄃 𑄃𑄚𑄴𑄑𑄢𑄴𑄇𑄧𑄑𑄨𑄇 𑄃𑄧𑄇𑄴𑄖𑄧","𑄜𑄧𑄢𑄥𑄨 𑄘𑄧𑄉𑄨𑄚𑄴 𑄃𑄳𑄃 𑄃𑄚𑄴𑄑𑄢𑄴𑄇𑄧𑄑𑄨𑄇 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Bishkek":{"long":["𑄇𑄨𑄢𑄴𑄉𑄨𑄥𑄴𑄖𑄚𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄇𑄨𑄢𑄴𑄉𑄨𑄥𑄴𑄖𑄚𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Pacific/Galapagos":{"long":["𑄉𑄣𑄛𑄉𑄮𑄌𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄉𑄣𑄛𑄉𑄮𑄌𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Pacific/Gambier":{"long":["𑄉𑄳𑄠𑄟𑄴𑄝𑄨𑄠𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄉𑄳𑄠𑄟𑄴𑄝𑄨𑄠𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Pacific/Tarawa":{"long":["𑄉𑄨𑄣𑄴𑄝𑄢𑄴𑄑𑄴 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄬𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄉𑄨𑄣𑄴𑄝𑄢𑄴𑄑𑄴 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄬𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Atlantic/Reykjavik":{"long":["𑄉𑄳𑄢𑄨𑄚𑄨𑄌𑄴 𑄟𑄨𑄚𑄴 𑄑𑄬𑄟𑄴","𑄉𑄳𑄢𑄨𑄚𑄨𑄌𑄴 𑄟𑄨𑄚𑄴 𑄑𑄬𑄟𑄴"]},"Africa/Ouagadougou":{"long":["𑄉𑄳𑄢𑄨𑄚𑄨𑄌𑄴 𑄟𑄨𑄚𑄴 𑄑𑄬𑄟𑄴","𑄉𑄳𑄢𑄨𑄚𑄨𑄌𑄴 𑄟𑄨𑄚𑄴 𑄑𑄬𑄟𑄴"]},"Africa/Abidjan":{"long":["𑄉𑄳𑄢𑄨𑄚𑄨𑄌𑄴 𑄟𑄨𑄚𑄴 𑄑𑄬𑄟𑄴","𑄉𑄳𑄢𑄨𑄚𑄨𑄌𑄴 𑄟𑄨𑄚𑄴 𑄑𑄬𑄟𑄴"]},"Africa/Accra":{"long":["𑄉𑄳𑄢𑄨𑄚𑄨𑄌𑄴 𑄟𑄨𑄚𑄴 𑄑𑄬𑄟𑄴","𑄉𑄳𑄢𑄨𑄚𑄨𑄌𑄴 𑄟𑄨𑄚𑄴 𑄑𑄬𑄟𑄴"]},"Africa/Banjul":{"long":["𑄉𑄳𑄢𑄨𑄚𑄨𑄌𑄴 𑄟𑄨𑄚𑄴 𑄑𑄬𑄟𑄴","𑄉𑄳𑄢𑄨𑄚𑄨𑄌𑄴 𑄟𑄨𑄚𑄴 𑄑𑄬𑄟𑄴"]},"Africa/Conakry":{"long":["𑄉𑄳𑄢𑄨𑄚𑄨𑄌𑄴 𑄟𑄨𑄚𑄴 𑄑𑄬𑄟𑄴","𑄉𑄳𑄢𑄨𑄚𑄨𑄌𑄴 𑄟𑄨𑄚𑄴 𑄑𑄬𑄟𑄴"]},"Africa/Bamako":{"long":["𑄉𑄳𑄢𑄨𑄚𑄨𑄌𑄴 𑄟𑄨𑄚𑄴 𑄑𑄬𑄟𑄴","𑄉𑄳𑄢𑄨𑄚𑄨𑄌𑄴 𑄟𑄨𑄚𑄴 𑄑𑄬𑄟𑄴"]},"Africa/Nouakchott":{"long":["𑄉𑄳𑄢𑄨𑄚𑄨𑄌𑄴 𑄟𑄨𑄚𑄴 𑄑𑄬𑄟𑄴","𑄉𑄳𑄢𑄨𑄚𑄨𑄌𑄴 𑄟𑄨𑄚𑄴 𑄑𑄬𑄟𑄴"]},"Atlantic/St_Helena":{"long":["𑄉𑄳𑄢𑄨𑄚𑄨𑄌𑄴 𑄟𑄨𑄚𑄴 𑄑𑄬𑄟𑄴","𑄉𑄳𑄢𑄨𑄚𑄨𑄌𑄴 𑄟𑄨𑄚𑄴 𑄑𑄬𑄟𑄴"]},"Africa/Freetown":{"long":["𑄉𑄳𑄢𑄨𑄚𑄨𑄌𑄴 𑄟𑄨𑄚𑄴 𑄑𑄬𑄟𑄴","𑄉𑄳𑄢𑄨𑄚𑄨𑄌𑄴 𑄟𑄨𑄚𑄴 𑄑𑄬𑄟𑄴"]},"Africa/Dakar":{"long":["𑄉𑄳𑄢𑄨𑄚𑄨𑄌𑄴 𑄟𑄨𑄚𑄴 𑄑𑄬𑄟𑄴","𑄉𑄳𑄢𑄨𑄚𑄨𑄌𑄴 𑄟𑄨𑄚𑄴 𑄑𑄬𑄟𑄴"]},"Africa/Lome":{"long":["𑄉𑄳𑄢𑄨𑄚𑄨𑄌𑄴 𑄟𑄨𑄚𑄴 𑄑𑄬𑄟𑄴","𑄉𑄳𑄢𑄨𑄚𑄨𑄌𑄴 𑄟𑄨𑄚𑄴 𑄑𑄬𑄟𑄴"]},"America/Scoresbysund":{"long":["𑄛𑄪𑄉𑄬𑄘𑄨 𑄉𑄳𑄢𑄨𑄚𑄴𑄣𑄳𑄠𑄚𑄴𑄓𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄪𑄉𑄬𑄘𑄨 𑄉𑄳𑄢𑄨𑄚𑄴𑄣𑄳𑄠𑄚𑄴𑄓𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Godthab":{"long":["𑄛𑄧𑄏𑄨𑄟𑄬𑄘𑄨 𑄉𑄳𑄢𑄨𑄚𑄴𑄣𑄳𑄠𑄚𑄴𑄓𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄧𑄏𑄨𑄟𑄬𑄘𑄨 𑄉𑄳𑄢𑄨𑄚𑄴𑄣𑄳𑄠𑄚𑄴𑄓𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Dubai":{"long":["𑄃𑄪𑄛𑄧𑄥𑄉𑄧𑄢𑄨𑄠𑄧 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄪𑄛𑄧𑄥𑄉𑄧𑄢𑄨𑄠𑄧 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Muscat":{"long":["𑄃𑄪𑄛𑄧𑄥𑄉𑄧𑄢𑄨𑄠𑄧 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄪𑄛𑄧𑄥𑄉𑄧𑄢𑄨𑄠𑄧 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Guyana":{"long":["𑄉𑄪𑄠𑄚 𑄃𑄧𑄇𑄴𑄖𑄧","𑄉𑄪𑄠𑄚 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Pacific/Honolulu":{"long":["𑄦𑄧𑄃𑄮𑄠𑄭-𑄃𑄣𑄬𑄃𑄪𑄖𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄦𑄧𑄃𑄮𑄠𑄭-𑄃𑄣𑄬𑄃𑄪𑄖𑄴 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Hong_Kong":{"long":["𑄦𑄧𑄁 𑄇𑄧𑄁 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄦𑄧𑄁 𑄇𑄧𑄁 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Hovd":{"long":["𑄦𑄮𑄞𑄧𑄓𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄦𑄮𑄞𑄧𑄓𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Calcutta":{"long":["𑄃𑄨𑄚𑄴𑄘𑄨𑄠𑄬 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄨𑄚𑄴𑄘𑄨𑄠𑄬 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"],"short":["IST","IST"]},"Indian/Chagos":{"long":["𑄃𑄨𑄚𑄴𑄘𑄨𑄠𑄬 𑄟𑄧𑄦𑄥𑄉𑄧𑄢𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄨𑄚𑄴𑄘𑄨𑄠𑄬 𑄟𑄧𑄦𑄥𑄉𑄧𑄢𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Bangkok":{"long":["𑄃𑄨𑄚𑄴𑄘𑄮𑄌𑄩𑄚𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄨𑄚𑄴𑄘𑄮𑄌𑄩𑄚𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Phnom_Penh":{"long":["𑄃𑄨𑄚𑄴𑄘𑄮𑄌𑄩𑄚𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄨𑄚𑄴𑄘𑄮𑄌𑄩𑄚𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Vientiane":{"long":["𑄃𑄨𑄚𑄴𑄘𑄮𑄌𑄩𑄚𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄨𑄚𑄴𑄘𑄮𑄌𑄩𑄚𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Makassar":{"long":["𑄃𑄏𑄧𑄣𑄴 𑄉𑄢𑄳𑄦 𑄃𑄨𑄚𑄴𑄘𑄮𑄚𑄬𑄥𑄨𑄠 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄏𑄧𑄣𑄴 𑄉𑄢𑄳𑄦 𑄃𑄨𑄚𑄴𑄘𑄮𑄚𑄬𑄥𑄨𑄠 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Jayapura":{"long":["𑄛𑄪𑄉𑄬𑄘𑄨 𑄃𑄨𑄚𑄴𑄘𑄮𑄚𑄬𑄥𑄨𑄠 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄪𑄉𑄬𑄘𑄨 𑄃𑄨𑄚𑄴𑄘𑄮𑄚𑄬𑄥𑄨𑄠 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Jakarta":{"long":["𑄛𑄧𑄏𑄨𑄟𑄬𑄘𑄨 𑄃𑄨𑄚𑄴𑄘𑄮𑄚𑄬𑄥𑄨𑄠 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄧𑄏𑄨𑄟𑄬𑄘𑄨 𑄃𑄨𑄚𑄴𑄘𑄮𑄚𑄬𑄥𑄨𑄠 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Tehran":{"long":["𑄃𑄨𑄢𑄚𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄨𑄢𑄚𑄴 𑄘𑄨𑄚𑄬𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Irkutsk":{"long":["𑄃𑄨𑄢𑄴𑄖𑄪𑄑𑄴𑄥𑄴𑄇𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄨𑄢𑄴𑄖𑄪𑄑𑄴𑄥𑄴𑄇𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Jerusalem":{"long":["𑄃𑄨𑄎𑄴𑄢𑄠𑄬𑄣𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄨𑄎𑄴𑄢𑄠𑄬𑄣𑄴 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Tokyo":{"long":["𑄎𑄛𑄚𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄎𑄛𑄚𑄴 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Kamchatka":{"long":["𑄛𑄨𑄖𑄳𑄢𑄬𑄛𑄳𑄠𑄞𑄧𑄣𑄧𑄥𑄴𑄇𑄴-𑄇𑄳𑄠𑄟𑄴𑄌𑄳𑄠𑄑𑄴𑄃𑄨𑄥𑄴𑄇𑄨 𑄟𑄚𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄨𑄖𑄳𑄢𑄬𑄛𑄳𑄠𑄞𑄧𑄣𑄧𑄥𑄴𑄇𑄴-𑄇𑄳𑄠𑄟𑄴𑄌𑄳𑄠𑄑𑄴𑄃𑄨𑄥𑄴𑄇𑄨 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Karachi":{"long":["𑄛𑄇𑄨𑄥𑄴𑄖𑄚𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄇𑄨𑄥𑄴𑄖𑄚𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Seoul":{"long":["𑄇𑄮𑄢𑄨𑄠𑄚𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄇𑄮𑄢𑄨𑄠𑄚𑄴 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Pacific/Kosrae":{"long":["𑄇𑄮𑄌𑄴𑄢𑄳𑄆𑄬 𑄃𑄧𑄇𑄴𑄖𑄧","𑄇𑄮𑄌𑄴𑄢𑄳𑄆𑄬 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Krasnoyarsk":{"long":["𑄇𑄳𑄢𑄥𑄴𑄚𑄮𑄠𑄢𑄴𑄥𑄴𑄇𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄇𑄳𑄢𑄥𑄴𑄚𑄮𑄠𑄢𑄴𑄥𑄴𑄇𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Europe/Samara":{"long":["𑄥𑄟𑄢 𑄟𑄚𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄥𑄟𑄢 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Pacific/Kiritimati":{"long":["𑄣𑄭𑄚𑄴 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄬𑄉𑄪𑄚𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄣𑄭𑄚𑄴 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄬𑄉𑄪𑄚𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Australia/Lord_Howe":{"long":["𑄣𑄧𑄢𑄴𑄓𑄴 𑄦𑄤𑄬 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄣𑄧𑄢𑄴𑄓𑄴 𑄦𑄤𑄬 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Antarctica/Macquarie":{"long":["𑄟𑄳𑄠𑄇𑄴𑄇𑄪𑄢𑄨 𑄉𑄭 𑄉𑄭 𑄞𑄬𑄘 𑄃𑄧𑄇𑄴𑄖𑄧","𑄟𑄳𑄠𑄇𑄴𑄇𑄪𑄢𑄨 𑄉𑄭 𑄉𑄭 𑄞𑄬𑄘 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Magadan":{"long":["𑄟𑄳𑄠𑄉𑄓𑄚𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄟𑄳𑄠𑄉𑄓𑄚𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Indian/Maldives":{"long":["𑄟𑄣𑄴𑄘𑄨𑄛𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄟𑄣𑄴𑄘𑄨𑄛𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Pacific/Marquesas":{"long":["𑄟𑄢𑄴𑄇𑄬𑄥𑄥𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄟𑄢𑄴𑄇𑄬𑄥𑄥𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Pacific/Majuro":{"long":["𑄟𑄢𑄴𑄥𑄣𑄴 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄬𑄉𑄪𑄚𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄟𑄢𑄴𑄥𑄣𑄴 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄬𑄉𑄪𑄚𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Indian/Mauritius":{"long":["𑄟𑄧𑄢𑄨𑄥𑄥𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄟𑄧𑄢𑄨𑄥𑄥𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Antarctica/Mawson":{"long":["𑄟𑄧𑄥𑄳𑄦𑄧𑄚𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄟𑄧𑄥𑄳𑄦𑄧𑄚𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Santa_Isabel":{"long":["𑄃𑄪𑄖𑄴𑄖𑄮𑄢𑄴 𑄛𑄧𑄏𑄨𑄟𑄴 𑄟𑄬𑄇𑄴𑄥𑄨𑄇𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄪𑄖𑄴𑄖𑄮𑄢𑄴 𑄛𑄧𑄏𑄨𑄟𑄴 𑄟𑄬𑄇𑄴𑄥𑄨𑄇𑄮𑄢𑄴 𑄘𑄨𑄚𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Mazatlan":{"long":["𑄟𑄬𑄇𑄴𑄥𑄨𑄇𑄚𑄴 𑄛𑄳𑄢𑄧𑄥𑄚𑄴𑄖𑄧 𑄟𑄧𑄦𑄥𑄉𑄧𑄢𑄧𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄟𑄬𑄇𑄴𑄥𑄨𑄇𑄚𑄴 𑄛𑄳𑄢𑄧𑄥𑄚𑄴𑄖𑄧 𑄟𑄧𑄦𑄥𑄉𑄧𑄢𑄧𑄢𑄴 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Ulaanbaatar":{"long":["𑄃𑄪𑄣𑄚𑄴 𑄝𑄖𑄮𑄢𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄪𑄣𑄚𑄴 𑄝𑄖𑄮𑄢𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Europe/Moscow":{"long":["𑄟𑄧𑄥𑄴𑄇𑄮 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄟𑄧𑄥𑄴𑄇𑄮 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Rangoon":{"long":["𑄟𑄠𑄚𑄴𑄟𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄟𑄠𑄚𑄴𑄟𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Pacific/Nauru":{"long":["𑄚𑄃𑄪𑄢𑄪 𑄃𑄧𑄇𑄴𑄖𑄧","𑄚𑄃𑄪𑄢𑄪 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Katmandu":{"long":["𑄚𑄬𑄛𑄣𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄚𑄬𑄛𑄣𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Pacific/Noumea":{"long":["𑄚𑄨𑄃𑄪 𑄇𑄳𑄠𑄣𑄬𑄓𑄮𑄚𑄨𑄠 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄚𑄨𑄃𑄪 𑄇𑄳𑄠𑄣𑄬𑄓𑄮𑄚𑄨𑄠 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Pacific/Auckland":{"long":["𑄚𑄨𑄃𑄪𑄎𑄨𑄣𑄳𑄠𑄚𑄴𑄓𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄚𑄨𑄃𑄪𑄎𑄨𑄣𑄳𑄠𑄚𑄴𑄓𑄴 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Antarctica/McMurdo":{"long":["𑄚𑄨𑄃𑄪𑄎𑄨𑄣𑄳𑄠𑄚𑄴𑄓𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄚𑄨𑄃𑄪𑄎𑄨𑄣𑄳𑄠𑄚𑄴𑄓𑄴 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/St_Johns":{"long":["𑄚𑄨𑄃𑄪𑄜𑄃𑄪𑄚𑄴𑄣𑄳𑄠𑄚𑄴𑄓𑄨 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄚𑄨𑄃𑄪𑄜𑄃𑄪𑄚𑄴𑄣𑄳𑄠𑄚𑄴𑄓𑄨 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Pacific/Niue":{"long":["𑄚𑄨𑄃𑄪𑄃𑄨 𑄃𑄧𑄇𑄴𑄖𑄧","𑄚𑄨𑄃𑄪𑄃𑄨 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Pacific/Norfolk":{"long":["𑄚𑄧𑄢𑄴𑄜𑄮𑄇𑄴 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄬𑄉𑄪𑄚𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄚𑄧𑄢𑄴𑄜𑄮𑄇𑄴 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄬𑄉𑄪𑄚𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Noronha":{"long":["𑄜𑄢𑄴𑄚𑄚𑄴𑄘𑄮𑄓𑄨 𑄚𑄮𑄢𑄮𑄚𑄴𑄦 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄜𑄢𑄴𑄚𑄚𑄴𑄘𑄮𑄓𑄨 𑄚𑄮𑄢𑄮𑄚𑄴𑄦 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Novosibirsk":{"long":["𑄚𑄮𑄞𑄮𑄥𑄨𑄝𑄨𑄢𑄴𑄥𑄴𑄇𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄚𑄮𑄞𑄮𑄥𑄨𑄝𑄨𑄢𑄴𑄥𑄴𑄇𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Omsk":{"long":["𑄃𑄮𑄟𑄧𑄥𑄴𑄇𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄮𑄟𑄧𑄥𑄴𑄇𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Pacific/Palau":{"long":["𑄛𑄣𑄅𑄪 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄣𑄅𑄪 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Pacific/Port_Moresby":{"long":["𑄛𑄛𑄪𑄠 𑄚𑄨𑄃𑄪 𑄉𑄨𑄚𑄨 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄛𑄪𑄠 𑄚𑄨𑄃𑄪 𑄉𑄨𑄚𑄨 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Asuncion":{"long":["𑄛𑄳𑄠𑄢𑄉𑄪𑄠𑄬 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄳𑄠𑄢𑄉𑄪𑄠𑄬 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Lima":{"long":["𑄛𑄬𑄢𑄪 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄬𑄢𑄪 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Manila":{"long":["𑄜𑄨𑄣𑄨𑄛𑄭𑄚𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄜𑄨𑄣𑄨𑄛𑄭𑄚𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Pacific/Enderbury":{"long":["𑄜𑄮𑄚𑄨𑄇𑄴𑄥𑄴 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄬𑄉𑄪𑄚𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄜𑄮𑄚𑄨𑄇𑄴𑄥𑄴 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄬𑄉𑄪𑄚𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Miquelon":{"long":["𑄥𑄬𑄚𑄴𑄑𑄴 𑄛𑄨𑄠𑄬𑄢𑄴 𑄃𑄮 𑄟𑄨𑄇𑄬𑄣𑄧𑄚𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄥𑄬𑄚𑄴𑄑𑄴 𑄛𑄨𑄠𑄬𑄢𑄴 𑄃𑄮 𑄟𑄨𑄇𑄬𑄣𑄧𑄚𑄴 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Pacific/Pitcairn":{"long":["𑄛𑄨𑄖𑄴𑄇𑄬𑄠𑄢𑄴𑄚𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄨𑄖𑄴𑄇𑄬𑄠𑄢𑄴𑄚𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Pacific/Ponape":{"long":["𑄛𑄮𑄚𑄛𑄬 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄮𑄚𑄛𑄬 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Pyongyang":{"long":["𑄛𑄨𑄠𑄧𑄁 𑄃𑄨𑄠𑄁 𑄃𑄧𑄇𑄴𑄖𑄧","𑄛𑄨𑄠𑄧𑄁 𑄃𑄨𑄠𑄁 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Indian/Reunion":{"long":["𑄢𑄨𑄃𑄨𑄃𑄪𑄚𑄨𑄠𑄚𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄢𑄨𑄃𑄨𑄃𑄪𑄚𑄨𑄠𑄚𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Antarctica/Rothera":{"long":["𑄢𑄧𑄗𑄬𑄢 𑄃𑄧𑄇𑄴𑄖𑄧","𑄢𑄧𑄗𑄬𑄢 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Sakhalin":{"long":["𑄥𑄈𑄣𑄨𑄚𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄥𑄈𑄣𑄨𑄚𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Pacific/Pago_Pago":{"long":["𑄥𑄟𑄮𑄠 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄥𑄟𑄮𑄠 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Indian/Mahe":{"long":["𑄥𑄬𑄥𑄬𑄣𑄧𑄥𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄥𑄬𑄥𑄬𑄣𑄧𑄥𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Singapore":{"long":["𑄥𑄨𑄁𑄉𑄛𑄪𑄢 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄥𑄨𑄁𑄉𑄛𑄪𑄢 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Pacific/Guadalcanal":{"long":["𑄥𑄧𑄣𑄮𑄟𑄧𑄚𑄴 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄬𑄉𑄪𑄚𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄥𑄧𑄣𑄮𑄟𑄧𑄚𑄴 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄬𑄉𑄪𑄚𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Atlantic/South_Georgia":{"long":["𑄘𑄧𑄉𑄨𑄚𑄴 𑄎𑄧𑄢𑄴𑄎𑄨𑄠 𑄃𑄧𑄇𑄴𑄖𑄧","𑄘𑄧𑄉𑄨𑄚𑄴 𑄎𑄧𑄢𑄴𑄎𑄨𑄠 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Yekaterinburg":{"long":["𑄃𑄨𑄠𑄬𑄇𑄖𑄬𑄢𑄨𑄚𑄴𑄝𑄪𑄢𑄴𑄉𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄨𑄠𑄬𑄇𑄖𑄬𑄢𑄨𑄚𑄴𑄝𑄪𑄢𑄴𑄉𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Antarctica/Syowa":{"long":["𑄥𑄠𑄮𑄤 𑄃𑄧𑄇𑄴𑄖𑄧","𑄥𑄠𑄮𑄤 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Pacific/Tahiti":{"long":["𑄖𑄦𑄨𑄖𑄨 𑄃𑄧𑄇𑄴𑄖𑄧","𑄖𑄦𑄨𑄖𑄨 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Taipei":{"long":["𑄖𑄭𑄛𑄳𑄆𑄬 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄖𑄭𑄛𑄳𑄆𑄬 𑄘𑄨𑄚𑄮𑄃𑄣𑄮𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Tashkent":{"long":["𑄃𑄪𑄎𑄴𑄝𑄬𑄇𑄨𑄖𑄚𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄪𑄎𑄴𑄝𑄬𑄇𑄨𑄖𑄚𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Pacific/Fakaofo":{"long":["𑄑𑄮𑄇𑄬𑄣𑄃𑄪 𑄃𑄧𑄇𑄴𑄖𑄧","𑄑𑄮𑄇𑄬𑄣𑄃𑄪 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Pacific/Tongatapu":{"long":["𑄑𑄮𑄋𑄴𑄉 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄑𑄮𑄋𑄴𑄉 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Pacific/Truk":{"long":["𑄌𑄪𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄌𑄪𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Pacific/Funafuti":{"long":["𑄑𑄪𑄞𑄣𑄪 𑄃𑄧𑄇𑄴𑄖𑄧","𑄑𑄪𑄞𑄣𑄪 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Montevideo":{"long":["𑄃𑄪𑄢𑄪𑄉𑄪𑄠𑄬 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄪𑄢𑄪𑄉𑄪𑄠𑄬 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Pacific/Efate":{"long":["𑄞𑄚𑄪𑄠𑄖𑄪 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄞𑄚𑄪𑄠𑄖𑄪 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"America/Caracas":{"long":["𑄞𑄬𑄚𑄬𑄎𑄪𑄠𑄬𑄣 𑄃𑄧𑄇𑄴𑄖𑄧","𑄞𑄬𑄚𑄬𑄎𑄪𑄠𑄬𑄣 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Vladivostok":{"long":["𑄝𑄳𑄣𑄘𑄨𑄝𑄮𑄥𑄴𑄖𑄮𑄇𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄝𑄳𑄣𑄘𑄨𑄝𑄮𑄥𑄴𑄖𑄮𑄇𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Europe/Volgograd":{"long":["𑄞𑄧𑄣𑄴𑄉𑄮𑄉𑄳𑄢𑄓𑄴 𑄟𑄧𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄞𑄧𑄣𑄴𑄉𑄮𑄉𑄳𑄢𑄓𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Antarctica/Vostok":{"long":["𑄞𑄧𑄥𑄴𑄑𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄞𑄧𑄥𑄴𑄑𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Pacific/Wake":{"long":["𑄃𑄮𑄠𑄬𑄇𑄴 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄬 𑄃𑄧𑄇𑄴𑄖𑄧","𑄃𑄮𑄠𑄬𑄇𑄴 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄬 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Pacific/Wallis":{"long":["𑄤𑄣𑄨𑄥𑄴 𑄃𑄳𑄃 𑄜𑄪𑄑𑄪𑄚 𑄃𑄧𑄇𑄴𑄖𑄧","𑄤𑄣𑄨𑄥𑄴 𑄃𑄳𑄃 𑄜𑄪𑄑𑄪𑄚 𑄃𑄧𑄇𑄴𑄖𑄧"]},"Asia/Yakutsk":{"long":["𑄠𑄇𑄪𑄖𑄴𑄥𑄴𑄇𑄴 𑄟𑄚𑄧𑄇𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄠𑄇𑄪𑄖𑄴𑄥𑄴𑄇𑄴 𑄉𑄧𑄢𑄧𑄟𑄴𑄇𑄣𑄧𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"]},"UTC":{"long":["𑄘𑄇𑄴𑄘𑄨𑄠 𑄛𑄨𑄖𑄴𑄗𑄨𑄟𑄨𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧","𑄘𑄇𑄴𑄘𑄨𑄠 𑄛𑄨𑄖𑄴𑄗𑄨𑄟𑄨𑄢𑄴 𑄃𑄧𑄇𑄴𑄖𑄧"],"short":["UTC","UTC"]}},"gmtFormat":"GMT {0}","hourFormat":"+HH:mm;-HH:mm","formats":{"gregory":["h B","h:mm B","h:mm:ss B","d","ccc","E h:mm B","E h:mm:ss B","d E","E h:mm a","E HH:mm","E h:mm:ss a","E HH:mm:ss","y G","MMM y G","d MMM, y G","E, d MMM, y G","h a","HH","h:mm a","HH:mm","h:mm:ss a","HH:mm:ss","h:mm:ss a v","HH:mm:ss v","h:mm a v","HH:mm v","L","d/M","E, d-M","dd-MM","LLL","d MMM","E d MMM","d MMMM","E d MMMM","MMMM 𑄃𑄬𑄢𑄴 𑄠𑄴 𑄥𑄛𑄴𑄖 W","MMMM 𑄃𑄬𑄢𑄴 𑄠𑄴 𑄥𑄛𑄴𑄖 W","mm:ss","y","M/y","d/M/y","E, d/M/y","MM-y","MMM y","d MMM, y","E, d MMM, y","MMMM y","QQQ y","QQQQ y","Y 𑄃𑄬𑄢𑄴 𑄖𑄧𑄟𑄴 𑄥𑄛𑄴𑄖 w","Y 𑄃𑄬𑄢𑄴 𑄖𑄧𑄟𑄴 𑄥𑄛𑄴𑄖 w","EEEE, d MMMM, y","d MMMM, y","d MMM, y","d/M/yy","h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a","EEEE, d MMMM, y h:mm:ss a zzzz","d MMMM, y h:mm:ss a zzzz","d MMM, y h:mm:ss a zzzz","d/M/yy h:mm:ss a zzzz","d h:mm:ss a zzzz","ccc h:mm:ss a zzzz","d E h:mm:ss a zzzz","y G h:mm:ss a zzzz","MMM y G h:mm:ss a zzzz","d MMM, y G h:mm:ss a zzzz","E, d MMM, y G h:mm:ss a zzzz","L h:mm:ss a zzzz","d/M h:mm:ss a zzzz","E, d-M h:mm:ss a zzzz","dd-MM h:mm:ss a zzzz","LLL h:mm:ss a zzzz","d MMM h:mm:ss a zzzz","E d MMM h:mm:ss a zzzz","d MMMM h:mm:ss a zzzz","E d MMMM h:mm:ss a zzzz","MMMM 𑄃𑄬𑄢𑄴 𑄠𑄴 𑄥𑄛𑄴𑄖 W h:mm:ss a zzzz","MMMM 𑄃𑄬𑄢𑄴 𑄠𑄴 𑄥𑄛𑄴𑄖 W h:mm:ss a zzzz","y h:mm:ss a zzzz","M/y h:mm:ss a zzzz","d/M/y h:mm:ss a zzzz","E, d/M/y h:mm:ss a zzzz","MM-y h:mm:ss a zzzz","MMM y h:mm:ss a zzzz","d MMM, y h:mm:ss a zzzz","E, d MMM, y h:mm:ss a zzzz","MMMM y h:mm:ss a zzzz","QQQ y h:mm:ss a zzzz","QQQQ y h:mm:ss a zzzz","Y 𑄃𑄬𑄢𑄴 𑄖𑄧𑄟𑄴 𑄥𑄛𑄴𑄖 w h:mm:ss a zzzz","Y 𑄃𑄬𑄢𑄴 𑄖𑄧𑄟𑄴 𑄥𑄛𑄴𑄖 w h:mm:ss a zzzz","EEEE, d MMMM, y h:mm:ss a z","d MMMM, y h:mm:ss a z","d MMM, y h:mm:ss a z","d/M/yy h:mm:ss a z","d h:mm:ss a z","ccc h:mm:ss a z","d E h:mm:ss a z","y G h:mm:ss a z","MMM y G h:mm:ss a z","d MMM, y G h:mm:ss a z","E, d MMM, y G h:mm:ss a z","L h:mm:ss a z","d/M h:mm:ss a z","E, d-M h:mm:ss a z","dd-MM h:mm:ss a z","LLL h:mm:ss a z","d MMM h:mm:ss a z","E d MMM h:mm:ss a z","d MMMM h:mm:ss a z","E d MMMM h:mm:ss a z","MMMM 𑄃𑄬𑄢𑄴 𑄠𑄴 𑄥𑄛𑄴𑄖 W h:mm:ss a z","MMMM 𑄃𑄬𑄢𑄴 𑄠𑄴 𑄥𑄛𑄴𑄖 W h:mm:ss a z","y h:mm:ss a z","M/y h:mm:ss a z","d/M/y h:mm:ss a z","E, d/M/y h:mm:ss a z","MM-y h:mm:ss a z","MMM y h:mm:ss a z","d MMM, y h:mm:ss a z","E, d MMM, y h:mm:ss a z","MMMM y h:mm:ss a z","QQQ y h:mm:ss a z","QQQQ y h:mm:ss a z","Y 𑄃𑄬𑄢𑄴 𑄖𑄧𑄟𑄴 𑄥𑄛𑄴𑄖 w h:mm:ss a z","Y 𑄃𑄬𑄢𑄴 𑄖𑄧𑄟𑄴 𑄥𑄛𑄴𑄖 w h:mm:ss a z","EEEE, d MMMM, y h:mm:ss a","d MMMM, y h:mm:ss a","d MMM, y h:mm:ss a","d/M/yy h:mm:ss a","d h:mm:ss a","ccc h:mm:ss a","d E h:mm:ss a","y G h:mm:ss a","MMM y G h:mm:ss a","d MMM, y G h:mm:ss a","E, d MMM, y G h:mm:ss a","L h:mm:ss a","d/M h:mm:ss a","E, d-M h:mm:ss a","dd-MM h:mm:ss a","LLL h:mm:ss a","d MMM h:mm:ss a","E d MMM h:mm:ss a","d MMMM h:mm:ss a","E d MMMM h:mm:ss a","MMMM 𑄃𑄬𑄢𑄴 𑄠𑄴 𑄥𑄛𑄴𑄖 W h:mm:ss a","MMMM 𑄃𑄬𑄢𑄴 𑄠𑄴 𑄥𑄛𑄴𑄖 W h:mm:ss a","y h:mm:ss a","M/y h:mm:ss a","d/M/y h:mm:ss a","E, d/M/y h:mm:ss a","MM-y h:mm:ss a","MMM y h:mm:ss a","d MMM, y h:mm:ss a","E, d MMM, y h:mm:ss a","MMMM y h:mm:ss a","QQQ y h:mm:ss a","QQQQ y h:mm:ss a","Y 𑄃𑄬𑄢𑄴 𑄖𑄧𑄟𑄴 𑄥𑄛𑄴𑄖 w h:mm:ss a","Y 𑄃𑄬𑄢𑄴 𑄖𑄧𑄟𑄴 𑄥𑄛𑄴𑄖 w h:mm:ss a","EEEE, d MMMM, y h:mm a","d MMMM, y h:mm a","d MMM, y h:mm a","d/M/yy h:mm a","d h:mm a","ccc h:mm a","d E h:mm a","y G h:mm a","MMM y G h:mm a","d MMM, y G h:mm a","E, d MMM, y G h:mm a","L h:mm a","d/M h:mm a","E, d-M h:mm a","dd-MM h:mm a","LLL h:mm a","d MMM h:mm a","E d MMM h:mm a","d MMMM h:mm a","E d MMMM h:mm a","MMMM 𑄃𑄬𑄢𑄴 𑄠𑄴 𑄥𑄛𑄴𑄖 W h:mm a","MMMM 𑄃𑄬𑄢𑄴 𑄠𑄴 𑄥𑄛𑄴𑄖 W h:mm a","y h:mm a","M/y h:mm a","d/M/y h:mm a","E, d/M/y h:mm a","MM-y h:mm a","MMM y h:mm a","d MMM, y h:mm a","E, d MMM, y h:mm a","MMMM y h:mm a","QQQ y h:mm a","QQQQ y h:mm a","Y 𑄃𑄬𑄢𑄴 𑄖𑄧𑄟𑄴 𑄥𑄛𑄴𑄖 w h:mm a","Y 𑄃𑄬𑄢𑄴 𑄖𑄧𑄟𑄴 𑄥𑄛𑄴𑄖 w h:mm a","EEEE, d MMMM, y h B","d MMMM, y h B","d MMM, y h B","d/M/yy h B","d h B","ccc h B","d E h B","y G h B","MMM y G h B","d MMM, y G h B","E, d MMM, y G h B","L h B","d/M h B","E, d-M h B","dd-MM h B","LLL h B","d MMM h B","E d MMM h B","d MMMM h B","E d MMMM h B","MMMM 𑄃𑄬𑄢𑄴 𑄠𑄴 𑄥𑄛𑄴𑄖 W h B","MMMM 𑄃𑄬𑄢𑄴 𑄠𑄴 𑄥𑄛𑄴𑄖 W h B","y h B","M/y h B","d/M/y h B","E, d/M/y h B","MM-y h B","MMM y h B","d MMM, y h B","E, d MMM, y h B","MMMM y h B","QQQ y h B","QQQQ y h B","Y 𑄃𑄬𑄢𑄴 𑄖𑄧𑄟𑄴 𑄥𑄛𑄴𑄖 w h B","Y 𑄃𑄬𑄢𑄴 𑄖𑄧𑄟𑄴 𑄥𑄛𑄴𑄖 w h B","EEEE, d MMMM, y h:mm B","d MMMM, y h:mm B","d MMM, y h:mm B","d/M/yy h:mm B","d h:mm B","ccc h:mm B","d E h:mm B","y G h:mm B","MMM y G h:mm B","d MMM, y G h:mm B","E, d MMM, y G h:mm B","L h:mm B","d/M h:mm B","E, d-M h:mm B","dd-MM h:mm B","LLL h:mm B","d MMM h:mm B","E d MMM h:mm B","d MMMM h:mm B","E d MMMM h:mm B","MMMM 𑄃𑄬𑄢𑄴 𑄠𑄴 𑄥𑄛𑄴𑄖 W h:mm B","MMMM 𑄃𑄬𑄢𑄴 𑄠𑄴 𑄥𑄛𑄴𑄖 W h:mm B","y h:mm B","M/y h:mm B","d/M/y h:mm B","E, d/M/y h:mm B","MM-y h:mm B","MMM y h:mm B","d MMM, y h:mm B","E, d MMM, y h:mm B","MMMM y h:mm B","QQQ y h:mm B","QQQQ y h:mm B","Y 𑄃𑄬𑄢𑄴 𑄖𑄧𑄟𑄴 𑄥𑄛𑄴𑄖 w h:mm B","Y 𑄃𑄬𑄢𑄴 𑄖𑄧𑄟𑄴 𑄥𑄛𑄴𑄖 w h:mm B","EEEE, d MMMM, y h:mm:ss B","d MMMM, y h:mm:ss B","d MMM, y h:mm:ss B","d/M/yy h:mm:ss B","d h:mm:ss B","ccc h:mm:ss B","d E h:mm:ss B","y G h:mm:ss B","MMM y G h:mm:ss B","d MMM, y G h:mm:ss B","E, d MMM, y G h:mm:ss B","L h:mm:ss B","d/M h:mm:ss B","E, d-M h:mm:ss B","dd-MM h:mm:ss B","LLL h:mm:ss B","d MMM h:mm:ss B","E d MMM h:mm:ss B","d MMMM h:mm:ss B","E d MMMM h:mm:ss B","MMMM 𑄃𑄬𑄢𑄴 𑄠𑄴 𑄥𑄛𑄴𑄖 W h:mm:ss B","MMMM 𑄃𑄬𑄢𑄴 𑄠𑄴 𑄥𑄛𑄴𑄖 W h:mm:ss B","y h:mm:ss B","M/y h:mm:ss B","d/M/y h:mm:ss B","E, d/M/y h:mm:ss B","MM-y h:mm:ss B","MMM y h:mm:ss B","d MMM, y h:mm:ss B","E, d MMM, y h:mm:ss B","MMMM y h:mm:ss B","QQQ y h:mm:ss B","QQQQ y h:mm:ss B","Y 𑄃𑄬𑄢𑄴 𑄖𑄧𑄟𑄴 𑄥𑄛𑄴𑄖 w h:mm:ss B","Y 𑄃𑄬𑄢𑄴 𑄖𑄧𑄟𑄴 𑄥𑄛𑄴𑄖 w h:mm:ss B","EEEE, d MMMM, y h a","d MMMM, y h a","d MMM, y h a","d/M/yy h a","d h a","ccc h a","d E h a","y G h a","MMM y G h a","d MMM, y G h a","E, d MMM, y G h a","L h a","d/M h a","E, d-M h a","dd-MM h a","LLL h a","d MMM h a","E d MMM h a","d MMMM h a","E d MMMM h a","MMMM 𑄃𑄬𑄢𑄴 𑄠𑄴 𑄥𑄛𑄴𑄖 W h a","MMMM 𑄃𑄬𑄢𑄴 𑄠𑄴 𑄥𑄛𑄴𑄖 W h a","y h a","M/y h a","d/M/y h a","E, d/M/y h a","MM-y h a","MMM y h a","d MMM, y h a","E, d MMM, y h a","MMMM y h a","QQQ y h a","QQQQ y h a","Y 𑄃𑄬𑄢𑄴 𑄖𑄧𑄟𑄴 𑄥𑄛𑄴𑄖 w h a","Y 𑄃𑄬𑄢𑄴 𑄖𑄧𑄟𑄴 𑄥𑄛𑄴𑄖 w h a","EEEE, d MMMM, y HH","d MMMM, y HH","d MMM, y HH","d/M/yy HH","d HH","ccc HH","d E HH","y G HH","MMM y G HH","d MMM, y G HH","E, d MMM, y G HH","L HH","d/M HH","E, d-M HH","dd-MM HH","LLL HH","d MMM HH","E d MMM HH","d MMMM HH","E d MMMM HH","MMMM 𑄃𑄬𑄢𑄴 𑄠𑄴 𑄥𑄛𑄴𑄖 W HH","MMMM 𑄃𑄬𑄢𑄴 𑄠𑄴 𑄥𑄛𑄴𑄖 W HH","y HH","M/y HH","d/M/y HH","E, d/M/y HH","MM-y HH","MMM y HH","d MMM, y HH","E, d MMM, y HH","MMMM y HH","QQQ y HH","QQQQ y HH","Y 𑄃𑄬𑄢𑄴 𑄖𑄧𑄟𑄴 𑄥𑄛𑄴𑄖 w HH","Y 𑄃𑄬𑄢𑄴 𑄖𑄧𑄟𑄴 𑄥𑄛𑄴𑄖 w HH","EEEE, d MMMM, y h:mm a","d MMMM, y h:mm a","d MMM, y h:mm a","d/M/yy h:mm a","d h:mm a","ccc h:mm a","d E h:mm a","y G h:mm a","MMM y G h:mm a","d MMM, y G h:mm a","E, d MMM, y G h:mm a","L h:mm a","d/M h:mm a","E, d-M h:mm a","dd-MM h:mm a","LLL h:mm a","d MMM h:mm a","E d MMM h:mm a","d MMMM h:mm a","E d MMMM h:mm a","MMMM 𑄃𑄬𑄢𑄴 𑄠𑄴 𑄥𑄛𑄴𑄖 W h:mm a","MMMM 𑄃𑄬𑄢𑄴 𑄠𑄴 𑄥𑄛𑄴𑄖 W h:mm a","y h:mm a","M/y h:mm a","d/M/y h:mm a","E, d/M/y h:mm a","MM-y h:mm a","MMM y h:mm a","d MMM, y h:mm a","E, d MMM, y h:mm a","MMMM y h:mm a","QQQ y h:mm a","QQQQ y h:mm a","Y 𑄃𑄬𑄢𑄴 𑄖𑄧𑄟𑄴 𑄥𑄛𑄴𑄖 w h:mm a","Y 𑄃𑄬𑄢𑄴 𑄖𑄧𑄟𑄴 𑄥𑄛𑄴𑄖 w h:mm a","EEEE, d MMMM, y HH:mm","d MMMM, y HH:mm","d MMM, y HH:mm","d/M/yy HH:mm","d HH:mm","ccc HH:mm","d E HH:mm","y G HH:mm","MMM y G HH:mm","d MMM, y G HH:mm","E, d MMM, y G HH:mm","L HH:mm","d/M HH:mm","E, d-M HH:mm","dd-MM HH:mm","LLL HH:mm","d MMM HH:mm","E d MMM HH:mm","d MMMM HH:mm","E d MMMM HH:mm","MMMM 𑄃𑄬𑄢𑄴 𑄠𑄴 𑄥𑄛𑄴𑄖 W HH:mm","MMMM 𑄃𑄬𑄢𑄴 𑄠𑄴 𑄥𑄛𑄴𑄖 W HH:mm","y HH:mm","M/y HH:mm","d/M/y HH:mm","E, d/M/y HH:mm","MM-y HH:mm","MMM y HH:mm","d MMM, y HH:mm","E, d MMM, y HH:mm","MMMM y HH:mm","QQQ y HH:mm","QQQQ y HH:mm","Y 𑄃𑄬𑄢𑄴 𑄖𑄧𑄟𑄴 𑄥𑄛𑄴𑄖 w HH:mm","Y 𑄃𑄬𑄢𑄴 𑄖𑄧𑄟𑄴 𑄥𑄛𑄴𑄖 w HH:mm","EEEE, d MMMM, y h:mm:ss a","d MMMM, y h:mm:ss a","d MMM, y h:mm:ss a","d/M/yy h:mm:ss a","d h:mm:ss a","ccc h:mm:ss a","d E h:mm:ss a","y G h:mm:ss a","MMM y G h:mm:ss a","d MMM, y G h:mm:ss a","E, d MMM, y G h:mm:ss a","L h:mm:ss a","d/M h:mm:ss a","E, d-M h:mm:ss a","dd-MM h:mm:ss a","LLL h:mm:ss a","d MMM h:mm:ss a","E d MMM h:mm:ss a","d MMMM h:mm:ss a","E d MMMM h:mm:ss a","MMMM 𑄃𑄬𑄢𑄴 𑄠𑄴 𑄥𑄛𑄴𑄖 W h:mm:ss a","MMMM 𑄃𑄬𑄢𑄴 𑄠𑄴 𑄥𑄛𑄴𑄖 W h:mm:ss a","y h:mm:ss a","M/y h:mm:ss a","d/M/y h:mm:ss a","E, d/M/y h:mm:ss a","MM-y h:mm:ss a","MMM y h:mm:ss a","d MMM, y h:mm:ss a","E, d MMM, y h:mm:ss a","MMMM y h:mm:ss a","QQQ y h:mm:ss a","QQQQ y h:mm:ss a","Y 𑄃𑄬𑄢𑄴 𑄖𑄧𑄟𑄴 𑄥𑄛𑄴𑄖 w h:mm:ss a","Y 𑄃𑄬𑄢𑄴 𑄖𑄧𑄟𑄴 𑄥𑄛𑄴𑄖 w h:mm:ss a","EEEE, d MMMM, y HH:mm:ss","d MMMM, y HH:mm:ss","d MMM, y HH:mm:ss","d/M/yy HH:mm:ss","d HH:mm:ss","ccc HH:mm:ss","d E HH:mm:ss","y G HH:mm:ss","MMM y G HH:mm:ss","d MMM, y G HH:mm:ss","E, d MMM, y G HH:mm:ss","L HH:mm:ss","d/M HH:mm:ss","E, d-M HH:mm:ss","dd-MM HH:mm:ss","LLL HH:mm:ss","d MMM HH:mm:ss","E d MMM HH:mm:ss","d MMMM HH:mm:ss","E d MMMM HH:mm:ss","MMMM 𑄃𑄬𑄢𑄴 𑄠𑄴 𑄥𑄛𑄴𑄖 W HH:mm:ss","MMMM 𑄃𑄬𑄢𑄴 𑄠𑄴 𑄥𑄛𑄴𑄖 W HH:mm:ss","y HH:mm:ss","M/y HH:mm:ss","d/M/y HH:mm:ss","E, d/M/y HH:mm:ss","MM-y HH:mm:ss","MMM y HH:mm:ss","d MMM, y HH:mm:ss","E, d MMM, y HH:mm:ss","MMMM y HH:mm:ss","QQQ y HH:mm:ss","QQQQ y HH:mm:ss","Y 𑄃𑄬𑄢𑄴 𑄖𑄧𑄟𑄴 𑄥𑄛𑄴𑄖 w HH:mm:ss","Y 𑄃𑄬𑄢𑄴 𑄖𑄧𑄟𑄴 𑄥𑄛𑄴𑄖 w HH:mm:ss","EEEE, d MMMM, y h:mm:ss a v","d MMMM, y h:mm:ss a v","d MMM, y h:mm:ss a v","d/M/yy h:mm:ss a v","d h:mm:ss a v","ccc h:mm:ss a v","d E h:mm:ss a v","y G h:mm:ss a v","MMM y G h:mm:ss a v","d MMM, y G h:mm:ss a v","E, d MMM, y G h:mm:ss a v","L h:mm:ss a v","d/M h:mm:ss a v","E, d-M h:mm:ss a v","dd-MM h:mm:ss a v","LLL h:mm:ss a v","d MMM h:mm:ss a v","E d MMM h:mm:ss a v","d MMMM h:mm:ss a v","E d MMMM h:mm:ss a v","MMMM 𑄃𑄬𑄢𑄴 𑄠𑄴 𑄥𑄛𑄴𑄖 W h:mm:ss a v","MMMM 𑄃𑄬𑄢𑄴 𑄠𑄴 𑄥𑄛𑄴𑄖 W h:mm:ss a v","y h:mm:ss a v","M/y h:mm:ss a v","d/M/y h:mm:ss a v","E, d/M/y h:mm:ss a v","MM-y h:mm:ss a v","MMM y h:mm:ss a v","d MMM, y h:mm:ss a v","E, d MMM, y h:mm:ss a v","MMMM y h:mm:ss a v","QQQ y h:mm:ss a v","QQQQ y h:mm:ss a v","Y 𑄃𑄬𑄢𑄴 𑄖𑄧𑄟𑄴 𑄥𑄛𑄴𑄖 w h:mm:ss a v","Y 𑄃𑄬𑄢𑄴 𑄖𑄧𑄟𑄴 𑄥𑄛𑄴𑄖 w h:mm:ss a v","EEEE, d MMMM, y HH:mm:ss v","d MMMM, y HH:mm:ss v","d MMM, y HH:mm:ss v","d/M/yy HH:mm:ss v","d HH:mm:ss v","ccc HH:mm:ss v","d E HH:mm:ss v","y G HH:mm:ss v","MMM y G HH:mm:ss v","d MMM, y G HH:mm:ss v","E, d MMM, y G HH:mm:ss v","L HH:mm:ss v","d/M HH:mm:ss v","E, d-M HH:mm:ss v","dd-MM HH:mm:ss v","LLL HH:mm:ss v","d MMM HH:mm:ss v","E d MMM HH:mm:ss v","d MMMM HH:mm:ss v","E d MMMM HH:mm:ss v","MMMM 𑄃𑄬𑄢𑄴 𑄠𑄴 𑄥𑄛𑄴𑄖 W HH:mm:ss v","MMMM 𑄃𑄬𑄢𑄴 𑄠𑄴 𑄥𑄛𑄴𑄖 W HH:mm:ss v","y HH:mm:ss v","M/y HH:mm:ss v","d/M/y HH:mm:ss v","E, d/M/y HH:mm:ss v","MM-y HH:mm:ss v","MMM y HH:mm:ss v","d MMM, y HH:mm:ss v","E, d MMM, y HH:mm:ss v","MMMM y HH:mm:ss v","QQQ y HH:mm:ss v","QQQQ y HH:mm:ss v","Y 𑄃𑄬𑄢𑄴 𑄖𑄧𑄟𑄴 𑄥𑄛𑄴𑄖 w HH:mm:ss v","Y 𑄃𑄬𑄢𑄴 𑄖𑄧𑄟𑄴 𑄥𑄛𑄴𑄖 w HH:mm:ss v","EEEE, d MMMM, y h:mm a v","d MMMM, y h:mm a v","d MMM, y h:mm a v","d/M/yy h:mm a v","d h:mm a v","ccc h:mm a v","d E h:mm a v","y G h:mm a v","MMM y G h:mm a v","d MMM, y G h:mm a v","E, d MMM, y G h:mm a v","L h:mm a v","d/M h:mm a v","E, d-M h:mm a v","dd-MM h:mm a v","LLL h:mm a v","d MMM h:mm a v","E d MMM h:mm a v","d MMMM h:mm a v","E d MMMM h:mm a v","MMMM 𑄃𑄬𑄢𑄴 𑄠𑄴 𑄥𑄛𑄴𑄖 W h:mm a v","MMMM 𑄃𑄬𑄢𑄴 𑄠𑄴 𑄥𑄛𑄴𑄖 W h:mm a v","y h:mm a v","M/y h:mm a v","d/M/y h:mm a v","E, d/M/y h:mm a v","MM-y h:mm a v","MMM y h:mm a v","d MMM, y h:mm a v","E, d MMM, y h:mm a v","MMMM y h:mm a v","QQQ y h:mm a v","QQQQ y h:mm a v","Y 𑄃𑄬𑄢𑄴 𑄖𑄧𑄟𑄴 𑄥𑄛𑄴𑄖 w h:mm a v","Y 𑄃𑄬𑄢𑄴 𑄖𑄧𑄟𑄴 𑄥𑄛𑄴𑄖 w h:mm a v","EEEE, d MMMM, y HH:mm v","d MMMM, y HH:mm v","d MMM, y HH:mm v","d/M/yy HH:mm v","d HH:mm v","ccc HH:mm v","d E HH:mm v","y G HH:mm v","MMM y G HH:mm v","d MMM, y G HH:mm v","E, d MMM, y G HH:mm v","L HH:mm v","d/M HH:mm v","E, d-M HH:mm v","dd-MM HH:mm v","LLL HH:mm v","d MMM HH:mm v","E d MMM HH:mm v","d MMMM HH:mm v","E d MMMM HH:mm v","MMMM 𑄃𑄬𑄢𑄴 𑄠𑄴 𑄥𑄛𑄴𑄖 W HH:mm v","MMMM 𑄃𑄬𑄢𑄴 𑄠𑄴 𑄥𑄛𑄴𑄖 W HH:mm v","y HH:mm v","M/y HH:mm v","d/M/y HH:mm v","E, d/M/y HH:mm v","MM-y HH:mm v","MMM y HH:mm v","d MMM, y HH:mm v","E, d MMM, y HH:mm v","MMMM y HH:mm v","QQQ y HH:mm v","QQQQ y HH:mm v","Y 𑄃𑄬𑄢𑄴 𑄖𑄧𑄟𑄴 𑄥𑄛𑄴𑄖 w HH:mm v","Y 𑄃𑄬𑄢𑄴 𑄖𑄧𑄟𑄴 𑄥𑄛𑄴𑄖 w HH:mm v","EEEE, d MMMM, y mm:ss","d MMMM, y mm:ss","d MMM, y mm:ss","d/M/yy mm:ss","d mm:ss","ccc mm:ss","d E mm:ss","y G mm:ss","MMM y G mm:ss","d MMM, y G mm:ss","E, d MMM, y G mm:ss","L mm:ss","d/M mm:ss","E, d-M mm:ss","dd-MM mm:ss","LLL mm:ss","d MMM mm:ss","E d MMM mm:ss","d MMMM mm:ss","E d MMMM mm:ss","MMMM 𑄃𑄬𑄢𑄴 𑄠𑄴 𑄥𑄛𑄴𑄖 W mm:ss","MMMM 𑄃𑄬𑄢𑄴 𑄠𑄴 𑄥𑄛𑄴𑄖 W mm:ss","y mm:ss","M/y mm:ss","d/M/y mm:ss","E, d/M/y mm:ss","MM-y mm:ss","MMM y mm:ss","d MMM, y mm:ss","E, d MMM, y mm:ss","MMMM y mm:ss","QQQ y mm:ss","QQQQ y mm:ss","Y 𑄃𑄬𑄢𑄴 𑄖𑄧𑄟𑄴 𑄥𑄛𑄴𑄖 w mm:ss","Y 𑄃𑄬𑄢𑄴 𑄖𑄧𑄟𑄴 𑄥𑄛𑄴𑄖 w mm:ss"]},"hourCycle":"h12","nu":["cakm"],"ca":["gregory"],"hc":["h12","","h23"]}},"availableLocales":["ccp"]})
  }}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

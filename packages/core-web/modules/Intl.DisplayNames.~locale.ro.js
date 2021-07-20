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
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("ro").length
)) {
// Intl.DisplayNames.~locale.ro
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"types":{"language":{"long":{"aa":"afar","ab":"abhază","ace":"aceh","ach":"acoli","ada":"adangme","ady":"adyghe","ae":"avestană","af":"afrikaans","afh":"afrihili","agq":"aghem","ain":"ainu","ak":"akan","akk":"akkadiană","ale":"aleută","alt":"altaică meridională","am":"amharică","an":"aragoneză","ang":"engleză veche","anp":"angika","ar":"arabă","ar-001":"arabă standard modernă","arc":"aramaică","arn":"mapuche","arp":"arapaho","ars":"arabă najdi","arw":"arawak","as":"asameză","asa":"asu","ast":"asturiană","av":"avară","awa":"awadhi","ay":"aymara","az":"azeră","ba":"bașkiră","bal":"baluchi","ban":"balineză","bas":"basaa","bax":"bamun","bbj":"ghomala","be":"belarusă","bej":"beja","bem":"bemba","bez":"bena","bfd":"bafut","bg":"bulgară","bgn":"baluchi occidentală","bho":"bhojpuri","bi":"bislama","bik":"bikol","bin":"bini","bkm":"kom","bla":"siksika","bm":"bambara","bn":"bengaleză","bo":"tibetană","br":"bretonă","bra":"braj","brx":"bodo","bs":"bosniacă","bss":"akoose","bua":"buriat","bug":"bugineză","bum":"bulu","byn":"blin","byv":"medumba","ca":"catalană","cad":"caddo","car":"carib","cay":"cayuga","cch":"atsam","ccp":"chakma","ce":"cecenă","ceb":"cebuană","cgg":"chiga","ch":"chamorro","chb":"chibcha","chg":"chagatai","chk":"chuukese","chm":"mari","chn":"jargon chinook","cho":"choctaw","chp":"chipewyan","chr":"cherokee","chy":"cheyenne","ckb":"kurdă centrală","co":"corsicană","cop":"coptă","cr":"cree","crh":"turcă crimeeană","crs":"creolă franceză seselwa","cs":"cehă","csb":"cașubiană","cu":"slavonă","cv":"ciuvașă","cy":"galeză","da":"daneză","dak":"dakota","dar":"dargwa","dav":"taita","de":"germană","de-AT":"germană (Austria)","de-CH":"germană standard (Elveția)","del":"delaware","den":"slave","dgr":"dogrib","din":"dinka","dje":"zarma","doi":"dogri","dsb":"sorabă de jos","dua":"duala","dum":"neerlandeză medie","dv":"divehi","dyo":"jola-fonyi","dyu":"dyula","dz":"dzongkha","dzg":"dazaga","ebu":"embu","ee":"ewe","efi":"efik","egy":"egipteană veche","eka":"ekajuk","el":"greacă","elx":"elamită","en":"engleză","en-AU":"engleză (Australia)","en-CA":"engleză (Canada)","en-GB":"engleză (Regatul Unit)","en-US":"engleză (Statele Unite ale Americii)","enm":"engleză medie","eo":"esperanto","es":"spaniolă","es-419":"spaniolă (America Latină)","es-ES":"spaniolă (Europa)","es-MX":"spaniolă (Mexic)","et":"estonă","eu":"bască","ewo":"ewondo","fa":"persană","fa-AF":"dari","fan":"fang","fat":"fanti","ff":"fulah","fi":"finlandeză","fil":"filipineză","fj":"fijiană","fo":"feroeză","fon":"fon","fr":"franceză","fr-CA":"franceză (Canada)","fr-CH":"franceză (Elveția)","frc":"franceză cajun","frm":"franceză medie","fro":"franceză veche","frr":"frizonă nordică","frs":"frizonă orientală","fur":"friulană","fy":"frizonă occidentală","ga":"irlandeză","gaa":"ga","gag":"găgăuză","gan":"chineză gan","gay":"gayo","gba":"gbaya","gd":"gaelică scoțiană","gez":"geez","gil":"gilbertină","gl":"galiciană","gmh":"germană înaltă medie","gn":"guarani","goh":"germană înaltă veche","gon":"gondi","gor":"gorontalo","got":"gotică","grb":"grebo","grc":"greacă veche","gsw":"germană (Elveția)","gu":"gujarati","guz":"gusii","gv":"manx","gwi":"gwichʼin","ha":"hausa","hai":"haida","hak":"chineză hakka","haw":"hawaiiană","he":"ebraică","hi":"hindi","hil":"hiligaynon","hit":"hitită","hmn":"hmong","ho":"hiri motu","hr":"croată","hsb":"sorabă de sus","hsn":"chineză xiang","ht":"haitiană","hu":"maghiară","hup":"hupa","hy":"armeană","hz":"herero","ia":"interlingua","iba":"iban","ibb":"ibibio","id":"indoneziană","ie":"interlingue","ig":"igbo","ii":"yi din Sichuan","ik":"inupiak","ilo":"iloko","inh":"ingușă","io":"ido","is":"islandeză","it":"italiană","iu":"inuktitut","ja":"japoneză","jbo":"lojban","jgo":"ngomba","jmc":"machame","jpr":"iudeo-persană","jrb":"iudeo-arabă","jv":"javaneză","ka":"georgiană","kaa":"karakalpak","kab":"kabyle","kac":"kachin","kaj":"jju","kam":"kamba","kaw":"kawi","kbd":"kabardian","kbl":"kanembu","kcg":"tyap","kde":"makonde","kea":"kabuverdianu","kfo":"koro","kg":"congoleză","kgp":"kgp","kha":"khasi","kho":"khotaneză","khq":"koyra chiini","ki":"kikuyu","kj":"kuanyama","kk":"kazahă","kkj":"kako","kl":"kalaallisut","kln":"kalenjin","km":"khmeră","kmb":"kimbundu","kn":"kannada","ko":"coreeană","koi":"komi-permiak","kok":"konkani","kos":"kosrae","kpe":"kpelle","kr":"kanuri","krc":"karaceai-balkar","krl":"kareliană","kru":"kurukh","ks":"cașmiră","ksb":"shambala","ksf":"bafia","ksh":"kölsch","ku":"kurdă","kum":"kumyk","kut":"kutenai","kv":"komi","kw":"cornică","ky":"kârgâză","la":"latină","lad":"ladino","lag":"langi","lah":"lahnda","lam":"lamba","lb":"luxemburgheză","lez":"lezghian","lg":"ganda","li":"limburgheză","lij":"lij","lkt":"lakota","ln":"lingala","lo":"laoțiană","lol":"mongo","lou":"creolă (Louisiana)","loz":"lozi","lrc":"luri de nord","lt":"lituaniană","lu":"luba-katanga","lua":"luba-lulua","lui":"luiseno","lun":"lunda","luo":"luo","lus":"mizo","luy":"luyia","lv":"letonă","mad":"madureză","maf":"mafa","mag":"magahi","mai":"maithili","mak":"makasar","man":"mandingo","mas":"masai","mde":"maba","mdf":"moksha","mdr":"mandar","men":"mende","mer":"meru","mfe":"morisyen","mg":"malgașă","mga":"irlandeză medie","mgh":"makhuwa-meetto","mgo":"meta’","mh":"marshalleză","mi":"maori","mic":"micmac","min":"minangkabau","mk":"macedoneană","ml":"malayalam","mn":"mongolă","mnc":"manciuriană","mni":"manipuri","moh":"mohawk","mos":"mossi","mr":"marathi","ms":"malaeză","mt":"malteză","mua":"mundang","mul":"mai multe limbi","mus":"creek","mwl":"mirandeză","mwr":"marwari","my":"birmană","mye":"myene","myv":"erzya","mzn":"mazanderani","na":"nauru","nan":"chineză min nan","nap":"napolitană","naq":"nama","nb":"norvegiană bokmål","nd":"ndebele de nord","nds":"germana de jos","nds-NL":"saxona de jos","ne":"nepaleză","new":"newari","ng":"ndonga","nia":"nias","niu":"niueană","nl":"neerlandeză","nl-BE":"flamandă","nmg":"kwasio","nn":"norvegiană nynorsk","nnh":"ngiemboon","no":"norvegiană","nog":"nogai","non":"nordică veche","nqo":"n’ko","nr":"ndebele de sud","nso":"sotho de nord","nus":"nuer","nv":"navajo","nwc":"newari clasică","ny":"nyanja","nym":"nyamwezi","nyn":"nyankole","nyo":"nyoro","nzi":"nzima","oc":"occitană","oj":"ojibwa","om":"oromo","or":"odia","os":"osetă","osa":"osage","ota":"turcă otomană","pa":"punjabi","pag":"pangasinan","pal":"pahlavi","pam":"pampanga","pap":"papiamento","pau":"palauană","pcm":"pidgin nigerian","peo":"persană veche","phn":"feniciană","pi":"pali","pl":"poloneză","pon":"pohnpeiană","prg":"prusacă","pro":"provensală veche","ps":"paștună","pt":"portugheză","pt-BR":"portugheză (Brazilia)","pt-PT":"portugheză (Europa)","qu":"quechua","quc":"quiché","raj":"rajasthani","rap":"rapanui","rar":"rarotongan","rm":"romanșă","rn":"kirundi","ro":"română","ro-MD":"română (Republica Moldova)","rof":"rombo","rom":"romani","ru":"rusă","rup":"aromână","rw":"kinyarwanda","rwk":"rwa","sa":"sanscrită","sad":"sandawe","sah":"sakha","sam":"aramaică samariteană","saq":"samburu","sas":"sasak","sat":"santali","sba":"ngambay","sbp":"sangu","sc":"sardiniană","scn":"siciliană","sco":"scots","sd":"sindhi","sdh":"kurdă de sud","se":"sami de nord","see":"seneca","seh":"sena","sel":"selkup","ses":"koyraboro Senni","sg":"sango","sga":"irlandeză veche","sh":"sârbo-croată","shi":"tachelhit","shn":"shan","shu":"arabă ciadiană","si":"singhaleză","sid":"sidamo","sk":"slovacă","sl":"slovenă","sm":"samoană","sma":"sami de sud","smj":"sami lule","smn":"sami inari","sms":"sami skolt","sn":"shona","snk":"soninke","so":"somaleză","sog":"sogdien","sq":"albaneză","sr":"sârbă","srn":"sranan tongo","srr":"serer","ss":"swati","ssy":"saho","st":"sesotho","su":"sundaneză","suk":"sukuma","sus":"susu","sux":"sumeriană","sv":"suedeză","sw":"swahili","sw-CD":"swahili (R.D. Congo)","swb":"comoreză","syc":"siriacă clasică","syr":"siriacă","ta":"tamilă","te":"telugu","tem":"timne","teo":"teso","ter":"tereno","tet":"tetum","tg":"tadjică","th":"thailandeză","ti":"tigrină","tig":"tigre","tiv":"tiv","tk":"turkmenă","tkl":"tokelau","tl":"tagalog","tlh":"klingoniană","tli":"tlingit","tmh":"tamashek","tn":"setswana","to":"tongană","tog":"nyasa tonga","tpi":"tok pisin","tr":"turcă","trv":"taroko","ts":"tsonga","tsi":"tsimshian","tt":"tătară","tum":"tumbuka","tvl":"tuvalu","tw":"twi","twq":"tasawaq","ty":"tahitiană","tyv":"tuvană","tzm":"tamazight din Atlasul Central","udm":"udmurt","ug":"uigură","uga":"ugaritică","uk":"ucraineană","umb":"umbundu","und":"limbă necunoscută","ur":"urdu","uz":"uzbecă","vai":"vai","ve":"venda","vi":"vietnameză","vo":"volapuk","vot":"votică","vun":"vunjo","wa":"valonă","wae":"walser","wal":"wolaita","war":"waray","was":"washo","wbp":"warlpiri","wo":"wolof","wuu":"chineză wu","xal":"calmucă","xh":"xhosa","xog":"soga","yao":"yao","yap":"yapeză","yav":"yangben","ybb":"yemba","yi":"idiș","yo":"yoruba","yue":"cantoneză","za":"zhuang","zap":"zapotecă","zbl":"simboluri Bilss","zen":"zenaga","zgh":"tamazight standard marocană","zh":"chineză","zh-Hans":"chineză simplificată","zh-Hant":"chineză tradițională","zu":"zulu","zun":"zuni","zxx":"fară conținut lingvistic","zza":"zaza"},"short":{"az":"azeră","en-GB":"engleză (Regatul Unit)","en-US":"engleză (S.U.A)"},"narrow":{}},"region":{"long":{"142":"Asia","143":"Asia Centrală","145":"Asia Occidentală","150":"Europa","151":"Europa Orientală","154":"Europa Septentrională","155":"Europa Occidentală","202":"Africa Subsahariană","419":"America Latină","001":"Lume","002":"Africa","003":"America de Nord","005":"America de Sud","009":"Oceania","011":"Africa Occidentală","013":"America Centrală","014":"Africa Orientală","015":"Africa Septentrională","017":"Africa Centrală","018":"Africa Meridională","019":"Americi","021":"America Septentrională","029":"Caraibe","030":"Asia Orientală","034":"Asia Meridională","035":"Asia de Sud-Est","039":"Europa Meridională","053":"Australasia","054":"Melanezia","057":"Regiunea Micronezia","061":"Polinezia","AC":"Insula Ascension","AD":"Andorra","AE":"Emiratele Arabe Unite","AF":"Afganistan","AG":"Antigua și Barbuda","AI":"Anguilla","AL":"Albania","AM":"Armenia","AO":"Angola","AQ":"Antarctica","AR":"Argentina","AS":"Samoa Americană","AT":"Austria","AU":"Australia","AW":"Aruba","AX":"Insulele Åland","AZ":"Azerbaidjan","BA":"Bosnia și Herțegovina","BB":"Barbados","BD":"Bangladesh","BE":"Belgia","BF":"Burkina Faso","BG":"Bulgaria","BH":"Bahrain","BI":"Burundi","BJ":"Benin","BL":"Saint-Barthélemy","BM":"Bermuda","BN":"Brunei","BO":"Bolivia","BQ":"Insulele Caraibe Olandeze","BR":"Brazilia","BS":"Bahamas","BT":"Bhutan","BV":"Insula Bouvet","BW":"Botswana","BY":"Belarus","BZ":"Belize","CA":"Canada","CC":"Insulele Cocos (Keeling)","CD":"Congo - Kinshasa","CF":"Republica Centrafricană","CG":"Congo - Brazzaville","CH":"Elveția","CI":"Côte d’Ivoire","CK":"Insulele Cook","CL":"Chile","CM":"Camerun","CN":"China","CO":"Columbia","CP":"Insula Clipperton","CR":"Costa Rica","CU":"Cuba","CV":"Capul Verde","CW":"Curaçao","CX":"Insula Christmas","CY":"Cipru","CZ":"Cehia","DE":"Germania","DG":"Diego Garcia","DJ":"Djibouti","DK":"Danemarca","DM":"Dominica","DO":"Republica Dominicană","DZ":"Algeria","EA":"Ceuta și Melilla","EC":"Ecuador","EE":"Estonia","EG":"Egipt","EH":"Sahara Occidentală","ER":"Eritreea","ES":"Spania","ET":"Etiopia","EU":"Uniunea Europeană","EZ":"Zona euro","FI":"Finlanda","FJ":"Fiji","FK":"Insulele Falkland","FM":"Micronezia","FO":"Insulele Feroe","FR":"Franța","GA":"Gabon","GB":"Regatul Unit","GD":"Grenada","GE":"Georgia","GF":"Guyana Franceză","GG":"Guernsey","GH":"Ghana","GI":"Gibraltar","GL":"Groenlanda","GM":"Gambia","GN":"Guineea","GP":"Guadelupa","GQ":"Guineea Ecuatorială","GR":"Grecia","GS":"Georgia de Sud și Insulele Sandwich de Sud","GT":"Guatemala","GU":"Guam","GW":"Guineea-Bissau","GY":"Guyana","HK":"R.A.S. Hong Kong, China","HM":"Insula Heard și Insulele McDonald","HN":"Honduras","HR":"Croația","HT":"Haiti","HU":"Ungaria","IC":"Insulele Canare","ID":"Indonezia","IE":"Irlanda","IL":"Israel","IM":"Insula Man","IN":"India","IO":"Teritoriul Britanic din Oceanul Indian","IQ":"Irak","IR":"Iran","IS":"Islanda","IT":"Italia","JE":"Jersey","JM":"Jamaica","JO":"Iordania","JP":"Japonia","KE":"Kenya","KG":"Kârgâzstan","KH":"Cambodgia","KI":"Kiribati","KM":"Comore","KN":"Saint Kitts și Nevis","KP":"Coreea de Nord","KR":"Coreea de Sud","KW":"Kuweit","KY":"Insulele Cayman","KZ":"Kazahstan","LA":"Laos","LB":"Liban","LC":"Sfânta Lucia","LI":"Liechtenstein","LK":"Sri Lanka","LR":"Liberia","LS":"Lesotho","LT":"Lituania","LU":"Luxemburg","LV":"Letonia","LY":"Libia","MA":"Maroc","MC":"Monaco","MD":"Republica Moldova","ME":"Muntenegru","MF":"Sfântul Martin","MG":"Madagascar","MH":"Insulele Marshall","MK":"Macedonia de Nord","ML":"Mali","MM":"Myanmar (Birmania)","MN":"Mongolia","MO":"R.A.S. Macao, China","MP":"Insulele Mariane de Nord","MQ":"Martinica","MR":"Mauritania","MS":"Montserrat","MT":"Malta","MU":"Mauritius","MV":"Maldive","MW":"Malawi","MX":"Mexic","MY":"Malaysia","MZ":"Mozambic","NA":"Namibia","NC":"Noua Caledonie","NE":"Niger","NF":"Insula Norfolk","NG":"Nigeria","NI":"Nicaragua","NL":"Țările de Jos","NO":"Norvegia","NP":"Nepal","NR":"Nauru","NU":"Niue","NZ":"Noua Zeelandă","OM":"Oman","PA":"Panama","PE":"Peru","PF":"Polinezia Franceză","PG":"Papua-Noua Guinee","PH":"Filipine","PK":"Pakistan","PL":"Polonia","PM":"Saint-Pierre și Miquelon","PN":"Insulele Pitcairn","PR":"Puerto Rico","PS":"Teritoriile Palestiniene","PT":"Portugalia","PW":"Palau","PY":"Paraguay","QA":"Qatar","QO":"Oceania Periferică","RE":"Réunion","RO":"România","RS":"Serbia","RU":"Rusia","RW":"Rwanda","SA":"Arabia Saudită","SB":"Insulele Solomon","SC":"Seychelles","SD":"Sudan","SE":"Suedia","SG":"Singapore","SH":"Sfânta Elena","SI":"Slovenia","SJ":"Svalbard și Jan Mayen","SK":"Slovacia","SL":"Sierra Leone","SM":"San Marino","SN":"Senegal","SO":"Somalia","SR":"Suriname","SS":"Sudanul de Sud","ST":"São Tomé și Príncipe","SV":"El Salvador","SX":"Sint-Maarten","SY":"Siria","SZ":"Eswatini","TA":"Tristan da Cunha","TC":"Insulele Turks și Caicos","TD":"Ciad","TF":"Teritoriile Australe și Antarctice Franceze","TG":"Togo","TH":"Thailanda","TJ":"Tadjikistan","TK":"Tokelau","TL":"Timor-Leste","TM":"Turkmenistan","TN":"Tunisia","TO":"Tonga","TR":"Turcia","TT":"Trinidad și Tobago","TV":"Tuvalu","TW":"Taiwan","TZ":"Tanzania","UA":"Ucraina","UG":"Uganda","UM":"Insulele Îndepărtate ale S.U.A.","UN":"Națiunile Unite","US":"Statele Unite ale Americii","UY":"Uruguay","UZ":"Uzbekistan","VA":"Statul Cetății Vaticanului","VC":"Saint Vincent și Grenadinele","VE":"Venezuela","VG":"Insulele Virgine Britanice","VI":"Insulele Virgine Americane","VN":"Vietnam","VU":"Vanuatu","WF":"Wallis și Futuna","WS":"Samoa","XA":"Pseudo-accente","XB":"Pseudo-Bidi","XK":"Kosovo","YE":"Yemen","YT":"Mayotte","ZA":"Africa de Sud","ZM":"Zambia","ZW":"Zimbabwe","ZZ":"Regiune necunoscută"},"short":{"GB":"Regatul Unit","HK":"Hong Kong","MO":"Macao","PS":"Palestina","UN":"ONU","US":"S.U.A."},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Aghb":"Aghb","Ahom":"Ahom","Arab":"arabă","Aran":"nastaaliq","Armi":"Armi","Armn":"armeană","Avst":"Avst","Bali":"balineză","Bamu":"Bamu","Bass":"Bass","Batk":"Batk","Beng":"bengaleză","Bhks":"Bhks","Bopo":"bopomofo","Brah":"Brah","Brai":"braille","Bugi":"Bugi","Buhd":"Buhd","Cakm":"Cakm","Cans":"silabică aborigenă canadiană unificată","Cari":"Cari","Cham":"Cham","Cher":"Cher","Chrs":"Chrs","Copt":"coptă","Cprt":"cipriotă","Cyrl":"chirilică","Cyrs":"chirilică slavonă bisericească veche","Deva":"devanagari","Diak":"Diak","Dogr":"Dogr","Dsrt":"mormonă","Dupl":"Dupl","Egyd":"demotică egipteană","Egyh":"hieratică egipteană","Egyp":"hieroglife egiptene","Elba":"Elba","Elym":"Elym","Ethi":"etiopiană","Geok":"georgiană bisericească","Geor":"georgiană","Glag":"glagolitică","Gong":"Gong","Gonm":"Gonm","Goth":"gotică","Gran":"Gran","Grek":"greacă","Gujr":"gujarati","Guru":"gurmukhi","Hanb":"hanb","Hang":"hangul","Hani":"han","Hano":"Hano","Hans":"simplificată","Hant":"tradițională","Hatr":"Hatr","Hebr":"ebraică","Hira":"hiragana","Hluw":"Hluw","Hmng":"Hmng","Hmnp":"Hmnp","Hrkt":"silabică japoneză","Hung":"maghiară veche","Inds":"indus","Ital":"italică veche","Jamo":"jamo","Java":"javaneză","Jpan":"japoneză","Kali":"Kali","Kana":"katakana","Khar":"Khar","Khmr":"khmeră","Khoj":"Khoj","Kits":"Kits","Knda":"kannada","Kore":"coreeană","Kthi":"Kthi","Lana":"Lana","Laoo":"laoțiană","Latf":"latină Fraktur","Latg":"latină gaelică","Latn":"latină","Lepc":"Lepc","Limb":"Limb","Lina":"lineară A","Linb":"lineară B","Lisu":"Lisu","Lyci":"Lyci","Lydi":"lidiană","Mahj":"Mahj","Maka":"Maka","Mand":"Mand","Mani":"Mani","Marc":"Marc","Maya":"hieroglife maya","Medf":"Medf","Mend":"Mend","Merc":"Merc","Mero":"Mero","Mlym":"malayalam","Modi":"Modi","Mong":"mongolă","Mroo":"Mroo","Mtei":"meitei mayek","Mult":"Mult","Mymr":"birmană","Nand":"Nand","Narb":"Narb","Nbat":"Nbat","Newa":"Newa","Nkoo":"Nkoo","Nshu":"Nshu","Ogam":"Ogam","Olck":"ol chiki","Orkh":"Orkh","Orya":"oriya","Osge":"Osge","Osma":"Osma","Palm":"Palm","Pauc":"Pauc","Perm":"Perm","Phag":"Phag","Phli":"Phli","Phlp":"Phlp","Phnx":"feniciană","Plrd":"Plrd","Prti":"Prti","Qaag":"zawgyi","Rjng":"Rjng","Rohg":"Rohg","Runr":"runică","Samr":"Samr","Sarb":"Sarb","Saur":"Saur","Sgnw":"Sgnw","Shaw":"Shaw","Shrd":"Shrd","Sidd":"Sidd","Sind":"Sind","Sinh":"singaleză","Sogd":"Sogd","Sogo":"Sogo","Sora":"Sora","Soyo":"Soyo","Sund":"Sund","Sylo":"Sylo","Syrc":"siriacă","Syrj":"siriacă occidentală","Syrn":"siriacă orientală","Tagb":"Tagb","Takr":"Takr","Tale":"Tale","Talu":"Talu","Taml":"tamilă","Tang":"Tang","Tavt":"Tavt","Telu":"telugu","Tfng":"berberă","Tglg":"Tglg","Thaa":"thaana","Thai":"thailandeză","Tibt":"tibetană","Tirh":"Tirh","Ugar":"Ugar","Vaii":"Vaii","Wara":"Wara","Wcho":"Wcho","Xpeo":"persană veche","Xsux":"cuneiformă sumero-akkadiană","Yezi":"Yezi","Yiii":"Yiii","Zanb":"Zanb","Zinh":"moștenită","Zmth":"notație matematică","Zsye":"emoji","Zsym":"simboluri","Zxxx":"nescrisă","Zyyy":"comună","Zzzz":"scriere necunoscută"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"pesetă andorrană","AED":"dirham din Emiratele Arabe Unite","AFA":"AFA","AFN":"afgani afgan","ALK":"ALK","ALL":"lek","AMD":"dram armenesc","ANG":"gulden neerlandez antilez","AOA":"kwanza angoleză","AOK":"AOK","AON":"AON","AOR":"AOR","ARA":"ARA","ARL":"ARL","ARM":"ARM","ARP":"peso argentinian (1983–1985)","ARS":"peso argentinian","ATS":"șiling austriac","AUD":"dolar australian","AWG":"florin aruban","AZM":"manat azer (1993–2006)","AZN":"manat azer","BAD":"dinar Bosnia-Herțegovina (1992–1994)","BAM":"marcă convertibilă","BAN":"BAN","BBD":"dolar din Barbados","BDT":"taka din Bangladesh","BEC":"franc belgian (convertibil)","BEF":"franc belgian","BEL":"franc belgian (financiar)","BGL":"BGL","BGM":"BGM","BGN":"leva","BGO":"BGO","BHD":"dinar din Bahrain","BIF":"franc burundez","BMD":"dolar din Bermuda","BND":"dolar din Brunei","BOB":"boliviano","BOL":"BOL","BOP":"peso bolivian","BOV":"mvdol bolivian","BRB":"BRB","BRC":"BRC","BRE":"cruzeiro brazilian (1990–1993)","BRL":"real","BRN":"BRN","BRR":"cruzeiro brazilian (1993–1994)","BRZ":"BRZ","BSD":"dolar din Bahamas","BTN":"ngultrum din Bhutan","BUK":"kyat birman","BWP":"pula Botswana","BYB":"BYB","BYN":"rublă belarusă","BYR":"rublă belarusă (2000–2016)","BZD":"dolar din Belize","CAD":"dolar canadian","CDF":"franc congolez","CHE":"CHE","CHF":"franc elvețian","CHW":"CHW","CLE":"CLE","CLF":"CLF","CLP":"peso chilian","CNH":"yuan chinezesc (offshore)","CNX":"CNX","CNY":"yuan chinezesc","COP":"peso columbian","COU":"COU","CRC":"colón costarican","CSD":"dinar Serbia și Muntenegru (2002–2006)","CSK":"CSK","CUC":"peso cubanez convertibil","CUP":"peso cubanez","CVE":"escudo din Capul Verde","CYP":"liră cipriotă","CZK":"coroană cehă","DDM":"marcă est-germană","DEM":"marcă germană","DJF":"franc djiboutian","DKK":"coroană daneză","DOP":"peso dominican","DZD":"dinar algerian","ECS":"sucre Ecuador","ECV":"ECV","EEK":"coroană estoniană","EGP":"liră egipteană","ERN":"nakfa eritreeană","ESA":"peseta spaniolă (cont A)","ESB":"peseta spaniolă (cont convertibil)","ESP":"pesetă spaniolă","ETB":"birr etiopian","EUR":"euro","FIM":"marcă finlandeză","FJD":"dolar fijian","FKP":"liră din Insulele Falkland","FRF":"franc francez","GBP":"liră sterlină","GEK":"GEK","GEL":"lari georgian","GHC":"cedi Ghana (1979–2007)","GHS":"cedi ghanez","GIP":"liră din Gibraltar","GMD":"dalasi din Gambia","GNF":"franc guineean","GNS":"GNS","GQE":"GQE","GRD":"drahmă grecească","GTQ":"quetzal guatemalez","GWE":"GWE","GWP":"peso Guineea-Bissau","GYD":"dolar guyanez","HKD":"dolar din Hong Kong","HNL":"lempira honduriană","HRD":"dinar croat","HRK":"kuna","HTG":"gourde din Haiti","HUF":"forint","IDR":"rupie indoneziană","IEP":"liră irlandeză","ILP":"liră israeliană","ILR":"ILR","ILS":"șechel israelian nou","INR":"rupie indiană","IQD":"dinar irakian","IRR":"rial iranian","ISJ":"ISJ","ISK":"coroană islandeză","ITL":"liră italiană","JMD":"dolar jamaican","JOD":"dinar iordanian","JPY":"yen japonez","KES":"șiling kenyan","KGS":"som kârgâz","KHR":"riel cambodgian","KMF":"franc comorian","KPW":"won nord-coreean","KRH":"KRH","KRO":"KRO","KRW":"won sud-coreean","KWD":"dinar kuweitian","KYD":"dolar din Insulele Cayman","KZT":"tenge kazahă","LAK":"kip laoțian","LBP":"liră libaneză","LKR":"rupie srilankeză","LRD":"dolar liberian","LSL":"loti lesothian","LTL":"litu lituanian","LTT":"LTT","LUC":"franc convertibil luxemburghez","LUF":"franc luxemburghez","LUL":"franc financiar luxemburghez","LVL":"lats letonian","LVR":"rublă Letonia","LYD":"dinar libian","MAD":"dirham marocan","MAF":"franc marocan","MCF":"MCF","MDC":"MDC","MDL":"leu moldovenesc","MGA":"ariary malgaș","MGF":"franc Madagascar","MKD":"denar","MKN":"MKN","MLF":"franc Mali","MMK":"kyat din Myanmar","MNT":"tugrik mongol","MOP":"pataca din Macao","MRO":"ouguiya mauritană (1973–2017)","MRU":"ouguiya mauritană","MTL":"liră malteză","MTP":"MTP","MUR":"rupie mauritiană","MVP":"MVP","MVR":"rufiyaa maldiviană","MWK":"kwacha malawiană","MXN":"peso mexican","MXP":"peso mexican de argint (1861–1992)","MXV":"MXV","MYR":"ringgit malaiezian","MZE":"escudo Mozambic","MZM":"metical Mozambic vechi","MZN":"metical mozambican","NAD":"dolar namibian","NGN":"naira nigeriană","NIC":"cordoba nicaraguană (1988–1991)","NIO":"córdoba oro","NLG":"gulden olandez","NOK":"coroană norvegiană","NPR":"rupie nepaleză","NZD":"dolar neozeelandez","OMR":"rial omanez","PAB":"balboa panameză","PEI":"inti peruvian","PEN":"sol","PES":"sol peruvian (1863–1965)","PGK":"kina din Papua-Noua Guinee","PHP":"peso filipinez","PKR":"rupie pakistaneză","PLN":"zlot","PLZ":"zlot polonez (1950–1995)","PTE":"PTE","PYG":"guarani","QAR":"rial qatarian","RHD":"dolar rhodesian","ROL":"leu românesc (1952–2006)","RON":"leu românesc","RSD":"dinar sârbesc","RUB":"rublă rusească","RUR":"RUR","RWF":"franc rwandez","SAR":"rial saudit","SBD":"dolar din Insulele Solomon","SCR":"rupie din Seychelles","SDD":"dinar sudanez","SDG":"liră sudaneză","SDP":"liră sudaneză (1957–1998)","SEK":"coroană suedeză","SGD":"dolar singaporez","SHP":"liră Insula Sf. Elena","SIT":"tolar sloven","SKK":"coroană slovacă","SLL":"leone din Sierra Leone","SOS":"șiling somalez","SRD":"dolar surinamez","SRG":"gulden Surinam","SSP":"liră din Sudanul de Sud","STD":"dobra Sao Tome și Principe (1977–2017)","STN":"dobra Sao Tome și Principe","SUR":"rublă sovietică","SVC":"colon El Salvador","SYP":"liră siriană","SZL":"lilangeni din Swaziland","THB":"baht thailandez","TJR":"rublă Tadjikistan","TJS":"somoni tadjic","TMM":"manat turkmen (1993–2009)","TMT":"manat turkmen","TND":"dinar tunisian","TOP":"pa’anga tongană","TPE":"TPE","TRL":"liră turcească (1922–2005)","TRY":"liră turcească","TTD":"dolar din Trinidad și Tobago","TWD":"dolar nou din Taiwan","TZS":"șiling tanzanian","UAH":"grivnă","UAK":"carboavă ucraineană","UGS":"șiling ugandez (1966–1987)","UGX":"șiling ugandez","USD":"dolar american","USN":"dolar american (ziua următoare)","USS":"dolar american (aceeași zi)","UYI":"UYI","UYP":"peso Uruguay (1975–1993)","UYU":"peso uruguayan","UYW":"UYW","UZS":"sum Uzbekistan","VEB":"bolivar Venezuela (1871–2008)","VEF":"bolivar venezuelean (2008–2018)","VES":"bolívar soberano","VND":"dong vietnamez","VNN":"VNN","VUV":"vatu din Vanuatu","WST":"tala samoană","XAF":"franc CFA BEAC","XAG":"argint","XAU":"aur","XBA":"unitate compusă europeană","XBB":"unitate monetară europeană","XBC":"unitate de cont europeană (XBC)","XBD":"unitate de cont europeană (XBD)","XCD":"dolar est-caraib","XDR":"drepturi speciale de tragere","XEU":"unitate de monedă europeană","XFO":"franc francez de aur","XFU":"franc UIC francez","XOF":"franc CFA BCEAO","XPD":"paladiu","XPF":"franc CFP","XPT":"platină","XRE":"XRE","XSU":"XSU","XTS":"cod monetar de test","XUA":"XUA","XXX":"monedă necunoscută","YDD":"dinar Yemen","YER":"rial yemenit","YUD":"dinar iugoslav greu","YUM":"dinar iugoslav nou","YUN":"dinar iugoslav convertibil","YUR":"YUR","ZAL":"rand sud-african (financiar)","ZAR":"rand sud-african","ZMK":"kwacha zambian (1968–2012)","ZMW":"kwacha zambian","ZRN":"zair nou","ZRZ":"ZRZ","ZWD":"dolar Zimbabwe (1980–2008)","ZWL":"dolar Zimbabwe (2009)","ZWR":"dolar Zimbabwe (2008)"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}},"locale":"ro"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

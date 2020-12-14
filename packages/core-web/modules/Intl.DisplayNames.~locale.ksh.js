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
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("ksh").length
)) {
// Intl.DisplayNames.~locale.ksh
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"types":{"language":{"long":{"aa":"Afahresch","ab":"Abchahsesch","ace":"Aschenehsesch","ada":"Adangmesch","ady":"Adygehjsch","ae":"Avästahnesch","aeb":"Tonehsesch Arahbesch","af":"Afrikaans","afh":"Afrehihlesch","agq":"Aghehmesch","ain":"Aijnu","ak":"Akahnesch","akk":"Akahdesch","ale":"Ale’uhtesch","am":"Amhahresch","an":"Arrajonehsesch","ang":"Ahl Änglesch","anp":"Anjikahnesch","ar":"Arahbesch","ar-001":"Schtandatt Arahbesch","arp":"Arrappaho","arq":"Aljehresch Arahbesch","ary":"Marokahnesch Arahbesch","arz":"Äjiptesch Arahbesch","as":"Aßamehsesch","asa":"Pare","ase":"Amärrekahnesche Blendeschprohch","ast":"Astuhrejahnesch","av":"Avahresch","awa":"Awahdesch","ay":"Aimahresch","az":"Asserbaidschahnesch","az-Arab":"Södasserbaidschahnesch","ba":"Baschkihresch","bal":"Beluhtschesch","ban":"Balinehsesch","bar":"Bairesch","bas":"Basaa-Schprohche","be":"Wiißrußesch","bem":"Bemba","bez":"Bena","bg":"Bulljahresch","bho":"Bhohdschpuresch","bi":"Bislahmesch","bin":"Edo","bm":"Bambara","bn":"Bängjahlesch","bo":"Tibehtesch","bpy":"Bischnuprejahnesch","br":"Bettohnesch","bra":"Brahjesch","brh":"Brahuijesch","brx":"Boddo","bs":"Boßnesch","bua":"Burejahtesch","bug":"Bujinehsesch","byn":"Bilihnesch","ca":"Kattalahnesch","ccp":"ccp","ce":"Tschätschehnesch","ceb":"Zebuwahnesch","cgg":"Kihja-Schprohch","ch":"Chamorru","chk":"Trukehsesch","chm":"Mahresch","cho":"Tschoktoh","chr":"Tschärrokeh","chy":"Tschäjänn","ckb":"Zäntrahl-Kurrdesch","co":"Korsesch","cop":"Koptesch","cs":"Tschäschesch","csb":"Kaschuhbesch","cu":"Kerscheßlahwesch","cv":"Tschowaschesch","cy":"Wallihsesch","da":"Dähnesch","dak":"Dakohtesch","dar":"Darjihnesch","dav":"Dawedahnesch","de":"Deutsch","de-AT":"Deutsch uß Öhßterich","de-CH":"Deutsch uß de Schweijz","dgr":"Dohjribesch","dje":"Djerma","dsb":"Niddersorbesch","dua":"Du’ala","dum":"Meddelnehderlängsch","dv":"Divehjesch","dyo":"Jola-Fonyisch","dz":"Butahnesch","dzg":"Dassajahnesch","ebu":"Kîembu","ee":"Ewe","efi":"Äffiksch","egl":"Emilijahnesch","egy":"Ahl Äjiptesch","eka":"Ekajukesch","el":"Jrihschesch","en":"Änglesch","en-AU":"Änglesch uß Außtrahlije","en-CA":"Änglesch uß Kanada","en-GB":"Änglesch uß Jruhßbrettannije","en-US":"Amärrekahnesch Änglesch","enm":"Meddelänglesch","eo":"Esperanto","es":"Schpahnesch","es-419":"Schpahnesch uß Latting-Ammärrika","es-ES":"Schpahnesch en Schpahneje","es-MX":"Schpahnesch en Mäxikoh","esu":"Zäntrahl-Juppik","et":"Äßnesch","eu":"Baskesch","ewo":"Ewonndo","fa":"Pärsesch","fa-AF":"Pärsesch en Afjaanistahn","ff":"Fulfulde","fi":"Finnesch","fil":"Fillipihnesch","fj":"Fihdschesch","fo":"Färröhresch","fon":"Fohnesch","fr":"Franzühsesch","fr-CA":"Franzühsesch uß Kanada","fr-CH":"Franzühsesch uß de Schweijz","frc":"frc","fur":"Frijauhlesch","fy":"Wäßfrihsesch","ga":"Ihresch","gaa":"Jah","gd":"gd","gez":"Ji’is-Ahl-Ättejohpesch","gil":"Jillbättehsesch","gl":"Jallihzesch","gn":"Juwarahnesch","gor":"Jorontalohsch","gsw":"Schwitzerdütsch","gu":"Gutscharatesch","guz":"guz","gv":"Mangx","ha":"Haußa","haw":"Hauajahnesch","he":"Hebrähjesch","hi":"Hinndi","hil":"Hiligaynon","hmn":"Hmong","hr":"Krowatesch","hsb":"Bovversorrbesch","ht":"Ha’iihtesch","hu":"Unnjarresch","hup":"Hupa","hy":"Armehnesch","hz":"Herrehro","ia":"de Interlingua","iba":"Ibahnesch","ibb":"Ibibio","id":"Indonehsesch","ig":"Igbo","ii":"ii","ilo":"Ilokahnesch","inh":"Engjuschesch","io":"Ihdo","is":"Ißlänndesch","it":"Etalljähnesch","iu":"Inuktitut","izh":"Ingjrijahnesch","ja":"Japahnesch","jam":"Jamaikahnesch-Änglesch","jbo":"Lodschbahn","jgo":"Njomba","jmc":"jmc","jpr":"Jühdesch-Pärsesch","jut":"Jüttesch","jv":"Javahnesch","ka":"Je’orjesch","kab":"Kabyhlesch","kam":"Kamba vun Kehnija","kbd":"Kabadihnesch","kde":"Chimakonde","kea":"Kapvärdesch","kfo":"Koro vun de Älfebeijnköß","kha":"Khasi","khq":"Kojra Tschihni","ki":"Rekohjo","kj":"Oschivambo","kk":"Kassakkesch","kkj":"Kako","kl":"Jröhnländesch","kln":"Kaländjihnesch","km":"Khmer","kmb":"Kimbundu","kn":"Kannada","ko":"Korrejaanesch","kok":"Kon’kahnesch","kpe":"Kpäle","kr":"Kanuhresch","krc":"Karatschaj-Balkahresch-Törkesch","krl":"Karehlesch","kru":"Korochesch","ks":"Kaschmihresch","ksb":"ksb","ksf":"Bafijahnesch","ksh":"Kölsch","ku":"Kurrdesch","kum":"Kumykesch","kv":"Kohmesch","kw":"Kornesch","ky":"Kirjihsesch","la":"Lateijnesch","lad":"Ladihnesch","lag":"Lango","lah":"de Landa-Schprooche","lb":"Luxemborjesch","lez":"Lesjesch","lg":"Lugannda","li":"Lemburjesch","lkt":"Lakota","ln":"Lingjalla","lo":"Lahootesch","lou":"lou","loz":"Silohzi","lrc":"Nood-Luhresch","lt":"Littouesch","lu":"Kiluba","lua":"Tschiluba","lun":"Schilunnda","luo":"Luo","luy":"Luhjesch","lv":"Lättesch","mai":"mai","mas":"mas","mdf":"Mokschah","mer":"mer","mfe":"mfe","mg":"Madajaßkesch","mgh":"mgh","mgo":"mgo","mh":"Maschallehsesch","mi":"Ma’ohresch","mk":"Mazedohnesch","ml":"Mallajalam","mn":"Mongjohlesch","mni":"Meitei-Manipuhresch","mr":"Marrahtesch","ms":"Mallaijesch","mt":"Maltehsesch","mua":"Mundang","mul":"-ongerscheidlijje Schprohche-","mus":"Krihk","mwl":"Mirandehsesch","my":"Burmehsesch","myv":"Ärsjahnesch","mzn":"mzn","na":"Nauruhesch","nap":"Napolletahnesch","naq":"naq","nb":"Norrwehjesch Bokmål","nd":"Nood-Ndebele","nds":"nds","nds-NL":"Nehdersaksesch en de Nederläng","ne":"Nepallehsesch","new":"Newahresch","ng":"Ndongjahnesch","nl":"Holländesch","nl-BE":"Flähmesch","nmg":"Gyele","nn":"Neu Norrwehjesch","nnh":"Njijembohn","no":"Norrwehjesch","nog":"Nojal","nso":"Nood-Sohto","nus":"nus","nv":"Navvacho","ny":"Schi-Schewa","nyn":"nyn","om":"om","or":"Oriija","os":"Oßeetesch","pa":"Panschaabesch","pcm":"pcm","pl":"Pollnesch","prg":"prg","ps":"Paschtuunesch","pt":"Pochtojesesch","pt-BR":"Brasilljaanesch Pochtojesesch","pt-PT":"Pochtojesesch uß Pochtojall","qu":"Kättschowa","quc":"K’ische’","rm":"Rätoromaanesch","rn":"K-Rundesch","ro":"Rumänesch","ro-MD":"Rumänesch en Moldaavije","rof":"Kirombo","root":"root","ru":"Rußßesch","rup":"Arromahnesch","rw":"Kinja-Ruandesch","rwk":"rwk","sa":"Sanskrit","sah":"Jackutesch","saq":"saq","sat":"sat","sba":"Njambaij","sbp":"sbp","sd":"Sinndi","se":"Nood-Lappländesch","seh":"seh","ses":"Kojraboro Senni","sg":"Sangjo","sh":"Särbokowatesch","shi":"Taschelhittesch","si":"Singjaleesesch","sk":"ẞlovakesch","sl":"ẞloveenesch","sm":"Sammohanesch","smj":"Lule-Läppländesch","smn":"Inahri Lappländesch","sn":"Schi-Schona","so":"Somahlesch","sq":"Albahnesch","sr":"Särbesch","ss":"Si-Swatesch","st":"Söd-Sooto","su":"Sindanehsesch","sv":"Schwehdesch","sw":"Suahehlesch","sw-CD":"Suahehlesch en dä Konggo [Kinschasa]","swb":"Kommohresch","syr":"Sührejakkesch","ta":"Tamihlesch","te":"Telluhju","teo":"teo","tet":"Tetumsch","tg":"Tadschihkesch","th":"Tailändesch","ti":"Tijrenejahnesch","tig":"Tigre","tk":"Törkmehnesch","tl":"Tajalloch","tlh":"Klingjohnesch","tn":"Se-Zwahnesch","to":"Tongjahnesch","tpi":"Tok Pisin","tr":"Törkesch","ts":"Xi-Zongjahnesch","tt":"Tattahresch","twq":"Tasawaq","ty":"Tahihtesch","tyv":"Tuvinijahnesch","tzm":"Tamasicht ussem meddlere Atlas","udm":"Udmuchtesch","ug":"Uj’juhresch","uk":"Ukrainesch","umb":"Umbundesch","und":"-onbikannte-Schprooch-","ur":"Urdu/Hindi","uz":"Ußbehkesch","vai":"vai","ve":"Wenda","vi":"Vijätnammehsesch","vo":"Volapük","vun":"vun","wa":"Walohnesch","wae":"Walserdütsch","wal":"Welahmo","war":"Waray-Waray","wo":"Woloff","xal":"Kalmükkesch","xh":"Isi-Khohsa","xog":"xog","yav":"yav","ybb":"Jämmbah","yi":"Jiddesch","yo":"Joruhba","yue":"Kanton-Schinehsesch","zgh":"zgh","zh":"Schinehsesch (Mandarin)","zh-Hans":"Schinehsesch (eijfache Schreff)","zh-Hant":"Schinehsesch (tradizjonälle Schreff)","zu":"Suhlu","zun":"Suhñi","zxx":"kein Schprooch","zza":"Sahsajesch"},"short":{"az":"Asehresch","en-GB":"Brettesch Änglesch","en-US":"Änglesch uß de USA"},"narrow":{}},"region":{"long":{"142":"Aasije","143":"Meddelaasije","145":"Wäß-Aasije","150":"Europpa","151":"Oß-Europpa","154":"Nood-Europpa","155":"Wäß-Europpa","202":"202","419":"Lateinamärrika","001":"de Ääd","002":"Affrika","003":"Nood-Amärrika","005":"Söhd-Amärrika","009":"Ozejahneje","011":"Wäß-Affrika","013":"Meddelammärrika","014":"Oß-Affrika","015":"Nood-Affrika","017":"Meddel-Affrika","018":"Söhd-Affrika","019":"Ammärrika","021":"der Norde vun Amärrika","029":"de Karribik","030":"Oß-Aasije","034":"Söhd-Aasije","035":"Söhd-Oß-Aasije","039":"Söhd-Europpa","053":"de Rejjohn öm Austrahlije","054":"Mellanehsije","057":"de Rejohn vun Mikronehseje","061":"Polinehsije","AC":"Aßension","AD":"Andorra","AE":"Vereinschte Arrabesche Emmirate","AF":"Afjaanistahn","AG":"Antigwa un Barbuda","AI":"Anggwilla","AL":"Albaanije","AM":"Arrmeenije","AO":"Angjoola","AQ":"der Södpol","AR":"Ajjentiinije","AS":"Ammerikaanesch Sammoha","AT":"Öösterisch","AU":"Austraalije","AW":"Aruba","AX":"de Ohland-Enselle","AZ":"Asserbaidschahn","BA":"Boßnije un Herzegovina","BB":"de Ensel Barbados","BD":"Bangladesch","BE":"Bellje","BF":"Bukkinna-Faase","BG":"Bulljaarije","BH":"Bachrain","BI":"Burundi","BJ":"dä Benin","BL":"de Zint Battälmi-Enselle","BM":"de Bermudas","BN":"Brunei","BO":"Bolliivije","BQ":"de karribbesche Nederläng","BR":"Brasilije","BS":"de Bahamas","BT":"Buttaan","BV":"de Buvee-Ensel","BW":"Bozwaana","BY":"Wießrußland","BZ":"Belize","CA":"Kanada","CC":"de Kokkos-Enselle","CD":"dä Konggo (Kinschasa)","CF":"de Zäntraalaffrikaanesche Republik","CG":"dä Konggo (Brassavill)","CH":"de Schweiz","CI":"Älfebeijn-Köß","CK":"de Kuuk-Enselle","CL":"Schiile","CM":"Kammeruhn","CN":"Schiina","CO":"Kolumbije","CP":"de Klipperton-Ensel","CR":"Kostarika","CU":"Kuhba","CV":"de kapvärdesche Enselle","CW":"Curaçao","CX":"de Weihnaachs-Ensel","CY":"Züppere","CZ":"de Tschäschei","DE":"Doütschland","DG":"de Diego-Garcia-Ensel","DJ":"Dschibutti","DK":"Dänemark","DM":"Dominnika","DO":"de Dommenekaanesche Reppublik","DZ":"Alljeerije","EA":"Ze’uta un Meliija","EC":"Äkwador","EE":"Äßland","EG":"Äjüpte","EH":"Wäß-Sahara","ER":"Äritreja","ES":"Schpaanije","ET":"Ättijoopije","EU":"de Europähjesche Unijon","EZ":"EZ","FI":"Finnland","FJ":"de Fidschi-Endelle","FK":"de Falkland-Enselle","FM":"Mikroneesije","FO":"de Färrör-Enselle","FR":"Frankrisch","GA":"Jabuhn","GB":"Jruußbrettannije","GD":"Jrenahda","GE":"Jeorrjije","GF":"Franzüüsesch Jujaana","GG":"Jöönsei","GH":"Jaana","GI":"Jibralltaa","GL":"Jröhnland","GM":"Jambija","GN":"Jinneha","GP":"Juadelupp","GQ":"Äquatorial Jineeja","GR":"Jriescheland","GS":"Söd-Jeorjie un de södlijje Botteramms-Enselle","GT":"Juwatemahla","GU":"Juham","GW":"Jinneha_Bißau","GY":"Jujaana","HK":"Hongkong","HM":"de Heart Ensel un de McDonald-Enselle","HN":"Honduras","HR":"Krowazije","HT":"Ha’itti","HU":"Unjann","IC":"de Kannaresche Enselle","ID":"Indoneesije","IE":"Irrland","IL":"Ißraäl","IM":"de Ensel Män","IN":"Indije","IO":"Brettesche Besezunge em indesche Oozejahn","IQ":"Irak","IR":"Persije","IS":"Ißland","IT":"Itaalije","JE":"Jööseh","JM":"Jammaika","JO":"Jordaanije","JP":"Japan","KE":"Keenija","KG":"Kirrjiisije","KH":"Kambodscha","KI":"Kiribati","KM":"de Kommoore","KN":"Zint Kitts un Nevis","KP":"Nood-Koreja","KR":"Söd-Koreja","KW":"Kuweit","KY":"de Kaiman-Enselle","KZ":"Kassakstahn","LA":"La’os","LB":"Lebbannon","LC":"de Ensel Zint-Lutscha","LI":"Lischteschtein","LK":"Sri Lanka","LR":"Libeerija","LS":"Lesooto","LT":"Littaue","LU":"Luxembursch","LV":"Lätland","LY":"Libbije","MA":"Marokko","MC":"Monakko","MD":"Moldaavije","ME":"et Monteneejro","MF":"de Zint-Määtes-Ensel","MG":"Maddajaska","MH":"de Machschall-Enselle","MK":"MK","ML":"Maali","MM":"Birma","MN":"Mongjolei","MO":"Makau","MP":"de nöödlijje Marijanne-Enselle","MQ":"Machtinik","MR":"Mautitaanije","MS":"Mongßerrat","MT":"Malta","MU":"Maurizijus","MV":"Mallediive","MW":"Malawi","MX":"Mäxiko","MY":"Malaisije","MZ":"Mosambik","NA":"Namiibije","NC":"Neuschottland","NE":"Nijer","NF":"de Noofok-Ensel","NG":"Nikaraagua","NI":"Nikarahguwa","NL":"de Nederläng","NO":"Norrweeje","NP":"Nepall","NR":"Nauru","NU":"Niue","NZ":"Neuseeland","OM":"Oman","PA":"Pannama","PE":"Perruh","PF":"Franzüüsesch Pollineesije","PG":"Papuwa Neujineeja","PH":"Fillipiine","PK":"Pakistahn","PL":"Pole","PM":"Zint Pjäär un Mikelong","PN":"de Pitkärn-Ensel","PR":"Pochtoriko","PS":"Palästina","PT":"Pochtojall","PW":"Pallau","PY":"Parraguwai","QA":"Kataa","QO":"Ozejahnije ußerhallef","RE":"Rehunjohn","RO":"Romäänije","RS":"Särbije","RU":"Rußland","RW":"Ruanda","SA":"Saudi Arraabije","SB":"de Solomone-Enselle","SC":"de Seischälle","SD":"Noodsudahn","SE":"Schweede","SG":"Singjapuur","SH":"de Ensel Zint Hellena","SI":"ẞloveenije","SJ":"de Enselle Svalbard un Jan Mayen","SK":"ẞlovakei","SL":"Sjärra Lejone","SM":"San-Marino","SN":"der Sennejall","SO":"Somaalije","SR":"Sürinamm","SS":"Södsudahn","ST":"Zint Tommeh un Printschipe","SV":"Äl Slavadohr","SX":"Zint Maarten","SY":"Sürije","SZ":"ẞwaasiland","TA":"Tristan da Cunja","TC":"de Enselle Turks un Kaikos","TD":"der Tschadd","TF":"Franzüüsesche Södsee-Enselle","TG":"Toojo","TH":"Tailand","TJ":"Tadschikistahn","TK":"Tokelau","TL":"Oß-Timor","TM":"Turkmenistahn","TN":"Tuneesije","TO":"Tongga","TR":"de Törkei","TT":"Trinidad un Tobähjo","TV":"Tuvalu","TW":"Taiwan","TZ":"Tansanija","UA":"de Ukra’iine","UG":"Ujanda","UM":"de Vereineschte Schtaate vun Amärrika ier ußerhallef jelääje Enselsche","UN":"UN","US":"de vereineschte Schtaate vun Ammärrika","UY":"Urrujwai","UZ":"Ußbeekistahn","VA":"der Vattikahn","VC":"Zint Vinzänz un de Jrenadines-Enselle","VE":"Venezuela","VG":"de brettesche Juffer-Enselle","VI":"de ammärrikahnesche Juffer-Enselle","VN":"Vijätnamm","VU":"Vanuatu","WF":"Wallis un Futuna","WS":"Sammoha","XA":"XA","XB":"XB","XK":"Kosovo","YE":"Jämme","YT":"Majott","ZA":"de Republik Södaffrika","ZM":"Sambija","ZW":"Simbabwe","ZZ":"- Jähjend onbikannt -"},"short":{"GB":"Jruußbrettannije","HK":"Hongkong","MO":"Makau","PS":"Palästina","US":"USA"},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Aghb":"Aghb","Ahom":"Ahom","Arab":"arraabesche Schreff","Aran":"Aran","Armi":"Armi","Armn":"armeenesche Schreff","Avst":"Avst","Bali":"Bali","Bamu":"Bamu","Bass":"Bass","Batk":"Batk","Beng":"bängjaalesche Schreff","Bhks":"Bhks","Bopo":"schineeseche Ömschreff Bopomofo","Brah":"Brah","Brai":"Blindeschreff","Bugi":"Bugi","Buhd":"Buhd","Cakm":"Cakm","Cans":"Cans","Cari":"Cari","Cham":"Cham","Cher":"Cher","Chrs":"Chrs","Copt":"Copt","Cprt":"Cprt","Cyrl":"kürrellesche Schreff","Deva":"indesche Devanajari-Schreff","Diak":"Diak","Dogr":"Dogr","Dsrt":"Dsrt","Dupl":"Dupl","Egyp":"Egyp","Elba":"Elba","Elym":"Elym","Ethi":"ätejoopesche Schreff","Geor":"je’orrjesche Schreff","Glag":"Glag","Gong":"Gong","Gonm":"Gonm","Goth":"Goth","Gran":"Gran","Grek":"jriischesche Schreff","Gujr":"jujaraatesche Schreff","Guru":"indesche Gurmukhi-Schreff","Hanb":"Hanb","Hang":"korrejaanesche Schreff","Hani":"en schineesesche Schreff","Hano":"Hano","Hans":"eijfacher","Hant":"tradizjonäll","Hatr":"Hatr","Hebr":"hebrääjesche Schreff","Hira":"japaanesche Hiddajaana-Schreff","Hluw":"Hluw","Hmng":"Hmng","Hmnp":"Hmnp","Hrkt":"Hrkt","Hung":"Hung","Ital":"Ital","Jamo":"Jamo","Java":"Java","Jpan":"en japaanesche Schreff","Kali":"Kali","Kana":"japaanesche Kattakaana-Schreff","Khar":"Khar","Khmr":"Khmer-Schreff","Khoj":"Khoj","Kits":"Kits","Knda":"indesche Kannada-Schreff","Kore":"korrejaanesche Schreff udder en schineesesche Schreff","Kthi":"Kthi","Lana":"Lana","Laoo":"lahootesche Schreff","Latn":"lateinesche Schreff","Lepc":"Lepc","Limb":"Limb","Lina":"Lina","Linb":"Linb","Lisu":"Lisu","Lyci":"Lyci","Lydi":"Lydi","Mahj":"Mahj","Maka":"Maka","Mand":"Mand","Mani":"Mani","Marc":"Marc","Medf":"Medf","Mend":"Mend","Merc":"Merc","Mero":"Mero","Mlym":"indesche Malajalam-Schreff","Modi":"Modi","Mong":"mongjoolesche Schreff","Mroo":"Mroo","Mtei":"Mtei","Mult":"Mult","Mymr":"birmahnesche Schreff","Nand":"Nand","Narb":"Narb","Nbat":"Nbat","Newa":"Newa","Nkoo":"Nkoo","Nshu":"Nshu","Ogam":"Ogam","Olck":"Olck","Orkh":"Orkh","Orya":"indesche Orija-Schreff","Osge":"Osge","Osma":"Osma","Palm":"Palm","Pauc":"Pauc","Perm":"Perm","Phag":"Phag","Phli":"Phli","Phlp":"Phlp","Phnx":"Phnx","Plrd":"Plrd","Prti":"Prti","Qaag":"Qaag","Rjng":"Rjng","Rohg":"Rohg","Runr":"Runr","Samr":"Samr","Sarb":"Sarb","Saur":"Saur","Sgnw":"Sgnw","Shaw":"Shaw","Shrd":"Shrd","Sidd":"Sidd","Sind":"Sind","Sinh":"singjaleesesche Schreff","Sogd":"Sogd","Sogo":"Sogo","Sora":"Sora","Soyo":"Soyo","Sund":"Sund","Sylo":"Sylo","Syrc":"Syrc","Tagb":"Tagb","Takr":"Takr","Tale":"Tale","Talu":"Talu","Taml":"tamiilesche Schreff","Tang":"Tang","Tavt":"Tavt","Telu":"indesche Telugu-Schreff","Tfng":"Tfng","Tglg":"Tglg","Thaa":"malledivesche Taana-Schreff","Thai":"tailändesche Schreff","Tibt":"tibeetesche Schreff","Tirh":"Tirh","Ugar":"Ugar","Vaii":"Vaii","Wara":"Wara","Wcho":"Wcho","Xpeo":"Xpeo","Xsux":"Xsux","Yezi":"Yezi","Yiii":"Yiii","Zanb":"Zanb","Zinh":"Zinh","Zmth":"Zmth","Zsye":"Zsye","Zsym":"-Zeiche ävver kein Schreff-","Zxxx":"-jaa keij Schreff-","Zyyy":"-öhnß en Schreff-","Zzzz":"-onbikannte Schreff-"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"ADP","AED":"de vereineschte arraabesche Emiraate ier Dirham","AFA":"AFA","AFN":"Afjahni","ALK":"ALK","ALL":"albaanesche Lek","AMD":"armeenesche Dram","ANG":"neederlängsch antillesche Jullde","AOA":"angjolaanesche Kwansa","AOK":"AOK","AON":"AON","AOR":"AOR","ARA":"ARA","ARL":"ARL","ARM":"ARM","ARP":"ARP","ARS":"ajentiinesche Peeso","ATS":"ATS","AUD":"austraalesche Dollaa","AWG":"arubesche Florin","AZM":"Asserbaidschaani Manat (1993–2006)","AZN":"Asserbaidschaani Manat","BAD":"BAD","BAM":"ömtuuschbaa Mark us Boßnije un dä Hächejovvina","BAN":"BAN","BBD":"Barbados-Dollaa","BDT":"Taka us Bangladäsch","BEC":"BEC","BEF":"BEF","BEL":"BEL","BGL":"BGL","BGM":"BGM","BGN":"buljaaresche Lev","BGO":"BGO","BHD":"Bachrainesche Denaa","BIF":"burundesche Frang","BMD":"Bermuuda-Dollaa","BND":"Brunei-Dollaa","BOB":"Bollivijano","BOL":"BOL","BOP":"BOP","BOV":"BOV","BRB":"BRB","BRC":"BRC","BRE":"BRE","BRL":"brasilljaanesche Real","BRN":"BRN","BRR":"BRR","BRZ":"BRZ","BSD":"bahama’sche Dollaa","BTN":"bhutanesesche Ngultrum","BUK":"BUK","BWP":"Pula us Bozwaana","BYB":"BYB","BYN":"wiißrußesche Rubel","BYR":"wiißrußesche Rubel (2000–2016)","BZD":"belizjaanesche Dollaa","CAD":"kannaadesche Dollaa","CDF":"kongjoleesesche Frang","CHE":"CHE","CHF":"schweijzer Fränkli","CHW":"CHW","CLE":"CLE","CLF":"CLF","CLP":"schileenesche Peeso","CNH":"CNH","CNX":"CNX","CNY":"schineesesche Yuan Renminbi","COP":"kolumbesche Peso","COU":"COU","CRC":"koßtarikaanesche Colón","CSD":"CSD","CSK":"CSK","CUC":"ömtuuschbaa kubaanesche Pesos","CUP":"kubaanesche Peesos","CVE":"kapverdesche Eskuudos","CYP":"CYP","CZK":"tschäschesche Kruhne","DDM":"DDM","DEM":"DEM","DJF":"Frang uß Dschibuti","DKK":"dänesche Kruhne","DOP":"dommenikaanesche Peesos","DZD":"aljeresche Denaa","ECS":"ECS","ECV":"ECV","EEK":"Äßnesche Kruhne","EGP":"äjiptesche Pongk","ERN":"Nafka uß Erritreja","ESA":"ESA","ESB":"ESB","ESP":"ESP","ETB":"ätejoopesche Birr","EUR":"Euro","FIM":"FIM","FJD":"Fidschi-Dollaa","FKP":"Pongk vun de Falkland-Enselle","FRF":"FRF","GBP":"brittesche £","GEK":"GEK","GEL":"jeorjesche Lari","GHC":"GHC","GHS":"janaaesche Cedi","GIP":"jibraltaa’sche Pongk","GMD":"jambesche Dalasi","GNF":"Jineea-Frang","GNS":"GNS","GQE":"GQE","GRD":"GRD","GTQ":"juatemalesche Quetzal","GWE":"GWE","GWP":"GWP","GYD":"Juaana-Dollaa","HKD":"Hongkong-Dollaa","HNL":"hondureanesche Lempira","HRD":"HRD","HRK":"krowaatesche Kuna","HTG":"haiitesche Gourde","HUF":"unjarresche Forint","IDR":"indoneesesche Ruupije","IEP":"IEP","ILP":"ILP","ILR":"ILR","ILS":"ißraeelesche Schekel","INR":"indesche Ruupije","IQD":"iraakesche Denaa","IRR":"persesche Rial","ISJ":"ISJ","ISK":"ißländesche Kruhne","ITL":"ITL","JMD":"jamaikaanesche Dollaa","JOD":"Jordaanesche Dollaa","JPY":"japaanesche Jen","KES":"Kenjaanesche Schillinge","KGS":"kirjiisesche Som","KHR":"kambodschaanesche Riel","KMF":"kommooresche Frang","KPW":"noodkorejaansche Won","KRH":"KRH","KRO":"KRO","KRW":"söödkorejaansche Won","KWD":"kuwaitesche Denaa","KYD":"Kaimann-Dollaa","KZT":"kasakesche Tenge","LAK":"loaatesche Kip","LBP":"libaneesesche Pongk","LKR":"schrilankesche Ruupije","LRD":"liberijaanesche Dollaa","LSL":"lesoothesche Loti","LTL":"littouesche Litas","LTT":"LTT","LUC":"LUC","LUF":"LUF","LUL":"LUL","LVL":"lättesche Lats","LVR":"LVR","LYD":"libesche Denaa","MAD":"marrokaanesche Dirhamm","MAF":"MAF","MCF":"MCF","MDC":"MDC","MDL":"moldaavesche Leu","MGA":"madajaskesche Ariary","MGF":"MGF","MKD":"mazedoonesche Denaa","MKN":"MKN","MLF":"MLF","MMK":"burmeesesche Kyat","MNT":"mongjoolesche Tugrik","MOP":"makaneesesche Pataca","MRO":"mauretanesche Ouguiya (1973–2017)","MRU":"mauretanesche Ouguiya","MTL":"MTL","MTP":"MTP","MUR":"maurizjahnesche Ruupije","MVP":"MVP","MVR":"mallediivesche Rufiyaa","MWK":"malaawesche Kwache","MXN":"mexekaanesche Peeso","MXP":"MXP","MXV":"MXV","MYR":"malaisesche Ringgit","MZE":"MZE","MZM":"mosambikaanesche Metical (1980–2006)","MZN":"mossambikaanesche Metical","NAD":"namiibesche Dollaa","NGN":"nijerijaanesche Naira","NIC":"NIC","NIO":"nikarajaanesche Córdoba","NLG":"NLG","NOK":"norrweejesche Kruhne","NPR":"nepaleesesche Ruupije","NZD":"neuseeländesche Dollaa","OMR":"ommaanesche Rijal","PAB":"pannameesesche Balboa","PEI":"PEI","PEN":"perruaanesche Sol","PES":"PES","PGK":"papua neujinejaanesche Kina","PHP":"fillipiinesche Pesos","PKR":"pakestaanesche Ruupije","PLN":"polnesche Złoty","PLZ":"PLZ","PTE":"PTE","PYG":"parajuaanesche Juarani","QAR":"kataaresche Rijal","RHD":"RHD","ROL":"romäänesche Leu (1952–2006)","RON":"romäänesche Leu","RSD":"särbesche Denaare","RUB":"russesche Ruubel","RUR":"RUR","RWF":"ruandesche Frang","SAR":"saudesche Rijal","SBD":"solomonesche Dollaa","SCR":"seischellesche Ruupije","SDD":"SDD","SDG":"sudaneesesche Pongk","SDP":"SDP","SEK":"schweedesche Kruhne","SGD":"singjapurejaanesche Dollaa","SHP":"Zint-Hellena-Pongk","SIT":"SIT","SKK":"ßlovaakesche Kruhne","SLL":"ẞjärra-lejoneesesche Leone","SOS":"somaalesche Schillenge","SRD":"sürinameesesche Dollaa","SRG":"SRG","SSP":"södsudaneesesche Pongk","STD":"Dobra vun São Tomé un Príncipe (1977–2017)","STN":"Dobra vun São Tomé un Príncipe","SUR":"SUR","SVC":"asalvadorejaanesche Cosan","SYP":"süüresche Pund","SZL":"swasiländesche Lilangeni","THB":"tailändesche Baht","TJR":"TJR","TJS":"tadschikißtaanesche Somoni","TMM":"turkmeneßtaanesche Manat (1993–2009)","TMT":"turkmeneßtaanesche Manat","TND":"tuneesesche Denaa","TOP":"tongjanes Paʻangache","TPE":"TPE","TRL":"TRL","TRY":"törkesche Liire","TTD":"Dollaa uß Trinidad un Tobääjo","TWD":"neu taiwaneesesche Dollaa","TZS":"tansaanesche Schillenge","UAH":"ukraijnesche Hryvnia","UAK":"UAK","UGS":"UGS","UGX":"ujandesche Schillenge","USD":"ammärrikaanesche Dollaa","USN":"USN","USS":"USS","UYI":"UYI","UYP":"UYP","UYU":"urrujuwaische Peeso","UYW":"UYW","UZS":"ußbeekesche Som","VEB":"VEB","VEF":"venezuelaanesche Bolívar (2008–2018)","VES":"venezuelaanesche Bolívar","VND":"vijätnammeesesche Dong","VNN":"VNN","VUV":"vanuatesche Vatu","WST":"samowaanesche Tala","XAF":"Kmmeruhner Frang","XAG":"Sellver","XAU":"Jold","XBA":"XBA","XBB":"XBB","XBC":"XBC","XBD":"XBD","XCD":"oß-karribbesche Dollaa","XDR":"XDR","XEU":"XEU","XFO":"franzüüsesche Joldfranke","XFU":"XFU","XOF":"Frang uß de Älfebeinköß","XPD":"Palladijum","XPF":"polineesesche Frang","XPT":"Plaatin","XRE":"XRE","XSU":"XSU","XTS":"Währong zum Prööfe","XUA":"XUA","XXX":"onbikannte Währong","YDD":"YDD","YER":"jemenitesche Rijal","YUD":"YUD","YUM":"YUM","YUN":"YUN","YUR":"YUR","ZAL":"ZAL","ZAR":"södaffrekaanesche Rand","ZMK":"sambesche Kwacha (1968–2012)","ZMW":"sambesche Kwacha","ZRN":"ZRN","ZRZ":"ZRZ","ZWD":"simbabwesche Dollaa (1980–2008)","ZWL":"simbabwesche Dollaa (2009)","ZWR":"ZWR"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} en {1}"}},"locale":"ksh"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

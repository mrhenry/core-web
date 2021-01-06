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
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("is").length
)) {
// Intl.DisplayNames.~locale.is
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"types":{"language":{"long":{"aa":"afár","ab":"abkasíska","ace":"akkíska","ach":"acoli","ada":"adangme","ady":"adýge","ae":"avestíska","af":"afríkanska","afh":"afríhílí","agq":"aghem","ain":"aínu (Japan)","ak":"akan","akk":"akkadíska","ale":"aleúska","alt":"suðuraltaíska","am":"amharíska","an":"aragonska","ang":"fornenska","anp":"angíka","ar":"arabíska","ar-001":"stöðluð nútímaarabíska","arc":"arameíska","arn":"mapuche","arp":"arapahó","arw":"aravakska","as":"assamska","asa":"asu","ast":"astúríska","av":"avaríska","awa":"avadí","ay":"aímara","az":"aserska","ba":"baskír","bal":"balúkí","ban":"balíska","bas":"basa","bax":"bamun","be":"hvítrússneska","bej":"beja","bem":"bemba","bez":"bena","bg":"búlgarska","bgn":"vesturbalotsí","bho":"bojpúrí","bi":"bíslama","bik":"bíkol","bin":"bíní","bla":"siksika","bm":"bambara","bn":"bengalska","bo":"tíbeska","br":"bretónska","bra":"braí","brx":"bódó","bs":"bosníska","bss":"bakossi","bua":"búríat","bug":"búgíska","byn":"blín","ca":"katalónska","cad":"kaddó","car":"karíbamál","cay":"kajúga","cch":"atsam","ccp":"tsjakma","ce":"tsjetsjenska","ceb":"kebúanó","cgg":"kíga","ch":"kamorró","chb":"síbsja","chg":"sjagataí","chk":"sjúkíska","chm":"marí","chn":"sínúk","cho":"sjoktá","chp":"sípevíska","chr":"Cherokee-mál","chy":"sjeyen","ckb":"sorani-kúrdíska","co":"korsíska","cop":"koptíska","cr":"krí","crh":"krímtyrkneska","crs":"seychelles-kreólska","cs":"tékkneska","csb":"kasúbíska","cu":"kirkjuslavneska","cv":"sjúvas","cy":"velska","da":"danska","dak":"dakóta","dar":"dargva","dav":"taíta","de":"þýska","de-AT":"austurrísk þýska","de-CH":"svissnesk háþýska","del":"delaver","den":"slavneska","dgr":"dogríb","din":"dinka","dje":"zarma","doi":"dogrí","dsb":"lágsorbneska","dua":"dúala","dum":"miðhollenska","dv":"dívehí","dyo":"jola-fonyi","dyu":"djúla","dz":"dsongka","dzg":"dazaga","ebu":"embu","ee":"ewe","efi":"efík","egy":"fornegypska","eka":"ekajúk","el":"gríska","elx":"elamít","en":"enska","en-AU":"áströlsk enska","en-CA":"kanadísk enska","en-GB":"bresk enska","en-US":"bandarísk enska","enm":"miðenska","eo":"esperantó","es":"spænska","es-419":"rómönsk-amerísk spænska","es-ES":"evrópsk spænska","es-MX":"mexíkósk spænska","et":"eistneska","eu":"baskneska","ewo":"evondó","fa":"persneska","fa-AF":"darí","fan":"fang","fat":"fantí","ff":"fúla","fi":"finnska","fil":"filippseyska","fj":"fídjeyska","fo":"færeyska","fon":"fón","fr":"franska","fr-CA":"kanadísk franska","fr-CH":"svissnesk franska","frc":"cajun-franska","frm":"miðfranska","fro":"fornfranska","frr":"norðurfrísneska","frs":"austurfrísneska","fur":"fríúlska","fy":"vesturfrísneska","ga":"írska","gaa":"ga","gag":"gagás","gan":"gan","gay":"gajó","gba":"gbaja","gd":"skosk gelíska","gez":"gís","gil":"gilberska","gl":"galisíska","gmh":"miðháþýska","gn":"gvaraní","goh":"fornháþýska","gon":"gondí","gor":"gorontaló","got":"gotneska","grb":"gerbó","grc":"forngríska","gsw":"svissnesk þýska","gu":"gújaratí","guz":"gusii","gv":"manska","gwi":"gvísín","ha":"hása","hai":"haída","haw":"havaíska","he":"hebreska","hi":"hindí","hil":"híligaínon","hit":"hettitíska","hmn":"hmong","ho":"hírímótú","hr":"króatíska","hsb":"hásorbneska","ht":"haítíska","hu":"ungverska","hup":"húpa","hy":"armenska","hz":"hereró","ia":"interlingua","iba":"íban","ibb":"ibibio","id":"indónesíska","ie":"interlingve","ig":"ígbó","ii":"sísúanjí","ik":"ínúpíak","ilo":"ílokó","inh":"ingús","io":"ídó","is":"íslenska","it":"ítalska","iu":"inúktitút","ja":"japanska","jbo":"lojban","jgo":"ngomba","jmc":"masjáme","jpr":"gyðingapersneska","jrb":"gyðingaarabíska","jv":"javanska","ka":"georgíska","kaa":"karakalpak","kab":"kabíle","kac":"kasín","kaj":"jju","kam":"kamba","kaw":"kaví","kbd":"kabardíska","kcg":"tyap","kde":"makonde","kea":"grænhöfðeyska","kfo":"koro","kg":"kongóska","kgp":"kgp","kha":"kasí","kho":"kotaska","khq":"koyra chiini","ki":"kíkújú","kj":"kúanjama","kk":"kasakska","kkj":"kako","kl":"grænlenska","kln":"kalenjin","km":"kmer","kmb":"kimbúndú","kn":"kannada","ko":"kóreska","koi":"kómí-permyak","kok":"konkaní","kos":"kosraska","kpe":"kpelle","kr":"kanúrí","krc":"karasaíbalkar","krl":"karélska","kru":"kúrúk","ks":"kasmírska","ksb":"sjambala","ksf":"bafía","ksh":"kölníska","ku":"kúrdíska","kum":"kúmík","kut":"kútenaí","kv":"komíska","kw":"kornbreska","ky":"kirgiska","la":"latína","lad":"ladínska","lag":"langí","lah":"landa","lam":"lamba","lb":"lúxemborgíska","lez":"lesgíska","lg":"ganda","li":"limbúrgíska","lij":"lij","lkt":"lakóta","ln":"lingala","lo":"laó","lol":"mongó","lou":"kreólska (Louisiana)","loz":"lozi","lrc":"norðurlúrí","lt":"litháíska","lu":"lúbakatanga","lua":"luba-lulua","lui":"lúisenó","lun":"lúnda","luo":"lúó","lus":"lúsaí","luy":"luyia","lv":"lettneska","mad":"madúrska","mag":"magahí","mai":"maítílí","mak":"makasar","man":"mandingó","mas":"masaí","mdf":"moksa","mdr":"mandar","men":"mende","mer":"merú","mfe":"máritíska","mg":"malagasíska","mga":"miðírska","mgh":"makhuwa-meetto","mgo":"meta’","mh":"marshallska","mi":"maorí","mic":"mikmak","min":"mínangkabá","mk":"makedónska","ml":"malajalam","mn":"mongólska","mnc":"mansjú","mni":"manípúrí","moh":"móhíska","mos":"mossí","mr":"maratí","ms":"malaíska","mt":"maltneska","mua":"mundang","mul":"margvísleg mál","mus":"krík","mwl":"mirandesíska","mwr":"marvarí","my":"búrmneska","myv":"ersja","mzn":"masanderaní","na":"nárúska","nap":"napólíska","naq":"nama","nb":"norskt bókmál","nd":"norður-ndebele","nds":"lágþýska; lágsaxneska","nds-NL":"lágsaxneska","ne":"nepalska","new":"nevarí","ng":"ndonga","nia":"nías","niu":"níveska","nl":"hollenska","nl-BE":"flæmska","nmg":"kwasio","nn":"nýnorska","nnh":"ngiemboon","no":"norska","nog":"nógaí","non":"norræna","nqo":"n’ko","nr":"suðurndebele","nso":"norðursótó","nus":"núer","nv":"navahó","nwc":"klassísk nevaríska","ny":"nýanja","nym":"njamvesí","nyn":"nyankole","nyo":"njóró","nzi":"nsíma","oc":"oksítaníska","oj":"ojibva","om":"oromo","or":"óría","os":"ossetíska","osa":"ósage","ota":"tyrkneska, ottóman","pa":"púnjabí","pag":"pangasínmál","pal":"palaví","pam":"pampanga","pap":"papíamentó","pau":"paláska","pcm":"nígerískt pidgin","peo":"fornpersneska","phn":"fönikíska","pi":"palí","pl":"pólska","pon":"ponpeiska","prg":"prússneska","pro":"fornpróvensalska","ps":"pastú","pt":"portúgalska","pt-BR":"brasílísk portúgalska","pt-PT":"evrópsk portúgalska","qu":"kvesjúa","quc":"kiche","raj":"rajastaní","rap":"rapanúí","rar":"rarótongska","rm":"rómanska","rn":"rúndí","ro":"rúmenska","ro-MD":"moldóvska","rof":"rombó","rom":"romaní","root":"rót","ru":"rússneska","rup":"arúmenska","rw":"kínjarvanda","rwk":"rúa","sa":"sanskrít","sad":"sandave","sah":"jakút","sam":"samversk arameíska","saq":"sambúrú","sas":"sasak","sat":"santalí","sba":"ngambay","sbp":"sangú","sc":"sardínska","scn":"sikileyska","sco":"skoska","sd":"sindí","sdh":"suðurkúrdíska","se":"norðursamíska","seh":"sena","sel":"selkúp","ses":"koíraboró-senní","sg":"sangó","sga":"fornírska","sh":"serbókróatíska","shi":"tachelhit","shn":"sjan","si":"singalíska","sid":"sídamó","sk":"slóvakíska","sl":"slóvenska","sm":"samóska","sma":"suðursamíska","smj":"lúlesamíska","smn":"enaresamíska","sms":"skoltesamíska","sn":"shona","snk":"sóninke","so":"sómalska","sog":"sogdíen","sq":"albanska","sr":"serbneska","srn":"sranan tongo","srr":"serer","ss":"svatí","ssy":"saho","st":"suðursótó","su":"súndanska","suk":"súkúma","sus":"súsú","sux":"súmerska","sv":"sænska","sw":"svahílí","sw-CD":"kongósvahílí","swb":"shimaoríska","syc":"klassísk sýrlenska","syr":"sýrlenska","ta":"tamílska","te":"telúgú","tem":"tímne","teo":"tesó","ter":"terenó","tet":"tetúm","tg":"tadsjikska","th":"taílenska","ti":"tígrinja","tig":"tígre","tiv":"tív","tk":"túrkmenska","tkl":"tókeláska","tl":"tagalog","tlh":"klingonska","tli":"tlingit","tmh":"tamasjek","tn":"tsúana","to":"tongverska","tog":"tongverska (nyasa)","tpi":"tokpisin","tr":"tyrkneska","trv":"tarókó","ts":"tsonga","tsi":"tsimsíska","tt":"tatarska","tum":"túmbúka","tvl":"túvalúska","tw":"tví","twq":"tasawaq","ty":"tahítíska","tyv":"túvínska","tzm":"tamazight","udm":"údmúrt","ug":"úígúr","uga":"úgarítíska","uk":"úkraínska","umb":"úmbúndú","und":"óþekkt tungumál","ur":"úrdú","uz":"úsbekska","vai":"vaí","ve":"venda","vi":"víetnamska","vo":"volapyk","vot":"votíska","vun":"vunjó","wa":"vallónska","wae":"valser","wal":"volayatta","war":"varaí","was":"vasjó","wbp":"varlpiri","wo":"volof","xal":"kalmúkska","xh":"sósa","xog":"sóga","yao":"jaó","yap":"japíska","yav":"yangben","ybb":"yemba","yi":"jiddíska","yo":"jórúba","yue":"kantónska","za":"súang","zap":"sapótek","zbl":"blisstákn","zen":"senaga","zgh":"staðlað marokkóskt tamazight","zh":"kínverska","zh-Hans":"kínverska (einfölduð)","zh-Hant":"kínverska (hefðbundin)","zu":"súlú","zun":"súní","zxx":"ekkert tungumálaefni","zza":"zázáíska"},"short":{"az":"aserska","en-GB":"enska (bresk)","en-US":"bandarísk enska"},"narrow":{}},"region":{"long":{"142":"Asía","143":"Mið-Asía","145":"Vestur-Asía","150":"Evrópa","151":"Austur-Evrópa","154":"Norður-Evrópa","155":"Vestur-Evrópa","202":"Afríka sunnan Sahara","419":"Rómanska Ameríka","001":"Heimurinn","002":"Afríka","003":"Norður-Ameríka","005":"Suður-Ameríka","009":"Eyjaálfa","011":"Vestur-Afríka","013":"Mið-Ameríka","014":"Austur-Afríka","015":"Norður-Afríka","017":"Mið-Afríka","018":"Suðurhluti Afríku","019":"Ameríka","021":"Ameríka norðan Mexikó","029":"Karíbahafið","030":"Austur-Asía","034":"Suður-Asía","035":"Suðaustur-Asía","039":"Suður-Evrópa","053":"Ástralasía","054":"Melanesía","057":"Míkrónesíusvæðið","061":"Pólýnesía","AC":"Ascension-eyja","AD":"Andorra","AE":"Sameinuðu arabísku furstadæmin","AF":"Afganistan","AG":"Antígva og Barbúda","AI":"Angvilla","AL":"Albanía","AM":"Armenía","AO":"Angóla","AQ":"Suðurskautslandið","AR":"Argentína","AS":"Bandaríska Samóa","AT":"Austurríki","AU":"Ástralía","AW":"Arúba","AX":"Álandseyjar","AZ":"Aserbaídsjan","BA":"Bosnía og Hersegóvína","BB":"Barbados","BD":"Bangladess","BE":"Belgía","BF":"Búrkína Fasó","BG":"Búlgaría","BH":"Barein","BI":"Búrúndí","BJ":"Benín","BL":"Sankti Bartólómeusareyjar","BM":"Bermúdaeyjar","BN":"Brúnei","BO":"Bólivía","BQ":"Karíbahafshluti Hollands","BR":"Brasilía","BS":"Bahamaeyjar","BT":"Bútan","BV":"Bouveteyja","BW":"Botsvana","BY":"Hvíta-Rússland","BZ":"Belís","CA":"Kanada","CC":"Kókoseyjar (Keeling)","CD":"Kongó-Kinshasa","CF":"Mið-Afríkulýðveldið","CG":"Kongó-Brazzaville","CH":"Sviss","CI":"Fílabeinsströndin","CK":"Cooks-eyjar","CL":"Síle","CM":"Kamerún","CN":"Kína","CO":"Kólumbía","CP":"Clipperton-eyja","CR":"Kostaríka","CU":"Kúba","CV":"Grænhöfðaeyjar","CW":"Curacao","CX":"Jólaey","CY":"Kýpur","CZ":"Tékkland","DE":"Þýskaland","DG":"Diego Garcia","DJ":"Djíbútí","DK":"Danmörk","DM":"Dóminíka","DO":"Dóminíska lýðveldið","DZ":"Alsír","EA":"Ceuta og Melilla","EC":"Ekvador","EE":"Eistland","EG":"Egyptaland","EH":"Vestur-Sahara","ER":"Erítrea","ES":"Spánn","ET":"Eþíópía","EU":"Evrópusambandið","EZ":"Evrusvæðið","FI":"Finnland","FJ":"Fídjíeyjar","FK":"Falklandseyjar","FM":"Míkrónesía","FO":"Færeyjar","FR":"Frakkland","GA":"Gabon","GB":"Bretland","GD":"Grenada","GE":"Georgía","GF":"Franska Gvæjana","GG":"Guernsey","GH":"Gana","GI":"Gíbraltar","GL":"Grænland","GM":"Gambía","GN":"Gínea","GP":"Gvadelúpeyjar","GQ":"Miðbaugs-Gínea","GR":"Grikkland","GS":"Suður-Georgía og Suður-Sandvíkureyjar","GT":"Gvatemala","GU":"Gvam","GW":"Gínea-Bissá","GY":"Gvæjana","HK":"sérstjórnarsvæðið Hong Kong","HM":"Heard og McDonaldseyjar","HN":"Hondúras","HR":"Króatía","HT":"Haítí","HU":"Ungverjaland","IC":"Kanaríeyjar","ID":"Indónesía","IE":"Írland","IL":"Ísrael","IM":"Mön","IN":"Indland","IO":"Bresku Indlandshafseyjar","IQ":"Írak","IR":"Íran","IS":"Ísland","IT":"Ítalía","JE":"Jersey","JM":"Jamaíka","JO":"Jórdanía","JP":"Japan","KE":"Kenía","KG":"Kirgistan","KH":"Kambódía","KI":"Kíribatí","KM":"Kómoreyjar","KN":"Sankti Kitts og Nevis","KP":"Norður-Kórea","KR":"Suður-Kórea","KW":"Kúveit","KY":"Caymaneyjar","KZ":"Kasakstan","LA":"Laos","LB":"Líbanon","LC":"Sankti Lúsía","LI":"Liechtenstein","LK":"Srí Lanka","LR":"Líbería","LS":"Lesótó","LT":"Litháen","LU":"Lúxemborg","LV":"Lettland","LY":"Líbía","MA":"Marokkó","MC":"Mónakó","MD":"Moldóva","ME":"Svartfjallaland","MF":"Saint-Martin","MG":"Madagaskar","MH":"Marshalleyjar","MK":"Norður-Makedónía","ML":"Malí","MM":"Mjanmar (Búrma)","MN":"Mongólía","MO":"sérstjórnarsvæðið Makaó","MP":"Norður-Maríanaeyjar","MQ":"Martiník","MR":"Máritanía","MS":"Montserrat","MT":"Malta","MU":"Máritíus","MV":"Maldíveyjar","MW":"Malaví","MX":"Mexíkó","MY":"Malasía","MZ":"Mósambík","NA":"Namibía","NC":"Nýja-Kaledónía","NE":"Níger","NF":"Norfolkeyja","NG":"Nígería","NI":"Níkaragva","NL":"Holland","NO":"Noregur","NP":"Nepal","NR":"Nárú","NU":"Niue","NZ":"Nýja-Sjáland","OM":"Óman","PA":"Panama","PE":"Perú","PF":"Franska Pólýnesía","PG":"Papúa Nýja-Gínea","PH":"Filippseyjar","PK":"Pakistan","PL":"Pólland","PM":"Sankti Pierre og Miquelon","PN":"Pitcairn-eyjar","PR":"Púertó Ríkó","PS":"Heimastjórnarsvæði Palestínumanna","PT":"Portúgal","PW":"Palá","PY":"Paragvæ","QA":"Katar","QO":"Ytri Eyjaálfa","RE":"Réunion","RO":"Rúmenía","RS":"Serbía","RU":"Rússland","RW":"Rúanda","SA":"Sádi-Arabía","SB":"Salómonseyjar","SC":"Seychelles-eyjar","SD":"Súdan","SE":"Svíþjóð","SG":"Singapúr","SH":"Sankti Helena","SI":"Slóvenía","SJ":"Svalbarði og Jan Mayen","SK":"Slóvakía","SL":"Síerra Leóne","SM":"San Marínó","SN":"Senegal","SO":"Sómalía","SR":"Súrínam","SS":"Suður-Súdan","ST":"Saó Tóme og Prinsípe","SV":"El Salvador","SX":"Sint Maarten","SY":"Sýrland","SZ":"Svasíland","TA":"Tristan da Cunha","TC":"Turks- og Caicoseyjar","TD":"Tsjad","TF":"Frönsku suðlægu landsvæðin","TG":"Tógó","TH":"Taíland","TJ":"Tadsíkistan","TK":"Tókelá","TL":"Tímor-Leste","TM":"Túrkmenistan","TN":"Túnis","TO":"Tonga","TR":"Tyrkland","TT":"Trínidad og Tóbagó","TV":"Túvalú","TW":"Taívan","TZ":"Tansanía","UA":"Úkraína","UG":"Úganda","UM":"Smáeyjar Bandaríkjanna","UN":"Sameinuðu þjóðirnar","US":"Bandaríkin","UY":"Úrúgvæ","UZ":"Úsbekistan","VA":"Vatíkanið","VC":"Sankti Vinsent og Grenadíneyjar","VE":"Venesúela","VG":"Bresku Jómfrúaeyjar","VI":"Bandarísku Jómfrúaeyjar","VN":"Víetnam","VU":"Vanúatú","WF":"Wallis- og Fútúnaeyjar","WS":"Samóa","XA":"gervihreimur","XB":"gervistaður","XK":"Kósóvó","YE":"Jemen","YT":"Mayotte","ZA":"Suður-Afríka","ZM":"Sambía","ZW":"Simbabve","ZZ":"Óþekkt svæði"},"short":{"GB":"Bretland","HK":"Hong Kong","MO":"Makaó","PS":"Palestína","UN":"SÞ","US":"BNA"},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Aghb":"Aghb","Ahom":"Ahom","Arab":"arabískt","Aran":"Aran","Armi":"Armi","Armn":"armenskt","Avst":"Avst","Bali":"balinesíska","Bamu":"Bamu","Bass":"Bass","Batk":"batakíska","Beng":"bengalskt","Bhks":"Bhks","Bopo":"bopomofo","Brah":"brahmíska","Brai":"blindraletur","Bugi":"Bugi","Buhd":"Buhd","Cakm":"Cakm","Cans":"Cans","Cari":"Cari","Cham":"Cham","Cher":"Cher","Chrs":"Chrs","Copt":"koptíska","Cprt":"Cprt","Cyrl":"kyrillískt","Deva":"devanagari","Diak":"Diak","Dogr":"Dogr","Dsrt":"Dsrt","Dupl":"Dupl","Egyp":"Egyp","Elba":"Elba","Elym":"Elym","Ethi":"eþíópískt","Geor":"georgískt","Glag":"Glag","Gong":"Gong","Gonm":"Gonm","Goth":"Goth","Gran":"Gran","Grek":"grískt","Gujr":"gújaratí","Guru":"gurmukhi","Hanb":"hanb","Hang":"hangul","Hani":"kínverskt","Hano":"Hano","Hans":"einfaldað","Hant":"hefðbundið","Hatr":"Hatr","Hebr":"hebreskt","Hira":"hiragana","Hluw":"Hluw","Hmng":"Hmng","Hmnp":"Hmnp","Hrkt":"japönsk samstöfuletur","Hung":"Hung","Ital":"Ital","Jamo":"jamo","Java":"javanesíska","Jpan":"japanskt","Kali":"Kali","Kana":"katakana","Khar":"Khar","Khmr":"kmer","Khoj":"Khoj","Kits":"Kits","Knda":"kannada","Kore":"kóreskt","Kthi":"Kthi","Lana":"Lana","Laoo":"lao","Latn":"latneskt","Lepc":"Lepc","Limb":"Limb","Lina":"Lina","Linb":"Linb","Lisu":"Lisu","Lyci":"Lyci","Lydi":"Lydi","Mahj":"Mahj","Maka":"Maka","Mand":"mandaíska","Mani":"Mani","Marc":"Marc","Medf":"Medf","Mend":"Mend","Merc":"Merc","Mero":"Mero","Mlym":"malalajam","Modi":"Modi","Mong":"mongólskt","Mroo":"Mroo","Mtei":"Mtei","Mult":"Mult","Mymr":"mjanmarskt","Nand":"Nand","Narb":"Narb","Nbat":"Nbat","Newa":"Newa","Nkoo":"n-kó","Nshu":"Nshu","Ogam":"Ogam","Olck":"Olck","Orkh":"Orkh","Orya":"oriya","Osge":"Osge","Osma":"Osma","Palm":"Palm","Pauc":"Pauc","Perm":"Perm","Phag":"Phag","Phli":"Phli","Phlp":"Phlp","Phnx":"Phnx","Plrd":"Plrd","Prti":"Prti","Qaag":"Qaag","Rjng":"Rjng","Rohg":"Rohg","Runr":"Runr","Samr":"Samr","Sarb":"Sarb","Saur":"Saur","Sgnw":"Sgnw","Shaw":"Shaw","Shrd":"Shrd","Sidd":"Sidd","Sind":"Sind","Sinh":"sinhala","Sogd":"Sogd","Sogo":"Sogo","Sora":"Sora","Soyo":"Soyo","Sund":"sundanesíska","Sylo":"Sylo","Syrc":"Syrc","Tagb":"Tagb","Takr":"Takr","Tale":"Tale","Talu":"Talu","Taml":"tamílskt","Tang":"Tang","Tavt":"Tavt","Telu":"telúgú","Tfng":"Tfng","Tglg":"Tglg","Thaa":"thaana","Thai":"taílenskt","Tibt":"tíbeskt","Tirh":"Tirh","Ugar":"Ugar","Vaii":"Vaii","Wara":"Wara","Wcho":"Wcho","Xpeo":"Xpeo","Xsux":"Xsux","Yezi":"Yezi","Yiii":"Yiii","Zanb":"Zanb","Zinh":"Zinh","Zmth":"stærðfræðitákn","Zsye":"emoji-tákn","Zsym":"tákn","Zxxx":"óskrifað","Zyyy":"almennt","Zzzz":"óþekkt letur"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"Andorrskur peseti","AED":"arabískt dírham","AFA":"AFA","AFN":"afgani","ALK":"ALK","ALL":"albanskt lek","AMD":"armenskt dramm","ANG":"hollenskt Antillugyllini","AOA":"angólsk kvansa","AOK":"AOK","AON":"AON","AOR":"AOR","ARA":"Argentine Austral","ARL":"ARL","ARM":"ARM","ARP":"Argentískur pesi (1983–1985)","ARS":"argentínskur pesi","ATS":"Austurrískur skildingur","AUD":"ástralskur dalur","AWG":"arúbönsk flórína","AZM":"AZM","AZN":"aserskt manat","BAD":"BAD","BAM":"skiptanlegt Bosníu og Hersegóvínu-mark","BAN":"BAN","BBD":"barbadoskur dalur","BDT":"bangladessk taka","BEC":"BEC","BEF":"Belgískur franki","BEL":"BEL","BGL":"Lef","BGM":"BGM","BGN":"búlgarskt lef","BGO":"BGO","BHD":"bareinskur denari","BIF":"búrúndískur franki","BMD":"Bermúdadalur","BND":"brúneiskur dalur","BOB":"bólivíani","BOL":"BOL","BOP":"Bólivískur pesi","BOV":"Bolivian Mvdol","BRB":"BRB","BRC":"BRC","BRE":"BRE","BRL":"brasilískt ríal","BRN":"BRN","BRR":"BRR","BRZ":"BRZ","BSD":"Bahamadalur","BTN":"bútanskt núltrum","BUK":"Búrmverskt kjat","BWP":"botsvönsk púla","BYB":"BYB","BYN":"hvítrússnesk rúbla","BYR":"hvítrússnesk rúbla (2000–2016)","BZD":"belískur dalur","CAD":"Kanadadalur","CDF":"kongóskur franki","CHE":"CHE","CHF":"svissneskur franki","CHW":"CHW","CLE":"CLE","CLF":"Chilean Unidades de Fomento","CLP":"síleskur pesi","CNH":"kínverskt júan (utan heimalands)","CNX":"CNX","CNY":"kínverskt júan","COP":"kólumbískur pesi","COU":"COU","CRC":"kostarískt kólon","CSD":"CSD","CSK":"Tékknesk króna, eldri","CUC":"kúbverskur skiptanlegur pesi","CUP":"kúbverskur pesi","CVE":"grænhöfðeyskur skúti","CYP":"Kýpverskt pund","CZK":"tékknesk króna","DDM":"Austurþýskt mark","DEM":"Þýskt mark","DJF":"djíbútískur franki","DKK":"dönsk króna","DOP":"dóminískur pesi","DZD":"alsírskur denari","ECS":"Ecuador Sucre","ECV":"ECV","EEK":"Eistnesk króna","EGP":"egypskt pund","ERN":"erítresk nakfa","ESA":"ESA","ESB":"ESB","ESP":"Spænskur peseti","ETB":"eþíópískt birr","EUR":"evra","FIM":"Finnskt mark","FJD":"fidjeyskur dalur","FKP":"falklenskt pund","FRF":"Franskur franki","GBP":"sterlingspund","GEK":"GEK","GEL":"georgískur lari","GHC":"GHC","GHS":"ganverskur sedi","GIP":"Gíbraltarspund","GMD":"gambískur dalasi","GNF":"Gíneufranki","GNS":"GNS","GQE":"GQE","GRD":"Drakma","GTQ":"gvatemalskt kvesal","GWE":"Portúgalskur, gíneskur skúti","GWP":"GWP","GYD":"gvæjanskur dalur","HKD":"Hong Kong-dalur","HNL":"hondúrsk lempíra","HRD":"HRD","HRK":"króatísk kúna","HTG":"haítískur gúrdi","HUF":"ungversk fórinta","IDR":"indónesísk rúpía","IEP":"Írskt pund","ILP":"Ísraelskt pund","ILR":"ILR","ILS":"nýr ísraelskur sikill","INR":"indversk rúpía","IQD":"írakskur denari","IRR":"íranskt ríal","ISJ":"ISJ","ISK":"íslensk króna","ITL":"Ítölsk líra","JMD":"jamaískur dalur","JOD":"jórdanskur denari","JPY":"japanskt jen","KES":"kenískur skildingur","KGS":"kirgiskt som","KHR":"kambódískt ríal","KMF":"kómoreyskur franki","KPW":"norðurkóreskt vonn","KRH":"KRH","KRO":"KRO","KRW":"suðurkóreskt vonn","KWD":"kúveiskur denari","KYD":"caymaneyskur dalur","KZT":"kasakst tengi","LAK":"laoskt kip","LBP":"líbanskt pund","LKR":"srílönsk rúpía","LRD":"líberískur dalur","LSL":"Lesotho Loti","LTL":"Litháískt lít","LTT":"Lithuanian Talonas","LUC":"LUC","LUF":"Lúxemborgarfranki","LUL":"LUL","LVL":"Lettneskt lat","LVR":"Lettnesk rúbla","LYD":"líbískur denari","MAD":"marokkóskt dírham","MAF":"Marokkóskur franki","MCF":"MCF","MDC":"MDC","MDL":"moldavískt lei","MGA":"Madagaskararjari","MGF":"Madagaskur franki","MKD":"makedónskur denari","MKN":"MKN","MLF":"Malískur franki","MMK":"mjanmarskt kjat","MNT":"mongólskur túríkur","MOP":"makaósk pataka","MRO":"márítönsk úgía (1973–2017)","MRU":"márítönsk úgía","MTL":"Meltnesk líra","MTP":"Maltneskt pund","MUR":"máritísk rúpía","MVP":"MVP","MVR":"maldíveysk rúpía","MWK":"malavísk kvaka","MXN":"mexíkóskur pesi","MXP":"Mexíkóskur silfurpesi (1861–1992)","MXV":"Mexíkóskur pesi, UDI","MYR":"malasískt ringit","MZE":"Mósambískur skúti","MZM":"MZM","MZN":"mósambískt metikal","NAD":"namibískur dalur","NGN":"nígerísk næra","NIC":"Níkarögsk kordóva (1988–1991)","NIO":"níkarögsk kordóva","NLG":"Hollenskt gyllini","NOK":"norsk króna","NPR":"nepölsk rúpía","NZD":"nýsjálenskur dalur","OMR":"ómanskt ríal","PAB":"balbói","PEI":"PEI","PEN":"perúskt sól","PES":"PES","PGK":"papúsk kína","PHP":"filippseyskur pesi","PKR":"pakistönsk rúpía","PLN":"pólskt slot","PLZ":"Slot","PTE":"Portúgalskur skúti","PYG":"paragvæskt gvaraní","QAR":"katarskt ríal","RHD":"RHD","ROL":"Rúmenskt lei (1952–2006)","RON":"rúmenskt lei","RSD":"serbneskur denari","RUB":"rússnesk rúbla","RUR":"Rússnesk rúbla (1991–1998)","RWF":"rúandskur franki","SAR":"sádíarabískt ríal","SBD":"salómonseyskur dalur","SCR":"Seychellesrúpía","SDD":"Súdanskur denari","SDG":"súdanskt pund","SDP":"Súdanskt pund (1957–1998)","SEK":"sænsk króna","SGD":"singapúrskur dalur","SHP":"helenskt pund","SIT":"Slóvenskur dalur","SKK":"Slóvakísk króna","SLL":"síerraleónsk ljóna","SOS":"sómalískur skildingur","SRD":"Súrínamdalur","SRG":"Suriname Guilder","SSP":"suðursúdanskt pund","STD":"Saó Tóme og Prinsípe-dóbra (1977–2017)","STN":"Saó Tóme og Prinsípe-dóbra","SUR":"Soviet Rouble","SVC":"El Salvador Colon","SYP":"sýrlenskt pund","SZL":"svasílenskur lílangeni","THB":"taílenskt bat","TJR":"Tadsjiksk rúbla","TJS":"tadsjikskur sómóni","TMM":"Túrkmenskt manat (1993–2009)","TMT":"túrkmenskt manat","TND":"túnískur denari","TOP":"Tongapanga","TPE":"Tímorskur skúti","TRL":"Tyrknesk líra (1922–2005)","TRY":"tyrknesk líra","TTD":"Trínidad og Tóbagó-dalur","TWD":"taívanskur dalur","TZS":"tansanískur skildingur","UAH":"úkraínsk hrinja","UAK":"Ukrainian Karbovanetz","UGS":"UGS","UGX":"úgandskur skildingur","USD":"Bandaríkjadalur","USN":"Bandaríkjadalur (næsta dag)","USS":"Bandaríkjadalur (sama dag)","UYI":"UYI","UYP":"UYP","UYU":"úrúgvæskur pesi","UYW":"UYW","UZS":"úsbekskt súm","VEB":"Bolívar í Venesúela (1871–2008)","VEF":"venesúelskur bólívari (2008–2018)","VES":"venesúelskur bólívari","VND":"víetnamskt dong","VNN":"VNN","VUV":"vanúatúskt vatú","WST":"Samóatala","XAF":"miðafrískur franki","XAG":"XAG","XAU":"XAU","XBA":"XBA","XBB":"XBB","XBC":"XBC","XBD":"XBD","XCD":"austurkarabískur dalur","XDR":"Sérstök dráttarréttindi","XEU":"XEU","XFO":"Franskur gullfranki","XFU":"Franskur franki, UIC","XOF":"vesturafrískur franki","XPD":"XPD","XPF":"pólinesískur franki","XPT":"XPT","XRE":"XRE","XSU":"XSU","XTS":"XTS","XUA":"XUA","XXX":"óþekktur gjaldmiðill","YDD":"Jemenskur denari","YER":"jemenskt ríal","YUD":"YUD","YUM":"Júgóslavneskur denari","YUN":"YUN","YUR":"YUR","ZAL":"Rand (viðskipta)","ZAR":"suðurafrískt rand","ZMK":"Zambian Kwacha (1968–2012)","ZMW":"sambísk kvaka","ZRN":"ZRN","ZRZ":"ZRZ","ZWD":"Simbabveskur dalur","ZWL":"ZWL","ZWR":"ZWR"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}},"locale":"is"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

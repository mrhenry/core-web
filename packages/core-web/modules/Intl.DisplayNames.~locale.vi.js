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
(function(undefined) {
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("vi").length
)) {
// Intl.DisplayNames.~locale.vi
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"vi":{"types":{"language":{"long":{"aa":"Tiếng Afar","ab":"Tiếng Abkhazia","ace":"Tiếng Achinese","ach":"Tiếng Acoli","ada":"Tiếng Adangme","ady":"Tiếng Adyghe","ae":"Tiếng Avestan","af":"Tiếng Afrikaans","afh":"Tiếng Afrihili","agq":"Tiếng Aghem","ain":"Tiếng Ainu","ak":"Tiếng Akan","akk":"Tiếng Akkadia","akz":"Tiếng Alabama","ale":"Tiếng Aleut","aln":"Tiếng Gheg Albani","alt":"Tiếng Altai Miền Nam","am":"Tiếng Amharic","an":"Tiếng Aragon","ang":"Tiếng Anh cổ","anp":"Tiếng Angika","ar":"Tiếng Ả Rập","ar-001":"Tiếng Ả Rập Hiện đại","arc":"Tiếng Aramaic","arn":"Tiếng Mapuche","aro":"Tiếng Araona","arp":"Tiếng Arapaho","arq":"Tiếng Ả Rập Algeria","ars":"Tiếng Ả Rập Najdi","arw":"Tiếng Arawak","arz":"Tiếng Ả Rập Ai Cập","as":"Tiếng Assam","asa":"Tiếng Asu","ase":"Ngôn ngữ Ký hiệu Mỹ","ast":"Tiếng Asturias","av":"Tiếng Avaric","awa":"Tiếng Awadhi","ay":"Tiếng Aymara","az":"Tiếng Azerbaijan","ba":"Tiếng Bashkir","bal":"Tiếng Baluchi","ban":"Tiếng Bali","bar":"Tiếng Bavaria","bas":"Tiếng Basaa","bax":"Tiếng Bamun","bbc":"Tiếng Batak Toba","bbj":"Tiếng Ghomala","be":"Tiếng Belarus","bej":"Tiếng Beja","bem":"Tiếng Bemba","bew":"Tiếng Betawi","bez":"Tiếng Bena","bfd":"Tiếng Bafut","bfq":"Tiếng Badaga","bg":"Tiếng Bulgaria","bgn":"Tiếng Tây Balochi","bho":"Tiếng Bhojpuri","bi":"Tiếng Bislama","bik":"Tiếng Bikol","bin":"Tiếng Bini","bjn":"Tiếng Banjar","bkm":"Tiếng Kom","bla":"Tiếng Siksika","bm":"Tiếng Bambara","bn":"Tiếng Bangla","bo":"Tiếng Tây Tạng","bpy":"Tiếng Bishnupriya","bqi":"Tiếng Bakhtiari","br":"Tiếng Breton","bra":"Tiếng Braj","brh":"Tiếng Brahui","brx":"Tiếng Bodo","bs":"Tiếng Bosnia","bss":"Tiếng Akoose","bua":"Tiếng Buriat","bug":"Tiếng Bugin","bum":"Tiếng Bulu","byn":"Tiếng Blin","byv":"Tiếng Medumba","ca":"Tiếng Catalan","cad":"Tiếng Caddo","car":"Tiếng Carib","cay":"Tiếng Cayuga","cch":"Tiếng Atsam","ccp":"Tiếng Chakma","ce":"Tiếng Chechen","ceb":"Tiếng Cebuano","cgg":"Tiếng Chiga","ch":"Tiếng Chamorro","chb":"Tiếng Chibcha","chg":"Tiếng Chagatai","chk":"Tiếng Chuuk","chm":"Tiếng Mari","chn":"Biệt ngữ Chinook","cho":"Tiếng Choctaw","chp":"Tiếng Chipewyan","chr":"Tiếng Cherokee","chy":"Tiếng Cheyenne","ckb":"Tiếng Kurd Miền Trung","co":"Tiếng Corsica","cop":"Tiếng Coptic","cps":"Tiếng Capiznon","cr":"Tiếng Cree","crh":"Tiếng Thổ Nhĩ Kỳ Crimean","crs":"Tiếng Pháp Seselwa Creole","cs":"Tiếng Séc","csb":"Tiếng Kashubia","cu":"Tiếng Slavơ Nhà thờ","cv":"Tiếng Chuvash","cy":"Tiếng Wales","da":"Tiếng Đan Mạch","dak":"Tiếng Dakota","dar":"Tiếng Dargwa","dav":"Tiếng Taita","de":"Tiếng Đức","de-AT":"Tiếng Đức (Áo)","de-CH":"Tiếng Thượng Giéc-man (Thụy Sĩ)","del":"Tiếng Delaware","den":"Tiếng Slave","dgr":"Tiếng Dogrib","din":"Tiếng Dinka","dje":"Tiếng Zarma","doi":"Tiếng Dogri","dsb":"Tiếng Hạ Sorbia","dtp":"Tiếng Dusun Miền Trung","dua":"Tiếng Duala","dum":"Tiếng Hà Lan Trung cổ","dv":"Tiếng Divehi","dyo":"Tiếng Jola-Fonyi","dyu":"Tiếng Dyula","dz":"Tiếng Dzongkha","dzg":"Tiếng Dazaga","ebu":"Tiếng Embu","ee":"Tiếng Ewe","efi":"Tiếng Efik","egl":"Tiếng Emilia","egy":"Tiếng Ai Cập cổ","eka":"Tiếng Ekajuk","el":"Tiếng Hy Lạp","elx":"Tiếng Elamite","en":"Tiếng Anh","en-AU":"Tiếng Anh (Australia)","en-CA":"Tiếng Anh (Canada)","en-GB":"Tiếng Anh (Anh)","en-US":"Tiếng Anh (Mỹ)","enm":"Tiếng Anh Trung cổ","eo":"Tiếng Quốc Tế Ngữ","es":"Tiếng Tây Ban Nha","es-419":"Tiếng Tây Ban Nha (Mỹ La tinh)","es-ES":"Tiếng Tây Ban Nha (Châu Âu)","es-MX":"Tiếng Tây Ban Nha (Mexico)","esu":"Tiếng Yupik Miền Trung","et":"Tiếng Estonia","eu":"Tiếng Basque","ewo":"Tiếng Ewondo","ext":"Tiếng Extremadura","fa":"Tiếng Ba Tư","fan":"Tiếng Fang","fat":"Tiếng Fanti","ff":"Tiếng Fulah","fi":"Tiếng Phần Lan","fil":"Tiếng Philippines","fj":"Tiếng Fiji","fo":"Tiếng Faroe","fon":"Tiếng Fon","fr":"Tiếng Pháp","fr-CA":"Tiếng Pháp (Canada)","fr-CH":"Tiếng Pháp (Thụy Sĩ)","frc":"Tiếng Pháp Cajun","frm":"Tiếng Pháp Trung cổ","fro":"Tiếng Pháp cổ","frp":"Tiếng Arpitan","frr":"Tiếng Frisia Miền Bắc","frs":"Tiếng Frisian Miền Đông","fur":"Tiếng Friulian","fy":"Tiếng Frisia","ga":"Tiếng Ireland","gaa":"Tiếng Ga","gag":"Tiếng Gagauz","gan":"Tiếng Cám","gay":"Tiếng Gayo","gba":"Tiếng Gbaya","gd":"Tiếng Gael Scotland","gez":"Tiếng Geez","gil":"Tiếng Gilbert","gl":"Tiếng Galician","glk":"Tiếng Gilaki","gmh":"Tiếng Thượng Giéc-man Trung cổ","gn":"Tiếng Guarani","goh":"Tiếng Thượng Giéc-man cổ","gom":"Tiếng Goan Konkani","gon":"Tiếng Gondi","gor":"Tiếng Gorontalo","got":"Tiếng Gô-tích","grb":"Tiếng Grebo","grc":"Tiếng Hy Lạp cổ","gsw":"Tiếng Đức (Thụy Sĩ)","gu":"Tiếng Gujarati","gur":"Tiếng Frafra","guz":"Tiếng Gusii","gv":"Tiếng Manx","gwi":"Tiếng Gwichʼin","ha":"Tiếng Hausa","hai":"Tiếng Haida","hak":"Tiếng Khách Gia","haw":"Tiếng Hawaii","he":"Tiếng Do Thái","hi":"Tiếng Hindi","hif":"Tiếng Fiji Hindi","hil":"Tiếng Hiligaynon","hit":"Tiếng Hittite","hmn":"Tiếng Hmông","ho":"Tiếng Hiri Motu","hr":"Tiếng Croatia","hsb":"Tiếng Thượng Sorbia","hsn":"Tiếng Tương","ht":"Tiếng Haiti","hu":"Tiếng Hungary","hup":"Tiếng Hupa","hy":"Tiếng Armenia","hz":"Tiếng Herero","ia":"Tiếng Khoa Học Quốc Tế","iba":"Tiếng Iban","ibb":"Tiếng Ibibio","id":"Tiếng Indonesia","ie":"Tiếng Interlingue","ig":"Tiếng Igbo","ii":"Tiếng Di Tứ Xuyên","ik":"Tiếng Inupiaq","ilo":"Tiếng Iloko","inh":"Tiếng Ingush","io":"Tiếng Ido","is":"Tiếng Iceland","it":"Tiếng Italy","iu":"Tiếng Inuktitut","izh":"Tiếng Ingria","ja":"Tiếng Nhật","jam":"Tiếng Anh Jamaica Creole","jbo":"Tiếng Lojban","jgo":"Tiếng Ngomba","jmc":"Tiếng Machame","jpr":"Tiếng Judeo-Ba Tư","jrb":"Tiếng Judeo-Ả Rập","jut":"Tiếng Jutish","jv":"Tiếng Java","ka":"Tiếng Georgia","kaa":"Tiếng Kara-Kalpak","kab":"Tiếng Kabyle","kac":"Tiếng Kachin","kaj":"Tiếng Jju","kam":"Tiếng Kamba","kaw":"Tiếng Kawi","kbd":"Tiếng Kabardian","kbl":"Tiếng Kanembu","kcg":"Tiếng Tyap","kde":"Tiếng Makonde","kea":"Tiếng Kabuverdianu","kfo":"Tiếng Koro","kg":"Tiếng Kongo","kha":"Tiếng Khasi","kho":"Tiếng Khotan","khq":"Tiếng Koyra Chiini","ki":"Tiếng Kikuyu","kj":"Tiếng Kuanyama","kk":"Tiếng Kazakh","kkj":"Tiếng Kako","kl":"Tiếng Kalaallisut","kln":"Tiếng Kalenjin","km":"Tiếng Khmer","kmb":"Tiếng Kimbundu","kn":"Tiếng Kannada","ko":"Tiếng Hàn","koi":"Tiếng Komi-Permyak","kok":"Tiếng Konkani","kos":"Tiếng Kosrae","kpe":"Tiếng Kpelle","kr":"Tiếng Kanuri","krc":"Tiếng Karachay-Balkar","krl":"Tiếng Karelian","kru":"Tiếng Kurukh","ks":"Tiếng Kashmir","ksb":"Tiếng Shambala","ksf":"Tiếng Bafia","ksh":"Tiếng Cologne","ku":"Tiếng Kurd","kum":"Tiếng Kumyk","kut":"Tiếng Kutenai","kv":"Tiếng Komi","kw":"Tiếng Cornwall","ky":"Tiếng Kyrgyz","la":"Tiếng La-tinh","lad":"Tiếng Ladino","lag":"Tiếng Langi","lah":"Tiếng Lahnda","lam":"Tiếng Lamba","lb":"Tiếng Luxembourg","lez":"Tiếng Lezghian","lg":"Tiếng Ganda","li":"Tiếng Limburg","lkt":"Tiếng Lakota","ln":"Tiếng Lingala","lo":"Tiếng Lào","lol":"Tiếng Mongo","lou":"Tiếng Creole Louisiana","loz":"Tiếng Lozi","lrc":"Tiếng Bắc Luri","lt":"Tiếng Litva","lu":"Tiếng Luba-Katanga","lua":"Tiếng Luba-Lulua","lui":"Tiếng Luiseno","lun":"Tiếng Lunda","luo":"Tiếng Luo","lus":"Tiếng Lushai","luy":"Tiếng Luyia","lv":"Tiếng Latvia","mad":"Tiếng Madura","maf":"Tiếng Mafa","mag":"Tiếng Magahi","mai":"Tiếng Maithili","mak":"Tiếng Makasar","man":"Tiếng Mandingo","mas":"Tiếng Masai","mde":"Tiếng Maba","mdf":"Tiếng Moksha","mdr":"Tiếng Mandar","men":"Tiếng Mende","mer":"Tiếng Meru","mfe":"Tiếng Morisyen","mg":"Tiếng Malagasy","mga":"Tiếng Ai-len Trung cổ","mgh":"Tiếng Makhuwa-Meetto","mgo":"Tiếng Meta’","mh":"Tiếng Marshall","mi":"Tiếng Maori","mic":"Tiếng Micmac","min":"Tiếng Minangkabau","mk":"Tiếng Macedonia","ml":"Tiếng Malayalam","mn":"Tiếng Mông Cổ","mnc":"Tiếng Mãn Châu","mni":"Tiếng Manipuri","moh":"Tiếng Mohawk","mos":"Tiếng Mossi","mr":"Tiếng Marathi","ms":"Tiếng Mã Lai","mt":"Tiếng Malta","mua":"Tiếng Mundang","mul":"Nhiều Ngôn ngữ","mus":"Tiếng Creek","mwl":"Tiếng Miranda","mwr":"Tiếng Marwari","my":"Tiếng Miến Điện","mye":"Tiếng Myene","myv":"Tiếng Erzya","mzn":"Tiếng Mazanderani","na":"Tiếng Nauru","nan":"Tiếng Mân Nam","nap":"Tiếng Napoli","naq":"Tiếng Nama","nb":"Tiếng Na Uy (Bokmål)","nd":"Tiếng Ndebele Miền Bắc","nds":"Tiếng Hạ Giéc-man","nds-NL":"Tiếng Hạ Saxon","ne":"Tiếng Nepal","new":"Tiếng Newari","ng":"Tiếng Ndonga","nia":"Tiếng Nias","niu":"Tiếng Niuean","njo":"Tiếng Ao Naga","nl":"Tiếng Hà Lan","nl-BE":"Tiếng Flemish","nmg":"Tiếng Kwasio","nn":"Tiếng Na Uy (Nynorsk)","nnh":"Tiếng Ngiemboon","no":"Tiếng Na Uy","nog":"Tiếng Nogai","non":"Tiếng Na Uy cổ","nqo":"Tiếng N’Ko","nr":"Tiếng Ndebele Miền Nam","nso":"Tiếng Sotho Miền Bắc","nus":"Tiếng Nuer","nv":"Tiếng Navajo","nwc":"Tiếng Newari cổ","ny":"Tiếng Nyanja","nym":"Tiếng Nyamwezi","nyn":"Tiếng Nyankole","nyo":"Tiếng Nyoro","nzi":"Tiếng Nzima","oc":"Tiếng Occitan","oj":"Tiếng Ojibwa","om":"Tiếng Oromo","or":"Tiếng Odia","os":"Tiếng Ossetic","osa":"Tiếng Osage","ota":"Tiếng Thổ Nhĩ Kỳ Ottoman","pa":"Tiếng Punjab","pag":"Tiếng Pangasinan","pal":"Tiếng Pahlavi","pam":"Tiếng Pampanga","pap":"Tiếng Papiamento","pau":"Tiếng Palauan","pcm":"Tiếng Nigeria Pidgin","peo":"Tiếng Ba Tư cổ","phn":"Tiếng Phoenicia","pi":"Tiếng Pali","pl":"Tiếng Ba Lan","pon":"Tiếng Pohnpeian","prg":"Tiếng Prussia","pro":"Tiếng Provençal cổ","ps":"Tiếng Pashto","pt":"Tiếng Bồ Đào Nha","pt-BR":"Tiếng Bồ Đào Nha (Brazil)","pt-PT":"Tiếng Bồ Đào Nha (Châu Âu)","qu":"Tiếng Quechua","quc":"Tiếng Kʼicheʼ","qug":"Tiếng Quechua ở Cao nguyên Chimborazo","raj":"Tiếng Rajasthani","rap":"Tiếng Rapanui","rar":"Tiếng Rarotongan","rm":"Tiếng Romansh","rn":"Tiếng Rundi","ro":"Tiếng Romania","ro-MD":"Tiếng Moldova","rof":"Tiếng Rombo","rom":"Tiếng Romany","root":"Tiếng Root","ru":"Tiếng Nga","rup":"Tiếng Aromania","rw":"Tiếng Kinyarwanda","rwk":"Tiếng Rwa","sa":"Tiếng Phạn","sad":"Tiếng Sandawe","sah":"Tiếng Sakha","sam":"Tiếng Samaritan Aramaic","saq":"Tiếng Samburu","sas":"Tiếng Sasak","sat":"Tiếng Santali","sba":"Tiếng Ngambay","sbp":"Tiếng Sangu","sc":"Tiếng Sardinia","scn":"Tiếng Sicilia","sco":"Tiếng Scots","sd":"Tiếng Sindhi","sdh":"Tiếng Kurd Miền Nam","se":"Tiếng Sami Miền Bắc","see":"Tiếng Seneca","seh":"Tiếng Sena","sel":"Tiếng Selkup","ses":"Tiếng Koyraboro Senni","sg":"Tiếng Sango","sga":"Tiếng Ai-len cổ","sh":"Tiếng Serbo-Croatia","shi":"Tiếng Tachelhit","shn":"Tiếng Shan","shu":"Tiếng Ả-Rập Chad","si":"Tiếng Sinhala","sid":"Tiếng Sidamo","sk":"Tiếng Slovak","sl":"Tiếng Slovenia","sm":"Tiếng Samoa","sma":"Tiếng Sami Miền Nam","smj":"Tiếng Lule Sami","smn":"Tiếng Inari Sami","sms":"Tiếng Skolt Sami","sn":"Tiếng Shona","snk":"Tiếng Soninke","so":"Tiếng Somali","sog":"Tiếng Sogdien","sq":"Tiếng Albania","sr":"Tiếng Serbia","srn":"Tiếng Sranan Tongo","srr":"Tiếng Serer","ss":"Tiếng Swati","ssy":"Tiếng Saho","st":"Tiếng Sotho Miền Nam","su":"Tiếng Sunda","suk":"Tiếng Sukuma","sus":"Tiếng Susu","sux":"Tiếng Sumeria","sv":"Tiếng Thụy Điển","sw":"Tiếng Swahili","sw-CD":"Tiếng Swahili Congo","swb":"Tiếng Cômo","syc":"Tiếng Syriac cổ","syr":"Tiếng Syriac","ta":"Tiếng Tamil","te":"Tiếng Telugu","tem":"Tiếng Timne","teo":"Tiếng Teso","ter":"Tiếng Tereno","tet":"Tiếng Tetum","tg":"Tiếng Tajik","th":"Tiếng Thái","ti":"Tiếng Tigrinya","tig":"Tiếng Tigre","tiv":"Tiếng Tiv","tk":"Tiếng Turkmen","tkl":"Tiếng Tokelau","tl":"Tiếng Tagalog","tlh":"Tiếng Klingon","tli":"Tiếng Tlingit","tmh":"Tiếng Tamashek","tn":"Tiếng Tswana","to":"Tiếng Tonga","tog":"Tiếng Nyasa Tonga","tpi":"Tiếng Tok Pisin","tr":"Tiếng Thổ Nhĩ Kỳ","trv":"Tiếng Taroko","ts":"Tiếng Tsonga","tsi":"Tiếng Tsimshian","tt":"Tiếng Tatar","tum":"Tiếng Tumbuka","tvl":"Tiếng Tuvalu","tw":"Tiếng Twi","twq":"Tiếng Tasawaq","ty":"Tiếng Tahiti","tyv":"Tiếng Tuvinian","tzm":"Tiếng Tamazight Miền Trung Ma-rốc","udm":"Tiếng Udmurt","ug":"Tiếng Uyghur","uga":"Tiếng Ugaritic","uk":"Tiếng Ukraina","umb":"Tiếng Umbundu","und":"Ngôn ngữ không xác định","ur":"Tiếng Urdu","uz":"Tiếng Uzbek","vai":"Tiếng Vai","ve":"Tiếng Venda","vi":"Tiếng Việt","vo":"Tiếng Volapük","vot":"Tiếng Votic","vun":"Tiếng Vunjo","wa":"Tiếng Walloon","wae":"Tiếng Walser","wal":"Tiếng Walamo","war":"Tiếng Waray","was":"Tiếng Washo","wbp":"Tiếng Warlpiri","wo":"Tiếng Wolof","wuu":"Tiếng Ngô","xal":"Tiếng Kalmyk","xh":"Tiếng Xhosa","xog":"Tiếng Soga","yao":"Tiếng Yao","yap":"Tiếng Yap","yav":"Tiếng Yangben","ybb":"Tiếng Yemba","yi":"Tiếng Yiddish","yo":"Tiếng Yoruba","yue":"Tiếng Quảng Đông","za":"Tiếng Choang","zap":"Tiếng Zapotec","zbl":"Ký hiệu Blissymbols","zen":"Tiếng Zenaga","zgh":"Tiếng Tamazight Chuẩn của Ma-rốc","zh":"Tiếng Trung","zh-Hans":"Tiếng Trung (Giản thể)","zh-Hant":"Tiếng Trung (Phồn thể)","zu":"Tiếng Zulu","zun":"Tiếng Zuni","zxx":"Không có nội dung ngôn ngữ","zza":"Tiếng Zaza"},"short":{"az":"Tiếng Azeri","en-GB":"Tiếng Anh (Anh)","en-US":"Tiếng Anh (Mỹ)"},"narrow":{}},"region":{"long":{"142":"Châu Á","143":"Trung Á","145":"Tây Á","150":"Châu Âu","151":"Đông Âu","154":"Bắc Âu","155":"Tây Âu","202":"Châu Phi hạ Sahara","419":"Châu Mỹ La-tinh","001":"Thế giới","002":"Châu Phi","003":"Bắc Mỹ","005":"Nam Mỹ","009":"Châu Đại Dương","011":"Tây Phi","013":"Trung Mỹ","014":"Đông Phi","015":"Bắc Phi","017":"Trung Phi","018":"Miền Nam Châu Phi","019":"Châu Mỹ","021":"Miền Bắc Châu Mỹ","029":"Ca-ri-bê","030":"Đông Á","034":"Nam Á","035":"Đông Nam Á","039":"Nam Âu","053":"Australasia","054":"Melanesia","057":"Vùng Micronesia","061":"Polynesia","AC":"Đảo Ascension","AD":"Andorra","AE":"Các Tiểu Vương quốc Ả Rập Thống nhất","AF":"Afghanistan","AG":"Antigua và Barbuda","AI":"Anguilla","AL":"Albania","AM":"Armenia","AO":"Angola","AQ":"Nam Cực","AR":"Argentina","AS":"Samoa thuộc Mỹ","AT":"Áo","AU":"Australia","AW":"Aruba","AX":"Quần đảo Åland","AZ":"Azerbaijan","BA":"Bosnia và Herzegovina","BB":"Barbados","BD":"Bangladesh","BE":"Bỉ","BF":"Burkina Faso","BG":"Bulgaria","BH":"Bahrain","BI":"Burundi","BJ":"Benin","BL":"St. Barthélemy","BM":"Bermuda","BN":"Brunei","BO":"Bolivia","BQ":"Ca-ri-bê Hà Lan","BR":"Brazil","BS":"Bahamas","BT":"Bhutan","BV":"Đảo Bouvet","BW":"Botswana","BY":"Belarus","BZ":"Belize","CA":"Canada","CC":"Quần đảo Cocos (Keeling)","CD":"Congo - Kinshasa","CF":"Cộng hòa Trung Phi","CG":"Congo - Brazzaville","CH":"Thụy Sĩ","CI":"Côte d’Ivoire","CK":"Quần đảo Cook","CL":"Chile","CM":"Cameroon","CN":"Trung Quốc","CO":"Colombia","CP":"Đảo Clipperton","CR":"Costa Rica","CU":"Cuba","CV":"Cape Verde","CW":"Curaçao","CX":"Đảo Giáng Sinh","CY":"Síp","CZ":"Séc","DE":"Đức","DG":"Diego Garcia","DJ":"Djibouti","DK":"Đan Mạch","DM":"Dominica","DO":"Cộng hòa Dominica","DZ":"Algeria","EA":"Ceuta và Melilla","EC":"Ecuador","EE":"Estonia","EG":"Ai Cập","EH":"Tây Sahara","ER":"Eritrea","ES":"Tây Ban Nha","ET":"Ethiopia","EU":"Liên Minh Châu Âu","EZ":"Khu vực đồng Euro","FI":"Phần Lan","FJ":"Fiji","FK":"Quần đảo Falkland","FM":"Micronesia","FO":"Quần đảo Faroe","FR":"Pháp","GA":"Gabon","GB":"Vương quốc Anh","GD":"Grenada","GE":"Georgia","GF":"Guiana thuộc Pháp","GG":"Guernsey","GH":"Ghana","GI":"Gibraltar","GL":"Greenland","GM":"Gambia","GN":"Guinea","GP":"Guadeloupe","GQ":"Guinea Xích Đạo","GR":"Hy Lạp","GS":"Nam Georgia & Quần đảo Nam Sandwich","GT":"Guatemala","GU":"Guam","GW":"Guinea-Bissau","GY":"Guyana","HK":"Hồng Kông, Trung Quốc","HM":"Quần đảo Heard và McDonald","HN":"Honduras","HR":"Croatia","HT":"Haiti","HU":"Hungary","IC":"Quần đảo Canary","ID":"Indonesia","IE":"Ireland","IL":"Israel","IM":"Đảo Man","IN":"Ấn Độ","IO":"Lãnh thổ Ấn Độ Dương thuộc Anh","IQ":"Iraq","IR":"Iran","IS":"Iceland","IT":"Italy","JE":"Jersey","JM":"Jamaica","JO":"Jordan","JP":"Nhật Bản","KE":"Kenya","KG":"Kyrgyzstan","KH":"Campuchia","KI":"Kiribati","KM":"Comoros","KN":"St. Kitts và Nevis","KP":"Triều Tiên","KR":"Hàn Quốc","KW":"Kuwait","KY":"Quần đảo Cayman","KZ":"Kazakhstan","LA":"Lào","LB":"Li-băng","LC":"St. Lucia","LI":"Liechtenstein","LK":"Sri Lanka","LR":"Liberia","LS":"Lesotho","LT":"Litva","LU":"Luxembourg","LV":"Latvia","LY":"Libya","MA":"Ma-rốc","MC":"Monaco","MD":"Moldova","ME":"Montenegro","MF":"St. Martin","MG":"Madagascar","MH":"Quần đảo Marshall","MK":"Bắc Macedonia","ML":"Mali","MM":"Myanmar (Miến Điện)","MN":"Mông Cổ","MO":"Macao, Trung Quốc","MP":"Quần đảo Bắc Mariana","MQ":"Martinique","MR":"Mauritania","MS":"Montserrat","MT":"Malta","MU":"Mauritius","MV":"Maldives","MW":"Malawi","MX":"Mexico","MY":"Malaysia","MZ":"Mozambique","NA":"Namibia","NC":"New Caledonia","NE":"Niger","NF":"Đảo Norfolk","NG":"Nigeria","NI":"Nicaragua","NL":"Hà Lan","NO":"Na Uy","NP":"Nepal","NR":"Nauru","NU":"Niue","NZ":"New Zealand","OM":"Oman","PA":"Panama","PE":"Peru","PF":"Polynesia thuộc Pháp","PG":"Papua New Guinea","PH":"Philippines","PK":"Pakistan","PL":"Ba Lan","PM":"Saint Pierre và Miquelon","PN":"Quần đảo Pitcairn","PR":"Puerto Rico","PS":"Lãnh thổ Palestine","PT":"Bồ Đào Nha","PW":"Palau","PY":"Paraguay","QA":"Qatar","QO":"Vùng xa xôi thuộc Châu Đại Dương","RE":"Réunion","RO":"Romania","RS":"Serbia","RU":"Nga","RW":"Rwanda","SA":"Ả Rập Xê-út","SB":"Quần đảo Solomon","SC":"Seychelles","SD":"Sudan","SE":"Thụy Điển","SG":"Singapore","SH":"St. Helena","SI":"Slovenia","SJ":"Svalbard và Jan Mayen","SK":"Slovakia","SL":"Sierra Leone","SM":"San Marino","SN":"Senegal","SO":"Somalia","SR":"Suriname","SS":"Nam Sudan","ST":"São Tomé và Príncipe","SV":"El Salvador","SX":"Sint Maarten","SY":"Syria","SZ":"Swaziland","TA":"Tristan da Cunha","TC":"Quần đảo Turks và Caicos","TD":"Chad","TF":"Lãnh thổ phía Nam Thuộc Pháp","TG":"Togo","TH":"Thái Lan","TJ":"Tajikistan","TK":"Tokelau","TL":"Timor-Leste","TM":"Turkmenistan","TN":"Tunisia","TO":"Tonga","TR":"Thổ Nhĩ Kỳ","TT":"Trinidad và Tobago","TV":"Tuvalu","TW":"Đài Loan","TZ":"Tanzania","UA":"Ukraina","UG":"Uganda","UM":"Các tiểu đảo xa của Hoa Kỳ","UN":"Liên hiệp quốc","US":"Hoa Kỳ","UY":"Uruguay","UZ":"Uzbekistan","VA":"Thành Vatican","VC":"St. Vincent và Grenadines","VE":"Venezuela","VG":"Quần đảo Virgin thuộc Anh","VI":"Quần đảo Virgin thuộc Mỹ","VN":"Việt Nam","VU":"Vanuatu","WF":"Wallis và Futuna","WS":"Samoa","XA":"Pseudo-Accents","XB":"Pseudo-Bidi","XK":"Kosovo","YE":"Yemen","YT":"Mayotte","ZA":"Nam Phi","ZM":"Zambia","ZW":"Zimbabwe","ZZ":"Vùng không xác định"},"short":{"GB":"Vương quốc Anh","HK":"Hồng Kông","MO":"Macao","PS":"Palestine","UN":"Liên hiệp quốc","US":"Hoa Kỳ"},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Afak":"Chữ Afaka","Aghb":"Aghb","Ahom":"Ahom","Arab":"Chữ Ả Rập","Armi":"Chữ Imperial Aramaic","Armn":"Chữ Armenia","Avst":"Chữ Avestan","Bali":"Chữ Bali","Bamu":"Chữ Bamum","Bass":"Chữ Bassa Vah","Batk":"Chữ Batak","Beng":"Chữ Bangla","Bhks":"Bhks","Blis":"Chữ Blissymbols","Bopo":"Chữ Bopomofo","Brah":"Chữ Brahmi","Brai":"Chữ nổi Braille","Bugi":"Chữ Bugin","Buhd":"Chữ Buhid","Cakm":"Chữ Chakma","Cans":"Âm tiết Thổ dân Canada Hợp nhất","Cari":"Chữ Caria","Cham":"Chữ Chăm","Cher":"Chữ Cherokee","Cirt":"Chữ Cirth","Copt":"Chữ Coptic","Cprt":"Chứ Síp","Cyrl":"Chữ Kirin","Cyrs":"Chữ Kirin Slavơ Nhà thờ cổ","Deva":"Chữ Devanagari","Dogr":"Dogr","Dsrt":"Chữ Deseret","Dupl":"Chữ tốc ký Duployan","Egyd":"Chữ Ai Cập bình dân","Egyh":"Chữ Ai Cập thày tu","Egyp":"Chữ tượng hình Ai Cập","Elba":"Elba","Elym":"Elym","Ethi":"Chữ Ethiopia","Geok":"Chữ Khutsuri Georgia","Geor":"Chữ Georgia","Glag":"Chữ Glagolitic","Gong":"Gong","Gonm":"Gonm","Goth":"Chữ Gô-tích","Gran":"Chữ Grantha","Grek":"Chữ Hy Lạp","Gujr":"Chữ Gujarati","Guru":"Chữ Gurmukhi","Hanb":"Chữ Hán có chú âm","Hang":"Chữ Hàn","Hani":"Chữ Hán","Hano":"Chữ Hanunoo","Hans":"Giản thể","Hant":"Phồn thể","Hatr":"Hatr","Hebr":"Chữ Do Thái","Hira":"Chữ Hiragana","Hluw":"Chữ tượng hình Anatolia","Hmng":"Chữ Pahawh Hmong","Hmnp":"Hmnp","Hrkt":"Bảng ký hiệu âm tiết Tiếng Nhật","Hung":"Chữ Hungary cổ","Inds":"Chữ Indus","Ital":"Chữ Italic cổ","Jamo":"Chữ Jamo","Java":"Chữ Java","Jpan":"Chữ Nhật Bản","Jurc":"Chữ Jurchen","Kali":"Chữ Kayah Li","Kana":"Chữ Katakana","Khar":"Chữ Kharoshthi","Khmr":"Chữ Khơ-me","Khoj":"Chữ Khojki","Knda":"Chữ Kannada","Kore":"Chữ Hàn Quốc","Kpel":"Chữ Kpelle","Kthi":"Chữ Kaithi","Lana":"Chữ Lanna","Laoo":"Chữ Lào","Latf":"Chữ La-tinh Fraktur","Latg":"Chữ La-tinh Xcốt-len","Latn":"Chữ La tinh","Lepc":"Chữ Lepcha","Limb":"Chữ Limbu","Lina":"Chữ Linear A","Linb":"Chữ Linear B","Lisu":"Chữ Fraser","Loma":"Chữ Loma","Lyci":"Chữ Lycia","Lydi":"Chữ Lydia","Mahj":"Mahj","Maka":"Maka","Mand":"Chữ Mandaean","Mani":"Chữ Manichaean","Marc":"Marc","Maya":"Chữ tượng hình Maya","Medf":"Medf","Mend":"Chữ Mende","Merc":"Chữ Meroitic Nét thảo","Mero":"Chữ Meroitic","Mlym":"Chữ Malayalam","Modi":"Modi","Mong":"Chữ Mông Cổ","Moon":"Chữ nổi Moon","Mroo":"Chữ Mro","Mtei":"Chữ Meitei Mayek","Mult":"Mult","Mymr":"Chữ Myanmar","Nand":"Nand","Narb":"Chữ Bắc Ả Rập cổ","Nbat":"Chữ Nabataean","Newa":"Newa","Nkgb":"Chữ Naxi Geba","Nkoo":"Chữ N’Ko","Nshu":"Chữ Nüshu","Ogam":"Chữ Ogham","Olck":"Chữ Ol Chiki","Orkh":"Chữ Orkhon","Orya":"Chữ Odia","Osge":"Osge","Osma":"Chữ Osmanya","Palm":"Chữ Palmyrene","Pauc":"Pauc","Perm":"Chữ Permic cổ","Phag":"Chữ Phags-pa","Phli":"Chữ Pahlavi Văn bia","Phlp":"Chữ Pahlavi Thánh ca","Phlv":"Chữ Pahlavi Sách","Phnx":"Chữ Phoenicia","Plrd":"Ngữ âm Pollard","Prti":"Chữ Parthia Văn bia","Qaag":"Qaag","Rjng":"Chữ Rejang","Rohg":"Rohg","Roro":"Chữ Rongorongo","Runr":"Chữ Runic","Samr":"Chữ Samaritan","Sara":"Chữ Sarati","Sarb":"Chữ Nam Ả Rập cổ","Saur":"Chữ Saurashtra","Sgnw":"Chữ viết Ký hiệu","Shaw":"Chữ Shavian","Shrd":"Chữ Sharada","Sidd":"Sidd","Sind":"Chữ Khudawadi","Sinh":"Chữ Sinhala","Sogd":"Sogd","Sogo":"Sogo","Sora":"Chữ Sora Sompeng","Soyo":"Soyo","Sund":"Chữ Xu-đăng","Sylo":"Chữ Syloti Nagri","Syrc":"Chữ Syria","Syre":"Chữ Estrangelo Syriac","Syrj":"Chữ Tây Syria","Syrn":"Chữ Đông Syria","Tagb":"Chữ Tagbanwa","Takr":"Chữ Takri","Tale":"Chữ Thái Na","Talu":"Chữ Thái Lặc mới","Taml":"Chữ Tamil","Tang":"Chữ Tangut","Tavt":"Chữ Thái Việt","Telu":"Chữ Telugu","Teng":"Chữ Tengwar","Tfng":"Chữ Tifinagh","Tglg":"Chữ Tagalog","Thaa":"Chữ Thaana","Thai":"Chữ Thái","Tibt":"Chữ Tây Tạng","Tirh":"Chữ Tirhuta","Ugar":"Chữ Ugarit","Vaii":"Chữ Vai","Visp":"Tiếng nói Nhìn thấy được","Wara":"Chữ Varang Kshiti","Wcho":"Wcho","Wole":"Chữ Woleai","Xpeo":"Chữ Ba Tư cổ","Xsux":"Chữ hình nêm Sumero-Akkadian","Yiii":"Chữ Di","Zanb":"Zanb","Zinh":"Chữ Kế thừa","Zmth":"Ký hiệu Toán học","Zsye":"Biểu tượng","Zsym":"Ký hiệu","Zxxx":"Chưa có chữ viết","Zyyy":"Chung","Zzzz":"Chữ viết không xác định"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"Đồng Peseta của Andora","AED":"Dirham UAE","AFA":"Đồng Afghani của Afghanistan (1927–2002)","AFN":"Afghani Afghanistan","ALK":"ALK","ALL":"Lek Albania","AMD":"Dram Armenia","ANG":"Guilder Antille Hà Lan","AOA":"Kwanza Angola","AOK":"Đồng Kwanza của Angola (1977–1991)","AON":"Đồng Kwanza Mới của Angola (1990–2000)","AOR":"Đồng Kwanza Điều chỉnh lại của Angola (1995–1999)","ARA":"Đồng Austral của Argentina","ARL":"Đồng Peso Ley của Argentina (1970–1983)","ARM":"Đồng Peso Argentina (1881–1970)","ARP":"Đồng Peso Argentina (1983–1985)","ARS":"Peso Argentina","ATS":"Đồng Schiling Áo","AUD":"Đô la Australia","AWG":"Florin Aruba","AZM":"Đồng Manat của Azerbaijan (1993–2006)","AZN":"Manat Azerbaijan","BAD":"Đồng Dinar của Bosnia-Herzegovina (1992–1994)","BAM":"Mark Bosnia-Herzegovina có thể chuyển đổi","BAN":"Đồng Dinar Mới của Bosnia-Herzegovina (1994–1997)","BBD":"Đô la Barbados","BDT":"Taka Bangladesh","BEC":"Đồng Franc Bỉ (có thể chuyển đổi)","BEF":"Đồng Franc Bỉ","BEL":"Đồng Franc Bỉ (tài chính)","BGL":"Đồng Lev Xu của Bun-ga-ri","BGM":"Đồng Lev Xã hội chủ nghĩa của Bun-ga-ri","BGN":"Lev Bulgaria","BGO":"Đồng Lev của Bun-ga-ri (1879–1952)","BHD":"Dinar Bahrain","BIF":"Franc Burundi","BMD":"Đô la Bermuda","BND":"Đô la Brunei","BOB":"Boliviano Bolivia","BOL":"Đồng Boliviano của Bolivia (1863–1963)","BOP":"Đồng Peso Bolivia","BOV":"Đồng Mvdol Bolivia","BRB":"Đồng Cruzerio Mới của Braxin (1967–1986)","BRC":"Đồng Cruzado của Braxin (1986–1989)","BRE":"Đồng Cruzerio của Braxin (1990–1993)","BRL":"Real Braxin","BRN":"Đồng Cruzado Mới của Braxin (1989–1990)","BRR":"Đồng Cruzeiro của Braxin (1993–1994)","BRZ":"Đồng Cruzeiro của Braxin (1942–1967)","BSD":"Đô la Bahamas","BTN":"Ngultrum Bhutan","BUK":"Đồng Kyat Miến Điện","BWP":"Pula Botswana","BYB":"Đồng Rúp Mới của Belarus (1994–1999)","BYN":"Rúp Belarus","BYR":"Rúp Belarus (2000–2016)","BZD":"Đô la Belize","CAD":"Đô la Canada","CDF":"Franc Congo","CHE":"Đồng Euro WIR","CHF":"Franc Thụy sĩ","CHW":"Đồng France WIR","CLE":"Đồng Escudo của Chile","CLF":"Đơn vị Kế toán của Chile (UF)","CLP":"Peso Chile","CNH":"Nhân dân tệ (hải ngoại)","CNX":"CNX","CNY":"Nhân dân tệ","COP":"Peso Colombia","COU":"Đơn vị Giá trị Thực của Colombia","CRC":"Colón Costa Rica","CSD":"Đồng Dinar của Serbia (2002–2006)","CSK":"Đồng Koruna Xu của Czechoslovakia","CUC":"Peso Cuba có thể chuyển đổi","CUP":"Peso Cuba","CVE":"Escudo Cape Verde","CYP":"Đồng Bảng Síp","CZK":"Koruna Cộng hòa Séc","DDM":"Đồng Mark Đông Đức","DEM":"Đồng Mark Đức","DJF":"Franc Djibouti","DKK":"Krone Đan Mạch","DOP":"Peso Dominica","DZD":"Dinar Algeria","ECS":"Đồng Scure Ecuador","ECV":"Đơn vị Giá trị Không đổi của Ecuador","EEK":"Crun Extônia","EGP":"Bảng Ai Cập","ERN":"Nakfa Eritrea","ESA":"Đồng Peseta Tây Ban Nha (Tài khoản)","ESB":"Đồng Peseta Tây Ban Nha (tài khoản có thể chuyển đổi)","ESP":"Đồng Peseta Tây Ban Nha","ETB":"Birr Ethiopia","EUR":"Euro","FIM":"Đồng Markka Phần Lan","FJD":"Đô la Fiji","FKP":"Bảng Quần đảo Falkland","FRF":"Franc Pháp","GBP":"Bảng Anh","GEK":"Đồng Kupon Larit của Georgia","GEL":"Lari Georgia","GHC":"Cedi Ghana (1979–2007)","GHS":"Cedi Ghana","GIP":"Bảng Gibraltar","GMD":"Dalasi Gambia","GNF":"Franc Guinea","GNS":"Syli Guinea","GQE":"Đồng Ekwele của Guinea Xích Đạo","GRD":"Drachma Hy Lạp","GTQ":"Quetzal Guatemala","GWE":"Đồng Guinea Escudo Bồ Đào Nha","GWP":"Peso Guinea-Bissau","GYD":"Đô la Guyana","HKD":"Đô la Hồng Kông","HNL":"Lempira Honduras","HRD":"Đồng Dinar Croatia","HRK":"Kuna Croatia","HTG":"Gourde Haiti","HUF":"Forint Hungary","IDR":"Rupiah Indonesia","IEP":"Pao Ai-len","ILP":"Pao Ixraen","ILR":"ILR","ILS":"Sheqel Israel mới","INR":"Rupee Ấn Độ","IQD":"Dinar Iraq","IRR":"Rial Iran","ISJ":"ISJ","ISK":"Króna Iceland","ITL":"Lia Ý","JMD":"Đô la Jamaica","JOD":"Dinar Jordan","JPY":"Yên Nhật","KES":"Shilling Kenya","KGS":"Som Kyrgyzstan","KHR":"Riel Campuchia","KMF":"Franc Comoros","KPW":"Won Triều Tiên","KRH":"Đồng Hwan Hàn Quốc (1953–1962)","KRO":"Đồng Won Hàn Quốc (1945–1953)","KRW":"Won Hàn Quốc","KWD":"Dinar Kuwait","KYD":"Đô la Quần đảo Cayman","KZT":"Tenge Kazakhstan","LAK":"Kip Lào","LBP":"Bảng Li-băng","LKR":"Rupee Sri Lanka","LRD":"Đô la Liberia","LSL":"Ioti Lesotho","LTL":"Litas Lít-va","LTT":"Đồng Talonas Litva","LUC":"Đồng Franc Luxembourg có thể chuyển đổi","LUF":"Đồng Franc Luxembourg","LUL":"Đồng Franc Luxembourg tài chính","LVL":"Lats Latvia","LVR":"Đồng Rúp Latvia","LYD":"Dinar Libi","MAD":"Dirham Ma-rốc","MAF":"Đồng Franc Ma-rốc","MCF":"Đồng Franc Monegasque","MDC":"Đồng Cupon Moldova","MDL":"Leu Moldova","MGA":"Ariary Malagasy","MGF":"Đồng Franc Magalasy","MKD":"Denar Macedonia","MKN":"Đồng Denar Macedonia (1992–1993)","MLF":"Đồng Franc Mali","MMK":"Kyat Myanma","MNT":"Tugrik Mông Cổ","MOP":"Pataca Ma Cao","MRO":"Ouguiya Mauritania (1973–2017)","MRU":"Ouguiya Mauritania","MTL":"Lia xứ Man-tơ","MTP":"Đồng Bảng Malta","MUR":"Rupee Mauritius","MVP":"MVP","MVR":"Rufiyaa Maldives","MWK":"Kwacha Malawi","MXN":"Peso Mexico","MXP":"Đồng Peso Bạc Mê-hi-cô (1861–1992)","MXV":"Đơn vị Đầu tư Mê-hi-cô","MYR":"Ringgit Malaysia","MZE":"Escudo Mozambique","MZM":"Đồng Metical Mozambique (1980–2006)","MZN":"Metical Mozambique","NAD":"Đô la Namibia","NGN":"Naira Nigeria","NIC":"Đồng Córdoba Nicaragua (1988–1991)","NIO":"Córdoba Nicaragua","NLG":"Đồng Guilder Hà Lan","NOK":"Krone Na Uy","NPR":"Rupee Nepal","NZD":"Đô la New Zealand","OMR":"Rial Oman","PAB":"Balboa Panama","PEI":"Đồng Inti Peru","PEN":"Sol Peru","PES":"Đồng Sol Peru (1863–1965)","PGK":"Kina Papua New Guinea","PHP":"Peso Philipin","PKR":"Rupee Pakistan","PLN":"Zloty Ba Lan","PLZ":"Đồng Zloty Ba Lan (1950–1995)","PTE":"Đồng Escudo Bồ Đào Nha","PYG":"Guarani Paraguay","QAR":"Rial Qatar","RHD":"Đồng Đô la Rhode","ROL":"Đồng Leu Rumani (1952–2006)","RON":"Leu Romania","RSD":"Dinar Serbia","RUB":"Rúp Nga","RUR":"Đồng Rúp Nga (1991–1998)","RWF":"Franc Rwanda","SAR":"Riyal Ả Rập Xê-út","SBD":"Đô la quần đảo Solomon","SCR":"Rupee Seychelles","SDD":"Đồng Dinar Sudan (1992–2007)","SDG":"Bảng Sudan","SDP":"Đồng Bảng Sudan (1957–1998)","SEK":"Krona Thụy Điển","SGD":"Đô la Singapore","SHP":"Bảng St. Helena","SIT":"Tôla Xlôvênia","SKK":"Cuaron Xlôvác","SLL":"Leone Sierra Leone","SOS":"Schilling Somali","SRD":"Đô la Suriname","SRG":"Đồng Guilder Surinam","SSP":"Bảng Nam Sudan","STD":"Dobra São Tomé và Príncipe (1977–2017)","STN":"Dobra São Tomé và Príncipe","SUR":"Đồng Rúp Sô viết","SVC":"Colón El Salvador","SYP":"Bảng Syria","SZL":"Lilangeni Swaziland","THB":"Bạt Thái Lan","TJR":"Đồng Rúp Tajikistan","TJS":"Somoni Tajikistan","TMM":"Đồng Manat Turkmenistan (1993–2009)","TMT":"Manat Turkmenistan","TND":"Dinar Tunisia","TOP":"Paʻanga Tonga","TPE":"Đồng Escudo Timor","TRL":"Lia Thổ Nhĩ Kỳ (1922–2005)","TRY":"Lia Thổ Nhĩ Kỳ","TTD":"Đô la Trinidad và Tobago","TWD":"Đô la Đài Loan mới","TZS":"Shilling Tanzania","UAH":"Hryvnia Ukraina","UAK":"Đồng Karbovanets Ucraina","UGS":"Đồng Shilling Uganda (1966–1987)","UGX":"Shilling Uganda","USD":"Đô la Mỹ","USN":"Đô la Mỹ (Ngày tiếp theo)","USS":"Đô la Mỹ (Cùng ngày)","UYI":"Đồng Peso Uruguay (Đơn vị Theo chỉ số)","UYP":"Đồng Peso Uruguay (1975–1993)","UYU":"Peso Uruguay","UYW":"UYW","UZS":"Som Uzbekistan","VEB":"Đồng bolívar của Venezuela (1871–2008)","VEF":"Bolívar Venezuela (2008–2018)","VES":"Bolívar Venezuela","VND":"Đồng Việt Nam","VNN":"Đồng Việt Nam (1978–1985)","VUV":"Vatu Vanuatu","WST":"Tala Samoa","XAF":"Franc CFA Trung Phi","XAG":"Bạc","XAU":"Vàng","XBA":"Đơn vị Tổng hợp Châu Âu","XBB":"Đơn vị Tiền tệ Châu Âu","XBC":"Đơn vị Kế toán Châu Âu (XBC)","XBD":"Đơn vị Kế toán Châu Âu (XBD)","XCD":"Đô la Đông Caribê","XDR":"Quyền Rút vốn Đặc biệt","XEU":"Đơn vị Tiền Châu Âu","XFO":"Đồng France Pháp Vàng","XFU":"Đồng UIC-Franc Pháp","XOF":"Franc CFA Tây Phi","XPD":"Paladi","XPF":"Franc CFP","XPT":"Bạch kim","XRE":"Quỹ RINET","XSU":"XSU","XTS":"Mã Tiền tệ Kiểm tra","XUA":"XUA","XXX":"Tiền tệ chưa biết","YDD":"Đồng Dinar Yemen","YER":"Rial Yemen","YUD":"Đồng Dinar Nam Tư Xu (1966–1990)","YUM":"Đồng Dinar Nam Tư Mới (1994–2002)","YUN":"Đồng Dinar Nam Tư Có thể chuyển đổi (1990–1992)","YUR":"Đồng Dinar Nam Tư Tái cơ cấu (1992–1993)","ZAL":"Đồng Rand Nam Phi (tài chính)","ZAR":"Rand Nam Phi","ZMK":"Đồng kwacha của Zambia (1968–2012)","ZMW":"Kwacha Zambia","ZRN":"Đồng Zaire Mới (1993–1998)","ZRZ":"Đồng Zaire (1971–1993)","ZWD":"Đồng Đô la Zimbabwe (1980–2008)","ZWL":"Đồng Đô la Zimbabwe (2009)","ZWR":"Đồng Đô la Zimbabwe (2008)"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}}},"availableLocales":["vi"]})
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

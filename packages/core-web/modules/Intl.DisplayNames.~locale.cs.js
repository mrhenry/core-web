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
import GetIterator from "../helpers/_ESAbstract.GetIterator";
import SameValueZero from "../helpers/_ESAbstract.SameValueZero";
import SameValueNonNumber from "../helpers/_ESAbstract.SameValueNonNumber";
import IteratorStep from "../helpers/_ESAbstract.IteratorStep";
import IteratorNext from "../helpers/_ESAbstract.IteratorNext";
import IteratorComplete from "../helpers/_ESAbstract.IteratorComplete";
import IteratorValue from "../helpers/_ESAbstract.IteratorValue";
import IteratorClose from "../helpers/_ESAbstract.IteratorClose";
import SameValue from "../helpers/_ESAbstract.SameValue";
(function(undefined) {
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("cs").length
)) {
// Intl.DisplayNames.~locale.cs
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"cs":{"types":{"language":{"long":{"aa":"afarština","ab":"abcházština","ace":"acehština","ach":"akolština","ada":"adangme","ady":"adygejština","ae":"avestánština","aeb":"arabština (tuniská)","af":"afrikánština","afh":"afrihili","agq":"aghem","ain":"ainština","ak":"akanština","akk":"akkadština","akz":"alabamština","ale":"aleutština","aln":"albánština (Gheg)","alt":"altajština (jižní)","am":"amharština","an":"aragonština","ang":"staroangličtina","anp":"angika","ar":"arabština","ar-001":"arabština (moderní standardní)","arc":"aramejština","arn":"mapudungun","aro":"araonština","arp":"arapažština","arq":"arabština (alžírská)","ars":"arabština (Nadžd)","arw":"arawacké jazyky","ary":"arabština (marocká)","arz":"arabština (egyptská)","as":"ásámština","asa":"asu","ase":"znaková řeč (americká)","ast":"asturština","av":"avarština","avk":"kotava","awa":"awadhština","ay":"ajmarština","az":"ázerbájdžánština","ba":"baškirština","bal":"balúčština","ban":"balijština","bar":"bavorština","bas":"basa","bax":"bamun","bbc":"batak toba","bbj":"ghomala","be":"běloruština","bej":"bedža","bem":"bembština","bew":"batavština","bez":"bena","bfd":"bafut","bfq":"badagština","bg":"bulharština","bgn":"balúčština (západní)","bho":"bhódžpurština","bi":"bislamština","bik":"bikolština","bin":"bini","bjn":"bandžarština","bkm":"kom","bla":"siksika","bm":"bambarština","bn":"bengálština","bo":"tibetština","bpy":"bišnuprijskomanipurština","bqi":"bachtijárština","br":"bretonština","bra":"bradžština","brh":"brahujština","brx":"bodoština","bs":"bosenština","bss":"akoose","bua":"burjatština","bug":"bugiština","bum":"bulu","byn":"blinština","byv":"medumba","ca":"katalánština","cad":"caddo","car":"karibština","cay":"kajugština","cch":"atsam","ccp":"čakma","ce":"čečenština","ceb":"cebuánština","cgg":"kiga","ch":"čamoro","chb":"čibča","chg":"čagatajština","chk":"čukština","chm":"marijština","chn":"činuk pidžin","cho":"čoktština","chp":"čipevajština","chr":"čerokézština","chy":"čejenština","ckb":"kurdština (sorání)","co":"korsičtina","cop":"koptština","cps":"kapiznonština","cr":"kríjština","crh":"turečtina (krymská)","crs":"kreolština (seychelská)","cs":"čeština","csb":"kašubština","cu":"staroslověnština","cv":"čuvaština","cy":"velština","da":"dánština","dak":"dakotština","dar":"dargština","dav":"taita","de":"němčina","de-AT":"němčina (Rakousko)","de-CH":"němčina standardní (Švýcarsko)","del":"delawarština","den":"slejvština (athabaský jazyk)","dgr":"dogrib","din":"dinkština","dje":"zarmština","doi":"dogarština","dsb":"dolnolužická srbština","dtp":"kadazandusunština","dua":"dualština","dum":"holandština (středověká)","dv":"maledivština","dyo":"jola-fonyi","dyu":"djula","dz":"dzongkä","dzg":"dazaga","ebu":"embu","ee":"eweština","efi":"efikština","egl":"emilijština","egy":"egyptština stará","eka":"ekajuk","el":"řečtina","elx":"elamitština","en":"angličtina","en-AU":"angličtina (Austrálie)","en-CA":"angličtina (Kanada)","en-GB":"angličtina (Velká Británie)","en-US":"angličtina (USA)","enm":"angličtina (středověká)","eo":"esperanto","es":"španělština","es-419":"španělština (Latinská Amerika)","es-ES":"španělština (Evropa)","es-MX":"španělština (Mexiko)","esu":"jupikština (středoaljašská)","et":"estonština","eu":"baskičtina","ewo":"ewondo","ext":"extremadurština","fa":"perština","fa-AF":"darí","fan":"fang","fat":"fantština","ff":"fulbština","fi":"finština","fil":"filipínština","fit":"finština (tornedalská)","fj":"fidžijština","fo":"faerština","fon":"fonština","fr":"francouzština","fr-CA":"francouzština (Kanada)","fr-CH":"francouzština (Švýcarsko)","frc":"francouzština (cajunská)","frm":"francouzština (středověká)","fro":"francouzština (stará)","frp":"franko-provensálština","frr":"fríština (severní)","frs":"fríština (východní)","fur":"furlanština","fy":"fríština (západní)","ga":"irština","gaa":"gaština","gag":"gagauzština","gan":"čínština (dialekty Gan)","gay":"gayo","gba":"gbaja","gbz":"daríjština (zoroastrijská)","gd":"skotská gaelština","gez":"geez","gil":"kiribatština","gl":"galicijština","glk":"gilačtina","gmh":"hornoněmčina (středověká)","gn":"guaranština","goh":"hornoněmčina (stará)","gom":"konkánština (Goa)","gon":"góndština","gor":"gorontalo","got":"gótština","grb":"grebo","grc":"starořečtina","gsw":"němčina (Švýcarsko)","gu":"gudžarátština","guc":"wayúuština","gur":"frafra","guz":"gusii","gv":"manština","gwi":"gwichʼin","ha":"hauština","hai":"haidština","hak":"čínština (dialekty Hakka)","haw":"havajština","he":"hebrejština","hi":"hindština","hif":"hindština (Fidži)","hil":"hiligajnonština","hit":"chetitština","hmn":"hmongština","ho":"hiri motu","hr":"chorvatština","hsb":"hornolužická srbština","hsn":"čínština (dialekty Xiang)","ht":"haitština","hu":"maďarština","hup":"hupa","hy":"arménština","hz":"hererština","ia":"interlingua","iba":"ibanština","ibb":"ibibio","id":"indonéština","ie":"interlingue","ig":"igboština","ii":"iština (sečuánská)","ik":"inupiakština","ilo":"ilokánština","inh":"inguština","io":"ido","is":"islandština","it":"italština","iu":"inuktitutština","izh":"ingrijština","ja":"japonština","jam":"jamajská kreolština","jbo":"lojban","jgo":"ngomba","jmc":"mašame","jpr":"judeoperština","jrb":"judeoarabština","jut":"jutština","jv":"javánština","ka":"gruzínština","kaa":"karakalpačtina","kab":"kabylština","kac":"kačijština","kaj":"jju","kam":"kambština","kaw":"kawi","kbd":"kabardinština","kbl":"kanembu","kcg":"tyap","kde":"makonde","kea":"kapverdština","ken":"kenyang","kfo":"koro","kg":"konžština","kgp":"kaingang","kha":"khásí","kho":"chotánština","khq":"koyra chiini","khw":"chovarština","ki":"kikujština","kiu":"zazakština","kj":"kuaňamština","kk":"kazaština","kkj":"kako","kl":"grónština","kln":"kalendžin","km":"khmérština","kmb":"kimbundština","kn":"kannadština","ko":"korejština","koi":"komi-permjačtina","kok":"konkánština","kos":"kosrajština","kpe":"kpelle","kr":"kanuri","krc":"karačajevo-balkarština","kri":"krio","krj":"kinaraj-a","krl":"karelština","kru":"kuruchština","ks":"kašmírština","ksb":"šambala","ksf":"bafia","ksh":"kolínština","ku":"kurdština","kum":"kumyčtina","kut":"kutenajština","kv":"komijština","kw":"kornština","ky":"kyrgyzština","la":"latina","lad":"ladinština","lag":"langi","lah":"lahndština","lam":"lambština","lb":"lucemburština","lez":"lezginština","lfn":"lingua franca nova","lg":"gandština","li":"limburština","lij":"ligurština","liv":"livonština","lkt":"lakotština","lmo":"lombardština","ln":"lingalština","lo":"laoština","lol":"mongština","lou":"kreolština (Louisiana)","loz":"lozština","lrc":"lúrština (severní)","lt":"litevština","ltg":"latgalština","lu":"lubu-katanžština","lua":"luba-luluaština","lui":"luiseňo","lun":"lundština","luo":"luoština","lus":"mizoština","luy":"luhja","lv":"lotyština","lzh":"čínština (klasická)","lzz":"lazština","mad":"madurština","maf":"mafa","mag":"magahijština","mai":"maithiliština","mak":"makasarština","man":"mandingština","mas":"masajština","mde":"maba","mdf":"mokšanština","mdr":"mandar","men":"mende","mer":"meru","mfe":"mauricijská kreolština","mg":"malgaština","mga":"irština (středověká)","mgh":"makhuwa-meetto","mgo":"meta’","mh":"maršálština","mi":"maorština","mic":"micmac","min":"minangkabau","mk":"makedonština","ml":"malajálamština","mn":"mongolština","mnc":"mandžuština","mni":"manipurština","moh":"mohawkština","mos":"mosi","mr":"maráthština","mrj":"marijština (západní)","ms":"malajština","mt":"maltština","mua":"mundang","mul":"více jazyků","mus":"kríkština","mwl":"mirandština","mwr":"márvárština","mwv":"mentavajština","my":"barmština","mye":"myene","myv":"erzjanština","mzn":"mázandaránština","na":"naurština","nan":"čínština (dialekty Minnan)","nap":"neapolština","naq":"namaština","nb":"norština (bokmål)","nd":"ndebele (Zimbabwe)","nds":"dolnoněmčina","nds-NL":"dolnosaština","ne":"nepálština","new":"névárština","ng":"ndondština","nia":"nias","niu":"niueština","njo":"ao (jazyky Nágálandu)","nl":"nizozemština","nl-BE":"vlámština","nmg":"kwasio","nn":"norština (nynorsk)","nnh":"ngiemboon","no":"norština","nog":"nogajština","non":"norština historická","nov":"novial","nqo":"n’ko","nr":"ndebele (Jižní Afrika)","nso":"sotština (severní)","nus":"nuerština","nv":"navažština","nwc":"newarština (klasická)","ny":"ňandžština","nym":"ňamwežština","nyn":"ňankolština","nyo":"ňorština","nzi":"nzima","oc":"okcitánština","oj":"odžibvejština","om":"oromština","or":"urijština","os":"osetština","osa":"osage","ota":"turečtina (osmanská)","pa":"paňdžábština","pag":"pangasinanština","pal":"pahlavština","pam":"papangau","pap":"papiamento","pau":"palauština","pcd":"picardština","pcm":"nigerijský pidžin","pdc":"němčina (pensylvánská)","pdt":"němčina (plautdietsch)","peo":"staroperština","pfl":"falčtina","phn":"féničtina","pi":"pálí","pl":"polština","pms":"piemonština","pnt":"pontština","pon":"pohnpeiština","prg":"pruština","pro":"provensálština","ps":"paštština","pt":"portugalština","pt-BR":"portugalština (Brazílie)","pt-PT":"portugalština (Evropa)","qu":"kečuánština","quc":"kičé","qug":"kečuánština (chimborazo)","raj":"rádžastánština","rap":"rapanujština","rar":"rarotongánština","rgn":"romaňolština","rif":"rífština","rm":"rétorománština","rn":"kirundština","ro":"rumunština","ro-MD":"moldavština","rof":"rombo","rom":"romština","root":"kořen","rtm":"rotumanština","ru":"ruština","rue":"rusínština","rug":"rovianština","rup":"arumunština","rw":"kiňarwandština","rwk":"rwa","sa":"sanskrt","sad":"sandawština","sah":"jakutština","sam":"samarština","saq":"samburu","sas":"sasakština","sat":"santálština","saz":"saurášterština","sba":"ngambay","sbp":"sangoština","sc":"sardština","scn":"sicilština","sco":"skotština","sd":"sindhština","sdc":"sassarština","sdh":"kurdština (jižní)","se":"sámština (severní)","see":"seneca","seh":"sena","sei":"seriština","sel":"selkupština","ses":"koyraboro senni","sg":"sangština","sga":"irština (stará)","sgs":"žemaitština","sh":"srbochorvatština","shi":"tašelhit","shn":"šanština","shu":"arabština (čadská)","si":"sinhálština","sid":"sidamo","sk":"slovenština","sl":"slovinština","sli":"němčina (slezská)","sly":"selajarština","sm":"samojština","sma":"sámština (jižní)","smj":"sámština (lulejská)","smn":"sámština (inarijská)","sms":"sámština (skoltská)","sn":"šonština","snk":"sonikština","so":"somálština","sog":"sogdština","sq":"albánština","sr":"srbština","srn":"sranan tongo","srr":"sererština","ss":"siswatština","ssy":"saho","st":"sotština (jižní)","stq":"fríština (saterlandská)","su":"sundština","suk":"sukuma","sus":"susu","sux":"sumerština","sv":"švédština","sw":"svahilština","sw-CD":"svahilština (Kongo)","swb":"komorština","syc":"syrština (klasická)","syr":"syrština","szl":"slezština","ta":"tamilština","tcy":"tuluština","te":"telugština","tem":"temne","teo":"teso","ter":"tereno","tet":"tetumština","tg":"tádžičtina","th":"thajština","ti":"tigrinijština","tig":"tigrejština","tiv":"tivština","tk":"turkmenština","tkl":"tokelauština","tkr":"cachurština","tl":"tagalog","tlh":"klingonština","tli":"tlingit","tly":"talyština","tmh":"tamašek","tn":"setswanština","to":"tongánština","tog":"tonžština (nyasa)","tpi":"tok pisin","tr":"turečtina","tru":"turojština","trv":"taroko","ts":"tsonga","tsd":"tsakonština","tsi":"tsimšijské jazyky","tt":"tatarština","ttt":"tatština","tum":"tumbukština","tvl":"tuvalština","tw":"twi","twq":"tasawaq","ty":"tahitština","tyv":"tuvinština","tzm":"tamazight (střední Maroko)","udm":"udmurtština","ug":"ujgurština","uga":"ugaritština","uk":"ukrajinština","umb":"umbundu","und":"neznámý jazyk","ur":"urdština","uz":"uzbečtina","vai":"vai","ve":"venda","vec":"benátština","vep":"vepština","vi":"vietnamština","vls":"vlámština (západní)","vmf":"němčina (mohansko-franské dialekty)","vo":"volapük","vot":"votština","vro":"võruština","vun":"vunjo","wa":"valonština","wae":"němčina (walser)","wal":"wolajtština","war":"warajština","was":"waština","wbp":"warlpiri","wo":"wolofština","wuu":"čínština (dialekty Wu)","xal":"kalmyčtina","xh":"xhoština","xmf":"mingrelština","xog":"sogština","yao":"jaoština","yap":"japština","yav":"jangbenština","ybb":"yemba","yi":"jidiš","yo":"jorubština","yrl":"nheengatu","yue":"kantonština","za":"čuangština","zap":"zapotéčtina","zbl":"bliss systém","zea":"zélandština","zen":"zenaga","zgh":"tamazight (standardní marocký)","zh":"čínština","zh-Hans":"čínština (zjednodušená)","zh-Hant":"čínština (tradiční)","zu":"zuluština","zun":"zunijština","zxx":"žádný jazykový obsah","zza":"zaza"},"short":{"az":"ázerbájdžánština","en-GB":"angličtina (VB)","en-US":"angličtina (USA)"},"narrow":{}},"region":{"long":{"142":"Asie","143":"Střední Asie","145":"západní Asie","150":"Evropa","151":"východní Evropa","154":"severní Evropa","155":"západní Evropa","202":"subsaharská Afrika","419":"Latinská Amerika","001":"svět","002":"Afrika","003":"Severní Amerika","005":"Jižní Amerika","009":"Oceánie","011":"západní Afrika","013":"Střední Amerika","014":"východní Afrika","015":"severní Afrika","017":"střední Afrika","018":"jižní Afrika","019":"Amerika","021":"Severní Amerika (oblast)","029":"Karibik","030":"východní Asie","034":"jižní Asie","035":"jihovýchodní Asie","039":"jižní Evropa","053":"Australasie","054":"Melanésie","057":"Mikronésie (region)","061":"Polynésie","AC":"Ascension","AD":"Andorra","AE":"Spojené arabské emiráty","AF":"Afghánistán","AG":"Antigua a Barbuda","AI":"Anguilla","AL":"Albánie","AM":"Arménie","AO":"Angola","AQ":"Antarktida","AR":"Argentina","AS":"Americká Samoa","AT":"Rakousko","AU":"Austrálie","AW":"Aruba","AX":"Ålandy","AZ":"Ázerbájdžán","BA":"Bosna a Hercegovina","BB":"Barbados","BD":"Bangladéš","BE":"Belgie","BF":"Burkina Faso","BG":"Bulharsko","BH":"Bahrajn","BI":"Burundi","BJ":"Benin","BL":"Svatý Bartoloměj","BM":"Bermudy","BN":"Brunej","BO":"Bolívie","BQ":"Karibské Nizozemsko","BR":"Brazílie","BS":"Bahamy","BT":"Bhútán","BV":"Bouvetův ostrov","BW":"Botswana","BY":"Bělorusko","BZ":"Belize","CA":"Kanada","CC":"Kokosové ostrovy","CD":"Kongo – Kinshasa","CF":"Středoafrická republika","CG":"Kongo – Brazzaville","CH":"Švýcarsko","CI":"Pobřeží slonoviny","CK":"Cookovy ostrovy","CL":"Chile","CM":"Kamerun","CN":"Čína","CO":"Kolumbie","CP":"Clippertonův ostrov","CR":"Kostarika","CU":"Kuba","CV":"Kapverdy","CW":"Curaçao","CX":"Vánoční ostrov","CY":"Kypr","CZ":"Česko","DE":"Německo","DG":"Diego García","DJ":"Džibutsko","DK":"Dánsko","DM":"Dominika","DO":"Dominikánská republika","DZ":"Alžírsko","EA":"Ceuta a Melilla","EC":"Ekvádor","EE":"Estonsko","EG":"Egypt","EH":"Západní Sahara","ER":"Eritrea","ES":"Španělsko","ET":"Etiopie","EU":"Evropská unie","EZ":"eurozóna","FI":"Finsko","FJ":"Fidži","FK":"Falklandské ostrovy","FM":"Mikronésie","FO":"Faerské ostrovy","FR":"Francie","GA":"Gabon","GB":"Spojené království","GD":"Grenada","GE":"Gruzie","GF":"Francouzská Guyana","GG":"Guernsey","GH":"Ghana","GI":"Gibraltar","GL":"Grónsko","GM":"Gambie","GN":"Guinea","GP":"Guadeloupe","GQ":"Rovníková Guinea","GR":"Řecko","GS":"Jižní Georgie a Jižní Sandwichovy ostrovy","GT":"Guatemala","GU":"Guam","GW":"Guinea-Bissau","GY":"Guyana","HK":"Hongkong – ZAO Číny","HM":"Heardův ostrov a McDonaldovy ostrovy","HN":"Honduras","HR":"Chorvatsko","HT":"Haiti","HU":"Maďarsko","IC":"Kanárské ostrovy","ID":"Indonésie","IE":"Irsko","IL":"Izrael","IM":"Ostrov Man","IN":"Indie","IO":"Britské indickooceánské území","IQ":"Irák","IR":"Írán","IS":"Island","IT":"Itálie","JE":"Jersey","JM":"Jamajka","JO":"Jordánsko","JP":"Japonsko","KE":"Keňa","KG":"Kyrgyzstán","KH":"Kambodža","KI":"Kiribati","KM":"Komory","KN":"Svatý Kryštof a Nevis","KP":"Severní Korea","KR":"Jižní Korea","KW":"Kuvajt","KY":"Kajmanské ostrovy","KZ":"Kazachstán","LA":"Laos","LB":"Libanon","LC":"Svatá Lucie","LI":"Lichtenštejnsko","LK":"Srí Lanka","LR":"Libérie","LS":"Lesotho","LT":"Litva","LU":"Lucembursko","LV":"Lotyšsko","LY":"Libye","MA":"Maroko","MC":"Monako","MD":"Moldavsko","ME":"Černá Hora","MF":"Svatý Martin (Francie)","MG":"Madagaskar","MH":"Marshallovy ostrovy","MK":"Severní Makedonie","ML":"Mali","MM":"Myanmar (Barma)","MN":"Mongolsko","MO":"Macao – ZAO Číny","MP":"Severní Mariany","MQ":"Martinik","MR":"Mauritánie","MS":"Montserrat","MT":"Malta","MU":"Mauricius","MV":"Maledivy","MW":"Malawi","MX":"Mexiko","MY":"Malajsie","MZ":"Mosambik","NA":"Namibie","NC":"Nová Kaledonie","NE":"Niger","NF":"Norfolk","NG":"Nigérie","NI":"Nikaragua","NL":"Nizozemsko","NO":"Norsko","NP":"Nepál","NR":"Nauru","NU":"Niue","NZ":"Nový Zéland","OM":"Omán","PA":"Panama","PE":"Peru","PF":"Francouzská Polynésie","PG":"Papua-Nová Guinea","PH":"Filipíny","PK":"Pákistán","PL":"Polsko","PM":"Saint-Pierre a Miquelon","PN":"Pitcairnovy ostrovy","PR":"Portoriko","PS":"Palestinská území","PT":"Portugalsko","PW":"Palau","PY":"Paraguay","QA":"Katar","QO":"vnější Oceánie","RE":"Réunion","RO":"Rumunsko","RS":"Srbsko","RU":"Rusko","RW":"Rwanda","SA":"Saúdská Arábie","SB":"Šalamounovy ostrovy","SC":"Seychely","SD":"Súdán","SE":"Švédsko","SG":"Singapur","SH":"Svatá Helena","SI":"Slovinsko","SJ":"Špicberky a Jan Mayen","SK":"Slovensko","SL":"Sierra Leone","SM":"San Marino","SN":"Senegal","SO":"Somálsko","SR":"Surinam","SS":"Jižní Súdán","ST":"Svatý Tomáš a Princův ostrov","SV":"Salvador","SX":"Svatý Martin (Nizozemsko)","SY":"Sýrie","SZ":"Svazijsko","TA":"Tristan da Cunha","TC":"Turks a Caicos","TD":"Čad","TF":"Francouzská jižní území","TG":"Togo","TH":"Thajsko","TJ":"Tádžikistán","TK":"Tokelau","TL":"Východní Timor","TM":"Turkmenistán","TN":"Tunisko","TO":"Tonga","TR":"Turecko","TT":"Trinidad a Tobago","TV":"Tuvalu","TW":"Tchaj-wan","TZ":"Tanzanie","UA":"Ukrajina","UG":"Uganda","UM":"Menší odlehlé ostrovy USA","UN":"Organizace spojených národů","US":"Spojené státy","UY":"Uruguay","UZ":"Uzbekistán","VA":"Vatikán","VC":"Svatý Vincenc a Grenadiny","VE":"Venezuela","VG":"Britské Panenské ostrovy","VI":"Americké Panenské ostrovy","VN":"Vietnam","VU":"Vanuatu","WF":"Wallis a Futuna","WS":"Samoa","XA":"simulovaná diakritika","XB":"simulovaný obousměrný zápis","XK":"Kosovo","YE":"Jemen","YT":"Mayotte","ZA":"Jihoafrická republika","ZM":"Zambie","ZW":"Zimbabwe","ZZ":"neznámá oblast"},"short":{"GB":"GB","HK":"Hongkong","MO":"Macao","PS":"Palestina","UN":"OSN","US":"USA"},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Afak":"afaka","Aghb":"kavkazskoalbánské","Ahom":"Ahom","Arab":"arabské","Aran":"nastaliq","Armi":"aramejské (imperiální)","Armn":"arménské","Avst":"avestánské","Bali":"balijské","Bamu":"bamumské","Bass":"bassa vah","Batk":"batacké","Beng":"bengálské","Bhks":"Bhks","Blis":"Blissovo písmo","Bopo":"bopomofo","Brah":"bráhmí","Brai":"Braillovo písmo","Bugi":"buginské","Buhd":"buhidské","Cakm":"čakma","Cans":"slabičné písmo kanadských domorodců","Cari":"karijské","Cham":"čam","Cher":"čerokí","Chrs":"Chrs","Cirt":"kirt","Copt":"koptské","Cprt":"kyperské","Cyrl":"cyrilice","Cyrs":"cyrilce - staroslověnská","Deva":"dévanágarí","Diak":"Diak","Dogr":"Dogr","Dsrt":"deseret","Dupl":"Duployého těsnopis","Egyd":"egyptské démotické","Egyh":"egyptské hieratické","Egyp":"egyptské hieroglyfy","Elba":"elbasanské","Elym":"Elym","Ethi":"etiopské","Geok":"gruzínské chutsuri","Geor":"gruzínské","Glag":"hlaholice","Gong":"Gong","Gonm":"Gonm","Goth":"gotické","Gran":"grantha","Grek":"řecké","Gujr":"gudžarátí","Guru":"gurmukhi","Hanb":"hanb","Hang":"hangul","Hani":"han","Hano":"hanunóo","Hans":"zjednodušené","Hant":"tradiční","Hatr":"Hatr","Hebr":"hebrejské","Hira":"hiragana","Hluw":"anatolské hieroglyfy","Hmng":"hmongské","Hmnp":"Hmnp","Hrkt":"japonské slabičné","Hung":"staromaďarské","Inds":"harappské","Ital":"etruské","Jamo":"jamo","Java":"javánské","Jpan":"japonské","Jurc":"džürčenské","Kali":"kayah li","Kana":"katakana","Khar":"kháróšthí","Khmr":"khmerské","Khoj":"chodžiki","Kits":"Kits","Knda":"kannadské","Kore":"korejské","Kpel":"kpelle","Kthi":"kaithi","Lana":"lanna","Laoo":"laoské","Latf":"latinka - lomená","Latg":"latinka - galská","Latn":"latinka","Lepc":"lepčské","Limb":"limbu","Lina":"lineární A","Linb":"lineární B","Lisu":"Fraserovo","Loma":"loma","Lyci":"lýkijské","Lydi":"lýdské","Mahj":"mahádžaní","Maka":"Maka","Mand":"mandejské","Mani":"manichejské","Marc":"Marc","Maya":"mayské hieroglyfy","Medf":"Medf","Mend":"mendské","Merc":"meroitické psací","Mero":"meroitické","Mlym":"malajlámské","Modi":"modí","Mong":"mongolské","Moon":"Moonovo písmo","Mroo":"mro","Mtei":"mejtej majek (manipurské)","Mult":"Mult","Mymr":"myanmarské","Nand":"Nand","Narb":"staroseveroarabské","Nbat":"nabatejské","Newa":"Newa","Nkgb":"naxi geba","Nkoo":"n’ko","Nshu":"nü-šu","Ogam":"ogamské","Olck":"santálské (ol chiki)","Orkh":"orchonské","Orya":"urijské","Osge":"Osge","Osma":"osmanské","Palm":"palmýrské","Pauc":"pau cin hau","Perm":"staropermské","Phag":"phags-pa","Phli":"pahlavské klínové","Phlp":"pahlavské žalmové","Phlv":"pahlavské knižní","Phnx":"fénické","Plrd":"Pollardova fonetická abeceda","Prti":"parthské klínové","Qaag":"zawgyi","Rjng":"redžanské","Rohg":"Rohg","Roro":"rongorongo","Runr":"runové","Samr":"samařské","Sara":"sarati","Sarb":"starojihoarabské","Saur":"saurášterské","Sgnw":"SignWriting","Shaw":"Shawova abeceda","Shrd":"šáradá","Sidd":"siddham","Sind":"chudábádí","Sinh":"sinhálské","Sogd":"Sogd","Sogo":"Sogo","Sora":"sora sompeng","Soyo":"Soyo","Sund":"sundské","Sylo":"sylhetské","Syrc":"syrské","Syre":"syrské - estrangelo","Syrj":"syrské - západní","Syrn":"syrské - východní","Tagb":"tagbanwa","Takr":"takrí","Tale":"tai le","Talu":"tai lü nové","Taml":"tamilské","Tang":"tangut","Tavt":"tai viet","Telu":"telugské","Teng":"tengwar","Tfng":"berberské","Tglg":"tagalské","Thaa":"thaana","Thai":"thajské","Tibt":"tibetské","Tirh":"tirhuta","Ugar":"ugaritské klínové","Vaii":"vai","Visp":"viditelná řeč","Wara":"varang kšiti","Wcho":"Wcho","Wole":"karolínské (woleai)","Xpeo":"staroperské klínové písmo","Xsux":"sumero-akkadské klínové písmo","Yezi":"Yezi","Yiii":"yi","Zanb":"Zanb","Zinh":"Zinh","Zmth":"matematický zápis","Zsye":"emodži","Zsym":"symboly","Zxxx":"bez zápisu","Zyyy":"obecné","Zzzz":"neznámé písmo"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"andorrská peseta","AED":"SAE dirham","AFA":"afghánský afghán (1927–2002)","AFN":"afghánský afghán","ALK":"albánský lek (1946–1965)","ALL":"albánský lek","AMD":"arménský dram","ANG":"nizozemskoantilský gulden","AOA":"angolská kwanza","AOK":"angolská kwanza (1977–1991)","AON":"angolská kwanza (1990–2000)","AOR":"angolská kwanza (1995–1999)","ARA":"argentinský austral","ARL":"argentinské peso ley (1970–1983)","ARM":"argentinské peso (1881–1970)","ARP":"argentinské peso (1983–1985)","ARS":"argentinské peso","ATS":"rakouský šilink","AUD":"australský dolar","AWG":"arubský zlatý","AZM":"ázerbájdžánský manat (1993–2006)","AZN":"ázerbájdžánský manat","BAD":"bosenský dinár (1992–1994)","BAM":"bosenská konvertibilní marka","BAN":"bosenský nový dinár (1994–1997)","BBD":"barbadoský dolar","BDT":"bangladéšská taka","BEC":"belgický konvertibilní frank","BEF":"belgický frank","BEL":"belgický finanční frank","BGL":"bulharský tvrdý leva","BGM":"bulharský socialistický leva","BGN":"bulharský leva","BGO":"bulharský lev (1879–1952)","BHD":"bahrajnský dinár","BIF":"burundský frank","BMD":"bermudský dolar","BND":"brunejský dolar","BOB":"bolivijský boliviano","BOL":"bolivijský boliviano (1863–1963)","BOP":"bolivijské peso","BOV":"bolivijský mvdol","BRB":"brazilské nové cruzeiro (1967–1986)","BRC":"brazilské cruzado (1986–1989)","BRE":"brazilské cruzeiro (1990–1993)","BRL":"brazilský real","BRN":"brazilské nové cruzado (1989–1990)","BRR":"brazilské cruzeiro (1993–1994)","BRZ":"brazilské cruzeiro (1942–1967)","BSD":"bahamský dolar","BTN":"bhútánský ngultrum","BUK":"barmský kyat","BWP":"botswanská pula","BYB":"běloruský rubl (1994–1999)","BYN":"běloruský rubl","BYR":"běloruský rubl (2000–2016)","BZD":"belizský dolar","CAD":"kanadský dolar","CDF":"konžský frank","CHE":"švýcarské WIR-euro","CHF":"švýcarský frank","CHW":"švýcarský WIR-frank","CLE":"chilské escudo","CLF":"chilská účetní jednotka (UF)","CLP":"chilské peso","CNH":"čínský jüan (offshore)","CNX":"čínský dolar ČLB","CNY":"čínský jüan","COP":"kolumbijské peso","COU":"kolumbijská jednotka reálné hodnoty","CRC":"kostarický colón","CSD":"srbský dinár (2002–2006)","CSK":"československá koruna","CUC":"kubánské konvertibilní peso","CUP":"kubánské peso","CVE":"kapverdské escudo","CYP":"kyperská libra","CZK":"česká koruna","DDM":"východoněmecká marka","DEM":"německá marka","DJF":"džibutský frank","DKK":"dánská koruna","DOP":"dominikánské peso","DZD":"alžírský dinár","ECS":"ekvádorský sucre","ECV":"ekvádorská jednotka konstantní hodnoty","EEK":"estonská koruna","EGP":"egyptská libra","ERN":"eritrejská nakfa","ESA":"španělská peseta („A“ účet)","ESB":"španělská peseta (konvertibilní účet)","ESP":"španělská peseta","ETB":"etiopský birr","EUR":"euro","FIM":"finská marka","FJD":"fidžijský dolar","FKP":"falklandská libra","FRF":"francouzský frank","GBP":"britská libra","GEK":"gruzínské kuponové lari","GEL":"gruzínské lari","GHC":"ghanský cedi (1979–2007)","GHS":"ghanský cedi","GIP":"gibraltarská libra","GMD":"gambijský dalasi","GNF":"guinejský frank","GNS":"guinejský syli","GQE":"rovníkovoguinejský ekwele","GRD":"řecká drachma","GTQ":"guatemalský quetzal","GWE":"portugalskoguinejské escudo","GWP":"guinejsko-bissauské peso","GYD":"guyanský dolar","HKD":"hongkongský dolar","HNL":"honduraská lempira","HRD":"chorvatský dinár","HRK":"chorvatská kuna","HTG":"haitský gourde","HUF":"maďarský forint","IDR":"indonéská rupie","IEP":"irská libra","ILP":"izraelská libra","ILR":"izraelský šekel (1980–1985)","ILS":"izraelský nový šekel","INR":"indická rupie","IQD":"irácký dinár","IRR":"íránský rijál","ISJ":"islandská koruna (1918–1981)","ISK":"islandská koruna","ITL":"italská lira","JMD":"jamajský dolar","JOD":"jordánský dinár","JPY":"japonský jen","KES":"keňský šilink","KGS":"kyrgyzský som","KHR":"kambodžský riel","KMF":"komorský frank","KPW":"severokorejský won","KRH":"jihokorejský hwan (1953–1962)","KRO":"jihokorejský won (1945–1953)","KRW":"jihokorejský won","KWD":"kuvajtský dinár","KYD":"kajmanský dolar","KZT":"kazašské tenge","LAK":"laoský kip","LBP":"libanonská libra","LKR":"srílanská rupie","LRD":"liberijský dolar","LSL":"lesothský loti","LTL":"litevský litas","LTT":"litevský talonas","LUC":"lucemburský konvertibilní frank","LUF":"lucemburský frank","LUL":"lucemburský finanční frank","LVL":"lotyšský lat","LVR":"lotyšský rubl","LYD":"libyjský dinár","MAD":"marocký dinár","MAF":"marocký frank","MCF":"monacký frank","MDC":"moldavský kupon","MDL":"moldavský leu","MGA":"madagaskarský ariary","MGF":"madagaskarský frank","MKD":"makedonský denár","MKN":"makedonský denár (1992–1993)","MLF":"malijský frank","MMK":"myanmarský kyat","MNT":"mongolský tugrik","MOP":"macajská pataca","MRO":"mauritánská ouguiya (1973–2017)","MRU":"mauritánská ouguiya","MTL":"maltská lira","MTP":"maltská libra","MUR":"mauricijská rupie","MVP":"maledivská rupie (1947–1981)","MVR":"maledivská rupie","MWK":"malawijská kwacha","MXN":"mexické peso","MXP":"mexické stříbrné peso (1861–1992)","MXV":"mexická investiční jednotka","MYR":"malajsijský ringgit","MZE":"mosambický escudo","MZM":"mosambický metical (1980–2006)","MZN":"mozambický metical","NAD":"namibijský dolar","NGN":"nigerijská naira","NIC":"nikaragujská córdoba (1988–1991)","NIO":"nikaragujská córdoba","NLG":"nizozemský gulden","NOK":"norská koruna","NPR":"nepálská rupie","NZD":"novozélandský dolar","OMR":"ománský rijál","PAB":"panamská balboa","PEI":"peruánská inti","PEN":"peruánský sol","PES":"peruánský sol (1863–1965)","PGK":"papuánská nová kina","PHP":"filipínské peso","PKR":"pákistánská rupie","PLN":"polský zlotý","PLZ":"polský zlotý (1950–1995)","PTE":"portugalské escudo","PYG":"paraguajské guarani","QAR":"katarský rijál","RHD":"rhodéský dolar","ROL":"rumunské leu (1952–2006)","RON":"rumunský leu","RSD":"srbský dinár","RUB":"ruský rubl","RUR":"ruský rubl (1991–1998)","RWF":"rwandský frank","SAR":"saúdský rijál","SBD":"šalamounský dolar","SCR":"seychelská rupie","SDD":"súdánský dinár (1992–2007)","SDG":"súdánská libra","SDP":"súdánská libra (1957–1998)","SEK":"švédská koruna","SGD":"singapurský dolar","SHP":"svatohelenská libra","SIT":"slovinský tolar","SKK":"slovenská koruna","SLL":"sierro-leonský leone","SOS":"somálský šilink","SRD":"surinamský dolar","SRG":"surinamský zlatý","SSP":"jihosúdánská libra","STD":"svatotomášská dobra (1977–2017)","STN":"svatotomášská dobra","SUR":"sovětský rubl","SVC":"salvadorský colón","SYP":"syrská libra","SZL":"svazijský lilangeni","THB":"thajský baht","TJR":"tádžický rubl","TJS":"tádžické somoni","TMM":"turkmenský manat (1993–2009)","TMT":"turkmenský manat","TND":"tuniský dinár","TOP":"tonžská paanga","TPE":"timorské escudo","TRL":"turecká lira (1922–2005)","TRY":"turecká lira","TTD":"trinidadský dolar","TWD":"tchajwanský dolar","TZS":"tanzanský šilink","UAH":"ukrajinská hřivna","UAK":"ukrajinský karbovanec","UGS":"ugandský šilink (1966–1987)","UGX":"ugandský šilink","USD":"americký dolar","USN":"americký dolar (příští den)","USS":"americký dolar (týž den)","UYI":"uruguayské peso (v indexovaných jednotkách)","UYP":"uruguayské peso (1975–1993)","UYU":"uruguayské peso","UYW":"UYW","UZS":"uzbecký sum","VEB":"venezuelský bolívar (1871–2008)","VEF":"venezuelský bolívar (2008–2018)","VES":"venezuelský bolívar","VND":"vietnamský dong","VNN":"vietnamský dong (1978–1985)","VUV":"vanuatský vatu","WST":"samojská tala","XAF":"CFA/BEAC frank","XAG":"stříbro","XAU":"zlato","XBA":"evropská smíšená jednotka","XBB":"evropská peněžní jednotka","XBC":"evropská jednotka účtu 9 (XBC)","XBD":"evropská jednotka účtu 17 (XBD)","XCD":"východokaribský dolar","XDR":"SDR","XEU":"evropská měnová jednotka","XFO":"francouzský zlatý frank","XFU":"francouzský UIC frank","XOF":"CFA/BCEAO frank","XPD":"palladium","XPF":"CFP frank","XPT":"platina","XRE":"kód fondů RINET","XSU":"sucre","XTS":"kód zvlášť vyhrazený pro testovací účely","XUA":"XUA","XXX":"neznámá měna","YDD":"jemenský dinár","YER":"jemenský rijál","YUD":"jugoslávský dinár (1966–1990)","YUM":"jugoslávský nový dinár (1994–2002)","YUN":"jugoslávský konvertibilní dinár (1990–1992)","YUR":"jugoslávský reformovaný dinár (1992–1993)","ZAL":"jihoafrický finanční rand","ZAR":"jihoafrický rand","ZMK":"zambijská kwacha (1968–2012)","ZMW":"zambijská kwacha","ZRN":"zairský nový zaire (1993–1998)","ZRZ":"zairský zaire (1971–1993)","ZWD":"zimbabwský dolar (1980–2008)","ZWL":"zimbabwský dolar (2009)","ZWR":"zimbabwský dolar (2008)"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}}},"availableLocales":["cs"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

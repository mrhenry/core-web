(function(undefined) {
if (!('Intl' in self && Intl.Collator && Intl.Collator.supportedLocalesOf && (function() { try { return Intl.Collator.supportedLocalesOf("ru-BY").length === 1; } catch (e) { return false; }}) && Intl.DateTimeFormat && Intl.DateTimeFormat.supportedLocalesOf && (function() { try { return Intl.DateTimeFormat.supportedLocalesOf("ru-BY").length === 1; } catch (e) { return false; } }) && Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf && (function() { try { return Intl.NumberFormat.supportedLocalesOf("ru-BY").length === 1; } catch (e) { return false; } })
)) {
// Intl.~locale.ru-BY
IntlPolyfill.__addLocaleData({locale:"ru-BY",date:{ca:["gregory","buddhist","chinese","coptic","dangi","ethioaa","ethiopic","generic","hebrew","indian","islamic","islamicc","japanese","persian","roc"],hourNo0:true,hour12:false,formats:{short:"{1}, {0}",medium:"{1}, {0}",full:"{1}, {0}",long:"{1}, {0}",availableFormats:{"d":"d","E":"ccc",Ed:"ccc, d",Ehm:"E h:mm a",EHm:"E HH:mm",Ehms:"E h:mm:ss a",EHms:"E HH:mm:ss",Gy:"y 'г'. G",GyMMM:"LLL y G",GyMMMd:"d MMM y 'г'. G",GyMMMEd:"E, d MMM y 'г'. G","h":"h a","H":"H",hm:"h:mm a",Hm:"H:mm",hms:"h:mm:ss a",Hms:"H:mm:ss",hmsv:"h:mm:ss a v",Hmsv:"H:mm:ss v",hmv:"h:mm a v",Hmv:"H:mm v","M":"L",Md:"dd.MM",MEd:"E, dd.MM",MMdd:"dd.MM",MMM:"LLL",MMMd:"d MMM",MMMEd:"ccc, d MMM",MMMMd:"d MMMM",ms:"mm:ss","y":"y",yM:"MM.y",yMd:"dd.MM.y",yMEd:"ccc, d.MM.y 'г'.",yMM:"MM.y",yMMM:"LLL y 'г'.",yMMMd:"d MMM y 'г'.",yMMMEd:"E, d MMM y 'г'.",yMMMM:"LLLL y 'г'.",yQQQ:"QQQ y 'г'.",yQQQQ:"QQQQ y 'г'."},dateFormats:{yMMMMEEEEd:"EEEE, d MMMM y 'г'.",yMMMMd:"d MMMM y 'г'.",yMMMd:"d MMM y 'г'.",yMd:"dd.MM.yy"},timeFormats:{hmmsszzzz:"H:mm:ss zzzz",hmsz:"H:mm:ss z",hms:"H:mm:ss",hm:"H:mm"}},calendars:{buddhist:{months:{narrow:["Я","Ф","М","А","М","И","И","А","С","О","Н","Д"],short:["янв.","февр.","мар.","апр.","мая","июн.","июл.","авг.","сент.","окт.","нояб.","дек."],long:["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"]},days:{narrow:["вс","пн","вт","ср","чт","пт","сб"],short:["вс","пн","вт","ср","чт","пт","сб"],long:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"]},eras:{narrow:["BE"],short:["BE"],long:["BE"]},dayPeriods:{am:"ДП",pm:"ПП"}},chinese:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],short:["1","2","3","4","5","6","7","8","9","10","11","12"],long:["M01","M02","M03","M04","M05","M06","M07","M08","M09","M10","M11","M12"]},days:{narrow:["вс","пн","вт","ср","чт","пт","сб"],short:["вс","пн","вт","ср","чт","пт","сб"],long:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"]},dayPeriods:{am:"ДП",pm:"ПП"}},coptic:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12","13"],short:["Тот","Бабэ","Хатур","Кихак","Тубэ","Амшир","Барамхат","Бармуда","Башнас","Бауна","Абиб","Мисра","Наси"],long:["Тот","Бабэ","Хатур","Кихак","Тубэ","Амшир","Барамхат","Бармуда","Башнас","Бауна","Абиб","Мисра","Наси"]},days:{narrow:["вс","пн","вт","ср","чт","пт","сб"],short:["вс","пн","вт","ср","чт","пт","сб"],long:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"]},eras:{narrow:["ERA0","ERA1"],short:["ERA0","ERA1"],long:["ERA0","ERA1"]},dayPeriods:{am:"ДП",pm:"ПП"}},dangi:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],short:["1","2","3","4","5","6","7","8","9","10","11","12"],long:["M01","M02","M03","M04","M05","M06","M07","M08","M09","M10","M11","M12"]},days:{narrow:["вс","пн","вт","ср","чт","пт","сб"],short:["вс","пн","вт","ср","чт","пт","сб"],long:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"]},dayPeriods:{am:"ДП",pm:"ПП"}},ethiopic:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12","13"],short:["Мескерем","Текемт","Хедар","Тахсас","Тер","Якатит","Магабит","Миазия","Генбот","Сэнэ","Хамлэ","Нахасэ","Эпагомен"],long:["Мескерем","Текемт","Хедар","Тахсас","Тер","Якатит","Магабит","Миазия","Генбот","Сэнэ","Хамлэ","Нахасэ","Эпагомен"]},days:{narrow:["вс","пн","вт","ср","чт","пт","сб"],short:["вс","пн","вт","ср","чт","пт","сб"],long:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"]},eras:{narrow:["ERA0","ERA1"],short:["ERA0","ERA1"],long:["ERA0","ERA1"]},dayPeriods:{am:"ДП",pm:"ПП"}},ethioaa:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12","13"],short:["Мескерем","Текемт","Хедар","Тахсас","Тер","Якатит","Магабит","Миазия","Генбот","Сэнэ","Хамлэ","Нахасэ","Эпагомен"],long:["Мескерем","Текемт","Хедар","Тахсас","Тер","Якатит","Магабит","Миазия","Генбот","Сэнэ","Хамлэ","Нахасэ","Эпагомен"]},days:{narrow:["вс","пн","вт","ср","чт","пт","сб"],short:["вс","пн","вт","ср","чт","пт","сб"],long:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"]},eras:{narrow:["ERA0"],short:["ERA0"],long:["ERA0"]},dayPeriods:{am:"ДП",pm:"ПП"}},generic:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],short:["M01","M02","M03","M04","M05","M06","M07","M08","M09","M10","M11","M12"],long:["M01","M02","M03","M04","M05","M06","M07","M08","M09","M10","M11","M12"]},days:{narrow:["вс","пн","вт","ср","чт","пт","сб"],short:["вс","пн","вт","ср","чт","пт","сб"],long:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"]},eras:{narrow:["ERA0","ERA1"],short:["ERA0","ERA1"],long:["ERA0","ERA1"]},dayPeriods:{am:"ДП",pm:"ПП"}},gregory:{months:{narrow:["Я","Ф","М","А","М","И","И","А","С","О","Н","Д"],short:["янв.","февр.","мар.","апр.","мая","июн.","июл.","авг.","сент.","окт.","нояб.","дек."],long:["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"]},days:{narrow:["вс","пн","вт","ср","чт","пт","сб"],short:["вс","пн","вт","ср","чт","пт","сб"],long:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"]},eras:{narrow:["до н.э.","н.э.","BCE","CE"],short:["до н. э.","н. э.","BCE","CE"],long:["до Рождества Христова","от Рождества Христова","до нашей эры","нашей эры"]},dayPeriods:{am:"ДП",pm:"ПП"}},hebrew:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12","13","7"],short:["Тишрей","Хешван","Кислев","Тевет","Шеват","Адар I","Адар","Нисан","Ияр","Сиван","Таммуз","Ав","Элул","Адар II"],long:["Тишрей","Хешван","Кислев","Тевет","Шеват","Адар I","Адар","Нисан","Ияр","Сиван","Таммуз","Ав","Элул","Адар II"]},days:{narrow:["вс","пн","вт","ср","чт","пт","сб"],short:["вс","пн","вт","ср","чт","пт","сб"],long:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"]},eras:{narrow:["AM"],short:["AM"],long:["AM"]},dayPeriods:{am:"ДП",pm:"ПП"}},indian:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],short:["Чайтра","Ваисакха","Джанштха","Асадха","Сравана","Бхадра","Азвина","Картика","Аграхайана","Пауза","Магха","Пхалгуна"],long:["Чайтра","Ваисакха","Джанштха","Асадха","Сравана","Бхадра","Азвина","Картика","Аграхайана","Пауза","Магха","Пхалгуна"]},days:{narrow:["вс","пн","вт","ср","чт","пт","сб"],short:["вс","пн","вт","ср","чт","пт","сб"],long:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"]},eras:{narrow:["Saka"],short:["Saka"],long:["Saka"]},dayPeriods:{am:"ДП",pm:"ПП"}},islamic:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],short:["Мухаррам","Сафар","Раби-уль-авваль","Раби-уль-ахир","Джумад-уль-авваль","Джумад-уль-ахир","Раджаб","Шаабан","Рамадан","Шавваль","Зуль-Каада","Зуль-Хиджжа"],long:["Мухаррам","Сафар","Раби-уль-авваль","Раби-уль-ахир","Джумад-уль-авваль","Джумад-уль-ахир","Раджаб","Шаабан","Рамадан","Шавваль","Зуль-Каада","Зуль-Хиджжа"]},days:{narrow:["вс","пн","вт","ср","чт","пт","сб"],short:["вс","пн","вт","ср","чт","пт","сб"],long:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"]},eras:{narrow:["AH"],short:["AH"],long:["AH"]},dayPeriods:{am:"ДП",pm:"ПП"}},islamicc:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],short:["Мухаррам","Сафар","Раби-уль-авваль","Раби-уль-ахир","Джумад-уль-авваль","Джумад-уль-ахир","Раджаб","Шаабан","Рамадан","Шавваль","Зуль-Каада","Зуль-Хиджжа"],long:["Мухаррам","Сафар","Раби-уль-авваль","Раби-уль-ахир","Джумад-уль-авваль","Джумад-уль-ахир","Раджаб","Шаабан","Рамадан","Шавваль","Зуль-Каада","Зуль-Хиджжа"]},days:{narrow:["вс","пн","вт","ср","чт","пт","сб"],short:["вс","пн","вт","ср","чт","пт","сб"],long:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"]},eras:{narrow:["AH"],short:["AH"],long:["AH"]},dayPeriods:{am:"ДП",pm:"ПП"}},japanese:{months:{narrow:["Я","Ф","М","А","М","И","И","А","С","О","Н","Д"],short:["янв.","февр.","мар.","апр.","мая","июн.","июл.","авг.","сент.","окт.","нояб.","дек."],long:["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"]},days:{narrow:["вс","пн","вт","ср","чт","пт","сб"],short:["вс","пн","вт","ср","чт","пт","сб"],long:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"]},eras:{narrow:["Taika (645–650)","Hakuchi (650–671)","Hakuhō (672–686)","Shuchō (686–701)","Taihō (701–704)","Keiun (704–708)","Wadō (708–715)","Reiki (715–717)","Yōrō (717–724)","Jinki (724–729)","Tenpyō (729–749)","Tenpyō-kampō (749-749)","Tenpyō-shōhō (749-757)","Tenpyō-hōji (757-765)","Tenpyō-jingo (765-767)","Jingo-keiun (767-770)","Hōki (770–780)","Ten-ō (781-782)","Enryaku (782–806)","Daidō (806–810)","Kōnin (810–824)","Tenchō (824–834)","Jōwa (834–848)","Kajō (848–851)","Ninju (851–854)","Saikō (854–857)","Ten-an (857-859)","Jōgan (859–877)","Gangyō (877–885)","Ninna (885–889)","Kanpyō (889–898)","Shōtai (898–901)","Engi (901–923)","Enchō (923–931)","Jōhei (931–938)","Tengyō (938–947)","Tenryaku (947–957)","Tentoku (957–961)","Ōwa (961–964)","Kōhō (964–968)","Anna (968–970)","Tenroku (970–973)","Ten’en (973–976)","Jōgen (976–978)","Tengen (978–983)","Eikan (983–985)","Kanna (985–987)","Eien (987–989)","Eiso (989–990)","Shōryaku (990–995)","Chōtoku (995–999)","Chōhō (999–1004)","Kankō (1004–1012)","Chōwa (1012–1017)","Kannin (1017–1021)","Jian (1021–1024)","Manju (1024–1028)","Chōgen (1028–1037)","Chōryaku (1037–1040)","Chōkyū (1040–1044)","Kantoku (1044–1046)","Eishō (1046–1053)","Tengi (1053–1058)","Kōhei (1058–1065)","Jiryaku (1065–1069)","Enkyū (1069–1074)","Shōho (1074–1077)","Shōryaku (1077–1081)","Eihō (1081–1084)","Ōtoku (1084–1087)","Kanji (1087–1094)","Kahō (1094–1096)","Eichō (1096–1097)","Jōtoku (1097–1099)","Kōwa (1099–1104)","Chōji (1104–1106)","Kashō (1106–1108)","Tennin (1108–1110)","Ten-ei (1110-1113)","Eikyū (1113–1118)","Gen’ei (1118–1120)","Hōan (1120–1124)","Tenji (1124–1126)","Daiji (1126–1131)","Tenshō (1131–1132)","Chōshō (1132–1135)","Hōen (1135–1141)","Eiji (1141–1142)","Kōji (1142–1144)","Ten’yō (1144–1145)","Kyūan (1145–1151)","Ninpei (1151–1154)","Kyūju (1154–1156)","Hōgen (1156–1159)","Heiji (1159–1160)","Eiryaku (1160–1161)","Ōho (1161–1163)","Chōkan (1163–1165)","Eiman (1165–1166)","Nin’an (1166–1169)","Kaō (1169–1171)","Shōan (1171–1175)","Angen (1175–1177)","Jishō (1177–1181)","Yōwa (1181–1182)","Juei (1182–1184)","Genryaku (1184–1185)","Bunji (1185–1190)","Kenkyū (1190–1199)","Shōji (1199–1201)","Kennin (1201–1204)","Genkyū (1204–1206)","Ken’ei (1206–1207)","Jōgen (1207–1211)","Kenryaku (1211–1213)","Kenpō (1213–1219)","Jōkyū (1219–1222)","Jōō (1222–1224)","Gennin (1224–1225)","Karoku (1225–1227)","Antei (1227–1229)","Kanki (1229–1232)","Jōei (1232–1233)","Tenpuku (1233–1234)","Bunryaku (1234–1235)","Katei (1235–1238)","Ryakunin (1238–1239)","En’ō (1239–1240)","Ninji (1240–1243)","Kangen (1243–1247)","Hōji (1247–1249)","Kenchō (1249–1256)","Kōgen (1256–1257)","Shōka (1257–1259)","Shōgen (1259–1260)","Bun’ō (1260–1261)","Kōchō (1261–1264)","Bun’ei (1264–1275)","Kenji (1275–1278)","Kōan (1278–1288)","Shōō (1288–1293)","Einin (1293–1299)","Shōan (1299–1302)","Kengen (1302–1303)","Kagen (1303–1306)","Tokuji (1306–1308)","Enkyō (1308–1311)","Ōchō (1311–1312)","Shōwa (1312–1317)","Bunpō (1317–1319)","Genō (1319–1321)","Genkō (1321–1324)","Shōchū (1324–1326)","Karyaku (1326–1329)","Gentoku (1329–1331)","Genkō (1331–1334)","Kenmu (1334–1336)","Engen (1336–1340)","Kōkoku (1340–1346)","Shōhei (1346–1370)","Kentoku (1370–1372)","Bunchū (1372–1375)","Tenju (1375–1379)","Kōryaku (1379–1381)","Kōwa (1381–1384)","Genchū (1384–1392)","Meitoku (1384–1387)","Kakei (1387–1389)","Kōō (1389–1390)","Meitoku (1390–1394)","Ōei (1394–1428)","Shōchō (1428–1429)","Eikyō (1429–1441)","Kakitsu (1441–1444)","Bun’an (1444–1449)","Hōtoku (1449–1452)","Kyōtoku (1452–1455)","Kōshō (1455–1457)","Chōroku (1457–1460)","Kanshō (1460–1466)","Bunshō (1466–1467)","Ōnin (1467–1469)","Bunmei (1469–1487)","Chōkyō (1487–1489)","Entoku (1489–1492)","Meiō (1492–1501)","Bunki (1501–1504)","Eishō (1504–1521)","Taiei (1521–1528)","Kyōroku (1528–1532)","Tenbun (1532–1555)","Kōji (1555–1558)","Eiroku (1558–1570)","Genki (1570–1573)","Tenshō (1573–1592)","Bunroku (1592–1596)","Keichō (1596–1615)","Genna (1615–1624)","Kan’ei (1624–1644)","Shōho (1644–1648)","Keian (1648–1652)","Jōō (1652–1655)","Meireki (1655–1658)","Manji (1658–1661)","Kanbun (1661–1673)","Enpō (1673–1681)","Tenna (1681–1684)","Jōkyō (1684–1688)","Genroku (1688–1704)","Hōei (1704–1711)","Shōtoku (1711–1716)","Kyōhō (1716–1736)","Genbun (1736–1741)","Kanpō (1741–1744)","Enkyō (1744–1748)","Kan’en (1748–1751)","Hōreki (1751–1764)","Meiwa (1764–1772)","An’ei (1772–1781)","Tenmei (1781–1789)","Kansei (1789–1801)","Kyōwa (1801–1804)","Bunka (1804–1818)","Bunsei (1818–1830)","Tenpō (1830–1844)","Kōka (1844–1848)","Kaei (1848–1854)","Ansei (1854–1860)","Man’en (1860–1861)","Bunkyū (1861–1864)","Genji (1864–1865)","Keiō (1865–1868)","M","T","S","H"],short:["Эпоха Тайка (645–650)","Эпоха Хакути (650–671)","Эпоха Хакухо (672–686)","Эпоха Сючё (686–701)","Эпоха Тайхо (701–704)","Эпоха Кёюн (704–708)","Эпоха Вадо (708–715)","Эпоха Рэйки (715–717)","Эпоха Ёро (717–724)","Эпоха Дзинки (724–729)","Эпоха Темпьё (729–749)","Эпоха Темпьё (749–749)","Эпоха Темпьё-Сьохо (749-757)","Эпоха Темпьё-Ходзи (757-765)","Эпоха Темпьё-Ходзи (765-767)","Эпоха Джинго-Кёюн (767-770)","Эпоха Хоки (770–780)","Эпоха Теньё (781–782)","Эпоха Енряку (782–806)","Эпоха Дайдо (806–810)","Эпоха Конин (810–824)","Эпоха Тентьо (824–834)","Эпоха Шова (834–848)","Эпоха Кайо (848–851)","Эпоха Ниндзю (851–854)","Эпоха Сайко (854–857)","Эпоха Теннан (857–859)","Эпоха Йоган (859–877)","Эпоха Генкей (877–885)","Эпоха Нинна (885–889)","Эпоха Кампьё (889–898)","Эпоха Сьотай (898–901)","Эпоха Энги (901–923)","Эпоха Ентьо (923–931)","Эпоха Сьёхэй (931–938)","Эпоха Тенгьо (938–947)","Эпоха Тенрияку (947–957)","Эпоха Тентоку (957–961)","Эпоха Ова (961–964)","Эпоха Кохо (964–968)","Эпоха Анна (968–970)","Эпоха Тенроку (970–973)","Эпоха Теньен (973–976)","Эпоха Дзьоген (976–978)","Эпоха Тенген (978–983)","Эпоха Ейкан (983–985)","Эпоха Канна (985–987)","Эпоха Ейен (987–989)","Эпоха Ейсо (989–990)","Эпоха Сёряку (990–995)","Эпоха Тётоку (995–999)","Эпоха Тёхо (999–1004)","Эпоха Канко (1004–1012)","Эпоха Тёва (1012–1017)","Эпоха Каннин (1017–1021)","Эпоха Дзиан (1021–1024)","Эпоха Мандзю (1024–1028)","Эпоха Тёгэн (1028–1037)","Эпоха Тёряку (1037–1040)","Эпоха Тёкю (1040–1044)","Эпоха Катоку (1044–1046)","Эпоха Эйсо (1046–1053)","Эпоха Тэнги (1053–1058)","Эпоха Кохэй (1058–1065)","Эпоха Дзиряку (1065–1069)","Эпоха Энкю (1069–1074)","Эпоха Сёхо (1074–1077)","Эпоха Сёряку (1077–1081)","Эпоха Эйхо (1081–1084)","Эпоха Отоку (1084–1087)","Эпоха Кандзи (1087–1094)","Эпоха Кахо (1094–1096)","Эпоха Эйтё (1096–1097)","Эпоха Сётоку (1097–1099)","Эпоха Кова (1099–1104)","Эпоха Тёдзи (1104–1106)","Эпоха Касё (1106–1108)","Эпоха Тэннин (1108–1110)","Эпоха Тэнъэй (1110–1113)","Эпоха Эйкю (1113–1118)","Эпоха Гэнъэй (1118–1120)","Эпоха Хоан (1120–1124)","Эпоха Тэндзи (1124–1126)","Эпоха Дайдзи (1126–1131)","Эпоха Тэнсё (1131–1132)","Эпоха Тёсё (1132–1135)","Эпоха Хоэн (1135–1141)","Эпоха Эйдзи (1141–1142)","Эпоха Кодзи (1142–1144)","Эпоха Тэнё (1144–1145)","Эпоха Кюан (1145–1151)","Эпоха Нимпэй (1151–1154)","Эпоха Кюдзю (1154–1156)","Эпоха Хогэн (1156–1159)","Эпоха Хэйдзи (1159–1160)","Эпоха Эйряку (1160–1161)","Эпоха Охо (1161–1163)","Эпоха Тёкан (1163–1165)","Эпоха Эйман (1165–1166)","Эпоха Нинъан (1166–1169)","Эпоха Као (1169–1171)","Эпоха Сёан (1171–1175)","Эпоха Ангэн (1175–1177)","Эпоха Дзисё (1177–1181)","Эпоха Ёва (1181–1182)","Эпоха Дзюэй (1182–1184)","Эпоха Гэнрюку (1184–1185)","Эпоха Бундзи (1185–1190)","Эпоха Кэнкю (1190–1199)","Эпоха Сёдзи (1199–1201)","Эпоха Кэннин (1201–1204)","Эпоха Гэнкю (1204–1206)","Эпоха Кэнъэй (1206–1207)","Эпоха Сёгэн (1207–1211)","Эпоха Кэнряку (1211–1213)","Эпоха Кэмпо (1213–1219)","Эпоха Сёкю (1219–1222)","Эпоха Дзёо (1222–1224)","Эпоха Гэннин (1224–1225)","Эпоха Кароку (1225–1227)","Эпоха Антэй (1227–1229)","Эпоха Канки (1229–1232)","Эпоха Дзёэй (1232–1233)","Эпоха Тэмпуку (1233–1234)","Эпоха Бунряку (1234–1235)","Эпоха Катэй (1235–1238)","Эпоха Рякунин (1238–1239)","Эпоха Энъо (1239–1240)","Эпоха Ниндзи (1240–1243)","Эпоха Кангэн (1243–1247)","Эпоха Ходзи (1247–1249)","Эпоха Кэнтё (1249–1256)","Эпоха Когэн (1256–1257)","Эпоха Сёка (1257–1259)","Эпоха Сёгэн (1259–1260)","Эпоха Бунъо (1260–1261)","Эпоха Котё (1261–1264)","Эпоха Бунъэй (1264–1275)","Эпоха Кэндзи (1275–1278)","Эпоха Коан (1278–1288)","Эпоха Сёо (1288–1293)","Эпоха Эйнин (1293–1299)","Эпоха Сёан (1299–1302)","Эпоха Кэнгэн (1302–1303)","Эпоха Кагэн (1303–1306)","Эпоха Токудзи (1306–1308)","Эпоха Энкэй (1308–1311)","Эпоха Отё (1311–1312)","Эпоха Сёва (1312–1317)","Эпоха Бумпо (1317–1319)","Эпоха Гэно (1319–1321)","Эпоха Гэнкё (1321–1324)","Эпоха Сётю (1324–1326)","Эпоха Карэки (1326–1329)","Эпоха Гэнтоку (1329–1331)","Эпоха Гэнко (1331–1334)","Эпоха Кэмму (1334–1336)","Эпоха Энгэн (1336–1340)","Эпоха Кококу (1340–1346)","Эпоха Сёхэй (1346–1370)","Эпоха Кэнтоку (1370–1372)","Эпоха Бунтю (1372–1375)","Эпоха Иэндзю (1375–1379)","Эпоха Коряку (1379–1381)","Эпоха Кова (1381–1384)","Эпоха Гэнтю (1384–1392)","Эпоха Мэйтоку (1384–1387)","Эпоха Какэй (1387–1389)","Эпоха Коо (1389–1390)","Эпоха Мэйтоку (1390–1394)","Эпоха Оэй (1394–1428)","Эпоха Сётё (1428–1429)","Эпоха Эйкё (1429–1441)","Эпоха Какицу (1441–1444)","Эпоха Банъан (1444–1449)","Эпоха Хотоку (1449–1452)","Эпоха Кётоку (1452–1455)","Эпоха Косё (1455–1457)","Эпоха Тёроку (1457–1460)","Эпоха Кансё (1460–1466)","Эпоха Бунсё (1466–1467)","Эпоха Онин (1467–1469)","Эпоха Буммэй (1469–1487)","Эпоха Тёкё (1487–1489)","Эпоха Энтоку (1489–1492)","Эпоха Мэйо (1492–1501)","Эпоха Бунки (1501–1504)","Эпоха Эйсё (1504–1521)","Эпоха Тайэй (1521–1528)","Эпоха Кёроку (1528–1532)","Эпоха Тэммон (1532–1555)","Эпоха Кодзи (1555–1558)","Эпоха Эйроку (1558–1570)","Эпоха Гэнки (1570–1573)","Эпоха Тэнсё (1573–1592)","Эпоха Бунроку (1592–1596)","Эпоха Кэйтё (1596–1615)","Эпоха Гэнва (1615–1624)","Эпоха Канъэй (1624–1644)","Эпоха Сёхо (1644–1648)","Эпоха Кэйан (1648–1652)","Эпоха Сё (1652–1655)","Эпоха Мэйряку (1655–1658)","Эпоха Мандзи (1658–1661)","Эпоха Камбун (1661–1673)","Эпоха Эмпо (1673–1681)","Эпоха Тэнва (1681–1684)","Эпоха Дзёкё (1684–1688)","Эпоха Гэнроку (1688–1704)","Эпоха Хоэй (1704–1711)","Эпоха Сётоку (1711–1716)","Эпоха Кёхо (1716–1736)","Эпоха Гэмбун (1736–1741)","Эпоха Кампо (1741–1744)","Эпоха Энкё (1744–1748)","Эпоха Канъэн (1748–1751)","Эпоха Хоряку (1751–1764)","Эпоха Мэйва (1764–1772)","Эпоха Анъэй (1772–1781)","Эпоха Тэммэй (1781–1789)","Эпоха Кансэй (1789–1801)","Эпоха Кёва (1801–1804)","Эпоха Бунка (1804–1818)","Эпоха Бунсэй (1818–1830)","Эпоха Тэмпо (1830–1844)","Эпоха Кока (1844–1848)","Эпоха Каэй (1848–1854)","Эпоха Ансэй (1854–1860)","Эпоха Манъэн (1860–1861)","Эпоха Бункю (1861–1864)","Эпоха Гендзи (1864–1865)","Эпоха Кейо (1865–1868)","Эпоха Мэйдзи","Эпоха Тайсьо","Сьова","Эпоха Хэйсэй"],long:["Эпоха Тайка (645–650)","Эпоха Хакути (650–671)","Эпоха Хакухо (672–686)","Эпоха Сючё (686–701)","Эпоха Тайхо (701–704)","Эпоха Кёюн (704–708)","Эпоха Вадо (708–715)","Эпоха Рэйки (715–717)","Эпоха Ёро (717–724)","Эпоха Дзинки (724–729)","Эпоха Темпьё (729–749)","Эпоха Темпьё (749–749)","Эпоха Темпьё-Сьохо (749-757)","Эпоха Темпьё-Ходзи (757-765)","Эпоха Темпьё-Ходзи (765-767)","Эпоха Джинго-Кёюн (767-770)","Эпоха Хоки (770–780)","Эпоха Теньё (781–782)","Эпоха Енряку (782–806)","Эпоха Дайдо (806–810)","Эпоха Конин (810–824)","Эпоха Тентьо (824–834)","Эпоха Шова (834–848)","Эпоха Кайо (848–851)","Эпоха Ниндзю (851–854)","Эпоха Сайко (854–857)","Эпоха Теннан (857–859)","Эпоха Йоган (859–877)","Эпоха Генкей (877–885)","Эпоха Нинна (885–889)","Эпоха Кампьё (889–898)","Эпоха Сьотай (898–901)","Эпоха Энги (901–923)","Эпоха Ентьо (923–931)","Эпоха Сьёхэй (931–938)","Эпоха Тенгьо (938–947)","Эпоха Тенрияку (947–957)","Эпоха Тентоку (957–961)","Эпоха Ова (961–964)","Эпоха Кохо (964–968)","Эпоха Анна (968–970)","Эпоха Тенроку (970–973)","Эпоха Теньен (973–976)","Эпоха Дзьоген (976–978)","Эпоха Тенген (978–983)","Эпоха Ейкан (983–985)","Эпоха Канна (985–987)","Эпоха Ейен (987–989)","Эпоха Ейсо (989–990)","Эпоха Сёряку (990–995)","Эпоха Тётоку (995–999)","Эпоха Тёхо (999–1004)","Эпоха Канко (1004–1012)","Эпоха Тёва (1012–1017)","Эпоха Каннин (1017–1021)","Эпоха Дзиан (1021–1024)","Эпоха Мандзю (1024–1028)","Эпоха Тёгэн (1028–1037)","Эпоха Тёряку (1037–1040)","Эпоха Тёкю (1040–1044)","Эпоха Катоку (1044–1046)","Эпоха Эйсо (1046–1053)","Эпоха Тэнги (1053–1058)","Эпоха Кохэй (1058–1065)","Эпоха Дзиряку (1065–1069)","Эпоха Энкю (1069–1074)","Эпоха Сёхо (1074–1077)","Эпоха Сёряку (1077–1081)","Эпоха Эйхо (1081–1084)","Эпоха Отоку (1084–1087)","Эпоха Кандзи (1087–1094)","Эпоха Кахо (1094–1096)","Эпоха Эйтё (1096–1097)","Эпоха Сётоку (1097–1099)","Эпоха Кова (1099–1104)","Эпоха Тёдзи (1104–1106)","Эпоха Касё (1106–1108)","Эпоха Тэннин (1108–1110)","Эпоха Тэнъэй (1110–1113)","Эпоха Эйкю (1113–1118)","Эпоха Гэнъэй (1118–1120)","Эпоха Хоан (1120–1124)","Эпоха Тэндзи (1124–1126)","Эпоха Дайдзи (1126–1131)","Эпоха Тэнсё (1131–1132)","Эпоха Тёсё (1132–1135)","Эпоха Хоэн (1135–1141)","Эпоха Эйдзи (1141–1142)","Эпоха Кодзи (1142–1144)","Эпоха Тэнё (1144–1145)","Эпоха Кюан (1145–1151)","Эпоха Нимпэй (1151–1154)","Эпоха Кюдзю (1154–1156)","Эпоха Хогэн (1156–1159)","Эпоха Хэйдзи (1159–1160)","Эпоха Эйряку (1160–1161)","Эпоха Охо (1161–1163)","Эпоха Тёкан (1163–1165)","Эпоха Эйман (1165–1166)","Эпоха Нинъан (1166–1169)","Эпоха Као (1169–1171)","Эпоха Сёан (1171–1175)","Эпоха Ангэн (1175–1177)","Эпоха Дзисё (1177–1181)","Эпоха Ёва (1181–1182)","Эпоха Дзюэй (1182–1184)","Эпоха Гэнрюку (1184–1185)","Эпоха Бундзи (1185–1190)","Эпоха Кэнкю (1190–1199)","Эпоха Сёдзи (1199–1201)","Эпоха Кэннин (1201–1204)","Эпоха Гэнкю (1204–1206)","Эпоха Кэнъэй (1206–1207)","Эпоха Сёгэн (1207–1211)","Эпоха Кэнряку (1211–1213)","Эпоха Кэмпо (1213–1219)","Эпоха Сёкю (1219–1222)","Эпоха Дзёо (1222–1224)","Эпоха Гэннин (1224–1225)","Эпоха Кароку (1225–1227)","Эпоха Антэй (1227–1229)","Эпоха Канки (1229–1232)","Эпоха Дзёэй (1232–1233)","Эпоха Тэмпуку (1233–1234)","Эпоха Бунряку (1234–1235)","Эпоха Катэй (1235–1238)","Эпоха Рякунин (1238–1239)","Эпоха Энъо (1239–1240)","Эпоха Ниндзи (1240–1243)","Эпоха Кангэн (1243–1247)","Эпоха Ходзи (1247–1249)","Эпоха Кэнтё (1249–1256)","Эпоха Когэн (1256–1257)","Эпоха Сёка (1257–1259)","Эпоха Сёгэн (1259–1260)","Эпоха Бунъо (1260–1261)","Эпоха Котё (1261–1264)","Эпоха Бунъэй (1264–1275)","Эпоха Кэндзи (1275–1278)","Эпоха Коан (1278–1288)","Эпоха Сёо (1288–1293)","Эпоха Эйнин (1293–1299)","Эпоха Сёан (1299–1302)","Эпоха Кэнгэн (1302–1303)","Эпоха Кагэн (1303–1306)","Эпоха Токудзи (1306–1308)","Эпоха Энкэй (1308–1311)","Эпоха Отё (1311–1312)","Эпоха Сёва (1312–1317)","Эпоха Бумпо (1317–1319)","Эпоха Гэно (1319–1321)","Эпоха Гэнкё (1321–1324)","Эпоха Сётю (1324–1326)","Эпоха Карэки (1326–1329)","Эпоха Гэнтоку (1329–1331)","Эпоха Гэнко (1331–1334)","Эпоха Кэмму (1334–1336)","Эпоха Энгэн (1336–1340)","Эпоха Кококу (1340–1346)","Эпоха Сёхэй (1346–1370)","Эпоха Кэнтоку (1370–1372)","Эпоха Бунтю (1372–1375)","Эпоха Иэндзю (1375–1379)","Эпоха Коряку (1379–1381)","Эпоха Кова (1381–1384)","Эпоха Гэнтю (1384–1392)","Эпоха Мэйтоку (1384–1387)","Эпоха Какэй (1387–1389)","Эпоха Коо (1389–1390)","Эпоха Мэйтоку (1390–1394)","Эпоха Оэй (1394–1428)","Эпоха Сётё (1428–1429)","Эпоха Эйкё (1429–1441)","Эпоха Какицу (1441–1444)","Эпоха Банъан (1444–1449)","Эпоха Хотоку (1449–1452)","Эпоха Кётоку (1452–1455)","Эпоха Косё (1455–1457)","Эпоха Тёроку (1457–1460)","Эпоха Кансё (1460–1466)","Эпоха Бунсё (1466–1467)","Эпоха Онин (1467–1469)","Эпоха Буммэй (1469–1487)","Эпоха Тёкё (1487–1489)","Эпоха Энтоку (1489–1492)","Эпоха Мэйо (1492–1501)","Эпоха Бунки (1501–1504)","Эпоха Эйсё (1504–1521)","Эпоха Тайэй (1521–1528)","Эпоха Кёроку (1528–1532)","Эпоха Тэммон (1532–1555)","Эпоха Кодзи (1555–1558)","Эпоха Эйроку (1558–1570)","Эпоха Гэнки (1570–1573)","Эпоха Тэнсё (1573–1592)","Эпоха Бунроку (1592–1596)","Эпоха Кэйтё (1596–1615)","Эпоха Гэнва (1615–1624)","Эпоха Канъэй (1624–1644)","Эпоха Сёхо (1644–1648)","Эпоха Кэйан (1648–1652)","Эпоха Сё (1652–1655)","Эпоха Мэйряку (1655–1658)","Эпоха Мандзи (1658–1661)","Эпоха Камбун (1661–1673)","Эпоха Эмпо (1673–1681)","Эпоха Тэнва (1681–1684)","Эпоха Дзёкё (1684–1688)","Эпоха Гэнроку (1688–1704)","Эпоха Хоэй (1704–1711)","Эпоха Сётоку (1711–1716)","Эпоха Кёхо (1716–1736)","Эпоха Гэмбун (1736–1741)","Эпоха Кампо (1741–1744)","Эпоха Энкё (1744–1748)","Эпоха Канъэн (1748–1751)","Эпоха Хоряку (1751–1764)","Эпоха Мэйва (1764–1772)","Эпоха Анъэй (1772–1781)","Эпоха Тэммэй (1781–1789)","Эпоха Кансэй (1789–1801)","Эпоха Кёва (1801–1804)","Эпоха Бунка (1804–1818)","Эпоха Бунсэй (1818–1830)","Эпоха Тэмпо (1830–1844)","Эпоха Кока (1844–1848)","Эпоха Каэй (1848–1854)","Эпоха Ансэй (1854–1860)","Эпоха Манъэн (1860–1861)","Эпоха Бункю (1861–1864)","Эпоха Гендзи (1864–1865)","Эпоха Кейо (1865–1868)","Эпоха Мэйдзи","Эпоха Тайсьо","Сьова","Эпоха Хэйсэй"]},dayPeriods:{am:"ДП",pm:"ПП"}},persian:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],short:["Фарвардин","Ордибехешт","Хордад","Тир","Мордад","Шахривер","Мехр","Абан","Азер","Дей","Бахман","Эсфанд"],long:["Фарвардин","Ордибехешт","Хордад","Тир","Мордад","Шахривер","Мехр","Абан","Азер","Дей","Бахман","Эсфанд"]},days:{narrow:["вс","пн","вт","ср","чт","пт","сб"],short:["вс","пн","вт","ср","чт","пт","сб"],long:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"]},eras:{narrow:["AP"],short:["AP"],long:["AP"]},dayPeriods:{am:"ДП",pm:"ПП"}},roc:{months:{narrow:["Я","Ф","М","А","М","И","И","А","С","О","Н","Д"],short:["янв.","февр.","мар.","апр.","мая","июн.","июл.","авг.","сент.","окт.","нояб.","дек."],long:["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"]},days:{narrow:["вс","пн","вт","ср","чт","пт","сб"],short:["вс","пн","вт","ср","чт","пт","сб"],long:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"]},eras:{narrow:["Before R.O.C.","Minguo"],short:["Before R.O.C.","Minguo"],long:["Before R.O.C.","Minguo"]},dayPeriods:{am:"ДП",pm:"ПП"}}}},number:{nu:["latn"],patterns:{decimal:{positivePattern:"{number}",negativePattern:"{minusSign}{number}"},currency:{positivePattern:"{number} {currency}",negativePattern:"{minusSign}{number} {currency}"},percent:{positivePattern:"{number} {percentSign}",negativePattern:"{minusSign}{number} {percentSign}"}},symbols:{latn:{decimal:",",group:" ",nan:"не число",plusSign:"+",minusSign:"-",percentSign:"%",infinity:"∞"}},currencies:{AUD:"A$",BRL:"R$",BYR:"р.",CAD:"CA$",CNY:"CN¥",EUR:"€",GBP:"£",HKD:"HK$",ILS:"₪",INR:"₹",JPY:"¥",KRW:"₩",MXN:"MX$",NZD:"NZ$",RUB:"₽",THB:"฿",TMT:"ТМТ",TWD:"NT$",UAH:"₴",USD:"$",VND:"₫",XAF:"FCFA",XCD:"EC$",XOF:"CFA",XPF:"CFPF",XXX:"XXXX"}}});
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

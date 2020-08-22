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
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("el").length
)) {
// Intl.DisplayNames.~locale.el
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"el":{"types":{"language":{"long":{"aa":"Αφάρ","ab":"Αμπχαζικά","ace":"Ατσινιζικά","ach":"Ακολί","ada":"Αντάνγκμε","ady":"Αντιγκέα","ae":"Αβεστάν","af":"Αφρικάανς","afh":"Αφριχίλι","agq":"Αγκέμ","ain":"Αϊνού","ak":"Ακάν","akk":"Ακάντιαν","ale":"Αλεούτ","alt":"Νότια Αλτάι","am":"Αμχαρικά","an":"Αραγονικά","ang":"Παλαιά Αγγλικά","anp":"Ανγκικά","ar":"Αραβικά","ar-001":"Σύγχρονα Τυπικά Αραβικά","arc":"Αραμαϊκά","arn":"Αραουκανικά","arp":"Αραπάχο","ars":"Αραβικά Νάτζντι","arw":"Αραγουάκ","as":"Ασαμικά","asa":"Άσου","ast":"Αστουριανά","av":"Αβαρικά","awa":"Αγουαντί","ay":"Αϊμάρα","az":"Αζερμπαϊτζανικά","ba":"Μπασκίρ","bal":"Μπαλούτσι","ban":"Μπαλινίζ","bas":"Μπάσα","bax":"Μπαμούν","bbj":"Γκομάλα","be":"Λευκορωσικά","bej":"Μπέζα","bem":"Μπέμπα","bez":"Μπένα","bfd":"Μπαφούτ","bg":"Βουλγαρικά","bgn":"Δυτικά Μπαλοχικά","bho":"Μπότζπουρι","bi":"Μπισλάμα","bik":"Μπικόλ","bin":"Μπίνι","bkm":"Κομ","bla":"Σικσίκα","bm":"Μπαμπάρα","bn":"Βεγγαλικά","bo":"Θιβετιανά","br":"Βρετονικά","bra":"Μπρατζ","brx":"Μπόντο","bs":"Βοσνιακά","bss":"Ακόσι","bua":"Μπουριάτ","bug":"Μπουγκίζ","bum":"Μπουλού","byn":"Μπλιν","byv":"Μεντούμπα","ca":"Καταλανικά","cad":"Κάντο","car":"Καρίμπ","cay":"Καγιούγκα","cch":"Ατσάμ","ccp":"Τσάκμα","ce":"Τσετσενικά","ceb":"Σεμπουάνο","cgg":"Τσίγκα","ch":"Τσαμόρο","chb":"Τσίμπτσα","chg":"Τσαγκατάι","chk":"Τσουκίζι","chm":"Μάρι","chn":"Ιδιωματικά Σινούκ","cho":"Τσόκτο","chp":"Τσίπιουαν","chr":"Τσερόκι","chy":"Τσεγιέν","ckb":"Κουρδικά Σοράνι","co":"Κορσικανικά","cop":"Κοπτικά","cr":"Κρι","crh":"Τουρκικά Κριμαίας","crs":"Κρεολικά Γαλλικά Σεϋχελλών","cs":"Τσεχικά","csb":"Κασούμπιαν","cu":"Εκκλησιαστικά Σλαβικά","cv":"Τσουβασικά","cy":"Ουαλικά","da":"Δανικά","dak":"Ντακότα","dar":"Ντάργκουα","dav":"Τάιτα","de":"Γερμανικά","de-AT":"Γερμανικά Αυστρίας","de-CH":"Υψηλά Γερμανικά Ελβετίας","del":"Ντέλαγουερ","den":"Σλαβικά","dgr":"Ντόγκριμπ","din":"Ντίνκα","dje":"Ζάρμα","doi":"Ντόγκρι","dsb":"Κάτω Σορβικά","dua":"Ντουάλα","dum":"Μέσα Ολλανδικά","dv":"Ντιβέχι","dyo":"Τζόλα-Φόνι","dyu":"Ντογιούλα","dz":"Ντζόνγκχα","dzg":"Νταζάγκα","ebu":"Έμπου","ee":"Έουε","efi":"Εφίκ","egy":"Αρχαία Αιγυπτιακά","eka":"Εκατζούκ","el":"Ελληνικά","elx":"Ελαμάιτ","en":"Αγγλικά","en-AU":"Αγγλικά Αυστραλίας","en-CA":"Αγγλικά Καναδά","en-GB":"Αγγλικά Βρετανίας","en-US":"Αγγλικά Αμερικής","enm":"Μέσα Αγγλικά","eo":"Εσπεράντο","es":"Ισπανικά","es-419":"Ισπανικά Λατινικής Αμερικής","es-ES":"Ισπανικά Ευρώπης","es-MX":"Ισπανικά Μεξικού","et":"Εσθονικά","eu":"Βασκικά","ewo":"Εγουόντο","fa":"Περσικά","fan":"Φανγκ","fat":"Φάντι","ff":"Φουλά","fi":"Φινλανδικά","fil":"Φιλιππινικά","fj":"Φίτζι","fo":"Φεροϊκά","fon":"Φον","fr":"Γαλλικά","fr-CA":"Γαλλικά Καναδά","fr-CH":"Γαλλικά Ελβετίας","frc":"Γαλλικά (Λουιζιάνα)","frm":"Μέσα Γαλλικά","fro":"Παλαιά Γαλλικά","frr":"Βόρεια Φριζιανά","frs":"Ανατολικά Φριζιανά","fur":"Φριουλανικά","fy":"Δυτικά Φριζικά","ga":"Ιρλανδικά","gaa":"Γκα","gag":"Γκαγκάουζ","gay":"Γκάγιο","gba":"Γκμπάγια","gd":"Σκωτικά Κελτικά","gez":"Γκιζ","gil":"Γκιλμπερτίζ","gl":"Γαλικιανά","gmh":"Μέσα Άνω Γερμανικά","gn":"Γκουαρανί","goh":"Παλαιά Άνω Γερμανικά","gon":"Γκόντι","gor":"Γκοροντάλο","got":"Γοτθικά","grb":"Γκρίμπο","grc":"Αρχαία Ελληνικά","gsw":"Γερμανικά Ελβετίας","gu":"Γκουγιαράτι","guz":"Γκούσι","gv":"Μανξ","gwi":"Γκουίτσιν","ha":"Χάουσα","hai":"Χάιντα","haw":"Χαβαϊκά","he":"Εβραϊκά","hi":"Χίντι","hil":"Χιλιγκαϊνόν","hit":"Χιτίτε","hmn":"Χμονγκ","ho":"Χίρι Μότου","hr":"Κροατικά","hsb":"Άνω Σορβικά","ht":"Αϊτιανά","hu":"Ουγγρικά","hup":"Χούπα","hy":"Αρμενικά","hz":"Χερέρο","ia":"Ιντερλίνγκουα","iba":"Ιμπάν","ibb":"Ιμπίμπιο","id":"Ινδονησιακά","ie":"Ιντερλίνγκουε","ig":"Ίγκμπο","ii":"Σίτσουαν Γι","ik":"Ινουπιάκ","ilo":"Ιλόκο","inh":"Ινγκούς","io":"Ίντο","is":"Ισλανδικά","it":"Ιταλικά","iu":"Ινούκτιτουτ","ja":"Ιαπωνικά","jbo":"Λόζμπαν","jgo":"Νγκόμπα","jmc":"Ματσάμε","jpr":"Ιουδαϊκά-Περσικά","jrb":"Ιουδαϊκά-Αραβικά","jv":"Ιαβανικά","ka":"Γεωργιανά","kaa":"Κάρα-Καλπάκ","kab":"Καμπίλε","kac":"Κατσίν","kaj":"Τζου","kam":"Κάμπα","kaw":"Κάουι","kbd":"Καμπαρντιανά","kbl":"Κανέμπου","kcg":"Τιάπ","kde":"Μακόντε","kea":"Γλώσσα του Πράσινου Ακρωτηρίου","kfo":"Κόρο","kg":"Κονγκό","kha":"Κάσι","kho":"Κοτανικά","khq":"Κόιρα Τσίνι","ki":"Κικούγιου","kj":"Κουανιάμα","kk":"Καζακικά","kkj":"Κάκο","kl":"Καλαάλισουτ","kln":"Καλεντζίν","km":"Χμερ","kmb":"Κιμπούντου","kn":"Κανάντα","ko":"Κορεατικά","koi":"Κόμι-Περμιάκ","kok":"Κονκανικά","kos":"Κοσραενικά","kpe":"Κπέλε","kr":"Κανούρι","krc":"Καρατσάι-Μπαλκάρ","krl":"Καρελικά","kru":"Κουρούχ","ks":"Κασμιρικά","ksb":"Σαμπάλα","ksf":"Μπάφια","ksh":"Κολωνικά","ku":"Κουρδικά","kum":"Κουμγιούκ","kut":"Κουτενάι","kv":"Κόμι","kw":"Κορνουαλικά","ky":"Κιργιζικά","la":"Λατινικά","lad":"Λαδίνο","lag":"Λάνγκι","lah":"Λάχδα","lam":"Λάμπα","lb":"Λουξεμβουργιανά","lez":"Λεζγκικά","lg":"Γκάντα","li":"Λιμβουργιανά","lkt":"Λακότα","ln":"Λινγκάλα","lo":"Λαοτινά","lol":"Μόνγκο","lou":"Κρεολικά (Λουιζιάνα)","loz":"Λόζι","lrc":"Βόρεια Λούρι","lt":"Λιθουανικά","lu":"Λούμπα-Κατάνγκα","lua":"Λούμπα-Λουλούα","lui":"Λουισένο","lun":"Λούντα","luo":"Λούο","lus":"Μίζο","luy":"Λούχια","lv":"Λετονικά","mad":"Μαντουρίζ","maf":"Μάφα","mag":"Μαγκάχι","mai":"Μαϊτχίλι","mak":"Μακασάρ","man":"Μαντίνγκο","mas":"Μασάι","mde":"Μάμπα","mdf":"Μόκσα","mdr":"Μανδάρ","men":"Μέντε","mer":"Μέρου","mfe":"Μορισιέν","mg":"Μαλγασικά","mga":"Μέσα Ιρλανδικά","mgh":"Μακούβα-Μέτο","mgo":"Μέτα","mh":"Μαρσαλέζικα","mi":"Μαορί","mic":"Μικμάκ","min":"Μινανγκαμπάου","mk":"Μακεδονικά","ml":"Μαλαγιαλαμικά","mn":"Μογγολικά","mnc":"Μαντσού","mni":"Μανιπούρι","moh":"Μοχόκ","mos":"Μόσι","mr":"Μαραθικά","ms":"Μαλαισιανά","mt":"Μαλτεζικά","mua":"Μουντάνγκ","mul":"Πολλαπλές γλώσσες","mus":"Κρικ","mwl":"Μιραντεζικά","mwr":"Μαργουάρι","my":"Βιρμανικά","mye":"Μιένε","myv":"Έρζια","mzn":"Μαζαντεράνι","na":"Ναούρου","nap":"Ναπολιτανικά","naq":"Νάμα","nb":"Νορβηγικά Μποκμάλ","nd":"Βόρεια Ντεμπέλε","nds":"Κάτω Γερμανικά","nds-NL":"Κάτω Γερμανικά Ολλανδίας","ne":"Νεπαλικά","new":"Νεγουάρι","ng":"Ντόνγκα","nia":"Νίας","niu":"Νιούε","nl":"Ολλανδικά","nl-BE":"Φλαμανδικά","nmg":"Κβάσιο","nn":"Νορβηγικά Νινόρσκ","nnh":"Νγκιεμπούν","no":"Νορβηγικά","nog":"Νογκάι","non":"Παλαιά Νορβηγικά","nqo":"Ν’Κο","nr":"Νότια Ντεμπέλε","nso":"Βόρεια Σόθο","nus":"Νούερ","nv":"Νάβαχο","nwc":"Κλασικά Νεουάρι","ny":"Νιάντζα","nym":"Νιαμγουέζι","nyn":"Νιανκόλε","nyo":"Νιόρο","nzi":"Νζίμα","oc":"Οξιτανικά","oj":"Οζιβίγουα","om":"Ορόμο","or":"Όντια","os":"Οσετικά","osa":"Οσάζ","ota":"Οθωμανικά Τουρκικά","pa":"Παντζαπικά","pag":"Πανγκασινάν","pal":"Παχλάβι","pam":"Παμπάνγκα","pap":"Παπιαμέντο","pau":"Παλάουαν","pcm":"Πίτζιν Νιγηρίας","peo":"Αρχαία Περσικά","phn":"Φοινικικά","pi":"Πάλι","pl":"Πολωνικά","pon":"Πομπηικά","prg":"Πρωσικά","pro":"Παλαιά Προβανσάλ","ps":"Πάστο","pt":"Πορτογαλικά","pt-BR":"Πορτογαλικά Βραζιλίας","pt-PT":"Πορτογαλικά Ευρώπης","qu":"Κέτσουα","quc":"Κιτσέ","raj":"Ραζασθάνι","rap":"Ραπανούι","rar":"Ραροτονγκάν","rm":"Ρομανικά","rn":"Ρούντι","ro":"Ρουμανικά","ro-MD":"Μολδαβικά","rof":"Ρόμπο","rom":"Ρομανί","root":"Ρίζα","ru":"Ρωσικά","rup":"Αρομανικά","rw":"Κινιαρουάντα","rwk":"Ρουά","sa":"Σανσκριτικά","sad":"Σαντάγουε","sah":"Σαχά","sam":"Σαμαρίτικα Αραμαϊκά","saq":"Σαμπούρου","sas":"Σασάκ","sat":"Σαντάλι","sba":"Νγκαμπέι","sbp":"Σάνγκου","sc":"Σαρδηνιακά","scn":"Σικελικά","sco":"Σκωτικά","sd":"Σίντι","sdh":"Νότια Κουρδικά","se":"Βόρεια Σάμι","see":"Σένεκα","seh":"Σένα","sel":"Σελκούπ","ses":"Κοϊραμπόρο Σένι","sg":"Σάνγκο","sga":"Παλαιά Ιρλανδικά","sh":"Σερβοκροατικά","shi":"Τασελχίτ","shn":"Σαν","shu":"Αραβικά του Τσαντ","si":"Σινχαλεζικά","sid":"Σιντάμο","sk":"Σλοβακικά","sl":"Σλοβενικά","sm":"Σαμοανά","sma":"Νότια Σάμι","smj":"Λούλε Σάμι","smn":"Ινάρι Σάμι","sms":"Σκολτ Σάμι","sn":"Σόνα","snk":"Σονίνκε","so":"Σομαλικά","sog":"Σογκντιέν","sq":"Αλβανικά","sr":"Σερβικά","srn":"Σρανάν Τόνγκο","srr":"Σερέρ","ss":"Σουάτι","ssy":"Σάχο","st":"Νότια Σόθο","su":"Σουνδανικά","suk":"Σουκούμα","sus":"Σούσου","sux":"Σουμερικά","sv":"Σουηδικά","sw":"Σουαχίλι","sw-CD":"Κονγκό Σουαχίλι","swb":"Κομοριανά","syc":"Κλασικά Συριακά","syr":"Συριακά","ta":"Ταμιλικά","te":"Τελούγκου","tem":"Τίμνε","teo":"Τέσο","ter":"Τερένο","tet":"Τέτουμ","tg":"Τατζικικά","th":"Ταϊλανδικά","ti":"Τιγκρινικά","tig":"Τίγκρε","tiv":"Τιβ","tk":"Τουρκμενικά","tkl":"Τοκελάου","tl":"Τάγκαλογκ","tlh":"Κλίνγκον","tli":"Τλίνγκιτ","tmh":"Ταμασέκ","tn":"Τσουάνα","to":"Τονγκανικά","tog":"Νιάσα Τόνγκα","tpi":"Τοκ Πισίν","tr":"Τουρκικά","trv":"Ταρόκο","ts":"Τσόνγκα","tsi":"Τσίμσιαν","tt":"Ταταρικά","tum":"Τουμπούκα","tvl":"Τουβαλού","tw":"Τούι","twq":"Τασαβάκ","ty":"Ταϊτιανά","tyv":"Τουβινικά","tzm":"Ταμαζίτ Κεντρικού Μαρόκο","udm":"Ουντμούρτ","ug":"Ουιγκουρικά","uga":"Ουγκαριτικά","uk":"Ουκρανικά","umb":"Ουμπούντου","und":"Άγνωστη γλώσσα","ur":"Ουρντού","uz":"Ουζμπεκικά","vai":"Βάι","ve":"Βέντα","vi":"Βιετναμικά","vo":"Βολαπιούκ","vot":"Βότικ","vun":"Βούντζο","wa":"Βαλλωνικά","wae":"Βάλσερ","wal":"Γουολάιτα","war":"Γουάραϊ","was":"Γουασό","wbp":"Γουαρλπίρι","wo":"Γουόλοφ","wuu":"Κινεζικά Γου","xal":"Καλμίκ","xh":"Κόσα","xog":"Σόγκα","yao":"Γιάο","yap":"Γιαπίζ","yav":"Γιανγκμπέν","ybb":"Γιέμπα","yi":"Γίντις","yo":"Γιορούμπα","yue":"Καντονέζικα","za":"Ζουάνγκ","zap":"Ζάποτεκ","zbl":"Σύμβολα Bliss","zen":"Ζενάγκα","zgh":"Τυπικά Ταμαζίτ Μαρόκου","zh":"Κινεζικά","zh-Hans":"Απλοποιημένα Κινεζικά","zh-Hant":"Παραδοσιακά Κινεζικά","zu":"Ζουλού","zun":"Ζούνι","zxx":"Χωρίς γλωσσολογικό περιεχόμενο","zza":"Ζάζα"},"short":{"az":"Αζερικά","en-GB":"Αγγλικά ΗΒ","en-US":"Αγγλικά ΗΠΑ"},"narrow":{}},"region":{"long":{"142":"Ασία","143":"Κεντρική Ασία","145":"Δυτική Ασία","150":"Ευρώπη","151":"Ανατολική Ευρώπη","154":"Βόρεια Ευρώπη","155":"Δυτική Ευρώπη","202":"Υποσαχάρια Αφρική","419":"Λατινική Αμερική","001":"Κόσμος","002":"Αφρική","003":"Βόρεια Αμερική","005":"Νότια Αμερική","009":"Ωκεανία","011":"Δυτική Αφρική","013":"Κεντρική Αμερική","014":"Ανατολική Αφρική","015":"Βόρεια Αφρική","017":"Μέση Αφρική","018":"Νότιος Αφρική","019":"Αμερική","021":"Βόρειος Αμερική","029":"Καραϊβική","030":"Ανατολική Ασία","034":"Νότια Ασία","035":"Νοτιοανατολική Ασία","039":"Νότια Ευρώπη","053":"Αυστραλασία","054":"Μελανησία","057":"Περιοχή Μικρονησίας","061":"Πολυνησία","AC":"Νήσος Ασενσιόν","AD":"Ανδόρα","AE":"Ηνωμένα Αραβικά Εμιράτα","AF":"Αφγανιστάν","AG":"Αντίγκουα και Μπαρμπούντα","AI":"Ανγκουίλα","AL":"Αλβανία","AM":"Αρμενία","AO":"Αγκόλα","AQ":"Ανταρκτική","AR":"Αργεντινή","AS":"Αμερικανική Σαμόα","AT":"Αυστρία","AU":"Αυστραλία","AW":"Αρούμπα","AX":"Νήσοι Όλαντ","AZ":"Αζερμπαϊτζάν","BA":"Βοσνία - Ερζεγοβίνη","BB":"Μπαρμπέιντος","BD":"Μπανγκλαντές","BE":"Βέλγιο","BF":"Μπουρκίνα Φάσο","BG":"Βουλγαρία","BH":"Μπαχρέιν","BI":"Μπουρούντι","BJ":"Μπενίν","BL":"Άγιος Βαρθολομαίος","BM":"Βερμούδες","BN":"Μπρουνέι","BO":"Βολιβία","BQ":"Ολλανδία Καραϊβικής","BR":"Βραζιλία","BS":"Μπαχάμες","BT":"Μπουτάν","BV":"Νήσος Μπουβέ","BW":"Μποτσουάνα","BY":"Λευκορωσία","BZ":"Μπελίζ","CA":"Καναδάς","CC":"Νήσοι Κόκος (Κίλινγκ)","CD":"Κονγκό - Κινσάσα","CF":"Κεντροαφρικανική Δημοκρατία","CG":"Κονγκό - Μπραζαβίλ","CH":"Ελβετία","CI":"Ακτή Ελεφαντοστού","CK":"Νήσοι Κουκ","CL":"Χιλή","CM":"Καμερούν","CN":"Κίνα","CO":"Κολομβία","CP":"Νήσος Κλίπερτον","CR":"Κόστα Ρίκα","CU":"Κούβα","CV":"Πράσινο Ακρωτήριο","CW":"Κουρασάο","CX":"Νήσος των Χριστουγέννων","CY":"Κύπρος","CZ":"Τσεχία","DE":"Γερμανία","DG":"Ντιέγκο Γκαρσία","DJ":"Τζιμπουτί","DK":"Δανία","DM":"Ντομίνικα","DO":"Δομινικανή Δημοκρατία","DZ":"Αλγερία","EA":"Θέουτα και Μελίγια","EC":"Ισημερινός","EE":"Εσθονία","EG":"Αίγυπτος","EH":"Δυτική Σαχάρα","ER":"Ερυθραία","ES":"Ισπανία","ET":"Αιθιοπία","EU":"Ευρωπαϊκή Ένωση","EZ":"Ευρωζώνη","FI":"Φινλανδία","FJ":"Φίτζι","FK":"Νήσοι Φόκλαντ","FM":"Μικρονησία","FO":"Νήσοι Φερόες","FR":"Γαλλία","GA":"Γκαμπόν","GB":"Ηνωμένο Βασίλειο","GD":"Γρενάδα","GE":"Γεωργία","GF":"Γαλλική Γουιάνα","GG":"Γκέρνζι","GH":"Γκάνα","GI":"Γιβραλτάρ","GL":"Γροιλανδία","GM":"Γκάμπια","GN":"Γουινέα","GP":"Γουαδελούπη","GQ":"Ισημερινή Γουινέα","GR":"Ελλάδα","GS":"Νήσοι Νότια Γεωργία και Νότιες Σάντουιτς","GT":"Γουατεμάλα","GU":"Γκουάμ","GW":"Γουινέα Μπισάου","GY":"Γουιάνα","HK":"Χονγκ Κονγκ ΕΔΠ Κίνας","HM":"Νήσοι Χερντ και Μακντόναλντ","HN":"Ονδούρα","HR":"Κροατία","HT":"Αϊτή","HU":"Ουγγαρία","IC":"Κανάριοι Νήσοι","ID":"Ινδονησία","IE":"Ιρλανδία","IL":"Ισραήλ","IM":"Νήσος του Μαν","IN":"Ινδία","IO":"Βρετανικά Εδάφη Ινδικού Ωκεανού","IQ":"Ιράκ","IR":"Ιράν","IS":"Ισλανδία","IT":"Ιταλία","JE":"Τζέρζι","JM":"Τζαμάικα","JO":"Ιορδανία","JP":"Ιαπωνία","KE":"Κένυα","KG":"Κιργιστάν","KH":"Καμπότζη","KI":"Κιριμπάτι","KM":"Κομόρες","KN":"Σεν Κιτς και Νέβις","KP":"Βόρεια Κορέα","KR":"Νότια Κορέα","KW":"Κουβέιτ","KY":"Νήσοι Κέιμαν","KZ":"Καζακστάν","LA":"Λάος","LB":"Λίβανος","LC":"Αγία Λουκία","LI":"Λιχτενστάιν","LK":"Σρι Λάνκα","LR":"Λιβερία","LS":"Λεσότο","LT":"Λιθουανία","LU":"Λουξεμβούργο","LV":"Λετονία","LY":"Λιβύη","MA":"Μαρόκο","MC":"Μονακό","MD":"Μολδαβία","ME":"Μαυροβούνιο","MF":"Άγιος Μαρτίνος (Γαλλικό τμήμα)","MG":"Μαδαγασκάρη","MH":"Νήσοι Μάρσαλ","MK":"Βόρεια Μακεδονία","ML":"Μάλι","MM":"Μιανμάρ (Βιρμανία)","MN":"Μογγολία","MO":"Μακάο ΕΔΠ Κίνας","MP":"Νήσοι Βόρειες Μαριάνες","MQ":"Μαρτινίκα","MR":"Μαυριτανία","MS":"Μονσεράτ","MT":"Μάλτα","MU":"Μαυρίκιος","MV":"Μαλδίβες","MW":"Μαλάουι","MX":"Μεξικό","MY":"Μαλαισία","MZ":"Μοζαμβίκη","NA":"Ναμίμπια","NC":"Νέα Καληδονία","NE":"Νίγηρας","NF":"Νήσος Νόρφολκ","NG":"Νιγηρία","NI":"Νικαράγουα","NL":"Ολλανδία","NO":"Νορβηγία","NP":"Νεπάλ","NR":"Ναουρού","NU":"Νιούε","NZ":"Νέα Ζηλανδία","OM":"Ομάν","PA":"Παναμάς","PE":"Περού","PF":"Γαλλική Πολυνησία","PG":"Παπούα Νέα Γουινέα","PH":"Φιλιππίνες","PK":"Πακιστάν","PL":"Πολωνία","PM":"Σεν Πιερ και Μικελόν","PN":"Νήσοι Πίτκερν","PR":"Πουέρτο Ρίκο","PS":"Παλαιστινιακά Εδάφη","PT":"Πορτογαλία","PW":"Παλάου","PY":"Παραγουάη","QA":"Κατάρ","QO":"Περιφερειακή Ωκεανία","RE":"Ρεϊνιόν","RO":"Ρουμανία","RS":"Σερβία","RU":"Ρωσία","RW":"Ρουάντα","SA":"Σαουδική Αραβία","SB":"Νήσοι Σολομώντος","SC":"Σεϋχέλλες","SD":"Σουδάν","SE":"Σουηδία","SG":"Σιγκαπούρη","SH":"Αγία Ελένη","SI":"Σλοβενία","SJ":"Σβάλμπαρντ και Γιαν Μαγιέν","SK":"Σλοβακία","SL":"Σιέρα Λεόνε","SM":"Άγιος Μαρίνος","SN":"Σενεγάλη","SO":"Σομαλία","SR":"Σουρινάμ","SS":"Νότιο Σουδάν","ST":"Σάο Τομέ και Πρίνσιπε","SV":"Ελ Σαλβαδόρ","SX":"Άγιος Μαρτίνος (Ολλανδικό τμήμα)","SY":"Συρία","SZ":"Σουαζιλάνδη","TA":"Τριστάν ντα Κούνια","TC":"Νήσοι Τερκς και Κάικος","TD":"Τσαντ","TF":"Γαλλικά Νότια Εδάφη","TG":"Τόγκο","TH":"Ταϊλάνδη","TJ":"Τατζικιστάν","TK":"Τοκελάου","TL":"Τιμόρ-Λέστε","TM":"Τουρκμενιστάν","TN":"Τυνησία","TO":"Τόνγκα","TR":"Τουρκία","TT":"Τρινιντάντ και Τομπάγκο","TV":"Τουβαλού","TW":"Ταϊβάν","TZ":"Τανζανία","UA":"Ουκρανία","UG":"Ουγκάντα","UM":"Απομακρυσμένες Νησίδες ΗΠΑ","UN":"Ηνωμένα Έθνη","US":"Ηνωμένες Πολιτείες","UY":"Ουρουγουάη","UZ":"Ουζμπεκιστάν","VA":"Βατικανό","VC":"Άγιος Βικέντιος και Γρεναδίνες","VE":"Βενεζουέλα","VG":"Βρετανικές Παρθένες Νήσοι","VI":"Αμερικανικές Παρθένες Νήσοι","VN":"Βιετνάμ","VU":"Βανουάτου","WF":"Γουάλις και Φουτούνα","WS":"Σαμόα","XA":"Ψευδο-προφορές","XB":"Ψευδο-αμφικατευθυντικό","XK":"Κοσσυφοπέδιο","YE":"Υεμένη","YT":"Μαγιότ","ZA":"Νότια Αφρική","ZM":"Ζάμπια","ZW":"Ζιμπάμπουε","ZZ":"Άγνωστη περιοχή"},"short":{"GB":"ΗΒ","HK":"Χονγκ Κονγκ","MO":"Μακάο","PS":"Παλαιστίνη","UN":"ΟΗΕ","US":"ΗΠΑ"},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Aghb":"Aghb","Ahom":"Ahom","Arab":"Αραβικό","Armi":"Αυτοκρατορικό Αραμαϊκό","Armn":"Αρμενικό","Avst":"Αβεστάν","Bali":"Μπαλινίζ","Bamu":"Bamu","Bass":"Bass","Batk":"Μπατάκ","Beng":"Μπενγκάλι","Bhks":"Bhks","Blis":"Σύμβολα Bliss","Bopo":"Μποπομόφο","Brah":"Μπραχμί","Brai":"Μπράιγ","Bugi":"Μπούγκις","Buhd":"Μπουχίντ","Cakm":"Τσάκμα","Cans":"Ενοποιημένοι Καναδεζικοί Συλλαβισμοί Ιθαγενών","Cari":"Καριάν","Cham":"Τσαμ","Cher":"Τσερόκι","Cirt":"Σερθ","Copt":"Κοπτικό","Cprt":"Κυπριακό","Cyrl":"Κυριλλικό","Cyrs":"Παλαιό Εκκλησιαστικό Σλαβικό Κυριλλικό","Deva":"Ντεβαναγκάρι","Dogr":"Dogr","Dsrt":"Ντεσερέ","Dupl":"Dupl","Egyd":"Λαϊκό Αιγυπτιακό","Egyh":"Ιερατικό Αιγυπτιακό","Egyp":"Αιγυπτιακά Ιερογλυφικά","Elba":"Elba","Elym":"Elym","Ethi":"Αιθιοπικό","Geok":"Γεωργιανό Κχουτσούρι","Geor":"Γεωργιανό","Glag":"Γκλαγκολιτικό","Gong":"Gong","Gonm":"Gonm","Goth":"Γοτθικό","Gran":"Gran","Grek":"Ελληνικό","Gujr":"Γκουγιαράτι","Guru":"Γκουρμουκχί","Hanb":"Χανμπ","Hang":"Χανγκούλ","Hani":"Χαν","Hano":"Χανούνου","Hans":"Απλοποιημένο","Hant":"Παραδοσιακό","Hatr":"Hatr","Hebr":"Εβραϊκό","Hira":"Χιραγκάνα","Hluw":"Hluw","Hmng":"Παχάχ Χμονγκ","Hmnp":"Hmnp","Hrkt":"Κατακάνα ή Χιραγκάνα","Hung":"Παλαιό Ουγγρικό","Inds":"Ίνδους","Ital":"Παλαιό Ιταλικό","Jamo":"Τζάμο","Java":"Ιαβανεζικό","Jpan":"Ιαπωνικό","Kali":"Καγιάχ Λι","Kana":"Κατακάνα","Khar":"Καρόσθι","Khmr":"Χμερ","Khoj":"Khoj","Knda":"Κανάντα","Kore":"Κορεατικό","Kthi":"Καϊθί","Lana":"Λάννα","Laoo":"Λαοτινό","Latf":"Φράκτουρ Λατινικό","Latg":"Γαελικό Λατινικό","Latn":"Λατινικό","Lepc":"Λέπτσα","Limb":"Λιμπού","Lina":"Γραμμικό Α","Linb":"Γραμμικό Β","Lisu":"Lisu","Lyci":"Λυκιανικό","Lydi":"Λυδιανικό","Mahj":"Mahj","Maka":"Maka","Mand":"Μανδαϊκό","Mani":"Μανιχαϊκό","Marc":"Marc","Maya":"Ιερογλυφικά Μάγια","Medf":"Medf","Mend":"Mend","Merc":"Merc","Mero":"Μεροϊτικό","Mlym":"Μαλαγιάλαμ","Modi":"Modi","Mong":"Μογγολικό","Moon":"Μουν","Mroo":"Mroo","Mtei":"Μεϊτέι Μάγεκ","Mult":"Mult","Mymr":"Μιανμάρ","Nand":"Nand","Narb":"Narb","Nbat":"Nbat","Newa":"Newa","Nkoo":"Ν’Κο","Nshu":"Nshu","Ogam":"Όγκχαμ","Olck":"Ολ Τσίκι","Orkh":"Όρκχον","Orya":"Όντια","Osge":"Osge","Osma":"Οσμάνγια","Palm":"Palm","Pauc":"Pauc","Perm":"Παλαιό Περμικό","Phag":"Παγκς-πα","Phli":"Επιγραφικό Παχλάβι","Phlp":"Ψάλτερ Παχλάβι","Phlv":"Μπουκ Παχλαβί","Phnx":"Φοινικικό","Plrd":"Φωνητικό Πόλαρντ","Prti":"Επιγραφικό Παρθιάν","Qaag":"Qaag","Rjng":"Ρετζάνγκ","Rohg":"Rohg","Roro":"Ρονγκορόνγκο","Runr":"Ρουνίκ","Samr":"Σαμαριτικό","Sara":"Σαράθι","Sarb":"Sarb","Saur":"Σαουράστρα","Sgnw":"Νοηματική γραφή","Shaw":"Σαβιανό","Shrd":"Shrd","Sidd":"Sidd","Sind":"Sind","Sinh":"Σινχάλα","Sogd":"Sogd","Sogo":"Sogo","Sora":"Sora","Soyo":"Soyo","Sund":"Σουνδανικό","Sylo":"Συλότι Νάγκρι","Syrc":"Συριακό","Syre":"Εστραντζέλο Συριακό","Syrj":"Δυτικό Συριακό","Syrn":"Ανατολικό Συριακό","Tagb":"Ταγκμάνγουα","Takr":"Takr","Tale":"Τάι Λε","Talu":"Νέο Τάι Λούε","Taml":"Ταμίλ","Tang":"Tang","Tavt":"Τάι Βιέτ","Telu":"Τελούγκου","Teng":"Τεγνγουάρ","Tfng":"Τιφινάγκ","Tglg":"Ταγκαλόγκ","Thaa":"Θαανά","Thai":"Ταϊλανδικό","Tibt":"Θιβετιανό","Tirh":"Tirh","Ugar":"Ουγκαριτικό","Vaii":"Βάι","Visp":"Ορατή ομιλία","Wara":"Wara","Wcho":"Wcho","Xpeo":"Παλαιό Περσικό","Xsux":"Σούμερο-Ακάντιαν Κουνεϊφόρμ","Yiii":"Γι","Zanb":"Zanb","Zinh":"Κληρονομημένο","Zmth":"Μαθηματική σημειογραφία","Zsye":"Emoji","Zsym":"Σύμβολα","Zxxx":"Άγραφο","Zyyy":"Κοινό","Zzzz":"Άγνωστη γραφή"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"Πεσέτα Ανδόρας","AED":"Ντιράμ Ηνωμένων Αραβικών Εμιράτων","AFA":"Αφγανί Αφγανιστάν (1927–2002)","AFN":"Αφγάνι Αφγανιστάν","ALK":"ALK","ALL":"Λεκ Αλβανίας","AMD":"Ντραμ Αρμενίας","ANG":"Γκίλντα Ολλανδικών Αντιλλών","AOA":"Κουάνζα Ανγκόλας","AOK":"Κουάνζα Ανγκόλας (1977–1990)","AON":"Νέα Κουάνζα Ανγκόλας (1990–2000)","AOR":"AOR","ARA":"Ωστράλ Αργετινής","ARL":"ARL","ARM":"ARM","ARP":"Πέσο Αργεντινής (1983–1985)","ARS":"Πέσο Αργεντινής","ATS":"Σελίνι Αυστρίας","AUD":"Δολάριο Αυστραλίας","AWG":"Φλορίνι Αρούμπας","AZM":"Μανάτ Αζερμπαϊτζάν (1993–2006)","AZN":"Μανάτ Αζερμπαϊτζάν","BAD":"Δηνάριο Βοσνίας-Ερζεγοβίνης","BAM":"Μετατρέψιμο Μάρκο Βοσνίας-Ερζεγοβίνης","BAN":"BAN","BBD":"Δολάριο Μπαρμπέιντος","BDT":"Τάκα Μπαγκλαντές","BEC":"Φράγκο Βελγίου (μετατρέψιμο)","BEF":"Φράγκο Βελγίου","BEL":"Φράγκο Βελγίου (οικονομικό)","BGL":"Μεταλλικό Λεβ Βουλγαρίας","BGM":"BGM","BGN":"Λεβ Βουλγαρίας","BGO":"BGO","BHD":"Δηνάριο Μπαχρέιν","BIF":"Φράγκο Μπουρούντι","BMD":"Δολάριο Βερμούδων","BND":"Δολάριο Μπρουνέι","BOB":"Μπολιβιάνο Βολιβίας","BOL":"BOL","BOP":"Πέσο Βολιβίας","BOV":"Μβδολ Βολιβίας","BRB":"Νέο Κρουζιέρο Βραζιλίας (1967–1986)","BRC":"Κρουζάντο Βραζιλίας","BRE":"Κρουζιέρο Βραζιλίας (1990–1993)","BRL":"Ρεάλ Βραζιλίας","BRN":"Νέο Κρουζάντο Βραζιλίας","BRR":"Κρουζιέρο Βραζιλίας","BRZ":"BRZ","BSD":"Δολάριο Μπαχαμών","BTN":"Νγκούλτρουμ Μπουτάν","BUK":"Κιατ Βιρμανίας","BWP":"Πούλα Μποτσουάνας","BYB":"Νέο Ρούβλι Λευκορωσίας (1994–1999)","BYN":"Ρούβλι Λευκορωσίας","BYR":"Ρούβλι Λευκορωσίας (2000–2016)","BZD":"Δολάριο Μπελίζ","CAD":"Δολάριο Καναδά","CDF":"Φράγκο Κονγκό","CHE":"Ευρώ WIR","CHF":"Φράγκο Ελβετίας","CHW":"Φράγκο WIR","CLE":"CLE","CLF":"Ουνιδάδες ντε φομέντο Χιλής","CLP":"Πέσο Χιλής","CNH":"Γουάν Κίνας (υπεράκτιο)","CNX":"CNX","CNY":"Γουάν Κίνας","COP":"Πέσο Κολομβίας","COU":"COU","CRC":"Κολόν Κόστα Ρίκα","CSD":"Παλαιό Δηνάριο Σερβίας","CSK":"Σκληρή Κορόνα Τσεχοσλοβακίας","CUC":"Μετατρέψιμο πέσο Κούβας","CUP":"Πέσο Κούβας","CVE":"Εσκούδο Πράσινου Ακρωτηρίου","CYP":"Λίρα Κύπρου","CZK":"Κορόνα Τσεχίας","DDM":"Οστμάρκ Ανατολικής Γερμανίας","DEM":"Μάρκο Γερμανίας","DJF":"Φράγκο Τζιμπουτί","DKK":"Κορόνα Δανίας","DOP":"Πέσο Δομινικανής Δημοκρατίας","DZD":"Δηνάριο Αλγερίας","ECS":"Σούκρε Εκουαδόρ","ECV":"ECV","EEK":"Κορόνα Εσθονίας","EGP":"Λίρα Αιγύπτου","ERN":"Νάκφα Ερυθραίας","ESA":"πεσέτα Ισπανίας (λογαριασμός Α)","ESB":"πεσέτα Ισπανίας (μετατρέψιμος λογαριασμός)","ESP":"Πεσέτα Ισπανίας","ETB":"Μπιρ Αιθιοπίας","EUR":"Ευρώ","FIM":"Μάρκο Φινλανδίας","FJD":"Δολάριο Φίτζι","FKP":"Λίρα Νήσων Φόκλαντ","FRF":"Φράγκο Γαλλίας","GBP":"Λίρα Στερλίνα Βρετανίας","GEK":"Κούπον Λάρι Γεωργίας","GEL":"Λάρι Γεωργίας","GHC":"Σέντι Γκάνας (1979–2007)","GHS":"Σέντι Γκάνας","GIP":"Λίρα Γιβραλτάρ","GMD":"Νταλάσι Γκάμπιας","GNF":"Φράγκο Γουινέας","GNS":"Συλί Γουινέας","GQE":"Εκγουέλε Ισημερινής Γουινέας","GRD":"Δραχμή Ελλάδας","GTQ":"Κουετσάλ Γουατεμάλας","GWE":"Γκινέα Εσκούδο Πορτογαλίας","GWP":"Πέσο Γουινέας-Μπισάου","GYD":"Δολάριο Γουιάνας","HKD":"Δολάριο Χονγκ Κονγκ","HNL":"Λεμπίρα Ονδούρας","HRD":"Δηνάριο Κροατίας","HRK":"Κούνα Κροατίας","HTG":"Γκουρντ Αϊτής","HUF":"Φιορίνι Ουγγαρίας","IDR":"Ρουπία Ινδονησίας","IEP":"Λίρα Ιρλανδίας","ILP":"Λίρα Ισραήλ","ILR":"παλιό σεκέλ Ισραήλ","ILS":"Νέο Σέκελ Ισραήλ","INR":"Ρουπία Ινδίας","IQD":"Δηνάριο Ιράκ","IRR":"Ριάλ Ιράν","ISJ":"Παλιά κορόνα Ισλανδίας","ISK":"Κορόνα Ισλανδίας","ITL":"Λιρέτα Ιταλίας","JMD":"Δολάριο Τζαμάικας","JOD":"Δηνάριο Ιορδανίας","JPY":"Γιεν Ιαπωνίας","KES":"Σελίνι Κένυας","KGS":"Σομ Κιργιζίας","KHR":"Ρίελ Καμπότζης","KMF":"Φράγκο Κομορών","KPW":"Γουόν Βόρειας Κορέας","KRH":"KRH","KRO":"KRO","KRW":"Γουόν Νότιας Κορέας","KWD":"Δηνάριο Κουβέιτ","KYD":"Δολάριο Νήσων Κέιμαν","KZT":"Τένγκε Καζακστάν","LAK":"Κιπ Λάος","LBP":"Λίρα Λιβάνου","LKR":"Ρουπία Σρι Λάνκα","LRD":"Δολάριο Λιβερίας","LSL":"Λότι Λεσότο","LTL":"Λίτα Λιθουανίας","LTT":"Ταλόνας Λιθουανίας","LUC":"Μετατρέψιμο Φράγκο Λουξεμβούργου","LUF":"Φράγκο Λουξεμβούργου","LUL":"Οικονομικό Φράγκο Λουξεμβούργου","LVL":"Λατς Λετονίας","LVR":"Ρούβλι Λετονίας","LYD":"Δηνάριο Λιβύης","MAD":"Ντιράμ Μαρόκου","MAF":"Φράγκο Μαρόκου","MCF":"MCF","MDC":"MDC","MDL":"Λέου Μολδαβίας","MGA":"Αριάρι Μαδαγασκάρης","MGF":"Φράγκο Μαδαγασκάρης","MKD":"Δηνάριο ΠΓΔΜ","MKN":"MKN","MLF":"Φράγκο Μαλί","MMK":"Κιάτ Μιανμάρ","MNT":"Τουγκρίκ Μογγολίας","MOP":"Πατάκα Μακάο","MRO":"Ουγκίγια Μαυριτανίας (1973–2017)","MRU":"Ουγκίγια Μαυριτανίας","MTL":"Λιρέτα Μάλτας","MTP":"Λίρα Μάλτας","MUR":"Ρουπία Μαυρικίου","MVP":"MVP","MVR":"Ρουφίγια Μαλδίβων","MWK":"Κουάτσα Μαλάουι","MXN":"Πέσο Μεξικού","MXP":"Ασημένιο Πέσο Μεξικού (1861–1992)","MXV":"MXV","MYR":"Ρινγκίτ Μαλαισίας","MZE":"Εσκούδο Μοζαμβίκης","MZM":"Παλαιό Μετικάλ Μοζαμβίκης","MZN":"Μετικάλ Μοζαμβίκης","NAD":"Δολάριο Ναμίμπιας","NGN":"Νάιρα Νιγηρίας","NIC":"Κόρδοβα Νικαράγουας","NIO":"Χρυσή Κόρδοβα Νικαράγουας","NLG":"Γκίλντα Ολλανδίας","NOK":"Κορόνα Νορβηγίας","NPR":"Ρουπία Νεπάλ","NZD":"Δολάριο Νέας Ζηλανδίας","OMR":"Ριάλ Ομάν","PAB":"Μπαλμπόα Παναμά","PEI":"Ίντι Περού","PEN":"Σολ Περού","PES":"Σολ Περού (1863–1965)","PGK":"Κίνα Παπούας Νέας Γουινέας","PHP":"Πέσο Φιλιππίνων","PKR":"Ρουπία Πακιστάν","PLN":"Ζλότι Πολωνίας","PLZ":"Ζλότυ Πολωνίας (1950–1995)","PTE":"Εσκούδο Πορτογαλίας","PYG":"Γκουαρανί Παραγουάης","QAR":"Ριάλ Κατάρ","RHD":"Δολάριο Ροδεσίας","ROL":"Λέι Ρουμανίας","RON":"Λέου Ρουμανίας","RSD":"Δηνάριο Σερβίας","RUB":"Ρούβλι Ρωσίας","RUR":"Ρούβλι Ρωσίας (1991–1998)","RWF":"Φράγκο Ρουάντας","SAR":"Ριάλ Σαουδικής Αραβίας","SBD":"Δολάριο Νήσων Σολομώντος","SCR":"Ρουπία Σεϋχελλών","SDD":"Δηνάριο Σουδάν","SDG":"Λίρα Σουδάν","SDP":"Παλαιά Λίρα Σουδάν","SEK":"Κορόνα Σουηδίας","SGD":"Δολάριο Σιγκαπούρης","SHP":"Λίρα Αγίας Ελένης","SIT":"Τόλαρ Σλοβενίας","SKK":"Κορόνα Σλοβενίας","SLL":"Λεόνε Σιέρα Λεόνε","SOS":"Σελίνι Σομαλίας","SRD":"Δολάριο Σουρινάμ","SRG":"Γκίλντα Σουρινάμ","SSP":"Λίρα Νότιου Σουδάν","STD":"Ντόμπρα Σάο Τομέ και Πρίνσιπε (1977–2017)","STN":"Ντόμπρα Σάο Τομέ και Πρίνσιπε","SUR":"Σοβιετικό Ρούβλι","SVC":"Κολόν Ελ Σαλβαδόρ","SYP":"Λίρα Συρίας","SZL":"Λιλανγκένι Σουαζιλάνδης","THB":"Μπατ Ταϊλάνδης","TJR":"Ρούβλι Τατζικιστάν","TJS":"Σομόνι Τατζικιστάν","TMM":"Μανάτ Τουρκμενιστάν","TMT":"Μάνατ Τουρκμενιστάν","TND":"Δηνάριο Τυνησίας","TOP":"Παάγκα Τόνγκα","TPE":"Εσκούδο Τιμόρ","TRL":"Παλιά Λίρα Τουρκίας","TRY":"Λίρα Τουρκίας","TTD":"Δολάριο Τρινιντάντ και Τομπάγκο","TWD":"Νέο δολάριο Ταϊβάν","TZS":"Σελίνι Τανζανίας","UAH":"Γρίβνα Ουκρανίας","UAK":"Καρμποβανέτς Ουκρανίας","UGS":"Σελίνι Ουγκάντας (1966–1987)","UGX":"Σελίνι Ουγκάντας","USD":"Δολάριο ΗΠΑ","USN":"Δολάριο ΗΠΑ (επόμενη ημέρα)","USS":"Δολάριο ΗΠΑ (ίδια ημέρα)","UYI":"UYI","UYP":"Πέσο Ουρουγουάης (1975–1993)","UYU":"Πέσο Ουρουγουάης","UYW":"UYW","UZS":"Σομ Ουζμπεκιστάν","VEB":"Μπολιβάρ Βενεζουέλας (1871–2008)","VEF":"Μπολιβάρ Βενεζουέλας (2008–2018)","VES":"Μπολιβάρ Βενεζουέλας","VND":"Ντονγκ Βιετνάμ","VNN":"VNN","VUV":"Βατού Βανουάτου","WST":"Τάλα Σαμόα","XAF":"Φράγκο CFA Κεντρικής Αφρικής","XAG":"XAG","XAU":"XAU","XBA":"Ευρωπαϊκή Σύνθετη Μονάδα","XBB":"Ευρωπαϊκή Νομισματική Μονάδα","XBC":"Ευρωπαϊκή μονάδα λογαριασμού (XBC)","XBD":"Ευρωπαϊκή μονάδα λογαριασμού (XBD)","XCD":"Δολάριο Ανατολικής Καραϊβικής","XDR":"Ειδικά Δικαιώματα Ανάληψης","XEU":"Ευρωπαϊκή Συναλλαγματική Μονάδα","XFO":"Χρυσό Φράγκο Γαλλίας","XFU":"UIC-Φράγκο Γαλλίας","XOF":"Φράγκο CFA Δυτικής Αφρικής","XPD":"XPD","XPF":"Φράγκο CFP","XPT":"XPT","XRE":"XRE","XSU":"XSU","XTS":"XTS","XUA":"XUA","XXX":"Άγνωστο νόμισμα","YDD":"Δηνάριο Υεμένης","YER":"Ριάλ Υεμένης","YUD":"Μεταλλικό Δηνάριο Γιουγκοσλαβίας","YUM":"Νέο Δηνάριο Γιουγκοσλαβίας","YUN":"Μετατρέψιμο Δηνάριο Γιουγκοσλαβίας","YUR":"YUR","ZAL":"Ραντ Νότιας Αφρικής (οικονομικό)","ZAR":"Ραντ Νότιας Αφρικής","ZMK":"Κουάνζα Ζαΐρ (1968–2012)","ZMW":"Κουάτσα Ζάμπιας","ZRN":"Νέο Ζαΐρ Ζαΐρ","ZRZ":"Ζαΐρ Ζαΐρ","ZWD":"Δολάριο Ζιμπάμπουε","ZWL":"Δολάριο Ζιμπάμπουε (2009)","ZWR":"ZWR"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}}},"availableLocales":["el"]})
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

import CreateMethodProperty from "@mrhenry/core-web/helpers/_ESAbstract.CreateMethodProperty";
import IsArray from "@mrhenry/core-web/helpers/_ESAbstract.IsArray";
import ToObject from "@mrhenry/core-web/helpers/_ESAbstract.ToObject";
import ToLength from "@mrhenry/core-web/helpers/_ESAbstract.ToLength";
import ToInteger from "@mrhenry/core-web/helpers/_ESAbstract.ToInteger";
import Get from "@mrhenry/core-web/helpers/_ESAbstract.Get";
import IsCallable from "@mrhenry/core-web/helpers/_ESAbstract.IsCallable";
import ArraySpeciesCreate from "@mrhenry/core-web/helpers/_ESAbstract.ArraySpeciesCreate";
import ArrayCreate from "@mrhenry/core-web/helpers/_ESAbstract.ArrayCreate";
import Type from "@mrhenry/core-web/helpers/_ESAbstract.Type";
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
import GetIterator from "@mrhenry/core-web/helpers/_ESAbstract.GetIterator";
import SameValueZero from "@mrhenry/core-web/helpers/_ESAbstract.SameValueZero";
import SameValueNonNumber from "@mrhenry/core-web/helpers/_ESAbstract.SameValueNonNumber";
import IteratorStep from "@mrhenry/core-web/helpers/_ESAbstract.IteratorStep";
import IteratorNext from "@mrhenry/core-web/helpers/_ESAbstract.IteratorNext";
import IteratorComplete from "@mrhenry/core-web/helpers/_ESAbstract.IteratorComplete";
import IteratorValue from "@mrhenry/core-web/helpers/_ESAbstract.IteratorValue";
import IteratorClose from "@mrhenry/core-web/helpers/_ESAbstract.IteratorClose";
import SameValue from "@mrhenry/core-web/helpers/_ESAbstract.SameValue";
(function(undefined) {
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("ja").length
)) {
// Intl.DisplayNames.~locale.ja
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"ja":{"types":{"language":{"long":{"aa":"アファル語","ab":"アブハズ語","ace":"アチェ語","ach":"アチョリ語","ada":"アダングメ語","ady":"アディゲ語","ae":"アヴェスタ語","aeb":"チュニジア・アラビア語","af":"アフリカーンス語","afh":"アフリヒリ語","agq":"アゲム語","ain":"アイヌ語","ak":"アカン語","akk":"アッカド語","akz":"アラバマ語","ale":"アレウト語","aln":"ゲグ・アルバニア語","alt":"南アルタイ語","am":"アムハラ語","an":"アラゴン語","ang":"古英語","anp":"アンギカ語","ar":"アラビア語","ar-001":"現代標準アラビア語","arc":"アラム語","arn":"マプチェ語","aro":"アラオナ語","arp":"アラパホー語","arq":"アルジェリア・アラビア語","ars":"ナジュド地方・アラビア語","arw":"アラワク語","ary":"モロッコ・アラビア語","arz":"エジプト・アラビア語","as":"アッサム語","asa":"アス語","ase":"アメリカ手話","ast":"アストゥリアス語","av":"アヴァル語","avk":"コタヴァ","awa":"アワディー語","ay":"アイマラ語","az":"アゼルバイジャン語","ba":"バシキール語","bal":"バルーチー語","ban":"バリ語","bar":"バイエルン・オーストリア語","bas":"バサ語","bax":"バムン語","bbc":"トバ・バタク語","bbj":"ゴーマラ語","be":"ベラルーシ語","bej":"ベジャ語","bem":"ベンバ語","bew":"ベタウィ語","bez":"ベナ語","bfd":"バフット語","bfq":"バダガ語","bg":"ブルガリア語","bgn":"西バローチー語","bho":"ボージュプリー語","bi":"ビスラマ語","bik":"ビコル語","bin":"ビニ語","bjn":"バンジャル語","bkm":"コム語","bla":"シクシカ語","bm":"バンバラ語","bn":"ベンガル語","bo":"チベット語","bpy":"ビシュヌプリヤ・マニプリ語","bqi":"バフティヤーリー語","br":"ブルトン語","bra":"ブラジ語","brh":"ブラフイ語","brx":"ボド語","bs":"ボスニア語","bss":"アコース語","bua":"ブリヤート語","bug":"ブギ語","bum":"ブル語","byn":"ビリン語","byv":"メドゥンバ語","ca":"カタロニア語","cad":"カドー語","car":"カリブ語","cay":"カユーガ語","cch":"チャワイ語","ccp":"チャクマ語","ce":"チェチェン語","ceb":"セブアノ語","cgg":"チガ語","ch":"チャモロ語","chb":"チブチャ語","chg":"チャガタイ語","chk":"チューク語","chm":"マリ語","chn":"チヌーク混成語","cho":"チョクトー語","chp":"チペワイアン語","chr":"チェロキー語","chy":"シャイアン語","ckb":"中央クルド語","co":"コルシカ語","cop":"コプト語","cps":"カピス語","cr":"クリー語","crh":"クリミア・タタール語","crs":"セーシェル・クレオール語","cs":"チェコ語","csb":"カシューブ語","cu":"教会スラブ語","cv":"チュヴァシ語","cy":"ウェールズ語","da":"デンマーク語","dak":"ダコタ語","dar":"ダルグワ語","dav":"タイタ語","de":"ドイツ語","de-AT":"ドイツ語 (オーストリア)","de-CH":"標準ドイツ語 (スイス)","del":"デラウェア語","den":"スレイビー語","dgr":"ドグリブ語","din":"ディンカ語","dje":"ザルマ語","doi":"ドーグリー語","dsb":"低地ソルブ語","dtp":"中央ドゥスン語","dua":"ドゥアラ語","dum":"中世オランダ語","dv":"ディベヒ語","dyo":"ジョラ＝フォニィ語","dyu":"ジュラ語","dz":"ゾンカ語","dzg":"ダザガ語","ebu":"エンブ語","ee":"エウェ語","efi":"エフィク語","egl":"エミリア語","egy":"古代エジプト語","eka":"エカジュク語","el":"ギリシャ語","elx":"エラム語","en":"英語","en-AU":"オーストラリア英語","en-CA":"カナダ英語","en-GB":"イギリス英語","en-US":"アメリカ英語","enm":"中英語","eo":"エスペラント語","es":"スペイン語","es-419":"スペイン語 (ラテンアメリカ)","es-ES":"スペイン語 (イベリア半島)","es-MX":"スペイン語 (メキシコ)","esu":"中央アラスカ・ユピック語","et":"エストニア語","eu":"バスク語","ewo":"エウォンド語","ext":"エストレマドゥーラ語","fa":"ペルシア語","fa-AF":"ダリー語","fan":"ファング語","fat":"ファンティー語","ff":"フラ語","fi":"フィンランド語","fil":"フィリピノ語","fit":"トルネダール・フィンランド語","fj":"フィジー語","fo":"フェロー語","fon":"フォン語","fr":"フランス語","fr-CA":"フランス語 (カナダ)","fr-CH":"フランス語 (スイス)","frc":"ケイジャン・フランス語","frm":"中期フランス語","fro":"古フランス語","frp":"アルピタン語","frr":"北フリジア語","frs":"東フリジア語","fur":"フリウリ語","fy":"西フリジア語","ga":"アイルランド語","gaa":"ガ語","gag":"ガガウズ語","gan":"贛語","gay":"ガヨ語","gba":"バヤ語","gbz":"ダリー語(ゾロアスター教)","gd":"スコットランド・ゲール語","gez":"ゲエズ語","gil":"キリバス語","gl":"ガリシア語","glk":"ギラキ語","gmh":"中高ドイツ語","gn":"グアラニー語","goh":"古高ドイツ語","gom":"ゴア・コンカニ語","gon":"ゴーンディー語","gor":"ゴロンタロ語","got":"ゴート語","grb":"グレボ語","grc":"古代ギリシャ語","gsw":"スイスドイツ語","gu":"グジャラート語","guc":"ワユ語","gur":"フラフラ語","guz":"グシイ語","gv":"マン島語","gwi":"グウィッチン語","ha":"ハウサ語","hai":"ハイダ語","hak":"客家語","haw":"ハワイ語","he":"ヘブライ語","hi":"ヒンディー語","hif":"フィジー・ヒンディー語","hil":"ヒリガイノン語","hit":"ヒッタイト語","hmn":"フモン語","ho":"ヒリモツ語","hr":"クロアチア語","hsb":"高地ソルブ語","hsn":"湘語","ht":"ハイチ・クレオール語","hu":"ハンガリー語","hup":"フパ語","hy":"アルメニア語","hz":"ヘレロ語","ia":"インターリングア","iba":"イバン語","ibb":"イビビオ語","id":"インドネシア語","ie":"インターリング","ig":"イボ語","ii":"四川イ語","ik":"イヌピアック語","ilo":"イロカノ語","inh":"イングーシ語","io":"イド語","is":"アイスランド語","it":"イタリア語","iu":"イヌクティトット語","izh":"イングリア語","ja":"日本語","jam":"ジャマイカ・クレオール語","jbo":"ロジバン語","jgo":"ンゴンバ語","jmc":"マチャメ語","jpr":"ユダヤ・ペルシア語","jrb":"ユダヤ・アラビア語","jut":"ユトランド語","jv":"ジャワ語","ka":"ジョージア語","kaa":"カラカルパク語","kab":"カビル語","kac":"カチン語","kaj":"カジェ語","kam":"カンバ語","kaw":"カウィ語","kbd":"カバルド語","kbl":"カネンブ語","kcg":"カタブ語","kde":"マコンデ語","kea":"カーボベルデ・クレオール語","ken":"ニャン語","kfo":"コロ語","kg":"コンゴ語","kgp":"カインガング語","kha":"カシ語","kho":"コータン語","khq":"コイラ・チーニ語","khw":"コワール語","ki":"キクユ語","kiu":"キルマンジュキ語","kj":"クワニャマ語","kk":"カザフ語","kkj":"カコ語","kl":"グリーンランド語","kln":"カレンジン語","km":"クメール語","kmb":"キンブンド語","kn":"カンナダ語","ko":"韓国語","koi":"コミ・ペルミャク語","kok":"コンカニ語","kos":"コスラエ語","kpe":"クペレ語","kr":"カヌリ語","krc":"カラチャイ・バルカル語","kri":"クリオ語","krj":"キナライア語","krl":"カレリア語","kru":"クルク語","ks":"カシミール語","ksb":"サンバー語","ksf":"バフィア語","ksh":"ケルン語","ku":"クルド語","kum":"クムク語","kut":"クテナイ語","kv":"コミ語","kw":"コーンウォール語","ky":"キルギス語","la":"ラテン語","lad":"ラディノ語","lag":"ランギ語","lah":"ラフンダー語","lam":"ランバ語","lb":"ルクセンブルク語","lez":"レズギ語","lfn":"リングア・フランカ・ノバ","lg":"ガンダ語","li":"リンブルフ語","lij":"リグリア語","liv":"リヴォニア語","lkt":"ラコタ語","lmo":"ロンバルド語","ln":"リンガラ語","lo":"ラオ語","lol":"モンゴ語","lou":"ルイジアナ・クレオール語","loz":"ロジ語","lrc":"北ロル語","lt":"リトアニア語","ltg":"ラトガリア語","lu":"ルバ・カタンガ語","lua":"ルバ・ルルア語","lui":"ルイセーニョ語","lun":"ルンダ語","luo":"ルオ語","lus":"ミゾ語","luy":"ルヒヤ語","lv":"ラトビア語","lzh":"漢文","lzz":"ラズ語","mad":"マドゥラ語","maf":"マファ語","mag":"マガヒー語","mai":"マイティリー語","mak":"マカッサル語","man":"マンディンゴ語","mas":"マサイ語","mde":"マバ語","mdf":"モクシャ語","mdr":"マンダル語","men":"メンデ語","mer":"メル語","mfe":"モーリシャス・クレオール語","mg":"マダガスカル語","mga":"中期アイルランド語","mgh":"マクア・ミート語","mgo":"メタ語","mh":"マーシャル語","mi":"マオリ語","mic":"ミクマク語","min":"ミナンカバウ語","mk":"マケドニア語","ml":"マラヤーラム語","mn":"モンゴル語","mnc":"満州語","mni":"マニプリ語","moh":"モーホーク語","mos":"モシ語","mr":"マラーティー語","mrj":"山地マリ語","ms":"マレー語","mt":"マルタ語","mua":"ムンダン語","mul":"複数言語","mus":"クリーク語","mwl":"ミランダ語","mwr":"マールワーリー語","mwv":"メンタワイ語","my":"ミャンマー語","mye":"ミエネ語","myv":"エルジャ語","mzn":"マーザンダラーン語","na":"ナウル語","nan":"閩南語","nap":"ナポリ語","naq":"ナマ語","nb":"ノルウェー語(ブークモール)","nd":"北ンデベレ語","nds":"低地ドイツ語","nds-NL":"低地ドイツ語 (オランダ)","ne":"ネパール語","new":"ネワール語","ng":"ンドンガ語","nia":"ニアス語","niu":"ニウーエイ語","njo":"アオ・ナガ語","nl":"オランダ語","nl-BE":"フレミッシュ語","nmg":"クワシオ語","nn":"ノルウェー語(ニーノシュク)","nnh":"ンジエムブーン語","no":"ノルウェー語","nog":"ノガイ語","non":"古ノルド語","nov":"ノヴィアル","nqo":"ンコ語","nr":"南ンデベレ語","nso":"北部ソト語","nus":"ヌエル語","nv":"ナバホ語","nwc":"古典ネワール語","ny":"ニャンジャ語","nym":"ニャムウェジ語","nyn":"ニャンコレ語","nyo":"ニョロ語","nzi":"ンゼマ語","oc":"オック語","oj":"オジブウェー語","om":"オロモ語","or":"オディア語","os":"オセット語","osa":"オセージ語","ota":"オスマントルコ語","pa":"パンジャブ語","pag":"パンガシナン語","pal":"パフラヴィー語","pam":"パンパンガ語","pap":"パピアメント語","pau":"パラオ語","pcd":"ピカルディ語","pcm":"ナイジェリア・ピジン語","pdc":"ペンシルベニア・ドイツ語","pdt":"メノナイト低地ドイツ語","peo":"古代ペルシア語","pfl":"プファルツ語","phn":"フェニキア語","pi":"パーリ語","pl":"ポーランド語","pms":"ピエモンテ語","pnt":"ポントス・ギリシャ語","pon":"ポンペイ語","prg":"プロシア語","pro":"古期プロバンス語","ps":"パシュトゥー語","pt":"ポルトガル語","pt-BR":"ポルトガル語 (ブラジル)","pt-PT":"ポルトガル語 (イベリア半島)","qu":"ケチュア語","quc":"キチェ語","qug":"チンボラソ高地ケチュア語","raj":"ラージャスターン語","rap":"ラパヌイ語","rar":"ラロトンガ語","rgn":"ロマーニャ語","rif":"リーフ語","rm":"ロマンシュ語","rn":"ルンディ語","ro":"ルーマニア語","ro-MD":"モルダビア語","rof":"ロンボ語","rom":"ロマーニー語","root":"ルート","rtm":"ロツマ語","ru":"ロシア語","rue":"ルシン語","rug":"ロヴィアナ語","rup":"アルーマニア語","rw":"キニアルワンダ語","rwk":"ルワ語","sa":"サンスクリット語","sad":"サンダウェ語","sah":"サハ語","sam":"サマリア・アラム語","saq":"サンブル語","sas":"ササク語","sat":"サンターリー語","saz":"サウラーシュトラ語","sba":"ンガムバイ語","sbp":"サング語","sc":"サルデーニャ語","scn":"シチリア語","sco":"スコットランド語","sd":"シンド語","sdc":"サッサリ・サルデーニャ語","sdh":"南部クルド語","se":"北サーミ語","see":"セネカ語","seh":"セナ語","sei":"セリ語","sel":"セリクプ語","ses":"コイラボロ・センニ語","sg":"サンゴ語","sga":"古アイルランド語","sgs":"サモギティア語","sh":"セルボ・クロアチア語","shi":"タシルハイト語","shn":"シャン語","shu":"チャド・アラビア語","si":"シンハラ語","sid":"シダモ語","sk":"スロバキア語","sl":"スロベニア語","sli":"低シレジア語","sly":"スラヤール語","sm":"サモア語","sma":"南サーミ語","smj":"ルレ・サーミ語","smn":"イナリ・サーミ語","sms":"スコルト・サーミ語","sn":"ショナ語","snk":"ソニンケ語","so":"ソマリ語","sog":"ソグド語","sq":"アルバニア語","sr":"セルビア語","srn":"スリナム語","srr":"セレル語","ss":"スワジ語","ssy":"サホ語","st":"南部ソト語","stq":"ザーターフリジア語","su":"スンダ語","suk":"スクマ語","sus":"スス語","sux":"シュメール語","sv":"スウェーデン語","sw":"スワヒリ語","sw-CD":"コンゴ・スワヒリ語","swb":"コモロ語","syc":"古典シリア語","syr":"シリア語","szl":"シレジア語","ta":"タミル語","tcy":"トゥル語","te":"テルグ語","tem":"テムネ語","teo":"テソ語","ter":"テレーノ語","tet":"テトゥン語","tg":"タジク語","th":"タイ語","ti":"ティグリニア語","tig":"ティグレ語","tiv":"ティブ語","tk":"トルクメン語","tkl":"トケラウ語","tkr":"ツァフル語","tl":"タガログ語","tlh":"クリンゴン語","tli":"トリンギット語","tly":"タリシュ語","tmh":"タマシェク語","tn":"ツワナ語","to":"トンガ語","tog":"トンガ語(ニアサ)","tpi":"トク・ピシン語","tr":"トルコ語","tru":"トゥロヨ語","trv":"タロコ語","ts":"ツォンガ語","tsd":"ツァコン語","tsi":"チムシュ語","tt":"タタール語","ttt":"ムスリム・タタール語","tum":"トゥンブカ語","tvl":"ツバル語","tw":"トウィ語","twq":"タサワク語","ty":"タヒチ語","tyv":"トゥヴァ語","tzm":"中央アトラス・タマジクト語","udm":"ウドムルト語","ug":"ウイグル語","uga":"ウガリト語","uk":"ウクライナ語","umb":"ムブンドゥ語","und":"言語不明","ur":"ウルドゥー語","uz":"ウズベク語","vai":"ヴァイ語","ve":"ベンダ語","vec":"ヴェネト語","vep":"ヴェプス語","vi":"ベトナム語","vls":"西フラマン語","vmf":"マインフランク語","vo":"ヴォラピュク語","vot":"ヴォート語","vro":"ヴォロ語","vun":"ヴンジョ語","wa":"ワロン語","wae":"ヴァリス語","wal":"ウォライタ語","war":"ワライ語","was":"ワショ語","wbp":"ワルピリ語","wo":"ウォロフ語","wuu":"呉語","xal":"カルムイク語","xh":"コサ語","xmf":"メグレル語","xog":"ソガ語","yao":"ヤオ語","yap":"ヤップ語","yav":"ヤンベン語","ybb":"イエンバ語","yi":"イディッシュ語","yo":"ヨルバ語","yrl":"ニェエンガトゥ語","yue":"広東語","za":"チワン語","zap":"サポテカ語","zbl":"ブリスシンボル","zea":"ゼーラント語","zen":"ゼナガ語","zgh":"標準モロッコ タマジクト語","zh":"中国語","zh-Hans":"簡体中国語","zh-Hant":"繁体中国語","zu":"ズールー語","zun":"ズニ語","zxx":"言語的内容なし","zza":"ザザ語"},"short":{"az":"アゼリー語","en-GB":"英語(英国)","en-US":"英語(米国)"},"narrow":{}},"region":{"long":{"142":"アジア","143":"中央アジア","145":"西アジア","150":"ヨーロッパ","151":"東ヨーロッパ","154":"北ヨーロッパ","155":"西ヨーロッパ","202":"サブサハラアフリカ","419":"ラテンアメリカ","001":"世界","002":"アフリカ","003":"北アメリカ大陸","005":"南アメリカ","009":"オセアニア","011":"西アフリカ","013":"中央アメリカ","014":"東アフリカ","015":"北アフリカ","017":"中部アフリカ","018":"南部アフリカ","019":"アメリカ大陸","021":"北アメリカ","029":"カリブ","030":"東アジア","034":"南アジア","035":"東南アジア","039":"南ヨーロッパ","053":"オーストララシア","054":"メラネシア","057":"ミクロネシア","061":"ポリネシア","AC":"アセンション島","AD":"アンドラ","AE":"アラブ首長国連邦","AF":"アフガニスタン","AG":"アンティグア・バーブーダ","AI":"アンギラ","AL":"アルバニア","AM":"アルメニア","AO":"アンゴラ","AQ":"南極","AR":"アルゼンチン","AS":"米領サモア","AT":"オーストリア","AU":"オーストラリア","AW":"アルバ","AX":"オーランド諸島","AZ":"アゼルバイジャン","BA":"ボスニア・ヘルツェゴビナ","BB":"バルバドス","BD":"バングラデシュ","BE":"ベルギー","BF":"ブルキナファソ","BG":"ブルガリア","BH":"バーレーン","BI":"ブルンジ","BJ":"ベナン","BL":"サン・バルテルミー","BM":"バミューダ","BN":"ブルネイ","BO":"ボリビア","BQ":"オランダ領カリブ","BR":"ブラジル","BS":"バハマ","BT":"ブータン","BV":"ブーベ島","BW":"ボツワナ","BY":"ベラルーシ","BZ":"ベリーズ","CA":"カナダ","CC":"ココス(キーリング)諸島","CD":"コンゴ民主共和国(キンシャサ)","CF":"中央アフリカ共和国","CG":"コンゴ共和国(ブラザビル)","CH":"スイス","CI":"コートジボワール","CK":"クック諸島","CL":"チリ","CM":"カメルーン","CN":"中国","CO":"コロンビア","CP":"クリッパートン島","CR":"コスタリカ","CU":"キューバ","CV":"カーボベルデ","CW":"キュラソー","CX":"クリスマス島","CY":"キプロス","CZ":"チェコ","DE":"ドイツ","DG":"ディエゴガルシア島","DJ":"ジブチ","DK":"デンマーク","DM":"ドミニカ国","DO":"ドミニカ共和国","DZ":"アルジェリア","EA":"セウタ・メリリャ","EC":"エクアドル","EE":"エストニア","EG":"エジプト","EH":"西サハラ","ER":"エリトリア","ES":"スペイン","ET":"エチオピア","EU":"欧州連合","EZ":"ユーロ圏","FI":"フィンランド","FJ":"フィジー","FK":"フォークランド諸島","FM":"ミクロネシア連邦","FO":"フェロー諸島","FR":"フランス","GA":"ガボン","GB":"イギリス","GD":"グレナダ","GE":"ジョージア","GF":"仏領ギアナ","GG":"ガーンジー","GH":"ガーナ","GI":"ジブラルタル","GL":"グリーンランド","GM":"ガンビア","GN":"ギニア","GP":"グアドループ","GQ":"赤道ギニア","GR":"ギリシャ","GS":"サウスジョージア・サウスサンドウィッチ諸島","GT":"グアテマラ","GU":"グアム","GW":"ギニアビサウ","GY":"ガイアナ","HK":"中華人民共和国香港特別行政区","HM":"ハード島・マクドナルド諸島","HN":"ホンジュラス","HR":"クロアチア","HT":"ハイチ","HU":"ハンガリー","IC":"カナリア諸島","ID":"インドネシア","IE":"アイルランド","IL":"イスラエル","IM":"マン島","IN":"インド","IO":"英領インド洋地域","IQ":"イラク","IR":"イラン","IS":"アイスランド","IT":"イタリア","JE":"ジャージー","JM":"ジャマイカ","JO":"ヨルダン","JP":"日本","KE":"ケニア","KG":"キルギス","KH":"カンボジア","KI":"キリバス","KM":"コモロ","KN":"セントクリストファー・ネーヴィス","KP":"北朝鮮","KR":"韓国","KW":"クウェート","KY":"ケイマン諸島","KZ":"カザフスタン","LA":"ラオス","LB":"レバノン","LC":"セントルシア","LI":"リヒテンシュタイン","LK":"スリランカ","LR":"リベリア","LS":"レソト","LT":"リトアニア","LU":"ルクセンブルク","LV":"ラトビア","LY":"リビア","MA":"モロッコ","MC":"モナコ","MD":"モルドバ","ME":"モンテネグロ","MF":"サン・マルタン","MG":"マダガスカル","MH":"マーシャル諸島","MK":"北マケドニア","ML":"マリ","MM":"ミャンマー (ビルマ)","MN":"モンゴル","MO":"中華人民共和国マカオ特別行政区","MP":"北マリアナ諸島","MQ":"マルティニーク","MR":"モーリタニア","MS":"モントセラト","MT":"マルタ","MU":"モーリシャス","MV":"モルディブ","MW":"マラウイ","MX":"メキシコ","MY":"マレーシア","MZ":"モザンビーク","NA":"ナミビア","NC":"ニューカレドニア","NE":"ニジェール","NF":"ノーフォーク島","NG":"ナイジェリア","NI":"ニカラグア","NL":"オランダ","NO":"ノルウェー","NP":"ネパール","NR":"ナウル","NU":"ニウエ","NZ":"ニュージーランド","OM":"オマーン","PA":"パナマ","PE":"ペルー","PF":"仏領ポリネシア","PG":"パプアニューギニア","PH":"フィリピン","PK":"パキスタン","PL":"ポーランド","PM":"サンピエール島・ミクロン島","PN":"ピトケアン諸島","PR":"プエルトリコ","PS":"パレスチナ自治区","PT":"ポルトガル","PW":"パラオ","PY":"パラグアイ","QA":"カタール","QO":"オセアニア周辺地域","RE":"レユニオン","RO":"ルーマニア","RS":"セルビア","RU":"ロシア","RW":"ルワンダ","SA":"サウジアラビア","SB":"ソロモン諸島","SC":"セーシェル","SD":"スーダン","SE":"スウェーデン","SG":"シンガポール","SH":"セントヘレナ","SI":"スロベニア","SJ":"スバールバル諸島・ヤンマイエン島","SK":"スロバキア","SL":"シエラレオネ","SM":"サンマリノ","SN":"セネガル","SO":"ソマリア","SR":"スリナム","SS":"南スーダン","ST":"サントメ・プリンシペ","SV":"エルサルバドル","SX":"シント・マールテン","SY":"シリア","SZ":"エスワティニ","TA":"トリスタン・ダ・クーニャ","TC":"タークス・カイコス諸島","TD":"チャド","TF":"仏領極南諸島","TG":"トーゴ","TH":"タイ","TJ":"タジキスタン","TK":"トケラウ","TL":"東ティモール","TM":"トルクメニスタン","TN":"チュニジア","TO":"トンガ","TR":"トルコ","TT":"トリニダード・トバゴ","TV":"ツバル","TW":"台湾","TZ":"タンザニア","UA":"ウクライナ","UG":"ウガンダ","UM":"合衆国領有小離島","UN":"国際連合","US":"アメリカ合衆国","UY":"ウルグアイ","UZ":"ウズベキスタン","VA":"バチカン市国","VC":"セントビンセント及びグレナディーン諸島","VE":"ベネズエラ","VG":"英領ヴァージン諸島","VI":"米領ヴァージン諸島","VN":"ベトナム","VU":"バヌアツ","WF":"ウォリス・フツナ","WS":"サモア","XA":"疑似アクセント","XB":"疑似 BIDI","XK":"コソボ","YE":"イエメン","YT":"マヨット","ZA":"南アフリカ","ZM":"ザンビア","ZW":"ジンバブエ","ZZ":"不明な地域"},"short":{"GB":"英国","HK":"香港","MO":"マカオ","PS":"パレスチナ","UN":"国連","US":"アメリカ"},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Afak":"アファカ文字","Aghb":"カフカス・アルバニア文字","Ahom":"Ahom","Arab":"アラビア文字","Aran":"ナスタアリーク体","Armi":"帝国アラム文字","Armn":"アルメニア文字","Avst":"アヴェスター文字","Bali":"バリ文字","Bamu":"バムン文字","Bass":"バサ文字","Batk":"バタク文字","Beng":"ベンガル文字","Bhks":"Bhks","Blis":"ブリスシンボル","Bopo":"注音字母","Brah":"ブラーフミー文字","Brai":"ブライユ点字","Bugi":"ブギス文字","Buhd":"ブヒッド文字","Cakm":"チャクマ文字","Cans":"統合カナダ先住民音節文字","Cari":"カリア文字","Cham":"チャム文字","Cher":"チェロキー文字","Chrs":"Chrs","Cirt":"キアス文字","Copt":"コプト文字","Cprt":"キプロス文字","Cyrl":"キリル文字","Cyrs":"古代教会スラブ語キリル文字","Deva":"デーバナーガリー文字","Diak":"Diak","Dogr":"Dogr","Dsrt":"デセレット文字","Dupl":"デュプロワエ式速記","Egyd":"エジプト民衆文字","Egyh":"エジプト神官文字","Egyp":"エジプト聖刻文字","Elba":"エルバサン文字","Elym":"Elym","Ethi":"エチオピア文字","Geok":"ジョージア文字(フツリ)","Geor":"ジョージア文字","Glag":"グラゴル文字","Gong":"Gong","Gonm":"Gonm","Goth":"ゴート文字","Gran":"グランタ文字","Grek":"ギリシャ文字","Gujr":"グジャラート文字","Guru":"グルムキー文字","Hanb":"漢語注音字母","Hang":"ハングル","Hani":"漢字","Hano":"ハヌノオ文字","Hans":"簡体字","Hant":"繁体字","Hatr":"Hatr","Hebr":"ヘブライ文字","Hira":"ひらがな","Hluw":"アナトリア象形文字","Hmng":"パハウ・フモン文字","Hmnp":"Hmnp","Hrkt":"仮名","Hung":"古代ハンガリー文字","Inds":"インダス文字","Ital":"古イタリア文字","Jamo":"字母","Java":"ジャワ文字","Jpan":"日本語の文字","Jurc":"女真文字","Kali":"カヤー文字","Kana":"カタカナ","Khar":"カローシュティー文字","Khmr":"クメール文字","Khoj":"ホジャ文字","Kits":"Kits","Knda":"カンナダ文字","Kore":"韓国語の文字","Kpel":"クペレ文字","Kthi":"カイティ文字","Lana":"ラーンナー文字","Laoo":"ラオ文字","Latf":"ラテン文字(ドイツ文字)","Latg":"ラテン文字 (ゲール文字)","Latn":"ラテン文字","Lepc":"レプチャ文字","Limb":"リンブ文字","Lina":"線文字A","Linb":"線文字B","Lisu":"フレイザー文字","Loma":"ロマ文字","Lyci":"リキア文字","Lydi":"リディア文字","Mahj":"マハージャニー文字","Maka":"Maka","Mand":"マンダ文字","Mani":"マニ文字","Marc":"Marc","Maya":"マヤ象形文字","Medf":"Medf","Mend":"メンデ文字","Merc":"メロエ文字草書体","Mero":"メロエ文字","Mlym":"マラヤーラム文字","Modi":"モーディー文字","Mong":"モンゴル文字","Moon":"ムーン文字","Mroo":"ムロ文字","Mtei":"メイテイ文字","Mult":"Mult","Mymr":"ミャンマー文字","Nand":"Nand","Narb":"古代北アラビア文字","Nbat":"ナバテア文字","Newa":"Newa","Nkgb":"ナシ族ゲバ文字","Nkoo":"ンコ文字","Nshu":"女書","Ogam":"オガム文字","Olck":"オルチキ文字","Orkh":"オルホン文字","Orya":"オディア文字","Osge":"Osge","Osma":"オスマニア文字","Palm":"パルミラ文字","Pauc":"パウ・チン・ハウ文字","Perm":"古ぺルム文字","Phag":"パスパ文字","Phli":"碑文パフラヴィー文字","Phlp":"詩編用パフラヴィー文字","Phlv":"書物用パフラヴィー文字","Phnx":"フェニキア文字","Plrd":"ポラード音声記号","Prti":"碑文パルティア文字","Qaag":"Qaag","Rjng":"ルジャン文字","Rohg":"Rohg","Roro":"ロンゴロンゴ文字","Runr":"ルーン文字","Samr":"サマリア文字","Sara":"サラティ文字","Sarb":"古代南アラビア文字","Saur":"サウラーシュトラ文字","Sgnw":"手話文字","Shaw":"ショー文字","Shrd":"シャーラダー文字","Sidd":"梵字","Sind":"クダワディ文字","Sinh":"シンハラ文字","Sogd":"Sogd","Sogo":"Sogo","Sora":"ソラング・ソンペング文字","Soyo":"Soyo","Sund":"スンダ文字","Sylo":"シロティ・ナグリ文字","Syrc":"シリア文字","Syre":"シリア文字(エストランゲロ文字)","Syrj":"シリア文字(西方シリア文字)","Syrn":"シリア文字(東方シリア文字)","Tagb":"タグバンワ文字","Takr":"タークリー文字","Tale":"タイ・レ文字","Talu":"新タイ・ルー文字","Taml":"タミル文字","Tang":"西夏文字","Tavt":"タイ・ヴェト文字","Telu":"テルグ文字","Teng":"テングワール文字","Tfng":"ティフナグ文字","Tglg":"タガログ文字","Thaa":"ターナ文字","Thai":"タイ文字","Tibt":"チベット文字","Tirh":"ティルフータ文字","Ugar":"ウガリット文字","Vaii":"ヴァイ文字","Visp":"視話法","Wara":"バラン・クシティ文字","Wcho":"Wcho","Wole":"ウォレアイ文字","Xpeo":"古代ペルシア文字","Xsux":"シュメール＝アッカド語楔形文字","Yezi":"Yezi","Yiii":"イ文字","Zanb":"Zanb","Zinh":"基底文字の種別を継承する結合文字","Zmth":"数学記号","Zsye":"絵文字","Zsym":"記号文字","Zxxx":"非表記","Zyyy":"共通文字","Zzzz":"不明な文字"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"アンドラ ペセタ","AED":"アラブ首長国連邦ディルハム","AFA":"アフガニスタン アフガニー (1927–2002)","AFN":"アフガニスタン アフガニー","ALK":"アルバニア レク (1946–1965)","ALL":"アルバニア レク","AMD":"アルメニア ドラム","ANG":"オランダ領アンティル ギルダー","AOA":"アンゴラ クワンザ","AOK":"アンゴラ クワンザ (1977–1991)","AON":"アンゴラ 新クワンザ (1990–2000)","AOR":"アンゴラ 旧クワンザ (1995–1999)","ARA":"アルゼンチン アゥストラール","ARL":"アルゼンチン・ペソ・レイ（1970–1983）","ARM":"アルゼンチン・ペソ（1881–1970）","ARP":"アルゼンチン ペソ (1983–1985)","ARS":"アルゼンチン ペソ","ATS":"オーストリア シリング","AUD":"オーストラリア ドル","AWG":"アルバ ギルダー","AZM":"アゼルバイジャン マナト (1993–2006)","AZN":"アゼルバイジャン マナト","BAD":"ボスニア・ヘルツェゴビナ ディナール (1992–1994)","BAM":"ボスニア・ヘルツェゴビナ 兌換マルク (BAM)","BAN":"ボスニア・ヘルツェゴビナ 新ディナール（1994–1997）","BBD":"バルバドス ドル","BDT":"バングラデシュ タカ","BEC":"ベルギー フラン (BEC)","BEF":"ベルギー フラン","BEL":"ベルギー フラン (BEL)","BGL":"ブルガリア レフ","BGM":"ブルガリア社会主義 レフ","BGN":"ブルガリア 新レフ","BGO":"ブルガリア レフ（1879–1952）","BHD":"バーレーン ディナール","BIF":"ブルンジ フラン","BMD":"バミューダ ドル","BND":"ブルネイ ドル","BOB":"ボリビア ボリビアーノ","BOL":"ボリビア ボリビアーノ (1863–1963)","BOP":"ボリビア ペソ","BOV":"ボリビア (Mvdol)","BRB":"ブラジル 新クルゼイロ (1967–1986)","BRC":"ブラジル クルザード (1986–1989)","BRE":"ブラジル クルゼイロ (1990–1993)","BRL":"ブラジル レアル","BRN":"ブラジル 新クルザード (1989–1990)","BRR":"ブラジル クルゼイロ (1993–1994)","BRZ":"ブラジル クルゼイロ（1942–1967）","BSD":"バハマ ドル","BTN":"ブータン ニュルタム","BUK":"ビルマ チャット","BWP":"ボツワナ プラ","BYB":"ベラルーシ 新ルーブル (1994–1999)","BYN":"ベラルーシ ルーブル","BYR":"ベラルーシ ルーブル (2000–2016)","BZD":"ベリーズ ドル","CAD":"カナダ ドル","CDF":"コンゴ フラン","CHE":"ユーロ (WIR)","CHF":"スイス フラン","CHW":"フラン (WIR)","CLE":"チリ エスクード","CLF":"チリ ウニダ・デ・フォメント (UF)","CLP":"チリ ペソ","CNH":"中国人民元(オフショア)","CNX":"中国人民銀行ドル","CNY":"中国人民元","COP":"コロンビア ペソ","COU":"コロンビア レアル （UVR)","CRC":"コスタリカ コロン","CSD":"セルビア ディナール (2002–2006)","CSK":"チェコスロバキア コルナ","CUC":"キューバ 兌換ペソ","CUP":"キューバ ペソ","CVE":"カーボベルデ エスクード","CYP":"キプロス ポンド","CZK":"チェコ コルナ","DDM":"東ドイツ マルク","DEM":"ドイツ マルク","DJF":"ジブチ フラン","DKK":"デンマーク クローネ","DOP":"ドミニカ ペソ","DZD":"アルジェリア ディナール","ECS":"エクアドル スクレ","ECV":"エクアドル (UVC)","EEK":"エストニア クルーン","EGP":"エジプト ポンド","ERN":"エリトリア ナクファ","ESA":"スペインペセタ（勘定A）","ESB":"スペイン 兌換ペセタ","ESP":"スペイン ペセタ","ETB":"エチオピア ブル","EUR":"ユーロ","FIM":"フィンランド マルカ","FJD":"フィジー ドル","FKP":"フォークランド（マルビナス）諸島 ポンド","FRF":"フランス フラン","GBP":"英国ポンド","GEK":"ジョージア クーポン ラリ","GEL":"ジョージア ラリ","GHC":"ガーナ セディ (1979–2007)","GHS":"ガーナ セディ","GIP":"ジブラルタル ポンド","GMD":"ガンビア ダラシ","GNF":"ギニア フラン","GNS":"ギニア シリー","GQE":"赤道ギニア エクウェレ","GRD":"ギリシャ ドラクマ","GTQ":"グアテマラ ケツァル","GWE":"ポルトガル領ギニア エスクード","GWP":"ギニアビサウ ペソ","GYD":"ガイアナ ドル","HKD":"香港ドル","HNL":"ホンジュラス レンピラ","HRD":"クロアチア ディナール","HRK":"クロアチア クーナ","HTG":"ハイチ グールド","HUF":"ハンガリー フォリント","IDR":"インドネシア ルピア","IEP":"アイリッシュ ポンド","ILP":"イスラエル ポンド","ILR":"イスラエル シェケル (1980–1985)","ILS":"イスラエル新シェケル","INR":"インド ルピー","IQD":"イラク ディナール","IRR":"イラン リアル","ISJ":"アイスランド クローナ (1918–1981)","ISK":"アイスランド クローナ","ITL":"イタリア リラ","JMD":"ジャマイカ ドル","JOD":"ヨルダン ディナール","JPY":"日本円","KES":"ケニア シリング","KGS":"キルギス ソム","KHR":"カンボジア リエル","KMF":"コモロ フラン","KPW":"北朝鮮ウォン","KRH":"韓国 ファン（1953–1962）","KRO":"韓国 ウォン（1945–1953）","KRW":"韓国ウォン","KWD":"クウェート ディナール","KYD":"ケイマン諸島 ドル","KZT":"カザフスタン テンゲ","LAK":"ラオス キープ","LBP":"レバノン ポンド","LKR":"スリランカ ルピー","LRD":"リベリア ドル","LSL":"レソト ロティ","LTL":"リトアニア リタス","LTT":"リトアニア タロナ","LUC":"ルクセンブルク 兌換フラン","LUF":"ルクセンブルグ フラン","LUL":"ルクセンブルク 金融フラン","LVL":"ラトビア ラッツ","LVR":"ラトビア ルーブル","LYD":"リビア ディナール","MAD":"モロッコ ディルハム","MAF":"モロッコ フラン","MCF":"モネガスク フラン","MDC":"モルドバ クーポン","MDL":"モルドバ レイ","MGA":"マダガスカル アリアリ","MGF":"マラガシ フラン","MKD":"マケドニア デナル","MKN":"マケドニア ディナール（1992–1993）","MLF":"マリ フラン","MMK":"ミャンマー チャット","MNT":"モンゴル トグログ","MOP":"マカオ パタカ","MRO":"モーリタニア ウギア (1973–2017)","MRU":"モーリタニア ウギア","MTL":"マルタ リラ","MTP":"マルタ ポンド","MUR":"モーリシャス ルピー","MVP":"モルディブ諸島 ルピー","MVR":"モルディブ ルフィア","MWK":"マラウィ クワチャ","MXN":"メキシコ ペソ","MXP":"メキシコ ペソ (1861–1992)","MXV":"メキシコ (UDI)","MYR":"マレーシア リンギット","MZE":"モザンピーク エスクード","MZM":"モザンビーク メティカル (1980–2006)","MZN":"モザンビーク メティカル","NAD":"ナミビア ドル","NGN":"ナイジェリア ナイラ","NIC":"ニカラグア コルドバ (1988–1991)","NIO":"ニカラグア コルドバ オロ","NLG":"オランダ ギルダー","NOK":"ノルウェー クローネ","NPR":"ネパール ルピー","NZD":"ニュージーランド ドル","OMR":"オマーン リアル","PAB":"パナマ バルボア","PEI":"ペルー インティ","PEN":"ペルー ソル","PES":"ペルー ソル (1863–1965)","PGK":"パプアニューギニア キナ","PHP":"フィリピン ペソ","PKR":"パキスタン ルピー","PLN":"ポーランド ズウォティ","PLZ":"ポーランド ズウォティ (1950–1995)","PTE":"ポルトガル エスクード","PYG":"パラグアイ グアラニ","QAR":"カタール リアル","RHD":"ローデシア ドル","ROL":"ルーマニア レイ (1952–2006)","RON":"ルーマニア レイ","RSD":"ディナール (セルビア)","RUB":"ロシア ルーブル","RUR":"ロシア ルーブル (1991–1998)","RWF":"ルワンダ フラン","SAR":"サウジ リヤル","SBD":"ソロモン諸島 ドル","SCR":"セーシェル ルピー","SDD":"スーダン ディナール (1992–2007)","SDG":"スーダン ポンド","SDP":"スーダン ポンド (1957–1998)","SEK":"スウェーデン クローナ","SGD":"シンガポール ドル","SHP":"セントヘレナ ポンド","SIT":"スロベニア トラール","SKK":"スロバキア コルナ","SLL":"シエラレオネ レオン","SOS":"ソマリア シリング","SRD":"スリナム ドル","SRG":"スリナム ギルダー","SSP":"南スーダン ポンド","STD":"サントメ・プリンシペ ドブラ (1977–2017)","STN":"サントメ・プリンシペ ドブラ","SUR":"ソ連 ルーブル","SVC":"エルサルバドル コロン","SYP":"シリア ポンド","SZL":"スワジランド リランゲニ","THB":"タイ バーツ","TJR":"タジキスタン ルーブル","TJS":"タジキスタン ソモニ","TMM":"トルクメニスタン マナト (1993–2009)","TMT":"トルクメニスタン マナト","TND":"チュニジア ディナール","TOP":"トンガ パ・アンガ","TPE":"ティモール エスクード","TRL":"トルコ リラ (1922–2005)","TRY":"新トルコリラ","TTD":"トリニダード・トバゴ ドル","TWD":"新台湾ドル","TZS":"タンザニア シリング","UAH":"ウクライナ グリブナ","UAK":"ウクライナ カルボバネツ","UGS":"ウガンダ シリング (1966–1987)","UGX":"ウガンダ シリング","USD":"米ドル","USN":"米ドル (翌日)","USS":"米ドル (当日)","UYI":"ウルグアイ ペソエン","UYP":"ウルグアイ ペソ (1975–1993)","UYU":"ウルグアイ ペソ","UYW":"UYW","UZS":"ウズベキスタン スム","VEB":"ベネズエラ ボリバル (1871–2008)","VEF":"ベネズエラ ボリバル (2008–2018)","VES":"ベネズエラ ボリバル","VND":"ベトナム ドン","VNN":"ベトナム ドン（1978–1985）","VUV":"バヌアツ バツ","WST":"サモア タラ","XAF":"中央アフリカ CFA フラン","XAG":"銀","XAU":"金","XBA":"ヨーロッパ混合単位 (EURCO)","XBB":"ヨーロッパ通貨単位 (EMU–6)","XBC":"ヨーロッパ勘定単位 (EUA–9)","XBD":"ヨーロッパ勘定単位 (EUA–17)","XCD":"東カリブ ドル","XDR":"特別引き出し権","XEU":"ヨーロッパ通貨単位","XFO":"フランス金フラン","XFU":"フランス フラン (UIC)","XOF":"西アフリカ CFA フラン","XPD":"パラジウム","XPF":"CFP フラン","XPT":"プラチナ","XRE":"RINET基金","XSU":"スクレ","XTS":"テスト用通貨コード","XUA":"UA (アフリカ開発銀行)","XXX":"不明または無効な通貨","YDD":"イエメン ディナール","YER":"イエメン リアル","YUD":"ユーゴスラビア ハード・ディナール (1966–1990)","YUM":"ユーゴスラビア ノビ・ディナール (1994–2002)","YUN":"ユーゴスラビア 兌換ディナール (1990–1992)","YUR":"ユーゴスラビア 改革ディナール（1992–1993）","ZAL":"南アフリカ ランド (ZAL)","ZAR":"南アフリカ ランド","ZMK":"ザンビア クワチャ (1968–2012)","ZMW":"ザンビア クワチャ","ZRN":"ザイール 新ザイール (1993–1998)","ZRZ":"ザイール ザイール (1971–1993)","ZWD":"ジンバブエ ドル (1980–2008)","ZWL":"ジンバブエ ドル (2009)","ZWR":"シンバブエ ドル（2008）"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}}},"availableLocales":["ja"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

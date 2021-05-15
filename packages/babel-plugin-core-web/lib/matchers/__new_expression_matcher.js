module.exports = function newExpressionMatcher(newExpression, matcherMap) {
	if (!newExpression.arguments) {
		return null;
	}

	return firstStringLiteralFromIntlArguments(newExpression.arguments).flatMap((arg) => {
		switch ((arg.value).slice(0, 5)) {
		
		case 'af':
			return matcherMap['af'];


		case 'af-NA':
			return matcherMap['af-NA'];


		case 'agq':
			return matcherMap['agq'];


		case 'ak':
			return matcherMap['ak'];


		case 'am':
			return matcherMap['am'];


		case 'ar':
			return matcherMap['ar'];


		case 'ar-AE':
			return matcherMap['ar-AE'];


		case 'ar-BH':
			return matcherMap['ar-BH'];


		case 'ar-DJ':
			return matcherMap['ar-DJ'];


		case 'ar-DZ':
			return matcherMap['ar-DZ'];


		case 'ar-EG':
			return matcherMap['ar-EG'];


		case 'ar-EH':
			return matcherMap['ar-EH'];


		case 'ar-ER':
			return matcherMap['ar-ER'];


		case 'ar-IL':
			return matcherMap['ar-IL'];


		case 'ar-IQ':
			return matcherMap['ar-IQ'];


		case 'ar-JO':
			return matcherMap['ar-JO'];


		case 'ar-KM':
			return matcherMap['ar-KM'];


		case 'ar-KW':
			return matcherMap['ar-KW'];


		case 'ar-LB':
			return matcherMap['ar-LB'];


		case 'ar-LY':
			return matcherMap['ar-LY'];


		case 'ar-MA':
			return matcherMap['ar-MA'];


		case 'ar-MR':
			return matcherMap['ar-MR'];


		case 'ar-OM':
			return matcherMap['ar-OM'];


		case 'ar-PS':
			return matcherMap['ar-PS'];


		case 'ar-QA':
			return matcherMap['ar-QA'];


		case 'ar-SA':
			return matcherMap['ar-SA'];


		case 'ar-SD':
			return matcherMap['ar-SD'];


		case 'ar-SO':
			return matcherMap['ar-SO'];


		case 'ar-SS':
			return matcherMap['ar-SS'];


		case 'ar-SY':
			return matcherMap['ar-SY'];


		case 'ar-TD':
			return matcherMap['ar-TD'];


		case 'ar-TN':
			return matcherMap['ar-TN'];


		case 'ar-YE':
			return matcherMap['ar-YE'];


		case 'as':
			return matcherMap['as'];


		case 'asa':
			return matcherMap['asa'];


		case 'ast':
			return matcherMap['ast'];


		case 'az':
			return matcherMap['az'];


		case 'az-Cy':
			return matcherMap['az-Cy'];


		case 'az-La':
			return matcherMap['az-La'];


		case 'bas':
			return matcherMap['bas'];


		case 'be':
			return matcherMap['be'];


		case 'bem':
			return matcherMap['bem'];


		case 'bez':
			return matcherMap['bez'];


		case 'bg':
			return matcherMap['bg'];


		case 'bm':
			return matcherMap['bm'];


		case 'bn':
			return matcherMap['bn'];


		case 'bn-IN':
			return matcherMap['bn-IN'];


		case 'bo':
			return matcherMap['bo'];


		case 'bo-IN':
			return matcherMap['bo-IN'];


		case 'br':
			return matcherMap['br'];


		case 'brx':
			return matcherMap['brx'];


		case 'bs':
			return matcherMap['bs'];


		case 'bs-Cy':
			return matcherMap['bs-Cy'];


		case 'bs-La':
			return matcherMap['bs-La'];


		case 'ca':
			return matcherMap['ca'];


		case 'ca-AD':
			return matcherMap['ca-AD'];


		case 'ca-ES':
			return matcherMap['ca-ES'];


		case 'ca-FR':
			return matcherMap['ca-FR'];


		case 'ca-IT':
			return matcherMap['ca-IT'];


		case 'ccp':
			return matcherMap['ccp'];


		case 'ccp-I':
			return matcherMap['ccp-I'];


		case 'ce':
			return matcherMap['ce'];


		case 'ceb':
			return matcherMap['ceb'];


		case 'cgg':
			return matcherMap['cgg'];


		case 'chr':
			return matcherMap['chr'];


		case 'ckb':
			return matcherMap['ckb'];


		case 'ckb-I':
			return matcherMap['ckb-I'];


		case 'cs':
			return matcherMap['cs'];


		case 'cy':
			return matcherMap['cy'];


		case 'da':
			return matcherMap['da'];


		case 'da-GL':
			return matcherMap['da-GL'];


		case 'dav':
			return matcherMap['dav'];


		case 'de':
			return matcherMap['de'];


		case 'de-AT':
			return matcherMap['de-AT'];


		case 'de-BE':
			return matcherMap['de-BE'];


		case 'de-CH':
			return matcherMap['de-CH'];


		case 'de-IT':
			return matcherMap['de-IT'];


		case 'de-LI':
			return matcherMap['de-LI'];


		case 'de-LU':
			return matcherMap['de-LU'];


		case 'dje':
			return matcherMap['dje'];


		case 'doi':
			return matcherMap['doi'];


		case 'dsb':
			return matcherMap['dsb'];


		case 'dua':
			return matcherMap['dua'];


		case 'dyo':
			return matcherMap['dyo'];


		case 'dz':
			return matcherMap['dz'];


		case 'ebu':
			return matcherMap['ebu'];


		case 'ee':
			return matcherMap['ee'];


		case 'ee-TG':
			return matcherMap['ee-TG'];


		case 'el':
			return matcherMap['el'];


		case 'el-CY':
			return matcherMap['el-CY'];


		case 'en':
			return matcherMap['en'];


		case 'en-00':
			return matcherMap['en-00'];


		case 'en-15':
			return matcherMap['en-15'];


		case 'en-AE':
			return matcherMap['en-AE'];


		case 'en-AG':
			return matcherMap['en-AG'];


		case 'en-AI':
			return matcherMap['en-AI'];


		case 'en-AS':
			return matcherMap['en-AS'];


		case 'en-AT':
			return matcherMap['en-AT'];


		case 'en-AU':
			return matcherMap['en-AU'];


		case 'en-BB':
			return matcherMap['en-BB'];


		case 'en-BE':
			return matcherMap['en-BE'];


		case 'en-BI':
			return matcherMap['en-BI'];


		case 'en-BM':
			return matcherMap['en-BM'];


		case 'en-BS':
			return matcherMap['en-BS'];


		case 'en-BW':
			return matcherMap['en-BW'];


		case 'en-BZ':
			return matcherMap['en-BZ'];


		case 'en-CA':
			return matcherMap['en-CA'];


		case 'en-CC':
			return matcherMap['en-CC'];


		case 'en-CH':
			return matcherMap['en-CH'];


		case 'en-CK':
			return matcherMap['en-CK'];


		case 'en-CM':
			return matcherMap['en-CM'];


		case 'en-CX':
			return matcherMap['en-CX'];


		case 'en-CY':
			return matcherMap['en-CY'];


		case 'en-DE':
			return matcherMap['en-DE'];


		case 'en-DG':
			return matcherMap['en-DG'];


		case 'en-DK':
			return matcherMap['en-DK'];


		case 'en-DM':
			return matcherMap['en-DM'];


		case 'en-ER':
			return matcherMap['en-ER'];


		case 'en-FI':
			return matcherMap['en-FI'];


		case 'en-FJ':
			return matcherMap['en-FJ'];


		case 'en-FK':
			return matcherMap['en-FK'];


		case 'en-FM':
			return matcherMap['en-FM'];


		case 'en-GB':
			return matcherMap['en-GB'];


		case 'en-GD':
			return matcherMap['en-GD'];


		case 'en-GG':
			return matcherMap['en-GG'];


		case 'en-GH':
			return matcherMap['en-GH'];


		case 'en-GI':
			return matcherMap['en-GI'];


		case 'en-GM':
			return matcherMap['en-GM'];


		case 'en-GU':
			return matcherMap['en-GU'];


		case 'en-GY':
			return matcherMap['en-GY'];


		case 'en-HK':
			return matcherMap['en-HK'];


		case 'en-IE':
			return matcherMap['en-IE'];


		case 'en-IL':
			return matcherMap['en-IL'];


		case 'en-IM':
			return matcherMap['en-IM'];


		case 'en-IN':
			return matcherMap['en-IN'];


		case 'en-IO':
			return matcherMap['en-IO'];


		case 'en-JE':
			return matcherMap['en-JE'];


		case 'en-JM':
			return matcherMap['en-JM'];


		case 'en-KE':
			return matcherMap['en-KE'];


		case 'en-KI':
			return matcherMap['en-KI'];


		case 'en-KN':
			return matcherMap['en-KN'];


		case 'en-KY':
			return matcherMap['en-KY'];


		case 'en-LC':
			return matcherMap['en-LC'];


		case 'en-LR':
			return matcherMap['en-LR'];


		case 'en-LS':
			return matcherMap['en-LS'];


		case 'en-MG':
			return matcherMap['en-MG'];


		case 'en-MH':
			return matcherMap['en-MH'];


		case 'en-MO':
			return matcherMap['en-MO'];


		case 'en-MP':
			return matcherMap['en-MP'];


		case 'en-MS':
			return matcherMap['en-MS'];


		case 'en-MT':
			return matcherMap['en-MT'];


		case 'en-MU':
			return matcherMap['en-MU'];


		case 'en-MW':
			return matcherMap['en-MW'];


		case 'en-MY':
			return matcherMap['en-MY'];


		case 'en-NA':
			return matcherMap['en-NA'];


		case 'en-NF':
			return matcherMap['en-NF'];


		case 'en-NG':
			return matcherMap['en-NG'];


		case 'en-NL':
			return matcherMap['en-NL'];


		case 'en-NR':
			return matcherMap['en-NR'];


		case 'en-NU':
			return matcherMap['en-NU'];


		case 'en-NZ':
			return matcherMap['en-NZ'];


		case 'en-PG':
			return matcherMap['en-PG'];


		case 'en-PH':
			return matcherMap['en-PH'];


		case 'en-PK':
			return matcherMap['en-PK'];


		case 'en-PN':
			return matcherMap['en-PN'];


		case 'en-PR':
			return matcherMap['en-PR'];


		case 'en-PW':
			return matcherMap['en-PW'];


		case 'en-RW':
			return matcherMap['en-RW'];


		case 'en-SB':
			return matcherMap['en-SB'];


		case 'en-SC':
			return matcherMap['en-SC'];


		case 'en-SD':
			return matcherMap['en-SD'];


		case 'en-SE':
			return matcherMap['en-SE'];


		case 'en-SG':
			return matcherMap['en-SG'];


		case 'en-SH':
			return matcherMap['en-SH'];


		case 'en-SI':
			return matcherMap['en-SI'];


		case 'en-SL':
			return matcherMap['en-SL'];


		case 'en-SS':
			return matcherMap['en-SS'];


		case 'en-SX':
			return matcherMap['en-SX'];


		case 'en-SZ':
			return matcherMap['en-SZ'];


		case 'en-TC':
			return matcherMap['en-TC'];


		case 'en-TK':
			return matcherMap['en-TK'];


		case 'en-TO':
			return matcherMap['en-TO'];


		case 'en-TT':
			return matcherMap['en-TT'];


		case 'en-TV':
			return matcherMap['en-TV'];


		case 'en-TZ':
			return matcherMap['en-TZ'];


		case 'en-UG':
			return matcherMap['en-UG'];


		case 'en-UM':
			return matcherMap['en-UM'];


		case 'en-US':
			return matcherMap['en-US'];


		case 'en-VC':
			return matcherMap['en-VC'];


		case 'en-VG':
			return matcherMap['en-VG'];


		case 'en-VI':
			return matcherMap['en-VI'];


		case 'en-VU':
			return matcherMap['en-VU'];


		case 'en-WS':
			return matcherMap['en-WS'];


		case 'en-ZA':
			return matcherMap['en-ZA'];


		case 'en-ZM':
			return matcherMap['en-ZM'];


		case 'en-ZW':
			return matcherMap['en-ZW'];


		case 'eo':
			return matcherMap['eo'];


		case 'es':
			return matcherMap['es'];


		case 'es-41':
			return matcherMap['es-41'];


		case 'es-AR':
			return matcherMap['es-AR'];


		case 'es-BO':
			return matcherMap['es-BO'];


		case 'es-BR':
			return matcherMap['es-BR'];


		case 'es-BZ':
			return matcherMap['es-BZ'];


		case 'es-CL':
			return matcherMap['es-CL'];


		case 'es-CO':
			return matcherMap['es-CO'];


		case 'es-CR':
			return matcherMap['es-CR'];


		case 'es-CU':
			return matcherMap['es-CU'];


		case 'es-DO':
			return matcherMap['es-DO'];


		case 'es-EA':
			return matcherMap['es-EA'];


		case 'es-EC':
			return matcherMap['es-EC'];


		case 'es-GQ':
			return matcherMap['es-GQ'];


		case 'es-GT':
			return matcherMap['es-GT'];


		case 'es-HN':
			return matcherMap['es-HN'];


		case 'es-IC':
			return matcherMap['es-IC'];


		case 'es-MX':
			return matcherMap['es-MX'];


		case 'es-NI':
			return matcherMap['es-NI'];


		case 'es-PA':
			return matcherMap['es-PA'];


		case 'es-PE':
			return matcherMap['es-PE'];


		case 'es-PH':
			return matcherMap['es-PH'];


		case 'es-PR':
			return matcherMap['es-PR'];


		case 'es-PY':
			return matcherMap['es-PY'];


		case 'es-SV':
			return matcherMap['es-SV'];


		case 'es-US':
			return matcherMap['es-US'];


		case 'es-UY':
			return matcherMap['es-UY'];


		case 'es-VE':
			return matcherMap['es-VE'];


		case 'et':
			return matcherMap['et'];


		case 'eu':
			return matcherMap['eu'];


		case 'ewo':
			return matcherMap['ewo'];


		case 'fa':
			return matcherMap['fa'];


		case 'fa-AF':
			return matcherMap['fa-AF'];


		case 'ff':
			return matcherMap['ff'];


		case 'ff-Ad':
			return matcherMap['ff-Ad'];


		case 'ff-La':
			return matcherMap['ff-La'];


		case 'fi':
			return matcherMap['fi'];


		case 'fil':
			return matcherMap['fil'];


		case 'fo':
			return matcherMap['fo'];


		case 'fo-DK':
			return matcherMap['fo-DK'];


		case 'fr':
			return matcherMap['fr'];


		case 'fr-BE':
			return matcherMap['fr-BE'];


		case 'fr-BF':
			return matcherMap['fr-BF'];


		case 'fr-BI':
			return matcherMap['fr-BI'];


		case 'fr-BJ':
			return matcherMap['fr-BJ'];


		case 'fr-BL':
			return matcherMap['fr-BL'];


		case 'fr-CA':
			return matcherMap['fr-CA'];


		case 'fr-CD':
			return matcherMap['fr-CD'];


		case 'fr-CF':
			return matcherMap['fr-CF'];


		case 'fr-CG':
			return matcherMap['fr-CG'];


		case 'fr-CH':
			return matcherMap['fr-CH'];


		case 'fr-CI':
			return matcherMap['fr-CI'];


		case 'fr-CM':
			return matcherMap['fr-CM'];


		case 'fr-DJ':
			return matcherMap['fr-DJ'];


		case 'fr-DZ':
			return matcherMap['fr-DZ'];


		case 'fr-GA':
			return matcherMap['fr-GA'];


		case 'fr-GF':
			return matcherMap['fr-GF'];


		case 'fr-GN':
			return matcherMap['fr-GN'];


		case 'fr-GP':
			return matcherMap['fr-GP'];


		case 'fr-GQ':
			return matcherMap['fr-GQ'];


		case 'fr-HT':
			return matcherMap['fr-HT'];


		case 'fr-KM':
			return matcherMap['fr-KM'];


		case 'fr-LU':
			return matcherMap['fr-LU'];


		case 'fr-MA':
			return matcherMap['fr-MA'];


		case 'fr-MC':
			return matcherMap['fr-MC'];


		case 'fr-MF':
			return matcherMap['fr-MF'];


		case 'fr-MG':
			return matcherMap['fr-MG'];


		case 'fr-ML':
			return matcherMap['fr-ML'];


		case 'fr-MQ':
			return matcherMap['fr-MQ'];


		case 'fr-MR':
			return matcherMap['fr-MR'];


		case 'fr-MU':
			return matcherMap['fr-MU'];


		case 'fr-NC':
			return matcherMap['fr-NC'];


		case 'fr-NE':
			return matcherMap['fr-NE'];


		case 'fr-PF':
			return matcherMap['fr-PF'];


		case 'fr-PM':
			return matcherMap['fr-PM'];


		case 'fr-RE':
			return matcherMap['fr-RE'];


		case 'fr-RW':
			return matcherMap['fr-RW'];


		case 'fr-SC':
			return matcherMap['fr-SC'];


		case 'fr-SN':
			return matcherMap['fr-SN'];


		case 'fr-SY':
			return matcherMap['fr-SY'];


		case 'fr-TD':
			return matcherMap['fr-TD'];


		case 'fr-TG':
			return matcherMap['fr-TG'];


		case 'fr-TN':
			return matcherMap['fr-TN'];


		case 'fr-VU':
			return matcherMap['fr-VU'];


		case 'fr-WF':
			return matcherMap['fr-WF'];


		case 'fr-YT':
			return matcherMap['fr-YT'];


		case 'fur':
			return matcherMap['fur'];


		case 'fy':
			return matcherMap['fy'];


		case 'ga':
			return matcherMap['ga'];


		case 'ga-GB':
			return matcherMap['ga-GB'];


		case 'gd':
			return matcherMap['gd'];


		case 'gl':
			return matcherMap['gl'];


		case 'gsw':
			return matcherMap['gsw'];


		case 'gsw-F':
			return matcherMap['gsw-F'];


		case 'gsw-L':
			return matcherMap['gsw-L'];


		case 'gu':
			return matcherMap['gu'];


		case 'guz':
			return matcherMap['guz'];


		case 'gv':
			return matcherMap['gv'];


		case 'ha':
			return matcherMap['ha'];


		case 'ha-GH':
			return matcherMap['ha-GH'];


		case 'ha-NE':
			return matcherMap['ha-NE'];


		case 'haw':
			return matcherMap['haw'];


		case 'he':
			return matcherMap['he'];


		case 'hi':
			return matcherMap['hi'];


		case 'hr':
			return matcherMap['hr'];


		case 'hr-BA':
			return matcherMap['hr-BA'];


		case 'hsb':
			return matcherMap['hsb'];


		case 'hu':
			return matcherMap['hu'];


		case 'hy':
			return matcherMap['hy'];


		case 'ia':
			return matcherMap['ia'];


		case 'id':
			return matcherMap['id'];


		case 'ig':
			return matcherMap['ig'];


		case 'ii':
			return matcherMap['ii'];


		case 'is':
			return matcherMap['is'];


		case 'it':
			return matcherMap['it'];


		case 'it-CH':
			return matcherMap['it-CH'];


		case 'it-SM':
			return matcherMap['it-SM'];


		case 'it-VA':
			return matcherMap['it-VA'];


		case 'ja':
			return matcherMap['ja'];


		case 'jgo':
			return matcherMap['jgo'];


		case 'jmc':
			return matcherMap['jmc'];


		case 'jv':
			return matcherMap['jv'];


		case 'ka':
			return matcherMap['ka'];


		case 'kab':
			return matcherMap['kab'];


		case 'kam':
			return matcherMap['kam'];


		case 'kde':
			return matcherMap['kde'];


		case 'kea':
			return matcherMap['kea'];


		case 'khq':
			return matcherMap['khq'];


		case 'ki':
			return matcherMap['ki'];


		case 'kk':
			return matcherMap['kk'];


		case 'kkj':
			return matcherMap['kkj'];


		case 'kl':
			return matcherMap['kl'];


		case 'kln':
			return matcherMap['kln'];


		case 'km':
			return matcherMap['km'];


		case 'kn':
			return matcherMap['kn'];


		case 'ko':
			return matcherMap['ko'];


		case 'ko-KP':
			return matcherMap['ko-KP'];


		case 'kok':
			return matcherMap['kok'];


		case 'ks':
			return matcherMap['ks'];


		case 'ks-Ar':
			return matcherMap['ks-Ar'];


		case 'ksb':
			return matcherMap['ksb'];


		case 'ksf':
			return matcherMap['ksf'];


		case 'ksh':
			return matcherMap['ksh'];


		case 'ku':
			return matcherMap['ku'];


		case 'kw':
			return matcherMap['kw'];


		case 'ky':
			return matcherMap['ky'];


		case 'lag':
			return matcherMap['lag'];


		case 'lb':
			return matcherMap['lb'];


		case 'lg':
			return matcherMap['lg'];


		case 'lkt':
			return matcherMap['lkt'];


		case 'ln':
			return matcherMap['ln'];


		case 'ln-AO':
			return matcherMap['ln-AO'];


		case 'ln-CF':
			return matcherMap['ln-CF'];


		case 'ln-CG':
			return matcherMap['ln-CG'];


		case 'lo':
			return matcherMap['lo'];


		case 'lrc':
			return matcherMap['lrc'];


		case 'lrc-I':
			return matcherMap['lrc-I'];


		case 'lt':
			return matcherMap['lt'];


		case 'lu':
			return matcherMap['lu'];


		case 'luo':
			return matcherMap['luo'];


		case 'luy':
			return matcherMap['luy'];


		case 'lv':
			return matcherMap['lv'];


		case 'mai':
			return matcherMap['mai'];


		case 'mas':
			return matcherMap['mas'];


		case 'mas-T':
			return matcherMap['mas-T'];


		case 'mer':
			return matcherMap['mer'];


		case 'mfe':
			return matcherMap['mfe'];


		case 'mg':
			return matcherMap['mg'];


		case 'mgh':
			return matcherMap['mgh'];


		case 'mgo':
			return matcherMap['mgo'];


		case 'mi':
			return matcherMap['mi'];


		case 'mk':
			return matcherMap['mk'];


		case 'ml':
			return matcherMap['ml'];


		case 'mn':
			return matcherMap['mn'];


		case 'mni':
			return matcherMap['mni'];


		case 'mni-B':
			return matcherMap['mni-B'];


		case 'mr':
			return matcherMap['mr'];


		case 'ms':
			return matcherMap['ms'];


		case 'ms-BN':
			return matcherMap['ms-BN'];


		case 'ms-ID':
			return matcherMap['ms-ID'];


		case 'ms-SG':
			return matcherMap['ms-SG'];


		case 'mt':
			return matcherMap['mt'];


		case 'mua':
			return matcherMap['mua'];


		case 'my':
			return matcherMap['my'];


		case 'mzn':
			return matcherMap['mzn'];


		case 'naq':
			return matcherMap['naq'];


		case 'nb':
			return matcherMap['nb'];


		case 'nb-SJ':
			return matcherMap['nb-SJ'];


		case 'nd':
			return matcherMap['nd'];


		case 'nds':
			return matcherMap['nds'];


		case 'nds-N':
			return matcherMap['nds-N'];


		case 'ne':
			return matcherMap['ne'];


		case 'ne-IN':
			return matcherMap['ne-IN'];


		case 'nl':
			return matcherMap['nl'];


		case 'nl-AW':
			return matcherMap['nl-AW'];


		case 'nl-BE':
			return matcherMap['nl-BE'];


		case 'nl-BQ':
			return matcherMap['nl-BQ'];


		case 'nl-CW':
			return matcherMap['nl-CW'];


		case 'nl-SR':
			return matcherMap['nl-SR'];


		case 'nl-SX':
			return matcherMap['nl-SX'];


		case 'nmg':
			return matcherMap['nmg'];


		case 'nn':
			return matcherMap['nn'];


		case 'nnh':
			return matcherMap['nnh'];


		case 'nus':
			return matcherMap['nus'];


		case 'nyn':
			return matcherMap['nyn'];


		case 'om':
			return matcherMap['om'];


		case 'om-KE':
			return matcherMap['om-KE'];


		case 'or':
			return matcherMap['or'];


		case 'os':
			return matcherMap['os'];


		case 'os-RU':
			return matcherMap['os-RU'];


		case 'pa':
			return matcherMap['pa'];


		case 'pa-Ar':
			return matcherMap['pa-Ar'];


		case 'pa-Gu':
			return matcherMap['pa-Gu'];


		case 'pcm':
			return matcherMap['pcm'];


		case 'pl':
			return matcherMap['pl'];


		case 'ps':
			return matcherMap['ps'];


		case 'ps-PK':
			return matcherMap['ps-PK'];


		case 'pt':
			return matcherMap['pt'];


		case 'pt-AO':
			return matcherMap['pt-AO'];


		case 'pt-CH':
			return matcherMap['pt-CH'];


		case 'pt-CV':
			return matcherMap['pt-CV'];


		case 'pt-GQ':
			return matcherMap['pt-GQ'];


		case 'pt-GW':
			return matcherMap['pt-GW'];


		case 'pt-LU':
			return matcherMap['pt-LU'];


		case 'pt-MO':
			return matcherMap['pt-MO'];


		case 'pt-MZ':
			return matcherMap['pt-MZ'];


		case 'pt-PT':
			return matcherMap['pt-PT'];


		case 'pt-ST':
			return matcherMap['pt-ST'];


		case 'pt-TL':
			return matcherMap['pt-TL'];


		case 'qu':
			return matcherMap['qu'];


		case 'qu-BO':
			return matcherMap['qu-BO'];


		case 'qu-EC':
			return matcherMap['qu-EC'];


		case 'rm':
			return matcherMap['rm'];


		case 'rn':
			return matcherMap['rn'];


		case 'ro':
			return matcherMap['ro'];


		case 'ro-MD':
			return matcherMap['ro-MD'];


		case 'rof':
			return matcherMap['rof'];


		case 'ru':
			return matcherMap['ru'];


		case 'ru-BY':
			return matcherMap['ru-BY'];


		case 'ru-KG':
			return matcherMap['ru-KG'];


		case 'ru-KZ':
			return matcherMap['ru-KZ'];


		case 'ru-MD':
			return matcherMap['ru-MD'];


		case 'ru-UA':
			return matcherMap['ru-UA'];


		case 'rw':
			return matcherMap['rw'];


		case 'rwk':
			return matcherMap['rwk'];


		case 'sa':
			return matcherMap['sa'];


		case 'sah':
			return matcherMap['sah'];


		case 'saq':
			return matcherMap['saq'];


		case 'sat':
			return matcherMap['sat'];


		case 'sat-O':
			return matcherMap['sat-O'];


		case 'sbp':
			return matcherMap['sbp'];


		case 'sd':
			return matcherMap['sd'];


		case 'sd-Ar':
			return matcherMap['sd-Ar'];


		case 'sd-De':
			return matcherMap['sd-De'];


		case 'se':
			return matcherMap['se'];


		case 'se-FI':
			return matcherMap['se-FI'];


		case 'se-SE':
			return matcherMap['se-SE'];


		case 'seh':
			return matcherMap['seh'];


		case 'ses':
			return matcherMap['ses'];


		case 'sg':
			return matcherMap['sg'];


		case 'shi':
			return matcherMap['shi'];


		case 'shi-L':
			return matcherMap['shi-L'];


		case 'shi-T':
			return matcherMap['shi-T'];


		case 'si':
			return matcherMap['si'];


		case 'sk':
			return matcherMap['sk'];


		case 'sl':
			return matcherMap['sl'];


		case 'smn':
			return matcherMap['smn'];


		case 'sn':
			return matcherMap['sn'];


		case 'so':
			return matcherMap['so'];


		case 'so-DJ':
			return matcherMap['so-DJ'];


		case 'so-ET':
			return matcherMap['so-ET'];


		case 'so-KE':
			return matcherMap['so-KE'];


		case 'sq':
			return matcherMap['sq'];


		case 'sq-MK':
			return matcherMap['sq-MK'];


		case 'sq-XK':
			return matcherMap['sq-XK'];


		case 'sr':
			return matcherMap['sr'];


		case 'sr-Cy':
			return matcherMap['sr-Cy'];


		case 'sr-La':
			return matcherMap['sr-La'];


		case 'su':
			return matcherMap['su'];


		case 'su-La':
			return matcherMap['su-La'];


		case 'sv':
			return matcherMap['sv'];


		case 'sv-AX':
			return matcherMap['sv-AX'];


		case 'sv-FI':
			return matcherMap['sv-FI'];


		case 'sw':
			return matcherMap['sw'];


		case 'sw-CD':
			return matcherMap['sw-CD'];


		case 'sw-KE':
			return matcherMap['sw-KE'];


		case 'sw-UG':
			return matcherMap['sw-UG'];


		case 'ta':
			return matcherMap['ta'];


		case 'ta-LK':
			return matcherMap['ta-LK'];


		case 'ta-MY':
			return matcherMap['ta-MY'];


		case 'ta-SG':
			return matcherMap['ta-SG'];


		case 'te':
			return matcherMap['te'];


		case 'teo':
			return matcherMap['teo'];


		case 'teo-K':
			return matcherMap['teo-K'];


		case 'tg':
			return matcherMap['tg'];


		case 'th':
			return matcherMap['th'];


		case 'ti':
			return matcherMap['ti'];


		case 'ti-ER':
			return matcherMap['ti-ER'];


		case 'tk':
			return matcherMap['tk'];


		case 'to':
			return matcherMap['to'];


		case 'tr':
			return matcherMap['tr'];


		case 'tr-CY':
			return matcherMap['tr-CY'];


		case 'tt':
			return matcherMap['tt'];


		case 'twq':
			return matcherMap['twq'];


		case 'tzm':
			return matcherMap['tzm'];


		case 'ug':
			return matcherMap['ug'];


		case 'uk':
			return matcherMap['uk'];


		case 'ur':
			return matcherMap['ur'];


		case 'ur-IN':
			return matcherMap['ur-IN'];


		case 'uz':
			return matcherMap['uz'];


		case 'uz-Ar':
			return matcherMap['uz-Ar'];


		case 'uz-Cy':
			return matcherMap['uz-Cy'];


		case 'uz-La':
			return matcherMap['uz-La'];


		case 'vai':
			return matcherMap['vai'];


		case 'vai-L':
			return matcherMap['vai-L'];


		case 'vai-V':
			return matcherMap['vai-V'];


		case 'vi':
			return matcherMap['vi'];


		case 'vun':
			return matcherMap['vun'];


		case 'wae':
			return matcherMap['wae'];


		case 'wo':
			return matcherMap['wo'];


		case 'xh':
			return matcherMap['xh'];


		case 'xog':
			return matcherMap['xog'];


		case 'yav':
			return matcherMap['yav'];


		case 'yi':
			return matcherMap['yi'];


		case 'yo':
			return matcherMap['yo'];


		case 'yo-BJ':
			return matcherMap['yo-BJ'];


		case 'yue':
			return matcherMap['yue'];


		case 'yue-H':
			return matcherMap['yue-H'];


		case 'zgh':
			return matcherMap['zgh'];


		case 'zh':
			return matcherMap['zh'];


		case 'zh-Ha':
			return matcherMap['zh-Ha'];


		case 'zu':
			return matcherMap['zu'];


		case 'an':
			return matcherMap['an'];


		case 'ars':
			return matcherMap['ars'];


		case 'bho':
			return matcherMap['bho'];


		case 'dv':
			return matcherMap['dv'];


		case 'guw':
			return matcherMap['guw'];


		case 'in':
			return matcherMap['in'];


		case 'io':
			return matcherMap['io'];


		case 'iu':
			return matcherMap['iu'];


		case 'iw':
			return matcherMap['iw'];


		case 'jbo':
			return matcherMap['jbo'];


		case 'ji':
			return matcherMap['ji'];


		case 'jw':
			return matcherMap['jw'];


		case 'kaj':
			return matcherMap['kaj'];


		case 'kcg':
			return matcherMap['kcg'];


		case 'lij':
			return matcherMap['lij'];


		case 'mo':
			return matcherMap['mo'];


		case 'nah':
			return matcherMap['nah'];


		case 'no':
			return matcherMap['no'];


		case 'nqo':
			return matcherMap['nqo'];


		case 'nr':
			return matcherMap['nr'];


		case 'nso':
			return matcherMap['nso'];


		case 'ny':
			return matcherMap['ny'];


		case 'osa':
			return matcherMap['osa'];


		case 'pap':
			return matcherMap['pap'];


		case 'prg':
			return matcherMap['prg'];


		case 'sc':
			return matcherMap['sc'];


		case 'scn':
			return matcherMap['scn'];


		case 'sdh':
			return matcherMap['sdh'];


		case 'sh':
			return matcherMap['sh'];


		case 'sma':
			return matcherMap['sma'];


		case 'smi':
			return matcherMap['smi'];


		case 'smj':
			return matcherMap['smj'];


		case 'sms':
			return matcherMap['sms'];


		case 'ss':
			return matcherMap['ss'];


		case 'ssy':
			return matcherMap['ssy'];


		case 'st':
			return matcherMap['st'];


		case 'syr':
			return matcherMap['syr'];


		case 'tig':
			return matcherMap['tig'];


		case 'tl':
			return matcherMap['tl'];


		case 'tn':
			return matcherMap['tn'];


		case 'ts':
			return matcherMap['ts'];


		case 've':
			return matcherMap['ve'];


		case 'vo':
			return matcherMap['vo'];


		case 'wa':
			return matcherMap['wa'];


		default:
			return null;
		}
	}).filter((matcher) => {
		return !!matcher;	
	});
}

function firstStringLiteralFromIntlArguments(args) {
	if (!args) {
		return [];
	}

	if (args.length <= 0) {
		return [];
	}

	const firstArg = args[0];
	if (firstArg.type === 'StringLiteral') {
		return [firstArg];
	}

	if (firstArg.type !== 'ArrayExpression') {
		return [];
	}

	return firstArg.elements.filter((el) => {
		if (!el) {
			return false;
		}

		return el.type === 'StringLiteral';
	});
}
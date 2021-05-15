module.exports = function memberExpressionMatcher(memberExpression, matcherMap) {
	if (!memberExpression.property || !memberExpression.property.name) {
		return null;
	}

	switch ((memberExpression.property.name).slice(0, 2)) {
		
		case 'su':
			return matcherMap['su'];


		case 'ap':
			return matcherMap['ap'];


		case 'pr':
			return matcherMap['pr'];


		case 'af':
			return matcherMap['af'];


		case 'be':
			return matcherMap['be'];


		case 'cl':
			return matcherMap['cl'];


		case 'da':
			return matcherMap['da'];


		case 'ge':
			return matcherMap['ge'];


		case 'in':
			return matcherMap['in'];


		case 'ma':
			return matcherMap['ma'];


		case 'ne':
			return matcherMap['ne'];


		case 'pl':
			return matcherMap['pl'];


		case 're':
			return matcherMap['re'];


		case 'to':
			return matcherMap['to'];


		case 'fo':
			return matcherMap['fo'];


		case 'ha':
			return matcherMap['ha'];


		case 'va':
			return matcherMap['va'];


		case 'se':
			return matcherMap['se'];


		case 'is':
			return matcherMap['is'];


		case 'Da':
			return matcherMap['Da'];


		case 'Di':
			return matcherMap['Di'];


		case 'Li':
			return matcherMap['Li'];


		case 'Lo':
			return matcherMap['Lo'];


		case 'Nu':
			return matcherMap['Nu'];


		case 'Pl':
			return matcherMap['Pl'];


		case 'Re':
			return matcherMap['Re'];


		case 'co':
			return matcherMap['co'];


		case 'an':
			return matcherMap['an'];


		case 'as':
			return matcherMap['as'];


		case 'de':
			return matcherMap['de'];


		case 'di':
			return matcherMap['di'];


		case 'er':
			return matcherMap['er'];


		case 'ex':
			return matcherMap['ex'];


		case 'gr':
			return matcherMap['gr'];


		case 'lo':
			return matcherMap['lo'];


		case 'ta':
			return matcherMap['ta'];


		case 'ti':
			return matcherMap['ti'];


		case 'tr':
			return matcherMap['tr'];


		case 'wa':
			return matcherMap['wa'];


		case 'cu':
			return matcherMap['cu'];


		case 'he':
			return matcherMap['he'];


		case 'qu':
			return matcherMap['qu'];


		case 'vi':
			return matcherMap['vi'];


		case 'or':
			return matcherMap['or'];


		case 'no':
			return matcherMap['no'];


		case 'po':
			return matcherMap['po'];


		case 'sc':
			return matcherMap['sc'];


		default:
			return null;
	}
}

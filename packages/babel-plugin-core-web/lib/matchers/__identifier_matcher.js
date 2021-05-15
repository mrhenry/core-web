module.exports = function identifierMatcher(identifier, matcherMap) {
	switch ((identifier.name).slice(0, 2)) {
		
		case 'Ab':
			return matcherMap['Ab'];


		case 'Au':
			return matcherMap['Au'];


		case 'Bl':
			return matcherMap['Bl'];


		case 'Cu':
			return matcherMap['Cu'];


		case 'DO':
			return matcherMap['DO'];


		case 'Do':
			return matcherMap['Do'];


		case 'El':
			return matcherMap['El'];


		case 'HT':
			return matcherMap['HT'];


		case 'Ev':
			return matcherMap['Ev'];


		case 'In':
			return matcherMap['In'];


		case 'JS':
			return matcherMap['JS'];


		case 'Mu':
			return matcherMap['Mu'];


		case 'Re':
			return matcherMap['Re'];


		case 'Te':
			return matcherMap['Te'];


		case 'Us':
			return matcherMap['Us'];


		case 'Wi':
			return matcherMap['Wi'];


		case 'XM':
			return matcherMap['XM'];


		case 'at':
			return matcherMap['at'];


		case 'bt':
			return matcherMap['bt'];


		case 'co':
			return matcherMap['co'];


		case 'de':
			return matcherMap['de'];


		case 'do':
			return matcherMap['do'];


		case 'fe':
			return matcherMap['fe'];


		case 'He':
			return matcherMap['He'];


		case 'Bo':
			return matcherMap['Bo'];


		case 'ge':
			return matcherMap['ge'];


		case 'gl':
			return matcherMap['gl'];


		case 'lo':
			return matcherMap['lo'];


		case 'ma':
			return matcherMap['ma'];


		case 'Me':
			return matcherMap['Me'];


		case 're':
			return matcherMap['re'];


		case 'in':
			return matcherMap['in'];


		case 'pa':
			return matcherMap['pa'];


		case 'sc':
			return matcherMap['sc'];


		case 'Sh':
			return matcherMap['Sh'];


		case 'sh':
			return matcherMap['sh'];


		case 'Pa':
			return matcherMap['Pa'];


		case 'vi':
			return matcherMap['vi'];


		default:
			return null;
	}
}
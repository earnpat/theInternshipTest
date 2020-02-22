function digitHangman(digit, match) {

	let arrayNotMatch = []
	let numberNotMatch, countMatch = 0, countNotMatch = 0
	let ans = ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_']

	console.log(ans.join(' ')); // first line

	for (let i = 0; i < match.length; i++) {
		countNotMatch = 0
		for (let j = 0; j < digit.length; j++) {
			if (match[i] === digit[j]) {
				ans[j] = match[i];
				countMatch += 1
			} else {
				countNotMatch += 1
				if (countNotMatch === 12) {
					numberNotMatch = match[i];
					arrayNotMatch.push(numberNotMatch)
				}
			}
		}
		console.log(ans.join(' ') + ' ' + arrayNotMatch.join(' '));
	}

	console.log(countMatch);

}

digitHangman([4, 4, 3, 5, 6, 0, 6, 6, 0, 0, 4, 6], [3, 2, 1, 6, 0])
digitHangman([0, 6, 6, 3, 8, 4, 3, 2, 9, 6, 7, 8], [9, 0, 5, 6, 8])
digitHangman([9, 9, 4, 2, 2, 4, 7, 7, 9, 6, 6, 4], [1, 5, 8, 3, 0])
digitHangman([9, 9, 4, 2, 2, 4, 7, 7, 9, 6, 6, 4], [9, 6, 7, 2, 4])
digitHangman([2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3], [2, 3, 4, 5, 6])

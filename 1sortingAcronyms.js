function sortingAcronyms(word) {

	let uppercase = []

	if (word[0] === word[0].toUpperCase()) {
		uppercase.push(word[0])
	}

	for (let i = 1; i < word.length - 1; i++) {
		if (word[i] === ' ') {
			if (word[i + 1] === word[i + 1].toUpperCase()) {
				uppercase.push(word[i + 1])
			}
		}
	}

	console.log(uppercase.join(''));
	
}

sortingAcronyms('the United States of America') // USA
sortingAcronyms('The United States of America') // TUSA
sortingAcronyms('Carnegie Mellon University') // CMU
sortingAcronyms('The United States Of America') // TUSOA
sortingAcronyms('the united states of America') // A

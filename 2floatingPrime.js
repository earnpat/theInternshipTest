function floatingPrime(number) {

	let prime = false

	for (let i = 2; i <= Math.floor(Math.sqrt(number * 10)); i++) {
		if (Math.floor(number * 10) % i === 0) {
			prime = false
			break
		} else prime = true

	}

	if (prime === false) {
		for (let i = 2; i <= Math.floor(Math.sqrt(number * 100)); i++) {
			if (Math.floor(number * 100) % i === 0) {
				prime = false
				break
			} else prime = true
		}
	}

	if (prime === false) {
		for (let i = 2; i <= Math.floor(Math.sqrt(number * 1000)); i++) {
			if (Math.floor(number * 1000) % i === 0) {
				prime = false
				break
			} else prime = true
		}
	}

	if (prime === true) console.log('TRUE')
	if (prime === false) console.log('FALSE');

}

floatingPrime(1.43318374) // TRUE
floatingPrime(1.31234567) // TRUE
floatingPrime(1.6172746483) // FALSE

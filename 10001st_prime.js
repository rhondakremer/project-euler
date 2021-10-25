const nth_prime = (num) => {
    let counter = 1
    const primes = []
    while (primes.length !== num) {
        if (is_prime(counter)) {
            primes.push(counter)
        }
        counter += 2
    }
    return primes[num-1]
}

const is_prime = (num) => {
    if (num === 1 || num === 2 || num === 3) return true
    let sqrtNum = Math.sqrt(num)
    if (Math.floor(sqrtNum) === sqrtNum) return false
    for (let i = 2; i < sqrtNum; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

console.log(nth_prime(10001))

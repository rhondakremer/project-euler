const summation_of_primes = (upperLimit) => {
    let total = 0
    for (let i = 2; i < upperLimit; i++) {
        if (is_prime(i)) {
            total += i
        }
    }
    return total
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

console.log(summation_of_primes(2000000))
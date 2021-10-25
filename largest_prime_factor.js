const largest_prime_factor = (num) => {
    let sqrt = Math.ceil(Math.sqrt(num)) % 2 === 0 ? Math.ceil(Math.sqrt(num)) + 1 : Math.ceil(Math.sqrt(num))
    for (let i = sqrt; i > 1; i-=2) {
        if (num % i === 0 && is_prime(i)) return i
    }
}

const is_prime = (num) => {
    if (num % 5 === 0) return false
    let halfNum = Math.ceil(num/2)
    for (let i = halfNum - 1; i > 1; i--) {
        if (num % i === 0 && num !== i) {
            return false
        }
    }
    return true
}

console.log(largest_prime_factor(13195))
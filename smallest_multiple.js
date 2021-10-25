const smallest_multiple = () => {
    let currentLowest = 1000000000 // not based no logic, figure this out better
    let counter = currentLowest % 20 === 0 ? currentLowest : find_nearest_20_factor(currentLowest)

    while (counter >= 20) { // this can be higher, use your brain for that too
        if (is_divisible_by_all(counter)) {
            currentLowest = counter
        }
        counter -= 20
    }
    return currentLowest
}

const is_divisible_by_all = (num) => {
    for (let i = 2; i < 20; i++) {
        if (num % i !== 0) {
            return false
        }
    }
    return true
}

const find_nearest_20_factor = (num) => {
    while (num % 20 !== 0) {
        num -= 1
    }
    return num
}

console.log(smallest_multiple())

// what do we know?
// we know if it's dividible by 4, 6, 8, 10, then 2, 3, 4, 5 are also

// 11, 12, 13, 14, 15, 16, 17, 18, 19, 20

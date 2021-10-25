const sum_square_difference = (min, max) => {
    return (sum_of_squares(min, max) - square_of_sums(min, max))
}

const sum_of_squares = (min, max) => {
    let sum = 0
    // you could make this faster with that adding up numbers trick by the G guy
    for (let i = min; i <= max; i++) {
        sum += i
    }
    return sum * sum
}

const square_of_sums = (min, max) => {
    let sum = 0
    for (let i = min; i <= max; i ++) {
        sum += i * i
    }
    return sum
}

console.log(sum_square_difference(1, 100))

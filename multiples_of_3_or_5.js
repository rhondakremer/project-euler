const multiples_of_3_or_5 = (highNumber) => {
    let sum = 0
    for (let i = 0; i < highNumber; i++) {
        if (i % 3 === 0 || i % 5 === 0) sum +=i
    }
    return sum
}

console.log(multiples_of_3_or_5(1000))
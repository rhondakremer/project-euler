const even_fibonacci_numbers = () => {
    let num1 = 1
    let num2 = 2
    let sum = 0
    while (num2 < 4000000) {
        if (num2 % 2 === 0) sum += num2
        let temp2 = num2
        num2 += num1
        num1 = temp2
    }
    return sum
}

console.log(even_fibonacci_numbers())
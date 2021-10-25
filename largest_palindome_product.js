const largest_palindome_product = () => {
    // check all three digit numbers against each other up until they are the same
    let maxSum = 0
    let maxNums = []
    for (let i = 100; i <= 999; i++) {
        for (let j = 100; j <= 999; j++) {
            let sum = i * j
            if (sum > maxSum && sum.toString().split("").reverse().join("") === sum.toString()) {
                maxSum = sum
                maxNums = [i, j]
            }
        }
    }
    return maxSum
}

console.log(largest_palindome_product())
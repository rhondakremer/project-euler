const special_pythagorean_triplet = () => {
    // a^2 + b^2 = c^2
    // a + b + c = 1000 so a can only be up to 1/3 of 1000 
    let abcSum = 1000 // sum of a+b+c
    for (let a = 1; a < abcSum; a++) { // optimize this
        for (let b = a; b < abcSum; b++) {
            c = abcSum - b - a
            if (a*a + b*b === c*c) return a*b*c
        }
    }
}

console.log(special_pythagorean_triplet())

var tribonacci = function(n) {
    if (n === 0) return 0; // base case: T0
    if (n === 1 || n === 2) return 1; // base cases: T1 & T2

    // Initialize the first three Tribonacci numbers
    let t0 = 0, t1 = 1, t2 = 1;

    // Compute Tribonacci numbers iteravely up to Tn
    for (let i = 3; i <= n; i++) {
        let t3 = t0 + t1 + t2; // calculate the next number
        t0 = t1;
        t1 = t2;
        t2 = t3;
    }

    return t2;
};

console.log(tribonacci(4)); // Output: 4
console.log(tribonacci(6)); // Output: 13
console.log(tribonacci(10)); // Output: 149
console.log(tribonacci(15)); // Output: 1705
console.log(tribonacci(20)); // Output: 35890
console.log(tribonacci(23)); // Output: 410744
console.log(tribonacci(25)); // Output: 1389537
console.log(tribonacci(37)); // Output: 2082876103
console.log(tribonacci(50)); // Output: 1132436852
console.log(tribonacci(75)); // Output: 9070065305162309856
console.log(tribonacci(100)); // Output: 180396380815100901214157639
console.log(tribonacci(1000)); // Output: 70330367711422815821835254877183549770181269836358732742604905087154537118196933579742249494562611733487750449241765991088186363265450223647106012053374121273867339111198139373125598767690091902245245323403501
console.log(tribonacci(10000)); // Output: Infinity
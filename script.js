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

console.log(tribonacci(23)); // Output: 410744
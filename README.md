## Explanation:

1. Base Cases:
    * T0=0T0​=0
    * T1=1T1​=1
    * T2=1T2​=1

2. Iterative Calculation:
    * Start with T0,T1,T2T0​,T1​,T2​.
    * Use a loop to calculate T3T3​ to TnTn​ iteratively using the formula:
        Tn+3=Tn+Tn+1+Tn+2
    * Shift the values of T0,T1,T2T0​,T1​,T2​ for each iteration to compute the next number efficiently without extra space.

The Tribonacci sequence is a generalization of the well-known Fibonacci sequence. Instead of summing the two previous terms to get the next term (as in the Fibonacci sequence), the Tribonacci sequence sums the three previous terms.
Definition:

The Tribonacci sequence Tn​ is defined as:

    T0=0 (starting value for n=0),
    T1=1 (starting value for n=1),
    T2=1 (starting value for n=2),
    For n≥3:
    Tn=Tn−1+Tn−2+Tn−3

This means that each number in the sequence (starting from T3​) is the sum of the three preceding numbers.

Example Sequence:

The first few terms of the Tribonacci sequence are:
T0 = 0, T1 = 1, T2 = 1, T3 = 2, T4 = 4, T5 = 7, T6 = 13, T7 = 24, T8 = 44, T9 = 81, T10 = 149

Visual Representation:

If we compute TnTn​ step by step:

    T0 = 0,
    T1 = 1,
    T2 = 1,
    T3 = T2 + T1 + T0 = 1 + 1 + 0 = 2,
    T4 = T3 + T2 + T1 = 2 + 1 + 1 = 4,
    T5 = T4 + T3 + T2 = 4 + 2 + 1 = 7,
    T6 = T5 + T4 + T3 = 7 + 4 + 2 = 13,
    And so on.

Relationship to Fibonacci:

    Fibonacci: Fn = Fn − 1 + Fn − 2 (sum of two previous terms).
    Tribonacci: Tn = Tn − 1 + Tn − 2 + Tn − 3 (sum of three previous terms).

The Tribonacci sequence grows faster than the Fibonacci sequence due to the additional term in the sum.

Applications:

While less common than the Fibonacci sequence, Tribonacci numbers can be applied in:

    Mathematical modeling: Problems where three previous states influence the next state.
    Algorithm design: Generalizing recurrence relations.
    Recreational mathematics: As an extension of Fibonacci numbers for exploration and study.
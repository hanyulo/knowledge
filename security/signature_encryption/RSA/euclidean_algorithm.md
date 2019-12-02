## (Regular) Euclidean Algorithm

### Overview
* Goal: given r0, r1 -> find Greatest Common Division
* example: gcd(27, 21) => 3


### Solutions

### list all divisions
* 27 = 3, 3, 3
* 21 = 3, 7

* problem
    * can not deal with large number

### Reductive Algorithm
* larger number -> smaller number
* gcd(r0, r1) === gcd(r0 mode r1, r1);
    * proof: https://www.cnblogs.com/ider/archive/2010/11/16/gcd_euclid.html
* example
    * 27, 21
        * mathematics
            1. gcd(27, 21)
            2. gcd(21, 6)
            3. gcd(6, 3) -> the remainder === 0 (algorithm is done) -> 3
        * algorithm
            1. 27 = 1 * 21 + 6 (r2)
            2. 21 = 3 * 6 + 3 (r3 === gcd)
            3 6 = 3 * 2 + 0 (r4)
    * 973, 301
        * mathematics
            1. gcd(973, 301)
            2. gcd(301, 70)
            3. gcd(70, 21)
            4. gcd(21, 7) === 0, 7 === gcd
        * Algorithm
            1. 973(r1) = 3 * 301(r2) + 70 (r3)
            2. 301 = 4 * 70 + 21 (r4)
            3. 70 = 3 * 21 + 7 (r5)
            4. 21 = 7 * 3

## Extended Euclidean Algorithm
* given r0, r1
* goal: gcd(r0, r1) = s * r0 + t * r1

### Idea
* gcd(r0, r1) <=> r0 = q1 * r1 + r2 <=> **r2 = s2 * r0 + t2 * r1 (How?)**
* gcd(r1, r2) <=> r1 = q2 * r2 + r3 <=> r3 = s3 * r0 + t3 * r1
* ...
* gcd(rl-2, rl-1) <=> rl-2 = ql-1 * rl-1 + rl <=> rl = sl * r0 + tl * r1
    * rl === gcd(r0, r1) === sl * r0 + tl * r1 === s * r0 + t * r1

###  **r2 = s1 * r0 + t1 * r1 (How?)**

| Iteration Counts | Quotient/Remainder  | Extended EA |
| --- | --- | --- |
| 2 | 973 = 3 * 301 + 70 | 70 = (1) * 973 + (-3) * 301 |
| 3 | 301 = 4 * 70 + 21 | 21 <br/> = 301 - 4 * 70 <br/> = 301 - 4 * { 1 * 973 + (-3) * 301 } <br/> = (-4) * 973 + (13) * 301 |
| 4 | 70 = 3 * 21 + 7 | 7 <br/> = 70 - 3 * 21 <br/> = (1) * 973 + (-3) * 301 - 3 * { (-4) * 973 + (13) * 301 } <br/> = (13) * 973 + (-42) * 301 |
| 5 | 21 = 7 * 3 |

* 7 === gcd(r0, r1) = (13) * 973 + (-42) * 301  = s * r0 + t * r1

* Iteration Demo
    * left hand
        * r(i) = r(i-2) - q(i-1) * r(i-1)
    * right hand
        * r(i-2) = s(i-2) * r0 + t(i-2) * r1
        * r(i-1) = s(i-1) * r0 + t(i-1) * r1
        * r(i) = s * r0 + t * r1
    * combine
        * r(i) = s(i-2) * r0 + t(i-2) * r1 - q(i-1) * {s(i-1) * r0 + t(i-1) * r1}
        * r(i) = {s(i-2) - q(i-1) * s(i-1)} * r0 + { t(i-2) - q(i-1) * t(i-1) } * r1
        * r(i) =             si           * r0 +        ti      *           r1

* Iteration Demo ==> Recursive Formulae
    * S(i) = S(i-2) - Q(i-1) * S(i-1) , i >=2
    * T(i) = T(i-2) - Q(i-1) * T(i-1)

* Initial Value (need to check the book)
    * S0 = 1, S1 = 0
    * T0 = 0, T1 = 1


## Main Application of Extended Euclidean Algorithm
* computing of inverse mod n
* a ^ -1 ≡ x mod n
    * a^(-1) * a ≡ 1 mod n
        * with a proof
        * gcd(n, a) = 1 = s * n + t * a
            * [Inverse Modular](https://www.youtube.com/watch?v=fz1vxq5ts5I)
            * 17 * X ≡ 1 (mod 43)
                * x = 17^-1
            * t === is the inverse of r1 (mod r0)

## Note
* I stop at 1:12:23

## Refs
* [Christof Paar](https://www.youtube.com/watch?v=fq6SXByItUI)

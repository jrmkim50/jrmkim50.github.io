# Bit Strings
## Explanation
This problem is really asking you what is 2^n modulo 10^9 + 7. The difficult part 
about this problem is that you need to account for overflow. n goes from 1 to 10^6, 
so I handled the overflow by taking the modulo each time I raised to another power 
of 2. A rule about modular arithmetic is that (a * b) mod n is equal to (a mod n) * (b mod n).

One note: You could have done bit shifts, but it seemed a little complicated to do the 
shift and keep track of the the remainders.
## Code
    using namespace std;
    #include <iostream>
    #define ll long long
    
    int main()
    {
        ll n;
        cin >> n;
        ll result = 1;
        for (ll i = 0; i < n; i++) {
            result *= 2;
            result %= 1000000007;
        }
        cout << result << endl;
        return 0;
    }
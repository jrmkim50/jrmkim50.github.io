# Digit Queries
## Explanation
This was quite the problem 🤡. In my opinion, the key to solving this problem is to 
figure out which power of 10 the desired position lies in. Once you know that the 
position lies in between say 1000 and 9999, you can figure out what digit lies at the 
desired position more easily because you are working with numbers that are of the same 
length.

To implement this strategy, I started counting upwards from 0. I increased my count by a 
power of 10 each time. Once I counted more than the desired number of digits, I knew that 
I was at the upper bound of my power of 10. From there, I figured out how many digits I 
had overcounted by, and then, I used that difference to find what number contained the 
desired position. Then, I took a difference one more time to figure out which digit of 
that number I should print.

This problem had many opportunities for making small calculation mistakes. My suggestion 
is to try out a few examples, and try to figure out a common calculation between those examples.
## Code
    #include <iostream>
    #include <string>
    #include <math.h>
    #define ll long long

    using namespace std;

    ll numDigitsForPlace(ll place) {
        ll numbersInPlace = place * 10 - place;
        ll numberDigitsForPlace = (ll)log10(place) + 1;
        ll total = numberDigitsForPlace * numbersInPlace;
        return total;
    }

    int main()
    {
        ll q;
        cin >> q;
        for (ll i = 0; i < q; i++) {
            ll position;
            cin >> position;
            ll currPlace = 1;
            ll currNumber = 0;
            ll currPosition = 0;
            while (currPosition < position) {
                currNumber += currPlace * 9;
                currPosition += numDigitsForPlace(currPlace);
                currPlace *= 10;
            }
            if (currPosition != position) {
                ll diff = currPosition - position;
                ll digitsForPlace = (ll)log10(currPlace);
                ll numbersOff = diff / digitsForPlace;
                currNumber -= numbersOff;
                currPosition -= numbersOff * digitsForPlace;
                string number = to_string(currNumber);
                diff = currPosition - position;
                cout << number[number.size() - diff - 1] << endl;
            } else {
                // Print 9 because if your currPosition equals position, you are at a number
                // that only has 9s.
                cout << 9 << endl;
            }
        }

        return 0;
    }
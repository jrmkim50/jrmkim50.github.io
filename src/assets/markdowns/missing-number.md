# Missing Number

## Explanation
We are given n-1 numbers that are between 1 and n. We need to find the number between 1 and n  
that is not present. We start by calculating the sum of all of the numbers between 1 and n.  
Then, we read each number that is inputted and subtract that from our sum. The leftover sum  
at the end has to be the missing number.

## Code
    #include <iostream>
    #define ll long long
    using namespace std;

    int main()
    {
        ll n;
        cin >> n;
        ll totalSum = (n * (n+1)) / 2;
        for (int num = 0; num < n - 1; num++) {
            ll newNum;
            cin >> newNum;
            totalSum -= newNum;
        }
        cout << totalSum << endl;
        return 0;
    }

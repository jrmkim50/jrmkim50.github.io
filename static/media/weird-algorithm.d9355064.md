# Weird Algorithm

## Explanation
This is a simulation problem. If the number is even, divide by 2; if the number is odd,  
multiply by 3 and add 1. Do this until the number is equal to 1 and print each step of the process.  

## Code
    #include <iostream>
    #define ll long long
    using namespace std;

    int main()
    {
        ll n;
        cin >> n;
        while (n != 1) {
            cout << n << " ";
            if (n % 2 == 0) {
                n /= 2;
            } else {
                n = n * 3 + 1;
            }
        }
        cout << 1 << endl;
        return 0;
    }
# Permutations
## Explanation
This problem can be solved with some casework. If the number is 1, the solution is just 1. 
If the number is less than 3, we cannot find a "beautiful" permutation. However, if the 
number is above 3, we can place all of the even numbers between 1 and n together and 
then all of the odd numbers together.  

We do the even numbers first and then the odd to accomodate the case where n equals 4. 
If we do 1 3 2 4, then the 3 and 2 are consecutive numbers. But, 2 4 1 3 works fine.

## Code
    #include <iostream>

    using namespace std;

    int main()
    {
        int n;
        cin >> n;
        if (n == 1) { 
            cout << 1 << endl;
        } else if (n <= 3) {
            cout << "NO SOLUTION" << endl;
        } else {
            for (int i = 2; i <= n; i+=2) {
                cout << i << " ";
            }
            for (int i = 1; i <= n; i+=2) {
                cout << i << " ";
            }
            cout << endl;
        }

        return 0;
    }
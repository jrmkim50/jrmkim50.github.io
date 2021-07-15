# Two Sets
## Explanation
This problem was an interesting one. The first step is to determine if it even is possible to make  
two equal sums from the numbers 1 to n. The formula for the sum of n consecutive numbers is  
(n_first + n_last) * n / 2. In this case, our numbers go from 1 to n so we have (1 + n) * n / 2.  
To prevent overflow, we do the division first (careful for integer division!). If our sum is  
divisible by 2, then we will be able to split the numbers into even sums. Otherwise, we know we  
cannot. Now, for the case where we have an even sum, do we know for sure that we  
can split the numbers up evenly? I believe that we do. 

I determined that fact by noticing this: once you find k distinct numbers from 1 to n that sum to  
(1 + n) * n / 4, the rest of the numbers from 1 to n will also sum (1 + n) * n / 4. If you try to  
create this sum by choosing numbers in a decreasing order (so your first pick number is the  
largest one and your last pick is the smallest one), then I do not see how you cannot end up with  
desired sum. Unfortunately, I do not have a rock solid explanation, but that approach seemed to   work.

## Code
    #include <iostream>
    #include <vector>
    #define ll long long

    using namespace std;

    void print_vec(vector<ll> v) {
        cout << v.size() << endl;
        for (vector<ll>::iterator it = v.begin(); it != v.end(); it++) {
            cout << *it << " ";
        }
        cout << endl;
    }

    int main()
    {
        ll n;
        cin >> n;
        ll sum = n % 2 == 0 ? (n/2) * (n+1) : (n+1)/2*n;
        ll halfSum = sum / 2;
        ll leftSum = 0, rightSum = 0;
        vector<ll> a, b;
        if (sum % 2 == 0) {
            for (int i = n; i > 0; i--) {
                if (leftSum + i <= halfSum) {
                    a.push_back(i);
                    leftSum += i;
                } else {
                    b.push_back(i);
                    rightSum += i;
                }
            }
            cout << "YES" << endl;
            print_vec(a);
            print_vec(b);
        } else {
            cout << "NO" << endl;
        }

        return 0;
    }
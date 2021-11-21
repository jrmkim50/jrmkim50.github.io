# Trailing Zeros
## Explanation
This problem involved finding the number of trailing zeroes in a factorial. 
To find this number, we need to calculate the total number of factors of five 
in each term we multiply. We do this calculation because for every factor of 
five, there is a factor of two lying around (and there are more factors of two 
than of five). Since 5 * 2 = 10, every factor of five will contribute one zero. 
If a term has multiple factors of five, it will contribute multiple zeroes. 

The first approach would be to iterate through the numbers from 1 to n and see 
how many times you can evenly divide the number by 5. At best, this approach 
takes O(n). We can do better! Another approach is to keep dividing n by 5 until 
it equals 0. We do this because when you divide by 5 the first time, you are 
essentially finding how many terms in the factorial have a single factor of five. 
The next time you divide by 5, you are looking for those terms with an additional 
factor of 5. You repeat this process, and you can get your answer.
## Code
    #include <iostream>
    #define ll long long
    using namespace std;

    int main()
    {
        ll n;
        cin >> n;
        ll num_zeroes = 0;
        while (n > 0) {
            num_zeroes += (n / 5);
            n /= 5;
        }
        cout << num_zeroes << endl;
    
        return 0;
    }
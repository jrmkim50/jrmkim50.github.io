# Increasing Array
## Explanation
For this problem, we just need to iterate through the array of numbers. For each 
number, compare it with the one that comes before it (if it exists) and add on the 
number of times we need to increment the number to make it at least equal to the 
previous element. Make sure to use a datatype that is large enough to accomodate 
situations where many increments are needed.
## Code
    #include <iostream>
    #define ll long long

    using namespace std;

    int main()
    {
        ll n;
        cin >> n;
        ll nums[n];
        for (int i = 0; i < n; i++) {
            cin >> nums[i];
        }
        ll moves = 0;
        for (int i = 1; i < n; i++) {
            if (nums[i-1] > nums[i]) {
                moves += (nums[i-1] - nums[i]);
                nums[i] = nums[i-1];
            }
        }
        cout << moves << endl;

        return 0;
    }
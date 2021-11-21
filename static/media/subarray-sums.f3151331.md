# Subarray Sums
## Explanation
My first approach to solving this problem was to create a prefix sum array. I looped 
through every possible start and end to for the prefix sum array to find which subarrays 
summed to the target sum. Though correct, it was too slow.

A quick side note. Here are my thoughts on prefix sums: given n items, our prefix sum 
array would be of length n+1. Each item and its corresponding index of the prefix sum 
array can be thought of as the sum of all the items before that index in the array of 
items. For instance, the 5th prefix sum index represents the sum of all the items before 
the 5th index in the array of items. Here are some edge cases. The 0th prefix sum index's 
value would be 0 because there are no items to sum before the 0th index. The nth prefix 
sum index's value would be the sum of all of the items because there are only n items in 
the original array.

So, how to get a better solution? I did not come up with this idea, but I found it to be 
very clever. The idea is to keep a hashmap of the number of prefixes of a specific sum. 
As we iterate through the array, we can check for the number of prefixes that equal the 
sum of the first i elements minus the target sum. Since all of these prefixes are before 
our current element, we can get the target sum using any of those prefixes as the starting 
point of our subarray. At the end of each iteration, we will increment the number of 
prefixes that equal our current prefix.

## Code
    #include <iostream>
    #include <map>
    #define ll long long
    using namespace std;

    int main()
    {
        ll n, x;
        cin >> n >> x;
        int nums[n];
        ll sums[n+1] = {0};
        map<ll, int> num_prefixes;
        num_prefixes[0] = 1;
        ll num_arrs = 0;
        for (int i = 0; i < n; i++) {
            cin >> nums[i];
            sums[i+1] = nums[i] + sums[i];
            num_arrs += num_prefixes[sums[i+1] - x];
            num_prefixes[sums[i+1]]++;
        }
        cout << num_arrs << endl;

        return 0;
    }

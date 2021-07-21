# Apple Division
## Explanation
I used recursion to solve this problem. You can find the minimum difference by comparing the  
minimum difference if you placed an apple in one pile vs the other pile. If you keep repeating  
this strategy, you will find the difference.
## Code
    #include <iostream>
    #include <vector>
    #include <queue>
    #include <cmath>
    #include <climits>
    #define ll long long

    using namespace std;

    ll sum_vec(vector<ll> vec) {
        ll sum = 0;
        for (ll num : vec) {
            sum += num;
        }
        return sum;
    }

    ll search(queue<ll> nums, vector<ll> left, vector<ll> right) {
        if (nums.empty()) {
            return abs(sum_vec(left) - sum_vec(right));
        }
        ll number = nums.front();
        nums.pop();
        left.push_back(number);
        ll possibleDiff1 = search(nums, left, right);
        left.erase(left.end() - 1);
        right.push_back(number);
        ll possibleDiff2 = search(nums, left, right);
        right.erase(right.end() - 1);
        return min(possibleDiff1, possibleDiff2);
    }

    int main()
    {
        ll n;
        cin >> n;
        queue<ll> nums;
        vector<ll> left, right;
        for (ll i = 0; i < n; i++) {
            ll num;
            cin >> num;
            nums.push(num);
        }
        cout << search(nums, left, right) << endl;
        
        return 0;
    }
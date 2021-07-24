# Distinct Numbers
## Explanation
To solve this problem, you can sort the array of numbers. Once sorted, you can keep track of the  
previous number. Once you encounter a number that is different from the previous number, you will  
know that you have found a new number.
## Code
    #include <iostream>
    #include <algorithm>
    #include <vector>

    using namespace std;

    int main()
    {
        int n;
        cin >> n;
        vector<int> nums;
        for (int i = 0; i < n; i++) {
            int num;
            cin >> num;
            nums.push_back(num);
        }
        sort(nums.begin(), nums.begin() + nums.size());
        int numUnique = 0, prevNum = -1;
        for (int num : nums) {
            if (num != prevNum) {
                prevNum = num;
                numUnique++;
            }
        }
        cout << numUnique << endl;
        return 0;
    }
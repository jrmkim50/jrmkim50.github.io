# Repetitions
## Explanation
For this problem, we will iterate through the string. We will keep track of the 
maximum length substring consisting of the same character. While iterating through 
the string, we will also how many times our current character was repeated 
consecutively. When we see a new character, we will start a new substring and 
update the maximum substring length accordingly.

## Code
    #include <iostream>

    using namespace std;

    int main()
    {
        string s;
        cin >> s;
        char curr = '.';
        int maxLength = 0;
        int currLength = 0;
        for (int i = 0; i < s.length(); i++) {
            if (curr != s[i]) {
                maxLength = maxLength > currLength ? maxLength : currLength;
                curr = s[i];
                currLength = 1;
            } else {
                currLength++;
            }
        }
        maxLength = maxLength > currLength ? maxLength : currLength;
        cout << maxLength << endl;
        return 0;
    }

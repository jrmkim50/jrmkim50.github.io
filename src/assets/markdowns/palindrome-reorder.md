# Palindrome Reorder
## Explanation
In this problem, we iterate through the string in order to decide if we can create a palindrome  
from it. While iterating through the string, I maintain a set of characters to add, a left  
pointer, and a right pointer. If the current character I am on is in the set, then I will add both  
of those characters to an array of characters that has the same size as the original string.  
One character will go into the left pointer's position and the other will go into the right  
character's position. Using this left and right position lets me place the characters in such a  
way that they mirror each other. Then, I will remove that character from the set, increment my  
left pointer, and decrement my right pointer. I will keep iterating in the same fashion. 

Once I finish, I will check if there are any character's left in my set. If there is just one  
character in the set, and my left and right pointers are at the same position, then I will place  
that character in the middle of the string. If there are more characters remaining, then I do not  
have a palindrome. Alternatively, my set is now empty, so I will print the character array.
## Code
    #include <iostream>
    #include <string>
    #include <set>
    using namespace std;
    
    int main()
    {
        string s;
        cin >> s;
        char c[s.length()];
        set<char> toAdd;
        int leftCurr = 0;
        int rightCurr = s.length() - 1;
        for (int i = 0; i < s.length(); i++) {
            if (toAdd.find(s[i]) != toAdd.end()) {
                c[leftCurr] = s[i];
                c[rightCurr] = s[i];
                toAdd.erase(s[i]);
                leftCurr++;
                rightCurr--;
            } else {
                toAdd.insert(s[i]);
            }
        }
        if (toAdd.size() == 1 && leftCurr == rightCurr) {
            c[leftCurr] = *toAdd.begin();
            toAdd.erase(*toAdd.begin());
        }
        if (toAdd.empty()) {
            for (char i : c) 
                cout << i;
            cout << endl;
        } else {
            cout << "NO SOLUTION" << endl;
        }
        return 0;
    }
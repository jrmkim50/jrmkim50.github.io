# Creating Strings
## Explanation
The first thing that I noticed was that the maximum string length was 8. You can do a 
complete search and generate all possible strings in O(n!) time. Since we are doing a 
complete search, I decided to use recursion. 

My recursive function takes three arguments: a string of characters to choose from, a 
string that will eventually be a permutation of the original string, and a set of 
permuted strings. In C++, sets store items in sorted order, so that data structure will 
allow us to print permutations in alphabetical order. We can make new permutations with 
the following approach. First, remove one character from the string of characters and 
attach it to the permutation string. Then, create permutations with the remaining characters 
and concatenate the first character with each smaller-sized permutation. Repeat this process 
for each character.

## Code
    #include <iostream>
    #include <algorithm>
    #include <vector>
    #include <set>

    using namespace std;

    void sortedSearch(string s, string result, set<string>& toPrint) {
        if (s.size() == 0) {
            toPrint.insert(result);
            return;
        }
        for (int idx = 0; idx < s.size(); idx++) {
            string newString = result + s.substr(idx, 1);
            string remaining = s.substr(0, idx) + s.substr(idx + 1, s.size() - idx - 1);
            sortedSearch(remaining, newString, toPrint);
        }
    }

    int main()
    {
        string s;
        cin >> s;
        set<string> toPrint;
        sortedSearch(s, "", toPrint);
        cout << toPrint.size() << endl;
        for (set<string>::iterator it = toPrint.begin(); it != toPrint.end(); it++) {
            cout << *it << endl;
        }
        return 0;
    }
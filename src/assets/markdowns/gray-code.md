# Gray Code
## Explanation
I started this problem by trying a few examples. When n = 1, a possible gray code sequence is 0 1.  
When n = 2, a gray code sequence is 00 01 11 10. These sequences looked like they were created by  
reversing the previous sequence in some way. I thought about this idea for a bit, and then I  
realized that if you combine a gray code sequence with its reversed version, you could easily make  
the next gray code sequence.

If we take n = 2, for instance, we get 00 01 11 10 10 11 01 00. Now, if we attach a 0 to the first  
half's elements and a 1 to the last half's elements, we get the gray code sequence for n = 3: 
000 001 011 010 110 111 101 100. 

By combining two graycode sequences, we ensure that the first half of the new sequence and the  
second half of the sequence remain valid graycode sequences (their hamming distances stays at 1).  
We use the reversed sequence because the middle two elements will then be identical. When we  
attach a 0 to the first half's elements and a 1 to the second half's elements, the middle two  
elements will now have a hamming distance of 1. Now, every element has a hamming distance of 1.
## Code
    #include <iostream>
    #include <vector>

    using namespace std;

    int main()
    {
        int n;
        cin >> n;
        vector<string> codes = { "0", "1" };
        for (int i = 1; i < n; i++) {
            vector<string> firstHalf = codes;
            for (int j = 0; j < codes.size(); j++) {
                firstHalf[j] = "0" + firstHalf[j];
            }
            vector<string> secondHalf = codes;
            for (int j = 0; j < codes.size(); j++) {
                secondHalf[j] = "1" + secondHalf[j];
            }
            codes = {};
            for (vector<string>::iterator it = firstHalf.begin(); it != firstHalf.end(); it++) {
                codes.push_back(*it);
            }
            for (vector<string>::reverse_iterator it = secondHalf.rbegin(); it != secondHalf.rend(); it++) {
                codes.push_back(*it);
            }
        }
        for (int i = 0; i < codes.size(); i++) {
            cout << codes[i] << endl;
        }

        return 0;
    }
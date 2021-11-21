# Towers of Hanoi
## Explanation
Let's first start with an obvious case. If we have no disks, then there is nothing we need 
to do. Now, let's say that we have n disks. Well, if we moved the top n-1 disks to the middle 
tower, then we could move the largest disk to the rightmost tower. Then, the problem becomes 
moving the n-1 disks from the middle tower to the rightmost tower. As you can see, we can 
solve this problem by solving a smaller problem, which hints at recursion.

I like to think of recursive solutions like a magic box. If I tell the function to do 
something, it will do it. For this problem, I treated my recursive function as something 
that would move an arbitrary number of disks given its starting location, destination, and 
the leftover tower. Using this function, I had it start by moving the top n-1 disks fromt 
the starting location to the leftover tower. This will happen through the magic of recursion. 
Then, I moved the remaining disk to the destination. Finally, I moved the n-1 disks from the 
leftover tower to the actual destination. To make sure that the recursion actually stops, I 
added a base case: when you have 0 disks, do nothing. 
## Code
    #include <iostream>
    #include <vector>
    #define START 1
    #define MIDDLE 2
    #define END 3

    using namespace std;

    void solve(int disks, int start, int middle, int dest, vector<string>& moves) {
        if (disks == 0) {
            return;
        }
        solve(disks - 1, start, dest, middle, moves);
        string move = to_string(start) + " " + to_string(dest);
        moves.push_back(move);
        solve(disks - 1, middle, start, dest, moves);
    }

    int main()
    {
        int n;
        cin >> n;
        vector<string> moves;
        solve(n, START, MIDDLE, END, moves);
        cout << moves.size() << endl;
        for (int move = 0; move < moves.size(); move++) {
            cout << moves[move] << endl;
        }
        return 0;
    }
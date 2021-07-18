# Coin Piles
## Explanation
Each move, you are removing 3 coins from the pile. If the total number of coins is not a multiple  
of 3, you cannot remove every coin using the described moves. Since you remove 3 coins each time,  
you need to take (a + b) / 3 moves. That means that the minimum number of coins that a pile can  
have is (a + b) / 3. If both piles have at least (a + b) / 3 coins, then you will be able to  
remove every coin. The piles will not run out because we can always alternate the way we remove  
coins so that we remove 2 coins from the larger pile and 1 coin from the smaller pile.
## Code
    #include <iostream>
    using namespace std;

    int main()
    {
        int t, a, b;
        cin >> t;
        
        for (int i = 0; i < t; i++) {
            cin >> a >> b;
            if ((a + b) % 3 != 0) {
                cout << "NO" << endl;
            } else {
                int num_removals = (a + b) / 3;
                if (a >= num_removals && b >= num_removals) {
                    cout << "YES" << endl;
                } else {
                    cout << "NO" << endl;
                }
            }
        }
    
        return 0;
    }
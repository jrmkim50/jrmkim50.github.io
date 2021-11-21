# Two Knights
## Explanation
For this problem, we need to find how many ways we can place two knights on a nxn 
chessboard, so they do not attack each other. That number is equal to (n x (n-1)) / 2, 
or nC2, subtracted by 2 times the number of 2x3 rectangles and 3x2 rectangles in the 
nxn board. We subtract 2 times the number of 2x3 and 3x2 rectangles because each of 
those rectangles contains 2 places where you could not place two knights (the opposite 
corners).

One tough thing about this problem is that the order you place the knights does not 
matter. If you place a knight at position A and place another knight at position B, 
swapping those knights will not create another invalid way to place the knights. The 
problem just asks for how many ways you could place 2 knights on a chessboard. If you 
find one way to place two knights on a chessboard then you found just that one way.
## Code
    #include <iostream>
    #define ll long long
    using namespace std;
    int main()
    {
        ll k;
        cin >> k;
        for (int n = 1; n <= k; n++) {
            ll squared = n*n;
            ll half = squared % 2 == 0 ? squared / 2 : (squared - 1) / 2;
            ll otherHalf = half * 2 == squared ? squared - 1 : squared;
            ll numPositions = half * otherHalf;
            ll num2x3 = (n-1)*(n-2)*2;
            ll num3x2 = (n-2)*(n-1)*2;
            cout << numPositions - num2x3 - num3x2 << endl;
        }
        return 0;
    }
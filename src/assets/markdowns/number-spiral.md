# Number Spiral
## Explanation
This was quite the problem. The way I solved this was by noticing that we can split the spiral  
into concentric nxn squares. We start with a 1x1 square that is located at the top left corner  
of the infinite grid and then move onto a 2x2 square whose top left corner is at the top left  
corner of the infinite grid. Each nxn square's top left corner is at the top left corner of the  
infinite grid. 

For each nxn square, we also notice that the value equal to nxn is located either at the top right  
corner or the bottom left corner of the square. Furthermore, the values of the bottom and right  
edges of the square range from (n-1)x(n-1)+1 to the previously mentioned perfect square.

So given a row and a column, I would first figure out which nxn square it lies on. With this  
square, I would then figure out the perfect squares that the bottom and right edges of the nxn  
square encompasses. If the square has an even number of columns, then the (n-1)x(n-1)+1 value  
lies on the top right corner. If the square has an odd number of columns, then (n-1)x(n-1)+1  
lies on the bottom left corner. 

If our square has an even number of columns, we can find out what value is at location (row, col)  
by adding row - 1 to (n-1)x(n-1)+1. If our row is equal to n, then we will add square - col. To  
see why we do this, picture how we go from the top right corner to a location (row, col) on the  
same nxn square.

Similarly, if our square has an odd number of columns, we can find out the value at location  
(row, col) by doing the calculation shown in the code below.

## Code
    #include <iostream>
    #define ll long long 
    using namespace std;
    
    int main()
    {
        ll t, row, col;
        cin >> t;
        for (ll i = 0; i < t; i++) {
            cin >> row >> col;
            ll square = row > col ? row : col;
            ll end = square * square;
            ll start = (square - 1) * (square - 1) + 1;
            ll number;
            if (square % 2 == 0) {
                number = start + row - 1;
                if (row == square) {
                    number += square - col;
                }
            } else {
                number = end - row + 1;
                if (row == square) {
                    number -= square - col;
                }
            }
            cout << number << endl;
        }
    
        return 0;
    }
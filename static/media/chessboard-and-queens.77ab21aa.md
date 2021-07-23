# Chessboard and Queens
## Explanation
This problem can be solved with a complete search. For this search, I used recursion. The  
recursive strategy goes like this: place one queen in the first column of the first row and find  
the total number of ways to place 7 queens in the remaining positions. Repeat this for the other  
columns in the first row and sum all of those totals together. The recursive algorithm is only  
half of the solution though. In order to create an efficient solution, you need to find an  
efficient way to figure out whether you can place a queen in a certain position.

You can find this information by maintaining an array of statuses: one for the columns, another  
for the diagonals that slant right (they slant like this: / ), another for the diagonals that  
slant left (like \ ), and an array of strings that marks which positions have been taken. If you  
want to find whether a position is available, you can check that the corresponding column is  
available, that the diagonals it touches are avialbale, and that the actual position on the board  
is available. 

With this information, you can implement the recursive strategy as described.
## Code
    #include <iostream>
    #define NUM_COLS 8

    using namespace std;

    int placeQueens(int numQueens, int row, int cols[],
                    int rightDiagonal[], int leftDiagonal[], 
                    string board[]) {
        if (numQueens == 0) {
            return 1;
        }
        int total = 0;
        for (int i = 0; i < NUM_COLS; i++) {
            if (board[row][i] == '.' && 
                !cols[i] && 
                !rightDiagonal[i+row] && 
                !leftDiagonal[i-row+7]) {
                board[row][i] = '*';
                rightDiagonal[i+row] = 1;
                leftDiagonal[i-row+7] = 1;
                cols[i] = 1;
                total += placeQueens(numQueens - 1, row + 1, 
                                     cols, rightDiagonal, 
                                     leftDiagonal, board);
                board[row][i] = '.';
                rightDiagonal[i+row] = 0;
                leftDiagonal[i-row+7] = 0;
                cols[i] = 0;
            }
        }
        return total;
    }

    int main()
    {
        string board[8];
        int cols[8] = { 0, 0, 0, 0, 0, 0, 0, 0 };
        int rightDiagonal[15] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
        int leftDiagonal[15] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
        for (int i = 0; i < 8; i++) {
            cin >> board[i];
        }
        cout << placeQueens(8, 0, cols, rightDiagonal, leftDiagonal, board) << endl;
        return 0;
    }
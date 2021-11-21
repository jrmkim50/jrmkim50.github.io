# Grid Paths
## Explanation
For this problem, I used depth first search. The total number of paths that follow 
the specified format is equal to the sum of the number of paths that start from my 
neighboring grid cells. While a little complicated, this implementation is not too 
hard. However, in order to print the solution before the timelimit, you need additional 
optimizations. These optimizations will end a search along a particular path when it 
becomes clear that you cannot possibly cover every cell and move from the grid's top 
left corner to the bottom left corner. I made two optimizations.

First, if a path could not proceed forward, but it could move left and right, then I 
would stop searching along that path. When this situation happens, you will not be able 
to cover one side of the grid once you make a turn. The turn creates a wall that blocks 
the left half from the right half. Second, if two cells on the path meet so that the 
cells' opposite corners touch, then you created a diagonal wall. As a result, you should 
also stop searching along that path.  

These two optimizations allowed the program to finish within the time limit.
## Code
    #include <iostream>
    #define BOARD_SIZE 7
    #define OCCUPIED 'x'
    #define EMPTY '.'

    using namespace std;

    bool hitWall(char board[BOARD_SIZE][BOARD_SIZE], int newRow, int newCol, int startRow, int startCol) {
        char direction;
        if (newRow != startRow) {
            if (newRow > startRow) {
                direction = 'D';
            } else {
                direction = 'U';
            }
        } else if (newCol != startCol) {
            if (newCol > startCol) {
                direction = 'R';
            } else {
                direction = 'L';
            }
        } else {
            return false;
        }
        switch (direction) {
            case 'D':
                if (newRow == BOARD_SIZE - 1 || board[newRow+1][newCol] == OCCUPIED) {
                    if (newCol != BOARD_SIZE - 1 && 
                        newCol != 0 && 
                        board[newRow][newCol + 1] == EMPTY && 
                        board[newRow][newCol - 1] == EMPTY) {
                        return true;
                    }
                }
                return false;
            case 'U':
                if (newRow == 0 || board[newRow - 1][newCol] == OCCUPIED) {
                    if (newCol != BOARD_SIZE - 1 && 
                        newCol != 0 && 
                        board[newRow][newCol + 1] == EMPTY && 
                        board[newRow][newCol - 1] == EMPTY) {
                        return true;
                    }
                }
                return false;
            case 'R':
                if (newCol == BOARD_SIZE - 1 || board[newRow][newCol + 1] == OCCUPIED) {
                    if (newRow != BOARD_SIZE - 1 && 
                        newRow != 0 && 
                        board[newRow + 1][newCol] == EMPTY && 
                        board[newRow - 1][newCol] == EMPTY) {
                        return true;
                    }
                }
                return false;
            case 'L':
                if (newRow == 0 || board[newRow][newCol - 1] == OCCUPIED) {
                    if (newRow != BOARD_SIZE - 1 && 
                        newRow != 0 && 
                        board[newRow + 1][newCol] == EMPTY && 
                        board[newRow - 1][newCol] == EMPTY) {
                        return true;
                    }
                }
                return false;
        }
    }

    bool createdDiagonal(char board[BOARD_SIZE][BOARD_SIZE], int row, int col) {
        if (row != 0 && col != 0) {
            return board[row - 1][col - 1] == OCCUPIED && board[row - 1][col] != OCCUPIED && board[row][col - 1] != OCCUPIED;
        } else if (row != BOARD_SIZE - 1 && col != BOARD_SIZE - 1) {
            return board[row + 1][col + 1] == OCCUPIED && board[row][col + 1] != OCCUPIED && board[row + 1][col] != OCCUPIED;
        } else if (row != 0 && col != BOARD_SIZE - 1) {
            return board[row - 1][col + 1] == OCCUPIED && board[row - 1][col] != OCCUPIED && board[row][col + 1] != OCCUPIED;
        } else if (row != BOARD_SIZE - 1 && col != 0) {
            return board[row + 1][col - 1] == OCCUPIED && board[row][col - 1] != OCCUPIED && board[row + 1][col] != OCCUPIED;
        } else {
            return false;
        }
    }

    bool validateMove(char board[BOARD_SIZE][BOARD_SIZE], int row, int col) {
        if (row < 0 || row >= BOARD_SIZE) {
            return false;
        } else if (col < 0 || col >= BOARD_SIZE) {
            return false;
        } else if (board[row][col] == OCCUPIED) {
            return false;
        }
        return true;
    }

    int recursion(char board[BOARD_SIZE][BOARD_SIZE], 
                int row, int col, 
                int strtRow, int strtCol,
                string& moves, int index) {
        if (row == BOARD_SIZE - 1 && col == 0) {
            if (index == 48) {
                return 1;
            }
            return 0;
        } else if (index == 48) {
            return 0;
        } else if (hitWall(board, row, col, strtRow, strtCol)) {
            return 0;
        } else if (createdDiagonal(board, row, col)) {
            return 0;
        }
        int startRow = row;
        int startCol = col;
        int totalMoves = 0;
        if (moves[index] != '?') {
            char currMove = moves[index];
            if (currMove == 'D') {
                row++;
            } else if (currMove == 'U') {
                row--;
            } else if (currMove == 'L') {
                col--;
            } else if (currMove == 'R') {
                col++;
            }
            if (validateMove(board, row, col)) {
                board[row][col] = OCCUPIED;
                totalMoves = recursion(board, row, col, startRow, startCol, moves, index+1);
                board[row][col] = EMPTY;
            }
        } else {
            if (validateMove(board, row+1, col)) {
                board[row+1][col] = OCCUPIED;
                totalMoves += recursion(board, row+1, col, row, col, moves, index+1);
                board[row+1][col] = EMPTY;
            }
            if (validateMove(board, row-1, col)) {
                board[row-1][col] = OCCUPIED;
                totalMoves += recursion(board, row-1, col, row, col, moves, index+1);
                board[row-1][col] = EMPTY;
            }
            if (validateMove(board, row, col+1)) {
                board[row][col+1] = OCCUPIED;
                totalMoves += recursion(board, row, col+1, row, col, moves, index+1);
                board[row][col+1] = EMPTY;
            }
            if (validateMove(board, row, col-1)) {
                board[row][col-1] = OCCUPIED;
                totalMoves += recursion(board, row, col-1, row, col, moves, index+1);
                board[row][col-1] = EMPTY;
            }
        }
        return totalMoves;
        
    }

    int main()
    {
        char board[BOARD_SIZE][BOARD_SIZE];
        board[0][0] = OCCUPIED;
        string moves;
        cin >> moves;
        cout << recursion(board, 0, 0, 0, 0, moves, 0) << endl;
        return 0;
    }
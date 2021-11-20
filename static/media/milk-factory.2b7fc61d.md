# USACO Bronze Milk Factory Problem

## Explanation
Given n nodes of a directed graph, we want to find the node with the smallest value such that we  
can go to any other node from it. We can solve this by trying each node starting from the node  
with weight 1.  

For each node, we will look at its neighbors. If any of the node's connections with its neighbors  
are not directed back towards it, then stop analyzing that node. Since we want to find the lowest  
value node where you can go to any node, we will analyze the node with one higher value. If the  
node's direct neighbors all lead back towards the node, perform a depth first search starting from  
each neighbor. During this search, sum the value of each node that is visited. Since there are  
only n-1 connections between the nodes, we will know that we visited every node if the sum of all  
visited nodes equals the sum of all n values. 

Also, here is a note on how to represent the graph. Use an adjacency list to keep track of the  
graph's neighbors regardless of direction. Keep a separate list where the list index is the  
starting node and the value is the destination node.
## Code
    #include <iostream>
    #include <vector>
    #include <algorithm>
    #include <cstdio>

    using namespace std;

    vector<int> adj[101];
    vector<int> directions[101];

    int max(int a, int b) {
        return a > b ? a : b;
    }

    int dfs(int position) {
        int visited = 0;
        vector<int> neighbors = adj[position];
        for (int neighbor : neighbors) {
            vector<int> dest = directions[neighbor];
            if (find(dest.begin(), dest.end(), position) == dest.end()) {
                continue;
            }
            visited += neighbor;
            visited += dfs(neighbor);
        }
        return visited;
    }

    int walk(int position, int max, int targetSum) {
        if (position > max) {
            return -1;
        }
        vector<int> neighbors = adj[position];
        for (int neighbor : neighbors) {
            vector<int> dest = directions[neighbor];
            if (find(dest.begin(), dest.end(), position) == dest.end()) {
                return walk(position + 1, max, targetSum);
            }
        }
        int visited = position;
        for (int neighbor : neighbors) {
            visited += neighbor;
            int result = dfs(neighbor);
            visited += result;
        }
        if (visited == targetSum) {
            return position;
        }
        return walk(position + 1, max, targetSum);
    }

    int main()
    {
        freopen("factory.in", "r", stdin);
        freopen("factory.out", "w", stdout);
        int n;
        cin >> n;
        for (int i = 0; i < n - 1; i++) {
            int a, b;
            cin >> a >> b;
            adj[a].push_back(b);
            adj[b].push_back(a);
            directions[a].push_back(b);
        }
        int targetSum = (n * (n + 1)) / 2;
        cout << walk(1, n, targetSum) << endl;

        return 0;
    }

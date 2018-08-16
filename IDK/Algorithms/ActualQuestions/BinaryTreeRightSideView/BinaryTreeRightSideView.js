import React from 'react'
import { comment } from '../Styles'

function Example() {
    return <pre>
{`Given this tree:

             1            <--- 1
           /  \\
          2     3         <--- 3
           /     \\
            5     4       <--- 4
          /
        7                 <--- 7
      /   \\
    10     11             <--- 11
        
RightSideView(root) == [1, 3, 4, 7, 11]
    


This is the Binary Tree Node:

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};
    `}
    </pre>
}

function DFS() {
    return <pre>
        <div style={comment}>{'// At every iteration, start DFS on the right'}</div>
        <div style={comment}>{`// This guarentees that at every level, the right-most node is the first one reached by DFS`}</div>
        <div style={comment}>{`// If the current level is greater than the # of items in Right, then the right-most node hasn't been recorded yet`}</div>
        <div style={comment}>{'// Append the value to Right'}</div>
{`
vector<int> RightSideView(TreeNode* root) {      
    vector<int> Right;
    DFS(root, Right);
    return Right;
}

void DFS(TreeNode* root, vector<int>& Right, int lvl = 1) {
    if (!root)
        return;
    
    if (lvl > Right.size()) 
        Right.push_back(root->val);
    DFS(root->right, Right, lvl + 1);
    DFS(root->left, Right, lvl + 1);
}
    `}
    </pre>
}

function BFS() {
    return <pre>
        <div style={comment}>{'// Run BFS on every level and append the value of the last node to Right'}</div>
        <br/>
        {`vector<int> RightSideView(TreeNode* root) {      
    vector<int> Right;
    if (!root)
        return Right;
    
    BFS(vector<TreeNode*> {root}, Right);
    return Right;
}

void BFS(vector<TreeNode*> current, vector<int>& Right) {
    if (current.empty())
        return;
    
    Right.push_back(current[current.size() - 1]->val);   

    vector<TreeNode*> next;
    for (auto node : current) {
        if (node->left) 
            next.push_back(node->left);
        if (node->right) 
            next.push_back(node->right);
    }
    BFS(next, Right);
}`}
    </pre>
}

const BinaryTreeRightSideView = {
    question:'Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom',
    pages:[
        'Example',
        'O(n) Depth First Search',
        'O(n) Breadth First Search'
    ],
    code:[
        Example,
        DFS,
        BFS
    ]
}

export default BinaryTreeRightSideView
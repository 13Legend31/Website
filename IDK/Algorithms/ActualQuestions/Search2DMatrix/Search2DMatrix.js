import React from 'react'
import { comment } from '../Styles'

function Example() {
    return <pre className='codeArea'> 
{`Given this matrix:

[
    [1,   4,  7, 11]
    [2,   5,  8, 12]
    [3,   6,  9, 16]
    [10, 13, 14, 17]
]

num = 9, IsNumInMatrix(matrix, num) == true
num = 31, IsNumInMatrix(matrix, num) == false`}
    </pre>
}

function mlogn() {
    return <pre>
        <div style={comment}>{'// Binary Search every row of the matrix'}</div>
{`
bool IsNumInMatrix(vector<vector<int>>& matrix, int num) {
    for (int i = 0; i < matrix.size(); i++) {
        if (BinarySearch(matrix[i], num))
            return true;
    }
    return false;
}
    
bool BinarySearch(vector<int>& Row, int num) {
    int low = 0,
    high = Row.size() - 1,
    mid;
    
    while (low <= high) {
        mid = low + (high - low)/2;
        if (Row[mid] == num)
            return true;
        else if (Row[mid] > num)
            high = mid - 1;
        else
            low = mid + 1;
        }
    return false;
}`} 
    </pre>
}

function nlogm() {
    return <pre>
        <div style={comment}>{'// Binary Search every column of the matrix'}</div>
{`
bool IsNumInMatrix(vector<vector<int>>& matrix, int num) {
    if (matrix.empty())
        return false;
    
    for (int j = 0; j < matrix[0].size(); j++) {
        if (BinarySearch(matrix, j, num))
            return true;
    }
    return false;
}
    
bool BinarySearch(vector<vector<int>>& matrix, int j, int num) {
    int low = 0,
    high = matrix.size() - 1,
    mid;
    
    while (low <= high) {
        mid = low + (high - low)/2;
        if (matrix[mid][j] == num)
            return true;
        else if (matrix[mid][j] > num)
            high = mid - 1;
        else
            low = mid + 1;
    }
    return false;
}`}
    </pre>
}

function mPLUSn() {
    return <pre>
        <div style={comment}>{'// IMPORTANT PROPERTY - Rows and columns are sorted'}</div>
        <div style={comment}>{'// Start with the TOP RIGHT element'}</div>
        <div style={comment}>{'// If num < first element in this column, num cannot appear in this column because every element above is greater'}</div>
        <div style={comment}>{'// Go left'}</div>
        <div style={comment}>{'// If num > our current search element, then num cannot appear in the row because every element to the left is less'}</div>
        <div style={comment}>{'// Num cannot appear below the row either because the columns are sorted'}</div>
        <div style={comment}>{'// Go up'}</div>
        <div style={comment}>{'// Continue until either num is found or out of bounds'}</div>
{`
bool IsNumInMatrix(vector<vector<int>>& matrix, int num) {
    if (matrix.empty())
        return false;
    
    int i = 0,
    j = matrix[0].size() - 1;
    while (i < matrix.size() && j >= 0) {
        if (matrix[i][j] == num)
            return true;
        else if (matrix[i][j] > num)
            j--;
        else
            i++;
    }
    return false;
}`}
    </pre>
}

const Search2DMatrix = {
    question:'Given a m x n matrix with sorted rows and columns, write a function that determines if a number is in the matrix',
    pages:[
        'Example',
        'O(mlogn)',
        'O(nlogm)',
        'O(m+n)'
    ],    
    code:[
        Example,
        mlogn,
        nlogm,
        mPLUSn
    ]
}

export default Search2DMatrix
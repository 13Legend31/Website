import React, { Component } from 'react'
import './Search2DMatrix.css'

function Search2DMatrixQuestion() {
    return <section className='questionTextArea'>
        <div className='questionStatement'>Given a m x n matrix with sorted rows and columns, write an algorithm that searches the matrix for a number</div>
    </section>
}

const buttons = [
    'Example',
    'O(mlogn)',
    'O(nlogm)',
    'O(m + n)'
]

class Search2DMatrixSolution extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='solutionNav'>
                    {buttons.map((complexity, index) => 
                        <button 
                            key={index}
                            className='solutionButton'
                        >
                            {complexity}
                        </button>
                    )}
                </div>
                <section className='questionSolution'>

                </section>
            </React.Fragment>
        );
    }
}

export { Search2DMatrixQuestion, Search2DMatrixSolution }
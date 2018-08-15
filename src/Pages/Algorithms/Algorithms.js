import React, { Component } from 'react'
import './Algorithms.css'

import TheQuestion from './TheQuestion/TheQuestion'
import AlgList from './AlgQuestions/AlgList'

class Algorithms extends Component {
    render() {
        return (
            <section className='algorithmsWrapper'>
                <div className='favAlgorithm'>Here's a list of my favorite algorithm questions. All my solutions are in C++</div>
                {AlgList.map(({ Question, Solution }, index) => 
                    <TheQuestion
                        key={index}
                        Question={Question}
                        Solution={Solution}
                    />
                )}
            </section>
        );
    }
}

export default Algorithms
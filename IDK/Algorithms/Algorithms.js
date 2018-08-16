import React, { Component } from 'react'
import './Algorithms.css'

import Question from './Question/Question'
import List from './ActualQuestions/List'

class Algorithms extends Component {
    render() {
        return (
            <section className='algorithmsWrapper'>
                <div className='favAlgorithm'>Here's a list of my favorite algorithm questions. All my solutions are in C++</div>
                {List.map(({ question, pages, code }, index) => 
                    <Question
                        question={question}
                        pages={pages}
                        code={code}
                    />
                )}
            </section>
        );
    }
}

export default Algorithms
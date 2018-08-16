import React, { Component } from 'react'
import './Question.css'

import TheQuestion from './TheQuestion/TheQuestion'
import TheSolution from './TheSolution/TheSolution'

class Question extends Component {
    render() {
        const { question, pages, code } = this.props
        return (
            <section className='questionsArea'>
                <TheQuestion 
                    question={question}
                />
                <TheSolution 
                    pages={pages} 
                    code={code}
                />
            </section>
        );
    }
}

export default Question
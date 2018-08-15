import React, { Component } from 'react'
import './TheQuestion.css'
import './Example.css'

class TheQuestions extends Component {
    render() {
        const { Question, Solution } = this.props
        return (
            <section className='questionsArea'>
                <Question/>
                <Solution/>
            </section>
        );
    }
}

export default TheQuestions
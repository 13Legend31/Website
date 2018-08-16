import React from 'react'
import './TheQuestion.css'

function TheQuestion(props) {
    return <section className='questionTextArea'>
        <div className='questionStatement'>{props.question}</div>
    </section>
}

export default TheQuestion
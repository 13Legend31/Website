import React, { Component } from 'react'
import './ContactMe.css'

class ContactMe extends Component {
    state = {
        name:'',
        email:'',
        message:'',
        success:false
    }

    Send = () => {
        const { name, email, message } = this.state
        fetch('https://larrywu1996gmailredirect.herokuapp.com/', {
            method:'POST',
            body: JSON.stringify({
                name:name,
                email:email,
                message:message
            }),
            headers: {
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        })
        .then(() => {
            this.setState({
                name:'',
                email:'',
                message:'',
                success:true
            })
        })
        .catch(() => alert('Sorry! Something went wrong'))
    }

    ChangeName = (e) => {
        const name = e.target.value
        if (name.length < 50) {
            const state = this.state
            state.name = name
            this.setState({state})
        }
    }

    ChangeEmail = (e) => {
        const email = e.target.value
        if (email.length < 100) {
            const state = this.state
            state.email = email
            this.setState({state})
        }
    }

    ChangeMessage = (e) => {
        const message = e.target.value
        if (message.length < 2500) {
            const state = this.state
            state.message = message
            this.setState({state})
        }
    }

    ClearMessage = () => {
        const state = this.state
        state.success = false
        this.setState(state)
    }

    render() {
        const { name, email, message, success } = this.state
        return (
            <section className='contactMe'>
                <input 
                    className='senderName'
                    placeholder='Name'
                    onChange={this.ChangeName}
                    value={name}
                />
                <input 
                    className='senderEmail'
                    placeholder='Email'
                    onChange={this.ChangeEmail}
                    value={email}
                />
                <div className='messageWrapper'>
                    <textarea
                        className='senderMessage'
                        placeholder='Message'
                        onChange={this.ChangeMessage}
                        value={message}
                    />
                </div>
                <button 
                    className='send'
                    onClick={this.Send}
                >
                    Send
                </button>
                {success &&
                    <div 
                        className='successful'
                        onClick={this.ClearMessage}
                    >
                        Message Successfully Sent!
                    </div>
                }
                <div className='contactMeBackground'/>
            </section>
        );
    }
}

export default ContactMe
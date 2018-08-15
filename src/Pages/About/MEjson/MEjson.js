import React, { Component } from 'react';
import './Mejson.css'

const jsonME = [
    {
        key:'   "name"',
        val:'"Larry Wu",',
    },
    {
        key:'   "occupation"',
        val:'"Front End Engineer",',
    },
    {
        key:'   "skills"',
        val:'"React, React Native, Redux, Express, SQL, C/C++",',
    },
    {
        key:'   "education"',
        val:'"University of Toronto",',
    },
    {
        key:'   "degree"',
        val:'"Bachelors of Commerce",',
    },
    {
        key:'   "message"',
        val:'"Feel free to contact me at any time!"',
    }
]

function Type(span, text, delay) { // delay is passed by reference
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            span.textContent += text[i]
        },delay.delay)
        delay.delay += 15
    }
}

class Mejson extends Component {
    state = {
        rush:false
    }

    componentDidMount = () => {
        const open = document.getElementsByClassName('open')[0];
        const close = document.getElementsByClassName('close')[0];
        open.textContent = '{}';
        setTimeout(() => {
            open.textContent = '{';
            close.textContent = '}';
        }, 400);

        let delay = {delay:800} // Pass By Reference
        const mid = document.getElementsByClassName('mid')[0];
        jsonME.forEach((obj) => {
            const { key, val } = obj
            const keySpan = document.createElement('span')
                  keySpan.className = 'key'
            mid.appendChild(keySpan)
            Type(keySpan, key, delay)

            const colonSpan = document.createElement('span')
                  colonSpan.className = 'colon'
            mid.appendChild(colonSpan)
            Type(colonSpan, ':', delay)
            
            const valSpan = document.createElement('span')
                  valSpan.className = 'val'
            mid.appendChild(valSpan)
            Type(valSpan, val, delay)
            setTimeout(() => valSpan.textContent += '\r\n',delay.delay)
            delay.delay += 300
        })
    }

    Rush = () => {
        if (!this.state.rush)
            this.setState({rush:true});
    }

    render() {
        return (
        <section className = 'textEditor' onClick = {this.Rush}>
            <div className = 'top'>Me.json</div>
            <code className = 'code'> 
                {!this.state.rush &&
                    <React.Fragment>
                        <div className = 'open'></div>
                        <div className = 'mid'></div>
                        <div className ='close'></div>
                    </React.Fragment>
                }
                {this.state.rush &&
                    <React.Fragment>
                        <div className = 'open'>{'{'}</div>
                        <div className = 'mid'>
                        {jsonME.map(({ key, val }, index) => {
                            return <React.Fragment key={index}>
                                        <span className='key'>{key}</span>
                                        <span className='colon'>:</span>
                                        <span className='val'>{val}</span>
                                        <br/>
                                   </React.Fragment>
                        })}
                        </div>
                        <div className ='close'>{'}'}</div>
                    </React.Fragment>
                }
            </code>
            <div className = 'bottom'></div>
        </section>
        );
    }
}

export default Mejson
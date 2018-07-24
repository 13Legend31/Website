import React, { Component } from 'react';
import './About.css'

class About extends Component {
    state = {
        AboutMe:false
    }
    constructor(props) {
        super(props);
        this.addTimeout = props.addTimeout;
    }
    Start = () => {
        const start = document.getElementsByClassName('start')[0];
        start.style.opacity = '0';
        start.style.width = '0px';
        start.style.height = '0px';
        start.style.top = '0px';
        start.style.fontSize = '0px';
        const startCircle = document.getElementsByClassName('startCircle')[0];
        startCircle.style.opacity = '0';
        startCircle.style.width = '0px';
        startCircle.style.height = '0px';
        startCircle.style.top = '50%';
        setTimeout(() => this.setState({AboutMe:true}), 800);
    }
    render() {
        return (
            <section className = 'background'>
                <div className = 'startCircle'>
                    <button className = 'start' onClick = {this.Start}>Me</button> 
                </div>
                {this.state.AboutMe &&
                    <AboutMe addTimeout = {this.addTimeout}/>
                }
            </section>
        );
    }
}
class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.addTimeout = props.addTimeout;
    }
    componentDidMount = () => {
        const addTimeout = this.addTimeout;
        const json = [
            '"name":"Larry Wu",',
            '"occupation":"Software Developer",',
            '"skills":"JavaScript, React, Node, SQL, HTML, CSS, C++, Git",',
            '"education":"University of Toronto",',
            '"degree":"Bachelors of Commerce",',
            '"email":"larrywu1996@gmail.com",',
            '"message":"Feel free to contact me at any time!"'
        ]

        const open = document.getElementsByClassName('open')[0];
        const mid = document.getElementsByClassName('mid')[0];
        const close = document.getElementsByClassName('close')[0];
        let delay = 400;
        addTimeout(setTimeout(() => {
            open.textContent = '{';
            close.textContent = '}';
        }, delay));

        for (let i = 0; i < json.length; i++) {
            delay += 400;
            // key
            const key = document.createElement('span');
            key.className = 'key';
            key.textContent = '   ';
            mid.appendChild(key);
            let j = 0;
            while (json[i][j] !== ':') {
                (function(j) {
                    addTimeout(setTimeout(() => {
                        key.textContent += json[i][j];
                    },delay));
                })(j);
                delay += 15;
                j++;
            }
            // colon
            const colon = document.createElement('span');
            colon.className = 'colon';
            mid.appendChild(colon);
            addTimeout(setTimeout(() => colon.textContent = ':', delay));
            delay += 15;
            j++;
            // val
            const val = document.createElement('span');
            val.className = 'val';
            mid.appendChild(val);
            while (j < json[i].length) {
                (function(j) {
                    addTimeout(setTimeout(() => {
                        val.textContent += json[i][j];
                    },delay));
                })(j);
                delay += 15;
                j++;
            }
            addTimeout(setTimeout(() => val.textContent += '\r\n',delay));
        }        
    }
    render() {
        return (
        <section className = 'textEditor'>
            <div className = 'top'>ME.json</div>
            <code className = 'code'> 
                <div className = 'open'>{}</div>
                <div className = 'mid'></div>
                <div className ='close'></div>
            </code>
            <div className = 'bottom'></div>
        </section>
        );
    }
}

export default About;
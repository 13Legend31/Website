import React, { Component } from 'react';
import './MEjson.css'

class MEjson extends Component {
    state = {
        rush:false
    }
    componentDidMount = () => {
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
        open.textContent = '{}';
        let delay = 400;
        setTimeout(() => {
            open.textContent = '{';
            close.textContent = '}';
        }, delay);

        // json.forEach((item) => {})
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
                    setTimeout(() => {
                        key.textContent += json[i][j];
                    },delay);
                })(j);
                delay += 15;
                j++;
            }
            // colon
            const colon = document.createElement('span');
            colon.className = 'colon';
            mid.appendChild(colon);
            setTimeout(() => colon.textContent = ':', delay);
            delay += 15;
            j++;
            // val
            const val = document.createElement('span');
            val.className = 'val';
            mid.appendChild(val);
            while (j < json[i].length) {
                (function(j) {
                    setTimeout(() => {
                        val.textContent += json[i][j];
                    },delay);
                })(j);
                delay += 15;
                j++;
            }
            setTimeout(() => val.textContent += '\r\n',delay);
        }        
    }
    Rush = () => {
        if (!this.state.rush)
            this.setState({rush:true});
    }
    render() {
        return (
        <section className = 'textEditor' onClick = {this.Rush}>
            <div className = 'top'>ME.json</div>
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
                            <span className = 'key'>   "name"</span>{}<span className = 'colon'>:</span>{}<span className = 'val'>"Larry Wu",</span><br/>
                            <span className = 'key'>   "occupation"</span>{}<span className = 'colon'>:</span>{}<span className = 'val'>"Software Developer",</span><br/>
                            <span className = 'key'>   "skills"</span>{}<span className = 'colon'>:</span>{}<span className = 'val'>"JavaScript, React, Node, SQL, HTML, CSS, C++, Git",</span><br/>
                            <span className = 'key'>   "education"</span>{}<span className = 'colon'>:</span>{}<span className = 'val'>"University of Toronto",</span><br/>
                            <span className = 'key'>   "degree"</span>{}<span className = 'colon'>:</span>{}<span className = 'val'>"Bachelors of Commerce",</span><br/>
                            <span className = 'key'>   "email"</span>{}<span className = 'colon'>:</span>{}<span className = 'val'>"larrywu1996@gmail.com",</span><br/>
                            <span className = 'key'>   "message"</span>{}<span className = 'colon'>:</span>{}<span className = 'val'>"Feel free to contact me at any time!"</span><br/>
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

export default MEjson
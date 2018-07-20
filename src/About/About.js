import React, { Component } from 'react';
import './About.css'

class About extends Component {
    constructor(props) {
        super(props);
        this.Start = this.Start.bind(this);
        this.state = {
            AboutMe:false
        }
        this.addTimeout = props.addTimeout;
    }
    Start() {
        const start = document.getElementsByClassName('start')[0];
        start.style.opacity = '0';
        start.style.width = '0px';
        start.style.height = '0px';
        start.style.top = '50%';
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
                <div className = 'startCircle'></div>
                <button className = 'start' onClick = {this.Start}>Me</button> 
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
        this.componentDidMount = this.componentDidMount.bind(this);
        this.addTimeout = props.addTimeout;
    }
    componentDidMount() {
        const addTimeout = this.addTimeout;
        const me = document.getElementsByClassName('me');
        let delay = 0;
        // Hi to I'm a website developer
        for (let i = 0; i < 3; i++) {
            addTimeout(setTimeout(() => me[i].style.opacity = '1', delay));
            delay += 1700;
            addTimeout(setTimeout(() => me[i].style.opacity = '0', delay));
            delay += 700;
        }
        // I specialize in 
        const spec = document.getElementsByClassName('spec');
        addTimeout(setTimeout(() => { me[3].style.opacity = '1'; }, delay));
        delay += 700;
        for (let i = 0; i < spec.length; i++) {
            addTimeout(setTimeout(() => spec[i].style.opacity = '1', delay));
            delay += 1200;
            addTimeout(setTimeout(() => spec[i].style.opacity = '0', delay));
            delay += 600;
        }
        addTimeout(setTimeout(() => me[3].style.opacity = '0', delay));
        delay += 700;
        // My interests
        const interests = document.getElementsByClassName('interests');
        addTimeout(setTimeout(() => me[4].style.opacity = '1', delay));
        delay += 900;
        for (let i = 0; i < interests.length; i++) {
            addTimeout(setTimeout(() => interests[i].style.opacity = '1', delay));
            delay += 1200;
            addTimeout(setTimeout(() => interests[i].style.opacity = '0', delay));
            delay += 600;
        }
        addTimeout(setTimeout(() => me[4].style.opacity = '0', delay));
        delay += 700;
        // Contact me
        addTimeout(setTimeout(() => me[5].style.opacity = '1', delay));
        delay += 1700;
        const email = document.getElementsByClassName('email')[0];
        addTimeout(setTimeout(() => email.style.opacity = '1', delay));
        delay += 1200;
    }
    render() {
        return (
            <section className = 'aboutMe'>
                <div className = 'me'>Hi!</div>
                <div className = 'me'>My name is Larry</div>
                <div className = 'me'>I'm a Front End Engineer</div>
                <div className = 'me'>I specialize in:     
                    <div className = 'spec' id = 'html'>HTML</div>
                    <div className = 'spec' id = 'css'>CSS</div>
                    <div className = 'spec' id = 'javascript'>Javascript</div>
                    <div className = 'spec' id = 'react'>React</div>
                </div>
                <div className = 'me'>My interests are: 
                    <div className = 'interests' id = 'ml'>Machine Learning</div>
                    <div className = 'interests' id = 'software'>Software Development</div>
                    <div className = 'interests' id = 'opensrc'>Open Source</div>
                </div>
                <div className = 'me'>If you would like to contact me, please feel free to do so at anytime!</div>
                <div className = 'email'>larrywu1996@gmail.com</div>
            </section>
        );
    }
}

export default About;
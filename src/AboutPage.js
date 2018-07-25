import React, {Component} from 'react';
import Nav from './Nav/Nav.js';
import About from './About/About.js';
import Links from './Links/Links.js'

class AboutPage extends Component {
    state = {
        active:1
    }
    constructor(props) {
        super(props);
        this.LoadPage = props.LoadPage;
        this.timeouts = [];
    }
    addTimeout = (timeout) => {
        this.timeouts.push(timeout);
    }
    onClick = (active) => {
        // Clear AboutMe Timeouts
        for (let i = 0; i < this.timeouts.length; i++) {
            clearTimeout(this.timeouts[i]);
        }
        // Transition to Design
        if (this.state.active !== active) {
            this.LoadPage(active);
        }
    }
    render() {
        return (
            <section className = 'website'>
                <Nav active = {this.state.active} onClick = {this.onClick}/>
                <About addTimeout = {this.addTimeout}/>   
                <Links/>         
            </section>
        );
    }
}

export default AboutPage;
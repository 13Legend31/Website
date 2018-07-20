import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Nav from './Nav/Nav.js';
import About from './About/About.js';
import './index.css'
import WebsiteDesigns from './DesignPage';

class WebsiteAbout extends Component {
    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
        this.addTimeout = this.addTimeout.bind(this);
        this.state = {
            active:1
        }
        this.timeouts = [];
    }
    addTimeout(timeout) {
        this.timeouts.push(timeout);
    }
    componentDidMount() {
        const slider = document.getElementsByClassName('slider')[0];
        setTimeout(() => {
            slider.style.width = '0%';
            slider.style.left = '100%';
        },200);
    }
    onClick(active) {
        // Clear AboutMe Timeouts
        for (let i = 0; i < this.timeouts.length; i++) {
            clearTimeout(this.timeouts[i]);
        }
        // Transition to Design
        if (this.state.active !== active) {
            const state = this.state;
            state.active = active;
            const slider = document.getElementsByClassName('slider')[0];
            slider.style.width = '100%';
            slider.style.left = '0';
            // Design page
            setTimeout(() => 
                ReactDom.render(
                    <WebsiteDesigns/>,
                    document.getElementById('root')
                )
            ,500);
            this.setState(state);
        }
    }
    render() {
        return (
            <section className = 'website'>
                <Nav active = {this.state.active} onClick = {this.onClick}/>
                <About addTimeout = {this.addTimeout}/>            
                <div className = 'slider'></div>
            </section>
        );
    }
}

export default WebsiteAbout;

ReactDom.render( 
    <WebsiteAbout/>,
    document.getElementById('root')
)
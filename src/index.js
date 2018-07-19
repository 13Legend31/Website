import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Nav from './Nav.js';
import About from './About.js';
import './index.css'

class Website extends Component {
    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
        this.state = {
            active:1
        }
    }
    componentDidMount() {
        const slider = document.getElementsByClassName('slider')[0];
        setTimeout(() => {
            slider.style.width = '0%';
            slider.style.left = '100%';
        },200);
    }
    onClick(active) {
        if (this.state.active !== active) {
            const state = this.state;
            state.active = active;
            const slider = document.getElementsByClassName('slider')[0];
            slider.style.width = '100%';
            slider.style.left = '0';
            setTimeout(() => 
                window.open("http://www.google.com","_self"), 
            500);
            this.setState(state);
        }
    }
    render() {
        return (
            <section className = 'website'>
                <Nav active = {this.state.active} onClick = {this.onClick}/>
                <About/>            
                <div className = 'slider'></div>
            </section>
        );
    }
}
ReactDom.render( 
    <Website/>,
    document.getElementById('root')
)
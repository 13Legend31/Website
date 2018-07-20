import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Nav from './Nav/Nav';
import Design from './Designs/Design'
import './Designs/DesignPage.css'
import WebsiteAbout from './index'

class WebsiteDesigns extends Component {
    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
        this.state = {
            active:2
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
                ReactDom.render(
                    <WebsiteAbout/>,
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
                <Design/>
                <div className = 'slider'></div>
            </section>
        );
    }
}

export default WebsiteDesigns;
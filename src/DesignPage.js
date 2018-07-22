import React, {Component} from 'react';
import Nav from './Nav/Nav';
import Design from './Designs/Design'
import Links from './Links/Links.js'
import './Designs/DesignPage.css'

class DesignPage extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = {
            active:2
        }
        this.LoadPage = props.LoadPage;
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
            this.LoadPage(active);
        }
    }
    render() {
        return (
            <section className = 'website'>
                <Nav active = {this.state.active} onClick = {this.onClick}/>
                <Design/>
                <Links/>
                <div className = 'slider'></div>
            </section>
        );
    }
}

export default DesignPage;
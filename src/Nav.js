import React, {Component} from 'react';
import './Nav.css';

// styles
const barInactive = {
    width:'0%',
    left:'50%',
}
const barActive = {
    width:'100%',
    left:'0%',
    backgroundColor:'#FFFFFF'
}
const barHover = {
    width:'100%',
    left:'0%',
    backgroundColor:'#DDDDDD'
}
const nameInactive = {
    color:'#8C8C8C'
}
const nameActive = {
    color:'#FFFFFF'
}
const nameHover = {
    color:'#DDDDDD'
}
// nav
function Nav(props) {
    return <nav className = 'nav'>
            <Button name = 'About' active = {props.active} num = {1} onClick = {() => props.onClick(1)}/>
            <Button name = 'Designs' active = {props.active} num = {2} onClick = {() => props.onClick(2)}/>
        </nav>
}
// button
class Button extends Component {
    constructor(props) {
        super(props);
        //bind this to all functions
        this.Hover = this.Hover.bind(this);
        this.Unhover = this.Unhover.bind(this);
        //set state
        this.state = {
            active:props.active,
            hover:false
        };
        //set instanced variables
        this.name = props.name;
        this.num = props.num;
        this.onClick = props.onClick;
    }
    Hover() {
        const state = this.state;
        state.hover = true;
        this.setState(state);
    }
    Unhover() {
        const state = this.state;
        state.hover = false;
        this.setState(state);
    }
    render() { // where does props.active get passed to?
        let barStyle,
            nameStyle;
        if (this.props.active === this.num) {
            barStyle = barActive;
            nameStyle = nameActive;
        } else if (this.state.hover) {
            barStyle = barHover;
            nameStyle = nameHover;
        } else {
            barStyle = barInactive;
            nameStyle = nameInactive;
        }
        return (
            <div className = 'button' 
                onMouseEnter = {this.Hover} 
                onMouseLeave = {this.Unhover} 
                onClick = {() => this.onClick()}>
                    <div className = 'bar' style = {barStyle}></div>
                    <div className = 'name' style = {nameStyle}>{this.name}</div>
            </div>
        );
    }
}

export default Nav;
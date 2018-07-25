import React, {Component} from 'react';
import Nav from './Nav/Nav';
import Design from './Designs/Design'
import Links from './Links/Links.js'

class DesignPage extends Component {
    state = {
        active:2
    }
    constructor(props) {
        super(props);
        this.LoadPage = props.LoadPage;
    }
    onClick = (active) => {
        if (this.state.active !== active) {
            this.LoadPage(active);
        }
    }
    render() {
        return (
            <section className = 'website'>
                <Nav active = {this.state.active} onClick = {this.onClick}/>
                <Design/>
                <Links/>
            </section>
        );
    }
}

export default DesignPage;
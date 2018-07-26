import React, {Component} from 'react'
import MEjson from './MEjson/MEjson.js'
import './AboutPage.css'

class AboutPage extends Component {
    state = {
        MEjson:false
    }

    constructor(props) {
        super(props);
        this.timeouts = [];
    }

    Start = () => {
        const { style: start } = document.getElementsByClassName('start')[0];
        start.opacity = '0';
        start.width = '0px';
        start.height = '0px';
        start.top = '0px';
        start.fontSize = '0px';
        const { style:startCircle } = document.getElementsByClassName('startCircle')[0];
        startCircle.opacity = '0';
        startCircle.width = '0px';
        startCircle.height = '0px';
        startCircle.top = '50%';
        setTimeout(() => this.setState({AboutMe:true}), 800);
    }

    render() {
        return (
            <section className = 'background'>
                <div className = 'startCircle'>
                    <button className = 'start' onClick = {this.Start}>Me</button> 
                </div>
                {this.state.AboutMe &&
                    <MEjson addTimeout = {this.addTimeout}/>
                }
            </section>  
        );
    }
}

export default AboutPage;
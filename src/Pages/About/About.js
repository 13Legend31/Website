import React, {Component} from 'react'
import MEjson from './MEjson/MEjson.js'
import './About.css'

const startCircleClick = {
    opacity:'0',
    width:'0',
    height:'0',
    top:'50%'
}

const startClick = {
    opacity:'0',
    width:'0',
    height:'0',
    top:'0',
    fontSize:'0'
}

class About extends Component {
    state = {
        MEjson:false,
        startCircleStyle:null,
        startStyle:null
    }

    Start = () => {
        this.setState({
            startCircleStyle:startCircleClick,
            startStyle:startClick
        })
        setTimeout(() => this.setState({MEjson:true}), 800)
    }

    render() {
        return (
            <React.Fragment>
                <div className='startCircle' style={this.state.startCircleStyle}>
                    <button className='start' onClick={this.Start} style={this.state.startStyle}>Me</button> 
                </div>
                {this.state.MEjson &&
                    <MEjson/>
                }
            </React.Fragment>  
        );
    }
}

export default About;
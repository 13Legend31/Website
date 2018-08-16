import React, {Component} from 'react'
import './Nav.css'

const barActive = {
    width:'100%',
    left:'0%',
    backgroundColor:'#FFFFFF'
}
const nameActive = {
    color:'#FFFFFF'
}

const barInactive = {
    width:'0%',
    left:'50%',
}
const nameInactive = {
    color:'#8C8C8C'
}

const barHover = {
    width:'100%',
    left:'0%',
    backgroundColor:'#DDDDDD'
}
const nameHover = {
    color:'#DDDDDD'
}

const buttonInfo = [
    'About',
    'Projects',
    'Contact Me!'
]

function Nav(props) {
    return <nav className='nav'>
        {buttonInfo.map((name, index) => {
            return <Button 
                name={name} 
                num={index + 1} 
                page={props.page} 
                LoadPage={() => props.LoadPage(index + 1)} 
                key={index + 1}
            />
        })}
    </nav>
}

class Button extends Component {
    state = {
        hover:false
    }

    Hover = () => {
        this.setState({hover:true})
    }

    Unhover = () => {
        this.setState({hover:false})
    }

    ChooseStyle = () => {
        if (this.props.page === this.props.num) {
            return [barActive, nameActive]
        } else if (this.state.hover) {
            return [barHover, nameHover]
        } else {
            return [barInactive, nameInactive]
        }
    }
    
    render() { 
        const styles = this.ChooseStyle()
        const barStyle = styles[0],
              nameStyle = styles[1]        
        return (
            <div 
                className='button' 
                onMouseEnter={this.Hover} 
                onMouseLeave={this.Unhover} 
                onClick={() => this.props.LoadPage()}
            >
                    <div 
                        className='bar' 
                        style={barStyle}/>
                    <div 
                        className='name' 
                        style={nameStyle}
                    >
                        {this.props.name}
                    </div>
            </div>
        );
    }
}

export default Nav;
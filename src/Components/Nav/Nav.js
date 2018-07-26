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
    {
        name:'About',
        key:1
    }, 
    {
        name:'Projects',
        key:2
    }
]

function Nav(props) {
    return <nav className='nav'>
        {buttonInfo.map((info) => {
            const { name,key } = info
            return <Button name={name} num={key} page={props.page} LoadPage={() => props.LoadPage(key)} key={key}/>
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
            <div className='button' onMouseEnter={this.Hover} onMouseLeave={this.Unhover} onClick={() => this.props.LoadPage()}>
                    <div className='bar' style={barStyle}></div>
                    <div className='name' style={nameStyle}>{this.props.name}</div>
            </div>
        );
    }
}

export default Nav;
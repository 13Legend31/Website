import React, { Component } from 'react'
import './Design.css'
import Futuristic from './Futuristic.jpg'
import Minimalistic from './Minimalistic.jpg'
import Colorful from './Colorful.jpg'
import Mysterious from './Mysterious.jpg'
import Fantasy from './Fantasy.jpg'

function Element(props) {
    const style = {
        backgroundImage:`url(${props.src})`
    }
    return <div className = 'element' style = {style}>
        <div className = 'elemName'>{props.name}</div>
    </div>
}

function Elems() {
    return <section className = 'designSection'>
        <Element name = 'Futuristic' src = {Futuristic}/>
        <Element name = 'Minimalistic' src = {Minimalistic}/>
        <Element name = 'Colorful' src = {Colorful}/>
        <Element name = 'Mysterious' src = {Mysterious}/>
        <Element name = 'Fantasy' src = {Fantasy}/>
    </section>
}

class Design extends Component {
    render() {
        return (
            <div className = 'elemsWrapper'>
                <Elems/>
            </div>
        );
    }
}

export default Design;
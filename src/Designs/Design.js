import React, { Component } from 'react'
import './Design.css'

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
        <Element name = 'Futuristic' src = 'http://vunature.com/wp-content/uploads/2016/11/space-artistic-science-fantasy-art-sci-artwork-futuristic-wallpaper-images-nature-1920x1080.jpg'/>
        <Element name = 'Minimalistic' src = 'https://wallpaper-house.com/data/out/6/wallpaper2you_83845.jpg'/>
        <Element name = 'Text'/>
        <Element name = 'Text'/>
        <Element name = 'Text'/>
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
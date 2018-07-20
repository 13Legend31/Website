import React, { Component } from 'react'
import './Design.css'
import RhythmTrack from './RhythmTrack.jpg'
import Minimalistic from './Minimalistic.jpg'
import Colorful from './Colorful.jpg'
import ImageCollector from './ImageCollector.jpg'
import ThisWebsite from './ThisWebsite.jpg'

function Element(props) {
    const style = {
        backgroundImage:`url(${props.src})`
    }
    return <div className = 'element' style = {style} onClick = {() => window.open(props.URL)}>
        <div className = 'elemName'>{props.name}</div>
    </div>
}

function Elems() {
    return <section className = 'designSection'>
        <Element name = 'Rhythm Track' src = {RhythmTrack} URL = 'https://github.com/13Legend31/RhythmTrack'/>
        <Element name = 'Minimalistic' src = {Minimalistic}/>
        <Element name = 'Colorful' src = {Colorful}/>
        <Element name = 'Image Collector' src = {ImageCollector} URL = 'https://github.com/13Legend31/Image-Collector'/>
        <Element name = 'This Website' src = {ThisWebsite} URL = 'https://github.com/13Legend31/13Legend31.github.io'/>
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
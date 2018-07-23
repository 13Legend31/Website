import React, { Component } from 'react'
import './Design.css'
import RhythmTrack from './RhythmTrack.jpg'
import Portfolio from './Portfolio.jpg'
import ImageCollector from './ImageCollector.jpg'
import ThisWebsite from './ThisWebsite.jpg'
import MoreComingSoon from './MoreComingSoon.jpg'

function Element(props) {
    const style = {
        backgroundImage:`url(${props.src})`
    }
    return <div className = 'element' style = {style} onClick = {() => {
        if (props.URL) {
            window.open(props.URL)
        }
    }}>
        <div className = 'elemName'>{props.name}</div>
    </div>
}

function Elems() {
    return <section className = 'designSection'>
        <Element name = 'Rhythm Track' src = {RhythmTrack} URL = 'https://github.com/13Legend31/RhythmTrack'/>
        <Element name = 'Portfolio' src = {Portfolio} URL = 'https://github.com/13Legend31/Previous-Website'/>
        <Element name = 'Image Collector' src = {ImageCollector} URL = 'https://github.com/13Legend31/Image-Collector'/>
        <Element name = 'This Website' src = {ThisWebsite} URL = 'https://github.com/13Legend31/Website'/>
        <Element name = 'More Coming!' src = {MoreComingSoon}/>
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
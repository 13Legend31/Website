import React from 'react';
import RhythmTrack from './Images/RhythmTrack.jpg'
import Portfolio from './Images/Portfolio.jpg'
import ImageCollector from './Images/ImageCollector.jpg'
import ThisWebsite from './Images/ThisWebsite.jpg'
import MoreComingSoon from './Images/MoreComingSoon.jpg'
import './Projects.css'

const projects = [
    {
        name: 'Rhythm Track',
        src: RhythmTrack,
        url: 'https://github.com/13Legend31/RhythmTrack',
        key:1
    },
    {
        name: 'Portfolio',
        src: Portfolio,
        url: 'https://github.com/13Legend31/Previous-Website',
        key:2
    },
    {
        name: 'Image Collector',
        src: ImageCollector,
        url: 'https://github.com/13Legend31/Image-Collector',
        key:3
    },
    {
        name: 'This Website',
        src: ThisWebsite,
        url: 'https://github.com/13Legend31/RhythmTrack',
        key:4
    },
    {
        name: 'More Coming!',
        src: MoreComingSoon,
        url: undefined,
        key:5
    },
];

function Projects(){
    return  <div className = 'wrapper'>
                <section className = 'projects'>
                    {projects.map((info) => {
                        const { name, src, url, key } = info;
                        return(
                            <Frame name={name} src={src} URL={url} key={key}/>
                        );
                    })}
                </section>
            </div>   
}

function Frame(props) {
    return <div className = 'frame' style = {{backgroundImage:`url(${props.src})`}} 
    onClick={() => {
        if (props.URL) {
            window.open(props.URL)
        }
    }}>
        <div className = 'frameName'>{props.name}</div>
    </div>
}

export default Projects;
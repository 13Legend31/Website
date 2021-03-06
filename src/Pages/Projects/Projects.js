import React from 'react';
import RhythmTrack from './Images/RhythmTrack.jpg'
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
        name: 'Image Collector',
        src: ImageCollector,
        url: 'https://github.com/13Legend31/Image-Collector',
        key:2
    },
    {
        name: 'This Website',
        src: ThisWebsite,
        url: 'https://github.com/13Legend31/Website',
        key:3
    },
    {
        name: 'More Coming!',
        src: MoreComingSoon,
        url: undefined,
        key:4
    },
];

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

function Projects(){
    return  <section className='wrapper'>    
                <div className = 'projects'>
                    {projects.map((info) => {
                        const { name, src, url, key } = info;
                        return(
                            <Frame name={name} src={src} URL={url} key={key}/>
                        );
                    })}
                </div>
            </section>
}

export default Projects;
import React from 'react';
import Github from './Github.png'
import LinkedIn from './LinkedIn.png'
import './Links.css'

function Links() {
    return <section class = 'links'>
            <img class = 'icon' src={Github} onClick = {() => window.open('https://github.com/13Legend31')} onDragStart = {(e) => e.preventDefault()}/>
            <img class = 'icon' src={LinkedIn} onClick = {() => window.open('https://www.linkedin.com/in/larry-wu-698621167/')} onDragStart = {(e) => e.preventDefault()}/>
        </section>
}

export default Links;
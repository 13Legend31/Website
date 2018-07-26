import React from 'react'
import Github from './Images/Github.png'
import LinkedIn from './Images/LinkedIn.png'
import './Links.css'

const imgInfo = [
    {
        src: Github,
        href: 'https://github.com/13Legend31',
        key:1
    },
    {
        src: LinkedIn,
        href: 'https://www.linkedin.com/in/larry-wu-698621167/',
        key:2
    }
]

function Links() {
    return <section className = 'links'>
    {imgInfo.map((item) => {
        const { src, href, key } = item
        return <img className='icon' src={src} alt='' onClick={() => window.open(href)} onDragStart={(e) => e.preventDefault()} key={key}></img>
    })}
    </section>
}

export default Links
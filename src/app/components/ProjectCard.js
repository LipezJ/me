import React from 'react'
import '../style.css'

export default function ProjectCard(props) {
    return (
        <div className='project_card'>
            <div className='title_p'>
                {props.title}
            </div>
            <div className='img_p'>
                <img src={props.src} alt="" />
            </div>
            <div className='desc_p'>
                {props.desc}
            </div>
            <a className='link_p' href={props.link}>View Project</a>
        </div>
    )
}
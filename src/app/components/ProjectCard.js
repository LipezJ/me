import React from 'react'
import '../style.css'

import LinksProject from './LinksProject'

export default function ProjectCard(props) {
    return (
        <div className='project_card'>
            <div className='project_card_p '>
                <div className='title_p'>
                    {props.title}
                </div>
                <div className='img_p'>
                    <img src={props.src} alt="" />
                </div>
                <div className='desc_p'>
                    {props.desc}
                </div>
            </div>
            <LinksProject links={props.links} />
        </div>
    )
}
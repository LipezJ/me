import React from 'react'
import '../style.css'

import LinksProject from './LinksProject'
import ViewImg from './ViewImg'

export default function ProjectCard(props) {
    return (
        <div className='project_card'>
            <div className='title_p'>
                    {props.title}
            </div>
            <div className='project_card_p '>
                <div className='img_p'>
                    <ViewImg src={props.src}/>
                </div>
                <div className='desc_p'>
                    {props.desc}
                </div>
            </div>
            <LinksProject links={props.links} />
        </div>
    )
}
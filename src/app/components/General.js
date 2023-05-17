import React from 'react'
import '../style.css'

import ProjectCard from './ProjectCard'
import Me from './Me'
import Links from './Links'

export default function General() {
    return (
        <div id='general'>
            <Me />
            <Links />
            <div id='proj_cont'>
                <div id='proj_title'>Projects</div>
                <div id='projs'>
                    <ProjectCard 
                        title='Project 1'
                        desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna quis aliquet lacinia, nisl nisl ultrices nisl, quis aliquet nisl nisl ut.'
                        link='link.com'
                        src='https://via.placeholder.com/250x150'
                    />
                    <ProjectCard 
                        title='Project 2'
                        desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna quis aliquet lacinia, nisl nisl ultrices nisl, quis aliquet nisl nisl ut.'
                        link='link.com'
                        src='https://via.placeholder.com/250x150'
                    />
                    <ProjectCard 
                        title='Project 3'
                        desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna quis aliquet lacinia, nisl nisl ultrices nisl, quis aliquet nisl nisl ut.'
                        link='link.com'
                        src='https://via.placeholder.com/250x150'
                    />
                </div>
            </div>
        </div>
    )
}
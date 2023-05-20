'use client'

import React, { useState, useEffect } from 'react'
import '../style.css'

import ProjectCard from './ProjectCard'
import Me from './Me'
import Links from './Links'

export default function General() {

    const [projects, setProjects] = useState(null);

    useEffect(() => {
        fetch('http://localhost:4000/projects')
        .then(response => response.json())
        .then(data => setProjects(data));
    }, []);
    
    return (
        <div id='general'>
            <Me />
            <Links />
            <div id='proj_cont'>
                <div id='proj_title'>Projects</div>
                <div id='projs'>
                    { projects ?
                        Object.values(projects).map((proj, index) => {
                            console.log(proj)
                            console.log(proj.languages)
                            return <ProjectCard 
                                    key={index} 
                                    title={proj.name}  
                                    src={proj.image}
                                    desc={proj.description}
                                    links={proj.links}
                                    lang={{...proj.languages}}
                                />
                        })
                        :
                        <div>Loading...</div>
                    }
                </div>
            </div>
        </div>
    )
}
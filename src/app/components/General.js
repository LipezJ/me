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
        .then(data => setProjects(data))
        .catch(error => console.error(error));
    }, []);

    console.log(projects);

    return (
        <div id='general'>
            <Me />
            <Links />
            <div id='proj_cont'>
                <div id='proj_title'>Projects</div>
                <div id='projs'>
                    { projects ?
                        Object.values(projects).map((proj, index) => {
                            return <ProjectCard 
                                    key={index} 
                                    title={proj.name}  
                                    src='https://via.placeholder.com/250x150'
                                    desc={proj.description}
                                    link={proj.links.github}
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
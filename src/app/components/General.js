'use client'

import { useState, useEffect } from 'react'
import '../style.css'

import ProjectCard from './ProjectCard'
import Me from './Me'
import Links from './Links'

export default function General() {

    const [projects, setProjects] = useState(null);

    useEffect(() => {
        fetch('https://meapi.fly.dev/projects')
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
                        <div id='loading'>Loading...</div>
                    }
                </div>
            </div>
        </div>
    )
}
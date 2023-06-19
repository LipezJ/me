'use client'

import { useState, useEffect } from 'react'
import ProjectCard from '../components/ProjectCard'
import Me from '../components/Me'
import Links from '../components/Links'

export default function General() {

    const [projects, setProjects] = useState(null);

    useEffect(() => {
        fetch('https://meapi.fly.dev/projects')
        .then(response => response.json())
        .then(data => setProjects(data));
    }, []);
    
    return (
        <>
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
        </>
    )
}
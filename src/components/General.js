import ProjectCard from './ProjectCard'
import Me from './Me'
import Links from './Links'

export default async function General() {

    const query = await fetch('https://meapi.fly.dev/projects', { cache: 'no-cache'})
    const projects = await query.json()

    return (
        <>
            <Me />
            <Links />
            <div id='proj_cont'>
                <div id='projects'>Projects 🛩️</div>
                <div id='projs'>
                    { projects &&
                        projects.map((proj, index) => {
                            return <ProjectCard 
                                    key={index} 
                                    {...proj}
                                />
                        })
                    }
                </div>
            </div>
        </>
    )
}
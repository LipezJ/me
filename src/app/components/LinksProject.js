import React from 'react'
import '../style.css'

export default function LinksProject(props) {
    return (
        <div className='links_p_cont'>
            {   
                props.links &&
                Object.keys(props.links).map((name, index) => {
                    return <a 
                            key={index} className='link_p' 
                            href={props.links[name]}
                            target='blank'>
                                view {name}
                            </a>
                })
            }
        </div>
    )
}
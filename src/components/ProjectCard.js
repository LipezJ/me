import LinksProject from './LinksProject'
import ViewImg from '../islands/ViewImg'
import Languages from './Languages'

export default function ProjectCard(props) {
    return (
        <div className='project_card'>
            <div>
                <div className='head_p'>
                    <div className='title_p'>
                            {props.title}
                    </div>
                    <Languages langs={props.lang} />
                </div>
            </div>
            <div className='project_card_p '>
                <ViewImg src={props.src} alt={props.title} />
                <div className='desc_p'>
                    {props.desc}
                </div>
            </div>
            <LinksProject links={props.links} />
        </div>
    )
}
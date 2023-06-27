import LinksProject from './LinksProject'
import ViewImg from '../islands/ViewImg'
import Languages from './Languages'

export default function ProjectCard(props) {
    return (
        <div className='project_card'>
            <div>
                <div className='head_p'>
                    <div className='title_p'>
                            {props.name}
                    </div>
                    <Languages langs={props.languages} />
                </div>
            </div>
            <div className='project_card_p '>
                {
                    props.image &&
                    <ViewImg src={props.image} alt={props.name} />
                }
                <div className='desc_p'>
                    {props.description}
                </div>
            </div>
            <LinksProject links={props.links} />
        </div>
    )
}
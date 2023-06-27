import './locals.css'

import Links from '../../components/Links'
import { changeTitle } from '../layout';

export default async function LinksPage() {

    changeTitle('Links | Lipez')

    const query = await fetch('http://localhost:4000/links', { cache: 'no-cache'})
    const links = await query.json()
    
    return (
            <>
                <div id='me'>
                    <div id='prof_img_cont'>
                        <img src='./img/me_profile_comp.png' alt='links' />
                    </div>
                    <div id='me_name'>
                        <div id='title_links'>Lipez</div>
                        <div id='subtitle_links'>Developer & Illustrator</div>
                    </div>
                </div>
                <div id='links_cont_page'>
                    <Links />
                    <div className='link_cont'>
                        {
                            links &&
                            links.map((link, index) => {
                                    return <a key={index} className='links_cont link' href={link.url} target='_blank' title={link.name}>{link.name}</a>
                            }) 
                        }
                    </div>
                </div>
            </>
    )
}
import './locals.css'
import fs from 'fs'

import Links from '../../components/Links'
import { metadata } from '../layout';

export default function LinksPage() {

    const links = JSON.parse(fs.readFileSync('./public/data/links.json', 'utf8'));
    metadata.title = 'Links | Lipez'
    
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
                            Object.values(links).map((link, index) => {
                                    return <a key={index} className='links_cont link' href={link.url} target='_blank' title={link.name}>{link.name}</a>
                            }) 
                        }
                    </div>
                </div>
            </>
    )
}
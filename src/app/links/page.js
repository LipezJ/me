import '../style.css'
import '../globals.css'
import './locals.css'
import fs from 'fs'

import Head from 'next/head'
import Links from '../components/Links'

export default function LinksPage() {

    const links = JSON.parse(fs.readFileSync('./public/data/links.json', 'utf8'));

    return (
            <div id='links_main'>
                <Head>
                    <title>Lipez | Links</title>
                </Head>
                <div id='me'>
                    <div id='prof_img_cont'>
                        <img src='https://meapi.fly.dev/img/me_profile-comp' alt='links' />
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
            </div>
    )
}
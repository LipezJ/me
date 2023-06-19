import { FaGithubSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa'

export default function Links() {
    return (
        <div className='links_cont'>
            <div id='links'>
                <a className='links' href='https://twitter.com/lpe_47' target='_blank' title='twitter'>
                    <FaTwitterSquare />
                    twitter
                </a>
                <a className='links' href='https://github.com/LipezJ' target='_blank' title='github'>
                    <FaGithubSquare />
                    github
                </a>
                <a className='links' href='https://www.instagram.com/lpe_47/' target='_blank' title='instagram'>
                    <FaInstagramSquare />
                    instagram
                </a>
            </div>
        </div>
    )
}
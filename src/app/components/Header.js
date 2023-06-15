import '../style.css'
import { FaGithub } from 'react-icons/fa'
import Link from 'next/link'

export default function HeaderCont() {
    return (
        <div id='header'>
            <div className='header_comp' id='logo'><Link href='/' title='home' >리페스</Link></div>
            <nav className='header_comp'>
                <ul>
                    <li><Link href="/blog" title='blog'>Blog</Link></li>
                    <li><Link href='/links' title='links'>Links</Link></li>
                    <li>
                        <form action="" name='searchform'>
                            <input type="text" name='isearch' id='isearch' placeholder='Search...' />
                        </form>
                    </li>
                </ul>
                <div id='github'>
                    <Link href='https://github.com/LipezJ/me' target='_blank' title='repo'>
                        <FaGithub />
                    </Link>
                </div>
            </nav>
        </div>
    )
}
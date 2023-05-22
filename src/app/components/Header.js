import '../style.css'
import { FaGithub } from 'react-icons/fa'

export default function Header() {
    return (
        <header>
            <div className='header_comp' id='logo'><a href='/'>리페스</a></div>
            <nav className='header_comp'>
                <ul>
                    <li><a href='/blog' title='blog'>Blog</a></li>
                    <li>
                        <form action="" name='searchform'>
                            <input type="text" name='isearch' id='isearch' placeholder='Search...' />
                        </form>
                    </li>
                </ul>
                <div id='github'>
                    <a href='https://github.com/LipezJ/me' target='_blank' title='repo'>
                        <FaGithub />
                    </a>
                </div>
            </nav>
        </header>
    )
}
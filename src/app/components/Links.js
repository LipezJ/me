import React from 'react'
import '../style.css'
import { FaGithub, FaGithubSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa'

export default function Footer() {
    return (
        <div id='links_cont'>
            <div id='links'>
                <a className='links' href='https://twitter.com/lpe_47' target='_blank'>
                    <FaTwitterSquare />
                    twitter
                </a>
                <a className='links' href='https://github.com/LipezJ' target='_blank'>
                    <FaGithubSquare />
                    github
                </a>
                <a className='links' href='https://www.instagram.com/lpe_47/' target='_blank'>
                    <FaInstagramSquare />
                    instagram
                </a>
            </div>
        </div>
    )
}
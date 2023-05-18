import React from 'react'
import '../style.css'

import { toggleTheme } from '../../code/functions.js'

export default function Footer() {
    return (
        <footer>
            <div id='theme_cont'>
                <button id='themeb' onClick={toggleTheme}>Toggle Theme</button>
            </div>
            <div id='credits_cont'>
                <p>Created by <a href=''></a></p>
            </div>
        </footer>
    )
}
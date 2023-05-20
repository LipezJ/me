'use client'

import React, { useState } from 'react'
import '../style.css'

export default function ViewImg(props) {
    const [view, setView] = useState(false);
    const changeView = () => {
        setView(!view);
    }
    return (
        <React.Fragment>
            { view &&
                <div id='view_img_cont' onClick={changeView}>
                    <div id='view_img'>
                        <img src={props.src} alt=""/>
                    </div>
                </div>
            }
            <img onClick={changeView} src={props.src} alt={props.alt} />
        </React.Fragment>
    )
}
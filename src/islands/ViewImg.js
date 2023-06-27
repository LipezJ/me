'use client'

import { useState } from 'react'
import { HiZoomIn, HiZoomOut } from 'react-icons/hi'

export default function ViewImg(props) {
    const [view, setView] = useState(false);
    const changeView = () => {
        setView(!view);
    }
    return (
        <>
            { view &&
                <div id='view_img_cont' onClick={changeView}>
                    <div id='view_img'>
                        <img src={props.src} alt={props.alt}/>
                        <div className='zoom_view'>
                            <HiZoomOut />
                        </div>
                    </div>
                </div>
            }
            <div className='img_p' onClick={changeView}>
                <img title={props.alt}  src={props.src+'-comp'} alt={props.alt} />
                <div className='img_p_zoom'>
                    <HiZoomIn />
                </div>
            </div>
        </>
    )
}
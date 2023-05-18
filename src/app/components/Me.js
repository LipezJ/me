import React from 'react'
import '../style.css'

export default function Me() {
    return (
        <React.Fragment>
            <div id='me'>
                <div id='profile'>
                    <img id='profileimg' src="http://127.0.0.1:4000/profileimg" alt="Image alt text" />
                </div>
                <div id='me_name'>
                    <div id='title'>Lipez</div>
                    <div id='subtitle'>Programmer & Illustrator</div>
                    <div id='names'>@Lipezj  @Lpe_47</div>
                </div>
            </div>
            <div id='me_desc'>
                <p>
                    I want to apply my current and future skills to develop amazing solutions, programs and many other things.
                </p>
                <p>
                    I like programming for the backend but the frontend is also important for me, most of my projects have been to help develop as JV, others to simply have fun and learn how to PONG and PONG-ONLINE, also projects like the online CHAT are great too.
                </p>
            </div>
        </React.Fragment>
    )
}
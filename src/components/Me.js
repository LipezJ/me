import Image from 'next/image'

export default function Me() {
    return (
        <>
            <div id='me'>
                <div id='profile'>
                    <Image title='lipez' id='profileimg' src="/img/me_profile.png" alt="lipez" width={300} height={300} />
                </div>
                <div id='me_name'>
                    <div id='title'>Lipez</div>
                    <div id='subtitle'>Developer & Illustrator</div>
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
        </>
    )
}
import { SiPython, SiCplusplus, SiC, SiJavascript } from 'react-icons/si'

const langs = {
    'python': <SiPython />,
    'c++': <SiCplusplus />,
    'javascript': <SiJavascript />,
    'c': <SiC />
}

export default function Languages(props) {
    return (
        <div className='lang_c'>
            {
                Object.values(props.langs).map((lang, index) => {
                    return (
                        <div key={index} className='lang'>
                            {langs[lang]}
                        </div>
                    )
                })
            }
        </div>
    )
}
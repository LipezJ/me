import Link from 'next/link'
 
export default function NotFound(props) {
  return (
    <> 
        <div id='not_found'>
            <div id='not_found_cont'>
                <div id='title'>{props.title}</div>
                <div id='subtitle'>{props.desc}</div>
                <div>
                    <Link href='/' className='links links_cont' style={{marginTop: "0px"}} >Go Home</Link>
                </div>
            </div>
        </div>
    </>
  );
}
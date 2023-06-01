import './style.css'

import Head from 'next/head'
 
export default function NotFound() {
  return (
    <> 
        <Head>
            <title>404 | Lipez</title>
        </Head>
        <div id='not_found' style={{height: "90vh"}}>
            <div id='not_found_cont'>
                <div id='title'>404</div>
                <div id='subtitle'>Ups... Page not found</div>
                <div id='link'>
                    <a href='/' >Go Home</a>
                </div>
            </div>
        </div>
    </>
  );
}


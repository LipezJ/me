import '../src/app/style.css'
import '../src/app/globals.css'

import Head from 'next/head'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export default function Custom404() {
    return <>
        <Header />
        <Head>
            <title>404</title>
        </Head>
        <main id='not_found' style={{height: "90vh"}}>
            <div id='not_found_cont'>
                <div id='title'>404</div>
                <div id='subtitle'>Page not found</div>
            </div>
        </main>
        <Footer />
    </>
        
}
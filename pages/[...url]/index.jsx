import Head from 'next/head';
import React, { useEffect } from 'react'

export default function Ix() {

    let mainurl = '';
    useEffect(() => {
        let data = location.href.split('/').slice(3);

        data.map(x => {
            mainurl += '/' + x
        })


        console.log(mainurl)
        location.href = 'https://dailypositive24.com' + mainurl
    }, [])


    return (
        <div>

            <Head>
                <title></title>
                <meta property="og:image" content={mainurl} />
            </Head>
        </div>
    )
}

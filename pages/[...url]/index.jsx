import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useLayoutEffect, useState } from 'react'

export default function Ix({ Image }) {

    const router = useRouter()
    const url = router.query.url[0];

    console.log(url)

    useEffect(() => {
        location.href = 'https://dailypositive24.com/' + url
    }, [])


    return (
        <div>

            <Head>
                <title></title>
                <meta property="og:image" content={Image} />
            </Head>
        </div>
    )
}


export async function getServerSideProps(Context) {

    let mainurl;
    const { query } = Context
    mainurl = query.url[0]



    let data = await fetch('http://localhost:3000/api/getMetadata', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            url: 'https://dailypositive24.com/' + mainurl
        })
    })

    data = await data.json()



    return {
        props: {
            Image: data.metadata.image
        }
    }
}
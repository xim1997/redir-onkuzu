import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useLayoutEffect, useState } from 'react'

export default function Ix({ metadata }) {

    const router = useRouter()
    const url = router.query.url[0];

    console.log(url)

    useEffect(() => {
        location.href = 'https://dailypositive24.com/' + url
    }, [])


    return (
        <div>

            <Head>
                <title>{metadata.title}</title>
                <meta property="og:image" content={metadata.image} />
            </Head>
        </div>
    )
}


export async function getServerSideProps(Context) {

    let mainurl;
    const { query } = Context
    mainurl = query.url[0]

    try {



        let data = await fetch('http://localhost:3000/api/getMetadata', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                url: 'https://dailypositive24.com/' + mainurl
            })
        })

        data = await data.json()
        console.log(data.metadata)


        return {
            props: {
                metadata: data.metadata
            }
        }

    } catch (error) {

        console.log(error)
        return {
            props: {
                metadata: { title: "", image: '' }
            }
        }
    }
}
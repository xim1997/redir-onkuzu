import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useLayoutEffect, useState } from 'react'

export default function Ix({ metadata }) {

    const router = useRouter()
    const url = router.query.url[0];

    console.log(metadata.image)

    useEffect(() => {
        setTimeout(() => {

            location.href = 'https://dailypositive24.com/' + url
        }, 1000);
    }, [])


    return (
        <div>
            {metadata &&
                <Head>
                    <title>{metadata.title}</title>
                    <meta property="og:image" content={metadata.image} />
                    <meta property="og:title" content={metadata.title} />
                    <meta property="og:url" content={"https://dailypositive24.com/" + url} />
                    <meta property="og:description" content={'' + metadata.description} />
                    <meta property="og:site_name" content="Daily Positive" />
                    <meta property="og:image:width" content="1280" />
                    <meta property="og:image:height" content="720" />
                </Head>}
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
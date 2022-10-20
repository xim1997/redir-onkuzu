import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useLayoutEffect, useState } from 'react'

export default function Ix({ metaTags }) {

    const router = useRouter()
    const url = router.query.url[0];

    // console.log(metaTags)

    useEffect(() => {
        setTimeout(() => {

            location.href = 'https://dailypositive24.com/' + url
        }, 1000);
    }, [])


    return (
        <div>
            {metaTags &&

                <Head>
                    {metaTags && Object.entries(metaTags).map((entry) => {

                        console.log(entry)
                        return (

                            <meta key={entry} property={entry[0]} content={entry[1]} />
                        )
                    }
                    )}
                </Head>
            }
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

        // const list = [
        //     { key: 'og:title', value: data.metadata.title },
        //     { key: 'og:description', value: data.metadata.description },
        //     { key: 'og:image', value: data.metadata.image },
        //     { key: 'og:url', value: data.metadata.url },
        // ]

        const metaTags = {
            "og:title": ` Ticket Price, Registration, Dates & Reviews`,
            "og:description": data.metadata.description,
            "og:image": data.metadata.image,
            "og:url": data.metadata.url,
        };

        return {
            props: {
                metaTags
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
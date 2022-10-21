import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export default function Comp({ metaTags }) {

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

                            <meta key={entry[0]} name={entry[0]} content={entry[1]} />
                        )
                    }
                    )}
                </Head>


            }
<p>hello check</p> 
        </div>
    )
}


export async function getStaticProps(Context) {

    let mainurl = [];
    let slugString = '';
    const slugs = Context
    mainurl = slugs.params.slugs

    mainurl.map(x => {
        slugString += x + '/'
    });
    // console.log(slugString)



    let data = await fetch('http://localhost:3000/api/getMetadata', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            url: 'https://dailypositive24.com/' + slugString
        })
    })

    data = await data.json()
    console.log(data.metadata)


    const metaTags = {
        "og:title": data.metadata.title,
        "og:description": data.metadata.description,
        "og:image": data.metadata.image,
        "og:url": data.metadata.url,
    };

    return {
        props: {
            metaTags
        }
    }


}



export async function getStaticPaths() {

    return {
        paths: ['/posts/school-bus-driver-braids-girls-hair-each-morning-since-her-mom-died/'],
        fallback: true, // can also be true or 'blocking'
    }
}
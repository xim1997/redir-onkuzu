import Head from 'next/head';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'


export default function Target() {

    const store = useSelector(x => x.store)

    useEffect(() => {
        setTimeout(() => {

            location.href = store.metadata.url
        }, 0);
    }, [])
    return (
        <>
            <Head>

                <title>{store.metadata.title}</title>
                <meta name={'description'} content={store.metadata.description} />
                <meta name={'image'} content={store.metadata.image} />
                <meta name={'url'} content={store.metadata.url} />

            </Head>
            {/* <div>Target</div> */}

        </>
    )
}

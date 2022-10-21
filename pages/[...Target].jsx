import Head from 'next/head';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'


export default function Target({ metadata }) {

    // const store = useSelector(x => x.store)

    // useEffect(() => {
    //     setTimeout(() => {

    //         // location.href = store.metadata.url
    //     }, 0);
    // }, [])
    return (
        <>
            <Head>

                {/* <title>{metadata.title}</title>
                <meta name={'description'} content={metadata.description} />
                <meta name={'image'} content={metadata.image} />
                <meta name={'url'} content={metadata.url} /> */}

            </Head>
            <div>Target</div>

        </>
    )
}



// export function getStaticProps() {
//     const store = useSelector(x => x.store)


//     return {
//         porps: {
//             metadata: {
//                 title: store.metadata.title,
//                 description: store.metadata.description,
//                 image: store.metadata.image,
//                 url: store.metadata.url
//             }
//         }
//     }
// }

// export function getStaticPaths() {

//     return {
//         paths: [],
//         fallback: true
//     }
// }
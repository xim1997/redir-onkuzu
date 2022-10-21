import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

import {useDispatch} from 'react-redux' 
import { update } from '../../redux/slice'


export default function Page({ metaTags }) {

    const dispatch = useDispatch()

    const router = useRouter()
    const { page } = router.query

    useEffect(() => {



        
        dispatch(update({ ...metaTags }))


        let data = Math.random() * 100000000000000000
        // console.log(data)
        router.push(`/${data}`)

    }, [])


    console.log(page)
    return (
        <div>[...page]</div>
    )
}


export async function getServerSideProps(Context) {


    let mainurl = [];
    let slugString = '';
    const slugs = Context
    mainurl = slugs.params.page

    mainurl.map(x => {
        slugString += x + '/'
    });



    let data = await fetch('http://localhost:3000/api/getMetadata', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            url: 'https://dailypositive24.com/' + slugString
        })
    })

    data = await data.json()
    // console.log(data.metadata)


    const metaTags = {
        title: data.metadata.title,
        description: data.metadata.description,
        image: data.metadata.image,
        url: data.metadata.url,
    };

    return {
        props: {
            metaTags
        }
    }


}
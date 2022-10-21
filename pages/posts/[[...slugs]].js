import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { update } from '../../redux/slice'

export default function Comp({ metaTags }) {

    const dispatch = useDispatch()

    const router = useRouter()
    const { slugs } = router.query
    // console.log(slugs[0])
  

    useEffect(() => {


        dispatch(update({ ...metaTags }))


        let data = Math.random() * 100000000000000000
        // console.log(data)
        // router.push(`/${data}`)

    }, )


    return (
        <div>
        </div>
    )
}


export async function getServerSideProps(Context) {

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




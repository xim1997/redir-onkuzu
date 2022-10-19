import React, { useEffect } from 'react'

export default function Ix() {

    useEffect(() => {
        let data = location.href.split('/').slice(3);
        let mainurl = '';

        data.map(x => {
            mainurl += '/' + x
        })

        console.log(mainurl)
        location.href = 'https://dailypositive24.com'+mainurl
    }, [])


    return (
        <div></div>
    )
}

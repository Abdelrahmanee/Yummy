import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Loading from '../Loading/Loading.jsx'
import Card from '../Card/Card.jsx'


export default function AreaDetails() {
    let { country } = useParams()


    let [details, setDetails] = useState({})

    async function getDetails() {
        let {data} =await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`)
        setDetails(data.meals);
    }

    useEffect(() => {
        getDetails();
    }, [])

    return (
        <>
            {country && details ? (
                <div className="row g-4 py-5">
                    {details.length && details.map((item, index) => (
                        <Card meal={item} key={index} />
                    ))}
                </div>
            ) : <Loading />}
        </>
    )
}

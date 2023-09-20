import React, { useEffect, useState } from 'react'
import Style from './IngradientsDetails.jsx'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Loading from '../Loading/Loading.jsx';
import Card from '../Card/Card.jsx';



export default function IngradientsDetails() {

    let { ingredient } = useParams()
    let [data, setData] = useState(null)

    async function getData() {
        let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
        setData(data.meals)
    }

    useEffect(() => {getData()}, [])

    return (
        <>
        {ingredient && data ? (
            <div className="row g-4 py-5">
                {data.length && data.map((item, index) => (
                    <Card meal={item} key={index} />
                ))}
            </div>
        ) : <Loading />}
    </>
    )
}

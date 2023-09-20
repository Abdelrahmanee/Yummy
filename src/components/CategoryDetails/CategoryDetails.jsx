import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Loading from '../Loading/Loading.jsx';
import Card from '../Card/Card.jsx';


export default function CategoryDetails() {
    let { category } = useParams();

    console.log(category);

    let [details, setDetails] = useState({})

    async function getDetails() {
        let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        // setDetails(data.meals[0]);
        setDetails(data.meals);
    }

    useEffect(() => {
        getDetails();
    }, [])
    return (
        <>
            {!details.length ?  <Loading /> : (<div className='row py-4 g-4'>
                {details.map((item, index) => <Card meal={item} key={index} />)}
            </div>)}
        </>
    )
}

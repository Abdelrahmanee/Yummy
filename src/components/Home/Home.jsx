import Card from '../Card/Card.jsx'
import Loading from '../Loading/Loading.jsx'
import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function Home() {
    let [meals, setMeals] = useState([])
    async function FetchData() {
        let { data } = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s')
        setMeals(data.meals);
    }

    useEffect(() => {
        FetchData();
    }, [])
    return (
        <>
            {meals.length ? <div className="row g-4 py-5 mx-auto">
                {meals.map((mealInfo, index) => <Card meal={mealInfo} key={index} />)}
            </div> : <Loading />}
        </>
    )
}

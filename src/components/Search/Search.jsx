import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from '../Card/Card.jsx';

export default function Search() {

    const [meals, setMeals] = useState([]);

    async function getMeals(type, value) {
        let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?${type}=${value}`)
        value && data.meals ?setMeals(data.meals) :setMeals([])
        console.log(data.meals);
    }
    useEffect(() => {
        getMeals()
    }
        , [])
    return (<>
        <div className="row my-5">
            <div className="col-md-6">
                <input onChange={(e) => {
                    getMeals("s", e.target.value)
                }} type="text" className={`form-control `} placeholder='Search with meal name' />
            </div>
            <div className="col-md-6">
                <input onChange={(e) => {
                    getMeals("f", e.target.value)
                }} maxLength="1" type="text" className={`form-control `} placeholder='Search with first letter' />
            </div>
        </div>

        <div className="row gy-4">
            {meals ? meals.map((item, index) => (
                <Card meal={item} key={index} />
            ))
                : <div><h2>No Meals Found</h2></div>
            }
        </div>
    </>
    )
}

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loading from '../Loading/Loading.jsx'
import { Link } from 'react-router-dom'
export default function Ingredients() {

    let [ing, setIng] = useState(null)

    async function getIng() {
        let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
        setIng(data.meals)
    }

    useEffect(() => {
        getIng();
    }, [])

    return (

        <>
            {!ing ? <Loading /> : (
                <div className="row py-4 g-4">
                    {ing.slice(0, 24).map((item, index) => (
                        <div className="col-md-3 text-center pointer" key={index}>
                            <Link  to={`/ingredients/${item.strIngredient}`}>
                                <i className="display-3 fa-solid fa-utensils"></i>
                                <h3>{item.strIngredient}</h3>
                                <p>{item?.strDescription?.split(" ").slice(0, 25).join(" ")}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}

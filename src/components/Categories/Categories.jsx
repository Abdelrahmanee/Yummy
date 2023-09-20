import React, { useEffect, useState } from 'react'
import Style from './Categories.module.css'
import axios from 'axios'
import Card from '../Card/Card.jsx'
import Loading from '../Loading/Loading.jsx'
import { Link } from 'react-router-dom'


export default function Categories() {

    let [category, setCategory] = useState(null)

    async function getCategories() {

        let { data } = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
        setCategory(data.categories)
    }

    useEffect(() => { getCategories() }
        , [])

    return (
        <>
            {!category ? (
                <Loading />
            ) : (
                <div className="row g-4 py-5">
                    {category.map((category, index) => (
                        <div key={index} className={`col-md-3`}>
                            <Link
                                className="text-dark"
                                to={`/categories/${category.strCategory}`}
                            >
                                <div
                                    className={`${Style.inner} position-relative rounded-3 overflow-hidden`}
                                >
                                    <img
                                        src={category.strCategoryThumb}
                                        className="w-100"
                                        alt={category.strCategory}
                                    />
                                    <div className="layer w-100 h-100 position-absolute text-center start-0 d-flex flex-column justify-content-center align-items-center p-3">
                                        <h2>{category.strCategory}</h2>
                                        <p>
                                            {category.strCategoryDescription
                                                ?.split(" ")
                                                .slice(0, 20)
                                                .join(" ")}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}

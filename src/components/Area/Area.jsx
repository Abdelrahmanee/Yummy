import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loading from '../Loading/Loading.jsx'
import { Link } from 'react-router-dom'

export default function Area() {

    let [area, setArea] = useState(null)

    async function getArea() {
        let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
        setArea(data.meals)
    }

    useEffect(() => {
        getArea();
    }, [])

    return (
        <>
            {!area ? (
                <Loading />
            ) : (
                <div className="row py-4 g-4">
                    {area.map((item, index) => (
                        <div key={index} className="col-md-3 text-center pointer">
                            <Link to={`/area/${item.strArea}`}>

                                <i className=" display-4 fa-solid fa-house-laptop"></i>
                                <h3>{item.strArea}</h3></Link>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

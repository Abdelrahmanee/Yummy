import React, { useEffect, useState } from 'react'
import Style from './Card.module.css'
import imgUrl from '../../assets/imgaes/about.jpg'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Card({ meal }) {
    if (meal == undefined) {
        return
    }
    else {
        return (
            <div className={`${Style.meal} col-md-3`}>
                <Link to={`/${meal.idMeal}`}>
                    <div className={`${Style.inner} position-relative rounded-3 overflow-hidden`}>
                        <img src={meal.strMealThumb} className={`w-100`} alt="Meal Title" />
                        <div className="layer position-absolute h-100 ps-2 w-100 start-0 d-flex align-items-center text-dark">
                            <h2>{meal.strMeal}</h2>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}

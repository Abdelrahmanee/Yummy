import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
export default function Details() {
    let { id } = useParams();
    //console.log(id);
    let [details, setDetails] = useState({})

    async function getDetails() {
        let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        // setDetails(data.meals[0]);
        return data.meals[0];
    }

    async function getRecipReady() {
        let recipeObject = await getDetails();
        recipeObject.Ingredients = [];
        const detalisMap = new Map(Object.entries(recipeObject));
        for (let i = 0; i < detalisMap.size; i++) {
            if (detalisMap.get(`strIngredient${i}`)) {
                recipeObject.Ingredients.push(`${detalisMap.get(`strMeasure${i}`)} ${detalisMap.get(`strIngredient${i}`)}`
                )
            }
        }
        setDetails(recipeObject);
        console.log(recipeObject);
    }

    useEffect(() => {
        getRecipReady();
    }, [])
    return (
        <>
            <div className="row py-5">
                <div className="col-md-4">
                    <img src={details.strMealThumb} className='w-100 rounded-3' alt={``} />
                    <h3 className='pt-3'>{details.strMeal}</h3>
                    <a href="/" className='btn btn-warning w-100'>Back To Home</a>
                </div>
                <div className="col-md-8 ps-5">
                    <div className="instruction">
                        <h2>Instructions</h2>
                        <p> {details.strInstructions}</p>
                    </div>
                    {/* Area info */}
                    <div className="area d-flex align-items-center pt-3">
                        <h2 className='m-0'>Area :</h2>
                        <span className='d-block mb-0 mt-1 ps-3 h4 fw-semibold'> {details.strArea}</span>
                    </div>
                    {/* Category Info */}
                    <div className="category d-flex align-items-center pt-3">
                        <h2 className='m-0'>Category :</h2>
                        <span className='d-block mb-0 mt-1 ps-3 h4 fw-semibold'> {details.strCategory}</span>
                    </div>
                    {/*Recipes   */}
                    <div className="recipes pt-3">
                        <h2 className="m-0">Recipes :</h2>
                        {details.Ingredients &&
                            details.Ingredients.map((ingredient, index) => (
                                <span key={index} className="btn btn-warning me-2 mt-2">
                                    {ingredient}
                                </span>
                            ))}
                    </div>

                    {/* Tags */}
                    {details.strTags &&(
                    <div className="tags  pt-3">
                        <h2 className='m-0'>Tags  :</h2>
                        {details.strTags.split(",").filter((tag) => !!tag).map((tag ,index)=>
                            <span key={index} className='btn btn-primary me-2 mt-2'>{tag}</span>
                        )
                        }
                    </div>
                    )}
                    {/* views */}
                    <div className="pt-4">
                        <a
                            className="btn btn-lg btn-success me-2"
                            href={details.strSource}
                            target="_blank"
                        >
                            Source
                        </a>
                        <a
                            className="btn btn-lg btn-danger"
                            href={details.strYoutube}
                            target="_blank"
                        >
                            Youtube
                        </a>
                    </div>

                </div>
            </div>

        </>
    )
}

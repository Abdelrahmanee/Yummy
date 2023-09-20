import React from 'react'
import Style from './Notfound.module.css'
import { Link } from 'react-router-dom'

export default function Notfound() {
    return (
        <>
            <div classNameName={Style.center} >
                <div className={Style.notfound}>
                    <div className={Style[`notfound-404`]}>
                        <h1>404</h1>
                    </div>
                    <h2 className='py-3 text-white'>Oops, The Page you are looking for can't be found!</h2>
                    
                    <Link to="/"><span className={Style.arrow}></span>Return To Homepage</Link>
                </div>
            </div>

        </>
    )
}

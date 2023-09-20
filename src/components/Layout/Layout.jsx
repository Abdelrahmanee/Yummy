import React from 'react'
import { Outlet } from 'react-router-dom'
import Card from '../Card/Card.jsx'
import Sidebar from '../Sidebar/Sidebar.jsx'

export default function Layout() {
    return (
        <>
        <Sidebar/>
        <div className="container">
        <Outlet></Outlet>
        <Card></Card>
        </div>
        </>
    )
}

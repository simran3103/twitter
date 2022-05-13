import React from 'react'
import SideNav from '../SideNav/SideNav'
import Main from '../Main/Main'
import Cards from '../Cards/Cards'
import '../Home/Home.scss'

const Home = () => {
    return (
        <div className='home'>
            <div className='side-nav'><SideNav /></div>
            <div className='main'><Main /></div>
            <div className='cards'><Cards /></div>
        </div>)
}

export default Home
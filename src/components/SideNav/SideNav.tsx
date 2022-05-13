import React, { useEffect, useState } from 'react'
import bird from '../assets/twitter-logo-official.jpg'
import '../SideNav/SideNav.scss'
import { SideNavData } from '../data/SideNavData'

const SideNav = () => {
    const [data, setData] = useState<string[]>([])

    useEffect(() => {
        setData(SideNavData)
    }, [])

    return (
        <div className='t-sidenav'>
            <div className='bird'><img src={bird} alt='bird' style={{ width: '5rem' }} /></div>
            <div className='side-data'>
                {
                    data.map((dt) => <h3>{dt}</h3>)
                }
            </div>
        </div>)
}

export default SideNav
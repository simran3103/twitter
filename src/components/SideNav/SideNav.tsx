import React, { useEffect, useState } from 'react'
import bird from '../assets/twitter-logo-official.jpg'
import '../SideNav/SideNav.scss'
import { SideNavData } from '../data/SideNavData';
import { SideNavType } from '../types/types';

const SideNav = () => {
    const [data, setData] = useState<SideNavType | string[]>([])

    useEffect(() => {
        setData(SideNavData)
    }, [])

    console.log('data', data)

    return (
        <div className='t-sidenav'>
            <div className='bird-sdata'>
                <div className='bird'><img src={bird} alt='bird' style={{ width: '5rem' }} /></div>
                <div className='side-data'>
                    <div>{data.length !== 0 ? data.map((dt) => (<h3>{dt}</h3>)) : null}</div>
                    <div className='twit-btn'><span >Tweet</span></div>
                </div>
            </div>
            <div className='side-end'>
                <div>Mohit Singh Negi</div>
                <div>Msnegi@gmail.com</div>
            </div>
        </div>
    )
}

export default SideNav
import { useEffect, useState } from 'react';
import { SideNavData } from '../data/SideNavData';
import SideDetails from '../SideDetails/SideDetails';
import pro from '../assets/profile.png'
import './SideNav.scss';

type SideNavType = {
    name?: string,
    img: string
}[]

const SideNav = () => {
    const [data, setData] = useState<SideNavType | []>([])

    useEffect(() => {
        setData(SideNavData)
    }, [])

    return (
        <div className='sidenav'>
            {
                data.length !== 0 ? data.map((dt, idx) => (
                    < SideDetails sidedt={dt} key={idx} />
                )) : null
            }
            <button>Tweet</button>
            <div className='sidebottom' >
                <div className='imgdiv'><img src={pro} alt='user_profile' style={{ width: '1rem', height: '1rem' }} /></div>
                <span>
                    <div style={{ fontWeight: 'bold' }}>Mohit Negi</div>
                    <div style={{ color: 'grey', fontStyle: 'oblique' }}>@Mohit.negi03</div>
                </span>

            </div>
        </div>
    )
}

export default SideNav
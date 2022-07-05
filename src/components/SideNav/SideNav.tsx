import { useEffect, useState } from 'react';
import { SideNavData } from '../data/SideNavData';
import SideDetails from '../SideDetails/SideDetails';
// import bird from '../assets/bird.jpg'
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
                <div>Mohit Negi</div>
                <div>Mohit.negi03@gmail.com</div>
            </div>
        </div>
    )
}

export default SideNav
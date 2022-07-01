import SideNav from '../SideNav/SideNav';
import './Main.scss';

const Main = () => {
    return (
        <div className="main">
            <div className="mside"><SideNav /></div>
            <div className="mhome">Home</div>
            <div className="mcards">Cards</div>
        </div>
    )
}

export default Main
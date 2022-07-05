import '../Hheader/Hheader.scss'
import star from '../assets/star.png'

const Hheader = () => {
    return (
        <div className="Hheader">
            <div className='head'>
                <b>Home</b>
                <img src={star} alt='star' />
            </div>
            <div>      Hheader</div>

        </div>
    )
}

export default Hheader
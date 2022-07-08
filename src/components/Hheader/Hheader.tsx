import '../Hheader/Hheader.scss'
import star from '../assets/star.png'
import pro from '../assets/profile.png'
import { useState } from 'react'

const Hheader = () => {
    const [text, setText] = useState<string | undefined>('')

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
    }
    return (
        <div className="head">
            <div className='head-1'>
                <b>Home</b>
                <img src={star} alt='star' />
            </div>
            <div className='head-2'>
                <img src={pro} alt='user_profile' style={{ height: '2rem', width: '2rem', borderRadius: '2rem' }} />
                <input type="text" value={text} placeholder="What's happening?" onChange={(e) => changeHandler(e)} />
            </div >
        </div>
    )
}

export default Hheader
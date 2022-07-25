import '../Hheader/Hheader.scss'
import star from '../assets/star.png'
import pro from '../assets/profile.png'
import { useState } from 'react'

const Hheader = () => {
    const [text, setText] = useState<string | undefined>('')
    const [url, setUrl] = useState<string | undefined>('')

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
    }

    const imageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files![0];
        console.log('files', event.target.files![0])
        // const name = file.name
        // console.log(name)
        setUrl(file.name)
        getBase64(file).then(base64 => {
            localStorage["fileBase64"] = base64;
            console.debug("file stored", base64);
            console.log('base64', base64)
        });
    }

    const getBase64 = (file: any) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                console.log('reader result', reader)
                // setUrl(reader.result.data)
                resolve(reader.result)
            };
            reader.onerror = error => {
                console.log('reader err', error)
                reject(error)
            };
            reader.readAsDataURL(file);
        });
    }

    return (
        <div className="head">
            <div className='head-1'>
                <b>Home</b>
                <img src={star} alt='star' />
            </div>
            <div className='head-2'>
                <img src={url} alt='user_profile' style={{ height: '2rem', width: '2rem', borderRadius: '2rem' }} />
                <input type="text" value={text} placeholder="What's happening?" onChange={(e) => changeHandler(e)} />
            </div >
            <div>
                <label htmlFor="imageFile">Select file</label>
                <input type="file" id="imageFile" name="imgFile" onChange={imageUpload} />
            </div>
        </div>
    )
}

export default Hheader
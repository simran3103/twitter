import './SideDetails.scss'

type SideDetailsType = {
    name?: string,
    img: string
}
type Props = {
    sidedt: SideDetailsType
}
const SideDetails = (props: Props) => {
    console.log('props', props.sidedt.name)
    return (
        <div className="side-details" >
            <div className='img-div'><img src={props.sidedt.img} alt={props.sidedt.name} style={{ width: '2rem', height: '2rem' }} /></div>
            <div className='side-text'>{props.sidedt.name}</div>
        </div>
    )
}

export default SideDetails
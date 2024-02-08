import s from '../scss/Voucher.module.scss';
import AbsoluteImage from './AbsoluteImage';
import img from '../assets/voucher/imageWDiscount.png';
import topWave from '../assets/voucher/waveTop.png';
import bottomWave from '../assets/voucher/waveBottom.png';

export default function Voucher({ xl }) {
    return (
        <div className={`mx-auto ${s.container} `}>
            <p></p>

            <AbsoluteImage 
                top='-10px'
                left='0'
                width='50%'
                height='100%'
                src={img}
            /> 

            <AbsoluteImage 
                top='-4px'
                right='0'
                width='60%'
                height='65%'
                src={topWave}
            /> 

            <AbsoluteImage 
                left='0'
                bottom='0'
                width='50%'
                height='27%'
                src={bottomWave}
            /> 
        </div>
    )
}

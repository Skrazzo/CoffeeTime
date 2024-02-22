import s from '../scss/Voucher.module.scss';
import AbsoluteImage from './AbsoluteImage';
import img from '../assets/voucher/imageWDiscount.png';
import topWave from '../assets/voucher/waveTop.png';
import bottomWave from '../assets/voucher/waveBottom.png';
import { IconBrandFacebookFilled, IconBrandInstagram, IconBrandTwitter } from '@tabler/icons-react';
import logo from '../assets/logo.png';
import cup from '../assets/icons/coffee.png';
import bean from '../assets/icons/coffeeBean.png';
import pot from '../assets/icons/coffeePot.png';
import voucher from '../assets/images/voucher.png';

export default function Voucher({ xl }) {
    

    if(xl) {
        return (
            <img src={voucher} className={`${s.img}`}/>
        )
    }
    return (
        <div className={`mx-auto ${s.container} `}>
            <div className={`${s.text_container}`}>
                <p className={`${s.font}`}>Voucher Discount</p>
                <p className={`${s.paragraph}`}>Elit enim dolor elit officia in fugiat. Ad fugiat laboris amet adipisicing id sint amet adipisicing id sint commodo reprehenderit </p>
                <div>
                    <button className={`${s.btn} mx-auto`}>VALIDATE UNTIL: 01.05.2020</button>
                </div>
            </div>

            <div className={`${s.social_media}`}>
                <div><IconBrandFacebookFilled /></div>
                <span>your account</span>

                <div><IconBrandTwitter /></div>
                <span>your account</span>

                <div><IconBrandInstagram /></div>
                <span>your account</span>
            </div>

            

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

            <AbsoluteImage 
                right='5%'
                top='3%'
                width='20%'
                
                src={logo}
            />

            <AbsoluteImage
                className='opacity-30'
                top='20%'
                left='50%'
                width='40px'
                height='40px'
                src={bean}
            />
            
            <AbsoluteImage
                rotate='30'
                className='opacity-30'
                top='25%'
                left='70%'
                width='40px'
                height='40px'
                src={cup}
            />

            <AbsoluteImage
                className='opacity-30'
                bottom='20%'
                left='40%'
                width='70px'
                height='70px'
                src={pot}
            />
            <AbsoluteImage
                rotate='50'
                className='opacity-30'
                bottom='20%'
                right='10%'
                width='40px'
                height='40px'
                src={bean}
            />
        </div>
    )
}

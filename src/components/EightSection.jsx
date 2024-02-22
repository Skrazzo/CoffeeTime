import s from '../scss/EightSection.module.scss';
import wave from '../assets/waves/wave4.png';
import branch1 from '../assets/images/newYork.png';
import branch2 from '../assets/images/jakarta.png';
import branch3 from '../assets/images/paris.png';
import wave2 from '../assets/waves/wave5.png';

import cup from '../assets/icons/coffee.png';
import bean from '../assets/icons/coffeeBean.png';
import pot from '../assets/icons/coffeePot.png';
import AbsoluteImage from "./AbsoluteImage";

export default function EightSection({ }) {
    return (
        <div className='relative'>
            <img src={wave} className='w-full'/>
            <p className={`${s.font} text-center`}>Our Branches</p>

            <div className='grid grid-cols-1 lg:grid-cols-3 my-12'>
                <div className='flex gap-8 flex-col items-center px-24'>
                    <img src={branch1} />
                    <button className={`${s.btn}`}>New York</button>
                    <p className={`${s.paragraph}`}>Dolor sunt minim nisi aute duis.Dolor sunt minim nisi aute duis.Dolor sunt minim nisi aute duis.Dolor sunt minim nisi aute duis.</p>
                </div>

                <div className='flex gap-8 flex-col items-center px-24'>
                    <img src={branch2} />
                    <button className={`${s.btn}`}>Jakarta</button>
                    <p className={`${s.paragraph}`}>Dolor sunt minim nisi aute duis.Dolor sunt minim nisi aute duis.Dolor sunt minim nisi aute duis.Dolor sunt minim nisi aute duis.</p>
                </div>

                <div className='flex gap-8 flex-col items-center px-24'>
                    <img src={branch3} />
                    <button className={`${s.btn}`}>Paris</button>
                    <p className={`${s.paragraph}`}>Dolor sunt minim nisi aute duis.Dolor sunt minim nisi aute duis.Dolor sunt minim nisi aute duis.Dolor sunt minim nisi aute duis.</p>
                </div>
                
                
            </div>
            <img src={wave2} className="w-full" />

            <AbsoluteImage
                rotate='50'
                className='opacity-30'
                left='250px'
                top='400px'
                src={bean}
            />
            <AbsoluteImage
                rotate='-30'
                className='opacity-30'
                right='150px'
                top='420px'
                src={bean}
            />
            <AbsoluteImage
                rotate='0'
                width='100px'
                height='100px'
                className='opacity-30'
                top='70%'
                left='30%'
                src={pot}
            />
            <AbsoluteImage
                rotate='10'
                width='125px'
                height='125px'
                className='opacity-30'
                right='30%'
                top='75%'
                src={cup}
            />
        </div>
    )
}

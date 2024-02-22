import s from '../scss/SixthSection.module.scss';
import dude from '../assets/images/john.png';
import wumf from '../assets/images/ella.png';
import wave from '../assets/waves/wave3.png';
import cup from '../assets/icons/coffee.png';
import bean from '../assets/icons/coffeeBean.png';
import pot from '../assets/icons/coffeePot.png';
import AbsoluteImage from "./AbsoluteImage";

export default function SixthSextion({  }) {
    return (
        <div className='relative'>
            <div className='flex justify-center'>
                <p className={`${s.font}`}>Customer Reviews</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 mt-20'>
                <div className='flex items-center flex-col gap-8 my-4'>
                    <img src={dude} />
                    <p className={`${s.name}`}>John Peter</p>
                    <p className={`${s.paragraph}`}> aute ea nostrud duis et eu voluptate incididunt consectetur. Occaecat excepteur sit eu aliquip cupidatat exercitation ad non voluptate occaecat duis laborum Lorem.</p>
                </div>
                <div className='flex items-center flex-col gap-8 my-4'>
                    <img src={wumf} />
                    <p className={`${s.name}`}>Ella Thomsan</p>
                    <p className={`${s.paragraph}`}> aute ea nostrud duis et eu voluptate incididunt consectetur. Occaecat excepteur sit eu aliquip cupidatat exercitation ad non voluptate occaecat duis laborum Lorem.</p>
                
                </div>
                
            </div>

            <img src={wave} className='w-full'/>

            <AbsoluteImage
                rotate='40'
                className='opacity-30'
                left='50%' 
                top='200px'
                src={bean}
            />
            <AbsoluteImage
                rotate='10'
                className='opacity-30'
                width='100px'
                height='100px'
                right='20px' 
                top='700px'
                src={cup}
            />
            <AbsoluteImage
                rotate='40'
                className='opacity-30'
                left='40px'
                width='150px'
                height='150px'
                top='550px'
                src={pot}
            />
        </div>
    )
}

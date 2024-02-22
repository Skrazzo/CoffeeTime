import s from '../scss/SixthSection.module.scss';
import dude from '../assets/images/john.png';
import wumf from '../assets/images/ella.png';
import wave from '../assets/waves/wave3.png';

export default function SixthSextion({  }) {
    return (
        <div>
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
        </div>
    )
}

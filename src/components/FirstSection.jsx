import s from '../scss/FirstSection.module.scss';
import AbsoluteImage from './AbsoluteImage';
import img1 from '../assets/icons/coffee.png';
import img2 from '../assets/icons/coffeeBean.png';
import img3 from '../assets/icons/coffeePot.png';
import wave from '../assets/waves/wave1.png';

export default function FirstSection() {
    return (
        <div className='relative'>
            <p className={`ml-20 mt-20 ${s.font}`}>Coffee Time</p>
            <p className={`ml-20 mt-8 ${s.headline}`}>your headline</p>
            <p className={`ml-20 mt-4 ${s.paragraph}`}>Ullamco veniam proident aute enim. Consequat culpa qui elit Lorem laboris anim laboris sint voluptate. Consequat sint dolore mollit eiusmod laborum incididunt. Anim officia laborum exercitation eu.</p>
            <button className={`ml-20 mt-8 ${s.btn}`}>Order Now</button>

            <div className={`${s.coffee}`}></div>

            <AbsoluteImage
                className='opacity-30'
                rotate='30'
                right='700px'
                top='0'
                src={img1}
            />

            <AbsoluteImage
                className='opacity-30'
                rotate='50'
                right='850px'
                top='210px'
                src={img2}
            />

            <AbsoluteImage
                className='opacity-30'
                style={{
                    transform: 'scaleX(-1) scale(1.5) rotate(50deg)',
                    
                }}
                right='1350px'
                bottom='0'
                src={img3}
            />

            <AbsoluteImage 
                width='100%'
                height='auto'
                bottom='-300px'
                src={wave}
            />
        </div>
    )
}

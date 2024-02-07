import s from '../scss/FirstSection.module.scss';
import AbsoluteImage from './AbsoluteImage';
import img1 from '../assets/icons/coffee.png';
import img2 from '../assets/icons/coffeeBean.png';
import img3 from '../assets/icons/coffeePot.png';
import wave from '../assets/waves/wave1.png';
import coffee from '../assets/images/775.png';

export default function FirstSection({ xl, xl2, sm }) {
    // console.log('xl', xl);
    // console.log('xl2', xl2);
    
    return (
        <div className='relative'>
            <p className={`lg:ml-20 mt-20 ${s.font}`}>Coffee Time</p>
            <p className={`lg:ml-20 mt-8 ${s.headline}`}>your headline</p>
            <p className={`lg:ml-20 mt-4 ${s.paragraph}`}>Ullamco veniam proident aute enim. Consequat culpa qui elit Lorem laboris anim laboris sint voluptate. Consequat sint dolore mollit eiusmod laborum incididunt. Anim officia laborum exercitation eu.</p>
            
            <div className='flex justify-center lg:justify-start mt-8 '>
                <button className={`lg:ml-20 ${s.btn}`}>Order Now</button>

            </div>

            
            
            {!sm && 
                <AbsoluteImage
                    width={(xl) ? '500px' : (xl2) ? '800px' : '1000px'}
                    height='auto'
                    right='0'
                    top={(xl) ? '400px' : (xl2) ? '200px' : '0px'}
                    src={coffee}
                />
            }

            <AbsoluteImage
                className='opacity-30 '
                rotate='30'
                right={(sm) ? '5px' : '700px'}
                top='0'
                src={img1}
            />

            <AbsoluteImage
                className='opacity-30'
                rotate='50'
                right={(sm) ? '350px' : '850px'}
                top={(sm) ? '250px' : '210px'}
                src={img2}
            />

            <AbsoluteImage
                className='opacity-30'
                style={{
                    transform: 'scaleX(-1) scale(1.5) rotate(50deg)',
                    
                }}
                right={(sm) ? '50px' : '1350px'}
                bottom='0'
                src={img3}
            />

            <AbsoluteImage
                style={{
                    minWidth: '1920px'
                }}
                width='1920px'
                height='auto'
                bottom='-300px'
                src={wave}
            />
        </div>
    )
}

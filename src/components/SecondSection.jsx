import s from '../scss/SecondSection.module.scss';
import AbsoluteImage from './AbsoluteImage';
import coffee from '../assets/images/776.png';
import img1 from '../assets/icons/coffee.png';
import img2 from '../assets/icons/coffeeBean.png';
import img3 from '../assets/icons/coffeePot.png';
import wave from '../assets/waves/wave2.png';

export default function SecondSection({ xl, xl2, sm }) {
    return (
        <div style={{ paddingTop: '300px' }}>
            <div className={`p-4 pb-32 lg:p-24 xl:p-32 2xl:p-44 ${s.container}`}>
                <p className={`mt-4 ${s.font}`}>Black Coffees</p>
                <div className='mt-12 lg:mt-24 flex justify-center lg:justify-start'>
                    <button className={`${s.btn}`}>Order Now</button>
                </div>
                <p className={`mt-12 ${s.paragraph}`}>Irure est velit proident quis irure minim minim deserunt consequat ullamco. Consequat voluptate laboris dolore magna excepteur veniam non veniam ad occaecat anim anim. Aliquip cupidatat dolore cillum non quis. Esse eu laborum incididunt cillum laborum sunt veniam minim in aute velit mollit. Veniam tempor sint cillum do dolor. Velit exercitation cillum proident consectetur dolor qui esse est.</p>

                {!sm && 
                    <AbsoluteImage 
                        top={(xl) ? '250px' : (xl2) ? '200px' : '150px'}
                        right='250px'
                        width={(xl) ? '300px' : (xl2) ? '400px' : '600px'}
                        height={(xl) ? '300px' : (xl2) ? '400px' : '600px'}
                        src={coffee}
                    />
                }

                {!sm && 
                    <AbsoluteImage
                        className='opacity-30 '
                        rotate='30'
                        right={(sm) ? '5px' : '100px'}
                        top='125px'
                        src={img1}
                        width='125px'
                        height='125px'
                        invert
                    />
                }

                <AbsoluteImage
                    className='opacity-30'
                    rotate='50'
                    right={(sm) ? '350px' : '1050px'}
                    top={(sm) ? '150px' : '150px'}
                    src={img2}
                    invert
                />

                {!sm &&
                    <AbsoluteImage
                        style={{
                            transform: 'scaleX(-1) scale(1.5) rotate(50deg)',
                        }}
                        className='opacity-30'
                        rotate='50'
                        left='350px'
                        top={(sm) ? '250px' : '-50px'}
                        src={img2}
                        invert
                    />
                }

                <AbsoluteImage
                    className='opacity-30 '
                    rotate='50'
                    right={(sm) ? '5px' : '75px'}
                    top='600px'
                    src={img2}
                    invert
                />

                <AbsoluteImage
                    className='opacity-30'
                    style={{
                        transform: 'scaleX(-1) scale(2.3) rotate(60deg)',
                    }}
                    right={(sm) ? '50px' : '1050px'}
                    bottom='500px'
                    src={img3}
                    invert
                />

                <AbsoluteImage
                    style={{
                        transform: 'scaleX(-1) rotate(50deg)',
                    }}
                    className='opacity-30'
                    rotate='50'
                    left={(sm) ? '350px' : '300px'}
                    bottom={(sm) ? '250px' : '200px'}
                    src={img2}
                    invert
                />

                <AbsoluteImage 
                    width='100%'
                    height='auto'
                    bottom={(sm) ? '-75px' : (xl) ? '-150px' : '-200px'}
                    left='0'
                    src={wave}
                />
            </div>
        </div>
    )
}

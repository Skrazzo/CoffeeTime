import s from '../scss/ThirdSection.module.scss';
import coffee from '../assets/images/777.png';
import cup from '../assets/icons/coffee.png';
import bean from '../assets/icons/coffeeBean.png';
import pot from '../assets/icons/coffeePot.png';
import AbsoluteImage from './AbsoluteImage';

export default function ThirdSection({ xl, xl2, sm }) {
    return (
        <div style={{ paddingTop: '100px' }}>
            <div className={`p-4 lg:p-44 grid grid-cols-2 ${s.container}`}>
                <div>
                    <img className={`${s.image}`} src={coffee}/>
                </div>

                <div className='flex items-center justify-end'>
                    <p className={`${s.font}`}>Hot Coffees</p>
                </div>

                <div className='col-span-2 sm:col-span-1 '>
                    <p className={`pt-12 sm:pt-24 leading-loose ${s.paragraph}`}>Cupidatat quis culpa ea do dolore amet exercitation sint eu dolore. Commodo esse eiusmod eu dolor ut deserunt exercitation laborum amet labore consectetur exercitation. Labore quis aliqua minim voluptate ea. Aliquip adipisicing laboris sint nulla in.</p>
                </div>

                <div className='col-span-2 sm:col-span-1 flex justify-center sm:justify-end pt-12'>
                    <div>
                        <button className={`${s.btn}`}>Order Now</button>
                    </div>
                </div>

                <AbsoluteImage
                    className='opacity-30'
                    width='125px'
                    height='125px'
                    top={(sm) ? '500px' : '100px'}
                    left='50px'
                    src={cup}
                />

                <AbsoluteImage
                    className='opacity-30'
                    rotate='50'
                    top='200px'
                    left='1000px'
                    src={bean}
                />
                
                <AbsoluteImage
                    className='opacity-30'
                    rotate='50'
                    width='100px'
                    height='100px'
                    top={(sm) ? '450px' : '600px'}
                    right='30px'
                    src={bean}
                />
                
                <AbsoluteImage
                    style={{
                        transform: 'scaleX(-1)'
                    }}
                    className='opacity-30'
                    rotate='50'
                    width='175px'
                    height='175px'
                    top='900px'
                    left='1150px'
                    
                    src={pot}
                />
            </div>
        </div>
    )
}

import s from '../scss/SeventhSection.module.scss';
import cup from '../assets/icons/coffee.png';
import bean from '../assets/icons/coffeeBean.png';
import pot from '../assets/icons/coffeePot.png';
import AbsoluteImage from "./AbsoluteImage";

export default function SeventhSection({  }) {
    return (
        <div className={`grid grid-rows-3 py-24 gap-20 relative ${s.container}`}>
            <div className={`${s.font} text-center`}>
                <p>We Are Open</p>
            </div>

            <div className={`${s.time}`}>
                <p>Monday - Friday</p>
                <span>10:00 am - 10:00 pm</span>
            </div>

            <div className={`${s.time}`}>
                <p>Saturday - Sunday</p>
                <span>10:00 am - 10:10 pm</span>
            </div>

            <AbsoluteImage
                rotate='-10'
                className='opacity-30'
                left='150px'
                width='200px'
                height='200px'
                top='550px'
                invert
                src={cup}
            />
            <AbsoluteImage
                rotate='-10'
                className='opacity-30'
                
                left='100px'
                top='200px'
                invert
                src={bean}
            />
            <AbsoluteImage
                rotate='-10'
                className='opacity-30'
                right='150px'
                top='150px'
                width='150px'
                height='150px'
                invert
                src={pot}
            />
            <AbsoluteImage
                rotate='40'
                className='opacity-30'
                right='150px'
                width='200px'
                height='200px'
                top='650px'
                invert
                src={bean}
            />
        </div>

    )
}

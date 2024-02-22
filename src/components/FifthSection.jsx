import Voucher from "./Voucher";
import cup from '../assets/icons/coffee.png';
import bean from '../assets/icons/coffeeBean.png';
import pot from '../assets/icons/coffeePot.png';
import AbsoluteImage from "./AbsoluteImage";
import s from '../scss/FifthSection.module.scss';


export default function FifthSection({ xl, xl2, sm }) {
    return (
        <div className={` ${s.container}`}>
            <div className="flex justify-center">
                <p className={` mb-8 ${s.font}`}>Voucher</p>
            </div>
            <Voucher xl={xl}/>
            <div className="flex justify-between">
                <button className={`my-16 mx-auto ${s.btn}`}>Get Voucher Now</button>
            </div>

            <AbsoluteImage
                className="opacity-30" 
                top="100px"
                right="100px"
                height="100px"
                width="100px"
                src={bean}
            />
            <AbsoluteImage
                className="opacity-30" 
                top="500px"
                left="100px"
                height="100px"
                width="100px"
                src={cup}
            />
            <AbsoluteImage
                className="opacity-30" 
                top="700px"
                right="100px"
                height="150px"
                width="150px"
                src={pot}
            />
            
        </div>
    )
}

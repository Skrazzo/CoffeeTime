import s from '../scss/NinthSection.module.scss';
import logo from '../assets/logo.png';
import { IconBrandFacebookFilled, IconBrandInstagram, IconBrandTwitterFilled, IconBrandYoutubeFilled } from '@tabler/icons-react';


export default function NinthSection() {
    return (
        <div className={`${s.container}`}>
            <div className="grid grid-cols-2 lg:grid-cols-4 items-center p-8">
                <div className="col-span-2 p-12"><img src={logo} className='w-2/3 mx-auto lg:mx-0 lg:w-1/3'/></div>
                <div className={`${s.header}`}>Information.</div>
                <div className={`${s.header}`}>Contact us.</div>
                
                <div className="col-span-2"></div>
                <div className={`${s.paragraph}`}>
                    <p>About us</p>
                    <p>Branches</p>
                    <p>Menu</p>
                    <p>Contact</p>
                    <p>Map</p>
                </div>
                <div className={`${s.paragraph} h-full`}>
                    <p>Support</p>
                    <p>your_id@gmail.com</p>
                </div>
            </div>

            <div className={`${s.footer} flex flex-col lg:flex-row justify-between p-8`}>
                <div className='flex flex-wrap justify-center items-center gap-8 lg:gap-20 lg:pl-12'>
                    <div>Home</div>
                    <div>About</div>
                    <div>Menu</div>
                    <div>Blog</div>
                    <div>Shop</div>
                    <div>Contact</div>
                </div>
                <div className='flex items-center justify-center gap-8 mt-8'>
                    <div><IconBrandFacebookFilled /></div>
                    <div><IconBrandInstagram /></div>
                    <div><IconBrandTwitterFilled /></div>
                    <div><IconBrandYoutubeFilled /></div>
                </div>
            </div>
        </div>
    )
}

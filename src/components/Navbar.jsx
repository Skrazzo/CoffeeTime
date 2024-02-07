import s from '../scss/Navbar.module.scss';
import NavButton from './NavButton';

export default function Navbar() {
    return (
        <div className='py-12 px-20 flex justify-between items-center'>
            <div className='flex gap-14 items-center'>
                <NavButton text='Home' selected/>
                <NavButton text='About' />
                <NavButton text='Menu' />
                <NavButton text='Blog' />
                <NavButton text='Shop' />
                <NavButton text='Contact' />
            </div>

            
            <img src="/src/assets/logo.png" alt="logo" />
            
        </div>
    )
}

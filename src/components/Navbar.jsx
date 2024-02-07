import { IconMenu2 } from '@tabler/icons-react';
import s from '../scss/Navbar.module.scss';
import NavButton from './NavButton';
import { useState } from 'react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='py-12 px-4 w-full md:px-20 flex justify-between items-center'>
            <div className='gap-14 items-center hidden xl:flex'>
                <NavButton text='Home' selected/>
                <NavButton text='About' />
                <NavButton text='Menu' />
                <NavButton text='Blog' />
                <NavButton text='Shop' />
                <NavButton text='Contact' />
            </div>

            
            <img src="/src/assets/logo.png" alt="logo" />
            <div className='text-white xl:hidden'>
                <IconMenu2 onClick={() => setMenuOpen(true)}/>
            </div>
            
        </div>
    )
}

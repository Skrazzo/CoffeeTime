import { IconMenu2 } from '@tabler/icons-react';
import s from '../scss/Navbar.module.scss';
import NavButton from './NavButton';
import { useEffect, useState } from 'react';
import scrollToSection from './scrollTo';

export default function Navbar({ header }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [closeAnim, setCloseAnim] = useState(false);

    function toggle(){
        
        if(menuOpen){
            close();
        }else{
            setMenuOpen(true);
        }
        
    }

    function close(){
        setCloseAnim(true);
        setTimeout(() => {
            setCloseAnim(false);
            setMenuOpen(false);
        }, 250);
    }

    const handleScroll = () => {
        if(menuOpen){
            close();
        }

        console.log('scholl', menuOpen);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        
    }, []); 

    return (
        <div className='py-12 px-4 w-full md:px-20 flex justify-between items-center relative'>
            {menuOpen && 
                <div className={`${s.mobile_nav} ${(closeAnim) ? s.close : ''}`}> 
                    <div className="logo">
                        <img src={'/src/assets/logo.png'} />
                    </div>
                {header.map(x => <div className='cursor-pointer' onClick={() => scrollToSection(x.label)} >{x.label.charAt(0).toUpperCase() + x.label.slice(1)}</div>)}
                </div>
            }

            <div className='gap-14 items-center hidden xl:flex'>
                
                {header.map(x => <NavButton onClick={() => scrollToSection(x.label)} text={x.label.charAt(0).toUpperCase() + x.label.slice(1)}/>)}
            </div>

            
            <img src="/src/assets/logo.png" alt="logo" />
            <div className='text-white xl:hidden'>
                <IconMenu2 onClick={toggle}/>
            </div>
            
        </div>
    )
}

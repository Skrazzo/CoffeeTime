import s from '../scss/Navbar.module.scss';

export default function NavButton({ text, selected }) {
    return (
        <div className={(selected) ? `${s.btn_selected}` : `${s.btn}`}>
            <button>{text}</button>
            <div></div>
        </div>
    )
}

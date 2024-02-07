import s from '../scss/FirstSection.module.scss';

export default function FirstSection() {
    return (
        <div className='p-12'>
            <p className={`${s.font}`}>Coffee Time</p>
            <p className={`${s.headline}`}>your headline</p>
        </div>
    )
}

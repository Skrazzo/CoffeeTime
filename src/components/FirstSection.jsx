import s from '../scss/FirstSection.module.scss';

export default function FirstSection() {
    return (
        <div className='p-20 '>
            <p className={`${s.font}`}>Coffee Time</p>
            <p className={`${s.headline}`}>your headline</p>
            <p className={`${s.paragraph}`}>Ullamco veniam proident aute enim. Consequat culpa qui elit Lorem laboris anim laboris sint voluptate. Consequat sint dolore mollit eiusmod laborum incididunt. Anim officia laborum exercitation eu.</p>
        </div>
    )
}

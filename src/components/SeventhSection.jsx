import s from '../scss/SeventhSection.module.scss';


export default function SeventhSection({  }) {
    return (
        <div className={`grid grid-rows-3 py-24 gap-20 ${s.container}`}>
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
        </div>
    )
}

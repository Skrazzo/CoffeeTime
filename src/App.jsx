import { useMedia } from "use-media";
import FirstSection from "./components/FirstSection";
import Navbar from "./components/Navbar";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import FourthSection from "./components/FourthSection";
import FifthSection from "./components/FifthSection";
import SixthSextion from "./components/SixthSextion";
import SeventhSection from "./components/SeventhSection";
import EightSection from "./components/EightSection";
import NinthSection from "./components/NinthSection";

export default function App() {
    const xl = useMedia({maxWidth: '1280px'});
    const xl2 = useMedia({maxWidth: '1536px'});
    const sm = useMedia({maxWidth: '1024px'});

    const header = [
        {label: 'home'},
        {label: 'about'},
        {label: 'menu'},
        {label: 'blog'},
        {label: 'shop'},
        {label: 'contact'}
    ];

    return (
        <>
            <section id="home">
                <Navbar header={header}/>
            </section>
            <section id="about">
                <FirstSection xl={xl} xl2={xl2} sm={sm}/>
            </section>

            <section id="menu">
                <SecondSection xl={xl} xl2={xl2} sm={sm}/>
                <ThirdSection xl={xl} xl2={xl2} sm={sm}/>
                <FourthSection xl={xl} xl2={xl2} sm={sm}/>
                <FifthSection xl={xl} xl2={xl2} sm={sm}/>
            </section>

            <section id="blog">
                <SixthSextion />
            </section>

            <section id="shop">
                <SeventhSection />
                <EightSection />
            </section>
            
            <section id="contact">
                <NinthSection footer={header}/>
            </section>
        </>
    )
}

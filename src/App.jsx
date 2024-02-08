import { useMedia } from "use-media";
import FirstSection from "./components/FirstSection";
import Navbar from "./components/Navbar";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import FourthSection from "./components/FourthSection";

export default function App() {
    const xl = useMedia({maxWidth: '1280px'});
    const xl2 = useMedia({maxWidth: '1536px'});
    const sm = useMedia({maxWidth: '1024px'});
    return (
        <>
            <Navbar />
            <FirstSection xl={xl} xl2={xl2} sm={sm}/>
            <SecondSection xl={xl} xl2={xl2} sm={sm}/>
            <ThirdSection xl={xl} xl2={xl2} sm={sm}/>
            <FourthSection xl={xl} xl2={xl2} sm={sm}/>
        </>
    )
}

import { useMedia } from "use-media";
import FirstSection from "./components/FirstSection";
import Navbar from "./components/Navbar";

export default function App() {
    const xl = useMedia({maxWidth: '1280px'});
    const xl2 = useMedia({maxWidth: '1536px'});
    const sm = useMedia({maxWidth: '1024px'});
    return (
        <>
            <Navbar />
            <FirstSection xl={xl} xl2={xl2} sm={sm}/>
        </>
    )
}

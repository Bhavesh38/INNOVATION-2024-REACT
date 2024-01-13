import Footer from "../footer/Footer"
import AboutSlider from "./AboutSlider"
import ChiefGuest from "./ChiefGuest";
import "./About.css"
import ChiefGuestCard from "./ChiefGuestCard";


const About = () => {

    return (
        <div className='fixed top-0 w-screen h-screen mt-20 overflow-auto'>

            <AboutSlider />
            <ChiefGuest />
            <Footer />
        </div>
    )
}

export default About

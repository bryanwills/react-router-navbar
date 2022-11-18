import Highlights from './Highlights';
import ContactForm from './ContactForm';

export default function Home(){
    const image = require('./imgs/House.jpg');
    return (
        <div className="w-screen">
            <div className="px-4 py-4 mx-auto lg:max-w-5xl items-center md:flex md:px-8 place-content-center relative">
            <img src={image} className="hover:bg-blend-darken brightness-50 object-cover" alt=""/>
                <button
                  className="absolute xl:bottom-20 xl:left-40 bottom-20 left-20 bg-[#e3b151] text-[#080e18] px-2 py-2 rounded-2xl hover:bg-[#bf1e2e] sm:width-50">
                    Apply Now
                </button>
            </div>
            <Highlights />
            <br />
            <br />
            <br />
            <br />
            <div className="border-red-500">
                <ContactForm />
            </div>
        </div>
    )
}
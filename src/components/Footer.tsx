import React from 'react';
import {FaFacebook,FaInstagram,FaTwitter,FaGithub} from 'react-icons/fa';

export default function Footer() {
    const today = new Date();
    const logo = 'https://spartamortgage.com/images/Logo_Highres_transparent.png';
  return (
      <div className="">
        <div className="">
<footer className="footer relative pt-1 bg-white dark:text-[#e3b151] text-[#080e18] dark:bg-[#080e18]">
    <div className="container mx-auto px-6 mt-20">
        <div className="sm:flex sm:mt-8">
            <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-around">
                <div className="flex flex-col">
                    <span className="font-bold text-gray-700 uppercase mb-2"></span>
                    <span className="my-2"><img src="https://spartamortgage.com/images/Logo_Highres_transparent.png" width={200} alt="" /></span>
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-gray-700 uppercase mt-3 md:mt-0 mb-2">Footer 2</span>
                    <span className="my-2"><a href="#" className="text-blue-700 text-md hover:text-blue-500">link 1</a></span>
                    <span className="my-2"><a href="#" className="text-blue-700  text-md hover:text-blue-500">link 1</a></span>
                    <span className="my-2"><a href="#" className="text-blue-700 text-md hover:text-blue-500">link 1</a></span>
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-gray-700 uppercase mt-3 md:mt-0 mb-2">Footer 3</span>
                    <span className="my-2"><FaFacebook size={20} style={{marginRight:'10px'}} /></span>
                    <span className="my-2"><FaInstagram size={20} style={{marginRight:'10px'}} /></span>
                    <span className="my-2"><FaTwitter size={20} style={{marginRight:'10px'}} /></span>
                    <span className="my-2"><FaGithub size={20} style={{marginRight:'10px'}} /></span>
                </div>
            </div>
        </div>
    </div>
</footer>
            <div className="flex place-content-center mt-8">
                <div className="">
                    <div className="rights color-[#080e18] dark:color-[#e3b151]">
                        <p>&copy; {today.getFullYear()} Sparta Mortgage All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
  );
}
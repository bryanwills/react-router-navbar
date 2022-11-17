import {HiOutlineComputerDesktop, HiPhoneArrowUpRight } from 'react-icons/hi2';
import React from 'react';

export default function Apply(){
    return (
        <div className="mx-auto">
        <div className="">
            <p>Click an option below to apply Now!</p>
            <div className="mt-8">
                <div className="grid grid-cols-3 divide-x-0 gap-x-20">
                    <div className="flex">
                        <a href="https://1857586.my1003app.com/51796/register">
                            <div className="place-items-center">
                                <HiOutlineComputerDesktop size={60} center={true} />
                            </div>
                            <p>New Applicants Click Here</p>
                        </a>
                    </div>
                    <div className="">
                        <a href="https://1857586.my1003app.com/51796/register">
                            <HiOutlineComputerDesktop size={60} style={{ justify-content: 'center', align-items: 'center'}} />
                            <p className="text-center">Returning Applicants Click Here</p>
                        </a>
                    </div>
                    <div>
                        <a href="tel:5028191739">
                            <HiPhoneArrowUpRight size={60} />
                            <p>New Applicants Apply Here</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        </div>
        );
}

import React, { useState } from 'react';
import {BeakerIcon,Bars3BottomLeftIcon,XMarkIcon} from '@heroicons/react/24/solid'

const Header = () => {
    let links =[
        {name:'Home',link: '/'},
        {name:'Appointment',link: '/'},
        {name:'About',link: '/'},
        {name:'Contact',link: '/'},
    ]

    let [isOpen,setisOpen] = useState(false);
    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:px-10 py-4 px-7 md:flex justify-between items-center bg-white'>

                {/* logo here */}
                <div className='flex text-2xl cursor-pointer items-center gap-2'>
                    <BeakerIcon className='w-7 h-7 text-blue-600'/>
                    <span className='font-bold'>ASAN</span>
                </div>

                {/*menu icon*/}
                <div onClick={()=> setisOpen(!isOpen)} className='w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden'>
                {
                    isOpen ? <XMarkIcon/> : <Bars3BottomLeftIcon/>
                }
            
                </div>

                {/* nav links here */}
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1]
                right-0 w-80 md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? 'top-12':'top-[-490px]'}`}>{
                    links.map(link=>(
                    <li className='font-semibold my-7 md:my-0 md:ml-8 hover:text-red-600'>
                        <a href='/'>{link.name}</a>
                        
                    </li>))
                }
                <button className='hover:bg-red-700 btn bg-red-600 text-white py-1 px-3 md:ml-8 rounded md:static'>Get Started</button>
                </ul>

            </div>
        </div>
    );
};

export default Header;
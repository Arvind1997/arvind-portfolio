'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Navlink from './Navlink'
import { Bars3Icon, XmarkIcon }  from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay'
import { Albert_Sans } from 'next/font/google';

const navLinks = [
    {
        title: "Projects",
        path: "#Projects"
    },
    {
        title: "About",
        path: "#About"
    },
    {
        title: "Resume",
        path: "https://professional-bucket.s3.amazonaws.com/ArvindKumar_Resume_20240317.pdf"
    }
];

const estonia = Albert_Sans({
    subsets: ['latin'],
    weight: ["900"],
    style: ['normal', 'italic']
})

const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false) 
    return (
    <nav className='fixed w-full top-0 right-0 left-0 z-10 bg-[#000000] bg-opacity-85'>
        <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-4'>
            <Link href= {'/'} className={`'${estonia} text-2xl text-white font-semibold'`}>
                arvind kumar.
            </Link>
            <div className='mobile-menu block md:hidden'>
                {!navbarOpen ? (
                    <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                        <Bars3Icon className='h-5 w-5'/>
                    </button>
                ) : (
                    <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokelinecap="round" strokelinejoin="round" strokewidth="1.5" d="M6 18L18 6M6 6l12 12"/></svg>
                    </button>    
                )}
            </div>
            <div className='menu hidden md:block md:w-auto' id='navbar'>
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                    {
                        navLinks.map((link, index) => (
                            <li key={index}>
                                <Navlink href={link.path} title={link.title} />
                            </li>
                        ))
                        }
                </ul>
            </div>
        </div>
        { navbarOpen ? <MenuOverlay links={ navLinks } /> : null }
    </nav>
  )
}

export default Navbar

"use client"
import React, { useState } from 'react'
import { useTheme } from '../../context/ThemeContext'
import Image from 'next/image'

const Navbar = () => {
    const [open, setOpen] = useState<boolean>(false)
    const { theme, toggleTheme, lightTheme } = useTheme()

    const toggleMenu = () => {
        setOpen(prev => !prev)
    }

    return (
        <>
            <header className='navGradient px-2 sticky top-0 z-10'>
                <nav className='flex h-14 justify-between max-w-screen-xl mx-auto items-center text-white'>
                    <div className="left flex justify-center items-center space-x-2">
                        <a href='#' className='text-2xl cursor-pointer'>Jasmeet</a>
                    </div>

                    <div className='flex space-x-4 sm:space-x-4 items-center'>
                        <div>
                            <Image src={`/Images/${theme === lightTheme ? "moon.png" : "sun.png"}`} onClick={toggleTheme} className='invert cursor-pointer' width={26} height={26} alt='Icon' />
                        </div>
                        <ul className="right hidden sm:flex space-x-8 text-xl">
                            <li className='border-b-2 border-b-transparent hover:border-b-white transition-all duration-500'>
                                <a href='#' className='cursor-pointer transition text-[#e2e7ed] hover:text-white'>Home</a>
                            </li>
                            <li className='border-b-2 border-b-transparent hover:border-b-white transition-all duration-500'>
                                <a href='#skills' className='cursor-pointer transition text-[#e2e7ed] hover:text-white'>Skills</a>
                            </li>
                            <li className='border-b-2 border-b-transparent hover:border-b-white transition-all duration-500'>
                                <a href='#projects' className='cursor-pointer transition text-[#e2e7ed] hover:text-white'>Projects</a>
                            </li>
                            <li className='border-b-2 border-b-transparent hover:border-b-white transition-all duration-500'>
                                <a href='#contact' className='cursor-pointer transition text-[#e2e7ed] hover:text-white'>Contact</a>
                            </li>
                        </ul>

                        <div className="hamburger mt-[2px] flex flex-col items-end space-y-[7px] sm:hidden" onClick={toggleMenu}>
                            <span className={`line bg-white w-9 h-1 rounded-md transition-all duration-[400ms] text-right ${open ? "translate-y-[11px]" : "translate-y-0"} ${open ? "-rotate-45" : "rotate-0"} `}></span>
                            <span className={`line bg-white w-6 h-1 rounded-md transition-all duration-[400ms] ${open ? "translate-x-5 opacity-0" : ""}`}></span>
                            <span className={`line bg-white w-9 h-1 rounded-md transition-all duration-[400ms] text-right ${open ? "-translate-y-[11px]" : "-translate-y-0"} ${open ? "rotate-45" : "-rotate-0"} `}></span>
                        </div>
                    </div>

                </nav>
            </header>
            <div className={`sideMenu z-10 sticky top-14 sm:hidden navGradient text-center text-white ${open ? "opacity-100 visible" : "opacity-0 invisible"} transition-all duration-[500ms]`}>
                <ul className='flex flex-col space-y-3 py-2 text-lg'>
                    <a href='#' onClick={toggleMenu}>Home</a>
                    <a href='#skills' onClick={toggleMenu}>Skills</a>
                    <a href='#projects' onClick={toggleMenu}>Projects</a>
                    <a href='#contact' onClick={toggleMenu}>Contact</a>
                </ul>
            </div>
        </>
    )
}

export default Navbar
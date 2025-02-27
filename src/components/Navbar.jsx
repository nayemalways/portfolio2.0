import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';

const Navbar = () => {
    return (
         
            <nav className='max-container flex justify-between flex-shrink-0 items-center'>
                <div>
                    <a href="/">
                        <h1 className='text-white text-xl padding-x font-bold italic'>nayem<span className='text-emerald-green'>.dev</span></h1>
                    </a>
                </div>
                <div className='flex-center gap-7 max-sm:gap-4'>
                    <a className='text-2xl text-white hover:bg-cyan-500 hover:text-white' href="https://linkedin.com/in/nayemalways"  target='_blank '>
                        <FaLinkedin />
                    </a>
                    <a className='text-2xl text-white hover:bg-cyan-500 hover:text-white' href="https://github.com/nayemalways"  target='_blank '>
                         <FaGithub />
                    </a>
                    <a className='text-2xl text-white hover:bg-cyan-500 hover:text-white' href="https://x.com/nayemalways"  target='_blank '>
                        <FaSquareXTwitter />
                    </a>
                </div>
            </nav>
         
    );
};

export default Navbar;
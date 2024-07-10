"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import NavLink from './navLink';

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl pt-4'>
      {/*Links  */}
      <div className='hidden md:flex gap-4 w-1/3'>
        {links.map(link => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      {/* logo */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link href="/" className='text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center'>
          <span className='text-white mr-1'>Melissa</span>
          <span className='w-12 h-8 rounded bg-white text-black flex items-center justify-center'>.dev</span>
        </Link>
      </div>

      {/*social media*/}
      <div className='hidden md:flex gap-4 w-1/3'>
        <Link href="#/">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
      </div>

      {/* responsive menu */}
      <div className='md:hidden'>
        {/* menu button */}
        <button className='z-50 relative' onClick={(() => setOpen(!open))}>
          <svg className={`w-16 h-12 pt-2 ${open ? "text-white" : "text-black"}`} fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
          </svg>
        </button>
        {/* menu list */}
        {open &&
          <div className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-3xl'>
            {links.map((link) => (
              <Link key={link.url} href={link.url}>
                {link.title}
              </Link>
            ))}
          </div>
        }
      </div>
    </div>
  )
}
export default Navbar;
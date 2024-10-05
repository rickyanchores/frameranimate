import React from 'react'
import Link from 'next/link';

const Nav = () => {
  return (
    <div className="Nav bg-slate-600 text-white flex justify-around items-center">
        <logo className="logo">Nav</logo>
        <ul className="navLinks  flex justify-around items-center gap-4">
          <Link href="/#Menu" className='hover:text-red-900'>Menu</Link>
          <Link href="/#Contact" className='hover:text-red-900'>Contact</Link>
          <Link href="/#About" className='hover:text-red-900'>About</Link>
        </ul>
    </div>
  )
}

export default Nav;
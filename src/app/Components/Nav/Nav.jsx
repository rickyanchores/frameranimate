import React from 'react'
import Link from 'next/link';
import Card from '../Card/Card';

const Nav = () => {

  const navList = [
    {
      name: "Home",
      href: "/"
    },
    {
      name: "Contact",
      href: "#contact"
    },
    {
      name: "About",
      href: "#about"
    }
  ]

  return (
    <div className="Nav bg-slate-600 text-white flex justify-around items-center p-4">
        <logo className="logo">Nav</logo>
        <ul className="navLinks  flex justify-around items-center gap-4">
          {navList.map((link) => (
            <li>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <Card />
    </div>
  )
}

export default Nav;
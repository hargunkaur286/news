import React, { useState } from 'react'
// import {BsPerson} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'

function Navbar() {

    const [nav,setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

  return (
    <div className=' flex justify-between items-center h-20 w-full  absolute z-10 text-white px-8 bg-black '>
  
    <ul className='hidden md:flex w-full m-auto justify-evenly lg:w-7/12  2xl:w-6/12'>
        <li>Home</li>
        <li>Tech </li>
        <li>Sports</li>
        <li>Space</li>
        <li>Crypto </li>
        <li>Contact</li>
    </ul>
    {/* <div>
    </div> */}
    {/* Hamburger */}
    <div onClick={handleNav} className='md:hidden z-10'>
    {  nav ? <AiOutlineClose size={20}/>:<HiOutlineMenuAlt4 size={20}/> }
    
    </div>

    <div  onClick={handleNav}  className={ nav ? 'absolute left-0 text-black top-0 h-screen max-h-96 w-full bg-gray-100/90 px-4 py-7 flex justify-between	 flex-col ' :  'absolute left-[-100%] h-full w-full bg-gray-100/90 px-4 py-7 flex flex-col'}>
    <ul className=' h-full contents'>
       
        <li className="border-b" >Home</li>
        <li className="border-b" >Tech </li>
        <li className="border-b" >Sports</li>
        <li className="border-b" >Space</li>
        <li className="border-b" >Crypto </li>
        <li className="border-b" >Contact</li>
    </ul>
    </div>
    </div>

  )
}

export default Navbar;
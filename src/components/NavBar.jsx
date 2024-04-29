// import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
// import { AiFillAlert } from "react-icons/ai";
// import { FaBars, FaTimes } from 'react-icons/fa';


// const NavBar = () => {
//   const Links =[
//         {name:"HOME",link:"/"},
//         {name:"ABOUT",link:"/AboutPage"},
//         {name:"SERVICES",link:"/ServicePage"},
//         {name:"GALLERY",link:"/GalleryPage"},
//         {name:"CONTACT US",link:"/ContactPage"},
//       ];

//   const [open,setOpen]=useState(false);

//   return (
//     <div className='shadow-md w-full fixed top-0 left-0 z-50'>
//       <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
//       <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
//       text-gray-800'>
//         <span className='text-3xl text-indigo-600 mr-1 pt-2'>
//         <AiFillAlert/>
//         </span>
//         Peace Care Center
//       </div>
      
//       <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
//       <ion-icon name={open ? 'close':'menu'}></ion-icon>

//       {open ? (
//                 <FaTimes  />
//             ) : (
//                 <FaBars  />
//             )}

//       </div>

//       <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
//         {
//           Links.map((link)=>(
//             <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
//               <Link to={link.link} className="relative text-gray-950 hover:text-red-600 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-500 before:absolute before:bg-red-500 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-500 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
//                 {link.name}
//               </Link>
//             </li>
//           ))
//         }
//       </ul>
//       </div>
//     </div>
//   )
// }

// export default NavBar


import React, { useState } from "react"
import "./navbar.css"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"

const Navbar = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <nav className='navbar flex justify-between items-center'>
  <h3 className='logo text-center sm:text-left sm:overflow-x-hidden whitespace-nowrap'>PEACE CARE CENTER</h3>
  <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
    {Mobile ? <ImCross className="text-[12px]" /> : <FaBars className="text-xl" />}
  </button>
  {/*
  if large screen ma xa bhane Mobile add huxa
  if mobile screen ma xa bhane nav-links-mobile add huxa
  */}
  <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
    <Link to='/' className='home'>
      <li>HOME</li>
    </Link>
    <Link to='/AboutPage' className='about'>
      <li>ABOUT US</li>
    </Link>
    <Link to='/ServicePage' className='services'>
      <li>SERVICES</li>
    </Link>
    <Link to='/GalleryPage' className='skills'>
      <li>GALLERY</li>
    </Link>
    <Link to='/ContactPage' className='home'>
      <li>CONTACT US</li>
    </Link>
  </ul>
</nav>

    </>
  )
}
export default Navbar

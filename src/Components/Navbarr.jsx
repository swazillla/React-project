import React, {useState} from 'react';
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai';

    
function Navbarr() {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
      };
  return (
    <div className='flex justify-between items-center h-24 max-w-[1390px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT</h1>
      <ul className='flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resource</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
      <div onClick={handleNav}>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-1000' : 'ease-in-out duration-1000 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
          <li className='p-4 border-b text-white border-gray-600'>Home</li>
          <li className='p-4 border-b text-white border-gray-600'>Company</li>
          <li className='p-4 border-b text-white border-gray-600'>Resources</li>
          <li className='p-4 border-b text-white border-gray-600'>About</li>
          <li className='p-4 text-white'>Contact</li>
      </ul>
    </div>
  )
}

export default Navbarr

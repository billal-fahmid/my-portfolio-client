import React from 'react';

// import logo from '../assets/logo.svg'

const Header = () => {
  return <header className=' py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <a href="#" className=''>
          <span className='text-3xl font-bold  uppercase text-gradient'>Billal  Hossen</span>
        </a>
        <button className='btn btn-sm'>work with me</button>
      </div>
    </div>
  </header>;
};

export default Header;

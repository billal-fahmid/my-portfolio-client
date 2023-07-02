import React from 'react';

// import Image from '../assets/avatar.svg'
import Image from '../assets/self.jpg'

import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'

import { TypeAnimation } from 'react-type-animation'

import { motion } from 'framer-motion'

import { fadeIn } from '../variants'
import { Link } from 'react-scroll';

const Banner = () => {
  return <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>

    <div className='container mx-auto'>

      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        {/* text */}
        <div className='flex-1 text-center font-secondary lg:text-left '>
          <motion.h1
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>BILLAL <span>HOSSEN</span>
          </motion.h1>

          <motion.div
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='mb-6 text-[35px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='mr-4 text-white'>I am a </span>
            <TypeAnimation sequence={[
              'Developer',
              2000,
              'Designer',
              2000,

            ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
            ></TypeAnimation>
          </motion.div>
          <motion.p
            variants={fadeIn('up', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='mb-8 max-w-lg mx-auto lg:mx-0'>MERN stack developer crafting impactful web applications with MongoDB, Express.js, React, and Node.js. Let's shape the web together </motion.p>

          <motion.div
            variants={fadeIn('up', 0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            <a href='billal_hossen_developer.pdf' download='Resume'  className='btn btn-lg'>Resume</a>
            <Link to='contact' href="#" className='text-gradient btn-link'>Contact me</Link >
          </motion.div>
          {/* social */}
          <motion.div
            variants={fadeIn('up', 0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
            <a href="https://github.com/billal-fahmid">
              <FaGithub></FaGithub>
            </a>
            <a href="https://www.linkedin.com/in/billal-hossen-a838a925b/">
              <FaLinkedin></FaLinkedin>
            </a>
            <a href="https://www.facebook.com/fahmidhasansohag.395/">
              <FaFacebook></FaFacebook>
            </a>
          </motion.div>

        </div>
        {/* image */}
        <motion.div
          variants={fadeIn('down', 0.5)}
          initial='hidden'
          whileInView={'show'}
         
          className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[400px] '>
          {/* <img src={Image} alt="" /> */}
          <img className='mix-blend-lighten rounded-full' src={Image} alt="" />
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Banner;

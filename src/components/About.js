import React from 'react';
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const About = () => {

  const { ref, inView } = useInView({
    threshold: 0.5
  })

  return <section className='section' id='about' ref={ref}>
    <div className="container mx-auto">
{/* gap-y-10 */}
      <div className='flex flex-col  lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/* img */}
        <motion.div
        variants={fadeIn('right' , 0.3)}
        initial={'hidden'}
        whileInView={'show'}
        viewport={{once:false , amount:0.3}}
        className='flex-1 bg-about bg-contain bg-no-repeat h-[440px] w-full mix-blend-lighten bg-top'>
          
        </motion.div>
        {/* text */}
        <motion.div
         variants={fadeIn('left' , 0.5)}
         initial={'hidden'}
         whileInView={'show'}
         viewport={{once:false , amount:0.3}}
         className='flex-1'>
          <h2 className='h2 text-accent'>About me.</h2>
          <h3 className='h3 mb-4'>I'm a MERN Stack Developer with Solid JavaScript Knowledge</h3>
          <p className='mb-6'>Passionate MERN stack developer creating innovative web experiences. Skilled in MongoDB, Express.js, React, and Node.js. Committed to clean code and continuous learning.</p>
          {/* state */}
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
               {
                inView?
                 <CountUp start={0} end={20} duration={3}></CountUp>:null
               }
               +
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                 Completed <br />Projects
              </div>
            </div>

            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                
               {
                inView?
                 <CountUp start={0} end={2} duration={3}></CountUp>:null
               }
               +
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                My Running <br />Projects
              </div>
            </div>

            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
               {
                inView?
                 <CountUp start={0} end={22} duration={3}></CountUp>:null
               }
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                My Age <br />
              </div>
            </div>

          </div>

          <div className='flex gap-x-8 items-center'>
            <button className='btn btn-lg'>Contact Me</button>
            <a href="#" className='text-gradient btn-link'> My Portfolio</a>
          </div>

        </motion.div>
      </div>

    </div>
  </section>;
};

export default About;

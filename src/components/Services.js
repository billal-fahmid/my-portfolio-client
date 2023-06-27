import React from 'react';

import ProgressBar from "@ramonak/react-progress-bar";
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Services = () => {
  return <section className='section' id='skills'>
    <div className='container mx-auto'>
      <div>
        {/* text */}
        <motion.div
          variants={fadeIn('up', 0.3)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 text-center'>
          <h2 className='h2 text-accent'>Skills</h2>
          <h3 className='h3 mb-4'>I'm Continues Learning New Technology and Exploring New Language</h3>
          <p className='mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt officia quos unde dignissimos aliquid quo saepe natus quod ad maiores.</p>
          {/* state */}



        </motion.div>

        {/* skills */}
        <div

          className='flex gap-x-6 md:gap-x-14  flex-row  bg-contain bg-no-repeat h-[440px] w-full mix-blend-lighten bg-top'>
          <motion.div
           variants={fadeIn('right', 0.5)}
           initial={'hidden'}
           whileInView={'show'}
           viewport={{ once: false, amount: 0.3 }}
           className='w-1/2 flex flex-col gap-y-4'>
            <div>  HTML5  <ProgressBar completed={80} /></div>
            <div> CSS3  <ProgressBar completed={70} /></div>
            <div>   Bootstrap  <ProgressBar completed={65} /></div>
            <div> Tailwind CSS  <ProgressBar completed={70} /></div>
            <div>JavaScript  <ProgressBar completed={68} /></div>
          </motion.div>

          <motion.div
           variants={fadeIn('left', 0.5)}
           initial={'hidden'}
           whileInView={'show'}
           viewport={{ once: false, amount: 0.3 }}
           className='w-1/2 flex flex-col gap-y-4'>
            <div>  React.js  <ProgressBar completed={82} /></div>
            <div>Node.js  <ProgressBar completed={50} /></div>
            <div> Express  <ProgressBar completed={50} /></div>
            <div> MongoDB  <ProgressBar completed={70} /></div>
            <div>Firebase  <ProgressBar completed={65} /></div>
          </motion.div>

        </div>

      </div>



    </div>
  </section>;
};

export default Services;

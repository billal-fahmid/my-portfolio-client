import React from 'react';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { FaGithub, FaLinkedin, FaLink } from 'react-icons/fa'
import img1 from '../assets/chef-hunter-assignment-10.web.app_.png'
import img2 from '../assets/toy-market-place-assignment-11.web.app_ (1).png'
import img3 from '../assets/assignment-12-fas-sports.web.app_ (3).png'



const Work = () => {
  return <section className='section' id='projects'>
    <div className='container mx-auto'>

      <div>
        <motion.div
          variants={fadeIn('up', 0.3)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 text-center'>
          <h2 className='h2 text-accent'>Recent Projects</h2>
          <h3 className='h3 mb-4'>Check out some of my featured projects </h3>


        </motion.div>

        <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 mt-12'>

          <div >
            <motion.div
            variants={fadeIn('right', 0.5)}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }} 
             className="card w-full glass">
              <div className='overflow-auto h-60 rounded-lg'  ><img className='object-contain h-fit ' src={img1} alt="car!" /></div>
              <div className="card-body">
                <h2 className="card-title">BD-Ranna$Foods</h2>

                <div className='flex items-center justify-between'>
                  <a href='https://github.com/billal-fahmid/bd-ranna-foods10' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Client Site Code">Client <FaGithub></FaGithub></a>
                  <a href='https://github.com/billal-fahmid/bd-ranna-foods-server10' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Server Site Code">Server <FaGithub></FaGithub></a>
                  <a href='https://chef-hunter-assignment-10.web.app/' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Live Site">Live <FaLink></FaLink></a>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary" onClick={() => window.my_modal_5.showModal()}>Details</button>
                </div>
              </div>
            </motion.div>
            {/* Open the modal using ID.showModal() method */}
            {/* <button className="btn" >open modal</button> */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
              <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">This is Popular Chefs And Foods web site.
                  This is a single page web site
                  Use this Site you can Choose Chef And Food.
                  You see the many Chefs and every single Chef details .
                  You can see the Chefs Recipes , Chefs Like , Chefs Experience and Number Of Recipes.
                  You Also Create your Account And then Login this site .</p>
                <div className="modal-action">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </div>
              </form>
            </dialog>
          </div>

          <div>
            <motion.div
            variants={fadeIn('up', 0.5)}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
             className="card w-full glass">
              <div className='overflow-auto h-60 rounded-lg'  ><img className='object-contain h-fit ' src={img2} alt="car!" /></div>
              <div className="card-body">
                <h2 className="card-title">ABCD-TOYS</h2>

                <div className='flex items-center justify-between'>
                  <a href='https://github.com/billal-fahmid/abcd-toys-client10' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Client Site Code">Client <FaGithub></FaGithub></a>
                  <a href='https://github.com/billal-fahmid/abcd-toys-server10' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Server Site Code">Server <FaGithub></FaGithub></a>
                  <a href='https://toy-market-place-assignment-11.web.app/' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Live Site">Live <FaLink></FaLink></a>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary" onClick={() => window.my_modal_6.showModal()}>Details</button>
                </div>
              </div>
            </motion.div>
            {/* Open the modal using ID.showModal() method */}
            {/* <button className="btn" >open modal</button> */}
            <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
              <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">This is a Educational Toys shop web site.
                  This is a single page web site .
                  Use this Site you can Choose Toys and buy this site and if you can want you toys add this site after Register or login.
                  You see the many Toys and toys details this site.
                  You can see Our trending Toys , Customer review etc.
                  You Also Create your Account And then Login this site .</p>
                <div className="modal-action">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </div>
              </form>
            </dialog>
          </div>

          <div>
            <motion.div
            variants={fadeIn('left', 0.5)}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
             className="card w-full glass">
              <div className='overflow-auto h-60 rounded-lg'  ><img className='object-contain h-fit ' src={img3} alt="car!" /></div>
              <div className="card-body">
                <h2 className="card-title">FSA-Sports</h2>

                <div className='flex items-center justify-between'>
                  <a href='https://github.com/billal-fahmid/fsa-sports-client' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Client Site Code">Client <FaGithub></FaGithub></a>
                  <a href='https://github.com/billal-fahmid/fsa-sports-server' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Server Site Code">Server <FaGithub></FaGithub></a>
                  <a href='https://assignment-12-fas-sports.web.app/' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Live Site">Live <FaLink></FaLink></a>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary" onClick={() => window.my_modal_7.showModal()}>Details</button>
                </div>
              </div>
            </motion.div>
            {/* Open the modal using ID.showModal() method */}
            {/* <button className="btn" >open modal</button> */}
            <dialog id="my_modal_7" className="modal modal-bottom sm:modal-middle">
              <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Press ESC key or click the button below to close</p>
                <div className="modal-action">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </div>
              </form>
            </dialog>
          </div>

        </div>

      </div>

    </div>
  </section>;
};

export default Work;

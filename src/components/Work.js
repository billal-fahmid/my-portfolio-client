import React from 'react';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { FaGithub, FaLinkedin, FaLink } from 'react-icons/fa'
import img1 from '../assets/chef-hunter-assignment-10.web.app_.png'
import img2 from '../assets/toy-market-place-assignment-11.web.app_ (1).png'
import img3 from '../assets/assignment-12-fas-sports.web.app_ (3).png'

import sli1p1 from '../assets/project1/Screenshot_414.png'
import sli2p1 from '../assets/project1/Screenshot_415.png'
import sli3p1 from '../assets/project1/Screenshot_416.png'
import sli4p1 from '../assets/project1/Screenshot_417.png'
import sli5p1 from '../assets/project1/Screenshot_418.png'

import sli1p2 from '../assets/project2/Screenshot_414.png'
import sli2p2 from '../assets/project2/Screenshot_415.png'
import sli3p2 from '../assets/project2/Screenshot_416.png'
import sli4p2 from '../assets/project2/Screenshot_417.png'
import sli5p2 from '../assets/project2/Screenshot_418.png'
import sli6p2 from '../assets/project2/Screenshot_419.png'

import sli1p3 from '../assets/project3/Screenshot_414.png'
import sli2p3 from '../assets/project3/Screenshot_415.png'
import sli3p3 from '../assets/project3/Screenshot_416.png'
import sli4p3 from '../assets/project3/Screenshot_417.png'
import sli5p3 from '../assets/project3/Screenshot_418.png'
import sli6p3 from '../assets/project3/Screenshot_419.png'
import sli7p3 from '../assets/project3/Screenshot_420.png'


import { useRef, useState } from "react";

// import Swiper core and required modules
import { Navigation, Pagination, } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';






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
                <h3 className="font-bold text-lg">BD-Ranna$Foods</h3>
                <div>
                  <>
                    <Swiper
                      pagination={{
                        type: "progressbar",
                      }}
                      navigation={true}
                      modules={[Pagination, Navigation]}
                      className="mySwiper"
                    >
                      <SwiperSlide className='w-full h-full'><img className='' src={sli1p1} alt="" /></SwiperSlide>
                      <SwiperSlide className='w-full h-full'><img src={sli2p1} alt="" /></SwiperSlide>
                      <SwiperSlide className='w-full h-full'><img src={sli3p1} alt="" /></SwiperSlide>
                      <SwiperSlide className='w-full h-full'><img src={sli4p1} alt="" /></SwiperSlide>

                    </Swiper>
                  </>

                </div>
                <h2 className='font-semibold'>This is Popular Chefs And Foods web site.</h2>
                <ul className="text-[14px]">
                  <li> This is a single page web site</li>
                  <li> Use this Site you can Choose Chef And Food.</li>
                  <li>You see the many Chefs and every single Chef details .</li>
                  <li>You can see the Chefs Recipes , Chefs Like , Chefs Experience and Number Of Recipes.</li>
                  <li>You Also Create your Account And then Login this site .</li>
                </ul>
                <h2 className='font-semibold'>Technology</h2>
                <p>React , Tailwind , React-router, Firebase Authentication etc </p>
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
                <h3 className="font-bold text-lg">ABCD-TOYS</h3>
                <div>
                  <>
                    <Swiper
                      pagination={{
                        type: "progressbar",
                      }}
                      navigation={true}
                      modules={[Pagination, Navigation]}
                      className="mySwiper"
                    >
                      <SwiperSlide className='w-full '><img src={sli1p2} alt="" /></SwiperSlide>
                      <SwiperSlide className='w-full '><img src={sli2p2} alt="" /></SwiperSlide>
                      <SwiperSlide className='w-full '><img src={sli3p2} alt="" /></SwiperSlide>
                      <SwiperSlide className='w-full '><img src={sli4p2} alt="" /></SwiperSlide>
                      <SwiperSlide className='w-full '><img src={sli5p2} alt="" /></SwiperSlide>
                      <SwiperSlide className='w-full '><img src={sli6p2} alt="" /></SwiperSlide>

                    </Swiper>
                  </>

                </div>
                <h3>This is a Educational Toys shop web site.</h3>
                <ul className="">
                  <li>This is a single page web site .</li>
                  <li>Use this Site you can Choose Toys and buy this site and if you can want you toys add this site after Register or login.</li>
                  <li>You see the many Toys and toys details this site.</li>
                  <li>You can see Our trending Toys , Customer review etc.</li>
                  <li>You Also Create your Account And then Login this site .</li>
                </ul>
                <h2 className='font-semibold'>Technology</h2>
                <p>React , Tailwind , React-router ,Express.js , Node.js , MongoDB , React Query, Firebase Authentication etc</p>
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
                <div>
                  <>
                    <Swiper
                      pagination={{
                        type: "progressbar",
                      }}
                      navigation={true}
                      modules={[Pagination, Navigation]}
                      className="mySwiper"
                    >
                      <SwiperSlide className='w-full '><img src={sli1p3} alt="" /></SwiperSlide>
                      <SwiperSlide className='w-full '><img src={sli2p3} alt="" /></SwiperSlide>
                      <SwiperSlide className='w-full '><img src={sli3p3} alt="" /></SwiperSlide>
                      <SwiperSlide className='w-full '><img src={sli4p3} alt="" /></SwiperSlide>
                      <SwiperSlide className='w-full '><img src={sli5p3} alt="" /></SwiperSlide>
                      <SwiperSlide className='w-full '><img src={sli6p3} alt="" /></SwiperSlide>
                      <SwiperSlide className='w-full '><img src={sli7p3} alt="" /></SwiperSlide>

                    </Swiper>
                  </>

                </div>
                <h3 className="font-bold text-lg">FSA-Sports</h3>
                <p className="py-4"> In this project, I implement the CRUD operation of MongoDB. and especially this project one feature is the user can play three different roles on this site. roles like student, instructor, and also admin. and if the admin wants also can change a student role convert to an instructor or admin also.
                  and other features are students can select multiple classes. and Also a student can a class select just one time. and all selected classes add to the selected class menu on her dashboard. and then he wants can a class delete from her selected class menu. otherwise, he/she can also pay to enroll in this class. when successful a payment then this class add to her enrolled classes page and also remove from her select classes menu. and students can also see her payment history.
                  now I describe the instructor's role, an instructor creates her own class. he/she can see her total student and also her all classes and admin feedback and also can see Which class is approved by admin and which class is denied by admin.
                  Now I will describe what an admin can do . as an admin manage all users, like changing her role and if the admin wants also can delete a user. and manage all classes added by all instructors. like admin approval, admin denied, and also send feedback to the instructor. this is the main feature of my project. and I also implement authentication by Firebase with an email password and Google login.
                </p>
                <h2 className='font-semibold'>Technology</h2>
                <p>React , Tailwind , React-router ,Express.js , Node.js , MongoDB , Firebase, AOS, Axios , React Query , Authentication etc</p>
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

"use client"
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion, useInView, useAnimation } from 'framer-motion'
import { GrDocument } from "react-icons/gr";
import { SocialIcon } from 'react-social-icons'


const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 0 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
};


const CurrentSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref)

  const mainControls = useAnimation();

  useEffect(() => {
    if(isInView) {
      mainControls.start("visible")
    }
  }, [isInView])

  return (
    <motion.section ref={ref}
    variants={{
      hidden: {opacity: 0, y: 75},
      visible: {opacity: 1, y: 0}
    }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
        <motion.div
        className="grid grid-cols-1 sm:grid-cols-12 mt-4 h-auto w-auto justify-between">
          <div
          className="col-span-6 place-self-center">
            <motion.h1
            className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>
              <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#02AABD] to-[#00CDAC]">
                Howdy, I&apos;m
              </span>
              <br></br>
              <TypeAnimation
                  sequence={[
                    'Arvind Kumar',
                    1000, 
                    'Data Engineer',
                    1000,
                    'Data Analyst',
                    1000,
                    'Web Developer',
                    1000
                    ]}
                  wrapper="span"
                  speed={40}
                  repeat={Infinity}
              />

            </motion.h1>
            <p className='text-white text-base sm:text-lg lg:text-xl mb-6'>Currently working towards a Master&apos;s degree in 
            Data Science at Indiana University, and I&apos;ve got a real knack for Data Engineering!
            </p>
            <div className='mt-5 mb-5 flex md:flex-row flex-col gap-4'>
            {/* <--Resume--> */}
            <a href="https://professional-bucket.s3.amazonaws.com/ArvindKumar_Resume_20240317.pdf" target="_blank">
              <button
              className="w-full items-center inline-block sm:w-full mb-2 rounded bg-[#434141] border border-[#636161]
               hover:bg-black px-6 py-2.5 font-medium uppercase leading-normal shadow-md transition duration-150 ease-in-out 
               hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
               >
                <div className='inline-block'>
                  <GrDocument/>
                  </div>
              </button>
              </a>
            {/* <--LinkedIn--> */}
            <a href="https://www.linkedin.com/in/arvindkumarnk/" target="_blank">
              <button
              className="w-full sm:flex items-center sm:w-full mb-2 inline-block rounded bg-[#0077b5] hover:bg-[#0076b594] px-6 py-2.5 text-xs 
              font-medium uppercase leading-normal text-white sm:place-content-center shadow-md transition duration-150 
              ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              >
                <SocialIcon url="https://www.linkedin.com/in/arvindkumarnk/" target='_blank' style={{width: 25, height: 25}} />
              </button>
            </a>
            {/* <--GitHub--> */}
            <a href="https://github.com/Arvind1997/" target="_blank">
            <button
            className="w-full sm:flex items-center sm:w-full mb-2 inline-block rounded bg-[#333] hover:bg-[#131313] px-6 py-2.5 text-xs 
            font-medium uppercase leading-normal text-white sm:place-content-center shadow-md transition duration-150 
            ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
            >
                <SocialIcon url='https://github.com/Arvind1997/' target='_blank' style={{width: 25, height: 25}} />
              </button>
            </a>
            {/* <--X--> */}
            <a href="https://x.com/Arvind241218/">
              <button
              className="w-full sm:flex items-center sm:w-full mb-2 inline-block rounded bg-[#000000] hover:bg-[#242424] px-6 py-2.5 text-xs 
              font-medium uppercase leading-normal text-white sm:place-content-center shadow-md transition duration-150 
              ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              >
                  <SocialIcon url='https://x.com/Arvind241218/' target='_blank' style={{width: 25, height: 25}} />
              </button>
            </a>
          </div>
          </div>
          <div className='col-span-6 mt-5 lg:mt-0 content-center'>
          <motion.svg
            width="auto"
            height="auto"
            viewBox="0 0 1000 800"
            initial="hidden"
            animate="visible"
            className={'text-transparent bg-clip-text bg-gradient-to-r from-[#02AABD] to-[#00CDAC]'}
          >
      <motion.line
        x1="150"
        y1="400"
        x2="350"
        y2="600"
        stroke="#02AABD"
        variants={draw}
        custom={2}
      />
      <motion.line
        x1="150"
        y1="400"
        x2="350"
        y2="200"
        stroke="#02AABD"
        variants={draw}
        custom={2.5}
      />

      <motion.line
        x1="590"
        y1="200"
        x2="790"
        y2="400"
        stroke="#02AABD"
        variants={draw}
        custom={2}
      />

      <motion.line
        x1="790"
        y1="400"
        x2="590"
        y2="600"
        stroke="#02AABD"
        variants={draw}
        custom={2}
      />

      <motion.line
        x1="550"
        y1="150"
        x2="390"
        y2="650"
        stroke="#00CDAC"
        variants={draw}
        custom={2}
      />
      
  
    </motion.svg>
          </div>  
        </motion.div>
    </motion.section>
  )
}

export default CurrentSection

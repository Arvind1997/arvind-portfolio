"use client"
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion, useInView, useAnimation } from 'framer-motion'

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
        className="grid grid-cols-1 sm:grid-cols-12 mt-4">
          <div
          className="col-span-6 place-self-center">
            <motion.h1
            className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>
              <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#02AABD] to-[#00CDAC]">
                Howdy, I'm
              </span>
              <br></br>
              <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Arvind Kumar',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
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
            <p className='text-white text-base sm:text-lg lg:text-xl mb-6'>Currently working towards a Master's degree in 
            Data Science at Indiana University, and I've got a real knack for Data Engineering!
            </p>
            <div className='mt-5 mb-5 -mx-3'>
            {/* <--Resume--> */}
            <a className="px-3 py-2" href="https://professional-bucket.s3.amazonaws.com/ArvindKumar_Resume_20240221.pdf" target="_blank">
              <button
              type="button"
              data-twe-ripple-init
              data-twe-ripple-color="light"
              className="w-full  sm:w-fit mb-2 inline-block rounded bg-[#434141] border border-[#636161] hover:bg-black px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                <span className="[&>svg]:h-4 [&>svg]:w-4">
                <svg className="h-8 w-8 items-center text-white-500"  width="24" height="24" viewBox="0 0 20 20" strokeWidth="2" 
                stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
                <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M14 3v4a1 1 0 0 0 1 1h4" />  
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />  
                <line x1="9" y1="7" x2="10" y2="7" />  <line x1="9" y1="13" x2="15" y2="13" />  
                <line x1="13" y1="17" x2="15" y2="17" />
                </svg>
                </span>
              </button>
            </a>
            {/* <--LinkedIn--> */}
            <a className="px-3 py-4" href="https://linkedin.com/in/arvindkumarnk" role='button' target="_blank">
              <button
              type="button"
              data-twe-ripple-init
              data-twe-ripple-color="light"
              className="w-full sm:w-fit mb-2 inline-block rounded bg-[#0077b5] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white sm:place-content-center shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                <span className="[&>svg]:h-4 [&>svg]:w-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512">
                    <path
                      d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                  </svg>
                </span>
              </button>
            </a>
            {/* <--GitHub--> */}
          <a className="px-3 py-4" href="https://github.com/Arvind1997/" role='button' target="_blank">
            <button
            type="button"
            data-twe-ripple-init
            data-twe-ripple-color="light"
            className="w-full sm:w-fit mb-2 inline-block rounded bg-[#333] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
              <span className="[&>svg]:h-4 [&>svg]:w-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 496 512">
                  <path
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
              </span>
            </button>
          </a>
            {/* <--X--> */}
          <a className="px-3 py-4" href="https://twitter.com/Arvind241218" role='button' target="_blank">
            <button
            type="button"
            data-twe-ripple-init
            data-twe-ripple-color="light"
            className="w-full sm:w-fit mb-2 inline-block rounded bg-black px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
              <span className="[&>svg]:h-4 [&>svg]:w-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 512 512">
                  <path
                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </span>
            </button>
          </a>
          </div>
          </div>
          <div className='col-span-6 place-self-center mt-5 lg:mt-0'>
          <motion.svg
            width="600"
            height="600"
            viewBox="0 0 800 700"
            initial="hidden"
            animate="visible"
          >
      <motion.line
        x1="100"
        y1="300"
        x2="300"
        y2="500"
        stroke="#02AABD"
        variants={draw}
        custom={2}
      />
      <motion.line
        x1="100"
        y1="300"
        x2="300"
        y2="100"
        stroke="#02AABD"
        variants={draw}
        custom={2.5}
      />

      <motion.line
        x1="540"
        y1="100"
        x2="740"
        y2="300"
        stroke="#02AABD"
        variants={draw}
        custom={2}
      />

      <motion.line
        x1="740"
        y1="300"
        x2="540"
        y2="500"
        stroke="#02AABD"
        variants={draw}
        custom={2}
      />

      <motion.line
        x1="500"
        y1="50"
        x2="340"
        y2="550"
        stroke="#02AABD"
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

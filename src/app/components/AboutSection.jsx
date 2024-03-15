'use client'
import React, {useState, useRef, useEffect} from 'react'
import Image from 'next/image'
import { forwardRef } from "react";
import { motion, useInView, useAnimation } from 'framer-motion'


const AboutSection = () => {
    const ref = useRef(false);
    const isInView = useInView(ref)
  
    const mainControls = useAnimation();
    
  useEffect(() => {
    if(isInView) {
      mainControls.start("visible")
    }
  }, [isInView])

  return (
    <motion.section 
    id="About"
    ref={ref}
    variants={{
        hidden: {opacity: 0, y: 75},
        visible: {opacity: 1, y: 0}
      }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
    className='text-white'
    >
      <div className='md:grid md:grid-cols-5 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
      <div className='col-span-3'>
            
            <p className='text-base lg:text-lg break-all'>
            Well, howdy folks! I'm Arvind Kumar, currently wranglin' my way through a Masters in 
            Data Science over at Indiana University Bloomington. Y'all can reckon on me to lasso them data streams 
            like a seasoned data engineer oughta. When I ain't rustlin' up data, you might catch me out on the field 
            swingin' a cricket bat or gallivantin' 'round the globe, explorin' every nook and cranny this world's got 
            to offer. </p>
            <br/>
            <p className='text-base lg:text-lg break-all'>
            And on the other side, I'm practically part of the gang at Central Perk, suitin' up for 
            legendary adventures, knockin' back legendary cocktails, and solvin' legendary equations while hangin' at 
            MacLaren's Pub. And when it's time to clock in at Dunder Mifflin, you can find me sharin' laughs, cringin' 
            at Michael's antics, and rootin' for Jim and Pam's love story like it's my own. Yessiree, those shows ain't 
            just shows to me—they're like a big ol' hug from the TV screen!</p>
        </div>
        <div className='col-span-2'>
            <h2 className='poppins-regular text-4xl font-semibold mb-6 text-[#02AABD]'>
              Y'all wanna know <strong>'bout lil'</strong> ol' me?
            </h2>
        </div>
      </div>
    </motion.section>
  )
}

export default AboutSection

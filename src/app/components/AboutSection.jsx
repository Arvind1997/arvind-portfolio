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
      <div className='col-span-2'>
            <h2 className='poppins-regular text-4xl font-semibold mb-6 text-[#02AABD]'>
              Y&apos;all wanna know <strong>&apos;bout lil&apos;</strong> ol&apos; me?
            </h2>
        </div>
      <div className='col-span-3 text-balance break-normal'>
            
            <p className='text-base lg:text-lg'>
            Well, howdy folks! I&apos;m Arvind Kumar, currently wranglin&apos; my way through a Masters in 
            Data Science over at Indiana University Bloomington. Y&apos;all can reckon on me to lasso them data streams 
            like a seasoned data engineer oughta. When I ain&apos;t rustlin&apos; up data, you might catch me out on the field 
            swingin&apos; a cricket bat or gallivantin&apos; &apos;round the globe, explorin&apos; every nook and cranny this world&apos;s got 
            to offer. </p>
            <br/>
            <p className='text-base lg:text-lg'>
            And on the other side, I&apos;m practically part of the gang at Central Perk, suitin&apos; up for 
            legendary adventures, knockin&apos; back legendary cocktails, and solvin&apos; legendary equations while hangin&apos; at 
            MacLaren&apos;s Pub. And when it&apos;s time to clock in at Dunder Mifflin, you can find me sharin&apos; laughs, cringin&apos; 
            at Michael&apos;s antics, and rootin&apos; for Jim and Pam&apos;s love story like it&apos;s my own. Yessiree, those shows ain&apos;t 
            just shows to me—they&apos;re like a big ol&apos; hug from the TV screen!</p>
        </div>
      </div>
    </motion.section>
  )
}

export default AboutSection

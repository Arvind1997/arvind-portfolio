'use client'
import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const EmailSection = () => {

    const ref = useRef(false);
    const isInView = useInView(ref)
  
    const mainControls = useAnimation();
    
  useEffect(() => {
    if(isInView) {
      mainControls.start("visible")
    }
  }, [isInView])

    const [emailSubmitted, setEmailSubmitted] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault();
        const formData = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value
        }

        await fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })

        const response = await fetch(endpoint, options);
        console.log(response)
        const resData = await response;

        if(response.status === 200) {
            console.log('Message Sent!');
            setEmailSubmitted(true)
        }
    }

  return (
    <motion.section 
    ref={ref}
    variants={{
        hidden: {opacity: 0, y: 75},
        visible: {opacity: 1, y: 0}
      }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
    className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
        <div>
            <h5 className='text-xl font-bold text-white my-2'>
                Let&apos;s Connect
            </h5>
            <p className='text-[#ADE7BE] mb-4 max-w-md break-all'>
                {" "}
                I&apos;m on the lookout for fresh opportunities, and my inbox is
                ready for your messages. Whether you have queries or just 
                want to drop a greeting, I&apos;ll do my utmost to respond 
                promptly and enthusiastically!
            </p>
            <div className='socials flex flex-row gap-2'>
            </div>
        </div>
        <div>
            <form className="space-y-8" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                    <input name="email" type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Ex. abc@xyz.com" required />
                </div>
                <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                    <input name="subject" type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Hook my attention with a subject line!" required />
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                    <textarea name='message' id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Let me know what you think with a message.."></textarea>
                </div>
                <button type="submit" className=" w-full py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#02AABD] hover:bg-[#237f89] focus:ring-3 focus:outline-none focus:ring-blue-300">Send message</button>
                {
                    emailSubmitted && (
                        <p className='text-green-500 text-sm mt-2'>
                            Email sent successfully!
                        </p>
                    )
                }
            </form>

        </div>
    </motion.section>
  )
}

export default EmailSection

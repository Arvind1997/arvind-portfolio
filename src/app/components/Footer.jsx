import React from 'react'
import { DM_Sans } from 'next/font/google' 
import { SocialIcon } from 'react-social-icons'


const dm_sans = DM_Sans({
  weight: ["400"],
  subsets: ['latin']
})

const Footer = () => {
  return (
    <footer className='footer border border-t-[#535665] border-l-transparent border-r-transparent text-white'>
        <div className='container p-12 sm:flex sm:flex-wrap sm:flex-row sm:mx-auto flex flex-wrap-reverse flex-col items-center gap-4 sm:justify-between'>
            <span className='dm_sans text-3xl'>arvind.</span>
            <div className=' flex flex-row gap-4'>
              <SocialIcon url="https://www.github.com/Arvind1997" style={{ height: 40, width: 40 }} target='_blank'>
              </SocialIcon>
              <SocialIcon url="https://www.instagram.com/insomnious_rv" style={{ height: 40, width: 40 }} target='_blank'>
              </SocialIcon>
              <SocialIcon url="https://www.linkedin.com/in/arvindkumarnk" style={{ height: 40, width: 40 }} target='_blank'>
              </SocialIcon>
              <SocialIcon  url="https://x.com/Arvind241218" style={{ height: 40, width: 40 }} target='_blank'>
              </SocialIcon>
            </div>
        </div>
    </footer>
  )
}

export default Footer

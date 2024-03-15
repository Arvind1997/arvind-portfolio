import React, { useRef, useEffect } from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useAnimation, useInView } from 'framer-motion'


const ProjectCard = ({imgUrl, title, description, gitUrl}) => {

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y:0, opacity: 1 }
    }
    
    const ref = useRef(false);
    const isInView = useInView(ref)
    
    const mainControls = useAnimation();

    useEffect(() => {
        if(isInView) {
        mainControls.start("visible")
        }
    }, [isInView])
  return (
    // <div>
    //     <div className='h-92 md:h-82 rounded-t-xl' style = {{ background: `url(${ imgUrl })`, backgroundSize: "cover" }}>
    //     </div>
    //     <div className='text-white rounded-b-xl bg-[#181818] py-6 px-6'>
    //         <h5 className='text-xl font-semibold mb-2'>{title}</h5>
    //         <p>{description}</p>
    //     </div>
    // </div>

    <div className="max-w-[400px] h-[350px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-400 grid-rows-2">
        <div className='row-span-1 relative group'>
            <a href="#">
                <img className="rounded-t-lg object-scale-down h-48 w-full" src={imgUrl} alt=""/>
            </a>
            <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 
            hidden group-hover:flex group-hover:bg-opacity-70 group-hover:rounded-t-lg transition-all duration-500'>
                <Link href={gitUrl} target='_blank' className='h-14 w-14 border-2 mr-2 relative rounded-full border-[#ADB7BE] 
                hover:border-white group/link'>
                    <CodeBracketIcon className='w-10 h-10 text-[#ADB7BE] absolute top-1/2 left-1/2 
                    transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white'>
                    </CodeBracketIcon>
                </Link>
                <Link href='/' className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] 
                hover:border-white group/link'>
                    <EyeIcon className='w-10 h-10 text-[#ADB7BE] absolute top-1/2 left-1/2 
                    transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white'>
                    </EyeIcon>
                </Link>
            </div>
        </div>
        <div class="p-5 row-span-1">
            <a href="#">
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
            <div>
                {/* <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a> */}
            </div>
        </div>
    </div>
  )
}

export default ProjectCard

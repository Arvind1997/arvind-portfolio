'use client'
import React, { useState, useTransition, useRef, useEffect } from 'react'
import TabButton from './TabButton'
import Image from 'next/image'
import { motion, useAnimation, useInView } from 'framer-motion'

const TAB_DATA = [
    {
        title: "Skills",
        id: "Skills",
        content: (
            <div>
                <div className='grid md:grid-cols-4'>
                    <div className='col-start-2 col-end-4'>
                        <h2 className='text-2xl py-3'>Data Engineering Tools</h2>
                        <p className=' px-5 py-1'><strong className='font-extrabold text-lg'>Programming Languages:{" "}</strong>Python, R, PySpark</p>
                        <p className='px-5 py-1'><strong className='font-extrabold text-lg'>SQL & NoSQL:{" "}</strong> PostgreSQL, MongoDB, MySQL, Neo4j, SSIS</p>
                        <p className='px-5 py-1'><strong className='font-extrabold text-lg'>Visualization:{" "}</strong>Tableau, PowerBI</p>
                    </div>
                    <div className='col-start-2 col-end-4'>
                        <h2 className='text-2xl py-3'>Web Technology</h2>
                        <p className=' px-5 py-1'>
                            <strong className='font-extrabold text-lg'>
                                Angular, React, Tailwind CSS, Vanilla CSS, Nodejs, Expressjs, Nextjs
                            </strong>
                        </p>
                    </div>
                </div>
                <div className='md:grid grid-rows-2 grid-flow-col pt-5'>
                    <div className='row-span-1'>
                        <div className='md:grid grid-cols-8'>
                            <div className='col-span-2 place-self-center'>
                                <Image src='/images/awslogo.webp' width={200} height={200}/>
                            </div>
                            <div className='col-span-2 place-self-center'>
                                <Image src='/images/gcplogo.webp' width={200} height={200}/>
                            </div>                            
                            <div className='col-span-2 place-self-center'>
                                <Image src='/images/azurelogo.png' width={200} height={200}/>
                            </div>
                            <div className='col-span-2 place-self-center'>
                                <Image src='/images/apache-logo.png' width={200} height={200}/>
                            </div>
                        </div>
                    </div>
                    <div className='row-span-1'>
                        <div className='md:grid grid-cols-8'>
                        <div className='col-span-2 place-self-center'>
                            <ul className='text-xl p-6'> 
                                <li>Amazon S3</li>
                                <li>AWS Glue</li>
                                <li>Amazon Athena</li>
                                <li>Amazon EC2</li>
                                <li>Amazon Redshift</li>
                                <li>Amazon Quicksight</li>
                            </ul>
                        </div>
                        <div className='col-span-2 place-self-center'>
                            <ul className='text-xl p-6'> 
                                <li>Google Cloud Storage</li>
                                <li>Google Compute</li>
                                <li>Google Big Query</li>
                                <li>Looker</li>
                            </ul>
                        </div>
                        <div className='col-span-2 place-self-center'>
                            <ul className='text-xl p-6'>    
                                <li>Azure Storage (Blob & Data Lake)</li>
                                <li>Azure Data Factory</li>
                                <li>Azure Synapse Analytics</li>
                                <li>PowerBI</li>
                            </ul>
                        </div>
                        <div className='col-span-2 place-self-center'>
                            <ul className='text-xl p-6'> 
                                <li>Apache Hadoop</li>
                                <li>Apache Spark</li>
                                <li>Apache Kafka</li>
                                <li>Apache Airflow</li>
                                <li>Apache Bookkeeper</li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "Education",
        id: "Education",
        content: (
            <div className='md:grid grid-cols-5 p-10'>
                <div className='col-start-2 col-end-5'>

                <ol class="relative border-s border-gray-200 dark:border-gray-600">                  
                    <li class="mb-10 ms-4">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white 
                        dark:border-gray-900 dark:bg-gray-700">
                        </div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                Aug 2022 - May 2024
                            </time>
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                Indiana University, Bloomington
                            </h3>
                            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                Coursework: Advanced Database Concepts, Applied Machine Learning, Data Mining,
                                Intro to Statistics, Computer Vision, Applied Algorithms, Data Visualization, 
                                Database Design, Applied Database Technologies
                            </p>
                            <a href="https://professional-bucket.s3.amazonaws.com/UnOfficialTranscript_20240314.pdf" target="_blank" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border
                             border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 
                             focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400
                            dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                            View Unofficial Transcripts 
                            <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
                            fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg></a>
                    </li>
                    <li class="mb-10 ms-4">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white 
                        dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            Aug 2015 - Apr 2019
                        </time>
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                            Panimalar Institute of Technology
                        </h3>
                        <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                            Chennai, Tamil Nadu, India
                        </p>
                    </li>
                </ol>


                </div>
            </div>


        )
    },
    {
        title: "Experience",
        id: "Experience",
        content: (
<div className='md:grid grid-cols-5 p-10'>
                <div className='col-start-2 col-end-6'>

                <ol class="relative border-s border-gray-200 dark:border-gray-600">                  
                    <li class="mb-5 ms-4">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white 
                        dark:border-gray-900 dark:bg-gray-700">
                        </div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                Nov 2023 - Current
                            </time>
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                Indiana Daily Student
                            </h3>
                            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                Web Developer
                            </p>
                            <p className='mb-1 text-base font-normal text-gray-500 dark:text-gray-400 indent-10'>
                               - Played a key role in overhauling web pages using React and Next JS, enhancing user experience.
                            </p>
                            <p className='mb-2 text-base font-normal text-gray-500 dark:text-gray-400 indent-10'>
                               - Actively tackled technical challenges to ensure seamless website functionality and user interaction.
                            </p>
                    </li>
                    <li class="mb-5 ms-4">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white 
                        dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            May 2023 - Aug 2023
                        </time>
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                            Microsoft
                        </h3>
                        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            Data Engineer Intern
                        </p>
                        <p className='mb-1 text-base font-normal text-gray-500 dark:text-gray-400 indent-10'>
                               - Contributed to the development of SQL scripts and the creation of efficient ETL 
                                pipelines for Office 365 data processing.
                        </p>
                        {/* <p className='mb-2 text-base font-normal text-gray-500 dark:text-gray-400 indent-10'>
                               -- Actively tackled technical challenges to ensure seamless website functionality and user interaction.
                        </p> */}
                    </li>
                    <li class="mb-5 ms-4">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white 
                        dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            Apr 2022 - Jul 2022
                        </time>
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                            Infosys Ltd.
                        </h3>
                        <p class=" mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            Test Analyst
                        </p>
                        <p className='mb-1 text-base font-normal text-gray-500 dark:text-gray-400 indent-10'>
                            - Managed various aspects of database administration, ensuring smooth operation within an agile environment.
                        </p>
                    </li>
                    <li class="mb-10 ms-4">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white 
                        dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            Aug 2019 - Mar 2022
                        </time>
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                            Infosys Ltd.
                        </h3>
                        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            Test Engineer
                        </p>
                        <p className='mb-2 text-base font-normal text-gray-500 dark:text-gray-400 indent-10'>
                            - Led a significant migration project from Sybase to Oracle, demonstrating strong leadership and technical skills.
                        </p>
                    </li>
                    <li class="mb-10 ms-4">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white 
                        dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            Dec 2018 - Apr 2019
                        </time>
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                            Infosys Ltd.
                        </h3>
                        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            Computer Science Intern
                        </p>
                        <p className='mb-2 text-base font-normal text-gray-500 dark:text-gray-400 indent-10'>
                            - Developed a dynamic Full Stack eCommerce website using Angular,
                            showcasing proficiency in web development technologies.
                        </p>
                    </li>
                </ol>


                </div>
            </div>
        )
    },

]

const SkillsSection = () => {

    const ref = useRef(false);
    const isInView = useInView(ref)
  
    const mainControls = useAnimation();
    
  useEffect(() => {
    if(isInView) {
      mainControls.start("visible")
    }
  }, [isInView])
    const [tab, setTab] = useState("Skills")
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
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
    >
        <div className='grid md:grid-cols-3'>
            <TabButton 
            selectTab={() => handleTabChange("Skills")} 
            active={tab === "Skills"}
            >{" "}Skills{" "}
            </TabButton>
            <TabButton 
            selectTab={() => handleTabChange("Education")} 
            active={tab === "Education"}
            >{" "}Education{" "}
            </TabButton>
            <TabButton 
            selectTab={() => handleTabChange("Experience")} 
            active={tab === "Experience"}
            >{" "}Experience{" "}
            </TabButton>
        </div>
        <div className='mt-8'>
            {TAB_DATA.find((t) => t.id === tab).content}
        </div>
    </motion.section>
  )
}

export default SkillsSection

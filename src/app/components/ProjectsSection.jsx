'use client'
import React, { useState, useEffect, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView, useAnimation } from 'framer-motion'

const projectsData = [
    {
        id: 1,
        title: 'Zillow Property Analysis',
        description: "Zillow Property",
        image: "/images/zillow-logo.png",
        tag: ["All", "Data Engineering", "Data Visualization"],
        githubUrl: 'https://github.com/Arvind1997/zillow-analysis-gcp'

    },
    {
        id: 2,
        title: 'Financial Stock Analysis',
        description: "Financial Stock",
        image: "/images/financial-stocks-stockimage.jpg",
        tag: ["All", "Data Engineering"],
        githubUrl: 'https://github.com/Arvind1997/financial-datawarehouse-aws'

    },
    {
        id: 3,
        title: 'Yelp Restaurants & Bars Analysis',
        description: "Yelp Reviews",
        image: "/images/yelp-logo.jpg",
        tag: ["All", "Data Engineering", "Data Visualization"],
        githubUrl: 'https://github.com/Arvind1997/YelpReviews-DataPipeline-aws'

    },
    {
        id: 4,
        title: 'Chicago Crime Trend Data Visualization',
        description: "Chicago Crimes",
        image: "/images/chicago-crimes-stockphoto.jpg",
        tag: ["All", "Data Engineering", "Data Visualization"],
        githubUrl: 'https://github.com/Arvind1997/Chicago-Crime-Analysis-DataVisualization'

    },
    {
        id: 5,
        title: 'Chicago Crime Trend Analysis',
        description: "Chicago Crime Website",
        image: "/images/chicago-website-symbol.jpg",
        tag: ["All", "Web Development"],
        githubUrl: 'https://github.com/Arvind1997/ChicagoCrime_TrendAnalysis'
    },
    {
        id: 6,
        title: 'Image Classification using CNN',
        description: "Image Classification using CNN",
        image: "/images/aml-imageclassification-stockimage.png",
        tag: ["All", "Machine Learning"],
        githubUrl: 'https://github.com/Arvind1997/Applied-Machine-Learning-Projects'
    },
    {
        id: 7,
        title: 'Stock Price Predication using LSTM',
        description: "Stock Price Predication using LSTM",
        image: "/images/stockpriceprediction-stockimage.png",
        tag: ["All", "Machine Learning"],
        githubUrl: 'https://github.com/Arvind1997/Data-Mining-Projects'
    },
]



const ProjectsSection = () => {

    const ref = useRef(false);
    const isInView = useInView(ref)
  
    const mainControls = useAnimation();

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y:0, opacity: 1 }
    }
    
    useEffect(() => {
        if(isInView) {
        mainControls.start("visible")
        }
    }, [isInView])

    const [tag, setTag] = useState("All")

    const handleChange = (newTag) => {
        setTag(newTag)
    }
    
    const filteredProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    );

  return (
    <motion.div
    id="Projects"
    ref={ref}
    variants={{
        hidden: {opacity: 0, y: 75},
        visible: {opacity: 1, y: 0}
      }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
    >
        <h2 className='text-center text-4xl font-bold mt-4 mb-6 text-transparent 
        bg-clip-text bg-gradient-to-tr from-[#02AABD] to-[#02aabd94]'>
            Projects
        </h2>
        <div className='text-white flex flex-row justify-center items-center gap-3 py-10'>
            <ProjectTag name = "All" isSelected={tag === "All"} onClick={handleChange} />
            <ProjectTag name = "Data Engineering" isSelected={tag === "Data Engineering"} onClick={handleChange} />
            <ProjectTag name = "Data Visualization" isSelected={tag === "Data Visualization"} onClick={handleChange} />
            <ProjectTag name = "Web Development" isSelected={tag === "Web Development"} onClick={handleChange} />
        </div>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {
            filteredProjects.map((project, index) => 
            <motion.div 
            key={ index }
            variants={ cardVariants } 
            initial="initial" 
            animate={isInView ? "animate" : "initial"} 
            transition={{ duration: 0.5, delay: index * 0.4 }}>
                <ProjectCard key={project.id} title={project.title} 
                description={project.description} imgUrl={project.image} gitUrl={project.githubUrl} />
            </motion.div>
            )}
        </div>
    </motion.div>
  )
}

export default ProjectsSection

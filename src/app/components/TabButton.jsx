import React from 'react'
import { motion } from 'framer-motion'

const variants = {
    default: { width: 0 },
    active: { width: "calc(100% - 0.75rem)" },
}

const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active ? 'text-white' : 'text-purple'
  return (
        <button onClick={selectTab}>
            <p className={`'mr-3 py-4 text-center font-semibold text-4xl text-[#02AABD] hover:text-[#375e8b] ${buttonClasses}'`}>
                {children}
            </p>
            <motion.div
                animate={ active ? "active" : "default" }
                variants={variants}
                className='h-1 bg-[#02AABD] mt-2 mr-3'
            >

            </motion.div>
        </button>
  )
}

export default TabButton

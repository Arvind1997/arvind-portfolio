import React from 'react'
import PublicationCard from './PublicationCard'

const PublicationSection = () => {
  return (
    <section className='mt-24'>
        <div className='md:grid grid-rows-2'>
            <div className='place-self-center'>
                <h2 className='text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-tr from-[#02AABD] to-[#02aabd94]'>
                    Publications
                </h2>
            </div>
            <div>
              <PublicationCard />
            </div>
            <div>
            </div>
        </div>
    </section>
  )
}

export default PublicationSection

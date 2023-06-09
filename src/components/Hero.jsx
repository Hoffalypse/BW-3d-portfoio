import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 mb-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white flex flex-row shift`}> Hi, I'm &nbsp;<span className='text-[#915eff]'>Bryan</span>
        
          </h1>
          <p className={`${styles.heroSubText} text-white-100 sm:font-size-20`}>I develop compelling visual applications with <br className='sm:block hidden'/>intuitive interfaces and well-structured backend functionality.</p>
        </div>
        
      </div>
      
      <ComputersCanvas/>
     
      <div className='absolute bottom-32 w-full flex justify-center items-center'>
        <a
        href='#about'>
        <div className='w-[35px] h-[47px] rounded-3xl border-4 border-secondary flex justify-center items-startp-2'>
          <motion.div 
          animate={{
          y:[0,27,0]
        }}
        transition={{
          duration:1.5,
          repeat: Infinity,
          repeatType:'loop'
        }}
        className='w-3 h-3 rounded-full bg-secondary mb-1'
          
          />
        </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
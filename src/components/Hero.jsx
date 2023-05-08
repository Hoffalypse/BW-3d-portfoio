import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white flex flex-row`}> Hi, I'm <span className='text-[#915eff] mx-5'>Bryan</span>
          <ul className="spacing2">
                <li className="align space"><a href="https://github.com/Hoffalypse" target="_blank" rel='noreferrer'> <i className="fa-brands fa-square-github fa-2xl github"></i></a></li>
                <li className="align space"><a href="https://www.linkedin.com/in/bryan-wienhoff-10a011241/" target="_blank"rel='noreferrer'><i className="fa-brands fa-linkedin fa-2xl linkedin"></i></a></li>
                <li className="align space"><a href="https://twitter.com/BryanWienhoff" target="_blank"rel='noreferrer'><i className="fa-brands fa-square-twitter fa-2xl twitter"></i></a></li>
            </ul>
          </h1>
          <p className={`${styles.heroSubText}mt-[-50px] text-white-100`}>I develop compelling visual applications with <br className='sm:block hidden'/>intuitive interfaces and well-structured backend functionality.</p>
        </div>
        
      </div>
      <ComputersCanvas/>
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
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
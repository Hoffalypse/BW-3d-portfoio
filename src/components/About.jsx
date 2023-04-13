import React from 'react'
import Tilt from 'react-parallax-tilt'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>
    <motion.p 
    variants={fadeIn('', '', 0.1, 1)}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >I am a skilled software developer with experience in Typescript and Javascript and expertise in frameworks like React, Angular, Node.js and MongoDb. I am a fast learner and accel in problem solving. I colloaborate closely with clients to create efficient, scalable and user-friendly solutions that solve real world problems. Let's work together to bring your ideas to life. 

    </motion.p>
    </>
  )
}

export default About
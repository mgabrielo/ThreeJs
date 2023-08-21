import React from 'react'
import { Tilt } from 'react-tilt'
import {motion, spring} from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard =({index, title, icon})=>{
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div variants={fadeIn("right", "spring", 0.5 *index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div options={{max:45, scale:1, speed:450}} className='bg-teritary rounded-[20px] py-5 px-12 min-h-[280px]
        flex justify-evenly items-center flex-col'>
          <img src={icon} about={title} className='w-16 h-16 object-contain'/>
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} px-6`} >Introduction</p>
      <h2 className={ `${styles.sectionHeadText} px-3 `}>Overview</h2>
      <motion.p className='mt-4 px-3 text-secondary text-[17px] max-w-3xl leading-[30px]' variants={fadeIn("", "", 0.1, 1)}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index)=>(
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </motion.div>
  )
}

export default SectionWrapper(About, 'about')
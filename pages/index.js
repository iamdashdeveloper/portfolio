// next image
import image from "next/image";

//components
import ParticlasContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

//framer motion
import { motion } from "framer-motion";

//variants
import {fadeIn } from '../variants';
import ParticlesContainer from "../components/ParticlesContainer";

const Home = () => {
  return (<div className= ' bg-primary/60 h-full'>
    {/* text */}
    <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 
    to-black/10'>
      <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left
       h-full container mx-auto">
        {/* title */}
        <motion.h1 
        variants={fadeIn('down', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="h1">
          Transforming Ideas <br/> into {' '}
           <span className="text-accent">Digital Reality</span> 
        </motion.h1>
        {/* subtitle */}
        <motion.p 
        variants={fadeIn('down', 0.3)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className = 'max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>
        I turn ideas into practical digital solutions using advanced analytical techniques to extract insights from complex data. 
        My approach combines statistical modeling, spatial analysis,
        and intelligent system development to solve real-world challenges.

        </motion.p>
        {/* btn */}
        <div className='flex justify-center xl:hidden relative '>
         <ProjectsBtn /> 
        </div>
        <motion.div 
       variants={fadeIn('down', 0.4)}
       initial='hidden'
       animate='show'
       exit='hidden'
       className="hidden xl:flex" >
          <ProjectsBtn/>
        </motion.div>
      </div>
    </div>
    {/*image */}
    <div className="w-[1000px] h-full absolute right-0 bottom-0">
      {/* bg img */}
      <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right
      xl:bg-no-repeat h-full w-full absolute mix-blend-color-dodge translate-z-0"></div>
      {/* particles */}
      <ParticlesContainer/>
      {/* avatar img */}
      <motion.div 
      variants={fadeIn('up', 0.5)}
      initial='hidden'
      animate='show'
      exit='hidden'
      transition={{duration: 1, ease: 'easeInOut'}}
      className='w-full h-full max-w-[600px] max-h-[400px] absolute bottom-0 lg:bottom-60 lg:right-0 p-4'>

        <Avatar />
      </motion.div>
    </div>
  </div>
  );
};

export default Home;

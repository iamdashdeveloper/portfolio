import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';

// Avatar and Circles components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import {fadeIn} from '../../variants';

//counter
import CountUp  from 'react-countup';


const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          'FaHtml5',
          'FaCss3',
          'FaJs',
          'FaReact',
          'SiFramer',
          'FaWordpress',
          'SiNextdotjs',
        ],
      },
      {
        title: 'Data Science, ML & AI',
        icons: ['SiTensorflow', 'SiPostgresql', 'FaJupyter', 'SiOpenai', 'SiFlask'],
      },
      {
        title: 'Geospatial Information Systems and Remote Sensing',
        icons: ['SiGeopandas', 'SiQgis', 'SiArcgis'],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Machine Learning DSA - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Women In Tech Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Machine Learning Engineer - XYZ Company',
        stage: '2012 - 2023',
      },
      {
        title: 'Geospatial Developer - ABC Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - Certificate from W3Schools',
        stage: '2011',
      },
      {
        title: 'Data Science, Machine Learning and Artificial Intelligence - Certificate from Great Learning',
        stage: '2024',
      },
      {
        title: 'BSc. Geospatial Information Systems and Remote Sensing - Dedan Kimathi University of Technology',
        stage: '2023',
      },
    ],
  },
];

// Function to map icon name strings to actual components
const getIconComponent = (iconName) => {
  if (FaIcons[iconName]) {
    return FaIcons[iconName];
  } else if (SiIcons[iconName]) {
    return SiIcons[iconName];
  } else {
    console.error(`Icon ${iconName} not found`);
    return null;
  }
};

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index)
return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles/>
      <motion.div
  variants={fadeIn('right', 0.2)}
  initial='hidden'
  animate='show'
  exit='hidden'
  className="xl:flex absolute bottom-0 left-0 -ml-64"
  style={{ zIndex: 1 }}
>
  <img src="/avatar.png" alt="Avatar" className="avatar-image" style={{ width: "auto", height: "auto" }} />
</motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center -mr-24 items-center">
          <h2 className="text-4xl font-bold mb-4 text-accent">About Me</h2>
          <p className="text-lg leading-relaxed max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
            I am a passionate developer with expertise in web development, data science, and geospatial technologies.
            With a solid foundation in machine learning and a knack for creating intuitive user experiences, I thrive on
            solving complex problems and continuously learning new skills.
          </p>
          {/* Counters */}
          <div className='flex flex-1 xl:gap-x-6'>
            <div className='flex flex-1 xl:gap-x-6' >
            <div >
              {/* experience */}
              <div className='relative flex-1 after:w-[1px] after:h-full
              after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={5} duration={7}/> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Years of experience
                  </div>
              </div>  
            </div>
            
            <div>
              {/* clients satisfied */}
              <div className='relative flex-1 after:w-[1px] after:h-full
              after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={50} duration={7}/> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  satisfied clients
                  </div>
              </div>
              </div>  
              <div>
              {/* projects */}
              <div className='relative flex-1 after:w-[1px] after:h-full
              after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={100} duration={7}/> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Finished Projects
                  </div>
              </div>  
            </div> 
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${
                  index === itemIndex &&
                  'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="bg-pink-400/10 py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => (
              <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                {item.stage && <div className="hidden md:flex">-</div>}
                <div>{item.stage}</div>
                <div className="flex gap-x-4">
                  {item.icons?.map((iconName, iconIndex) => {
                    const IconComponent = getIconComponent(iconName);
                    if (!IconComponent) {
                      return null;
                    }
                    return <IconComponent key={iconIndex} className="text-2xl text-white" />;
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


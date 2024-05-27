
import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

//icons
import { RxDesktop } from "react-icons/rx";
import { DiGoogleAnalytics } from "react-icons/di";
import { FaMapMarkedAlt } from "react-icons/fa";
import { GiDeliveryDrone } from "react-icons/gi";
import { CgWebsite } from "react-icons/cg";



// data
export const serviceData = [
  {
    icon: <DiGoogleAnalytics />,
    title: 'Analytics',
    description: 'Harnessing insights from Data to Discover full Potential for your Business.',
  },
  {
    icon: <FaMapMarkedAlt />,
    title: 'Mapping',
    description: 'Explore the full potential of your geographic surrounding as well as discovering new opportunities.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Creating User intuitive experiences while solving complex problems.',
  },
  {
    icon: <GiDeliveryDrone />,
    title: 'Remote Sensing',
    description: 'Unlocking secrets of the earth from above using Drone Technology.',
  },
  {
    icon: <CgWebsite />,
    title: 'UI/UIX design',
    description: 'Captivating stories give birth to magnificent designs.Turn Your Imagination to digital reality',
  },
];
//components
//
//framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Services = () => {
  return (
  <div className='h-full bg-primary/30 py-36 flex items-center'>
    <Circles/>
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-x-8'>
        {/* text */}
        <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4
        xl:mb-0'>
          <motion.h2
          variants={fadeIn('up',0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='h2 xl:mt-8'>
            My services <span className='text-accent'>.</span>

          </motion.h2>
          <motion.p
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='m-4 max-w-[400px] mx-auto lg:mx-0'
          >
            Web Development, Spatial Analysis, Data Analysis, Building AI powered applications 
            Building Remote Sensing Applications, Land Survey and
            Machine Learning Applications

          </motion.p>
        </div>

        {/* slider */}
        <motion.div
        variants={fadeIn('down',0.6)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='w-full xl:max-w-[65%]'>
          <ServiceSlider/>
        </motion.div>
      </div>
    </div>
    <Bulb/>
  </div>);
};

export default Services;

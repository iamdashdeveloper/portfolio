// import swiper react components
import { Swiper, SwiperSlide} from 'swiper/react';
import { RxDesktop, RxArrowRight, RxArrowTopRight } from "react-icons/rx";
import { DiGoogleAnalytics } from "react-icons/di";
import { FaMapMarkedAlt } from "react-icons/fa";
import { GiDeliveryDrone } from "react-icons/gi";
import { CgWebsite } from "react-icons/cg";

//import required modules
import { FreeMode, Pagination} from 'swiper';



//service data
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
//import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const ServiceSlider = () => {
  return( <Swiper 
    breakpoints={{
      320:{ 
      slidesPerView: 1,
      spaceBetween: 15,
  },
  640:{ 
    slidesPerView: 3,
    spaceBetween: 15,
},
 }}
 freeMode={true}
 pagination={{
  clickable: true
 }}
 modules={[FreeMode, Pagination]}
 className='h-[240px] sm:h-[340px]'
 > {
  serviceData.map((item, index)=> {
    return (
    <SwiperSlide key={index}>
      <div className='bg-[rgba(65,47,123 0.15)] h-max rounded-lg px-6 py-8 flex
      sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)]
      transition-all duration-300' >
        {/* icon */}
        <div className='text-4xl text-accent mb-4'> {item.icon} </div>
      {/* title & desc */}
      <div className='mb-8'>
        <div className='mb-2 text-lg'>{item.title}</div>
        <p className='max-w-[350px] leading-normal'> {item.description} </p>
      </div>
      {/* arrow */}
      <div className='text-3xl'>
        <RxArrowTopRight className='group-hover:rotate-45 
        group-hover:text-accent transition-all duration-300' />
      </div>

      </div>
      
    </SwiperSlide>);
  })
 } </Swiper>) ;
};

export default ServiceSlider;

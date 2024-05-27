//links
import Link from 'next/link';

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiTwitterLine,
  RiPinterestLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiLinkedinLine,
  RiWhatsappLine
} from 'react-icons/ri';

const Socials = () => {
  return( 
  <div className='flex items-center gap-x-5 text-lg'>
    <Link href={''} className='hover:text-accent transition-all duration-300' >
      <RiYoutubeLine/>
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300' >
      <RiInstagramLine/>
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300' >
      <RiFacebookLine/>
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300' >
      <RiTwitterLine/>
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300' >
      <RiPinterestLine/>
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300' >
      <RiDribbbleLine/>
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300' >
      <RiBehanceLine/>
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300' >
      <RiLinkedinLine/>
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300' >
      <RiWhatsappLine/>
    </Link>

  </div>);
};

export default Socials;

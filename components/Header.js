//next image
import Image from 'next/image';

//next link
import Link from 'next/link';

//components
import Socials from '../components/Socials';


const Header = () => {
  return (
    <header className='absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8'>
          {/* Text with sweeping animation */}
          <div className="logo">
            <span className="text-4xl font-bold text-white tracking-wider overflow-hidden">
              <span className="animate-sweepIn">POLLY Mwangi</span>
            </span>
          </div>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;

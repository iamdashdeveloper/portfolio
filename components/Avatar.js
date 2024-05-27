import Image from 'next/image'

const Avatar = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="hidden xl:flex xl:max-w-none absolute bottom-0 right-0 p-4">
        <Image 
          src='/avatar.png' 
          width={600}  // Adjusted width
          height={400} // Adjusted height
          alt='' 
          className='translate-z-0'
        />
      </div>
    </div>
  );
};

export default Avatar;


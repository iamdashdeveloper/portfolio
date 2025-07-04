//components

//icons
import {BsArrowRight} from 'react-icons/bs';

//framer
import {motion} from 'framer-motion';

//variants
import {fadeIn} from '../../variants';

const Contact = () => {
  return <div className='h-full bg-primary/30'>
    <div className='container mx-auto py-32 text-center xl:text-lefr flex
    items-center justify-center h-full'>
      {/* text & form */}
      <div className='flex flex-col w-full max-w-[700px]'>
        {/* text  */}
        <h2 className='h2 text-center mb-12'>
          Let us <span className='text-accent'>connect.</span>
          </h2>
          {/* form */}
          <form className='flex-1 flex flex-col gap-6 w-full mx-auto'>
            {/* group */}
            <div className='flex gap-x-6 w-full'>
              <input type='text' placeholder='First Name' className='input' />
              <input type='text' placeholder='Last Name' className='input' />
            </div>
            <input type='text' placeholder='email' className='input' />
            <input type='text' placeholder='Subject' className='input' />
            <textarea placeholder='Message' className='textarea' rows={6} ></textarea>
            <button className='btn rounded-full border border-white/50 max-w-[170px]
            px-8 transition-all duration-300 flex items-center justify-center
            overflow-hidden hover:border-accent group '>
              <span className='group-hover:translate-y-[120%] group-hover:opacity-0 
              transition-all duration-500'>
                Let us talk
                </span>
                <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex
                group-hover:-translate-y-0 group-hover:opacity-100 transition-all 
                duration-300 absolute text-[22px]'/>
            </button>
          </form>
      </div>
    </div>
  </div>;
};

export default Contact;

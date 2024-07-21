import Image from 'next/image';
import React from 'react';
import Cta from '../public/cta.png';
import SubscribeForm from './forms/SubscribeForm';

const CallToAction = () => {
  return (
    <div className='flex-col-reverse lg:flex-row flex  w-full relative  p-10 md:p-16 lg:p-24 lg:justify-evenly bg-blue-primary-dark items-center justify-center  mt-16 lg:mt-24 '>
      <div className='flex flex-col  text-center lg:text-left gap-5 max-w-[500px] lg:gap-8'>
        <p className='text-white font-bold text-[36px]  leading-10'>
          Get our stories delivered From us to your inbox weekly.
        </p>
        <SubscribeForm />
        <p className='text-zinc-300 text-base'>
          Get a response tomorrow if you submit by 9pm today. If we received
          after 9pm will get a reponse the following day.
        </p>
      </div>
      <div className='w-[466px] h-[385px] relative hidden md:block'>
        <div className='absolute z-[3]'>
          <Image
            src={Cta}
            width={466}
            height={385}
            className='w-[466px] h-[305px] lg:h-[385px]'
            alt='call to action image'
          />
        </div>
        <div className='absolute bg-[#E5EAF4]/40  bottom-10 lg:-bottom-10  -left-20 rounded-lg h-[146px]  z-[1] w-[237px] lg:h-[200px]' />
        <div className='absolute bg-[#FC5A5A]/40 -top-6 lg:-top-16 -right-20   w-[237px]  h-[146px] lg:h-[200px] rounded-md z-[2]' />
      </div>
    </div>
  );
};

export default CallToAction;

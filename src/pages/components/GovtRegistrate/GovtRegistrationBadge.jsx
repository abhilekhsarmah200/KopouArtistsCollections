'use client';
import { CheckCircle2 } from 'lucide-react';

export default function GovtRegistrationBadge() {
  return (
    <div className='flex flex-row items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-[#c23c23]/60 to-[#c23c23] border border-[#c23c23]/60 rounded-2xl sm:px-4 px-1 py-3 shadow-sm'>
      {/* Logo/Icon */}
      <div className='flex items-center justify-center w-5 h-5 xs:w-7 xs:h-7 bg-[white]/50 rounded-full border border-[#c23c23]/60 shadow-sm'>
        <CheckCircle2 className='text-[#c23c23] w-3 h-3 xs:w-4 xs:h-4' />
      </div>

      {/* Text Section */}
      <div className='text-center sm:text-left'>
        <h3 className='text-[0.6rem] xs:text-xs sm:text-sm font-semibold text-[#white]'>
          Government Registered under UDYAM
        </h3>
        {/* <p className='text-xs text-[#white]'>
          Registration No:{' '}
          <span className='font-medium'>UDYAM-AS-01-0000001</span>
        </p> */}
      </div>
    </div>
  );
}

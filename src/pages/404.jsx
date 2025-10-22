import { Home } from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Kopou Artist Collective | Page Not Found</title>
      </Head>

      <div className='relative min-h-screen flex items-center justify-center p-4'>
        <div className='absolute inset-0 bg-contain sm:bg-contain bgimage opacity-50'></div>
        <div className='bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center z-10'>
          <div className='animate-pulse w-24 h-24 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center'>
            <svg
              className='w-12 h-12 text-[#c23c23]'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z'
              />
            </svg>
          </div>

          <h2 className='text-2xl md:text-5xl lg:text-6xl font-bold text-[#c23c23] mb-2 poppins-text'>
            404
          </h2>
          <h2 className='text-sm md:text-xl lg:text-2xl font-semibold text-gray-800 mb-4 poppins-text'>
            Oops! Lost in space?
          </h2>
          <p className='text-[#c23c23]/50 text-sm md:text-base lg:text-xl mb-8 montserrat-text'>
            The page you're looking for seems to have drifted off into the
            digital universe.
          </p>

          <div className='space-y-4 poppins-text'>
            {/* <button
              onClick={() => router.back()}
              className='w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-4 rounded-lg transition duration-200'
            >
              Go Back
            </button> */}
            <Link
              href='/'
              className='text-sm flex gap-2 md:text-base lg:text-xl w-full items-center justify-center hover:bg-[#c23c23] bg-[#c23c23]/80 text-white font-medium py-3 px-4 rounded-lg transition duration-200'
            >
              <Home /> Return Home
            </Link>
          </div>

          <div className='mt-8 pt-6 border-t border-gray-200'>
            <p className='text-sm md:text-base lg:text-xl text-gray-500 montserrat-text'>
              Need help?{' '}
              <Link
                href='/#contactus'
                className='text-[#c23c23] hover:text-[#c23c23]/50'
              >
                Contact support
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

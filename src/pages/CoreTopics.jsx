import { Guitar } from 'lucide-react';
import React from 'react';

export default function CoreTopics() {
  return (
    <div id='future-goals' className='relative sm:px-8 px-4 z-10 h-full py-10'>
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-[url('https://res.cloudinary.com/dwkajs0ca/image/upload/v1759806176/KopouArtistsCollectionsIcon/gb2xna6izzq6hhgwmo89.png')] sm:bg-cover md:bg-cover lg:bg-cover opacity-40"
        style={{
          backgroundAttachment: 'fixed',
        }}
      ></div>
      <div className='relative flex flex-col items-center justify-center h-full text-center'>
        <h1
          className='text-2xl text-center md:text-5xl lg:text-6xl font-bold text-[#c23c23] mb-4 
[text-shadow:2px_0_0_white,-2px_0_0_white,0_2px_0_white,0_-2px_0_white,1px_1px_white,-1px_-1px_white,-1px_1px_white,1px_-1px_white]
drop-shadow-[0_0_25px_rgba(255,255,255,1)]'
        >
          Core Topics / Areas We Cover
        </h1>
        <ul
          className='sm:px-8 px-4 list-decimal text-sm md:text-xl lg:text-2xl text-left text-black
        [text-shadow:2px_0_0_white,-2px_0_0_white,0_2px_0_white,0_-2px_0_white,1px_1px_white,-1px_-1px_white,-1px_1px_white,1px_-1px_white]'
        >
          <li>
            Art & Creativity Kopou is built around creative expression — visual
            art, music, design, film, and performance. It focuses on encouraging
            artists to explore their imagination freely and create meaningful
            works that reflect culture, emotion, and originality.
          </li>
          <li>
            Collaboration The heart of Kopou lies in teamwork. Artists from
            different fields — like musicians, designers, videographers, and
            writers — come together to collaborate on projects, campaigns, and
            shows. These collaborations help everyone learn, grow, and reach new
            audiences.
          </li>
          <li>
            Promotion & Exposure Kopou helps local and upcoming artists gain
            recognition. Through social media, digital marketing, and live
            events, it creates opportunities for artists to showcase their work
            to a wider audience and connect with brands or industry
            professionals.
          </li>
          <li>
            Cultural Connection Rooted in Assamese culture, Kopou celebrates
            local traditions while embracing modern creativity. It aims to
            preserve and promote the unique artistic identity of Assam and the
            Northeast, blending it beautifully with contemporary styles.
          </li>
          <li>
            Talent Development The collective provides space for learning —
            through workshops, mentorships, and real project experiences. It
            helps young artists understand how the creative industry works,
            build portfolios, and develop professional skills.
          </li>
          <li>
            Creative Campaigns & Projects Kopou also works on brand
            collaborations, digital marketing campaigns, and creative projects
            that connect art with industries like fashion, music, and
            entertainment. It aims to show how creativity can power real-world
            impact.
          </li>
          <li>
            Community Building Beyond art, Kopou is a community — a safe,
            supportive space where artists can share ideas, support each other,
            and grow together. It’s about unity, inspiration, and creating a
            movement that values creativity as a way of life.
          </li>
        </ul>
      </div>
      <Guitar className='lg:h-20 sm:h-16 h-8 absolute sm:top-5 top-3 sm:left-5 left-2 lg:w-20 sm:w-16 w-8 transform hover:scale-130 hover:rotate-25 transition-all duration-500 ease-in-out cursor-pointer text-[#c23c23] [filter:drop-shadow(0_0_2px_white)_drop-shadow(0_0_1px_white)] hover:[filter:drop-shadow(0_0_4px_white)_drop-shadow(0_0_2px_white)]' />
    </div>
  );
}

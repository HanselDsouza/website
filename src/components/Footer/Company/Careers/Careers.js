import React from 'react';
import { FaBullhorn, FaEdit, FaPen, FaUserCog, FaUserGraduate, FaUserTie } from 'react-icons/fa';
import gif from './animation_640_l2cy04nj.gif';

export default function Careers() {
  return (
    <div>
    
        
          <div className='h-full flex flex-col justify-center align-center text-center w-full px-10 lg:px-32 mt-10'>
            <h1 className='"title-font font-bold text-4xl lg:text-6xl text-black px-10 lg:px-20"'>Careers</h1>
            <hr className='border-zinc-50 border-2 w-24 self-center mt-2 text-black border-[#000000] ' />
            <h1 className='text-xl my-10 text-black font-semibold'>Join us in revolutionising language learning</h1>
    
        
      </div>

      <section class="text-gray-600 body-font">
        
        <div class="container lg:py-24 py-16 mx-auto flex flex-wrap">
          <div class="flex flex-wrap  mt-2 mb-auto lg:w-7/12 sm:w-2/3 content-start ">
            <div class="w-full mb-6">
              <h1 class="title-font font-bold text-4xl lg:text-6xl text-black px-10 lg:px-20">Let's say <div class="scroller2">
                <span className='bg-[#13bfab] px-3 text-white text-center '>
                  Salut<br />
                  Hello<br />
                  Hola<br />
                  Ciao
                </span>
              </div>to new opportunities!</h1>
              <div class="leading-relaxed font-bold text-md mt-5 text-black lg:text-lg pl-10 lg:pr-0 lg:pl-20 pr-32">We believe there’s always more to do, to try, and to achieve. Come be a part of <i>“The Language Network”.</i></div>
            </div>
          </div>
          <div class="lg:w-5/12 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <img src={gif} alt="Computer man" />
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container   py-5 lg:py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
              <h1 class="text-2xl lg:text-4xl font-bold title-font mb-2 text-gray-900 px-10 lg:px-0">WE ARE CURRENTLY ON THE HUNT FOR....</h1>
              <hr className='border-yellow-400 border-2 lg:w-72 w-40 self-center mt-2' />

            </div>
            <div class="xl:w-1/5 md:w-1/2 p-4 w-full">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <FaUserGraduate className='w-2/3 h-2/3 text-[#13bfab]' />
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Foreign Language Trainers</h2>
                <p class="leading-relaxed text-base">Location: Mumbai, Pune</p>
                <a href='/Careers/ForeignLangTrainers' class="text-indigo-500 inline-flex items-center my-4">Learn More
                  <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="xl:w-1/5 md:w-1/2 p-4 w-full">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <FaUserTie className='w-2/3 h-2/3 text-[#13bfab]' />

                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Business Development Interns</h2>
                <p class="leading-relaxed text-base">Location: Mumbai, Pune</p>
                <a href='/Careers/BusinessDevIntern' class="text-indigo-500 inline-flex items-center my-4">Learn More
                  <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="xl:w-1/5 md:w-1/2 p-4 w-full">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <FaEdit className='w-2/3 h-2/3 text-[#13bfab]' />

                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Graphic Design Interns</h2>
                <p class="leading-relaxed text-base">Location: Mumbai, Pune</p>
                <a href='/Careers/GraphicDesignInterface' class="text-indigo-500 inline-flex items-center my-4">Learn More
                  <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="xl:w-1/5 md:w-1/2 p-4 w-full">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <FaPen className='w-2/3 h-2/3 text-[#13bfab]' />

                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Content writing Interns</h2>
                <p class="leading-relaxed text-base">Location: Mumbai, Pune</p>
                <a href='/Careers/ContentWritingInterns' class="text-indigo-500 inline-flex items-center my-4">Learn More
                  <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="xl:w-1/5 md:w-1/2 p-4 w-full">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <FaBullhorn className='w-2/3 h-2/3 text-[#13bfab]' />

                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Marketing Interns</h2>
                <p class="leading-relaxed text-base">Location: Mumbai, Pune</p>
                <a href='/Careers/MarketingInterns' class="text-indigo-500 inline-flex items-center my-4">Learn More
                  <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div class="xl:w-1/5 md:w-1/2 p-4 w-full">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <FaUserCog className='w-2/3 h-2/3 text-[#13bfab]' />

                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Operations Interns</h2>
                <p class="leading-relaxed text-base">Location: Mumbai, Pune</p>
                <a href='/Careers/OperationIntern' class="text-indigo-500 inline-flex items-center my-4">Learn More
                  <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
      

      <div className="mt-2  bg-no-repeat bg-fixed bg-cover bg-center h-[19rem] " >
        <div className="h-full ">
          <div className='h-full flex flex-col justify-center align-center text-center w-full px-10 lg:px-32'>
            <h1 className='text-3xl lg:text-6xl leading-snug text-black font-thin'>JOIN OUR TEAM</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

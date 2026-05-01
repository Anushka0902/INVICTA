import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Rate() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className='gradient'>
      <h1 className='text-3xl font-bold uppercase underline underline-offset-8 text-center py-8'>
        Testimonial
      </h1>

      <div className='container mx-auto my-10'>
        <Slider {...settings}>
          <div className='bg-silver-z-1 rounded-lg text-center w-[400px] h-[400px] mx-auto'>
            <h1 className='py-5 border-b-4 text-3xl font-bold uppercase'>User 1</h1>
            <h1 style={{ textAlign: 'left' }} className='py-3 w-full'>
              I just wanted to share a quick note and let you know that you guys do a really good job.
              I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage. I never have any problem at all.
            </h1>
            <hr/>
            <div className='pricesection py-3 flex flex-col gap-4 items-center'>
              <h1 className='text-lg font-semibold'>
                <span className='font-bold text-2xl'>Name</span>
              </h1>
              <Link to="/test">
                <button className='rounded-full gradient text-xl font-bold py-3 px-3'>
                  See
                </button>
              </Link>
            </div>
          </div>

          <div className='gradient rounded-lg shadow-lg text-center w-[400px] h-[400px] mx-auto'>
            <h1 className='py-5 border-b-4 text-3xl font-bold uppercase'>User 2</h1>
            <h1 className='py-3 w-full font-bold'>
              I just wanted to share a quick note and let you know that you guys do a really good job.
              I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage. I never have any problem at all.
            </h1>
            <hr/>
            <div className='pricesection py-3 flex flex-col gap-4 items-center'>
              <h1 className='text-lg font-semibold'>
                <span className='font-bold text-2xl'>Name</span>
              </h1>
              <Link to="/test">
                <button className='rounded-full gradient text-xl font-bold py-3 px-3'>
                  See
                </button>
              </Link>
            </div>
          </div>

          <div className='gradient rounded-lg text-center w-[400px] h-[400px] mx-auto'>
            <h1 className='py-5 border-b-4 text-3xl font-bold uppercase'>User 3</h1>
            <h1 className='py-3 w-full'>
              I just wanted to share a quick note and let you know that you guys do a really good job.
              I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage. I never have any problem at all.
            </h1>
            <hr/>
            <div className='pricesection py-3 flex flex-col gap-4 items-center'>
              <h1 className='text-lg font-semibold'>
                <span className='font-bold text-2xl'>Name</span>
              </h1>
              <Link to="/test">
                <button className='rounded-full gradient text-xl font-bold py-3 px-3'>
                  See
                </button>
              </Link>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}


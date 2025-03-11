import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLwtterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aspernatur ad impedit voluptates dolore molestiae quas eius possimus, maxime laboriosam debitis reprehenderit excepturi officia ipsum accusamus! Eveniet, iusto saepe. Facilis incidunt sed consectetur maiores a facere dignissimos tempore. Consequuntur, beatae del.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, magnam ipsum tempore deleniti tempora est dolore nam quis ea Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, dolorem soluta! Quos, nobis.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, non harum qui nisi quo nostrum et cumque hic itaque reprehenderit numquam esse facere explicabo blanditiis suscipit. Commodi error sequi molestias perferendis eveniet eius iusto quisquam? .</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus est ab velit sequi asperiores iusto dicta.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus est ab velit sequi asperiores iusto dicta.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus est ab velit sequi asperiores iusto dicta.</p>
        </div>
      </div>

      <NewsLetterBox />

    </div>
  )
}

export default About

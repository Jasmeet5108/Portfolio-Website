import Image from 'next/image'
import React from 'react'

const Hero = () => {

    return (
        <>
            <section id="home" className={`max-w-screen-xl mx-auto animate-fade-up mt-[-120px] sm:mt-[60px] flex flex-col md:flex-row md:justify-between md:items-center md:px-4 lg:px-1 md:mt-0 w-full`}>
                <div className="left text-3xl text-left md:text-3xl lg:text-4xl xl:text-5xl px-[10px]">
                    <p>Hi, I am <span className='blue-gradient_text'>Jasmeet Singh</span></p>
                    <p>A Passionate <span className='blue-gradient_text'>Web Developer</span></p>
                    <p className='text-base lg:text-lg xl:text-xl mt-6 w-full md:w-[400px] lg:w-[600px] xl:w-[800px] md:mt-6 lg:mt-8 xl:mt-10'>I enjoy developing creative applications.
                        <br />
                        Explore my projects to see how I bring designs to life through creative blends.
                    </p>
                    <div className='mt-8 sm:mt-4'>
                        <a href="#projects" className='py-2 px-4 hover:cursor-pointer text-base text-white gradient-box'>See Projects <span className='ml-2 mb-2'>&#8595;</span> </a>
                    </div>
                </div>
                <div className="right mt-16">
                    <Image width={320} height={320} className='sm:w-[350px] lg:w-[400px] block mx-auto' src="/Images/Home-Img.png" loading='lazy' alt="No Image" />
                </div>
            </section>
        </>
    )
}

export default Hero
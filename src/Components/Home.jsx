import React from 'react'

const Home = () => {
    return (
        <>
            <div id="home" className='max-w-screen-xl mx-auto animate-fade-up mt-[-120px] sm:mt-[60px] flex flex-col md:flex-row md:justify-between md:items-center md:px-4 lg:px-1 md:mt-7 w-full'>
                <div className="left text-3xl text-left md:text-3xl lg:text-4xl xl:text-5xl px-[10px]">
                    <p>Hi, I am <span className='blue-gradient_text'>Jasmeet Singh</span></p>
                    <p>I am a Passionate <span className='blue-gradient_text'>Web Developer</span></p>
                    <p className='text-base lg:text-lg xl:text-xl mt-6 w-full md:w-[400px] lg:w-[600px] xl:w-[800px] md:mt-6 lg:mt-8 xl:mt-10'>I enjoy developing creative applications.
                        <br />
                        Explore my projects to see how I bring designs to life through creative blends.
                    </p>
                    <div className='mt-8 sm:mt-4'>
                        {/* <a href="#projects" className='rounded-full py-2 px-4 hover:cursor-pointer text-base text-white bg-gradient-to-r transition duration-500 from-[#00c6ff] to-[#0072ff] hover:from-[#0072ff] hover:to-[#00c6ff]'>See Projects <span className='ml-2 mb-2'>&#8595;</span> </a> */}
                        <a href="#projects" className='py-2 px-4 hover:cursor-pointer text-base text-white gradient-box'>See Projects <span className='ml-2 mb-2'>&#8595;</span> </a>
                    </div>
                </div>
                <div className="right mt-16">
                    <img className='w-[320px] sm:w-[350px] lg:w-[400px] block mx-auto' loading='lazy' src="Images/Home-Img.png" alt="No Image" />
                </div>
            </div>
        </>
    )
}

export default Home
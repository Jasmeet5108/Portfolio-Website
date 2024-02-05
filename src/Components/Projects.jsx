import React from 'react'

const Projects = () => {
    return (
        <>
            <h2 className='font-bold text-3xl blue-gradient_text mt-28 px-6 max-w-screen-xl mx-auto'>Projects</h2>
            <section id='projects' className='px-6 mt-8 max-w-screen-xl mx-auto md:flex md:flex-col md:items-center'>

                <div id='Calculator' className='border shadow-xl bmd:w-[800px] bmd:h-[300px] blg:w-[1150px] blg:h-[400px] border-gray-500 flex flex-col md:flex-row-reverse md:justify-between p-4 mt-4 rounded-md'>
                    <img src="Images/calculator-Img.jpg" alt="Calculator Image" className='rounded-md w-full md:w-[350px] bmd:w-[400px] blg:w-[600px]' />
                    <div className='md:flex md:flex-col gap-5 md:space-y-4 md:justify-center'>
                        <p className='mt-4 text-2xl blg:text-3xl text-center md:text-left font-semibold blue-gradient_text'>Simple Calculator</p>
                        <p className='text-lg blg:text-xl blg:w-[450px] md:text-left md:w-[350px] mt-4 text-center'>A simple calculator app made using HTML, CSS, Javascript. Deployed on Netlify</p>
                        <div id="buttons" className='mt-5 flex justify-center md:justify-start space-x-5'>
                            <a href='https://github.com/Jasmeet5108/simple-calculator' target='_blank' className='gradient-box text-white rounded p-2 hover:cursor-pointer'>Code on Github</a>
                            <a href='https://calcnest-online.netlify.app/' target='_blank' className='gradient-box text-white rounded p-2 hover:cursor-pointer'>See live version</a>
                        </div>
                    </div>
                </div>

                <div id="Hosting" className='mt-12 border shadow-xl bmd:w-[800px] bmd:h-[300px] blg:w-[1150px] blg:h-[400px] border-gray-500 flex flex-col md:flex-row-reverse md:justify-between p-4 rounded-md'>
                    <img src="Images/Web-Hosting-Img.jpg" alt="Web Hosting Image" className='rounded-md w-full border md:w-[350px] bmd:w-[400px] blg:w-[600px]' />
                    <div className='md:flex md:flex-col gap-5 md:space-y-4 md:justify-center'>
                        <p className='mt-4 text-2xl blg:text-3xl text-center md:text-left font-semibold blue-gradient_text'>Web Hosting</p>
                        <p className='text-lg blg:text-xl blg:w-[450px] mt-4 text-center md:pr-2 md:w-[350px] md:text-left'>A personal project regarding web Hosting made using HTML, CSS, Javascript. Deployed on Vercel</p>
                        <div id="buttons" className='mt-5 flex justify-center md:justify-start space-x-5'>
                            <a href='https://github.com/Jasmeet5108/Web-Hosting-Project' target='_blank' className='gradient-box text-white rounded p-2 hover:cursor-pointer'>Code on Github</a>
                            <a href='https://web-hosting-project.vercel.app' target='_blank' className='gradient-box text-white rounded p-2 hover:cursor-pointer'>See live version</a>
                        </div>
                    </div>
                </div>

                <div id="Movie Streaming" className='mt-12 border shadow-xl bmd:w-[800px] bmd:h-[300px] blg:w-[1150px] blg:h-[400px] border-gray-500 flex flex-col md:flex-row-reverse md:justify-between p-4 rounded-md'>
                    <img src="Images/Movie-Streaming-Img.jpg" alt="Movie Image" className='rounded-md w-full border md:w-[350px] bmd:w-[400px] blg:w-[600px]' />
                    <div className='md:flex md:flex-col gap-5 md:space-y-4 md:justify-center'>
                        <p className='mt-4 text-2xl blg:text-3xl text-center md:text-left font-semibold blue-gradient_text'>Movie Streaming App</p>
                        <p className='text-lg blg:text-xl blg:w-[450px] mt-4 text-center md:pr-2 md:w-[350px] md:text-left'>A movie streaming app made using Reactjs and TailwindCSS. Deployed on Vercel</p>
                        <div id="buttons" className='mt-5 flex justify-center md:justify-start space-x-5'>
                            <a href='https://github.com/Jasmeet5108/Movie-Streaming-App' target='_blank' className='gradient-box text-white rounded p-2 hover:cursor-pointer'>Code on Github</a>
                            <a href='https://movie-streaming-app-ten.vercel.app' target='_blank' className='gradient-box text-white rounded p-2 hover:cursor-pointer'>See live version</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects
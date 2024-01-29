import React from 'react'

const Skills = () => {
    return (
        <>
            <h2 className='font-bold text-3xl blue-gradient_text mt-28 px-6 max-w-screen-xl mx-auto'>Skills</h2>
            <section id='skills' className='max-w-screen-xl mx-auto'>
                <div className="skills flex flex-col lg:flex-row lg:gap-20 lg:items-baseline justify-center items-center mt-6 px-4">
                    <div className="box1 py-1 flex flex-col justify-center w-[330px] sm:w-[400px] sm:h-[120px] h-20 border-2 border-gray-600 text-center">
                        <h3 className='font-bold text-xl blue-gradient_text sm:text-2xl'>Frontend Development</h3>
                        <p className='sm:mt-2 text-lg sm:text-xl'>HTML, CSS, JS, ReactJs, Tailwind CSS</p>
                    </div>

                    <div className="box2 py-2 flex flex-col justify-center w-[330px] sm:w-[470px] sm:h-[120px] mt-10 border-2 border-gray-600 text-center">
                        <h3 className='font-bold text-xl blue-gradient_text sm:text-2xl'>Backend Development</h3>
                        <p className='sm:mt-2 text-lg sm:text-xl'>NodeJs, ExpressJs, MongoDB, Django, MySQL</p>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Skills
import Image from 'next/image'
import React from 'react'

const Projects = () => {

    const projects = [
        {
            imageURL: "e-comm-image",
            title: "E-Commerce App",
            description: "A Fullstack E-commerce web application created using NextJs, TypeScript, TailwindCSS & MongoDB. Deployed on Vercel",
            githubURL: "E-Commerce-App",
            liveURL: "e-commerce-app-ten-neon"
        },
        {
            imageURL: "Todo-App-Img",
            title: "Todo App",
            description: "A Todo app with CRUD operations, ensuring seamless task management and persistent data storage across reloads created using ReactJs & TailwindCSS. Deployed on Vercel",
            githubURL: "Todo-App",
            liveURL: "todo-list-creator"
        },
        {
            imageURL: "Movie-Streaming-Img",
            title: "Movie Streaming App",
            description: "A movie streaming app fetching and displaying real time movies and TV shows made using Reactjs and TailwindCSS. Deployed on Vercel",
            githubURL: "Movie-Streaming-App",
            liveURL: "movie-streaming-app-ten"
        },
        {
            imageURL: "Web-Hosting-Img",
            title: "Web Hosting",
            description: "A personal project regarding web Hosting made using HTML, CSS, Javascript. Deployed on Vercel",
            githubURL: "Web-Hosting-Project",
            liveURL: "web-hosting-project"
        }
    ]

    return (
        <>
            <h2 className='font-bold text-3xl blue-gradient_text mt-28 px-6 max-w-screen-xl mx-auto'>Projects</h2>
            <section id='projects' className="px-6 mt-5 max-w-screen-xl mx-auto md:flex md:flex-col md:items-center">

                {
                    projects.map((project, index) => (
                        <div key={index} className='mt-6 md:mt-8 border bmd:w-[800px] bmd:h-[300px] blg:w-[1150px] blg:h-[400px] border-gray-500 flex flex-col md:flex-row-reverse md:justify-between p-4 rounded-md'>
                            <Image width={300} height={200} src={`/Images/${project.imageURL}.jpg`} alt="Web Hosting Image" className='rounded-md w-full border border-slate-500 md:w-[350px] bmd:w-[400px] blg:w-[600px]' />
                            <div className='md:flex md:flex-col gap-5 md:space-y-4 md:justify-center'>
                                <p className='mt-4 text-2xl blg:text-3xl text-center md:text-left font-semibold blue-gradient_text'>{project.title}</p>
                                <p className='text-base blg:text-lg blg:w-[450px] mt-4 text-center md:pr-2 md:w-[350px] md:text-left'>{project.description}</p>
                                <div id="buttons" className='mt-5 flex justify-center md:justify-start gap-3'>
                                    <a href={`https://github.com/Jasmeet5108/${project.githubURL}`} target='_blank' className='gradient-box text-white rounded py-2 px-3 hover:cursor-pointer'>Code on Github</a>
                                    <a href={`https://${project.liveURL}.vercel.app`} target='_blank' className='gradient-box text-white rounded py-2 px-3 hover:cursor-pointer'>See live version</a>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </section>
        </>
    )
}

export default Projects
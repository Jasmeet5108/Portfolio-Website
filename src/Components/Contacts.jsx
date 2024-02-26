import axios from 'axios';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';


const Contacts = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:9000/form", formData)
            toast.success("Message sent successfully", {
                duration: 2000,
                position: 'bottom-center',
                className: "mt-8 text-base lg:text-lg lg:w-[400px]",
            })

        } catch (error) {
            console.log(error)
        }
    };

    return (
        <>
            <h2 className='font-bold text-3xl blue-gradient_text mt-28 px-6 max-w-screen-xl mx-auto'>Contact</h2>
            <section id='contact' className='px-6 flex flex-col lg:flex-row lg:justify-between max-w-screen-xl mx-auto'>
                <div className='lg:w-[40%]'>
                    <h2 className="mt-4 text-2xl font-extrabold tracking-wide mb-2">Get in touch</h2>
                    <p className='text-[#7f9bae] text-[15px] lg:text-[18px] lg:w-[80%]'>I'm always happy to hear about exciting opportunities, and build
                        valuable connections. Let's connect!</p>
                    <p className='mt-2 text-[#7f9bae] text-[15px] lg:text-[18px]'>You can send an e-mail or fill out the form.</p>

                    <div className='mt-6 '>
                        <p className="mb-4 text-lg font-bold">Contact me via social</p>
                        <div className="flex items-center gap-2">
                            <a target="_blank" title="Github" href="https://github.com/Jasmeet5108">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 512 512" height="34px" id="Layer_1" version="1.1" viewBox="0 0 512 512" xmlSpace="preserve"><g><path clipRule="evenodd" d="M296.133,354.174c49.885-5.891,102.942-24.029,102.942-110.192   c0-24.49-8.624-44.448-22.67-59.869c2.266-5.89,9.515-28.114-2.734-58.947c0,0-18.139-5.898-60.759,22.669   c-18.139-4.983-38.09-8.163-56.682-8.163c-19.053,0-39.011,3.18-56.697,8.163c-43.082-28.567-61.22-22.669-61.22-22.669   c-12.241,30.833-4.983,53.057-2.718,58.947c-14.061,15.42-22.677,35.379-22.677,59.869c0,86.163,53.057,104.301,102.942,110.192   c-6.344,5.452-12.241,15.873-14.507,30.387c-12.702,5.438-45.808,15.873-65.758-18.592c0,0-11.795-21.31-34.012-22.669   c0,0-22.224-0.453-1.813,13.592c0,0,14.96,6.812,24.943,32.653c0,0,13.6,43.089,76.179,29.48v38.543   c0,5.906-4.53,12.702-15.865,10.89C96.139,438.977,32.2,354.626,32.2,255.77c0-123.807,100.216-224.022,224.03-224.022   c123.347,0,224.023,100.216,223.57,224.022c0,98.856-63.946,182.754-152.828,212.688c-11.342,2.266-15.873-4.53-15.873-10.89   V395.45C311.1,374.577,304.288,360.985,296.133,354.174L296.133,354.174z M512,256.23C512,114.73,397.263,0,256.23,0   C114.73,0,0,114.73,0,256.23C0,397.263,114.73,512,256.23,512C397.263,512,512,397.263,512,256.23L512,256.23z" fill="#8992a3" fillRule="evenodd" /></g></svg>
                            </a>
                            <a target="_blank" title="Linkedin" href="https://www.linkedin.com/in/jasmeetsingh752">
                                <svg xmlns="http://www.w3.org/2000/svg" height="34px" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#8992a3" version="1.1" id="Layer_1" viewBox="-143 145 512 512" xmlSpace="preserve">
                                    <g>
                                        <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M272.8,560.7   c-20.8,20.8-44.9,37.1-71.8,48.4c-27.8,11.8-57.4,17.7-88,17.7c-30.5,0-60.1-6-88-17.7c-26.9-11.4-51.1-27.7-71.8-48.4   c-20.8-20.8-37.1-44.9-48.4-71.8C-107,461.1-113,431.5-113,401s6-60.1,17.7-88c11.4-26.9,27.7-51.1,48.4-71.8   c20.9-20.8,45-37.1,71.9-48.5C52.9,181,82.5,175,113,175s60.1,6,88,17.7c26.9,11.4,51.1,27.7,71.8,48.4   c20.8,20.8,37.1,44.9,48.4,71.8c11.8,27.8,17.7,57.4,17.7,88c0,30.5-6,60.1-17.7,88C309.8,515.8,293.5,540,272.8,560.7z" fill="#8992a3" />
                                        <rect x="-8.5" y="348.4" width="49.9" height="159.7" fill="#8992a3" />
                                        <path d="M15.4,273c-18.4,0-30.5,11.9-30.5,27.7c0,15.5,11.7,27.7,29.8,27.7h0.4c18.8,0,30.5-12.3,30.4-27.7   C45.1,284.9,33.8,273,15.4,273z" fill="#8992a3" />
                                        <path d="M177.7,346.9c-28.6,0-46.5,15.6-49.8,26.6v-25.1H71.8c0.7,13.3,0,159.7,0,159.7h56.1v-86.3c0-4.9-0.2-9.7,1.2-13.1   c3.8-9.6,12.1-19.6,27-19.6c19.5,0,28.3,14.8,28.3,36.4v82.6H241v-88.8C241,369.9,213.2,346.9,177.7,346.9z" fill="#8992a3" />
                                    </g>
                                </svg>
                            </a>
                            <a target="_blank" title="Twitter" href="https://twitter.com/JasmeetSingh752">
                                <svg xmlns="http://www.w3.org/2000/svg" height="34px" className="svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" fill="#8992a3" /></svg>
                            </a>
                        </div>
                    </div>
                    <div className='mt-6 '>
                        <p className="mb-4 text-lg font-bold">Contact me via email</p>
                        <a className='gradient-box text-white rounded p-2 hover:cursor-pointer' href="mailto:jasmeet5108k@gmail.com">Tap to send an email</a>
                    </div>
                </div>
                <div id="form" className='my-16 lg:w-[500px]'>
                    <form>
                        <div id="name" className='flex flex-col'>
                            <label htmlFor="name">Name</label>
                            <input type="text" onChange={handleChange} name='name' className="w-full py-2 px-4 text-base font-normal border border-border rounded-md focus:outline-none focus:border-gray-600" />
                        </div>
                        <div id="email" className='flex flex-col mt-4'>
                            <label htmlFor="email">Email</label>
                            <input type="email" onChange={handleChange} name='email' className="w-full py-2 px-4 text-base font-normal border border-border rounded-md focus:outline-none focus:border-gray-600" />
                        </div>
                        <div id='textarea' className='mt-4'>
                            <label htmlFor="message">Message</label>
                            <textarea name='message' onChange={handleChange} className="w-full py-2 px-4 text-base font-normal border rounded-md focus:outline-none focus:border-gray-600" rows="5">
                            </textarea>
                        </div>
                        <button type="submit" onClick={handleSubmit} className="w-full py-4 px-6 mt-4 text-base font-semibold transition-colors duration-300 gradient-box rounded p-2 hover:cursor-pointer text-white">Send Message</button>
                    </form>
                    <Toaster />
                </div>
            </section>
        </>
    )
}

export default Contacts
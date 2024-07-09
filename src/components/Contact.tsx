"use client"
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {

    const [loading, setLoading] = useState<boolean>(false)

    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const messageRef = useRef<HTMLTextAreaElement>(null)
    const formRef = useRef<HTMLFormElement>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        setLoading(true)
        e.preventDefault()
        const data = {
            name: nameRef.current?.value,
            email: emailRef.current?.value,
            message: messageRef.current?.value
        }

        try {
            const response = await fetch('/api/form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                toast.success("Message delivered", {
                    duration: 2500,
                    position: 'top-center',
                    className: "mt-12 text-white bg-black text-lg w-[250px] lg:text-xl lg:w-[500px]",
                })
            }
            formRef.current?.reset()

        } catch (error) {
            toast.error("Message couldn't be sent. please try again later", {
                duration: 2500,
                position: 'top-center',
                className: "mt-8 lg:mt-10 text-white bg-black text-base lg:text-xl lg:w-[500px]",
            })
        }
        setLoading(false)
    }

    return (
        <>
            <h2 className='font-bold text-3xl blue-gradient_text mt-24 px-6 max-w-screen-xl mx-auto'>Contact</h2>
            <section id='contact' className={`px-6 flex flex-col lg:flex-row lg:justify-between max-w-screen-xl mx-auto`}>
                <div className='lg:w-[40%]'>
                    <h2 className="mt-4 text-2xl font-extrabold tracking-wide mb-2">Get in touch</h2>
                    <p className='text-[15px] lg:text-lg lg:w-[80%]'>I'm always happy to hear about exciting opportunities, and build
                        valuable connections. Let's connect!</p>
                    <p className='mt-2 text-[15px] lg:text-[18px]'>You can send an e-mail or fill out the form.</p>

                    <div className='mt-6 '>
                        <p className="mb-4 text-lg font-bold">Contact me via social</p>
                        <div className="flex items-center gap-2">
                            <a target="_blank" title="Github" href="https://github.com/Jasmeet5108">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" className="githubsvg" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="#8992a3" /></svg>
                            </a>
                            <a target="_blank" title="Linkedin" href="https://www.linkedin.com/in/jasmeetsingh752">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" className="linkedinsvg" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" fill="#8992a3" /></svg>
                            </a>
                            <a target="_blank" title="Twitter" href="https://twitter.com/JasmeetSingh752">
                                <svg xmlns="http://www.w3.org/2000/svg" height="40" className="twittersvg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" fill="#8992a3" /></svg>
                            </a>
                        </div>
                    </div>
                    <div className='mt-6 '>
                        <p className="mb-4 text-lg font-bold">Contact me via email</p>
                        <a className='gradient-box text-white rounded py-2 px-3 hover:cursor-pointer' href="mailto:jasmeet5108k@gmail.com">Tap to send an email</a>
                    </div>
                </div>
                <div id="form" className='my-16 lg:w-[500px]'>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <div id="name" className='flex flex-col'>
                            <label htmlFor="name">Name</label>
                            <input
                                ref={nameRef}
                                type="text"
                                name='name'
                                className="w-full py-2 px-4 text-base font-normal border border-border rounded-md focus:outline-none focus:border-gray-600"
                                required
                            />

                        </div>
                        <div id="email" className='flex flex-col mt-4'>
                            <label htmlFor="email">Email</label>
                            <input
                                ref={emailRef}
                                type="email"
                                name='email'
                                className="w-full py-2 px-4 text-base font-normal border border-border rounded-md focus:outline-none focus:border-gray-600"
                                required
                            />
                        </div>
                        <div id='textarea' className='mt-4'>
                            <label htmlFor="message">Message</label>
                            <textarea
                                ref={messageRef}
                                name='message'
                                className="w-full py-2 px-4 text-base font-normal border rounded-md focus:outline-none focus:border-gray-600" rows={5}
                                required
                            >
                            </textarea>
                        </div>

                        {
                            loading ?
                                <div className='flex justify-center my-5'>
                                    <Image className='w-32' src="/Images/straight-loader-ready.gif" width={10} height={10} alt="Loader" />
                                </div>

                                :
                                <button type="submit" className={`w-full flex justify-center py-4 px-6 mt-4 text-base shadow-lg font-semibold transition ${loading ? "bg-gray-400 cursor-not-allowed" : "cursor-pointer gradient-box"} rounded-[10px] p-2 text-white`}>
                                    <p>Send Message</p>
                                </button>
                        }

                    </form>
                    <Toaster
                        toastOptions={{
                            className: '',
                            style: {
                                color: 'white',
                                backgroundColor: "black"
                            },
                        }}
                    />
                </div>
            </section>
        </>
    )
}

export default Contact

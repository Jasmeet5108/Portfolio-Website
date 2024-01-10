import React from 'react'

const Contacts = () => {
    return (
        <>
            <h2 className='font-bold text-3xl blue-gradient_text mt-28 px-6 max-w-screen-xl mx-auto'>Contact</h2>
            <section id='contact' className='px-6 flex flex-col lg:flex-row lg:justify-between max-w-screen-xl mx-auto'>
                <div className='lg:w-[40%]'>
                    <h2 class="mt-4 text-2xl font-extrabold tracking-wide mb-2">Get in touch</h2>
                    <p className='text-[gray] text-[15px] lg:w-[80%]'>I'm always happy to hear about exciting opportunities, and build
                        valuable connections. Let's connect!</p>
                    <p className='mt-2 text-[gray] text-[15px]'>You can send an e-mail or fill out the form.</p>

                    <div className='mt-6 '>
                        <p class="mb-4 text-lg font-bold">Contact me via social</p>
                        <div className='flex items-center gap-2'>
                            <a target="_blank" title="Github link" href="https://github.com/Jasmeet5108">
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="18" cy="18" r="17.5" stroke="#AEAEAE"></circle>
                                    <path d="M17.9985 6C11.373 6 6 11.5087 6 18.3041C6 23.7393 9.438 28.3503 14.208 29.9787C14.808 30.092 15.027 29.7121 15.027 29.3858C15.027 29.0932 15.0165 28.3196 15.0105 27.2933C11.673 28.0362 10.968 25.6434 10.968 25.6434C10.4235 24.2218 9.636 23.8434 9.636 23.8434C8.5455 23.0806 9.717 23.0959 9.717 23.0959C10.9215 23.1832 11.5545 24.3643 11.5545 24.3643C12.6255 26.2439 14.364 25.7016 15.048 25.3861C15.156 24.591 15.4665 24.0487 15.81 23.7408C13.146 23.4298 10.344 22.3744 10.344 17.6607C10.344 16.3173 10.812 15.2189 11.58 14.358C11.4555 14.047 11.0445 12.7955 11.697 11.1027C11.697 11.1027 12.705 10.7718 14.997 12.3635C15.954 12.0908 16.98 11.9545 18.0015 11.9499C19.02 11.956 20.0475 12.0908 21.006 12.365C23.2965 10.7734 24.303 11.1043 24.303 11.1043C24.957 12.7985 24.546 14.0485 24.423 14.3595C25.1925 15.2204 25.656 16.3188 25.656 17.6623C25.656 22.3882 22.851 23.4283 20.178 23.7331C20.6085 24.1131 20.9925 24.8637 20.9925 26.0111C20.9925 27.6563 20.9775 28.9829 20.9775 29.3858C20.9775 29.7152 21.1935 30.0981 21.8025 29.9771C26.565 28.3472 30 23.7377 30 18.3041C30 11.5087 24.627 6 17.9985 6Z" fill="#7B7B7B"></path>
                                </svg>
                            </a>

                            <a target="_blank" title="Linkedin link" href="https://www.linkedin.com/in/jasmeetsingh752">
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.0203 25.9999H12.8135V12.4319H9.0203V25.9999ZM23.7978 11.962C21.957 11.962 20.3098 12.6834 19.1413 14.2759V12.3873H15.3343V26H19.1413V18.6386C19.1413 17.0829 20.4695 15.5652 22.133 15.5652C23.7966 15.5652 24.2068 17.0829 24.2068 18.6006V25.9987H28V18.2976C27.9999 12.9483 25.64 11.962 23.7978 11.962ZM10.8992 11.076C11.9475 11.076 12.7983 10.163 12.7983 9.03795C12.7983 7.91293 11.9475 7 10.8992 7C9.85084 7 9 7.91308 9 9.0381C9 10.1631 9.85084 11.076 10.8992 11.076Z" fill="#7B7B7B"></path>
                                    <circle cx="18" cy="18" r="17.5" stroke="#AEAEAE"></circle>
                                </svg>
                            </a>

                            <a target="_blank" title="Twitter link" href="https://twitter.com/JasmeetSingh752">
                                <svg width="36" height="36" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 17L11.1935 12.8065M17 7L12.8065 11.1935M12.8065 11.1935L9.77778 7H7L11.1935 12.8065M12.8065 11.1935L17 17H14.2222L11.1935 12.8065" stroke="#7B7B7B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#AEAEAE" stroke-width="0.8" />
                                </svg>

                            </a>
                        </div>
                    </div>
                    <div className='mt-6 '>
                        <p class="mb-4 text-lg font-bold">Contact me via email</p>
                        <a className='bg-gradient-to-r from-[#00c6ff] to-[#0072ff] hover:from-[#0072ff] hover:to-[#00c6ff] transition text-white rounded p-2 hover:cursor-pointer' href="mailto:jasmeet5108k@gmail.com">Tap to send an email</a>
                    </div>
                </div>
                <div id="form" className='my-16 lg:w-[500px]'>
                    <form>
                        <div id="name" className='flex flex-col'>
                            <label htmlFor="name">Name</label>
                            <input type="text" class="w-full py-2 px-4 text-base font-normal border border-border rounded-md focus:outline-none focus:border-gray-600" />
                        </div>
                        <div id="email" className='flex flex-col mt-4'>
                            <label htmlFor="email">Email</label>
                            <input type="email" class="w-full py-2 px-4 text-base font-normal border border-border rounded-md focus:outline-none focus:border-gray-600" />
                        </div>
                        <div id='textarea' className='mt-4'>
                            <label htmlFor="message">Message</label>
                            <textarea class="w-full py-2 px-4 text-base font-normal border rounded-md focus:outline-none focus:border-gray-600" rows="5">
                            </textarea>
                        </div>
                        <button type="submit" class="w-full py-4 px-6 mt-4 text-base font-semibold rounded-lg transition-colors duration-300 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] hover:from-[#0072ff] hover:to-[#00c6ff] text-white">Send Message</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contacts
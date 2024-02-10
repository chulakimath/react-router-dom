import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div className='main max-[985px]:h-[220lvh] max-sm:h-[270lvh] max-[300px]:h-[300lvh]'>
                <div className='top w-full h-screen flex max-sm:block'>
                    {/* left */}
                    <div className="left w-full  flex justify-center items-center max-sm:mt-4 max-sm:mb-4">
                        <img
                            className='w-[400px] h-[300px] object-cover shadow-md shadow-black max-sm:w-[300] max-sm:px-2 max-sm:py-2'
                            src='https://images.pexels.com/photos/2159543/pexels-photo-2159543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                    </div>
                    {/* right */}
                    <div className="right w-full h-full pr-10 max-sm:pr-0">
                        <div className='text-right pt-36 p-11 font-semibold max-sm:pt-4 max-sm:p-1 max-sm:text-center'>
                            <div className='text-4xl py-2'>Lorem ipsum dolor, sit amet</div>
                            <div className='text-3xl py-2'>Lorem, ipsum.</div>
                        </div>
                        <div>
                            <p className='text-center leading-tight tracking-tight max-sm:px-2'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni aperiam ad, quod quo sunt et explicabo mollitia dolorum non neque dolor, libero repellendus alias, quaerat magnam. In totam quidem quas?
                            </p>
                        </div>
                        <div className='text-right mt-4 pr-6 max-sm:text-center max-sm:pr-0'>
                            <Link to={'github'} className='bg-blue-800 rounded-md px-5 py-2 text-white'>Github ....</Link>
                        </div>
                    </div>
                </div>

                {/* {bottom} */}
                <div className='bottom h-screen w-full max-sm:mt-40'>
                    <div className='flex justify-center'>
                        <img
                        className='w-[500px] object-cover max-sm:px-2 shadow-md shadow-black' 
                        src="https://images.pexels.com/photos/381228/pexels-photo-381228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image of car"  />
                    </div>
                    <div className='mt-4 px-32 text-justify max-sm:mt-10 max-sm:px-4'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, vel molestiae quas asperiores, iure expedita sint, quibusdam nesciunt corporis incidunt perferendis deserunt quidem vitae accusamus suscipit. Praesentium incidunt ullam impedit deleniti iure pariatur illum reprehenderit enim suscipit corporis, consequatur ad sint unde ratione ipsa consequuntur sequi laboriosam porro blanditiis. Sed, provident quisquam molestias asperiores repellat maiores vel? Enim unde harum corporis dolorum, quod quae eaque obcaecati error magnam at voluptatem fugiat. Natus doloremque nihil sint! Molestiae eum corrupti voluptatum, reprehenderit debitis consequuntur, autem ipsa doloremque veritatis eaque possimus, nulla quia! Omnis modi mollitia at porro, dolorem accusamus dicta voluptates non.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
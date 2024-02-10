import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                           Lorem ipsum dolor sit.
                            <span className="hidden sm:block text-4xl">Lorem Ipsum</span>
                        </h2>
                        <p className='text-center leading-tight tracking-tighter'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae sapiente facilis, eligendi cumque minima incidunt quam esse exercitationem commodi odio vel quod quaerat repellendus modi!</p>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-blue-700 rounded-lg hover:opacity-75"
                            to="github"
                        >

                            &nbsp;Github . . .
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src="https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image1" />
                </div>
            </aside>

            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src="https://images.pexels.com/photos/10771000/pexels-photo-10771000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Lorem Ipsum Yojo</h1>
        </div>
    )
}

export default Home
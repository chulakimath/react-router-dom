import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'



function Github() {
  const data = useLoaderData();
  return (
    <>
      <div className='flex justify-center py-10 max-sm:py-4'>
        <div className='bg-gray-300 py-10 h-full w-[300px] shadow-md shadow-black p-5 rounded-md '>
          <div className='w-fit h-fit p-1 bg-yellow-200 rounded-full overflow-hidden'>
            <img className='place-self-center rounded-full' src={data && data.avatar_url} alt="Avatar" width={90} />
          </div>
          <div>
            Name:{data && data.name}
          </div>
          <div>
            Github Followers: {data && data.followers}
          </div>
          <div>
            Github Repos: {data && data.public_repos}
          </div>
          <div>
            Github Repos: {data && data.html_url}
            <a href='https://github.com/chulakimath' target='_blank'>🌏</a>
          </div>

        </div>
      </div>
    </>
  )
}

export default Github
export const gitHubInfoLoader = async () => {
  const res = await fetch(`https://api.github.com/users/chulakimath`);
  return res.json();
}
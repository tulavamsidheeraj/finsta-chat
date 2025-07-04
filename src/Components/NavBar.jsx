import React from 'react'

const NavBar = () => {
  return (
    <div className='flex justify-between py-7 px-14 text-xl bg-gradient-to-br from-gray-900 to-black'>
        <div>
            Make Your Meme now
        </div>
        <div className='flex gap-14'>
            <div>
                Instagram
            </div>
            <div>
                Facebook
            </div>
            <div>
                X
            </div>
        </div>
    </div>
  )
}

export default NavBar
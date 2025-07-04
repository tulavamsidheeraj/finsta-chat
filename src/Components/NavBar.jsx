import React from 'react'

const NavBar = () => {
  return (
    <div className='flex justify-center lg:justify-between py-7 px-14 text-xl bg-gradient-to-br from-gray-900 to-black'>
        <div>
            Make Your Meme now
        </div>
        <div className='lg:flex lg:gap-14 invisible lg:visible'>
            <div>
                Instagram
            </div>
            <div>
                Facebook
            </div>
            <div>
                <a href="https://x.com/lazyknight45">X</a>
            </div>
        </div>
    </div>
  )
}

export default NavBar
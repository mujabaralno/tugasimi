import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full border-t'>
      <div className='wrapper flex justify-between items-center'> 
        <Image 
        src="/next.svg"
        width={100}
        height={100}
        alt='logo'
        />
        <div className='flex justify-between items-center'>
            <p className='p-14-medium'>Hilmi Topup 2024. All right reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

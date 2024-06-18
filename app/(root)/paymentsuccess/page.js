import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <section className='w-full h-[80vh] justify-center items-center flex flex-col gap-5'>
        <h1 className='h1-bold'>Payment Success</h1>
        <Link href="/">
            <Button className='w-40 bg-gray-600 hover:bg-gray-800 rounded-full py-6 px-12'>
                Go Home
            </Button>
        </Link>
    </section>
  )
}

export default page

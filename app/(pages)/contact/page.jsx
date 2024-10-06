import React from 'react'
import Image from 'next/image'
import big_red from '@/public/assets/images/big_red.png'
import cornell from '@/public/assets/images/cornell.png'
import flight from '@/public/assets/images/flight.png'
const page = () => {
  return (
    <> 
    <section className="bg-bg-3">
        <div className="page-margins py-5 flex items-center">
        <h1 className="text-black text-5xl" data-aos="fade-in-right">
            Questions? Contact us at: jwz36@cornell.edu
        </h1>
        </div>
    </section>
    <div class="grid grid-cols-3 gap-4 m-10">
        <Image
            src = {flight}
            alt = "big_red"
        />
        <Image
            src = {cornell}
            alt = "big_red"
        />
        <Image
            src = {flight}
            alt = "big_red"
        />
    </div>
    </>
  )
}

export default page
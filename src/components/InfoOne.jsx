import React from 'react'

function InfoOne() {
  return (
    <div className='container mx-auto flex items-center py-16'>
        <div className="w-1/2 ">
           <img 
           src='https://images.unsplash.com/photo-1738676524296-364cf18900a8?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
           alt=''
           className='w-full aspect-[16/9] object-cover rounded-xl'
           />
        </div>
        <div className="w-1/2 px-6">
            <h2 className='text-3xl font-semibold'>Welcome to Out Website</h2>
            <p className='text-gray-600 mt-4'>This website is a practice project for web design using Tailwind CSS. It focuses on creating responsive, modern, and visually appealing layouts. The goal is to improve front-end development skills through hands-on experience. 🚀💻</p>
        </div>
    </div>
  )
}

export default InfoOne
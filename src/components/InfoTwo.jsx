import React from 'react'

function InfoTwo() {
  return (
    <div className='container mx-auto flex items-center py-16'>
        <div className="w-1/2 px-6">
            <h2 className='text-3xl font-semibold'>Welcome to Out Website</h2>
            <p className='text-gray-600 mt-4'>This website is a practice project for web design using Tailwind CSS. It focuses on creating responsive, modern, and visually appealing layouts. The goal is to improve front-end development skills through hands-on experience. 🚀💻</p>
        </div>
        <div className="w-1/2 ">
           <img 
           src='https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3R8ZW58MHx8MHx8fDA%3D' 
           alt=''
           className='w-full aspect-[16/9] object-cover rounded-xl'
           />
        </div>
    </div>
  )
}

export default InfoTwo
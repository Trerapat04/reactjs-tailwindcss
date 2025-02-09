import React from 'react'


function Bar() {
  return (
    <section className='bg-indigo-400 py-7 text-white'>
      <div className="container mx-auto text-center ">
        <img
          src='https://cdn-icons-png.flaticon.com/512/174/174855.png'
          alt=''
          className='w-4 mb-1 inline-block'
        />
        <p className='inline-block mx-2 text-purple-200 mt-4 font-bold'>
          IG : ____________
        </p>

        <img
          src='/img/fb.png'
          alt='Facebook Icon'
          className='w-4 mb-1 inline-block '
        />
        <p className='inline-block mx-2 text-blue-200 mt-4 font-bold'>
          FB : ____________
        </p>

        <img
          src='/img/git1.png'
          alt='Git Icon'
          className='w-8 mb-1 inline-block'
        />
        <p className='inline-block mx-2 text-slate-300 mt-4 font-bold'>
          GIT : ____________
        </p>
      
        <img
          src='https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/accept-call-icon.png'
          alt=''
          className='w-5 mb-1 inline-block'
        />
        <p className='inline-block mx-2 text-green-300 mt-4 font-bold'>
          Tel : ____________
        </p>
      </div>
    </section>
  )


}

export default Bar


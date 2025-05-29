import React from 'react'

function Button(props) {
  return (
    <div className='flex justify-center items-center'>
        <button onClick={props.func} className='px-8 py-4 rounded-md border-[2px] bg-slate-950 border-blue-400 border-solid blueShadow duration-200'>
            <p>{props.text}</p>
        </button>
    </div>
  )
}

export default Button

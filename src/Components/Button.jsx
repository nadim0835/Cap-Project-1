import React from 'react'

const Button = ({children,className}) => {
  return (
    <div>
        <a className={` py-4 px-8 bg-[#FE651B] font-dmSans text-[18px] leading-[30px] text-white rounded-[30px] lg:inline-block ${className} `} href="#">
        {children}</a>
    </div>
    
  )
}

export default Button
import React from 'react'

function Button({
  children,
  type = "button",
  bgColor = "bg-black",
  textColor = "text-white",
  className = '',
  ...props
}) {
  return (
    <button
      type={type}
      className={`px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-200 rounded-sm border border-black ${bgColor} ${textColor} hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button

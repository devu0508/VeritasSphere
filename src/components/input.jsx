import React, { useId } from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {
    const id = useId()
    return (
        <div className='w-full'>
            {label && (
                <label
                    className='block text-sm font-medium text-gray-700 mb-1.5'
                    htmlFor={id}
                >
                    {label}
                </label>
            )}
            <input
                type={type}
                className={`w-full px-3 py-2.5 bg-white text-gray-900 border border-gray-300 rounded-sm text-sm placeholder-gray-400
                  focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors duration-200 ${className}`}
                ref={ref}
                {...props}
                id={id}
            />
        </div>
    )
})

export default Input

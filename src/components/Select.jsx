import React, { useId } from 'react'

function Select({
    options,
    label,
    className = "",
    ...props
}, ref) {
    const id = useId()
    return (
        <div className='w-full'>
            {label && (
                <label
                    htmlFor={id}
                    className='block text-sm font-medium text-gray-700 mb-1.5'
                >
                    {label}
                </label>
            )}
            <select
                {...props}
                id={id}
                ref={ref}
                className={`w-full px-3 py-2.5 bg-white text-gray-900 border border-gray-300 rounded-sm text-sm
                  focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors duration-200 ${className}`}
            >
                {options?.map(option => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default React.forwardRef(Select)

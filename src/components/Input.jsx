import React, { useId } from 'react'

const Input = React.forwardRef(
    function input({
        label,
        type = "text",
        className = "",
        ...props
    }, ref) {
        const id = useId()
        return (
            <div className="w-full mb-4">
                {label && <label className='block mb-1 pl-1' htmlFor={id}>
                    {label}
                </label>}
                <input 
                    type={type} 
                    className={`block w-full text-black px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 ${className}`}
                    ref={ref} 
                    {...props}
                    id={id}
                />
            </div>
        )
    }
)

export default Input

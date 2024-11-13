import React from 'react';
import { useFormContext } from 'react-hook-form';

const InputField = ({ label, type, placeholder, name, ...rest }) => {
    const {
        register,
        formState: { errors }
    } = useFormContext()
    const error = errors[name]?.message;

    return (
        <div className="w-full">
            <label className="block mb-3 text-sm font-medium">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                className="w-full sm:w-[500px] md:w-[600px] lg:w-[650px] px-3 py-2 bg-gray-900 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register(name, {
                    required: `${name} is required`
                })}
                {...rest}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
};

export default InputField;
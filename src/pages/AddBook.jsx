import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Navbar from '../components/Navbar';
import { customAxios } from '../confiq/axios';
import { useNavigate } from 'react-router-dom';

const AddBooks = () => {

    const navigate = useNavigate();
    const { register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const onSubmit = async (data) => {
        const response = await customAxios.post('/api/v1/books', data)
        toast.success(response.data.message)
        navigate('/')
    };

    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center min-h-screen w-full bg-black text-white p-6">
                <form onSubmit={handleSubmit(onSubmit)} className="bg-customGray rounded-lg shadow-lg p-8 w-[1000px]  h-[850px]">
                    <div className="mb-6">
                        <label className="block text-sm font-semibold mb-2 text-gray-400" htmlFor="image">Blog Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            className="w-full text-gray-900 p-2 rounded-md border border-gray-600"
                        />
                    </div>
                    <div className="flex mb-6">
                        <div className="w-2/3 pr-2">
                            <label className="block text-sm font-semibold mb-2 text-gray-400" htmlFor="title">Book Title</label>
                            <input
                                {...register('title', {
                                    required: "Book Title is required",
                                })}
                                type="text"
                                className="w-full text-white p-2 rounded-md  bg-gray-800 "
                            />
                            {errors.title && (
                                <p className='text-red-500'>{`${errors.title.message}`}</p>
                            )}
                        </div>
                        <div className="w-2/3 pl-2">
                            <label className="block text-sm font-semibold mb-2 text-gray-400" htmlFor="authorName">Author Name</label>
                            <input
                                {...register('author', {
                                    required: "Author Name is required",
                                })}
                                type="text"
                                className="w-full text-white p-2 rounded-md  bg-gray-800"
                            />
                            {errors.author && (
                                <p className='text-red-500'>{`${errors.author.message}`}</p>
                            )}
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-semibold mb-2 text-gray-400" htmlFor="description">Description</label>
                        <textarea
                            {...register('description', {
                                required: "Description is required",
                            })}
                            className="w-full text-white p-2 rounded-md  bg-gray-800 h-32"
                        ></textarea>
                        {errors.description && (
                            <p className='text-red-500'>{`${errors.description.message}`}</p>
                        )}
                    </div>
                    <div className="flex justify-end items-end  h-[80px]">
                        <button
                            type="submit"
                            className="bg-yellow-500 text-gray-900 h-10 px-8 rounded-md hover:bg-yellow-400 "
                        >
                            Create Book
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddBooks;
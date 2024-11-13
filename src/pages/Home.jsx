import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { customAxios } from '../confiq/axios'
import toast from 'react-hot-toast'

const Home = () => {

    const [books, setBooks] = useState([])
    const [refresh, setRefresh] = useState(false)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const bookList = async () => {
            setLoading(true)
            await customAxios.get('/api/v1/books')
                .then((result) => {
                    setBooks(result.data.data)
                    setLoading(false)
                }).catch((error) => {
                    console.log(error)
                    setLoading(true)
                })
        };
        bookList()
    }, [refresh])

    const handlDelete = async (id) => {
        const response = await customAxios.delete(`/api/v1/books/${id}`)
        console.log(response)
        toast.success(response.data.message)
        setRefresh(!refresh)
    }

    
    const dummyImage = 'https://images.squarespace-cdn.com/content/v1/563890dce4b0facc12851d8f/1518946695868-3T5CPZ9W9WJURE2AGWPI/ZiSS+Front.jpg';

    return (
        <div>
            <Navbar />
            <div className="p-6 bg-slate-950">
                {loading?(<div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-gray-700 p-14">
    {[...Array(10)].map((_, index) => (
        <div key={index} className="bg-gray-800 rounded-lg shadow-md p-4 animate-pulse">
            <div className="flex justify-center items-center mb-4">
                <div className="w-[200px] h-[300px] bg-gray-700 rounded-lg"></div>
            </div>
            <div className="h-6 bg-gray-700 rounded mb-2 w-3/4"></div>
            <div className="text-white text-sm mb-2 font-semibold">
                <div className="h-4 bg-gray-700 rounded mb-2 w-1/2"></div>
                <div className="h-4 bg-gray-700 rounded mb-2 w-full"></div>
            </div>
            <div className="flex items-center space-x-4">
                <div className="h-8 bg-gray-700 rounded-full w-1/4"></div>
                <div className="h-8 bg-gray-700 rounded-full w-1/4"></div>
            </div>
            <div className='flex justify-end'>
                <div className="h-8 bg-gray-700 rounded-md w-1/4"></div>
            </div>
        </div>
    ))}
</div>):(
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-gray-700 p-14">
                    {books.map((book, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg shadow-md p-4">
                            <div className="flex justify-center items-center mb-4">
                                <img
                                    src={book.image || dummyImage}
                                    alt={book.title}

                                    className="w-[200px] h-[300px] rounded-lg object-cover"
                                />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
                            <div className="text-white text-sm mb-2 font-semibold">
                                <p>{book.author}</p>
                                <p className='text-gray-400 font-normal'>{book.description}</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <button className="border border-gray-600 text-white px-4 py-2 rounded-full hover:bg-gray-700">Like</button>
                                <button className="border border-gray-600 text-white px-4 py-2 rounded-full hover:bg-gray-700">Share</button>
                            </div>
                            <div className='flex justify-end'>
                                <button
                                    className="flex items-center border border-gray-500 text-gray-300 px-4 py-2 rounded-md hover:bg-gray-700 font-extralight"
                                    onClick={() => handlDelete(book._id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                )}
            </div>
            <Footer />
        </div>
    )
}

export default Home

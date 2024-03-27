import React, { useEffect, useState } from 'react';
import bannar from '../../assets/img/bannarBook.png'
import Book from '../Book/Book';
import { Link } from 'react-router-dom';

const Home = () => {
    const [books, setBooks] = useState([])
    // console.log(books);
    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div className='container mx-auto'>
            <div className='h-[500px]  flex justify-items-center items-center bg-[#E9E9E9] rounded-2xl mt-3'>
                <div className='px-[120px] space-y-10'>
                    <h2 className='text-5xl font-bold'>Books to freshen up <br /> your bookshelf</h2>
                    <button className='btn bg-[#23BE0A] text-xl font-bold text-white'> <Link to='/listbooks'>View The List </Link></button>
                </div>
                <div className='px-[120px]'>
                    <img className='h-[390px] w-[310px]' src={bannar} alt="" />
                </div>

            </div>
            <div>
                <h2 className='text-center text-4xl text-black font-bold p-10'>Books</h2>
            </div>
            <div className='grid grid-cols-3 gap-6'>
                {
                    books.map((book, ids) => <Book book={book} key={ids}></Book>)
                }
            </div>
        </div>
    );
};

export default Home;
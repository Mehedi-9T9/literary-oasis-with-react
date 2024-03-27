import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { savedBook } from '../../utility/utility';

const BookDetails = () => {
    const [selects, setSelects] = useState([])
    const { bookId } = useParams()
    const idpars = parseInt(bookId)
    useEffect(() => {
        // fetch('https://mehedi-9t9.github.io/books-data-host/books.json')
        fetch('../books.json')
            .then(res => res.json())
            .then(data => setSelects(data))
    }, [])

    const current = selects.find(item => item.bookId === idpars);
    // const { author, bookName, category, image, publisher, rating, tags } = current || {}
    console.log(current);
    const { bookName, author, review, tags, totalPages, publisher, yearOfPublishing, rating, image, category } = current || {}


    const readHandler = () => {
        savedBook(idpars)
    }

    return (


        <div className="hero min-h-screen container mx-auto mt-10">
            <div className="hero-content flex-col lg:flex-row gap-10">
                <div className='w-[50%] bg-base-200 p-10 rounded-2xl'>
                    <img src={image} className="w-[425px] h-[525px]" />
                </div>
                <div className='w-[50%] space-y-5'>
                    <h1 className="text-[40px] font-bold">{bookName}</h1>
                    <p className='border-b-2 py-4'>By: {author}</p>
                    <p className='border-b-2 py-4'>{category}</p>
                    <p>Review: {review}</p>

                    <div className='flex border-b-2 py-4 gap-6 '>
                        <p className='text-base font-bold '>Tags:</p>
                        <div className="flex justify-between gap-x-6 text-green-600 font-medium">
                            {tags || [].map((tag, idx) => <p key={idx}>#{tag}</p>)}
                        </div>

                    </div>
                    <div className='flex  items-center gap-x-20'>
                        <div className='space-y-3'>
                            <p>Number of Pages:</p>
                            <p>Publisher:</p>
                            <p>Year of Publishing:</p>
                            <p>Rating:</p>
                        </div>
                        <div className='text-black font-bold space-y-3 '>
                            <p>{totalPages}</p>
                            <p>{publisher}</p>
                            <p>{yearOfPublishing}</p>
                            <p>{rating}</p>
                        </div>
                    </div >
                    <button className="btn mr-10 text-black text-lg font-semibold" onClick={readHandler}>Read</button>
                    <button className="btn bg-[#50B1C9] text-white text-lg font-semibold">Wishlist</button>
                </div >
            </div >
        </div >



    );
};

export default BookDetails;
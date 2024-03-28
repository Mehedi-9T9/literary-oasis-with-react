import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getBookId, getWishId, saveWishId, savedBook } from '../../utility/utility';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoReturnDownBack } from "react-icons/io5";

const BookDetails = () => {
    const [selects, setSelects] = useState([])
    const { currentId } = useParams()
    const idpars = parseInt(currentId)

    useEffect(() => {
        fetch('../books.json')
            .then(res => res.json())
            .then(data => setSelects(data))
    }, [])

    const current = selects.find(item => item.bookId === idpars);
    const { bookName, author, review, tags, totalPages, publisher, yearOfPublishing, rating, image, category, bookId } = current || {}

    const notify = (text) => toast(text);

    const readHandler = (id) => {
        const bookData = getBookId()
        const have = bookData.find(cid => cid == id)
        console.log(have);
        if (have) {
            notify('Sorry! Have This Item')
        } else {
            savedBook(id)
            notify('Book List Added')
        }
    }

    const wishHandler = (id) => {
        const bookData = getBookId()
        const wishData = getWishId()
        const haveBook = bookData.find(cid => cid == id)
        const haveWish = wishData.find(cid => cid == id)
        if (haveBook || haveWish) {
            notify("Sorry! Have This Item")
        } else {
            saveWishId(id)
            notify('Wish List Added')
        }
    }

    return (
        <div className="hero min-h-screen container mx-auto mt-10">
            <div className="hero-content flex-col lg:flex-row gap-10">
                <div className='md:w-[50%] bg-base-200 p-10 rounded-2xl'>
                    <img src={image} className="w-[300px] md:w-[425px] h-[350px] md:h-[525px]" />
                </div>
                <div className='md:w-[50%] space-y-3'>
                    <h1 className="text-[40px] font-bold">{bookName}</h1>
                    <p className='border-b-2 py-4'>By: {author}</p>
                    <p className='border-b-2 py-4'>{category}</p>
                    <p>Review: {review}</p>

                    <div className='flex border-b-2 py-4 gap-6 '>
                        <p className='text-base font-bold '>Tags:</p>
                        <div className="flex text-green-600 font-medium gap-x-10">
                            {/* {tags || [].map((tag, idx) => <p key={idx}>#{tag}</p>)} */}
                            {
                                tags ? tags.map((tag, idx) => <p key={idx}>#{tag}</p>) : null
                            }
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
                    <button className="btn mr-10 text-black text-lg font-semibold" onClick={() => readHandler(bookId)}>Read</button>
                    <button className="btn mr-10 bg-[#50B1C9] text-white text-lg font-semibold" onClick={() => wishHandler(bookId)}>Wishlist</button>
                    <Link to='/'><button className="btn bg-red-700 text-white text-2xl font-bold"><IoReturnDownBack /></button></Link>
                </div >
            </div >
            <ToastContainer />
        </div >
    );
};

export default BookDetails;

import { useEffect, useState } from 'react';
import { getBookId, getWishId } from '../../utility/utility';
import ReadBook from '../ReadBook/ReadBook';
import { IoArrowDownCircleSharp } from "react-icons/io5";

const ListBooks = () => {
    const [getBooks, setGetBooks] = useState([])
    const [getWish, setGetWish] = useState([])
    useEffect(() => {
        fetch('../books.json')
            .then(res => res.json())
            .then(data => {
                const storedBookId = getBookId()
                const storedWishId = getWishId()
                // console.log(storedBookId, data);
                if (data.length > 0) {
                    const booksArray = [];
                    for (const id of storedBookId) {
                        const book = data.find(item => item.bookId === id)
                        if (book) {
                            booksArray.push(book)
                        }
                    }
                    setGetBooks(booksArray);

                    const wishArr = []
                    for (const wid of storedWishId) {
                        const wish = data.find(item => item.bookId === wid)
                        if (wish) {
                            wishArr.push(wish)
                        }
                    }
                    setGetWish(wishArr)
                }

            })
    }, [])
    const ratingHandler = () => {
        const shortByRating = [...getBooks].sort((a, b) => a.rating - b.rating)
        setGetBooks(shortByRating)
    }
    const pagesHandler = () => {
        const shortData = [...getBooks].sort((a, b) => a.totalPages - b.totalPages)
        setGetBooks(shortData)

    }
    return (
        <div className='container mx-auto'>
            <div className='text-5xl bg-slate-300 py-10 text-center font-bold m-5 rounded-xl'>
                <h2>Book</h2>
            </div>

            <div className='text-center'>
                <div className="dropdown dropdown-bottom">
                    <div tabIndex={0} role="button" className="btn text-xl bg-green-500 text-white font-bold m-1">Sort By <IoArrowDownCircleSharp /></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-lg font-semibold">
                        <li onClick={ratingHandler}><a>Rating</a></li>
                        <li onClick={pagesHandler}><a>Pages</a></li>
                    </ul>
                </div>

            </div>

            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab text-xl font-semibold" aria-label="Read Books" checked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {
                        getBooks.map((book, idx) => <ReadBook book={book} key={idx}></ReadBook>)
                    }
                </div>
                <input type="radio" name="my_tabs_2" role="tab" className="tab text-xl font-semibold" aria-label="Wish Books" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {
                        getWish.map(wish => <ReadBook book={wish} key={wish.bookId}></ReadBook>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ListBooks;
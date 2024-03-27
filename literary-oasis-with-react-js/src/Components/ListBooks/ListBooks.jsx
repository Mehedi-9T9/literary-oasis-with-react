
import React, { useEffect, useState } from 'react';
import { getBookId, getWishId } from '../../utility/utility';
import ReadBook from '../ReadBook/ReadBook';
// import { useLoaderData } from 'react-router-dom';

const ListBooks = () => {
    // const allBooks = useLoaderData()
    // console.log(allBooks);
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
                        const book = data.filter(item => item.bookId === id)
                        if (book) {
                            booksArray.push(book)
                        }
                    }
                    setGetBooks(booksArray);

                    const wishArr = []
                    for (const wid of storedWishId) {
                        const wish = data.filter(item => item.bookId === wid)
                        if (wish) {
                            wishArr.push(wish)
                        }
                    }
                    setGetWish(wishArr)
                }

            })
    }, [])
    console.log(getWish, getBooks);

    return (
        <div className='container mx-auto'>
            <h2>Books List {getBooks.length}</h2>

            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 1" checked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">

                    {
                        getBooks.map((book, idx) => <ReadBook book={book} key={idx}></ReadBook>)
                    }


                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 2" />
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
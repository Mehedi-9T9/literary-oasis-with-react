
import React, { useEffect, useState } from 'react';
import { getBookId } from '../../utility/utility';
import ReadBook from '../ReadBook/ReadBook';
// import { useLoaderData } from 'react-router-dom';

const ListBooks = () => {
    // const allBooks = useLoaderData()
    // console.log(allBooks);
    const [getBooks, setGetBooks] = useState([])
    useEffect(() => {
        fetch('../books.json')
            .then(res => res.json())
            .then(data => {
                const storedBookId = getBookId()
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
                }

            })
    }, [])

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
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 2</div>

            </div>


        </div>
    );
};

export default ListBooks;
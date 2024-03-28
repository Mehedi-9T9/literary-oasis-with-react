import { useEffect, useState } from "react";
import { getFavItem } from "../../utility/utility";
import Book from "../Book/Book";

const FavoriteBooks = () => {
    const [favs, setFavs] = useState([])
    useEffect(() => {
        fetch('../books.json')
            .then(res => res.json())
            .then(data => {
                const favData = getFavItem()
                if (data.length > 0) {
                    const favArray = [];
                    for (const id of favData) {
                        const book = data.find(item => item.bookId === id)
                        if (book) {
                            favArray.push(book)
                        }
                    }
                    setFavs(favArray);


                }
            })
    }, [])
    console.log(favs);
    return (
        <div className="md:grid grid-cols-3 container mx-auto">
            {
                favs.map((fav, ids) => <Book book={fav} key={ids}></Book>)
            }
        </div>
    );
};

export default FavoriteBooks;
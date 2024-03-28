import { Link } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import PropTypes from "prop-types";


const Book = ({ book }) => {
    const { author, bookId, bookName, category, image, publisher, rating, tags } = book
    return (
        <div className="card  bg-base-100 w-96 shadow-xl border-2 m-4">
            <div className="bg-base-300 p-6 m-10 rounded-2xl">
                <figure className="px-10 pt-10 ">
                    <img src={image} alt="book" className="rounded-xl w-[134px] h-[166px] " />
                </figure>
            </div>
            <div className="card-body ">
                <div className="flex justify-between gap-x-6 text-green-600 font-medium">
                    {tags.map((tag, idx) => <p key={idx}>#{tag}</p>)}
                </div>
                <h2 className="card-title ">{bookName}</h2>
                <h3>By: {author}</h3>
                <div className="flex ">
                    <p>{category}</p>
                    <div className="flex items-center gap-3 ">
                        <p>{rating}</p>
                        <CiStar className="text-2xl" />
                    </div>
                </div>
                <div className="card-actions">
                    <Link to={`/bookdetails/${bookId}`}> <button className="btn bg-[#23BE0A] text-white text-lg font-semibold"> Show Details</button></Link>
                </div>
            </div>
        </div>
    );
};
Book.propTypes = {
    book: PropTypes.object,

};

export default Book;
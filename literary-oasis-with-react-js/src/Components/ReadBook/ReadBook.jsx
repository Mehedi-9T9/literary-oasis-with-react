import { FaLocationDot } from "react-icons/fa6";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineContactPage } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { getFavItem, saveFavItem } from "../../utility/utility";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from "prop-types";



const ReadBook = ({ book }) => {
    const { bookName, image, author, yearOfPublishing, tags, publisher, totalPages, category, rating, bookId } = book
    const notify = (text) => toast(text);

    const favHandler = (id) => {
        const favData = getFavItem()
        const have = favData.find(fid => fid == id)
        console.log(have);
        if (have) {
            notify('Sorry!')
        } else {
            saveFavItem(id)
            notify('Favorite Books Added Successfully')
        }
    }
    return (
        <div className="  md:h-[300px]  mt-4 rounded-xl border-2">
            <div className=" md:flex items-center justify-between ">
                <div className='md:w-[20%] p-10 bg-base-300 m-6 rounded-xl '>
                    <img src={image} className="w-[130px]  md:h-[170px]" />
                </div>
                <div className='md:w-[80%] space-y-3 p-4'>
                    <h1 className="text-2xl font-bold text-black">{bookName}</h1>
                    <p>By: {author}</p>
                    <div className="flex gap-x-6 ">
                        <p className='text-base font-bold '>Tags:</p>
                        <div className="flex  text-green-600 font-medium">
                            {tags.map((tag, idx) => <p key={idx} className="ml-5"> #{tag}</p>)}
                        </div>
                        <div className="flex gap-x-4 items-center">
                            <FaLocationDot />
                            <p>Year of publish: {yearOfPublishing}</p>
                        </div>
                    </div>

                    <div className="flex gap-x-8">
                        <div className="flex gap-x-3 items-center">
                            <IoPeopleOutline />
                            <p>Publisher: {publisher}</p>
                        </div>
                        <div className="flex gap-x-3 items-center">
                            <MdOutlineContactPage />
                            <p>Page: {totalPages}</p>
                        </div>
                    </div>

                    <button className="btn rounded-3xl mr-6 bg-[#D7E5F6] text-[#328EFF]">Category: {category}</button>
                    <button className="btn rounded-3xl mr-6 bg-[#F6EAD8] text-[#FFAC33]">Rating: {rating}</button>
                    <button onClick={() => favHandler(bookId)} className="btn rounded-3xl  bg-[#23BE0A] text-red-700 font-bold"><FaRegHeart /></button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

ReadBook.propTypes = {
    book: PropTypes.object,

};

export default ReadBook;

import { FaLocationDot } from "react-icons/fa6";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineContactPage } from "react-icons/md";

const ReadBook = ({ book }) => {
    console.log(book[0]);
    const { bookName, image, author, yearOfPublishing, tags, publisher, totalPages, category, rating } = book[0] || []
    return (
        <div className="  h-[300px]  mt-4 rounded-xl border-2">
            <div className=" flex items-center justify-between ">
                <div className='w-[20%] p-10 bg-base-300 m-6 rounded-xl '>
                    <img src={image} className="w-[130px] h-[170px]" />
                </div>
                <div className='w-[80%] space-y-3'>
                    <h1 className="text-2xl font-bold text-black">{bookName}</h1>
                    <p>By: {author}</p>
                    <div className="flex gap-x-6 ">
                        <p className='text-base font-bold '>Tags:</p>
                        <div className="flex  text-green-600 font-medium">
                            {tags || [].map((tag, idx) => <li key={idx} className="ml-5">{tag}</li>)}
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
                    <button className="btn rounded-3xl mr-6 bg-[#23BE0A] text-white">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ReadBook;
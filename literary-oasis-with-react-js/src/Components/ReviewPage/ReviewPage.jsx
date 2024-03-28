import { FaRegStar } from "react-icons/fa";
import PropTypes from "prop-types";


const ReviewPage = ({ review }) => {
    const { img, name, rating, comment } = review || {}
    return (
        <div className="chat chat-start my-10 ">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS chat bubble component" src={img} />
                </div>
            </div>
            <div className="chat-bubble">
                <h2 className="text-xl text-green-500 ">{name}</h2>
                <p>{comment}</p>
                <div className='text-amber-500 font-bold flex items-center gap-3'>
                    <p>Rating</p>
                    <FaRegStar />
                    <p>{rating}</p>
                </div>
            </div>

        </div>
    );
};
ReviewPage.propTypes = {
    review: PropTypes.object,

};

export default ReviewPage;
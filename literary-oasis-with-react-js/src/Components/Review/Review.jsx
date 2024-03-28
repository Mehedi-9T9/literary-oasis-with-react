import { useEffect, useState } from 'react';
import ReviewPage from '../ReviewPage/ReviewPage';

const Review = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='md:grid grid-cols-2 gap-5 container mx-auto md:p-10'>
            {
                reviews.map((review, idx) => <ReviewPage review={review} key={idx}></ReviewPage>)
            }
        </div>
    );
};

export default Review;
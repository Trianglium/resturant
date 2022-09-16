import React, { Component } from 'react';
import './Landing.component.css';
import { yelpReviews } from '../shared/reviews';


export const StarRating = ({rating=0}) => {
    let stars = []
    for (let i = 0; i < rating; i++) {
        stars.push(<span className='p-2'><i class="fa fa-star" aria-hidden="true"></i></span>)
    }

    return(
        <div className='text-center'>
            {stars}
        </div>

    );
}

export const ReviewQuote = ({feedback, name, rating}) => {
    if (!feedback) {
        return(
            <article className="col-12 col-sm-6"></article>
        );
    }
    
    else {
        return(
            <article className="col-12 col-sm-6 col-md-3 pb-4">
                <p className="about-h">
                <i class="fa fa-quote-left" aria-hidden="true"></i>&nbsp;<span className='p-2'>{feedback}</span>&nbsp;<i class="fa fa-quote-right" aria-hidden="true"></i>
                </p>
                <p className="about-h muted"><span>&#8211;</span>&nbsp;{name}</p>
          </article>
          )
    }
}


class ReviewSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            yelpReviews: yelpReviews
        };
    }
    render() {
        const review = this.state.yelpReviews.map((yelpReview) => {
            return(
                <ReviewQuote feedback={yelpReview.feedback} name={yelpReview.name} rating={yelpReview.rating}/>
            );
        });
        return(
            <div className='pt-3'>
                <h3 className='reviews-h'>What People Are Saying</h3>
                <section className="about-section text-center row" id="about">
                    {review}
                </section>
            </div>
        );
    }
}
export default ReviewSection;
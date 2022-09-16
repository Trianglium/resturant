import React, { Component } from 'react';
import './Landing.component.css';
import { yelpReviews } from '../shared/reviews';

export const ReviewQuote = ({feedback, name}) => {
    if (!feedback) {
        return(
            <article className="pe-4 col"></article>
        );
    }
    
    else {
        return(
            <article className="pe-4 col">
                <p className="about-h">
                <i class="fa fa-quote-left" aria-hidden="true"></i>&nbsp;
                <span className='p-2'>{feedback}</span>&nbsp;<i class="fa fa-quote-right" aria-hidden="true"></i>
                </p>
                <p className="about-h muted">&#8211;&nbsp;{name}</p>
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
                <ReviewQuote feedback={yelpReview.feedback} name={yelpReview.name}/>
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
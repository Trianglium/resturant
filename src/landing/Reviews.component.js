import React from 'react';
import './Landing.component.css';

export const Review = ({feedback, name}) => {
    if (!feedback) {
        return(
            <article className="pe-4 col"></article>
        );
    }
    
    else {
        return(
            <article className="pe-4 col">
                  <p className="about-h">
                      { feedback }
                  </p>
            </article>
          )
    }
}

export default Review;
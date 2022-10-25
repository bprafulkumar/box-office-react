import React from 'react';

import IMG_PLACEHOLDER from '../../images/not-found.png';
import { Star } from '../styled';

const ShowMainData = (props) => {
  return (
    <div>
      <img src={props.image ? props.image.original : IMG_PLACEHOLDER} alt="show-cover" />
      <div>
        <div>
          <h1>{props.name}</h1>
          <div>
            <Star />
            <span>{props.rating.average || 'N/A'}</span>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: props.summary }} />

        <div>
          Tags:{' '}
          <div>
            {props.tags.map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShowMainData;

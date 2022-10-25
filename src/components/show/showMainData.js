import React from 'react';
import { MainDataWrapper,Headline , TagList } from './showMainData.styled';
import IMG_PLACEHOLDER from '../../images/not-found.png';
import { Star } from '../styled';

const ShowMainData = (props) => {
  return (
    <MainDataWrapper>
      <img src={props.image ? props.image.original : IMG_PLACEHOLDER} alt="show-cover" />
      <div className='text-side '>
        <Headline>
          <h1>{props.name}</h1>
          <div>
            <Star />
            <span>{props.rating.average || 'N/A'}</span>
          </div>
        </Headline>
        <div dangerouslySetInnerHTML={{ __html: props.summary }} />

        <TagList>
          Tags:{' '}
          <div>
            {props.tags.map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </div>
        </TagList>
      </div>
    </MainDataWrapper>
  );
};
export default ShowMainData;

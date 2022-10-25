import React from 'react';
import { Link } from 'react-router-dom';
import { StyledSearchcard } from "../show/showCard.styled";
import { Star } from '../styled';



const ShowCard = (props) => {
  const summaryAsText = props.summary
    ? `${props.summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')}...`
    : 'No description';

  return (
    <StyledSearchcard>
      <div className='img-wrapper'>
        <img src={props.image} alt="show" />
      </div>

      <h1>{props.name}</h1>

      <p>{summaryAsText}</p>

      <div className='btns'>
        <Link to={`/show/${props.id}`}>Read more</Link>
        <button type="button" onClick={props.onStarClick}><Star active={props.isStarred}/></button>
      </div>
    </StyledSearchcard>
  );
};

export default ShowCard;

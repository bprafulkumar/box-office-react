import React from 'react';
import { SearchCard } from '../styled';

const ActorCard = (props) => {
  return (
    <SearchCard>
      <div className='img-wrapper'>
        <img src={props.image} alt="actor" />
      </div>
      <h1>
        {props.name} {props.gender ? `(${props.gender})` : null}
      </h1>
      <p>{props.country ? `Comes from ${props.country}` : 'No country known'}</p>
      {props.birthday ? <p>Born {props.birthday}</p> : null}
      <p className= "deathday">{props.deathday ? `Died ${props.deathday}` : 'Alive'}</p>
    </SearchCard>
  );
};
export default ActorCard;

import React from 'react';

const ActorCard = (props) => {
  return (
    <div>
      <div>
        <img src={props.image} alt="actor" />
      </div>
      <h1>
        {props.name} {props.gender ? `(${props.gender})` : null}
      </h1>
      <p>{props.country ? `Comes from ${props.country}` : 'No country known'}</p>
      {props.birthday ? <p>Born {props.birthday}</p> : null}
      <p>{props.deathday ? `Died ${props.deathday}` : 'Alive'}</p>
    </div>
  );
};
export default ActorCard;

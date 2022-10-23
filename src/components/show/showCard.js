import React from 'react';
import { Link } from 'react-router-dom';

const ShowCard = (props) => {
  const summaryAsText = props.summary
    ? `${props.summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')}...`
    : 'No description';

  return (
    <div>
      <div>
        <img src={props.image} alt="show" />
      </div>

      <h1>{props.name}</h1>

      <p>{summaryAsText}</p>

      <div>
        <Link to={`/show/${props.id}`}>Read more</Link>
        <button type="button">Star me</button>
      </div>
    </div>
  );
};

export default ShowCard;

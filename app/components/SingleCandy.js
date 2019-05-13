import React from 'react';

const SingleCandy = props => {
  console.log('PROPS', props);
  const { id, name, description } = props;

  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default SingleCandy;

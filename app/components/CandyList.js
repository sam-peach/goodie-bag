import React from 'react';
import SingleCandy from './SingleCandy';

const CandyList = props => {
  const { candy } = props;
  return (
    <div>
      {candy.map(singleCandy => {
        return <SingleCandy key={singleCandy.id} {...singleCandy} />;
      })}
    </div>
  );
};

export default CandyList;

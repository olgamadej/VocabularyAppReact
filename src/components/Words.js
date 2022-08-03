import React from "react";

const Words = ({ words, loading }) => {
  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <ul>
      {words.map((word, index) => (
        <li key={index} className="list-item">
          {word.expression}
        </li>
      ))}
    </ul>
  );
};

export default Words;

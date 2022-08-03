import React from "react";

const Words = ({ words, loading }) => {
  if (loading) {
    return;
  }

  return (
    <ul className="list mb-4">
      {words.map((word, index) => (
        <li key={index} className="list-item">
          {word.expression}
        </li>
      ))}
    </ul>
  );
};

export default Words;

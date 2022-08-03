import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [wordsPerPage, setWordsPerPage] = useState(10);

  useEffect(() => {
    const fetchWords = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://olgamadej.github.io/JSONs/french.json"
      );
      setWords(res.data);
      setLoading(false);
    };

    fetchWords();
  }, []);

  console.log(words);

  return (
    <div className="container">
      <h1>The App</h1>
    </div>
  );
};

export default App;

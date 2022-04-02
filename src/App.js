import { useState, useEffect } from 'react';
import randomWords from 'random-words';
const NUMB_OF_WORDS = 200;
const SECONDS = 60;

function App() {
  const [words, setWords] = useState([]);

  useEffect(() => {
    setWords(generateWords);
  }, []);

  function generateWords() {
    return new Array(NUMB_OF_WORDS).fill(null).map(() => randomWords());
  }

  return <div className="App">{JSON.stringify(words)}</div>;
}

export default App;

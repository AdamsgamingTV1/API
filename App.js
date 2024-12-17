import React, { useState, useEffect } from 'react';
import { getRandomQuote } from './quoteAPI'; 

const App = () => {
  const [quote, setQuote] = useState('');
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const savedHistory = localStorage.getItem('quoteHistory');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory)); 
    }
    fetchQuote(); 
  }, []);

  const fetchQuote = async () => {
    const newQuote = await getRandomQuote();
    setQuote(newQuote);
  };

  const saveHistory = () => {
    const newHistory = [...history, { quote }];
    setHistory(newHistory); 
    localStorage.setItem('quoteHistory', JSON.stringify(newHistory)); 
  };

  const removeQuoteFromHistory = (index) => {
    const updatedHistory = history.filter((_, i) => i !== index);
    setHistory(updatedHistory); 
    localStorage.setItem('quoteHistory', JSON.stringify(updatedHistory));
  };

  return (
    <div className="container">
      <h1>Random Citáty</h1>
      <button onClick={fetchQuote}>Vložit citát</button>
      <p>{quote}</p>
      <button onClick={saveHistory}>Uložit citát</button>

      <h2>Citát History</h2>
      <ul>
        {history.length === 0 ? (
          <li>6ádné citáty uložené</li>
        ) : (
          history.map((item, index) => (
            <li key={index}>
              {item.quote}
              <button onClick={() => removeQuoteFromHistory(index)}>Remove</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default App;

import axios from 'axios';

const BASE_URL = 'https://api.quotable.io/random'; 

export const getRandomQuote = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data.content; 
  } catch (error) {
    console.error('Error fetching quote: ', error);
    return 'Something went wrong while fetching a quote.';  
  }
};

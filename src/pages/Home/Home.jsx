import { useState, useEffect } from 'react';
import { fetchTrending } from 'shared/services/fetch-api';

import TrendingList from 'modules/TrendingList/TrendingList';

const Home = () => {
  const [items, setItems] = useState([]);


  useEffect(() => {
    const getTrending = async () => {
      try {
        const { results } = await fetchTrending();
        setItems(results);
      } catch (err) {
        console.log(err.message);
      }
    };
    getTrending();
  }, []);
  return (
    <>
      <h1>Trending today</h1>
      <TrendingList results={items} />
    </>
  );
};

export default Home;
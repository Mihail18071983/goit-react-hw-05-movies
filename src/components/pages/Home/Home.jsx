import { useState, useEffect } from 'react';
import { fetchTrending } from 'components/shared/services/fetch-api';

import TrendingList from 'components/TrendingList/TrendingList';

import LoadMoreBtn from 'components/Button/LoadMoreBtn';

const Home = () => {
  const [items, setItems] = useState([]);

  const [page, setPage] = useState(1);

  useEffect(() => {
    const getTrending = async () => {
      try {
        const { results } = await fetchTrending(page);
        // setItems(prevItems =>
        //   prevItems.length === 0 ? [results] : [...prevItems, ...results]
        // );
        setItems(prevItems => [...prevItems, ...results]);
      } catch (err) {
        console.log(err.message);
      }
    };
    getTrending();
  }, [page]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <h1>Trending today</h1>
      <TrendingList results={items} />
      <LoadMoreBtn onLoadMore={loadMore} text={'Load more'} />
    </>
  );
};

export default Home;

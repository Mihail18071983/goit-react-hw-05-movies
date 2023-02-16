import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchTrending } from 'shared/services/fetch-api';
import { Outlet } from 'react-router-dom';
// import { Notify } from 'notiflix';
import TrendingList from 'components/TrendingList/TrendingList';

import LoadMoreBtn from 'components/Button/LoadMoreBtn';

const Home = () => {
  const [items, setItems] = useState([]);
  const [params, setParams] = useSearchParams();
  // const [page, setPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(0);

  const page = Number(params.get('page'))? Number(params.get('page')):1;
  console.log('params', params)
  console.log('currentPage', page)

  useEffect(() => {
    
    const getTrending = async page => {
      try {
        const { results } = await fetchTrending(
          page
        );

        // if (total_pages > 1) {
        //   setTotalPages(total_pages);
        // }

        // if (total_results.length === 0) {
        //   Notify.failure('No movies found!');
        // }
        // setItems(prevItems =>
        //   prevItems.length === 0 ? [results] : [...prevItems, ...results]
        // );
        setItems(prevItems => [...prevItems, ...results]);
      } catch (err) {
        console.log(err.message);
      }
    };
    getTrending(page);
  }, [page]);

  const loadMore = () => {
    // setPage(prevPage => prevPage + 1);
    setParams({page:Number(page)+1 });
  };

  return (
    <>
      <h1>Trending today</h1>
      <TrendingList results={items} />
      <LoadMoreBtn onLoadMore={loadMore} text={'Load more'} />
      <Outlet />
    </>
  );
};

export default Home;


import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import NotFoundPage from 'pages/NotFound/NotFoundPage';

import { fetchCredits } from 'shared/services/fetch-api';

const MovieCast = () => {
    const [movieCast, setMovieCast] = useState([]);
  const [error, setError] = useState(false);
    const {movieId} = useParams();

    
    useEffect(() => {
        const fetchCast = async () => {
            try {
                const {cast} = await fetchCredits(movieId);
                setMovieCast(cast)
            }

            catch ({response}) {
                setError(true);
                console.log(response.data.message);
                
            }
        }
        fetchCast(movieId)
    }, [movieId])
    
    return (
        <div>
            {error && <NotFoundPage />}
            <h2>Cast</h2>
            {movieCast.length ? (
                <ul>
                    {movieCast.slice(0, 12).map(actor => (
                        <li key={actor.cast_id}>
                            <img
                                src={
                                actor.profile_path
                                    ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                                    : `https://via.placeholder.com/200`
                            }
                                alt={`${actor.name}`} />
                            <div>
                                <p>{actor.name}</p>
                                <p>Character: <br/>
                                    <span>{actor.character}</span></p>

                            </div>
                        </li>
                    ))}
                </ul>
                ) : (
                    <p>No results</p>
                )}

        </div>
    )
}

export default MovieCast
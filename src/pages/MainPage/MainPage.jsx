import { useEffect, useState } from 'react';
import { getPopularMovies } from '../../helpers/requests';
import FirstScreen from '../../layout/FirstScreen/FirstScreen';
import TopPickSlider from '../../components/TopPickSlider';

import styles from './MainPage.module.scss';
import WatchlistSlider from '../../components/WatchlistSlider';



const MainPage = ({ watchlist, setWatchlist, topPickMovies }) => {
	const [popularMovies, setPopularMovies] = useState([]);
	const [popularMoviesSlider2, setPopularMoviesSlider2] = useState([]);


	useEffect(() => {
		getPopularMovies().then(movies => setPopularMovies(movies));
	}, []);
	useEffect(() => {
		if (popularMovies.length > 0) {
			const [firstElement, secondElement, ...rest] = popularMovies;
			setPopularMoviesSlider2([...rest, firstElement, secondElement]);
		}
	}, [popularMovies]);

	return (
		<div className={styles.main}>
			<FirstScreen
				popularMovies={popularMovies}
				popularMoviesSlider2={popularMoviesSlider2}
				setWatchlist={setWatchlist}
			/>
			<TopPickSlider
				movieList={topPickMovies}
				watchlist={watchlist}
				setWatchlist={setWatchlist}
			/>
			<WatchlistSlider watchlist={watchlist} setWatchlist={setWatchlist} />
		</div>
	);
};

export default MainPage;

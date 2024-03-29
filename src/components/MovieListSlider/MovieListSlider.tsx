import React, { useEffect, useRef } from 'react';
import Slider, { Settings } from 'react-slick';
import { Link } from 'react-router-dom';
import { IMovie } from '../FirstScreenMovieSlider/FirstScreenMovieSlider';
import { createAdditionlaId } from '../../helpers/additionalId';
import MovieCard from '../MovieCard/MovieCard';
import { PrevButton, NextButton } from '../SlickButtons/SlickButtons';
import ArrowTopic from '../ArrowTopic';
import styles from './MovieListSlider.module.scss';
interface MovieListSliderProps {
	movieList?: IMovie[] | [];
	topic?: string;
	topicDescr?: string;
	linkTo?: string;
	customSettings?: Settings;
}
const MovieListSlider: React.FC<MovieListSliderProps> = ({
	movieList = [],
	topic,
	topicDescr,
	linkTo,
	customSettings = {}
}) => {
	const sliderRef = useRef<Slider>(null);
	const settings = {
		...customSettings,
		...{
			dots: false,
			speed: 500,
			slidesToShow: 6,
			slidesToScroll: 6,
			swipe: false,
			initialSlide: 0,
			nextArrow: <NextButton top='35%' right='0px' />,
			prevArrow: <PrevButton top='35%' left='0px' />,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 4
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						swipe: true,
						arrows: false
					}
				},
				{
					breakpoint: 520,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						swipe: true,
						arrows: false
					}
				}
			]
		}
	};

	useEffect(() => {

		if (sliderRef.current) {
			sliderRef.current.slickGoTo(0, true);
		}
	}, []);

	return (
		<div className={styles.sliderContainer}>
			<Link to={`/${linkTo}`}>
				<ArrowTopic topic={topic} topicDescr={topicDescr} arrow={true} />
			</Link>
			<Slider {...settings} ref={sliderRef}>
				{movieList.map(movie => {
					return (
						<div key={`${movie.id}-${createAdditionlaId()}`}>
							<MovieCard
								movie={movie}
								key={`${movie.id}-${createAdditionlaId()}`}
							/>
						</div>
					);
				})}
			</Slider>
		</div>
	);
};
export default MovieListSlider;

import { useState } from 'react';
import styles from './WatchlistIcon.module.scss';
import IconSprite from '../IconSprite';
import sprite from '../../assets/svg/icons-sprite.svg';
import scssVars from '../../styles/vars.scss';
import ClipLoader from 'react-spinners/ClipLoader';

const WatchlistIcon = ({
	width,
	height,
	position = 'absolute',
	isInWatchlist = null,
	onClick = null,
	isLoading = null
}) => {
	let plusWidth = width / 1.2;
	const [isHover, setIsHover] = useState(false);

	const handleMouseEnter = () => {
		setIsHover(true);
	};

	const handleMouseLeave = () => {
		setIsHover(false);
	};
	return (
		<div
			style={{ position: position }}
			className={styles.watchlistIcon}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onClick={onClick}
		>
			<div className={styles.watchlistIcon__flagIcon}>
				{!isInWatchlist && !isLoading ? (
					<IconSprite
						sprite={sprite}
						id='watchlist-icon'
						width={width}
						height={height}
						fillColor={
							!isHover
								? scssVars.bgTranspColorMain
								: scssVars.bgTranspColorMainLighten
						}
						y='-17px'
					/>
				) : (
					<IconSprite
						sprite={sprite}
						id='watchlist-icon'
						width={width}
						height={height}
						fillColor={
							!isHover ? scssVars.decorColorMain : scssVars.decorColorMainDarken
						}
						y='-17px'
					/>
				)}
			</div>
			<div className={styles.watchlistIcon__plusIcon}>
				{isLoading ? (
					<div className={styles.loadingContainer}>
						<ClipLoader
							size={25}
							color={'var(--color-primary)'}
							loading={isLoading}
						/>
					</div>
				) : !isInWatchlist ? (
					<IconSprite
						sprite={sprite}
						id='plus-icon'
						width={plusWidth}
						height={plusWidth}
						fillColor={scssVars.colorMain}
					/>
				) : (
					<IconSprite
						sprite={sprite}
						id='done-icon'
						width={plusWidth}
						height={plusWidth}
						fillColor={scssVars.bgColorMain}
					/>
				)}
			</div>
		</div>
	);
};

export default WatchlistIcon;

import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useResize } from '../../hooks/useResize';
import Logo from '../../components/Logo';
import Search from '../../components/Search';
import BurgerButton from '../../components/BurgerButton/BurgerButton';
import WatchListButton from '../../components/WatchListButton/WatchListButton';
import { Button } from '../../components/Button/Button';
import UserButton from '../../components/UserButton/UserButton';
import LangButton from '../../components/LangButton/LangButton';

import styles from './Header.module.scss';
import imdbIcon from '../../assets/svg/imdb-pro-icon.svg';


const Header = () => {
	return (
		<header className={styles.header}>
			<div className={classNames('container', styles.header__container)}>
				<Logo />
				<BurgerButton  />
				<Search  />
				{useResize().width > 1280 && (
					<Button paddingTB={9}>
						<a href='#'>
							<img src={imdbIcon} alt='Imdb pro icon' />
						</a>
					</Button>
				)}

				{useResize().width > 1280 && (
					<Link to='/imdb-clone/watchlist'>
						<WatchListButton />
					</Link>
				)}
				<UserButton />
				<LangButton />
			</div>
		</header>
	);
};
export default Header;

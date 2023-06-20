import { FC } from 'react'

import SkeletonLoader from '@/components/ui/SkeletonLoader'

import MoviesContainer from './MoviesContainer/MoviesContainer'
import Search from './Search/Search'
import SearchList from './Search/SearchList/SearchList'
import { useSearch } from './Search/useSearch'
import styles from './Sidebar.module.scss'

const Sidebar: FC = () => {
	return (
		<div className={styles.sidebar}>
			<Search />
			<MoviesContainer />
		</div>
	)
}

export default Sidebar

import { FC } from 'react'
import { isMobile } from 'react-device-detect'

import SkeletonLoader from '@/components/ui/SkeletonLoader'
import Heading from '@/components/ui/heading/Heading'

import { useAuth } from '@/hooks/useAuth'

import Meta from '@/utils/meta/Meta'

import Error404 from '../../../../pages/404'

import FavoriteItem from './FavoriteItem'
import styles from './Favorites.module.scss'
import { useFavorites } from './useFavorites'

const Favorites: FC = () => {
	const { isLoading, favoriteMovies } = useFavorites()
	const { user } = useAuth()

	if (!user) return <Error404 />
	return (
		<Meta title="Favorites">
			<Heading title="Favorites" />
			<section className={styles.favorites}>
				{isLoading ? (
					<SkeletonLoader
						count={isMobile ? 6 : 3}
						className={styles.skeletonLoader}
						containerClassName={styles.containerLoader}
					/>
				) : (
					favoriteMovies?.map((movie) => (
						<FavoriteItem movie={movie} key={movie._id} />
					))
				)}

				{favoriteMovies
					? favoriteMovies.length < 1 && (
							<h1 className="text-white text-xl sm:ml-6 ml-0">
								You haven't add favorite movies yet
							</h1>
					  )
					: 'Error happened'}
			</section>
		</Meta>
	)
}
export default Favorites

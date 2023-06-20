import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { IMovie } from '@/shared/types/movie.types'

import { getActorUrl } from '@/config/url.config'

import styles from './ActorsList.module.scss'

const ActorsList: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<>
			<div className="ml-4 mb-4">
				<h2 className="text-white text-2xl">Cast & Crew</h2>
			</div>
			<div className={styles.list}>
				{movie.actors.map((actor) => (
					<div>
						<Link
							className="flex flex-col text-white ml-4"
							href={getActorUrl(actor.slug)}
						>
							<Image
								src={actor.photo}
								width={159}
								height={165}
								className="object-cover rounded-[50%] max-w-[159px] max-h-[165px] mb-3"
								alt={actor.name}
							/>
							<p className="text-lg">{actor.name}</p>
						</Link>
					</div>
				))}
			</div>
		</>
	)
}
export default ActorsList

import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image'

import Catalog from '@/components/ui/catalog-movies/Catalog'
import { ICatalog } from '@/components/ui/catalog-movies/catalog.interface'

import { IActor, IMovie } from '@/shared/types/movie.types'

import { ActorService } from '@/services/actor.service'
import { MovieService } from '@/services/movie.service'

import Error404 from '../404'

interface IActorPage {
	movies: IMovie[]
	actor: IActor | undefined
}

const ActorPage: NextPage<IActorPage> = ({ actor, movies }) => {
	return actor ? (
		<>
			<div className="flex sm:mt-[80px] sm:ml-6">
				<Image src={actor.photo} width={105} height={157} alt={actor.name} />
				<div className="ml-5">
					<h1 className="text-white text-xl font-semibold">{actor.name}</h1>
					<p className="text-yellow-700">Actor</p>
				</div>
			</div>
			<p className="text-lg text-white sm:ml-6 mt-10">Films with the actor</p>
			<Catalog movies={movies || []} title={actor.name} />
		</>
	) : (
		<Error404 />
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: actors } = await ActorService.getAll()
		const paths = actors.map((g) => ({
			params: { slug: g.slug },
		}))

		return { paths, fallback: 'blocking' }
	} catch (error) {
		return {
			paths: [],
			fallback: false,
		}
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: actor } = await ActorService.getBySlug(String(params?.slug))

		const { data: movies } = await MovieService.getByActor(actor._id)

		return {
			props: {
				movies,
				actor,
			},
			revalidate: 60,
		}
	} catch (error) {
		return {
			notFound: true,
		}
	}
}

export default ActorPage

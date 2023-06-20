import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import Banner from '@/components/ui/banner/Banner'
import SubHeading from '@/components/ui/heading/SubHeading'

import Meta from '@/utils/meta/Meta'

import { getActorUrl, getGenreUrl } from '@/config/url.config'

import { IMoviePage } from '../../../../pages/movie/[slug]'
import Gallery from '../../ui/gallery/Gallery'

import ActorsList from './ActorsList/ActorsList'
import Content from './Content/Content'
import ContentList from './Content/ContentList/ContentList'
import PhoneContentList from './Content/PhoneContentList/ContentList'
import { useUpdateCountOpened } from './useUpdateCountOpened'

const DynamicPlayer = dynamic(
	() => import('@/components/ui/video-player/VideoPlayer'),
	{
		ssr: false,
	}
)

const DynamicRateMovie = dynamic(
	() => import('@/screens/single-movie/RateMovie/RateMovie'),
	{
		ssr: false,
	}
)

const SingleMovie: FC<IMoviePage> = ({ movie, similarMovies }) => {
	useUpdateCountOpened(movie.slug)
	return (
		<Meta title={movie.title} description={`Watch ${movie.title}`}>
			<Banner
				image={movie.bigPoster}
				Detail={() => <Content movie={movie} />}
			/>
			<PhoneContentList movie={movie} />

			<DynamicPlayer slug={movie.slug} videoSource={movie.videoUrl} />
			<DynamicRateMovie id={movie._id} slug={movie.slug} />

			<ActorsList movie={movie} />

			<div className="mt-12 sm:mt-8">
				<SubHeading title="Similar" />
				<Gallery items={similarMovies} />
			</div>
		</Meta>
	)
}
export default SingleMovie

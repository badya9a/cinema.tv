import { FC } from 'react'

import MaterialIcon from '@/components/ui/MaterialIcon'

import { IMovie } from '@/shared/types/movie.types'

import { getGenreUrl } from '@/config/url.config'

import ContentList from '../ContentList/ContentList'
import { IContentList } from '../content.interface'

const PhoneContentList: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className="hidden sm:block ml-5 mt-3">
			<h1 className="text-white text-2xl truncate">{movie.title}</h1>
			<div>
				<div className="text-white my-1 text-lg font-medium">
					<span>{movie.parameters.year}</span>
					<span className="ml-4">{movie.parameters.country}</span>
				</div>
				<ContentList
					device="mobile"
					name="Genres"
					links={movie.genres.map((g) => ({
						_id: g._id,
						link: getGenreUrl(g.slug),
						title: g.name,
					}))}
				/>
				<div className="text-white mt-2 font-medium text-lg flex items-center">
					<MaterialIcon name="MdOutlineAccessTime" />
					<span className="ml-3">{movie.parameters.duration} minutes</span>
				</div>
			</div>
		</div>
	)
}
export default PhoneContentList

import { FC } from 'react'

const SubHeading: FC<{ title: string }> = ({ title }) => {
	return (
		<h2 className="text-white text-xl mb-5 sm:mb-2 sm:ml-3 font-semibold">
			{title}
		</h2>
	)
}
export default SubHeading

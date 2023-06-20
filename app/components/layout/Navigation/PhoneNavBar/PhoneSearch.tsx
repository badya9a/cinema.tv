import { useState } from 'react'

import MaterialIcon from '@/components/ui/MaterialIcon'

import Search from '../../Sidebar/Search/Search'

import styles from './PhoneNav.module.scss'

const PhoneSearch = () => {
	const [toggleActive, setToggleActive] = useState(false)

	return (
		<div className="flex items-center flex-1 justify-end">
			<div className="">
				{!toggleActive && (
					<button
						onClick={() => setToggleActive(!toggleActive)}
						className="h-full flex items-center m-3 text-black"
					>
						<MaterialIcon name="MdSearch" />
					</button>
				)}
				{toggleActive && (
					<div className={styles.search}>
						<Search />
						<button
							onClick={() => setToggleActive(!toggleActive)}
							className="absolute right-4 top-3 text-white"
						>
							<MaterialIcon name="MdOutlineClose" />
						</button>
					</div>
				)}
			</div>
		</div>
	)
}

export default PhoneSearch

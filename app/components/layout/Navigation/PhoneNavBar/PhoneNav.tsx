import Link from 'next/link'
import { Dispatch, FC, SetStateAction } from 'react'

import BurgerMenu from './BurgerMenu'
import styles from './PhoneNav.module.scss'
import PhoneSearch from './PhoneSearch'

const PhoneNav: FC<{
	setToggleActive: Dispatch<SetStateAction<boolean>>
	toggleActive: boolean
}> = ({ setToggleActive, toggleActive }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className="text-gray-500 text-2xl font-semibold ml-3 left-0 absolute">
					<Link href={'/'}>cinema.tv</Link>
				</div>
				<PhoneSearch />
				<BurgerMenu
					toggleActive={toggleActive}
					setToggleActive={setToggleActive}
				/>
			</div>
		</div>
	)
}
export default PhoneNav

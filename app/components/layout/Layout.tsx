import { FC, useState } from 'react'

import { ILayout } from './Layout.interface'
import styles from './Layout.module.scss'
import BottomNav from './Navigation/BottomNav/BottomNav'
import Navigation from './Navigation/Navigation'
import PhoneNav from './Navigation/PhoneNavBar/PhoneNav'
import Overflow from './Overflow'
import Sidebar from './Sidebar/Sidebar'

const Layout: FC<ILayout> = ({ children }) => {
	const [toggleActive, setToggleActive] = useState(false)
	return (
		<div className={styles.layout}>
			<Navigation />
			<PhoneNav setToggleActive={setToggleActive} toggleActive={toggleActive} />
			<div className={styles.center}>
				{toggleActive ? (
					<Overflow
						toggleActive={toggleActive}
						setToggleActive={setToggleActive}
					/>
				) : (
					<>{children}</>
				)}
			</div>
			<BottomNav />
			<Sidebar />
		</div>
	)
}

export default Layout

import Link from 'next/link'
import { FC, useState } from 'react'

import { useAuth } from '@/hooks/useAuth'

import { ILayout } from './Layout.interface'
import styles from './Layout.module.scss'
import BottomNav from './Navigation/BottomNav/BottomNav'
import { links } from './Navigation/BottomNav/links'
import Footer from './Navigation/Footer/Footer'
import Navigation from './Navigation/Navigation'
import PhoneNav from './Navigation/PhoneNavBar/PhoneNav'
import Sidebar from './Sidebar/Sidebar'

const Layout: FC<ILayout> = ({ children }) => {
	const { user } = useAuth()
	const [toggleActive, setToggleActive] = useState(false)
	return (
		<div className={styles.layout}>
			<Navigation />
			<PhoneNav setToggleActive={setToggleActive} toggleActive={toggleActive} />
			<div className={styles.center}>
				{toggleActive ? (
					<div className={styles.container}>
						<div className={styles.links}>
							{links.map((link) => (
								<Link
									href={link.link}
									onClick={() => setToggleActive(!toggleActive)}
								>
									{link.title}
								</Link>
							))}
							{user && user.isAdmin ? (
								<>
									<Link
										href={'/favorites'}
										onClick={() => setToggleActive(!toggleActive)}
									>
										Favorite
									</Link>
									<Link
										href={'/profile'}
										onClick={() => setToggleActive(!toggleActive)}
									>
										Profile
									</Link>
									<Link
										href={'/manage'}
										onClick={() => setToggleActive(!toggleActive)}
									>
										Admin panel
									</Link>
								</>
							) : (
								<>
									<Link
										href={'/favorites'}
										onClick={() => setToggleActive(!toggleActive)}
									>
										Favorite
									</Link>
									<Link
										href={'/profile'}
										onClick={() => setToggleActive(!toggleActive)}
									>
										Profile
									</Link>
								</>
							)}
						</div>

						<button className={styles.button}>Try for free</button>
					</div>
				) : (
					<>{children}</>
				)}
			</div>
			<Footer />
			<BottomNav />
			<Sidebar />
		</div>
	)
}

export default Layout

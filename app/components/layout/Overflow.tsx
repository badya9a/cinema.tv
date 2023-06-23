import Link from 'next/link'
import { Dispatch, FC, SetStateAction } from 'react'

import { useAuth } from '@/hooks/useAuth'

import styles from './Layout.module.scss'
import { links } from './Navigation/BottomNav/links'

const Overflow: FC<{
	toggleActive: boolean
	setToggleActive: Dispatch<SetStateAction<boolean>>
}> = ({ toggleActive, setToggleActive }) => {
	const { user } = useAuth()
	return (
		<div className={styles.container}>
			<div className={styles.links}>
				{links.map((link, idx) => (
					<Link
						href={link.link}
						key={idx}
						onClick={() => setToggleActive(!toggleActive)}
					>
						{link.title}
					</Link>
				))}
				{user ? (
					user.isAdmin ? (
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
					)
				) : null}
			</div>

			<button className={styles.button}>Try for free</button>
		</div>
	)
}
export default Overflow

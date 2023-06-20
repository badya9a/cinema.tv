import Link from 'next/link'
import { title } from 'process'

import { useAuth } from '@/hooks/useAuth'

import MenuItem from '../MenuContainer/MenuItem'

import styles from './BottomNav.module.scss'
import { links } from './links'

const BottomNav = () => {
	const { user } = useAuth()
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				{links.map((link) => (
					<MenuItem item={link} />
				))}
				{user && (
					<MenuItem
						item={{
							icon: 'MdOutlineFavoriteBorder',
							title: 'Favorite',
							link: '/favorites',
						}}
					/>
				)}
			</div>
		</div>
	)
}
export default BottomNav

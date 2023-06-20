import Link from 'next/link'
import { FC } from 'react'

import { getMovieUrl } from '@/config/url.config'

import styles from './AuthPlaceholder.module.scss'

const AuthButton: FC<{ slug: string }> = ({ slug }) => {
	return (
		<div>
			<Link href={`/auth?redirect=${getMovieUrl(slug)}`} className={styles.btn}>
				Sign in
			</Link>
		</div>
	)
}
export default AuthButton

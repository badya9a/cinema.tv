import { FC } from 'react'

import AuthButton from './AuthButton'
import styles from './AuthPlaceholder.module.scss'

const AuthPlaceholder: FC<{ slug: string }> = ({ slug }) => {
	return (
		<div className={styles.placeholder}>
			<div className="text-gray-500">
				You must be logged in to start watching
				<AuthButton slug={slug} />
			</div>
		</div>
	)
}
export default AuthPlaceholder

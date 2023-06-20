import Link from 'next/link'
import { FC } from 'react'

import AiIcon from '@/components/ui/AiIcon'

import { TypeAiIconName } from '@/shared/types/icons.types'

import styles from './Footer.module.scss'

export interface SocialMediaComponentProps {
	link: string
	icon: TypeAiIconName
}

const SocialMediaLink: FC<SocialMediaComponentProps> = ({ link, icon }) => {
	return (
		<Link href={link} className={styles.social__media_icon} target="_blank">
			<AiIcon name={icon} />
		</Link>
	)
}
export default SocialMediaLink

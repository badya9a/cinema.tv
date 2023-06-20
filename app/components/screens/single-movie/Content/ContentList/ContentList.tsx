import cn from 'classnames'
import Link from 'next/link'
import { FC, Fragment } from 'react'

import { IContentList } from '../content.interface'

import styles from './ContentList.module.scss'

const ContentList: FC<IContentList> = ({ links, name, device }) => {
	return (
		<div className={styles.list}>
			<div className={styles.name}>{name}:</div>
			<div
				className={cn(styles.links, {
					[styles.mobile]: device === 'mobile',
				})}
			>
				{links.map((link, idx) => (
					<Fragment key={idx}>
						<Link
							href={link.link}
							className={cn(styles.links, {
								[styles.mobile]: device === 'mobile',
							})}
						>
							{link.title}
						</Link>
						{idx + 1 !== links.length ? ', ' : ''}
					</Fragment>
				))}
			</div>
		</div>
	)
}
export default ContentList

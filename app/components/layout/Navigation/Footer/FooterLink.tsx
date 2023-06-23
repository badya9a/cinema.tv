import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

import AiIcon from '@/components/ui/AiIcon'

import styles from './Footer.module.scss'

interface FooterLink {
	title: string
	link: string
}

interface FooterLinkProps {
	sectiontitle: string
	links: FooterLink[]
}

const FooterLink: FC<FooterLinkProps> = ({ links, sectiontitle }) => {
	const { reload } = useRouter()
	useEffect(() => {
		setToggleActive(false)
	}, [reload])
	const [toggleActive, setToggleActive] = useState(false)
	return (
		<div className={styles.footer__links_wrapper}>
			<p
				onClick={() => setToggleActive(!toggleActive)}
				className={styles.title}
			>
				{sectiontitle}
				{toggleActive ? (
					<button>
						<AiIcon name="AiOutlineMinus" />
					</button>
				) : (
					<button>
						<AiIcon name="AiOutlinePlus" />
					</button>
				)}
			</p>
			{toggleActive && (
				<div
					className={cn(styles.links, {
						[styles.active]: toggleActive,
					})}
				>
					{links.map((link, idx) => (
						<Link
							href={link.link}
							key={idx}
							className={styles.link}
							onClick={() => setToggleActive(false)}
						>
							{link.title}
						</Link>
					))}
				</div>
			)}
		</div>
	)
}
export default FooterLink

import styles from './Footer.module.scss'
import FooterLink from './FooterLink'
import { linksData, socialMediaLinks } from './FooterLinksData'
import SocialMedia from './SocialMedia'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__links}>
				{linksData.map((item, idx) => (
					<FooterLink
						links={item.links}
						sectiontitle={item.sectionTitle}
						key={idx}
					/>
				))}
			</div>
			<div className={styles.socialMedia}>
				<p className="text-white text-lg font-semibold">Follow us at</p>
				<div className={styles.socialMediaLinks}>
					{socialMediaLinks.map((item, idx) => (
						<SocialMedia icon={item.icon} link={item.link} key={idx} />
					))}
				</div>
			</div>
			<p className="flex justify-center text-gray-600 text-sm pb-3">
				© CINEMA.TV 2023. All rights reserved.{' '}
			</p>
		</footer>
	)
}
export default Footer

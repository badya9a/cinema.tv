import { SocialMediaComponentProps } from './SocialMedia'

export const linksData = [
	{
		sectionTitle: 'Sections',
		links: [
			{ title: 'Home', link: '/' },
			{ title: 'Discovery', link: '/genres' },
			{ title: 'Trending', link: '/trending' },
			{ title: 'Fresh movies', link: '/fresh' },
		],
	},
	{
		sectionTitle: 'About company',
		links: [
			{ title: 'Lorem', link: '/' },
			{ title: 'Lorem', link: '/' },
			{ title: 'Lorem', link: '/' },
			{ title: 'Lorem', link: '/' },
			{ title: 'Lorem', link: '/' },
		],
	},
]

export const socialMediaLinks: SocialMediaComponentProps[] = [
	{
		link: 'https://www.facebook.com/',
		icon: 'AiOutlineFacebook',
	},
	{
		link: 'https://www.youtube.com/',
		icon: 'AiFillYoutube',
	},
	{
		link: 'https://www.instagram.com/',
		icon: 'AiOutlineInstagram',
	},
]

import { IMenuItem } from '../MenuContainer/menu.interface'

export const links: IMenuItem[] = [
	{ icon: 'MdOutlineHome', title: 'Home', link: '/' },
	{ icon: 'MdExplore', link: '/genres', title: 'Discovery' },
	{ icon: 'MdLocalFireDepartment', title: 'Trending', link: '/trending' },
	{ icon: 'MdFiberNew', title: 'New', link: '/fresh' },
]

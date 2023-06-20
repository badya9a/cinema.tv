export interface ILink {
	_id: string
	link: string
	title: string
}

export interface IContentList {
	device: 'mobile' | 'desktop'
	name: string
	links: ILink[]
}

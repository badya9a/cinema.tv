import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import logoImage from '@/assets/images/logo.svg'

const Logo: FC = () => {
	return (
		<Link href="/" className="px-layout my-10 block text-gray-300 text-2xl">
			cinema.tv
		</Link>
	)
}
export default Logo

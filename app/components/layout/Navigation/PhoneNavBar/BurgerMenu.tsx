import { useRouter } from 'next/router'
import { Dispatch, FC, SetStateAction, useState } from 'react'

import MaterialIcon from '@/components/ui/MaterialIcon'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import styles from './BurgerMenu.module.scss'

const BurgerMenu: FC<{
	setToggleActive: Dispatch<SetStateAction<boolean>>
	toggleActive: boolean
}> = ({ toggleActive, setToggleActive }) => {
	const { logout } = useActions()
	const { user } = useAuth()
	const { push } = useRouter()
	return (
		<div className="flex items-center z-0 h-full">
			{toggleActive ? (
				<div className={styles.bar}>
					{user ? (
						<button
							onClick={() => {
								logout()
								setToggleActive(!toggleActive)
							}}
						>
							Logout
						</button>
					) : (
						<button
							onClick={() => {
								push('/auth')
								setToggleActive(!toggleActive)
							}}
						>
							Sign in
						</button>
					)}
					<button
						onClick={() => setToggleActive(!toggleActive)}
						className="flex"
					>
						<MaterialIcon name="MdOutlineClose" />
					</button>
				</div>
			) : (
				<button onClick={() => setToggleActive(!toggleActive)} className="mr-3">
					<MaterialIcon name="MdMenu" />
				</button>
			)}
		</div>
	)
}
export default BurgerMenu

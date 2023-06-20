import { FC } from 'react'
import * as AiIcons from 'react-icons/ai'

import { useRenderClient } from '@/hooks/useRenderClient'

import { TypeAiIconName } from '@/shared/types/icons.types'

const AiIcon: FC<{ name: TypeAiIconName }> = ({ name }) => {
	const { isRenderClient } = useRenderClient()

	const IconComponent = AiIcons[name]

	if (isRenderClient) return <IconComponent /> || <AiIcons.AiOutlineDrag />
	else return null
}
export default AiIcon

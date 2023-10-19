import { InitialsAvatar } from '@twa-dev/mark42'
import {
	MainButton,
	BackButton,
	useInitData,
} from '@vkruglikov/react-telegram-web-app'
import { useReducer } from 'react'

const App = () => {
	const [isBackBtn, toggleBackBtn] = useReducer(state => !state, false)
	const [isMainBtn, toggleMainBtn] = useReducer(state => !state, false)
	console.log({ isBackBtn, isMainBtn })
	const [initData] = useInitData()
	console.log(initData)

	return (
		<div>
			<InitialsAvatar
				entityId={12345}
				entityName={`${initData.user?.first_name} ${initData.user?.last_name}`}
			/>
			<button onClick={toggleBackBtn}>Back Button</button>
			<button onClick={toggleMainBtn}>Main Button</button>
			{isMainBtn && (
				<MainButton
					onClick={toggleMainBtn}
					text={`PUSH ME ${initData.user?.username}`}
				/>
			)}
			{isBackBtn && <BackButton onClick={toggleBackBtn} />}
		</div>
	)
}

export default App

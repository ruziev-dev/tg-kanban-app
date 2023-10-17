import {
	WebAppProvider,
	MainButton,
	BackButton,
	useInitData,
} from '@vkruglikov/react-telegram-web-app'
import { useReducer } from 'react'

const App = () => {
	const [isMainBtn, toggleMainBtn] = useReducer(state => !state, false)
	const [isBackBtn, toggleBackBtn] = useReducer(state => !state, false)
	const [initDataUnsafe, initData] = useInitData()
	console.log({ initDataUnsafe, initData })
	return (
		<WebAppProvider>
			<button onClick={toggleBackBtn}>Back Button</button>
			<button onClick={toggleMainBtn}>Main Button</button>
			{isMainBtn && (
				<MainButton
					onClick={toggleMainBtn}
					text={`PUSH ME ${initDataUnsafe.user}`}
				/>
			)}
			{isBackBtn && <BackButton onClick={toggleBackBtn} />}
		</WebAppProvider>
	)
}

export default App

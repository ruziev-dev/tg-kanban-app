import WebApp from '@twa-dev/sdk'

const App = () => {
	console.log(WebApp)

	const initParams = new URLSearchParams(WebApp.initData)

	const user = initParams.get('user')
	const query_id = initParams.get('query_id')
	console.log({ query_id })

	console.log(JSON.parse(user || ''))

	/* 	console.log([...initParams.values()])
	console.log([...initParams.keys()]) */
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				width: '100vw',
				height: '100vh',
			}}>
			<div style={{ textAlign: 'center' }}>
				<h3>Init data</h3>
				<p>user: {user}</p>
				<button onClick={() => WebApp.sendData('Send some Data')}>
					Push it to send some data
				</button>
			</div>
		</div>
	)
}

export default App

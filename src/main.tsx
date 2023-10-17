import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import WebApp from '@twa-dev/sdk'
import eruda from 'eruda'

import './index.css'
import { WebAppProvider } from '@vkruglikov/react-telegram-web-app'

WebApp.ready()
eruda.init()

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<WebAppProvider>
			<App />
		</WebAppProvider>
	</React.StrictMode>
)

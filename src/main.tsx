import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import WebApp from '@twa-dev/sdk'
import eruda from 'eruda'
import { WebAppProvider } from '@vkruglikov/react-telegram-web-app'
import { AppearanceProvider } from '@twa-dev/mark42'
import './index.css'

WebApp.ready()
eruda.init()

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<WebAppProvider>
			<AppearanceProvider>
				<App />
			</AppearanceProvider>
		</WebAppProvider>
	</React.StrictMode>
)

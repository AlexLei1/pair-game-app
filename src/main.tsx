import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/index.scss'
import Router from './routes/Routes'
import { Provider } from 'react-redux'
import { store } from './store/store'
import Layout from '@/components/Layout/Layout'
import Home from './components/screens/home/Home'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
		<Provider store={store}>
			<Layout>
				<Home/>
			</Layout>
		</Provider>
  </React.StrictMode>,
)

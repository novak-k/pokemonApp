import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { MantineProvider } from '@mantine/core'
import { Provider } from 'react-redux'
import store from './app/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <MantineProvider theme={{
        primaryColor: 'yellow',
        headings: {
          sizes: {
            h1: {
              fontSize: '5em',
            }
          }
        }
      }}>
        <App />
      </MantineProvider>
    </Provider>
  </React.StrictMode>,
)

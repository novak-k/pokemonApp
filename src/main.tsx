import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { MantineProvider } from '@mantine/core'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
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
  </React.StrictMode>,
)

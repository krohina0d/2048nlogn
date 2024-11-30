import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './theme'
import App from './App'
import { GameProvider } from './context/GameContext'
import './index.css'

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GameProvider>
          <App />
        </GameProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)

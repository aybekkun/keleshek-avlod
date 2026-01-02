import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import * as RootProvider from './providers/root-provider.tsx'
import reportWebVitals from './reportWebVitals.ts'
import './styles.css'
import i18n from './i18n'
import { I18nextProvider } from 'react-i18next'
// Render the app
const rootElement = document.getElementById('app')
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <I18nextProvider i18n={i18n}>
        <RootProvider.Provider />
      </I18nextProvider>
    </StrictMode>,
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

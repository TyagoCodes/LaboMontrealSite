import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/serviceWorker.js')
            .then(reg => {
                console.log('✅ Service Worker registered with scope:', reg.scope);
            })
            .catch(err => {
                console.error('❌ Service Worker registration failed:', err);
            });
    });
}

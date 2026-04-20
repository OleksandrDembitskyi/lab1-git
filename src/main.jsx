import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import posthog from 'posthog-js'
import { PostHogProvider } from '@posthog/react'
import * as Sentry from '@sentry/react'

// Ініціалізація PostHog з reverse proxy
posthog.init(
  import.meta.env.VITE_PUBLIC_POSTHOG_KEY,
  {
    api_host: '/ph',  // ← ЗМІНЕНО: тепер через reverse proxy (ваш домен)
    person_profiles: 'identified_only',
  }
)

// Ініціалізація Sentry
Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  tracesSampleRate: 1.0,
  environment: import.meta.env.VITE_APP_ENV,
  sendDefaultPii: true,
  replaysSessionSampleRate: 1.0,
  replaysOnErrorSampleRate: 1.0,
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PostHogProvider client={posthog}>
      <App />
    </PostHogProvider>
  </StrictMode>,
)
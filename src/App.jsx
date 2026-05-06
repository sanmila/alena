import { useEffect, useState } from 'react'
import HomePage from './pages/HomePage'
import { defaultLanguage, siteContent } from './content/siteContent'

function App() {
  const [language, setLanguage] = useState(defaultLanguage)
  const [currentHash, setCurrentHash] = useState(window.location.hash)

  useEffect(() => {
    const handleHashChange = () => setCurrentHash(window.location.hash)
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    const content = siteContent[language]

    document.documentElement.lang = language
    document.title = content.meta.pageTitle

    const setMeta = (selector, value) => {
      const element = document.head.querySelector(selector)

      if (element && value) {
        element.setAttribute('content', value)
      }
    }

    setMeta('meta[name="description"]', content.meta.description)
    setMeta('meta[property="og:title"]', content.meta.ogTitle)
    setMeta('meta[property="og:description"]', content.meta.ogDescription)
  }, [language])

  const view = currentHash === '#/certificates' ? 'certificates' : 'home'

  return <HomePage language={language} onLanguageChange={setLanguage} view={view} />
}

export default App

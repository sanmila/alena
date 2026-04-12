import { useEffect, useState } from 'react'
import HomePage from './pages/HomePage'
import { defaultLanguage, siteContent } from './content/siteContent'
import heroImage from './assets/images/hero.webp'

function App() {
  const [language, setLanguage] = useState(defaultLanguage)

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
    setMeta('meta[property="og:image"]', heroImage)
  }, [language])

  return <HomePage language={language} onLanguageChange={setLanguage} />
}

export default App

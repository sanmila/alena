import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Button from './ui/Button'
import { easing } from '../lib/motion'

function PromoPopup({ content, onClaim, closeLabel }) {
  const [isVisible, setIsVisible] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    // Check if user has already dismissed it in this session
    const isDismissed = sessionStorage.getItem('promoDismissed') === 'true'
    
    if (!isDismissed) {
      // Show popup after 3 seconds
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    sessionStorage.setItem('promoDismissed', 'true')
  }

  const handleClaim = () => {
    setIsVisible(false)
    sessionStorage.setItem('promoDismissed', 'true')
    onClaim()
  }

  const popupMotion = reduceMotion
    ? { initial: false, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0, y: 30, scale: 0.95 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 20, scale: 0.95 },
        transition: { duration: 0.5, ease: easing },
      }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          {...popupMotion}
          className="fixed bottom-4 right-4 z-40 max-w-[calc(100vw-2rem)] sm:bottom-6 sm:right-6 sm:max-w-[24rem]"
        >
          <div className="relative overflow-hidden rounded-[1.75rem] border border-line/80 bg-ivory/95 p-6 shadow-[0_16px_40px_rgba(39,35,31,0.12)] backdrop-blur-md">
            <button
              type="button"
              onClick={handleClose}
              aria-label={closeLabel}
              className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-transparent text-charcoal-soft transition duration-300 hover:bg-white/50 hover:text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-charcoal"
            >
              <span aria-hidden="true" className="text-lg leading-none">
                &times;
              </span>
            </button>
            
            <div className="mb-5 pr-4">
              <h3 className="font-serif text-[1.4rem] leading-[1.1] text-charcoal">
                {content.title}
              </h3>
              <p className="mt-2.5 text-[0.9rem] leading-6 text-charcoal-soft">
                {content.description}
              </p>
            </div>
            
            <Button type="button" onClick={handleClaim} className="w-full">
              {content.button}
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PromoPopup

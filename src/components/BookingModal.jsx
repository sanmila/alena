import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useId, useRef, useState } from 'react'
import Button from './ui/Button'
import { easing } from '../lib/motion'

const initialFormState = {
  name: '',
  phone: '',
  request: '',
  date: '',
  time: '',
  service: '',
}

function BookingModal({ open, onClose, content, closeLabel, initialService = '', mode = 'booking' }) {
  const reduceMotion = useReducedMotion()
  const titleId = useId()
  const descriptionId = useId()
  const panelRef = useRef(null)
  const firstInputRef = useRef(null)
  const lastActiveElementRef = useRef(null)
  const [formData, setFormData] = useState({ ...initialFormState, service: initialService })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (!open) {
      return undefined
    }

    lastActiveElementRef.current = document.activeElement
    document.body.style.overflow = 'hidden'

    const timer = window.setTimeout(() => {
      firstInputRef.current?.focus()
    }, 40)

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key !== 'Tab' || !panelRef.current) {
        return
      }

      const focusable = panelRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      )

      if (!focusable.length) {
        return
      }

      const firstElement = focusable[0]
      const lastElement = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      window.clearTimeout(timer)
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKeyDown)
      lastActiveElementRef.current?.focus?.()
    }
  }, [onClose, open])

  useEffect(() => {
    if (!open) {
      return
    }

    setFormData({ ...initialFormState, service: initialService })
    setSubmitted(false)
    setIsSubmitting(false)
  }, [open, initialService])

  const handleChange = (field) => (event) => {
    setFormData((current) => ({
      ...current,
      [field]: event.target.value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      const token = import.meta.env.VITE_TELEGRAM_BOT_TOKEN
      const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID

      if (token && chatId) {
        const text = `Новая заявка с сайта!
Имя: ${formData.name}
Телефон: ${formData.phone}
Услуга: ${formData.service || 'Не указана'}
Запрос: ${formData.request || 'Нет'}
Дата/Время: ${formData.date || 'Не указано'} ${formData.time || 'Не указано'}`

        await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: chatId, text }),
        })
      } else {
        console.warn('Telegram credentials not configured. Form submitted locally.')
      }
      setSubmitted(true)
    } catch (error) {
      console.error('Error submitting form:', error)
      // Still show success to user or handle error state if needed
      setSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const overlayMotion = reduceMotion
    ? { initial: false, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.28, ease: easing },
      }

  const panelMotion = reduceMotion
    ? { initial: false, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0, y: 18 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 12 },
        transition: { duration: 0.34, ease: easing },
      }

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          {...overlayMotion}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(39,35,31,0.28)] px-4 py-6 backdrop-blur-[6px] sm:px-6"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              onClose()
            }
          }}
        >
          <motion.div
            {...panelMotion}
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
            className="relative max-h-[min(90vh,52rem)] w-full max-w-[42rem] overflow-y-auto rounded-[2rem] border border-line/80 bg-ivory px-5 py-5 shadow-[0_24px_70px_rgba(39,35,31,0.16)] sm:px-7 sm:py-7 lg:px-8 lg:py-8"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label={closeLabel}
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-line/80 text-charcoal-soft transition duration-500 hover:border-charcoal/18 hover:text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-charcoal"
            >
              <span aria-hidden="true" className="text-lg leading-none">
                &times;
              </span>
            </button>

            <div className="max-w-[29rem] pr-10">
              <h2
                id={titleId}
                className="font-serif text-[2rem] leading-[0.98] text-charcoal sm:text-[2.45rem]"
              >
                {content.title}
              </h2>
              <p
                id={descriptionId}
                className="mt-4 max-w-[28rem] text-[0.98rem] leading-7 text-charcoal-soft sm:text-[1.02rem]"
              >
                {content.description}
              </p>
            </div>

            {submitted ? (
              <div className="mt-8 rounded-[1.5rem] bg-white/46 px-5 py-6 sm:px-6 sm:py-7">
                <p className="font-serif text-[1.55rem] leading-[1.08] text-charcoal sm:text-[1.75rem]">
                  {content.success}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5">
                <label className="flex flex-col gap-2">
                  <span className="text-[0.84rem] tracking-[0.02em] text-charcoal">
                    {content.fields.name}
                  </span>
                  <input
                    ref={firstInputRef}
                    type="text"
                    value={formData.name}
                    onChange={handleChange('name')}
                    required
                    className="min-h-12 rounded-[1.15rem] border border-line/80 bg-white/56 px-4 text-[0.98rem] text-charcoal outline-none transition duration-500 placeholder:text-charcoal-soft/65 focus:border-charcoal/24 focus:bg-white/72"
                  />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-[0.84rem] tracking-[0.02em] text-charcoal">
                    {content.fields.phone}
                  </span>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange('phone')}
                    required
                    className="min-h-12 rounded-[1.15rem] border border-line/80 bg-white/56 px-4 text-[0.98rem] text-charcoal outline-none transition duration-500 placeholder:text-charcoal-soft/65 focus:border-charcoal/24 focus:bg-white/72"
                  />
                </label>

                <label className="flex flex-col gap-2 sm:col-span-2">
                  <span className="text-[0.84rem] tracking-[0.02em] text-charcoal">
                    {content.fields.service}
                  </span>
                  <div className="relative">
                    <select
                      value={formData.service}
                      onChange={handleChange('service')}
                      className="min-h-12 w-full appearance-none rounded-[1.15rem] border border-line/80 bg-white/56 px-4 py-0 text-[0.98rem] text-charcoal outline-none transition duration-500 focus:border-charcoal/24 focus:bg-white/72"
                    >
                      {content.serviceOptions?.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-charcoal-soft">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </label>

                <label className="flex flex-col gap-2 sm:col-span-2">
                  <span className="text-[0.84rem] tracking-[0.02em] text-charcoal">
                    {content.fields.request}
                  </span>
                  <textarea
                    value={formData.request}
                    onChange={handleChange('request')}
                    rows={4}
                    className="rounded-[1.15rem] border border-line/80 bg-white/56 px-4 py-3 text-[0.98rem] text-charcoal outline-none transition duration-500 placeholder:text-charcoal-soft/65 focus:border-charcoal/24 focus:bg-white/72"
                  />
                </label>

                {mode === 'booking' && (
                  <>
                    <label className="flex flex-col gap-2">
                      <span className="text-[0.84rem] tracking-[0.02em] text-charcoal">
                        {content.fields.date}
                      </span>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={handleChange('date')}
                        className="min-h-12 rounded-[1.15rem] border border-line/80 bg-white/56 px-4 text-[0.98rem] text-charcoal outline-none transition duration-500 focus:border-charcoal/24 focus:bg-white/72"
                      />
                    </label>

                    <label className="flex flex-col gap-2">
                      <span className="text-[0.84rem] tracking-[0.02em] text-charcoal">
                        {content.fields.time}
                      </span>
                      <input
                        type="time"
                        value={formData.time}
                        onChange={handleChange('time')}
                        className="min-h-12 rounded-[1.15rem] border border-line/80 bg-white/56 px-4 text-[0.98rem] text-charcoal outline-none transition duration-500 focus:border-charcoal/24 focus:bg-white/72"
                      />
                    </label>
                  </>
                )}

                <div className="mt-1 flex items-center justify-between gap-4 sm:col-span-2">
                  <p className="text-[0.82rem] leading-6 text-charcoal-soft">
                    {content.requiredMark}: {content.fields.name}, {content.fields.phone}
                  </p>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Отправка...' : content.submit}
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default BookingModal

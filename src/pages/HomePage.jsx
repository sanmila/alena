import { motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import AboutSection from '../components/AboutSection'
import CertificatesSection from '../components/CertificatesSection'
import BookingModal from '../components/BookingModal'
import Footer from '../components/Footer'
import Button from '../components/ui/Button'
import Container from '../components/ui/Container'
import FinalCtaSection from '../components/FinalCtaSection'
import HelpWithSection from '../components/HelpWithSection'
import HowItWorksSection from '../components/HowItWorksSection'
import ImageFrame from '../components/ui/ImageFrame'
import LanguageToggle from '../components/ui/LanguageToggle'
import PricingSection from '../components/PricingSection'
import PersonalizedApproachSection from '../components/PersonalizedApproachSection'
import PromoPopup from '../components/PromoPopup'
import { siteContent } from '../content/siteContent'
import { getFadeBlurProps } from '../lib/motion'
import { getHeroProps } from '../lib/motion'
import { theme } from '../lib/theme'
import heroImage from '../assets/images/hero.webp'

function HomePage({ language, onLanguageChange, view = 'home' }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('')
  const [bookingMode, setBookingMode] = useState('booking')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const content = siteContent[language]
  const { ui, meta, sections, navigation, contact, booking, promo } = content
  const hero = sections.hero
  const reduceMotion = useReducedMotion()

  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      <header className="sticky top-0 z-50 border-b border-line bg-ivory/80 backdrop-blur-md">
        <Container className="flex min-h-20 items-center justify-between gap-x-6 gap-y-4 py-3 sm:py-4">
          <div className="flex items-center gap-6 xl:gap-10">
            <a href="#" className="whitespace-nowrap font-serif text-[1.8rem] tracking-[0.08em] text-charcoal sm:text-[2rem] hover:text-charcoal-soft transition">
              {meta.siteName}
            </a>
            
            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-5 xl:gap-8">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="whitespace-nowrap text-[0.7rem] font-medium uppercase tracking-[0.14em] text-charcoal-soft transition duration-300 hover:text-charcoal"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <button
              onClick={() => { setSelectedService(language === 'ru' ? 'Бесплатная 15-минутная консультация' : 'Free 15-Minute Consultation'); setBookingMode('purchase'); setIsBookingOpen(true); }}
              className="hidden sm:inline-flex whitespace-nowrap rounded-full bg-charcoal px-5 py-2 text-[0.7rem] font-medium uppercase tracking-[0.15em] text-ivory transition duration-300 hover:bg-charcoal/90"
            >
              {language === 'ru' ? 'Бесплатная 15 мин' : 'Free 15 Min'}
            </button>
            <LanguageToggle
              currentLanguage={language}
              onChange={onLanguageChange}
              label={ui.languageLabel}
              optionLabels={ui.languageOptions}
            />
            {/* Mobile Menu Toggle */}
            <button
              className="xl:hidden p-2 text-charcoal"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </Container>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="xl:hidden absolute top-full left-0 w-full bg-ivory border-b border-line shadow-lg"
          >
            <div className="flex flex-col py-4 px-6 gap-4">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[0.8rem] font-medium uppercase tracking-[0.14em] text-charcoal transition duration-300 hover:text-charcoal-soft"
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => { setIsMobileMenuOpen(false); setSelectedService(language === 'ru' ? 'Бесплатная 15-минутная консультация' : 'Free 15-Minute Consultation'); setBookingMode('purchase'); setIsBookingOpen(true); }}
                className="w-full text-left sm:hidden text-[0.8rem] font-bold uppercase tracking-[0.14em] text-charcoal mt-2"
              >
                {language === 'ru' ? 'Бесплатная 15 мин' : 'Free 15 Min'}
              </button>
            </div>
          </motion.nav>
        )}
      </header>

      <main>
        {view === 'home' ? (
          <>
            <section id="hero" className="overflow-hidden py-17 sm:py-21 lg:py-25 xl:py-29">
          <Container>
            <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.86fr)] lg:gap-16 xl:gap-20">
              <motion.div
                {...getHeroProps(reduceMotion, { duration: 0.95, y: 14 })}
                className="max-w-[35rem] xl:max-w-[38rem]"
              >
                <p className="mb-5 font-sans text-[0.72rem] uppercase tracking-[0.14em] text-charcoal-soft sm:mb-6 sm:text-[0.8rem]">
                  {hero.role}
                </p>

                <div className="space-y-5 sm:space-y-6 lg:space-y-7">
                  <motion.div
                    {...getFadeBlurProps(reduceMotion, { delay: 0.04, duration: 0.82 })}
                    className="space-y-3 sm:space-y-4"
                  >
                    <h1 className="max-w-[10ch] font-serif text-[3rem] leading-[0.92] text-charcoal sm:text-[4rem] lg:text-[4.85rem] xl:text-[5.35rem]">
                      {hero.name}
                    </h1>
                  </motion.div>

                  <motion.p
                    {...getFadeBlurProps(reduceMotion, { delay: 0.1, duration: 0.84 })}
                    className="max-w-[31rem] font-sans text-[1rem] leading-7 text-charcoal-soft sm:text-[1.05rem] sm:leading-8"
                  >
                    {hero.description}
                  </motion.p>
                </div>

                <motion.div
                  {...getFadeBlurProps(reduceMotion, { delay: 0.16, duration: 0.82 })}
                  className="mt-8 flex flex-col items-start gap-3 sm:mt-9"
                >
                  <Button type="button" onClick={() => { setSelectedService(''); setBookingMode('booking'); setIsBookingOpen(true); }} aria-haspopup="dialog">
                    {hero.primaryCta}
                  </Button>
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                    <a
                      href={contact.phone.href}
                      className="text-[0.86rem] leading-6 text-charcoal-soft transition duration-500 hover:text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-charcoal"
                    >
                      {hero.secondaryCta}
                    </a>
                    <a
                      href={contact.vk.href}
                      className="text-[0.86rem] leading-6 text-charcoal-soft transition duration-500 hover:text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-charcoal"
                    >
                      {hero.tertiaryCta}
                    </a>
                  </div>
                  <p className="text-[0.84rem] leading-6 text-charcoal-soft sm:text-[0.88rem]">
                    {ui.bookingNote}
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                {...getHeroProps(reduceMotion, {
                  duration: 1.05,
                  delay: 0.12,
                  animateY: false,
                })}
                className="mx-auto w-full max-w-[25rem] sm:max-w-[27rem] lg:mx-0 lg:ml-auto lg:max-w-[29rem] xl:max-w-[31rem]"
              >
                <ImageFrame
                  src={heroImage}
                  alt={hero.image.alt}
                  objectPosition="center 16%"
                  className="mx-auto w-full max-w-[25rem] sm:max-w-[27rem] lg:mx-0 lg:ml-auto lg:max-w-[29rem] xl:max-w-[31rem]"
                />
              </motion.div>
            </div>
          </Container>
        </section>

        <HelpWithSection section={sections.help} />

        <PersonalizedApproachSection section={sections.approach} />

        <HowItWorksSection section={sections.process} />

        <PricingSection 
          section={sections.pricing} 
          onBookingOpen={(service) => { setSelectedService(service); setBookingMode('purchase'); setIsBookingOpen(true); }} 
        />

        <AboutSection section={sections.about} />

        <FinalCtaSection
          section={sections.cta}
          onBookingOpen={() => { setSelectedService(''); setBookingMode('booking'); setIsBookingOpen(true); }}
          contact={contact}
        />
          </>
        ) : (
          <div className="py-10 min-h-[70vh]">
            <CertificatesSection content={sections.certificates} />
          </div>
        )}
      </main>

      <Footer meta={meta} navigation={navigation} contact={contact} ui={ui} />
      <BookingModal
        open={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        content={booking}
        closeLabel={ui.closeLabel}
        initialService={selectedService}
        mode={bookingMode}
      />
      
      <PromoPopup 
        content={promo} 
        closeLabel={ui.closeLabel}
        onClaim={() => {
          setSelectedService(promo.title);
          setBookingMode('purchase');
          setIsBookingOpen(true);
        }}
      />
    </div>
  )
}

export default HomePage

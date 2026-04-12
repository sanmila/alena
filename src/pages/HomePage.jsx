import { motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import AboutSection from '../components/AboutSection'
import BookingModal from '../components/BookingModal'
import Footer from '../components/Footer'
import Button from '../components/ui/Button'
import Container from '../components/ui/Container'
import FinalCtaSection from '../components/FinalCtaSection'
import HelpWithSection from '../components/HelpWithSection'
import HowItWorksSection from '../components/HowItWorksSection'
import ImageFrame from '../components/ui/ImageFrame'
import LanguageToggle from '../components/ui/LanguageToggle'
import PersonalizedApproachSection from '../components/PersonalizedApproachSection'
import { siteContent } from '../content/siteContent'
import { getFadeBlurProps } from '../lib/motion'
import { getHeroProps } from '../lib/motion'
import { theme } from '../lib/theme'
import heroImage from '../assets/images/hero.webp'

function HomePage({ language, onLanguageChange }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const content = siteContent[language]
  const { ui, meta, sections, navigation, contact, booking } = content
  const hero = sections.hero
  const reduceMotion = useReducedMotion()

  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      <header className="sticky top-0 z-10 border-b border-line bg-ivory/80 backdrop-blur-md">
        <Container className="flex min-h-20 flex-wrap items-center justify-between gap-x-6 gap-y-4 py-3 sm:py-4">
          <div className="flex min-w-0 flex-col">
            <span className="font-serif text-[2rem] tracking-[0.08em] text-charcoal sm:text-[2.1rem]">
              {meta.siteName}
            </span>
            <span className="text-[0.82rem] uppercase tracking-[0.16em] text-charcoal-soft">
              {meta.siteTitle}
            </span>
          </div>

          <LanguageToggle
            currentLanguage={language}
            onChange={onLanguageChange}
            label={ui.languageLabel}
            optionLabels={ui.languageOptions}
          />
        </Container>
      </header>

      <main>
        <section id="hero" className="overflow-hidden py-17 sm:py-21 lg:py-25 xl:py-29">
          <Container>
            <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.86fr)] lg:gap-16 xl:gap-20">
              <motion.div
                {...getHeroProps(reduceMotion, { duration: 0.95, y: 14 })}
                className="max-w-[35rem] xl:max-w-[38rem]"
              >
                <p className="mb-5 font-sans text-[0.8rem] uppercase tracking-[0.24em] text-charcoal-soft sm:mb-6">
                  {hero.eyebrow}
                </p>

                <div className="space-y-5 sm:space-y-6 lg:space-y-7">
                  <motion.div
                    {...getFadeBlurProps(reduceMotion, { delay: 0.04, duration: 0.82 })}
                    className="space-y-3 sm:space-y-4"
                  >
                    <h1 className="max-w-[10ch] font-serif text-[3rem] leading-[0.92] text-charcoal sm:text-[4rem] lg:text-[4.85rem] xl:text-[5.35rem]">
                      {hero.name}
                    </h1>
                    <p className="max-w-[28rem] text-[0.72rem] font-medium uppercase tracking-[0.14em] text-charcoal-soft sm:text-[0.8rem]">
                      {hero.role}
                    </p>
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
                  <Button type="button" onClick={() => setIsBookingOpen(true)} aria-haspopup="dialog">
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

        <AboutSection section={sections.about} />

        <FinalCtaSection
          section={sections.cta}
          onBookingOpen={() => setIsBookingOpen(true)}
          contact={contact}
        />
      </main>

      <Footer meta={meta} navigation={navigation} contact={contact} ui={ui} />
      <BookingModal
        open={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        content={booking}
        closeLabel={ui.closeLabel}
      />
    </div>
  )
}

export default HomePage

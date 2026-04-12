import { motion, useReducedMotion } from 'framer-motion'
import Button from './ui/Button'
import Container from './ui/Container'
import ImageFrame from './ui/ImageFrame'
import ctaImage from '../assets/images/portrait-close.webp'
import { getFadeBlurProps } from '../lib/motion'
import { getRevealProps } from '../lib/motion'
import { theme } from '../lib/theme'

function FinalCtaSection({ section, onBookingOpen, contact }) {
  const reduceMotion = useReducedMotion()

  return (
    <section id="final-cta" className={`${theme.spacing.section} border-t border-line`}>
      <Container>
        <motion.div
          {...getRevealProps(reduceMotion, {
            duration: 0.78,
            animateY: false,
            amount: 0.16,
          })}
          className="relative overflow-hidden rounded-[2.25rem] border border-[#e8dfd2] bg-[#f7f1e9] px-6 py-8 shadow-[0_22px_70px_rgba(39,35,31,0.06)] sm:px-8 sm:py-10 lg:px-12 lg:py-12 xl:px-14 xl:py-14"
        >
          <div className="pointer-events-none absolute inset-0 rounded-[2.25rem] ring-1 ring-white/45" />

          <div
            id="booking"
            className="relative grid items-center gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(24rem,30rem)] lg:gap-16 xl:gap-20"
          >
            <div className="max-w-[28rem] lg:pl-1">
              <p className="mb-5 font-sans text-[0.74rem] uppercase tracking-[0.24em] text-charcoal-soft sm:mb-6">
                {section.eyebrow}
              </p>

              <motion.h2
                {...getFadeBlurProps(reduceMotion, { delay: 0.03, duration: 0.78 })}
                className="max-w-[13ch] font-serif text-[2.5rem] leading-[0.94] tracking-[-0.02em] text-charcoal sm:text-[3.15rem] lg:text-[3.7rem]"
              >
                {section.title}
              </motion.h2>

              <motion.p
                {...getFadeBlurProps(reduceMotion, { delay: 0.08, duration: 0.78 })}
                className="mt-6 max-w-[25rem] text-[0.98rem] leading-7 text-charcoal-soft sm:text-[1.02rem]"
              >
                {section.description}
              </motion.p>

              <motion.div
                {...getFadeBlurProps(reduceMotion, { delay: 0.13, duration: 0.78 })}
                className="mt-8 flex flex-col items-start gap-4 sm:mt-10"
              >
                <Button type="button" onClick={onBookingOpen} aria-haspopup="dialog">
                  {section.primaryCta}
                </Button>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <a
                    href={contact.phone.href}
                    className="text-[0.87rem] leading-6 text-charcoal-soft transition duration-500 hover:text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-charcoal"
                  >
                    {section.secondaryCta}
                  </a>
                  <a
                    href={contact.vk.href}
                    className="text-[0.87rem] leading-6 text-charcoal-soft transition duration-500 hover:text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-charcoal"
                  >
                    {section.tertiaryCta}
                  </a>
                </div>
              </motion.div>

              <motion.div
                {...getFadeBlurProps(reduceMotion, { delay: 0.18, duration: 0.78 })}
                className="mt-8 space-y-2 border-t border-[#e6dccf] pt-5 sm:mt-10"
              >
                <p className="text-[0.84rem] leading-6 text-charcoal-soft sm:text-[0.88rem]">
                  {section.supportingLine}
                </p>
                <p className="text-[0.84rem] leading-6 text-charcoal-soft sm:text-[0.88rem]">
                  {section.price}
                </p>
              </motion.div>
            </div>

            <div className="mx-auto w-full max-w-[26rem] lg:mx-0 lg:ml-auto lg:max-w-[30rem]">
              <ImageFrame
                src={ctaImage}
                alt={section.imageAlt || section.title}
                objectPosition="center"
                aspectRatio="4 / 5"
                className="mx-auto w-full max-w-[26rem] lg:mx-0 lg:ml-auto lg:max-w-[30rem]"
              />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default FinalCtaSection

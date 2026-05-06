import { motion, useReducedMotion } from 'framer-motion'
import Container from './ui/Container'
import ImageFrame from './ui/ImageFrame'
import SectionHeading from './ui/SectionHeading'
import processImage from '../assets/images/calm.webp'
import { getRevealProps } from '../lib/motion'
import { theme } from '../lib/theme'

function HowItWorksSection({ section }) {
  const reduceMotion = useReducedMotion()

  return (
    <section id="how-it-works" className={`${theme.spacing.section} border-t border-line`}>
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,28rem)] lg:gap-16 xl:gap-20">
          <div className="max-w-[36rem]">
            <motion.div
              {...getRevealProps(reduceMotion, { duration: 0.8, y: 8, amount: 0.24 })}
            >
              <SectionHeading
                eyebrow={section.eyebrow}
                title={section.title}
                description={section.description}
              />
            </motion.div>

            <motion.ol
              {...getRevealProps(reduceMotion, {
                duration: 0.88,
                animateY: false,
                amount: 0.12,
              })}
              className="mt-8 grid gap-6 sm:grid-cols-2 lg:mt-10 lg:gap-7"
            >
              {section.steps.map((step) => (
                <li
                  key={step.number}
                  className="flex min-h-32 flex-col border-t border-line pt-4 sm:min-h-36 sm:pt-4.5"
                >
                  <span className="font-serif text-[2.35rem] leading-none text-charcoal/40 sm:text-[2.6rem]">
                    {step.number}
                  </span>
                  <p className="mt-3 whitespace-pre-line max-w-[13rem] font-sans text-[0.98rem] leading-7 text-charcoal sm:mt-3.5 sm:text-[1.02rem]">
                    {step.label}
                  </p>
                </li>
              ))}
            </motion.ol>
          </div>

          <div className="mx-auto w-full max-w-[26rem] lg:mx-0 lg:ml-auto lg:max-w-[28rem]">
            <ImageFrame
              src={processImage}
              alt={section.title}
              objectPosition="center"
              aspectRatio="4 / 5"
              className="mx-auto w-full max-w-[26rem] lg:mx-0 lg:ml-auto lg:max-w-[28rem]"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HowItWorksSection

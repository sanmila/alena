import { motion, useReducedMotion } from 'framer-motion'
import Container from './ui/Container'
import SectionHeading from './ui/SectionHeading'
import { getRevealProps } from '../lib/motion'
import { theme } from '../lib/theme'

function HelpWithSection({ section }) {
  const reduceMotion = useReducedMotion()

  return (
    <section id="what-i-help-with" className={`${theme.spacing.section} border-t border-line`}>
      <Container>
        <motion.div
          {...getRevealProps(reduceMotion, { duration: 0.82, y: 10, amount: 0.18 })}
          className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.05fr)] lg:gap-16 xl:gap-20"
        >
          <div>
            <SectionHeading
              eyebrow={section.eyebrow}
              title={section.title}
              description={section.description}
            />
          </div>

          <div className="grid gap-x-8 gap-y-1 sm:grid-cols-2 lg:pt-1">
            {section.items.map((item, index) => (
              <div
                key={item}
                className={`flex min-h-18 items-center border-line py-4 sm:min-h-22 sm:py-5 ${
                  index < section.items.length - 2 ? 'border-b' : ''
                }`}
              >
                <p className="max-w-[13rem] font-serif text-[1.55rem] leading-[1.08] text-charcoal sm:text-[1.75rem] lg:text-[1.9rem]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default HelpWithSection

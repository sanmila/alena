import { motion, useReducedMotion } from 'framer-motion'
import Container from './ui/Container'
import SectionHeading from './ui/SectionHeading'
import Button from './ui/Button'
import { getRevealProps } from '../lib/motion'
import { theme } from '../lib/theme'

function PricingSection({ section, onBookingOpen }) {
  const reduceMotion = useReducedMotion()

  return (
    <section id="pricing" className={`${theme.spacing.section} border-t border-line`}>
      <Container>
        <div className="flex flex-col items-center">
          <motion.div
            {...getRevealProps(reduceMotion, { duration: 0.8, y: 8, amount: 0.24 })}
            className="mb-12 w-full max-w-[34rem] sm:mb-16 lg:mb-20"
          >
            <SectionHeading
              eyebrow={section.eyebrow}
              title={section.title}
              description={section.description}
              align="center"
            />
          </motion.div>

          <div className="grid w-full max-w-[72rem] gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-8">
            {section.services.map((service, index) => (
              <motion.div
                key={service.title}
                {...getRevealProps(reduceMotion, {
                  duration: 0.7,
                  delay: 0.1 + index * 0.05,
                  y: 12,
                  amount: 0.15,
                })}
                className="flex h-full flex-col justify-between rounded-[1.75rem] border border-line/60 bg-white/40 p-8 shadow-[0_8px_30px_rgba(39,35,31,0.03)] transition duration-500 hover:border-line hover:shadow-[0_12px_40px_rgba(39,35,31,0.06)] sm:p-10"
              >
                <div>
                  <h3 className="font-serif text-[1.85rem] leading-[1.1] text-charcoal sm:text-[2.1rem]">
                    {service.title}
                  </h3>
                  <p className="mt-3 font-sans text-[1.35rem] font-medium text-charcoal-soft">
                    {service.price}
                  </p>
                  <p className="mt-5 text-[0.98rem] leading-7 text-charcoal-soft">
                    {service.description}
                  </p>
                </div>
                
                <div className="mt-10">
                  <Button 
                    type="button" 
                    onClick={() => onBookingOpen(service.title)}
                  >
                    Заказать
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default PricingSection

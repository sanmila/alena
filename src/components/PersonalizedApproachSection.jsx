import { motion, useReducedMotion } from 'framer-motion'
import Container from './ui/Container'
import ImageFrame from './ui/ImageFrame'
import SectionHeading from './ui/SectionHeading'
import { getRevealProps } from '../lib/motion'
import { theme } from '../lib/theme'
import sessionImage from '../assets/images/session.webp'

function PersonalizedApproachSection({ section }) {
  const reduceMotion = useReducedMotion()

  return (
    <section id="personalized-approach" className={`${theme.spacing.section} border-t border-line`}>
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(18rem,0.88fr)_minmax(0,1fr)] lg:gap-16 xl:gap-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <ImageFrame
              src={sessionImage}
              alt={section.image.alt}
              objectPosition="center 45%"
              aspectRatio="4 / 5"
              className="mx-auto w-full max-w-[24.75rem] sm:max-w-[26.5rem] lg:mx-0 lg:max-w-[28rem] xl:max-w-[30rem]"
            />
          </motion.div>

          <motion.div
            {...getRevealProps(reduceMotion, { duration: 0.8, y: 8, amount: 0.24 })}
            className="order-1 max-w-[34rem] lg:order-2 lg:justify-self-end"
          >
            <SectionHeading
              eyebrow={section.eyebrow}
              title={section.title}
              description={section.description}
            />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default PersonalizedApproachSection

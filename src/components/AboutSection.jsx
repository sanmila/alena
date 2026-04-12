import { motion, useReducedMotion } from 'framer-motion'
import Container from './ui/Container'
import ImageFrame from './ui/ImageFrame'
import SectionHeading from './ui/SectionHeading'
import { getRevealProps } from '../lib/motion'
import { theme } from '../lib/theme'
import aboutImage from '../assets/images/about-main.webp'

function AboutSection({ section }) {
  const reduceMotion = useReducedMotion()

  return (
    <section id="about-alena" className={`${theme.spacing.section} border-t border-line`}>
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,0.9fr)] lg:gap-16 xl:gap-20">
          <motion.div
            {...getRevealProps(reduceMotion, { duration: 0.8, y: 8, amount: 0.24 })}
            className="max-w-[34rem] lg:pt-1"
          >
            <SectionHeading
              eyebrow={section.eyebrow}
              title={section.title}
              description={section.description}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto w-full max-w-[24.75rem] sm:max-w-[27rem] lg:mx-0 lg:ml-auto lg:max-w-[29rem] xl:max-w-[31rem]"
          >
            <ImageFrame
              src={aboutImage}
              alt={section.image.alt}
              objectPosition="center 24%"
              aspectRatio="4 / 5"
              className="mx-auto w-full max-w-[24.75rem] sm:max-w-[27rem] lg:mx-0 lg:ml-auto lg:max-w-[29rem] xl:max-w-[31rem]"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default AboutSection

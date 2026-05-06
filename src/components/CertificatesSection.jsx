import { motion, useReducedMotion } from 'framer-motion'
import Container from './ui/Container'
import { getFadeBlurProps } from '../lib/motion'

export default function CertificatesSection({ content }) {
  const reduceMotion = useReducedMotion()

  const certificates = [
    '/images/certificates/photo_2026-04-29_23-13-52.jpg',
    '/images/certificates/photo_2026-04-29_23-13-56.jpg',
    '/images/certificates/photo_2026-04-29_23-14-01.jpg',
    '/images/certificates/photo_2026-05-01_15-43-39.jpg'
  ]

  return (
    <section id="certificates" className="overflow-hidden py-17 sm:py-21 lg:py-25">
      <Container>
        <div className="mx-auto max-w-[38rem] text-center mb-12 sm:mb-16">
          <motion.p
            {...getFadeBlurProps(reduceMotion, { duration: 0.8 })}
            className="mb-4 font-sans text-[0.8rem] uppercase tracking-[0.24em] text-charcoal-soft"
          >
            {content.eyebrow}
          </motion.p>
          <motion.h2
            {...getFadeBlurProps(reduceMotion, { delay: 0.05, duration: 0.8 })}
            className="mb-6 font-serif text-[2.2rem] leading-tight text-charcoal sm:text-[2.8rem]"
          >
            {content.title}
          </motion.h2>
          <motion.p
            {...getFadeBlurProps(reduceMotion, { delay: 0.1, duration: 0.8 })}
            className="font-sans text-[1rem] leading-relaxed text-charcoal-soft sm:text-[1.05rem]"
          >
            {content.description}
          </motion.p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certificates.map((src, index) => (
            <motion.div
              key={index}
              {...getFadeBlurProps(reduceMotion, { delay: 0.15 + index * 0.1, duration: 0.8 })}
              className="group relative aspect-[3/4] overflow-hidden bg-stone-100 flex items-center justify-center rounded-sm"
            >
              <img
                src={src}
                alt={`Certificate ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

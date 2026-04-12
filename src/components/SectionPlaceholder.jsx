import Container from './ui/Container'
import SectionHeading from './ui/SectionHeading'
import { theme } from '../lib/theme'

function SectionPlaceholder({ id, eyebrow, title, description, label }) {
  return (
    <section id={id} className={`${theme.spacing.section} border-t border-line`}>
      <Container>
        <div className={`flex flex-col ${theme.spacing.gap}`}>
          <SectionHeading eyebrow={eyebrow} title={title} description={description} />
          <div className="flex min-h-40 items-end rounded-[2rem] bg-white/35 p-8">
            <p className="font-sans text-sm uppercase tracking-[0.18em] text-charcoal-soft">
              {label}
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default SectionPlaceholder

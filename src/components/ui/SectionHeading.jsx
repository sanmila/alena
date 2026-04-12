import { theme } from '../../lib/theme'

function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left'

  return (
    <div className={`flex max-w-[36rem] flex-col gap-4 sm:gap-5 ${alignment}`}>
      <p className={theme.typography.eyebrow}>{eyebrow}</p>
      <h2 className={theme.typography.subheading}>{title}</h2>
      {description ? <p className={theme.typography.body}>{description}</p> : null}
    </div>
  )
}

export default SectionHeading

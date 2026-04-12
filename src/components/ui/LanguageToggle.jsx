import { languages } from '../../content/siteContent'

function LanguageToggle({ currentLanguage, onChange, label, optionLabels = {} }) {
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-line bg-white/40 p-1.5 backdrop-blur-sm">
      <span className="sr-only">{label}</span>
      {languages.map((language) => {
        const isActive = language.code === currentLanguage

        return (
          <button
            key={language.code}
            type="button"
            onClick={() => onChange(language.code)}
            aria-pressed={isActive}
            aria-label={`${label}: ${optionLabels[language.code] ?? language.label}`}
            className={`min-w-12 rounded-full px-3 py-2 text-[0.8rem] font-semibold tracking-[0.18em] transition duration-500 ${
              isActive
                ? 'bg-white text-charcoal shadow-[0_1px_10px_rgba(39,35,31,0.06)]'
                : 'text-charcoal-soft hover:text-charcoal'
            }`}
          >
            {language.label}
          </button>
        )
      })}
    </div>
  )
}

export default LanguageToggle

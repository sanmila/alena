import Container from './ui/Container'

function ContactItem({ item }) {
  const content = item.href ? (
    <a
      href={item.href}
      className="transition duration-500 hover:text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-charcoal"
    >
      {item.value}
    </a>
  ) : (
    <span>{item.value}</span>
  )

  return (
    <div className="flex flex-col gap-2">
      <dt className="text-[0.8rem] uppercase tracking-[0.2em] text-charcoal-soft">{item.label}</dt>
      <dd className="m-0 text-[0.98rem] leading-6.5 text-charcoal">{content}</dd>
    </div>
  )
}

function Footer({ meta, navigation, contact, ui }) {
  return (
    <footer id="contact" className="border-t border-line">
      <Container className="py-14 sm:py-16 lg:py-18">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,0.56fr)_minmax(0,1fr)] lg:gap-10">
          <div className="max-w-[22rem]">
            <p className="font-serif text-[2.2rem] leading-none text-charcoal sm:text-[2.45rem]">
              {meta.siteName}
            </p>
            <p className="mt-2.5 max-w-[18rem] text-[0.76rem] uppercase tracking-[0.16em] text-charcoal-soft">
              {meta.siteTitle}
            </p>
          </div>

          <nav aria-label={ui.navLabel} className="max-w-[12rem]">
            <p className="text-[0.74rem] uppercase tracking-[0.18em] text-charcoal-soft">
              {ui.footerLabel}
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[0.98rem] leading-7 text-charcoal transition duration-500 hover:text-charcoal-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-charcoal"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[0.74rem] uppercase tracking-[0.18em] text-charcoal-soft">
              {contact.title}
            </p>
            <dl className="mt-4 grid gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-2">
              <ContactItem item={contact.phone} />
              <ContactItem item={contact.vk} />
              <div className="flex flex-col gap-2">
                <dt className="text-[0.74rem] uppercase tracking-[0.18em] text-charcoal-soft">
                  {ui.priceLabel}
                </dt>
                <dd className="m-0 text-[0.98rem] leading-6.5 text-charcoal">{contact.price}</dd>
              </div>
            </dl>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer

export const defaultLanguage = 'ru'

export const languages = [
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
]

export const siteContent = {
  en: {
    meta: {
      siteName: 'Alena Gotto',
      siteTitle: 'Hypnotherapist & Transformational Practitioner',
      pageTitle: 'Alena Gotto | Hypnotherapist & Transformational Practitioner',
      description:
        'Premium bilingual website for Alena Gotto, offering calm subconscious work for anxiety, sleep, emotional balance, habits, relationships, and inner transformation.',
      ogTitle: 'Alena Gotto | Hypnotherapist & Transformational Practitioner',
      ogDescription:
        'Calm, premium subconscious support through personalized hypnotherapy and transformational practice.',
      ogImage: '/images/hero.webp',
    },
    ui: {
      languageLabel: 'Language',
      languageOptions: {
        en: 'English',
        ru: 'Russian',
      },
      footerLabel: 'Navigation',
      navLabel: 'Footer navigation',
      contactLabel: 'Contact',
      phoneLabel: 'Phone',
      vkLabel: 'VK',
      priceLabel: 'Session Fee',
      bookingNote: 'Online booking available',
      callCta: 'Call',
      vkCta: 'VK',
      closeLabel: 'Close',
    },
    navigation: [
      { label: 'What I Help With', href: '#what-i-help-with' },
      { label: 'Approach', href: '#personalized-approach' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'About', href: '#about-alena' },
      { label: 'Contact', href: '#contact' },
    ],
    contact: {
      title: 'Contact',
      phone: {
        label: 'Phone',
        value: '89823603030',
        href: 'tel:89823603030',
      },
      vk: {
        label: 'VK',
        value: 'vk.ru/alenagotto',
        href: 'https://vk.ru/alenagotto',
      },
      price: 'Session fee from 3000₽',
    },
    booking: {
      title: 'Online Booking',
      description: 'Leave your details and you will be contacted to confirm your session.',
      submit: 'Send Request',
      success: 'Thank you. Your request has been sent.',
      requiredMark: 'Required',
      fields: {
        name: 'Name',
        phone: 'Phone',
        contactMethod: 'Preferred contact method',
        request: 'Short request',
        date: 'Preferred date',
        time: 'Preferred time',
      },
      contactOptions: {
        phone: 'Phone',
        vk: 'VK',
      },
    },
    sections: {
      hero: {
        eyebrow: 'Hypnotherapy & subconscious work',
        name: 'Alena Gotto',
        role: 'Hypnotherapist & Transformational Practitioner',
        description:
          'If anxiety keeps returning, the same patterns repeat, or inner tension no longer lets you breathe freely, this work helps you understand what is happening underneath and begin real change.',
        primaryCta: 'Book Online',
        secondaryCta: 'Call',
        tertiaryCta: 'VK',
        image: {
          src: '/images/hero.webp',
          alt: 'Alena Gotto hero portrait',
        },
      },
      help: {
        eyebrow: 'What I Help With',
        title: 'Areas of support approached with calm, personalized attention.',
        description:
          'Focused subconscious work for the patterns that quietly shape how you feel, respond, and move through daily life.',
        items: [
          'Anxiety & stress',
          'Sleep issues',
          'Emotional blocks',
          'Habits & addictions',
          'Relationships',
          'Motivation & confidence',
        ],
      },
      approach: {
        eyebrow: 'Personalized Approach',
        title: 'Each session is built around your personal request.',
        description:
          'Through hypnotherapy and individualized subconscious work, the process is designed to support deep but gentle internal change.',
        image: {
          src: '/images/session.webp',
          alt: 'A calm one-to-one session environment',
        },
      },
      process: {
        eyebrow: 'How It Works',
        title: 'A clear, thoughtful process designed to unfold with calm and continuity.',
        description:
          'Each stage is simple, personal, and grounded in lasting integration rather than pressure or speed.',
        steps: [
          { number: '01', label: 'Consultation' },
          { number: '02', label: 'Personalized subconscious work' },
          { number: '03', label: 'Gradual transformation' },
          { number: '04', label: 'Integration into real life' },
        ],
      },
      about: {
        eyebrow: 'About Alena',
        title: 'A calm, personal practice shaped around meaningful inner work.',
        description:
          'Alena Gotto is a practitioner focused on deep inner work and personal transformation. Her approach combines calm guidance, individual attention, and carefully tailored sessions designed to support emotional balance and meaningful change.',
        image: {
          src: '/images/about-main.webp',
          alt: 'Alena Gotto portrait',
        },
      },
      cta: {
        eyebrow: 'Begin',
        title:
          'Begin changes you will genuinely feel in your everyday life.',
        description:
          'Without pressure. At your pace. With careful attention to what matters to you personally.',
        primaryCta: 'Book a Session',
        secondaryCta: 'Call',
        tertiaryCta: 'VK',
        supportingLine: 'Private sessions • Confidential • By appointment only',
        price: 'Session fee from 3000₽',
        imageAlt: 'Close portrait of Alena Gotto',
      },
    },
  },
  ru: {
    meta: {
      siteName: 'Алёна Готто',
      siteTitle: 'Гипнотерапевт и специалист по работе с подсознанием',
      pageTitle: 'Алёна Готто | Гипнотерапевт и специалист по работе с подсознанием',
      description:
        'Премиальный билингвальный сайт Алёны Готто о мягкой и глубокой работе с подсознанием, тревожностью, сном, эмоциональным балансом и внутренними изменениями.',
      ogTitle: 'Алёна Готто | Гипнотерапевт и специалист по работе с подсознанием',
      ogDescription:
        'Спокойная персональная работа с подсознанием, гипнотерапией и внутренними изменениями.',
      ogImage: '/images/hero.webp',
    },
    ui: {
      languageLabel: 'Язык',
      languageOptions: {
        en: 'Английский',
        ru: 'Русский',
      },
      footerLabel: 'Навигация',
      navLabel: 'Навигация в футере',
      contactLabel: 'Контакты',
      phoneLabel: 'Телефон',
      vkLabel: 'VK',
      priceLabel: 'Стоимость сессии',
      bookingNote: 'Онлайн-запись доступна',
      callCta: 'Позвонить',
      vkCta: 'VK',
      closeLabel: 'Закрыть',
    },
    navigation: [
      { label: 'С чем я помогаю', href: '#what-i-help-with' },
      { label: 'Подход', href: '#personalized-approach' },
      { label: 'Как это работает', href: '#how-it-works' },
      { label: 'Об Алёне', href: '#about-alena' },
      { label: 'Контакты', href: '#contact' },
    ],
    contact: {
      title: 'Контакты',
      phone: {
        label: 'Телефон',
        value: '89823603030',
        href: 'tel:89823603030',
      },
      vk: {
        label: 'VK',
        value: 'vk.ru/alenagotto',
        href: 'https://vk.ru/alenagotto',
      },
      price: 'Стоимость сессии — от 3000₽',
    },
    booking: {
      title: 'Онлайн-запись',
      description: 'Оставьте ваши данные, и с вами свяжутся для подтверждения записи.',
      submit: 'Отправить заявку',
      success: 'Спасибо. Ваша заявка отправлена.',
      requiredMark: 'Обязательно',
      fields: {
        name: 'Имя',
        phone: 'Телефон',
        contactMethod: 'Удобный способ связи',
        request: 'Краткий запрос',
        date: 'Предпочтительная дата',
        time: 'Предпочтительное время',
      },
      contactOptions: {
        phone: 'Телефон',
        vk: 'VK',
      },
    },
    sections: {
      hero: {
        eyebrow: 'Гипнотерапия и работа с подсознанием',
        name: 'Алёна Готто',
        role: 'Гипнотерапевт и специалист по работе с подсознанием',
        description:
          'Если тревога возвращается, одни и те же сценарии повторяются, а внутреннее напряжение не отпускает, эта работа помогает понять, что происходит глубже, и запустить реальные изменения.',
        primaryCta: 'Записаться онлайн',
        secondaryCta: 'Позвонить',
        tertiaryCta: 'VK',
        image: {
          src: '/images/hero.webp',
          alt: 'Портрет Алёны Готто',
        },
      },
      help: {
        eyebrow: 'С чем я помогаю',
        title: 'Направления поддержки, с которыми можно работать бережно и глубоко.',
        description:
          'Точная работа с подсознанием для состояний и паттернов, которые влияют на внутреннее самочувствие, поведение и качество жизни.',
        items: [
          'Тревога и стресс',
          'Проблемы со сном',
          'Внутренние блоки',
          'Привычки и зависимости',
          'Отношения',
          'Мотивация и уверенность',
        ],
      },
      approach: {
        eyebrow: 'Персональный подход',
        title: 'Каждая сессия выстраивается под ваш индивидуальный запрос.',
        description:
          'Гипнотерапия и персонализированная работа с подсознанием помогают запускать глубокие, но мягкие внутренние изменения.',
        image: {
          src: '/images/session.webp',
          alt: 'Спокойная атмосфера индивидуальной сессии',
        },
      },
      process: {
        eyebrow: 'Как это работает',
        title: 'Понятный и бережный процесс, в котором есть ясность, глубина и постепенность.',
        description:
          'Каждый этап выстроен так, чтобы изменения происходили естественно, без спешки и с опорой на реальную жизнь.',
        steps: [
          { number: '01', label: 'Консультация' },
          { number: '02', label: 'Индивидуальная работа с подсознанием' },
          { number: '03', label: 'Постепенные изменения' },
          { number: '04', label: 'Интеграция в жизнь' },
        ],
      },
      about: {
        eyebrow: 'Об Алёне',
        title: 'Спокойная личная практика, основанная на глубокой внутренней работе.',
        description:
          'Алёна Готто — практик, работающий с глубокими внутренними состояниями и личной трансформацией. Её подход сочетает спокойное сопровождение, индивидуальное внимание и сессии, выстроенные под конкретный запрос.',
        image: {
          src: '/images/about-main.webp',
          alt: 'Портрет Алёны Готто',
        },
      },
      cta: {
        eyebrow: 'Начать',
        title:
          'Начните изменения, которые вы действительно почувствуете в жизни.',
        description:
          'Без давления. В вашем темпе. С вниманием к тому, что важно именно для вас.',
        primaryCta: 'Записаться на сессию',
        secondaryCta: 'Позвонить',
        tertiaryCta: 'VK',
        supportingLine: 'Индивидуальные сессии • Конфиденциально • По предварительной записи',
        price: 'Стоимость сессии — от 3000₽',
        imageAlt: 'Крупный портрет Алёны Готто',
      },
    },
  },
}

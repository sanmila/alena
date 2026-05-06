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
      siteSubtitle: 'Architect of a New State',
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
      { label: 'Certificates', href: '#/certificates' },
      { label: 'Contact', href: '#contact' },
    ],
    contact: {
      title: 'Contact',
      phone: {
        label: 'Phone',
        value: '8 (982) 360-30-30',
        href: 'tel:89823603030',
      },
      email: {
        label: 'Email',
        value: 'gotovo27@yandex.ru',
        href: 'mailto:gotovo27@yandex.ru',
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
      description: 'Leave your details and I will contact you to confirm your session.',
      submit: 'Send Request',
      success: 'Thank you. Your request has been sent.',
      requiredMark: 'Required',
      fields: {
        name: 'Name',
        phone: 'Phone',
        contactMethod: 'Preferred contact method',
        service: 'Service',
        request: 'Short request',
        date: 'Preferred date',
        time: 'Preferred time',
      },
      contactOptions: {
        phone: 'Phone',
        vk: 'VK',
      },
      serviceOptions: [
        { value: '', label: 'General Consultation' },
        { value: 'Free 15-Minute Consultation', label: 'Free 15-Minute Consultation' },
        { value: 'Hypnosession', label: 'Hypnosession' },
        { value: 'Neurosession', label: 'Neurosession' },
        { value: 'Hypnosis for addictions', label: 'Hypnosis for addictions' },
        { value: 'Manifestation', label: 'Manifestation' },
      ],
    },
    promo: {
      title: 'Free 15-Minute Consultation',
      description: 'Discover how I can help you achieve your goals. Claim your free introductory call now.',
      button: 'Claim Now'
    },
    sections: {
      hero: {
        eyebrow: 'Hypnotherapy & subconscious work',
        name: 'Alena Gotto',
        role: 'Hypnotherapist & Transformational Practitioner • Architect\u00A0of\u00A0a\u00A0New\u00A0State',
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
        eyebrow: 'When to seek support:',
        title: 'Areas of support approached with calm, personalized attention.',
        description:
          'Focused subconscious work for the patterns that quietly shape how you feel, respond, and move through daily life.',
        items: [
          { title: 'Anxiety & Stress', text: 'unable to relax, constant control, multitasking mode, cannot see a way out.' },
          { title: 'Sleep Issues', text: 'heightened anxiety, constantly overthinking events, worrying about the future.' },
          { title: 'Subconscious Blocks', text: 'hindering your financial growth.' },
          { title: 'Relationships', text: 'repeating patterns in relationships and finances.' },
          { title: 'Habits & Addictions', text: 'destroying your desires, expectations, and life.' },
          { title: 'Motivation & Confidence', text: 'no belief in yourself or your success.' },
          { title: 'Procrastination', text: 'it is not laziness, it is the delayed life syndrome.' },
          { title: 'Psychosomatics', text: 'when the "soul aches" and the body reacts with real illnesses.' },
        ],
      },
      approach: {
        eyebrow: 'Personalized Approach',
        title: 'My experience and expertise help find the key to your subconscious.',
        description: [
          'Gentle transformations are initiated through deep internal changes.',
          'Manifestations help focus the subconscious on your goals, making them achievable through visualization, positive affirmations, and active steps.'
        ],
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
          { number: '01', label: 'Free 15-minute\nonline consultation' },
          { number: '02', label: 'Session by request\n(from 1 hour)' },
          { number: '03', label: 'Changing behavioral patterns' },
          { number: '04', label: 'Life transformation' },
        ],
      },
      pricing: {
        eyebrow: 'Pricing',
        title: 'Services & Pricing',
        description: 'Choose the format of work that best suits your needs.',
        services: [
          {
            title: 'Hypnosession',
            price: '3000₽',
            description: 'Deep subconscious work to remove emotional blocks, reduce anxiety, and resolve inner conflicts.',
          },
          {
            title: 'Neurosession',
            price: '5000₽',
            description: 'Neuro-programming to create new positive thought patterns, improve focus, and accelerate personal growth.',
          },
          {
            title: 'Hypnosis for addictions',
            price: '20000₽',
            description: 'A comprehensive program (from 3 to 8 sessions) to break free from unwanted habits by working through their root causes in the subconscious.',
          },
          {
            title: 'Manifestation',
            price: '1000₽',
            description: 'Guided visualization to tune your subconscious to achieve goals and attract desired results.',
          }
        ]
      },
      about: {
        eyebrow: 'About Alena',
        title: 'A calm, personal practice shaped around meaningful inner work.',
        description: [
          'Certified specialist with higher psychological and pedagogical education. Completed specialization in "all types of hypnosis in psychological counseling".',
          'Neuro-practitioner, author of the unique practice "Neurobalance" — a tactile method of working with neural connections to harmonize and improve all areas of life.',
          'A practitioner working with internal blocks and programs through their gentle transformation. New scenarios are created that change life.',
          'Begin the changes you have been putting off for a long time. Start living your life now.'
        ],
        image: {
          src: '/images/about-main.webp',
          alt: 'Alena Gotto portrait',
        },
      },
      certificates: {
        eyebrow: 'Qualifications',
        title: 'Certificates & Education',
        description: 'Professional training and continuous education ensuring the highest standard of practice.',
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
      siteSubtitle: 'Архитектор нового состояния',
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
      { label: 'Сертификаты', href: '#/certificates' },
      { label: 'Контакты', href: '#contact' },
    ],
    contact: {
      title: 'Контакты',
      phone: {
        label: 'Телефон',
        value: '8 (982) 360-30-30',
        href: 'tel:89823603030',
      },
      email: {
        label: 'Почта',
        value: 'gotovo27@yandex.ru',
        href: 'mailto:gotovo27@yandex.ru',
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
      description: 'Оставьте ваши данные, и я свяжусь с вами для подтверждения записи.',
      submit: 'Отправить заявку',
      success: 'Спасибо. Ваша заявка отправлена.',
      requiredMark: 'Обязательно',
      fields: {
        name: 'Имя',
        phone: 'Телефон',
        contactMethod: 'Удобный способ связи',
        service: 'Услуга',
        request: 'Краткий запрос',
        date: 'Предпочтительная дата',
        time: 'Предпочтительное время',
      },
      contactOptions: {
        phone: 'Телефон',
        vk: 'VK',
      },
      serviceOptions: [
        { value: '', label: 'Общая консультация' },
        { value: 'Бесплатная 15-минутная консультация', label: 'Бесплатная 15-минутная консультация' },
        { value: 'Гипносессия', label: 'Гипносессия' },
        { value: 'Нейросессия', label: 'Нейросессия' },
        { value: 'Гипноз от зависимостей', label: 'Гипноз от зависимостей' },
        { value: 'Манифестация', label: 'Манифестация' },
      ],
    },
    promo: {
      title: 'Бесплатная 15-минутная консультация',
      description: 'Узнайте, как я могу помочь вам в достижении ваших целей. Запишитесь на ознакомительный звонок.',
      button: 'Записаться'
    },
    sections: {
      hero: {
        eyebrow: 'Гипнотерапия и работа с подсознанием',
        name: 'Алёна Готто',
        role: 'Гипнотерапевт и специалист по работе с подсознанием • Архитектор\u00A0нового\u00A0состояния',
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
        eyebrow: 'Ко мне обращаются, если:',
        title: 'Направления поддержки, с которыми можно работать бережно и глубоко.',
        description:
          'Точная работа с подсознанием для состояний и паттернов, которые влияют на внутреннее самочувствие, поведение и качество жизни.',
        items: [
          { title: 'Тревога и стресс', text: 'не получается расслабиться, постоянный контроль, жизнь в режиме многозадачности, не видишь выхода.' },
          { title: 'Проблемы со сном', text: 'повышенная тревожность, постоянная прокрутка событий, переживание за будущее.' },
          { title: 'Внутренние блоки', text: 'мешающие росту дохода.' },
          { title: 'Отношения', text: 'повторяющиеся сценарии в отношениях и финансах.' },
          { title: 'Привычки и зависимость', text: 'разрушающие ваши желания, ожидания, жизнь.' },
          { title: 'Мотивация и уверенность', text: 'нет веры в себя, в свой успех.' },
          { title: 'Прокрастинация', text: 'это не лень, это синдром отложенной жизни.' },
          { title: 'Психосоматика', text: 'это "болит душа", а тело реагирует реальными болезнями.' },
        ],
      },
      approach: {
        eyebrow: 'Персональный подход',
        title: 'Мой опыт и экспертность помогают найти ключ к вашему подсознанию.',
        description: [
          'Запускаются мягкие трансформации через глубинные изменения.',
          'Манифестации — помогают сфокусировать подсознание на целях, делая их достижимыми через визуализацию, позитивные утверждения и активные действия.'
        ],
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
          { number: '01', label: 'Консультация онлайн\n15 минут бесплатно' },
          { number: '02', label: 'Сессия по запросу\nот 1 часа' },
          { number: '03', label: 'Смена поведенческих паттернов' },
          { number: '04', label: 'Трансформация жизни' },
        ],
      },
      pricing: {
        eyebrow: 'Прайс услуг',
        title: 'Услуги и стоимость',
        description: 'Выберите подходящий формат работы.',
        services: [
          {
            title: 'Гипносессия',
            price: '3000₽',
            description: 'Глубокая работа с подсознанием для снятия эмоциональных блоков, снижения тревожности и разрешения внутренних конфликтов.',
          },
          {
            title: 'Нейросессия',
            price: '5000₽',
            description: 'Нейропрограммирование для создания новых позитивных паттернов мышления, улучшения фокуса и личностного роста.',
          },
          {
            title: 'Гипноз от зависимостей',
            price: '20000₽',
            description: 'Комплексная программа (от 3 до 8 сеансов) для освобождения от нежелательных привычек через проработку их первопричин в подсознании.',
          },
          {
            title: 'Манифестация',
            price: '1000₽',
            description: 'Направляемая визуализация для настройки вашего подсознания на достижение целей и притяжение желаемых результатов.',
          }
        ]
      },
      about: {
        eyebrow: 'Об Алёне',
        title: 'Спокойная личная практика, основанная на глубокой внутренней работе.',
        description: [
          'Дипломированный специалист с высшим психолого-педагогическим образованием, пройден специалитет "Все виды гипноза в психологическом консультировании".',
          'Нейропрактик, автор уникальной практики "Нейробаланс" — тактильный метод работы с нейронными связями для гармонизации и улучшения всех сфер жизни.',
          'Практик, работающий с внутренними блоками и программами, через их мягкую трансформацию. Создаются новые сценарии, меняющие жизнь.',
          'Начните изменения, которые вы давно откладывали. Начните жить свою жизнь уже сейчас.'
        ],
        image: {
          src: '/images/about-main.webp',
          alt: 'Портрет Алёны Готто',
        },
      },
      certificates: {
        eyebrow: 'Квалификация',
        title: 'Сертификаты и образование',
        description: 'Профессиональная подготовка и непрерывное образование, обеспечивающие высочайший стандарт практики.',
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

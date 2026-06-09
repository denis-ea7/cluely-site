export default function Pricing() {
  const plans = [
    {
      name: 'Базовый',
      price: '990',
      period: 'месяц',
      description: 'Для индивидуальных пользователей',
      features: [
        'Локальный AI (Ollama)',
        'Неограниченные скриншоты',
        'Анализ аудио',
        'Базовые подсказки',
        'Поддержка по email',
      ],
      popular: false,
      cta: 'Начать сейчас',
      href: '/auth/?plan=basic',
    },
    {
      name: 'Профессиональный',
      price: '1990',
      period: 'месяц',
      description: 'Для профессионалов и команд',
      features: [
        'Всё из Базового',
        'Google Gemini AI',
        'Расширенная аналитика',
        'Приоритетная поддержка',
        'Кастомные промпты',
        'Экспорт данных',
      ],
      popular: true,
      cta: 'Начать сейчас',
      href: '/auth/?plan=pro',
    },
    {
      name: 'Корпоративный',
      price: 'По запросу',
      period: '',
      description: 'Для компаний и организаций',
      features: [
        'Всё из Профессионального',
        'Множественные API ключи',
        'Корпоративная интеграция',
        'Dedicated менеджер',
        'Кастомизация под ваши нужды',
        'SLA гарантия',
      ],
      popular: false,
      cta: 'Связаться с нами',
      href: 'mailto:sales@cluely.ru?subject=Корпоративный%20план',
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-white/80 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Цены
          </h2>
          <p className="text-xl text-slate-700 max-w-2xl mx-auto">
            Выберите план, который подходит именно вам
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-xl ${
                plan.popular
                  ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-2xl scale-105'
                  : 'bg-white shadow-lg border border-slate-200 text-slate-900'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                    Популярный
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="mb-6 opacity-80">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-lg ml-2 opacity-80">₽/{plan.period}</span>
                )}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={plan.href}
                className={`block text-center w-full py-3 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? 'bg-white text-blue-600 hover:bg-gray-100 shadow-lg'
                    : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-slate-600">
            Все планы включают бесплатный пробный период на 14 дней
          </p>
        </div>
      </div>
    </section>
  )
}


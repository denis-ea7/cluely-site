export default function Features() {
  const features = [
    {
      title: 'Анализ в реальном времени',
      description: 'Автоматически анализирует скриншоты, аудио и изображения во время ваших встреч',
      icon: '⚡',
    },
    {
      title: 'Умные подсказки',
      description: 'Получайте релевантные ответы и предложения на основе контекста разговора',
      icon: '🧠',
    },
    {
      title: '100% приватность',
      description: 'Работает локально с Ollama - ваши данные никогда не покидают ваш компьютер',
      icon: '🔒',
    },
    {
      title: 'Поддержка Gemini AI',
      description: 'Также доступна интеграция с Google Gemini для максимальной точности',
      icon: '🤖',
    },
    {
      title: 'Незаметная работа',
      description: 'Работает в фоне, не мешая вашей работе или презентации',
      icon: '👁️',
    },
    {
      title: 'Мультиязычность',
      description: 'Поддержка русского и других языков для международных встреч',
      icon: '🌍',
    },
  ]

  return (
    <section id="features" className="py-20 bg-white/50 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Возможности
          </h2>
          <p className="text-xl text-slate-700 max-w-2xl mx-auto">
            Все что нужно для продуктивных встреч и интервью
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white/80 backdrop-blur-md rounded-xl hover:shadow-xl transition-all shadow-lg border border-white/50"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


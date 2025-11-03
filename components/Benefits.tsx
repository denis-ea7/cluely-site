export default function Benefits() {
  const benefits = [
    {
      title: 'Уверенность на интервью',
      description: 'Получайте подсказки и ответы в реальном времени, чтобы произвести лучшее впечатление',
    },
    {
      title: 'Эффективные встречи',
      description: 'Не упускайте важные детали и сразу получайте резюме обсуждений',
    },
    {
      title: 'Успешные презентации',
      description: 'Помощь в ответах на вопросы и предложения по улучшению вашего выступления',
    },
    {
      title: 'Обучение и развитие',
      description: 'Учитесь на каждой встрече, получая аналитику и рекомендации',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-yellow-50 to-orange-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Преимущества
          </h2>
          <p className="text-xl text-slate-700 max-w-2xl mx-auto mb-2">
            Почему тысячи профессионалов в России и СНГ выбирают Cluely
          </p>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl mx-auto">
            Российская адаптация оригинального <a href="https://cluely.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline font-semibold">cluely.com</a>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-8 bg-white/80 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition-all border border-white/50"
            >
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-slate-600 text-lg">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


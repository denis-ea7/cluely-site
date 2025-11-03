export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-sky-100 to-yellow-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Готовы начать?
          </h2>
          <p className="text-xl text-slate-700 mb-4 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам профессионалов в России и СНГ, которые уже используют Cluely 
            для более эффективных встреч и интервью
          </p>
          <p className="text-sm text-slate-600 mb-8 max-w-2xl mx-auto">
            Российская адаптация <a href="https://cluely.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline font-semibold">оригинального Cluely</a>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#pricing"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
            >
              Выбрать план
            </a>
            <a
              href="mailto:contact@cluely.com"
              className="px-8 py-4 bg-white/80 backdrop-blur-md text-blue-600 rounded-lg font-semibold text-lg hover:bg-white transition-all shadow-lg border-2 border-blue-600"
            >
              Связаться с нами
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}


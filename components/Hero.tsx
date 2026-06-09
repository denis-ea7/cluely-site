export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-100 via-white to-yellow-50"></div>
      {}
      <div className="absolute bottom-0 left-0 right-0 h-64">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-purple-900 to-slate-700 opacity-40" 
             style={{ clipPath: 'polygon(0 60%, 20% 40%, 40% 50%, 60% 35%, 80% 45%, 100% 30%, 100% 100%, 0 100%)' }}></div>
      </div>
      {}
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-yellow-200 rounded-full blur-3xl opacity-60"></div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-slate-900">
            Cluely Россия
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-800 mb-6">
            Российская адаптация невидимого AI-ассистента
          </p>
          <div className="bg-white/60 backdrop-blur-md p-8 mb-6 max-w-2xl mx-auto rounded-2xl shadow-xl border border-white/50">
            <p className="text-lg md:text-xl text-slate-700 mb-4">
              Переработанная версия <a href="https://cluely.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline font-semibold">Cluely</a>, адаптированная для России и СНГ. 
              Получайте реальные подсказки, ответы и поддержку во время встреч, интервью, 
              презентаций и профессиональных разговоров. Работает незаметно на вашем компьютере.
            </p>
            <p className="text-sm text-slate-600">
              Основано на оригинальном проекте <a href="https://cluely.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">cluely.com</a>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#pricing"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
              </svg>
              Выбрать план
            </a>
            <a
              href="#features"
              className="px-8 py-4 bg-white/80 backdrop-blur-md text-blue-600 rounded-lg font-semibold text-lg border-2 border-blue-600 hover:bg-blue-50 transition-all shadow-lg"
            >
              Узнать больше
            </a>
            <a
              href="/blog"
              className="px-8 py-4 bg-white/80 backdrop-blur-md text-slate-700 rounded-lg font-semibold text-lg border-2 border-slate-300 hover:bg-white transition-all shadow-lg"
            >
              Блог
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}


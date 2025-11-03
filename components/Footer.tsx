export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Cluely Россия</h3>
            <p className="text-sm mb-2">
              Российская адаптация невидимого AI-ассистента для встреч и интервью
            </p>
            <p className="text-xs text-gray-500">
              Основано на <a href="https://cluely.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">cluely.com</a>
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Продукт</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-white transition-colors">Возможности</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Цены</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Документация</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors">Блог</a></li>
              <li><a href="mailto:contact@cluely.com" className="hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Помощь</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Cluely Россия. Все права защищены.</p>
          <p className="text-xs text-gray-500 mt-2">
            Российская адаптация оригинального проекта <a href="https://cluely.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Cluely</a>
          </p>
        </div>
      </div>
    </footer>
  )
}


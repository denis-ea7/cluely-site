import type { Metadata } from 'next'
import BlogPost from '@/components/BlogPost'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Блог Cluely Россия - Новости и обновления российской адаптации',
  description: 'Читайте последние новости о Cluely Россия - российской адаптации Cluely (cluely.com), новых функциях и обновлениях продукта для России и СНГ',
  alternates: {
    canonical: 'https://cluely.ru/blog',
    languages: {
      'ru-RU': 'https://cluely.ru/blog',
      'en-US': 'https://cluely.com',
    },
  },
  openGraph: {
    title: 'Блог Cluely Россия - Новости и обновления',
    description: 'Российская адаптация Cluely (cluely.com) - новости и обновления',
    url: 'https://cluely.ru/blog',
    siteName: 'Cluely Россия',
  },
}

const blogPosts = [
  {
    id: 1,
    title: 'Поддержка Ollama: 100% приватность на вашем компьютере',
    date: '15 января 2025',
    author: 'Команда Cluely Россия',
    excerpt: 'Мы рады объявить о полной поддержке Ollama - теперь вы можете использовать локальные AI-модели для максимальной приватности.',
    content: `Теперь Cluely поддерживает работу с Ollama - платформой для запуска больших языковых моделей локально на вашем компьютере. Это означает, что все ваши данные остаются у вас и никогда не отправляются на внешние серверы.

**Основные преимущества:**
- 100% приватность - данные не покидают ваш компьютер
- Работа без интернета
- Нет API-лимитов и расходов
- Поддержка множества моделей: Llama 3.2, CodeLlama, Mistral и другие

Настройка занимает всего несколько минут. Просто установите Ollama, выберите модель и наслаждайтесь полностью приватным AI-ассистентом.`,
    category: 'Обновления',
    image: '/images/blog/ollama-support.jpg',
    tags: ['privacy', 'ollama', 'local-ai'],
  },
  {
    id: 2,
    title: 'Умный анализ скриншотов: теперь еще быстрее и точнее',
    date: '8 января 2025',
    author: 'Команда Cluely Россия',
    excerpt: 'Улучшенный алгоритм анализа изображений с поддержкой Gemini 2.0 Flash для мгновенных ответов.',
    content: `Мы обновили систему анализа скриншотов с использованием последней модели Gemini 2.0 Flash от Google. Теперь Cluely может:

**Новые возможности:**
- Анализировать сложные диаграммы и схемы
- Распознавать код на любых языках программирования
- Понимать контекст презентаций и документов
- Предлагать решения задач в реальном времени

Скорость обработки увеличилась на 40%, а точность ответов - на 25%. Просто сделайте скриншот (Cmd/Ctrl + H) и получите мгновенный анализ.`,
    category: 'Функции',
    image: '/images/blog/screenshot-analysis.jpg',
    tags: ['features', 'gemini', 'ai'],
  },
  {
    id: 3,
    title: 'Аудио-анализ: транскрипция и умные заметки',
    date: '28 декабря 2024',
    author: 'Команда Cluely Россия',
    excerpt: 'Новая функция обработки аудио позволяет автоматически транскрибировать встречи и создавать умные заметки.',
    content: `Мы добавили мощную функцию обработки аудио! Теперь Cluely может:

**Возможности аудио-анализа:**
- Автоматическая транскрипция речи с высокой точностью
- Создание кратких резюме встреч
- Извлечение ключевых моментов и решений
- Поддержка множества форматов: MP3, WAV, M4A

Идеально подходит для:
- Записей интервью с последующим анализом
- Встреч с автоматическим созданием протокола
- Лекций и вебинаров с конспектами
- Любых аудиозаписей для быстрого поиска информации`,
    category: 'Функции',
    image: '/images/blog/audio-analysis.jpg',
    tags: ['features', 'audio', 'transcription'],
  },
  {
    id: 4,
    title: 'Контекстуальный чат: диалог с памятью',
    date: '20 декабря 2024',
    author: 'Команда Cluely Россия',
    excerpt: 'AI теперь помнит контекст всей беседы, что позволяет вести более естественные и полезные диалоги.',
    content: `Мы улучшили систему чата - теперь Cluely помнит весь контекст разговора! Это означает:

**Что изменилось:**
- AI помнит предыдущие вопросы и ответы
- Можно задавать уточняющие вопросы
- Поддержка длинных диалогов с множеством тем
- Более естественные и релевантные ответы

**Пример использования:**
- Спросите о проблеме в коде
- Получите решение
- Уточните детали реализации
- AI поймет контекст и даст точный ответ

Больше не нужно повторять контекст в каждом сообщении!`,
    category: 'Улучшения',
    image: '/images/blog/contextual-chat.jpg',
    tags: ['improvements', 'chat', 'ai'],
  },
  {
    id: 5,
    title: 'Кроссплатформенная поддержка: Windows, macOS, Linux',
    date: '12 декабря 2024',
    author: 'Команда Cluely Россия',
    excerpt: 'Cluely теперь работает на всех основных операционных системах с нативной производительностью.',
    content: `Мы запустили полную поддержку всех основных платформ! Cluely теперь работает на:

**Поддерживаемые платформы:**
- **Windows 10/11** - полная поддержка с нативными шорткатами
- **macOS** - оптимизировано для всех версий macOS
- **Ubuntu/Linux** - протестировано на всех основных дистрибутивах

**Что улучшено:**
- Нативные горячие клавиши для каждой платформы
- Оптимизация производительности под каждую ОС
- Автоматическое определение настроек
- Единый интерфейс на всех платформах

Теперь вы можете использовать Cluely на любой системе без компромиссов!`,
    category: 'Обновления',
    image: '/images/blog/cross-platform.jpg',
    tags: ['updates', 'cross-platform', 'windows', 'macos', 'linux'],
  },
  {
    id: 6,
    title: 'Невидимое окно: полностью прозрачный интерфейс',
    date: '5 декабря 2024',
    author: 'Команда Cluely Россия',
    excerpt: 'Революционный прозрачный интерфейс делает Cluely практически невидимым во время работы.',
    content: `Мы создали уникальный прозрачный интерфейс, который делает Cluely практически невидимым!

**Особенности:**
- Полностью прозрачное окно, которое не мешает работе
- Всегда поверх всех приложений
- Быстрое скрытие/показ горячими клавишами
- Минималистичный дизайн, который не отвлекает

**Технические детали:**
- Используется Electron с прозрачным фоном
- Оптимизированная производительность
- Поддержка всех режимов отображения
- Автоматическая адаптация под тему системы

Теперь вы можете получать помощь от AI, не отвлекаясь от работы!`,
    category: 'Функции',
    image: '/images/blog/invisible-window.jpg',
    tags: ['features', 'ui', 'design'],
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-yellow-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-slate-900">
              Cluely Россия
            </Link>
            <nav className="flex gap-6">
              <Link href="/" className="text-slate-600 hover:text-slate-900 transition-colors">
                Главная
              </Link>
              <Link href="/blog" className="text-blue-600 font-semibold">
                Блог
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Blog Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Блог Cluely Россия
          </h1>
          <p className="text-xl text-slate-700 max-w-2xl mx-auto mb-2">
            Следите за последними обновлениями, новыми функциями и полезными советами
          </p>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto">
            Российская адаптация <a href="https://cluely.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline font-semibold">оригинального Cluely</a>
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {blogPosts.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
      </main>
    </div>
  )
}


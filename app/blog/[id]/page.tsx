import { notFound } from 'next/navigation'
import Link from 'next/link'

const blogPosts: Record<string, any> = {
  '1': {
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
  '2': {
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
  '3': {
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
  '4': {
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
  '5': {
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
  '6': {
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
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((id) => ({
    id,
  }))
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const post = blogPosts[params.id]
  if (!post) {
    return {
      title: 'Пост не найден',
    }
  }
  return {
    title: `${post.title} | Блог Cluely Россия`,
    description: `${post.excerpt} - Российская адаптация Cluely (cluely.com)`,
    alternates: {
      canonical: `https://cluely.ru/blog/${params.id}`,
      languages: {
        'ru-RU': `https://cluely.ru/blog/${params.id}`,
        'en-US': 'https://cluely.com',
      },
    },
    openGraph: {
      title: `${post.title} | Cluely Россия`,
      description: post.excerpt,
      url: `https://cluely.ru/blog/${params.id}`,
      siteName: 'Cluely Россия',
    },
  }
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts[params.id]

  if (!post) {
    notFound()
  }

  const formatContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => {
      if (paragraph.startsWith('**') && paragraph.includes(':**')) {
        const [title, ...rest] = paragraph.split(':**')
        const titleText = title.replace('**', '').trim()
        return (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              {titleText}
            </h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              {rest.join(':**').split('\n').filter(Boolean).map((item, i) => (
                <li key={i}>{item.replace(/^-\s*/, '').trim()}</li>
              ))}
            </ul>
          </div>
        )
      }
      return (
        <p key={index} className="mb-4 text-slate-700 leading-relaxed">
          {paragraph.replace(/\*\*(.*?)\*\*/g, '$1')}
        </p>
      )
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-yellow-50">
      {}
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

      {}
      <article className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {}
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors"
          >
            <svg
              className="mr-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Вернуться к блогу
          </Link>

          {}
          <div className="flex items-center justify-between mb-6">
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
              {post.category}
            </span>
            <time className="text-slate-500">
              {post.date}
            </time>
          </div>

          {}
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {post.title}
          </h1>

          {}
          <p className="text-slate-600 mb-8 text-lg">
            Автор: <span className="font-semibold text-slate-700">{post.author}</span>
          </p>

          {}
          <div className="relative h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl mb-8 overflow-hidden shadow-lg">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-8xl opacity-20">
                {post.category === 'Обновления' && '🔄'}
                {post.category === 'Функции' && '⚡'}
                {post.category === 'Улучшения' && '✨'}
                {!['Обновления', 'Функции', 'Улучшения'].includes(post.category) && '📝'}
              </div>
            </div>
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <span className="text-white/70 text-lg font-semibold">{post.title}</span>
            </div>
          </div>

          {}
          <div className="prose prose-lg max-w-none mb-8 text-slate-700">
            {formatContent(post.content)}
          </div>

          {}
          <div className="flex flex-wrap gap-2 mb-8 pt-8 border-t border-slate-200">
            {post.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium border border-slate-200"
              >
                #{tag}
              </span>
            ))}
          </div>

          {}
          <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 mb-8 border border-slate-200 shadow-lg">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Поделиться статьей
            </h3>
            <div className="flex gap-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg">
                Twitter
              </button>
              <button className="px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-all shadow-lg">
                Facebook
              </button>
              <button className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-800 transition-all shadow-lg">
                LinkedIn
              </button>
            </div>
          </div>

          {}
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            <svg
              className="mr-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Вернуться к блогу
          </Link>
        </div>
      </article>
    </div>
  )
}


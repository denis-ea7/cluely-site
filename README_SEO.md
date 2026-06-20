# SEO Suflo — карта и чек-лист

Документ описывает SEO-структуру сайта suflo.ru и шаги, которые нужно сделать вручную
(аналитика, вебмастера, внешние площадки).

## 1. Структура страниц

| URL | Назначение | Метаданные |
|-----|-----------|-----------|
| `/` | Главная | `app/layout.tsx` (+ глобальный JSON-LD) |
| `/pricing` | Тарифы + FAQ | `app/pricing/page.tsx` |
| `/download` | Скачать приложение | `app/download/page.tsx` |
| `/use-cases` | Индекс сценариев | `app/use-cases/page.tsx` |
| `/use-cases/ai-interview-assistant` | Посадочная: собеседования | `lib/use-cases.ts` |
| `/use-cases/live-coding-assistant` | Посадочная: live coding | `lib/use-cases.ts` |
| `/use-cases/meeting-assistant` | Посадочная: встречи | `lib/use-cases.ts` |
| `/use-cases/sales-call-assistant` | Посадочная: звонки/продажи | `lib/use-cases.ts` |
| `/blog` + `/blog/<slug>` | Блог (26 статей) | `lib/blog.ts` |
| `/contact` | Контакты | `app/contact/page.tsx` |
| `/privacy` | Политика конфиденциальности (152-ФЗ) | `app/privacy/page.tsx` |
| `/terms` | Условия использования | `app/terms/page.tsx` |
| `/oferta`, `/requisites` | Юридические | существующие |
| `/login` | Алиас → `/auth` (noindex, canonical на `/auth`) | `app/login/page.tsx` |

## 2. Технический SEO (реализовано)

- **Canonical + OG + Twitter** на каждой странице — через `pageMetadata()` в `lib/seo.ts`.
- **metadataBase** = `https://suflo.ru` (относительные OG-ссылки).
- **OG-картинка** 1200×630 — `public/og.png` (исходник `public/og.svg`).
- **JSON-LD** (`components/JsonLd.tsx`):
  - глобально: `Organization`, `WebSite`, `SoftwareApplication` (с офферами тарифов);
  - страницы: `FAQPage`, `BreadcrumbList`, `Article`, `WebPage`.
- **sitemap.xml** (`app/sitemap.ts`) — 40 URL, тянется из данных блога и use-cases.
- **robots.txt** (`app/robots.ts`) — служебные страницы закрыты (`/account`, `/checkout`,
  `/success`, `/reset`, `/login` и т.д.).
- **Один H1 на странице**, осмысленные H2/H3, ЧПУ-слаги в блоге.
- **Верификация** Google + Yandex — `metadata.verification` в `app/layout.tsx`
  (не удалять — иначе подтверждение слетит).

> Деплой-гоча: прод-`Dockerfile` запускает `next start` (не статический экспорт) и теперь
> копирует `public/` в образ (`COPY public ./public`) — иначе `og.png` отдавал бы 404.

## 3. Аналитика — нужно вписать ID (env)

Счётчики уже подключены через `components/Analytics.tsx`, но включаются только при наличии
переменных окружения (в `deploy/.env` и проброс в `docker-compose.yml`, service `site`):

```
NEXT_PUBLIC_YM_ID=<номер счётчика Яндекс.Метрики>
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX   # GA4 measurement id
```

Это `NEXT_PUBLIC_*` — значения зашиваются на этапе сборки, поэтому после правки `.env`
нужно пересобрать образ site.

## 4. Ручные шаги (вне кода)

- [ ] Создать счётчик **Яндекс.Метрики** и **GA4**, вписать ID (см. выше), пересобрать.
- [ ] **Google Search Console** и **Яндекс.Вебмастер**: переотправить `sitemap.xml`
      (добавились use-cases и 20 статей), проверить индексацию.
- [ ] Залить новые статьи в индекс (переобход в Вебмастере).
- [ ] **Площадки** (быстрый трафик): Product Hunt, Reddit, Hacker News, Indie Hackers,
      vc.ru, Хабр, Telegram-чаты — посты в формате кейса, а не рекламы.
- [ ] **Видео** (15–40 сек, экран + голос, CTA download): как помогает на собеседовании,
      live coding demo, Zoom/Meet demo, русское и английское интервью — на YouTube Shorts,
      TikTok, Reels, LinkedIn, X, Telegram.

## 5. Что проверить после деплоя

1. `https://suflo.ru/sitemap.xml` — 40 URL, открывается.
2. `https://suflo.ru/robots.txt` — корректный, со ссылкой на sitemap.
3. `https://suflo.ru/og.png` — отдаётся (200, image/png).
4. Любая страна use-case и пост блога — один H1, есть JSON-LD (валидатор Rich Results).
5. Метатеги верификации Google/Yandex на месте.

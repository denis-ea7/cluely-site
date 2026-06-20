import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import { pageMetadata, breadcrumbLd, CONTACT_EMAIL } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Политика конфиденциальности — Suflo',
  description:
    'Как Suflo обрабатывает и защищает персональные данные пользователей в соответствии с Федеральным законом № 152-ФЗ: какие данные собираем, зачем, кому передаём и как их удалить.',
  path: '/privacy',
})

export default function PrivacyPage() {
  return (
    <main className="bg-app min-h-screen">
      <JsonLd
        data={breadcrumbLd([
          { name: 'Главная', path: '/' },
          { name: 'Конфиденциальность', path: '/privacy' },
        ])}
      />

      <article className="container mx-auto max-w-3xl px-4 pt-32 pb-16 md:pt-40">
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-fg md:text-4xl">
          Политика конфиденциальности
        </h1>
        <p className="mb-10 text-sm text-muted">Редакция от 16 июня 2026 г. · suflo.ru</p>

        <div className="space-y-8 text-[15px] leading-relaxed text-muted">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-fg">1. Кто обрабатывает данные</h2>
            <p>
              Оператором персональных данных является самозанятый Евсеев Денис Николаевич
              (ИНН 200888684367), владелец сервиса Suflo (далее — «мы», «Сервис»). Обработка данных
              ведётся в соответствии с Федеральным законом № 152-ФЗ «О персональных данных».
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-fg">2. Какие данные мы собираем</h2>
            <ul className="mt-2 space-y-1.5">
              <li>— адрес электронной почты, указанный при регистрации;</li>
              <li>— данные о подписке и платежах (тариф, дата, сумма, статус);</li>
              <li>
                — технические данные: cookie, IP-адрес, тип устройства и браузера, события на сайте —
                через системы аналитики Яндекс Метрика и Google Analytics;
              </li>
              <li>
                — содержимое запросов к AI (распознанный текст и скриншоты, отправленные на обработку)
                — в объёме, необходимом для формирования подсказки.
              </li>
            </ul>
            <p className="mt-3">
              Мы не запрашиваем и не храним данные банковских карт — оплату обрабатывает платёжный
              сервис ЮKassa.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-fg">3. Зачем мы обрабатываем данные</h2>
            <ul className="mt-2 space-y-1.5">
              <li>— предоставление доступа к Сервису и работа функций приложения;</li>
              <li>— обработка оплаты, формирование и отправка чеков;</li>
              <li>— связь с пользователем и поддержка;</li>
              <li>— анализ и улучшение качества сервиса, диагностика ошибок.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-fg">4. Кому передаются данные</h2>
            <p>
              Мы не продаём персональные данные. Данные передаются третьим лицам только в объёме,
              необходимом для работы Сервиса:
            </p>
            <ul className="mt-2 space-y-1.5">
              <li>— ЮKassa — для проведения платежей;</li>
              <li>— налоговый орган — для формирования чека (через приложение «Мой налог»);</li>
              <li>
                — поставщики AI-моделей (например, OpenAI) — для обработки запроса и формирования
                ответа;
              </li>
              <li>— Яндекс Метрика и Google Analytics — обезличенная статистика посещений.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-fg">5. Cookie и аналитика</h2>
            <p>
              Сайт использует cookie и системы веб-аналитики для измерения посещаемости и улучшения
              работы. Вы можете отключить cookie в настройках браузера; часть функций сайта при этом
              может работать некорректно.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-fg">6. Сроки хранения</h2>
            <p>
              Персональные данные хранятся, пока действует учётная запись и пока этого требует
              законодательство (в т.ч. налоговое). После прекращения использования Сервиса данные
              удаляются или обезличиваются.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-fg">7. Ваши права</h2>
            <p>
              Вы вправе запросить доступ к своим данным, их исправление или удаление, а также отозвать
              согласие на обработку. Для этого напишите на{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-indigo-400 hover:text-indigo-300">
                {CONTACT_EMAIL}
              </a>
              . Мы ответим в срок, установленный законом.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-fg">8. Изменения политики</h2>
            <p>
              Мы можем обновлять эту политику. Актуальная редакция всегда публикуется на этой странице
              с указанием даты. Продолжая пользоваться Сервисом, вы принимаете действующую редакцию.
            </p>
          </section>
        </div>

        <div className="mt-12 flex flex-wrap gap-4 text-sm font-medium">
          <a href="/oferta/" className="text-indigo-400 hover:text-indigo-300">
            Публичная оферта
          </a>
          <a href="/terms/" className="text-indigo-400 hover:text-indigo-300">
            Условия использования
          </a>
          <a href="/" className="text-indigo-400 hover:text-indigo-300">
            На главную
          </a>
        </div>
      </article>

      <Footer />
    </main>
  )
}

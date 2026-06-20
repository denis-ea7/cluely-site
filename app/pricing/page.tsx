import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'
import Faq from '@/components/Faq'
import JsonLd from '@/components/JsonLd'
import { pageMetadata, faqLd, breadcrumbLd, softwareApplicationLd, type FaqItem } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Цены на Suflo — тарифы AI-суфлёра от 640 ₽',
  description:
    'Тарифы Suflo: Starter — 640 ₽ за 7 дней, Standart — 1 620 ₽ за 30 дней, Plus — 2 980 ₽ за 90 дней. Оплата картой РФ или через СБП, без автопродления, доступ сразу после оплаты.',
  path: '/pricing',
  keywords: 'цена Suflo, тарифы AI суфлёр, стоимость помощника для собеседований, подписка Suflo',
})

const faq: FaqItem[] = [
  {
    question: 'Сколько стоит Suflo?',
    answer:
      'Три тарифа: Starter — 640 ₽ за 7 дней, Standart — 1 620 ₽ за 30 дней (самый популярный), Plus — 2 980 ₽ за 90 дней. Все функции включены в любой тариф, отличается только срок доступа.',
  },
  {
    question: 'Есть ли автопродление?',
    answer:
      'Нет. Подписка разовая на выбранный период и не продлевается автоматически. Продлить доступ можно в любой момент вручную в личном кабинете.',
  },
  {
    question: 'Как оплатить?',
    answer:
      'Онлайн банковской картой РФ или через Систему быстрых платежей (СБП). Оплату обрабатывает ЮKassa, после успешной оплаты доступ открывается автоматически, обычно за несколько минут.',
  },
  {
    question: 'Чем отличаются тарифы по функциям?',
    answer:
      'Ничем. Во всех тарифах доступны подсказки в реальном времени, невидимость при демонстрации экрана, анализ скриншотов и топовые AI-модели. Разница только в длительности доступа.',
  },
  {
    question: 'Можно ли вернуть деньги?',
    answer:
      'Если доступ не был предоставлен по нашей вине или сервис недоступен по техническим причинам на нашей стороне, можно запросить возврат за неиспользованный период на contact@suflo.ru.',
  },
  {
    question: 'Нужна ли подписка на отдельную страну или VPN?',
    answer:
      'Нет. Suflo работает в России и СНГ напрямую, без VPN и зарубежных аккаунтов, с оплатой российской картой.',
  },
]

export default function PricingPage() {
  return (
    <main className="bg-app bg-grid min-h-screen overflow-hidden">
      <JsonLd
        data={[
          softwareApplicationLd(),
          faqLd(faq),
          breadcrumbLd([
            { name: 'Главная', path: '/' },
            { name: 'Цены', path: '/pricing' },
          ]),
        ]}
      />

      <div className="container mx-auto px-4 pt-32 text-center md:pt-40">
        <h1 className="text-balance text-4xl font-extrabold tracking-tight md:text-6xl">
          Цены на <span className="text-gradient">Suflo</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-balance text-lg text-muted">
          Один набор возможностей во всех тарифах — выбираете только срок доступа.
          Оплата картой РФ или через СБП, без автопродления.
        </p>
      </div>

      <Pricing />

      <div className="container mx-auto px-4 py-16">
        <Faq items={faq} title="Вопросы об оплате и тарифах" />
      </div>

      <Footer />
    </main>
  )
}

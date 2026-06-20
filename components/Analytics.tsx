// Web analytics: Yandex Metrika + Google Analytics 4.
//
// Both are driven by env vars and render nothing unless the id is set, so the
// site stays clean in dev / before the counters exist:
//   NEXT_PUBLIC_YM_ID  — Yandex Metrika counter number (e.g. 98765432)
//   NEXT_PUBLIC_GA_ID  — GA4 measurement id (e.g. G-XXXXXXXXXX)
//
// This is a static export, so the snippets are inlined at build time.

// Analytics ids for suflo.ru (created 2026-06). Env vars override these defaults.
const YM_ID = process.env.NEXT_PUBLIC_YM_ID || '110024121'
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-30FBXWFEJ6'

export default function Analytics() {
  return (
    <>
      {YM_ID && (
        <>
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");ym(${YM_ID},"init",{clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:true});`,
            }}
          />
          <noscript>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://mc.yandex.ru/watch/${YM_ID}`}
                style={{ position: 'absolute', left: '-9999px' }}
                alt=""
              />
            </div>
          </noscript>
        </>
      )}

      {GA_ID && (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`,
            }}
          />
        </>
      )}
    </>
  )
}

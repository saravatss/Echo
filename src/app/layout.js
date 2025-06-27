import "./globals.css";
import Script from 'next/script';
import YMetrikaComponent from "@/external/YMetrica";
import { Suspense } from 'react'

export const metadata = {
  title: "Echo",
  description: "Медиа-сервис о культуре малочисленных народов России",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
          <Script id="metrika-counter" strategy="afterInteractive">
      {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
    
        ym(100354197, "init", {
              defer: true,
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
        });`
      }
    </Script>
      </head>
      <body>
        <Suspense fallback={<></>}>
          <YMetrikaComponent />
        </Suspense>
        {children}
      </body>
    </html>
  );
};

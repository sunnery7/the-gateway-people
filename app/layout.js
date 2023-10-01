import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The Gateway People',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=UA-176268658-1" />
        <Script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'UA-176268658-1');`}
        </Script>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9344411862068499" crossorigin="anonymous"></script>

        <Script async src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
        {/* <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" async /> */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

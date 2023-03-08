import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <meta charSet="UTF-8" />
          <title>One Love Ethiopia | Tour & Car Rent</title>
          <meta name="description" content="One Love Ethiopia is a reputable tour and car rental company based in Ethiopia. With a focus on customer satisfaction, we offer a wide range of services including guided tours, airport transfers, and car rental services" />
          <meta name="keywords" content="Ethiopia, travelling, tour, hike, tourism" />
          <meta name="author" content="One Love Ethiopia" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="canonical" href="https://www.Oneloveethiopiatours.com/" />
          {/* <!-- Add Open Graph tags for social media sharing --> */}
          <meta property="og:title" content="One Love Ethiopia | Tour & Car Rent" />
          <meta property="og:description" content="One Love Ethiopia is a reputable tour and car rental company based in Ethiopia. With a focus on customer satisfaction, we offer a wide range of services including guided tours, airport transfers, and car rental services" />
          <meta property="og:image" content="https://Oneloveethiopiatours.com/_next/image?url=%2Fimages%2Flogo%2Flogo_text_light.png&w=640&q=75" />
          <meta property="og:url" content="https://www.Oneloveethiopiatours.com/" />
          <meta property="og:type" content="website" />
          {/* <!-- Add Twitter Card tags for social media sharing --> */}
          <meta name="twitter:title" content="One Love Ethiopia | Tour & Car Rent" />
          <meta name="twitter:description" content="One Love Ethiopia is a reputable tour and car rental company based in Ethiopia. With a focus on customer satisfaction, we offer a wide range of services including guided tours, airport transfers, and car rental services" />
          <meta name="twitter:image" content="https://Oneloveethiopiatours.com/_next/image?url=%2Fimages%2Flogo%2Flogo_text_light.png&w=640&q=75" />
          <meta name="twitter:card" content="summary_large_image" />
          {/* <!-- Add Favicon --> */}
          <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

import React from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";

import {GA_TRACKING_ID} from "../utils/gtag";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return {...initialProps};
  }

  render(): any {
    return (
      <Html lang="en">
        <Head>
          <link rel="canonical" href="https://www.taylorjeandev.netlify.app/" />
          <link rel="shortcut icon" href="/pwa/headshot.png" type="/pwa/headshot.png" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="description"
            content="Portfolio, side projects, the blog of Taylor Jean and among other things"
          />
          <meta property="og:locale" content="en" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Taylor Jean - Developer, Creator"
          />
          <meta property="og:site_name" content="Taylor Jean" />
          <meta
            property="og:description"
            content="Portfolio, side projects, the blog of Taylor Jean and among other things"
          />
          <meta property="og:url" content="https://personal-blog-tau-liard.vercel.app/" />
          <meta
            property="og:image"
            content="/themecard.png"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="730" />
          <meta name="twitter:creator" content="@taylorjeandev" />
          <meta name="twitter:site" content="@taylorjeandev" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:image"
            content="/themecard.png"
          />
          <meta name="theme-color" content="#ffffff" />
          <link rel="shortcut icon" href="/pwa/headshot.png" />
          <link rel="apple-touch-icon" href="/pwa/headshot.png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

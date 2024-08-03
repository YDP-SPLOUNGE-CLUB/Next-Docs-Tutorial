'use client';

import CodeSnippet from "@/component/JKS/misc/CodeSnippet/CodeSnippet";

const LocalePage = () => {

  const code = `
    yarn add next-i18next;
    
    // next-i18next.config.js
    module.exports = {
      i18n: {
        defaultLocale: 'en',
        locales: ['en', 'ko'],
      },
    };
    
    import { AppProps } from 'next/app';
    import { appWithTranslation } from 'next-i18next';
    
    function MyApp({ Component, pageProps }: AppProps) {
      return <Component {...pageProps} />;
    }
    
    // 중요
    export default appWithTranslation(MyApp);
  `

  return <div>
    <CodeSnippet codeString={code}/>
  </div>;
}

export default LocalePage;
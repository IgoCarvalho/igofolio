import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Poppins } from 'next/font/google';
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '700'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Igo Carvalho - Portfolio</title>
        <meta
          name="description"
          content="Site portfolio de Igo Carvalho, Desenvolvedor Front-end, com pouco mais de um ano de experiencia, e em busca de uma recolocação no mercado de trabalho, atua com React.js, Next.js, Node.js e Typescript"
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, Desenvolvedor Front-end, Back-end, Node.js, React.js, Typescript"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />

        <style>
          {`
            html {
              font-family: ${poppins.style.fontFamily};
            }
          `}
        </style>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

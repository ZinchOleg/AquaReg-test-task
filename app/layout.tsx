'use client';

import './globals.css';
import { Providers } from '@Redux/provider';
import { ChakraProvider } from '@chakra-ui/react';
import { CacheProvider } from '@chakra-ui/next-js';
import Header from '@components/header';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: [ 'latin' ]
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={ montserrat.className }>
      <CacheProvider>
        <ChakraProvider>
          <Providers>
            <Header />
            { children }
          </Providers>
        </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}

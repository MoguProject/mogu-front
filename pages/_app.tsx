import type { AppContext, AppProps } from 'next/app';
import { useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';
import GlobalStyles from '../styles/globalStyle';
import { theme } from '../styles/theme';
import Head from 'next/head';
import axios from 'axios';
import cookies from 'next-cookies';
import { setToken } from 'utils/setToken';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <GlobalStyles />
          <Head>
            <title>MoGu</title>
            <meta
              name="description"
              content="스터디, 사이드 프로젝트 팀원을 구하는 가장 쉬운 방법. MoGu"
            />
            <meta
              name="viewport"
              content="initial-scale=1.0,width=device-width"
            />
          </Head>
          <Component {...pageProps} />
          <ReactQueryDevtools />
        </RecoilRoot>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;

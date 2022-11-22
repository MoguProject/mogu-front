import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/globalStyle';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
        <ReactQueryDevtools />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;

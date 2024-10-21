import { useEffect } from 'react';
import { useRouter } from 'next/router';
import ReactGA from 'react-ga4';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    ReactGA.initialize('G-X9KP11WVHX'); 
    const handleRouteChange = (url: string) => {
      ReactGA.send({ hitType: "pageview", page: url });
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}

export default MyApp;

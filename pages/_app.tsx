import "../styles/antd.less";
import type { AppProps } from "next/app";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import useLoadingPage from "../logic/hooks/loading";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  useLoadingPage();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="container">
          <Component {...pageProps} />
        </div>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;

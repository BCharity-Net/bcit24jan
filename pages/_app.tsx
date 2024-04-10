// pages/_app.tsx
import { AppProps } from "next/app";
import { NextIntlClientProvider } from "next-intl";
import { useRouter } from "next/router";

const App = ({ Component, pageProps }: AppProps) => {
    const router = useRouter();
    return (
      <NextIntlClientProvider
        locale={router.locale}
        messages={pageProps.messages}
      >
        <Component {...pageProps} />
      </NextIntlClientProvider>
    );
};

export default App;

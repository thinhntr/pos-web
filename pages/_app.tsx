import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Point of sale</title>
                <link
                    rel="icon"
                    type="image/x-icon"
                    href="/images/favicon.png"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

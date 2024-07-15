import { Poppins } from 'next/font/google';
import '@/styles/globals.css';
import Providers from './providers';
import PageLayout from '@/components/layout';
import { LANG_NAMESPACE } from '@/data/lang-namespace-constant';
import initTranslations from '../i18n';
import TranslationsProvider from '@/components/TranslationsProvider';
import { cn } from '@/lib/utils';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'example',
};
const i18nNamespaces = [LANG_NAMESPACE.LANG];

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/next.svg" />
      </head>
      <body className={cn(` ${poppins.className}`)}>
        <Providers>
          <TranslationsProvider namespaces={i18nNamespaces} locale={locale} resources={resources}>
            <PageLayout>{children}</PageLayout>
          </TranslationsProvider>
        </Providers>
      </body>
    </html>
  );
}

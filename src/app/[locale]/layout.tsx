import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {NextIntlClientProvider} from 'next-intl';
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale
} from 'next-intl/server';
import Navigation from '@/components/Navigation';

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  
  return (
    <html className="h-full" lang={locale}>
    <body>
      <NextIntlClientProvider messages={messages}>
        <Navigation />
        {children}
      </NextIntlClientProvider>
    </body>
  </html>
  );
}

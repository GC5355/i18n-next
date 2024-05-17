import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}

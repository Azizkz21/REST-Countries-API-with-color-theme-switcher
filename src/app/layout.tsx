import Providers from "../components/ThemeProvider";
import Header from "../layout/Header";
import StoreProvider from "../store/provider/StoreProvider";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="page" lang="en" suppressHydrationWarning>
      <body className="page-body">
        <StoreProvider>
          <Providers>
            <Header />
            <main className="grow bg-lightBg px-4 py-10 dark:bg-darkBg">
              {children}
            </main>
          </Providers>
        </StoreProvider>
      </body>
    </html>
  );
}

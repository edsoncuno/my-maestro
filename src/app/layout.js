import "./globals.css";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export const metadata = {
  title: "My Maestro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import Header from "./components/layoutComponents/Header";
import "./globals.css";
import { body } from "./fonts";
import Footer from "./components/layoutComponents/Footer";

export const metadata = {
  title: "Benjamin Alcade, Web Developer",
  description: "Benjamin Alcade is a web developer based in France.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body style={body.style}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

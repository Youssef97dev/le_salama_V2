import localFont from "next/font/local";
import "./globals.css";

const helv = localFont({
  src: "./fonts/HelveticaNeueLight.woff",
  variable: "--font-helvetica",
  weight: "100 900",
});
const helvThin = localFont({
  src: "./fonts/HelveticaNeueThin.woff",
  variable: "--font-helvetica-thin",
  weight: "100 900",
});

export const metadata = {
  title: "Le Salama",
  description: "Moroccan soul food",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </head>
      <body className={`${helv.variable} ${helvThin.variable} `}>
        {children}
      </body>
    </html>
  );
}

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

const garamondBold = localFont({
  src: "./fonts/AGaramondPro-Bold.woff",
  variable: "--font-garamond-bold",
  weight: "100 900",
});

const garamondBoldItalic = localFont({
  src: "./fonts/AGaramondPro-BoldItalic.woff",
  variable: "--font-garamond-bold-italic",
  weight: "100 900",
});

const garamondItalic = localFont({
  src: "./fonts/AGaramondPro-Italic.woff",
  variable: "--font-garamond-italic",
  weight: "100 900",
});

const garamondRegular = localFont({
  src: "./fonts/AGaramondPro-Regular.woff",
  variable: "--font-garamond-regular",
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
      <body
        className={`${garamondBold.variable} ${garamondRegular.variable}  `}
      >
        {children}
      </body>
    </html>
  );
}

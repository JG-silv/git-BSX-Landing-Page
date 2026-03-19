import { Open_Sans, Roboto, Inter, Poppins, Source_Sans_3 } from "next/font/google";

export const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-source-sans-3',
  display: 'swap',
});

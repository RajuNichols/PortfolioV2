import "./globals.css";
import { Poppins } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Raju Nichols",
  description: "Raju Nichols Portfolio",
  icons: {
    icon: "/metest.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {

  return (
    <html lang="en">
      <body className={poppins.className}>
          {children}<Analytics/>
      </body>
    </html>
  );
}

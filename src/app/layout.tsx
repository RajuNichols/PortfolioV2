"use client"
import "./globals.css";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { useTheme } from "next-themes";

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
        <ThemeProvider enableSystem={true} attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

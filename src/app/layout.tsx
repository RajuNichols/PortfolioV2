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
  const { theme, setTheme } = useTheme();

  const switchTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider enableSystem={true} attribute="class">
          <button onClick={switchTheme}>
            Toggle Theme
          </button>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

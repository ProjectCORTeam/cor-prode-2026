import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Navbar } from "@/components/ui/Navbar";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Prode Mundial 2026 · COR",
  description:
    "El prode interno de COR para el Mundial FIFA 2026. 48 equipos, 12 grupos, un solo campeón. Value your ideas.",
  icons: {
    icon: "/cor-symbol.png",
  },
};

const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('cor-theme');
    var dark = stored === 'dark' || (stored !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (dark) document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${poppins.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-cor-border px-4 py-6 text-center text-xs text-cor-muted">
          COR · Make it count
        </footer>
      </body>
    </html>
  );
}

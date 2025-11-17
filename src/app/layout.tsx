import { ThemeProvider } from "@/components/theme-provider";
import { inter, raleway, signika } from "@/lib/fonts";
import { constructMetadata } from "@/lib/utils";
import "./globals.css";
import Navbar from "@/components/navbar";
import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${raleway.variable} ${signika.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="container mx-auto max-w-3xl overflow-hidden px-4 sm:px-6 lg:px-8 py-12">
            <TooltipProvider delayDuration={0}>
              {children}
              <Navbar />
            </TooltipProvider>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

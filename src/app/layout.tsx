import { ThemeProvider } from "@/components/theme-provider";
import { inter, raleway, signika } from "@/lib/fonts";
import { constructMetadata } from "@/lib/utils";
import "./globals.css";
import Navbar from "@/components/navbar";
import { TooltipProvider } from "@/components/ui/tooltip";
import Footer from "@/components/footer";

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
          <main className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
          </main>

          <Navbar />

          <footer className="w-full mt-10">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <Footer />
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}

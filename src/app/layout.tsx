import "./globals.css";
import { inter, raleway, signika } from "@/lib/fonts";
import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${raleway.variable} ${signika.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

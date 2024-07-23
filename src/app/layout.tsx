import { ReactQueryClientProvider } from "@/app/components/ReactQueryClientProvider";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <html lang="en" data-theme="light">
        <head>
          <title>Top Ten</title>
          <link rel="icon" href="/logo.svg" />
        </head>
        <body>{children}</body>
      </html>
    </ReactQueryClientProvider>
  );
}

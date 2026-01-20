import "./globals.css";

export const metadata = {
  title: "Web3 Portfolio",
  description: "Build the future with Web3",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

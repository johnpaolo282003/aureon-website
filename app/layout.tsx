import "./globals.css";

export const metadata = {
  title: "Aureon — Excellence in Every Vial",
  description:
    "Aureon — precision, scientific presentation, consistency, and attention to detail.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

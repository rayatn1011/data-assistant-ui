import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Assistant UI Modal",
  description: "Data Assistant UI Modal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

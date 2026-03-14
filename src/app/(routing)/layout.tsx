import type { Metadata } from "next";
import { AppComponent } from "../app.component";
import "@/styles/styles.scss";

export const metadata: Metadata = {
  title: "Riley Lawson - Portfolio",
  description: "Modernized Next.js React Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppComponent>{children}</AppComponent>;
}

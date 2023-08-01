import StyledComponentsRegistry from "@/lib/AntdRegistry";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <div className="relative">
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </div>
      </body>
    </html>
  );
}
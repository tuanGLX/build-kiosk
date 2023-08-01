import Footer from "@/modules/layout/templates/footer";
import Header from "@/modules/layout/templates/header/Header";
import React from "react";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}

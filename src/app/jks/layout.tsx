import type {Metadata} from "next";
import Header from "@/component/JKS/layout/Header/Header";
import {Providers} from "@/common/provider/provider";

export const metadata: Metadata = {
  title: "Home Route",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Providers>
        <Header/>
        {children}
      </Providers>
    </div>
  );
}

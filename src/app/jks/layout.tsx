import type {Metadata} from "next";
import Header from "@/component/JKS/layout/Header/Header";

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
      <Header />
      {children}
    </div>
  );
}

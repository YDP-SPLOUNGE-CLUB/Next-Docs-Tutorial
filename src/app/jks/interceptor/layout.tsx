import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function NexPageLayout({children, modal}: LayoutProps) {

  return (
    <div>
      {modal}
      {children}
    </div>
  )
}

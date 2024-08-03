'use client'
import React from "react";
import {useSelectedLayoutSegment} from "next/navigation";

interface LayoutProps {
  children: React.ReactNode;
  left: React.ReactNode;
  right: React.ReactNode;
}


export default function Layout({left, children, right}: LayoutProps) {
  const segment = useSelectedLayoutSegment();

  return (
    <div>
      {left}
      {children}
      {right}
      <div>
        {segment || ''}{`<-`} Segment
      </div>
    </div>
  )
}

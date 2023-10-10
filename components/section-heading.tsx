import React from 'react';

type SectionHeadingProps = {
    children:React.ReactNode;
}
export default function SectionHeading({children}:SectionHeadingProps) {
  return (
    <h2 className = "text-3x1 font-medium text-[1.8rem] mb-8 text-center">{children}</h2>
  )
}

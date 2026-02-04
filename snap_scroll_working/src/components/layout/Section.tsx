import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ children, className = '', id }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative w-full h-screen snap-start snap-always overflow-hidden ${className}`}
    >
      {children}
    </section>
  );
}

import { ReactNode } from 'react'
import { Squares } from "./squares-background"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen overflow-hidden bg-black relative">
      <div className="absolute inset-0 z-10">
        <Squares
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          borderColor="#333"
          hoverFillColor="#222"
        />
      </div>
      <header className="fixed top-0 left-0 z-30 p-6">
        <span className="text-2xl font-bold tracking-tight">
          <span className="text-[#E50914]">Кино</span><span className="text-white">микс</span>
        </span>
      </header>
      <div className="relative z-20 h-full">
        {children}
      </div>
    </div>
  )
}
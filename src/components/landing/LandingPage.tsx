import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Section from './Section'
import Layout from './Layout'
import RegisterModal from './RegisterModal'
import { sections } from './sections'

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState(0)
  const [showRegister, setShowRegister] = useState(false)
  const [userName, setUserName] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ container: containerRef })
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = containerRef.current.scrollTop
        const windowHeight = window.innerHeight
        const newActiveSection = Math.floor(scrollPosition / windowHeight)
        setActiveSection(newActiveSection)
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  const handleNavClick = (index: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: index * window.innerHeight,
        behavior: 'smooth'
      })
    }
  }

  return (
    <Layout>
      <RegisterModal
        open={showRegister}
        onClose={() => setShowRegister(false)}
        onSuccess={(name) => setUserName(name)}
      />
      {userName ? (
        <div className="fixed top-0 right-12 z-30 h-16 flex items-center gap-2">
          <span className="text-sm text-white/50">👤</span>
          <span className="text-sm font-medium text-white">{userName}</span>
          <button
            onClick={() => setUserName(null)}
            className="text-xs text-white/40 hover:text-white/70 transition-colors ml-1"
          >
            Выйти
          </button>
        </div>
      ) : (
        <button
          onClick={() => setShowRegister(true)}
          className="fixed top-0 right-12 z-30 h-16 flex items-center text-sm font-medium text-white/70 hover:text-white transition-colors"
        >
          Войти
        </button>
      )}
      <nav className="fixed top-0 right-0 h-screen flex flex-col justify-center z-30 p-4">
        {sections.map((section, index) => (
          <button
            key={section.id}
            className={`w-3 h-3 rounded-full my-2 transition-all ${
              index === activeSection ? 'bg-white scale-150' : 'bg-gray-600'
            }`}
            onClick={() => handleNavClick(index)}
          />
        ))}
      </nav>
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-white origin-left z-30"
        style={{ scaleX }}
      />
      <div
        ref={containerRef}
        className="h-full overflow-y-auto snap-y snap-mandatory"
      >
        {sections.map((section, index) => (
          <Section
            key={section.id}
            {...section}
            isActive={index === activeSection}
            onButtonClick={() => setShowRegister(true)}
          />
        ))}
      </div>
    </Layout>
  )
}
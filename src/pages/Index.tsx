import { LandingPage } from '@/components/landing'

interface IndexProps {
  onLogin: (name: string) => void
}

const Index = ({ onLogin }: IndexProps) => {
  return <LandingPage onLogin={onLogin} />
}

export default Index
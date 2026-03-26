import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Icon from '@/components/ui/icon'

interface RegisterModalProps {
  open: boolean
  onClose: () => void
}

export default function RegisterModal({ open, onClose }: RegisterModalProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onClose()
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            className="relative bg-[#111] border border-white/10 rounded-2xl p-8 w-full max-w-md"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
            >
              <Icon name="X" size={20} />
            </button>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-1">
                <span className="text-[#E50914]">Кино</span>микс
              </h2>
              <p className="text-neutral-400">Создайте аккаунт и начните смотреть</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Ваше имя"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-neutral-500 focus:border-[#E50914] h-12"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-neutral-500 focus:border-[#E50914] h-12"
                />
              </div>
              <div>
                <Input
                  type="password"
                  placeholder="Пароль"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-neutral-500 focus:border-[#E50914] h-12"
                />
              </div>
              <Button
                type="submit"
                className="w-full h-12 bg-[#E50914] hover:bg-[#c1070f] text-white font-semibold text-base mt-2"
              >
                Начать смотреть
              </Button>
            </form>

            <p className="text-center text-neutral-500 text-sm mt-6">
              Уже есть аккаунт?{' '}
              <button className="text-[#E50914] hover:underline">Войти</button>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

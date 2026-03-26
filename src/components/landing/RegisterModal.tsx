import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Icon from '@/components/ui/icon'
import func2url from '../../../backend/func2url.json'

interface RegisterModalProps {
  open: boolean
  onClose: () => void
}

export default function RegisterModal({ open, onClose }: RegisterModalProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await fetch(func2url.register, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      })
      const data = JSON.parse(await res.text())
      if (!res.ok) {
        setError(data.error || 'Ошибка регистрации')
      } else {
        setSuccess(true)
        setTimeout(() => { onClose(); setSuccess(false) }, 2000)
      }
    } catch {
      setError('Нет соединения с сервером')
    } finally {
      setLoading(false)
    }
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

            {success ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-3">🎬</div>
                <p className="text-white font-semibold text-lg">Добро пожаловать!</p>
                <p className="text-neutral-400 mt-1">Аккаунт создан успешно</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Ваше имя"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-neutral-500 focus:border-[#E50914] h-12"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-neutral-500 focus:border-[#E50914] h-12"
                />
                <Input
                  type="password"
                  placeholder="Пароль (минимум 6 символов)"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-neutral-500 focus:border-[#E50914] h-12"
                />
                {error && <p className="text-red-400 text-sm">{error}</p>}
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 bg-[#E50914] hover:bg-[#c1070f] text-white font-semibold text-base mt-2"
                >
                  {loading ? 'Регистрация...' : 'Начать смотреть'}
                </Button>
              </form>
            )}

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
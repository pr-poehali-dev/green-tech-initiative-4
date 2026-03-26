import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icon'
import { Squares } from '@/components/landing/squares-background'
import { MOVIES, type Movie } from '@/data/movies'

interface DashboardProps {
  userName: string
  onLogout: () => void
  onMovieSelect: (movie: Movie) => void
}

const CATEGORIES = [
  { icon: 'Flame', label: 'В тренде' },
  { icon: 'Star', label: 'Топ фильмы' },
  { icon: 'Tv', label: 'Сериалы' },
  { icon: 'Laugh', label: 'Комедии' },
  { icon: 'Swords', label: 'Боевики' },
  { icon: 'Heart', label: 'Мелодрамы' },
]

export default function Dashboard({ userName, onLogout, onMovieSelect }: DashboardProps) {
  return (
    <div className="h-screen overflow-hidden bg-black relative">
      <div className="absolute inset-0 z-0 opacity-30">
        <Squares direction="diagonal" speed={0.3} squareSize={40} borderColor="#222" />
      </div>

      <div className="relative z-10 h-full flex flex-col">
        {/* Шапка */}
        <header className="flex items-center justify-between px-8 py-5 border-b border-white/5">
          <span className="text-xl font-bold tracking-tight">
            <span className="text-[#E50914]">Кино</span><span className="text-white">микс</span>
          </span>
          <div className="flex items-center gap-4">
            <span className="text-sm text-white/60">Привет, <span className="text-white font-medium">{userName}</span>!</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={onLogout}
              className="text-white/50 hover:text-white hover:bg-white/5"
            >
              <Icon name="LogOut" size={16} />
              <span className="ml-2">Выйти</span>
            </Button>
          </div>
        </header>

        {/* Контент */}
        <main className="flex-1 overflow-y-auto px-8 py-8">
          {/* Приветствие */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Что будем смотреть?
            </h1>
            <p className="text-neutral-500">Выберите жанр или посмотрите подборку для вас</p>
          </motion.div>

          {/* Категории */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-10"
          >
            <h2 className="text-white font-semibold mb-4">Жанры</h2>
            <div className="flex flex-wrap gap-3">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/70 hover:border-[#E50914] hover:text-white transition-all text-sm"
                >
                  <Icon name={cat.icon as Parameters<typeof Icon>[0]['name']} size={14} />
                  {cat.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Подборка фильмов */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h2 className="text-white font-semibold mb-4">Рекомендуем вам</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {MOVIES.map((movie, i) => (
                <motion.div
                  key={movie.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => onMovieSelect(movie)}
                >
                  <div className="aspect-[2/3] rounded-xl border border-white/10 group-hover:border-[#E50914] transition-all mb-2 relative overflow-hidden">
                    <img
                      src={movie.poster}
                      alt={movie.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                      <div className="flex items-center gap-1">
                        <Icon name="Play" size={14} className="text-white" />
                        <span className="text-white text-xs font-medium">Смотреть</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-white text-sm font-medium truncate">{movie.title}</p>
                  <p className="text-neutral-500 text-xs">{movie.year} · {movie.genre}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  )
}

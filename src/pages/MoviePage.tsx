import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icon'
import { type Movie } from '@/data/movies'

interface MoviePageProps {
  movie: Movie
  onBack: () => void
}

export default function MoviePage({ movie, onBack }: MoviePageProps) {
  return (
    <div className="h-screen overflow-hidden bg-black relative flex flex-col">
      {/* Фоновый постер с блюром */}
      <div className="absolute inset-0 z-0">
        <img src={movie.poster} alt="" className="w-full h-full object-cover opacity-20 blur-xl scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
      </div>

      {/* Шапка */}
      <header className="relative z-10 flex items-center justify-between px-8 py-5 border-b border-white/5">
        <span className="text-xl font-bold tracking-tight">
          <span className="text-[#E50914]">Кино</span><span className="text-white">микс</span>
        </span>
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
        >
          <Icon name="ArrowLeft" size={16} />
          Назад
        </button>
      </header>

      {/* Контент */}
      <main className="relative z-10 flex-1 overflow-y-auto">
        <div className="flex flex-col md:flex-row gap-10 px-8 py-10 max-w-5xl">
          {/* Постер */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="shrink-0"
          >
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-56 rounded-2xl shadow-2xl border border-white/10"
            />
          </motion.div>

          {/* Информация */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs text-white/50 border border-white/10 rounded-full px-3 py-1">{movie.genre}</span>
              <span className="text-xs text-white/50">{movie.year}</span>
              <span className="text-xs text-white/50">{movie.duration}</span>
              <span className="flex items-center gap-1 text-xs text-yellow-400">
                <Icon name="Star" size={12} />
                {movie.rating}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
              {movie.title}
            </h1>
            <p className="text-neutral-400 text-sm mb-6">Режиссёр: {movie.director}</p>

            <p className="text-neutral-300 text-base leading-relaxed mb-8 max-w-xl">
              {movie.description}
            </p>

            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-[#E50914] hover:bg-[#c1070f] text-white font-semibold px-8 gap-2"
              >
                <Icon name="Play" size={18} />
                Смотреть
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white bg-white/5 hover:bg-white/10 gap-2"
              >
                <Icon name="Plus" size={18} />
                В список
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}

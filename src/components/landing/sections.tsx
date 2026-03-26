import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-white">Доступ открыт</Badge>,
    title: "Кино без границ.",
    showButton: true,
    buttonText: 'Смотреть бесплатно'
  },
  {
    id: 'about',
    title: 'Почему мы?',
    content: 'Тысячи фильмов и сериалов в одном месте — без рекламы, без перебоев, в отличном качестве. Просто включи и смотри.'
  },
  {
    id: 'features',
    title: 'Всё для просмотра',
    content: 'HD и 4K качество, субтитры на любом языке, удобный поиск и персональные рекомендации — платформа подстраивается под тебя.'
  },
  {
    id: 'testimonials',
    title: 'Миллионы зрителей',
    content: 'Блокбастеры, авторское кино, классика и новинки — у нас найдётся фильм для любого настроения и любой компании.'
  },
  {
    id: 'join',
    title: 'Начни смотреть сегодня',
    content: 'Зарегистрируйся бесплатно и получи доступ к полной библиотеке фильмов прямо сейчас. Без скрытых платежей.',
    showButton: true,
    buttonText: 'Начать просмотр'
  },
]
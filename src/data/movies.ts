export interface Movie {
  id: string
  title: string
  year: string
  genre: string
  poster: string
  description: string
  duration: string
  rating: string
  director: string
  youtubeId: string
}

export const MOVIES: Movie[] = [
  {
    id: 'dune2',
    title: 'Дюна: Часть 2',
    year: '2024',
    genre: 'Фантастика',
    poster: 'https://cdn.poehali.dev/projects/6fc5da2f-3da4-4543-ba61-efded66119c1/files/fa6138ee-1c14-4737-bc93-35a89f5080d1.jpg',
    description: 'Пол Атрейдес объединяется с Чани и фрименами, чтобы начать священную войну против тех, кто уничтожил его семью. Оказавшись перед выбором между любовью жизни и судьбой вселенной, он стремится предотвратить ужасное будущее, которое только он способен предвидеть.',
    duration: '2ч 46м',
    rating: '8.5',
    director: 'Дени Вильнёв',
    youtubeId: 'Way9Dexny3w',
  },
  {
    id: 'oppenheimer',
    title: 'Оппенгеймер',
    year: '2023',
    genre: 'Драма',
    poster: 'https://cdn.poehali.dev/projects/6fc5da2f-3da4-4543-ba61-efded66119c1/files/57d59f71-53f8-4e7d-9198-0cc138780766.jpg',
    description: 'История американского физика Роберта Оппенгеймера и его роли в разработке атомной бомбы в ходе Манхэттенского проекта. Триумф науки, который навсегда изменил мир и судьбу самого учёного.',
    duration: '3ч 0м',
    rating: '8.9',
    director: 'Кристофер Нолан',
    youtubeId: 'uYPbbksJxIg',
  },
  {
    id: 'avengers',
    title: 'Мстители',
    year: '2023',
    genre: 'Боевик',
    poster: 'https://cdn.poehali.dev/projects/6fc5da2f-3da4-4543-ba61-efded66119c1/files/94e3de6f-4821-4e14-a446-f8dd9f54e1c8.jpg',
    description: 'Величайшие герои Земли объединяются, чтобы противостоять угрозе, с которой ни один из них не смог бы справиться в одиночку. Эпическое сражение за судьбу всей вселенной.',
    duration: '2ч 23м',
    rating: '8.0',
    director: 'Джосс Уидон',
    youtubeId: 'eOrNdBpGMv8',
  },
  {
    id: 'interstellar',
    title: 'Интерстеллар',
    year: '2014',
    genre: 'Фантастика',
    poster: 'https://cdn.poehali.dev/projects/6fc5da2f-3da4-4543-ba61-efded66119c1/files/83320f88-2adc-49d1-9ac4-d8386b82d381.jpg',
    description: 'Команда исследователей совершает путешествие сквозь червоточину в пространстве в попытке обеспечить выживание человечества. Любовь — единственная сила, способная преодолеть границы пространства и времени.',
    duration: '2ч 49м',
    rating: '8.7',
    director: 'Кристофер Нолан',
    youtubeId: 'zSWdZVtXT7E',
  },
  {
    id: 'knives-out',
    title: 'Достать ножи',
    year: '2019',
    genre: 'Триллер',
    poster: 'https://cdn.poehali.dev/projects/6fc5da2f-3da4-4543-ba61-efded66119c1/files/c4094440-c389-417e-94d6-e1997e0c1b24.jpg',
    description: 'Знаменитый детектив расследует смерть патриарха богатой семьи. Блестящее переосмысление жанра детективной истории с неожиданными поворотами и острым социальным юмором.',
    duration: '2ч 10м',
    rating: '7.9',
    director: 'Райан Джонсон',
    youtubeId: 'qGqiHJTsRkQ',
  },
  {
    id: 'parasite',
    title: 'Паразиты',
    year: '2019',
    genre: 'Драма',
    poster: 'https://cdn.poehali.dev/projects/6fc5da2f-3da4-4543-ba61-efded66119c1/files/a5840a40-72ae-4018-91bf-883168ee00d1.jpg',
    description: 'Бедная корейская семья постепенно проникает в жизнь состоятельного семейства. Обладатель четырёх премий «Оскар», включая лучший фильм. Острая социальная сатира о пропасти между богатством и бедностью.',
    duration: '2ч 12м',
    rating: '8.5',
    director: 'Пон Джун-хо',
    youtubeId: 'SEUXfv87Wpk',
  },
]
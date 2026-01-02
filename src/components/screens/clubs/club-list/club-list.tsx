import { cn } from '@/lib/utils'
import { ClubCard, type IClub } from '../club-card'

const MOCK_CLUBS: IClub[] = [
  {
    id: '1',
    title: 'Арт-Студия',
    description:
      'Рисование, лепка и прикладное искусство для творческого развития детей.',
    ageRange: '5 - 14',
    schedule: 'Пн, Ср, Пт 16:00',
    imageUrl: 'https://picsum.photos/seed/art/600/400',
    slug: 'art-studio',
  },
  {
    id: '2',
    title: 'Программирование',
    description:
      'Основы Python и создание простых игр. Развиваем логику и IT-навыки.',
    ageRange: '10 - 16',
    schedule: 'Вт, Чт 15:00',
    imageUrl: 'https://picsum.photos/seed/code/600/400',
    slug: 'programming',
  },
  {
    id: '3',
    title: 'Робототехника',
    description:
      'Конструирование и программирование роботов на базе LEGO и Arduino.',
    ageRange: '8 - 15',
    schedule: 'Сб, Вс 11:00',
    imageUrl: 'https://picsum.photos/seed/robot/600/400',
    slug: 'robotics',
  },
  {
    id: '4',
    title: 'Шахматы',
    description:
      'Стратегическое мышление и концентрация внимания через игру в шахматы.',
    ageRange: '6 - 18',
    schedule: 'Пн, Чт 17:00',
    imageUrl: 'https://picsum.photos/seed/chess/600/400',
    slug: 'chess',
  },
  {
    id: '5',
    title: 'Английский язык',
    description:
      'Изучение языка в игровой форме с упором на разговорную практику.',
    ageRange: '7 - 12',
    schedule: 'Вт, Пт 14:00',
    imageUrl: 'https://picsum.photos/seed/english/600/400',
    slug: 'english',
  },
  {
    id: '6',
    title: 'Вокал',
    description: 'Постановка голоса, развитие слуха и выступление на сцене.',
    ageRange: '6 - 16',
    schedule: 'Ср, Пт 15:30',
    imageUrl: 'https://picsum.photos/seed/voice/600/400',
    slug: 'vocal',
  },
]

type Props = {
  className?: string
  limit?: number
}

export const ClubsList = ({ className = ``, limit }: Props) => {
  const clubs = limit ? MOCK_CLUBS.slice(0, limit) : MOCK_CLUBS

  return (
    <div
      className={cn(
        'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8',
        className,
      )}
    >
      {clubs.map((club) => (
        <ClubCard key={club.id} club={club} />
      ))}
    </div>
  )
}

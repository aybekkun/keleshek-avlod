import { cn } from '@/lib/utils'
import { GalleryCard } from './gallery-card'

interface GalleryListProps {
  className?: string
}

const GALLERY_ITEMS = [
  {
    id: '1',
    image:
      'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1000&auto=format&fit=crop',
    category: 'Мероприятия',
    description:
      'Наши ученики на ежегодном фестивале "Юные таланты", где они представили свои лучшие проекты и выступления.',
  },
  {
    id: '2',
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop',
    category: 'Творчество',
    description:
      'Мастер-класс по рисованию на открытом воздухе. Вдохновение природой помогает детям раскрыть свой потенциал.',
  },
  {
    id: '3',
    image:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop',
    category: 'Учеба',
    description:
      'Интерактивные занятия в нашем центре. Мы используем современные методики для более эффективного обучения.',
  },
  {
    id: '4',
    image:
      'https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=1000&auto=format&fit=crop',
    category: 'Спорт',
    description:
      'Спортивные соревнования между классами. Здоровый дух в здоровом теле - один из наших главных принципов.',
  },
  {
    id: '5',
    image:
      'https://images.unsplash.com/photo-1493246507139-91e8bef99c02?q=80&w=1000&auto=format&fit=crop',
    category: 'Творчество',
    description:
      'Занятия по лепке из глины. Развитие мелкой моторики и пространственного мышления через прикладное искусство.',
  },
  {
    id: '6',
    image:
      'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1000&auto=format&fit=crop',
    category: 'Мероприятия',
    description:
      'Экскурсия в заповедник. Изучение природы родного края и важность экологии в современном мире.',
  },
]

export const GalleryList = ({ className }: GalleryListProps) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8',
        className,
      )}
    >
      {GALLERY_ITEMS.map((item) => (
        <GalleryCard
          key={item.id}
          image={item.image}
          category={item.category}
          description={item.description}
        />
      ))}
    </div>
  )
}

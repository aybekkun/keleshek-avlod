import { NewsCard } from '@/components/screens/news/news-card/news-card'
import { cn } from '@/lib/utils'
import type { INews } from '@/services/news'

const MOCK_NEWS: INews[] = Array.from({ length: 3 }).map((_, i) => ({
  id: `${i + 1}`,
  title: [
    'В Ташкенте запущена новая образовательная онлайн-платформа',
    'Прошел молодежный форум по цифровым технологиям',
    'Открыт набор в новые кружки программирования для школьников',
    'Инновации в образовании: опыт передовых стран',
    'Победа наших учеников на международной олимпиаде',
  ][i % 5],
  excerpt:
    'Платформа объединяет курсы по IT, дизайну и предпринимательству, предоставляя доступ к обучению для молодежи со всех регионов страны.',
  date: `${10 + (i % 20)}.${(i % 12) + 1}.2025`,
  category: ['Образование', 'События', 'Кружки', 'Новости', 'Спорт'][i % 5],
  imageUrl: `https://picsum.photos/seed/${i + 100}/600/400`,
  slug: `news-${i + 1}`,
}))

export const NewsList = ({ className = `` }: { className?: string }) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
        className,
      )}
    >
      {MOCK_NEWS.map((news) => (
        <NewsCard key={news.id} news={news} />
      ))}
    </div>
  )
}

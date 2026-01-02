import { NewsCard } from '@/components/screens/news/news-card/news-card'
import { cn } from '@/lib/utils'
import { MOCK_NEWS } from '@/services/news'

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

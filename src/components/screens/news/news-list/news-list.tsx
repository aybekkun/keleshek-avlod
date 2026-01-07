import { NewsCard } from '@/components/screens/news/news-card/news-card'
import { cn } from '@/lib/utils'
import { type INews } from '@/services/news'

export const NewsList = ({
  className = ``,
  data = [],
}: {
  className?: string
  data: INews[]
}) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
        className,
      )}
    >
      {data.map((news) => (
        <NewsCard key={news.id} data={news} />
      ))}
    </div>
  )
}

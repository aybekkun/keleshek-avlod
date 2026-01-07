import {
  NewsCard,
  NewsCardSkeleton,
} from '@/components/screens/news/news-card/news-card'
import { cn } from '@/lib/utils'
import { type INews } from '@/services/news'

export const NewsList = ({
  className = ``,
  data = [],
  isLoading = false,
  limit = 3,
}: {
  className?: string
  data?: INews[]
  isLoading?: boolean
  limit?: number
}) => {
  if (isLoading) {
    return (
      <div
        className={cn(
          'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
          className,
        )}
      >
        {Array.from({ length: limit }).map((_, i) => (
          <NewsCardSkeleton key={i} />
        ))}
      </div>
    )
  }

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

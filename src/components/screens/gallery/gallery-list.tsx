import { cn } from '@/lib/utils'
import { GalleryCard } from './gallery-card'
import type { IGallery } from '@/services/gallery'

interface GalleryListProps {
  className?: string
  data: IGallery[]
}

export const GalleryList = ({ data = [], className }: GalleryListProps) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8',
        className,
      )}
    >
      {data.map((item) => (
        <GalleryCard key={item.id} data={item} />
      ))}
    </div>
  )
}

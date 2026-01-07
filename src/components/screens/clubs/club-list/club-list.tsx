import { cn } from '@/lib/utils'

import type { IClub } from '@/services/clubs'
import { ClubCard, ClubCardSkeleton } from '../club-card'

type Props = {
  className?: string
  limit?: number
  data?: IClub[]
  isLoading?: boolean
}

export const ClubsList = ({
  className = ``,
  data = [],
  isLoading = false,
  limit = 3,
}: Props) => {
  if (isLoading) {
    return (
      <div
        className={cn(
          'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8',
          className,
        )}
      >
        {Array.from({ length: limit }).map((_, i) => (
          <ClubCardSkeleton key={i} />
        ))}
      </div>
    )
  }

  return (
    <div
      className={cn(
        'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8',
        className,
      )}
    >
      {data.map((club) => (
        <ClubCard key={club.id} club={club} />
      ))}
    </div>
  )
}

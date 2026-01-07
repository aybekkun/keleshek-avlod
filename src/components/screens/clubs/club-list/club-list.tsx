import { cn } from '@/lib/utils'

import { ClubCard } from '../club-card'
import type { IClub } from '@/services/clubs'

type Props = {
  className?: string
  limit?: number
  data: IClub[]
}

export const ClubsList = ({ className = ``, data }: Props) => {
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

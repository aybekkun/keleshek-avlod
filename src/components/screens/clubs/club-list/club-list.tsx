import { cn } from '@/lib/utils'
import { MOCK_CLUBS } from '@/services/clubs'
import { ClubCard } from '../club-card'

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

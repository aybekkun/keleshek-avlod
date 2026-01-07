import { cn } from '@/lib/utils'
import { StaffCard } from '../staff-card'
import type { IStaff } from '@/services/staff'

type Props = {
  className?: string
  data?: IStaff[]
}

export const StaffList = ({ className = ``, data = [] }: Props) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12',
        className,
      )}
    >
      {data.map((member) => (
        <StaffCard key={member.id} data={member} />
      ))}
    </div>
  )
}

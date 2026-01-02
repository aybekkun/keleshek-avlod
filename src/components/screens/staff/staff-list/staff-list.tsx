import { cn } from '@/lib/utils'
import { StaffCard, type IStaff } from '../staff-card'

const MOCK_STAFF: IStaff[] = [
  {
    id: '1',
    name: 'Dianne Russell',
    position: 'Founder and CEO',
    imageUrl: 'https://picsum.photos/seed/dianne/400/400',
    socials: { facebook: '#', instagram: '#', linkedin: '#' },
  },
  {
    id: '2',
    name: 'Jerome Bell',
    position: 'Founder and Program Director',
    imageUrl: 'https://picsum.photos/seed/jerome/400/400',
    socials: { facebook: '#', linkedin: '#' },
  },
  {
    id: '3',
    name: 'Kristin Watson',
    position: 'Marketer, Curator of Marketing Course',
    imageUrl: 'https://picsum.photos/seed/kristin/400/400',
    socials: { instagram: '#', linkedin: '#' },
  },
  {
    id: '4',
    name: 'Marvin McKinney',
    position: 'PM, Curator of Management',
    imageUrl: 'https://picsum.photos/seed/marvin/400/400',
    socials: { facebook: '#', instagram: '#' },
  },
  {
    id: '5',
    name: 'Leslie Alexander',
    position: 'Curator of Experience Design',
    imageUrl: 'https://picsum.photos/seed/leslie/400/400',
    socials: { linkedin: '#' },
  },
  {
    id: '6',
    name: 'Guy Hawkins',
    position: 'Curator of Game Development',
    imageUrl: 'https://picsum.photos/seed/guy/400/400',
    socials: { facebook: '#', instagram: '#' },
  },
  {
    id: '7',
    name: 'Kathryn Murphy',
    position: 'Curator of Programming',
    imageUrl: 'https://picsum.photos/seed/kathryn/400/400',
    socials: { instagram: '#' },
  },
  {
    id: '8',
    name: 'Robert Fox',
    position: 'Curator of Graphic Design',
    imageUrl: 'https://picsum.photos/seed/robert/400/400',
    socials: { facebook: '#', linkedin: '#' },
  },
]

type Props = {
  className?: string
  limit?: number
}

export const StaffList = ({ className = ``, limit }: Props) => {
  const staff = limit ? MOCK_STAFF.slice(0, limit) : MOCK_STAFF

  return (
    <div
      className={cn(
        'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12',
        className,
      )}
    >
      {staff.map((member) => (
        <StaffCard key={member.id} staff={member} />
      ))}
    </div>
  )
}

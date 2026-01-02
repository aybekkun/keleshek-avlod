import { Explore } from '@/components/shared/explore'
import { SectionHeader } from '@/components/shared/section-header'
import { Container } from '@/components/ui'
import { cn } from '@/lib/utils'
import { ClubsList } from '../club-list'

type Props = {
  className?: string
}

export const LatestClubsSection = ({ className = `` }: Props) => {
  return (
    <section className={cn('py-24 relative overflow-hidden', className)}>
      <Container>
        <SectionHeader
          title="Наши кружки"
          subtitle="МЫ ПРЕДЛАГАЕМ"
          className="text-center"
        />

        {/* We only show the first 3 clubs on the home page */}
        <ClubsList limit={3} className="lg:grid-cols-3" />

        <Explore
          title="Хотите найти что-то еще?"
          subtitle="Смотреть все кружки"
          to="/clubs"
          className="mt-16"
        />
      </Container>
    </section>
  )
}

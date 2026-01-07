import { Explore } from '@/components/shared/explore'
import { SectionHeader } from '@/components/shared/section-header'
import { Container } from '@/components/ui'
import { cn } from '@/lib/utils'
import { useClubs } from '@/services/clubs'
import { useTranslation } from 'react-i18next'
import { ClubsList } from '../club-list'

type Props = {
  className?: string
}

export const LatestClubsSection = ({ className = `` }: Props) => {
  const { t } = useTranslation()
  const { data, isLoading } = useClubs({ limit: 3 })

  return (
    <section className={cn('py-24 relative overflow-hidden', className)}>
      <Container>
        <SectionHeader
          title={t('sections.latest_clubs.title')}
          subtitle={t('sections.latest_clubs.subtitle')}
          className="text-center"
        />

        {/* We only show the first 3 clubs on the home page */}
        <ClubsList
          data={data?.data || []}
          isLoading={isLoading}
          limit={3}
          className="lg:grid-cols-3"
        />

        <Explore
          title={t('sections.latest_clubs.explore_title')}
          subtitle={t('sections.latest_clubs.explore_subtitle')}
          to="/clubs"
          className="mt-16"
        />
      </Container>
    </section>
  )
}

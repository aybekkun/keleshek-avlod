import { ClubsList } from '@/components/screens/clubs/club-list'
import { PageHeader } from '@/components/shared/page-header'
import { Container } from '@/components/ui'
import { useClubs } from '@/services/clubs'
import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export const Route = createFileRoute('/_layout/clubs/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { t } = useTranslation()
  const { data } = useClubs({})
  return (
    <>
      <PageHeader
        title={t('clubs.page_title')}
        subtitle={t('clubs.page_subtitle')}
      />
      <Container className="py-20">
        <ClubsList className="mb-16" data={data?.data || []} />
      </Container>
    </>
  )
}

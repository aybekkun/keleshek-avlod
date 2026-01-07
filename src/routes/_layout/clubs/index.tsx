import { ClubsList } from '@/components/screens/clubs/club-list'
import { PageHeader } from '@/components/shared/page-header'
import { Container } from '@/components/ui'
import { useClubs } from '@/services/clubs'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/clubs/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { data } = useClubs({})
  return (
    <>
      <PageHeader title="Кружки" subtitle="Развивающие занятия" />
      <Container className="py-20">
        <ClubsList className="mb-16" data={data?.data || []} />
      </Container>
    </>
  )
}

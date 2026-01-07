import { EventsList } from '@/components/screens/events/events-list'
import { PageHeader } from '@/components/shared/page-header'
import { Container, Pagination } from '@/components/ui'
import { useFilters } from '@/hooks'
import { useEvents } from '@/services/events'
import type { IParams } from '@/services/service.types'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/events/')({
  component: RouteComponent,
  validateSearch: () => ({}) as IParams,
})

function RouteComponent() {
  const { filters, setFilters } = useFilters(Route.id)
  const { data } = useEvents({
    page: filters.page ?? 1,
    limit: filters.limit ?? 5,
  })
  return (
    <>
      <PageHeader title="События" subtitle="Наши мероприятия" />
      <Container className="py-10">
        <EventsList data={data?.data || []} className="mb-10" />
        <Pagination
          total={data?.pagination?.count || 0}
          current={filters.page ?? 1}
          pageSize={filters.limit ?? 5}
          onChange={(page) => setFilters({ page })}
        />
      </Container>
    </>
  )
}

import { EventsList } from '@/components/screens/events/events-list'
import { PageHeader } from '@/components/shared/page-header'
import { Container, Pagination } from '@/components/ui'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/events/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <PageHeader title="События" subtitle="Наши мероприятия" />
      <Container className="py-10">
        <EventsList className="mb-10" />
        <Pagination
          total={50}
          current={1}
          pageSize={5}
          onChange={(page) => console.log(page)}
        />
      </Container>
    </>
  )
}

import { NewsFilter } from '@/components/screens/news/news-filter'
import { NewsList } from '@/components/screens/news/news-list/news-list'
import { PageHeader } from '@/components/shared/page-header'
import { Container, Pagination } from '@/components/ui'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/news/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <PageHeader title="Новости" subtitle="Все новости" />
      <Container className="py-10">
        <NewsFilter className="mb-10" />
        <NewsList />
        <Pagination
          className="mt-10"
          total={100}
          current={1}
          pageSize={10}
          onChange={(page) => console.log(page)}
        />
      </Container>
    </>
  )
}

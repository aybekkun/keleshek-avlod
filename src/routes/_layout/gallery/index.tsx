import { GalleryList } from '@/components/screens/gallery'
import { PageHeader } from '@/components/shared/page-header'
import { Container, Pagination } from '@/components/ui'
import { useFilters } from '@/hooks'
import { useGallery } from '@/services/gallery'
import type { IParams } from '@/services/service.types'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/gallery/')({
  component: RouteComponent,
  validateSearch: () => ({}) as IParams,
})

function RouteComponent() {
  const { filters, setFilters } = useFilters(Route.id)
  const { data } = useGallery({
    page: filters.page ?? 1,
    limit: filters.limit ?? 12,
  })
  return (
    <>
      <PageHeader
        title="Галерея"
        subtitle="Яркие моменты из жизни нашего центра"
      />
      <Container className="py-20">
        <GalleryList data={data?.data || []} />
        <Pagination
          className="mt-10"
          total={data?.pagination?.count || 0}
          current={filters.page ?? 1}
          pageSize={filters.limit ?? 12}
          onChange={(page) => setFilters({ page })}
        />
      </Container>
    </>
  )
}

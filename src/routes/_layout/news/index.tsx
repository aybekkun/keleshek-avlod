import { NewsFilter } from '@/components/screens/news/news-filter'
import { NewsList } from '@/components/screens/news/news-list/news-list'
import { PageHeader } from '@/components/shared/page-header'
import { Container, Pagination } from '@/components/ui'
import { useFilters } from '@/hooks'
import { useNews } from '@/services/news'
import type { IParams } from '@/services/service.types'
import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export const Route = createFileRoute('/_layout/news/')({
  component: RouteComponent,
  validateSearch: () => ({}) as IParams,
})

function RouteComponent() {
  const { t } = useTranslation()
  const { filters, setFilters } = useFilters(Route.id)
  const { data, isLoading } = useNews({
    page: filters.page ?? 1,
    limit: filters.limit ?? 10,
    category: filters.category,
  })
  return (
    <>
      <PageHeader
        title={t('news.page_title')}
        subtitle={t('news.page_subtitle')}
      />
      <Container className="py-10">
        <NewsFilter className="mb-10" />
        <NewsList
          data={data?.data || []}
          isLoading={isLoading}
          limit={filters.limit ?? 10}
        />
        <Pagination
          className="mt-10"
          total={data?.pagination?.count || 0}
          current={filters.page ?? 1}
          pageSize={filters.limit ?? 10}
          onChange={(page) => setFilters({ page })}
        />
      </Container>
    </>
  )
}

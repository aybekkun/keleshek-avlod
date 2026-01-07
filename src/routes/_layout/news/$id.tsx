import { NewsDetail, NewsDetailSkeleton } from '@/components/screens/news'
import { useNewsById } from '@/services/news'
import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export const Route = createFileRoute('/_layout/news/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const { t } = useTranslation()
  const { id } = Route.useParams()
  const { data, isLoading, isError } = useNewsById(id)

  if (isLoading) {
    return <NewsDetailSkeleton />
  }

  if (isError) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold">{t('news.not_found')}</h1>
      </div>
    )
  }

  return <NewsDetail data={data?.data} />
}

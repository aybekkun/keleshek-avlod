import { NewsDetail } from '@/components/screens/news'
import { MOCK_NEWS } from '@/services/news'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/news/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams()
  const news = MOCK_NEWS.find((item) => item.id === id)

  if (!news) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold">Новость не найдена</h1>
      </div>
    )
  }

  return <NewsDetail news={news} />
}

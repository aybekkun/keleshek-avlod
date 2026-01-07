import { NewsDetail } from '@/components/screens/news'
import { useNewsById } from '@/services/news'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/news/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams()
  const { data } = useNewsById(id)
  if (!data?.data) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold">Новость не найдена</h1>
      </div>
    )
  }

  return <NewsDetail data={data.data} />
}

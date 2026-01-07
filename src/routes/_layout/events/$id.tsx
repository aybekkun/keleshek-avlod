import { EventDetail } from '@/components/screens/events'
import { useEventById } from '@/services/events'
import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export const Route = createFileRoute('/_layout/events/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const { t } = useTranslation()
  const { id } = Route.useParams()
  const { data } = useEventById(id)
  if (!data?.data) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold">{t('events.not_found')}</h1>
      </div>
    )
  }

  return <EventDetail data={data.data} />
}

import { ClubDetail } from '@/components/screens/clubs'
import { useClubById } from '@/services/clubs'
import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export const Route = createFileRoute('/_layout/clubs/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const { t } = useTranslation()
  const { id } = Route.useParams()
  const { data } = useClubById(id)

  if (!data?.data) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold">{t('clubs.not_found')}</h1>
      </div>
    )
  }

  return <ClubDetail data={data.data} />
}

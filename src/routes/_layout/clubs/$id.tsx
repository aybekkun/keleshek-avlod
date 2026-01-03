import { ClubDetail } from '@/components/screens/clubs/club-detail/club-detail'
import { MOCK_CLUBS } from '@/services/clubs'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/clubs/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams()
  const club = MOCK_CLUBS.find((item) => item.id === id)

  if (!club) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold">Кружок не найден</h1>
      </div>
    )
  }

  return <ClubDetail club={club} />
}

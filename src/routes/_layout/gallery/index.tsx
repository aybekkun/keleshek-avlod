import { GalleryList } from '@/components/screens/gallery'
import { PageHeader } from '@/components/shared/page-header'
import { Container } from '@/components/ui'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/gallery/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <PageHeader
        title="Галерея"
        subtitle="Яркие моменты из жизни нашего центра"
      />
      <Container className="py-20">
        <GalleryList />
      </Container>
    </>
  )
}

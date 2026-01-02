import { StaffList } from '@/components/screens/staff/staff-list'
import { SectionHeader } from '@/components/shared/section-header'
import { Container } from '@/components/ui'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/staff/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <section className="py-10 md:py-16 bg-white">
        <Container>
          <SectionHeader
            title="Meet our team"
            subtitle="BEST TUTORS ARE ALL HERE"
            className="text-left md:text-left mb-16"
          />

          <StaffList />
        </Container>
      </section>
    </>
  )
}

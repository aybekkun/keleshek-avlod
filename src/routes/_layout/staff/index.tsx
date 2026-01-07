import { StaffList } from '@/components/screens/staff/staff-list'
import { SectionHeader } from '@/components/shared/section-header'
import { Container } from '@/components/ui'
import { useStaff } from '@/services/staff'
import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export const Route = createFileRoute('/_layout/staff/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { t } = useTranslation()
  const { data } = useStaff({})
  return (
    <>
      <section className="py-10 md:py-16 bg-white">
        <Container>
          <SectionHeader
            title={t('staff.page_title')}
            subtitle={t('staff.page_subtitle')}
            className="text-left md:text-left mb-16"
          />

          <StaffList data={data?.data || []} />
        </Container>
      </section>
    </>
  )
}

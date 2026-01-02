import { ContactSection } from '@/components/screens/contact'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/contact/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ContactSection />
}

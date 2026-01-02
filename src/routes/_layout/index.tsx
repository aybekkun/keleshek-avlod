import { Hero } from '@/components/screens/home/hero'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/')({
  component: App,
})

function App() {
  return (
    <>
      <Hero />
    </>
  )
}

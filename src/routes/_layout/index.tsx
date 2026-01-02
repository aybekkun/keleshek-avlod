import { LatestClubsSection } from '@/components/screens/clubs/latest-clubs'
import { LatestEventsSection } from '@/components/screens/events/latest-events'
import { Hero } from '@/components/screens/home/hero'
import { LatestNewsSection } from '@/components/screens/news/latest-news'

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/')({
  component: App,
})

function App() {
  // Просто вставьте полную ссылку на YouTube видео
  // Поддерживаются форматы:
  // - https://www.youtube.com/watch?v=VIDEO_ID
  // - https://youtu.be/VIDEO_ID
  // - или просто VIDEO_ID

  return (
    <>
      <Hero />

      <LatestNewsSection />
      <LatestClubsSection />
      <LatestEventsSection />
    </>
  )
}

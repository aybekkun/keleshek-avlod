import { cn } from '@/lib/utils'

type Props = {
  videoUrl: string // Full YouTube URL or just video ID
  className?: string
}

/**
 * Извлекает video ID из различных форматов YouTube ссылок
 * Поддерживает:
 * - https://www.youtube.com/watch?v=VIDEO_ID
 * - https://youtu.be/VIDEO_ID
 * - https://www.youtube.com/embed/VIDEO_ID
 * - VIDEO_ID (просто ID)
 */
const extractVideoId = (url: string): string => {
  // Если это уже просто ID (без http/https), возвращаем как есть
  if (!url.includes('http') && !url.includes('://')) {
    // Убираем лишние параметры если есть
    return url.split('&')[0].split('?')[0]
  }

  try {
    const urlObj = new URL(url)

    // youtube.com/watch?v=VIDEO_ID
    if (urlObj.hostname.includes('youtube.com')) {
      const videoId = urlObj.searchParams.get('v')
      if (videoId) return videoId
    }

    // youtu.be/VIDEO_ID
    if (urlObj.hostname.includes('youtu.be')) {
      const videoId = urlObj.pathname.slice(1).split('?')[0]
      if (videoId) return videoId
    }

    // youtube.com/embed/VIDEO_ID
    if (urlObj.pathname.includes('/embed/')) {
      const videoId = urlObj.pathname.split('/embed/')[1].split('?')[0]
      if (videoId) return videoId
    }
  } catch (error) {
    console.error('Error parsing YouTube URL:', error)
  }

  // Fallback: возвращаем первую часть до & или ?
  return url.split('&')[0].split('?')[0]
}

export const YoutubeBackground = ({ videoUrl, className }: Props) => {
  const videoId = extractVideoId(videoUrl)

  // YouTube embed URL with autoplay parameters
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`

  return (
    <div className={cn('absolute inset-0 overflow-hidden', className)}>
      <iframe
        src={embedUrl}
        title="YouTube video background"
        allow="autoplay; encrypted-media"
        className="absolute top-1/2 left-1/2 w-screen h-screen min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: '100vw',
          height: '56.25vw', // 16:9 aspect ratio
          minHeight: '100vh',
          minWidth: '177.78vh', // 16:9 aspect ratio
        }}
      />
    </div>
  )
}

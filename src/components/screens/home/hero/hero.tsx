import { Button } from '@/components/ui'
import { Container } from '@/components/ui/container'
/* import { DottedMap } from '@/components/ui/dotted-map' */
import { YoutubeBackground } from '@/components/ui/youtube-background'
import { cn } from '@/lib/utils'

type Props = {
  className?: string
}

export const Hero = ({ className = `` }: Props) => {
  return (
    <section
      className={cn(
        'relative bg-linear-to-br from-blue-900 via-blue-700 to-indigo-800 overflow-hidden min-h-screen',
        className,
      )}
    >
      {/* YouTube Video Background (optional) */}

      <YoutubeBackground
        videoUrl={'https://www.youtube.com/watch?v=ruH9ZvmNaM0'}
        className="opacity-90"
      />

      {/* Dark overlay for better text readability */}

      <div className="absolute inset-0 bg-blue-900/60 backdrop-blur-[2px]" />

      {/* Animated Dotted Map Background */}
      {/*    <div className="absolute inset-0 opacity-10">
        <DottedMap
          width={200}
          height={100}
          mapSamples={8000}
          dotRadius={0.45}
          dotColor="white"
          className="w-full h-full text-white"
        />
      </div>
 */}
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-linear-to-t from-blue-900/50 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-linear-to-r from-blue-900/30 via-transparent to-indigo-900/30" />

      {/* Floating Circles Animation */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-float-delayed" />

      {/* Content */}
      <Container className="relative z-10 py-10 flex flex-col justify-center min-h-screen">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 animate-fade-in-up">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white">
              Новое поколение образования
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight text-white animate-fade-in-up animation-delay-100">
            Образование Будущего для{' '}
            <span className="bg-linear-to-r from-blue-200 via-white to-indigo-200 bg-clip-text text-transparent">
              Ваших Детей
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl leading-relaxed animate-fade-in-up animation-delay-200">
            Мы создаем среду, где каждый ребенок раскрывает свой потенциал через
            творчество, науку и спорт.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-300">
            <Button size="lg">Начать обучение</Button>
            <Button size="lg" variant="outline">
              Узнать больше
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 animate-fade-in-up animation-delay-400">
            <div className="text-center sm:text-left">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                1000+
              </div>
              <div className="text-sm md:text-base text-blue-200">Учеников</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                50+
              </div>
              <div className="text-sm md:text-base text-blue-200">
                Преподавателей
              </div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                15+
              </div>
              <div className="text-sm md:text-base text-blue-200">Программ</div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white/5 to-transparent" />
    </section>
  )
}

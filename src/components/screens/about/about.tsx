import { cn } from '@/lib/utils'
import { Heart, Lightbulb, Shield, Target } from 'lucide-react'

interface ValueCardProps {
  icon: React.ElementType
  title: string
  description: string
  className?: string
}

export const ValueCard = ({
  icon: Icon,
  title,
  description,
  className,
}: ValueCardProps) => {
  return (
    <div
      className={cn('flex flex-col items-center text-center group', className)}
    >
      <div className="mb-6 relative">
        <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white shadow-sm group-hover:shadow-blue-200 group-hover:shadow-lg">
          <Icon className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-500 leading-relaxed text-sm max-w-60">
        {description}
      </p>
    </div>
  )
}

export const AboutSection = () => {
  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* Blue Header Section */}
      <div className="bg-blue-600 pt-24 pb-48 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
          О нас
        </h1>
        <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
          Мы — современная образовательная платформа, призванная раскрыть
          таланты нового поколения.
        </p>
      </div>

      {/* Main Content Overlapping Card */}
      <div className="max-w-6xl mx-auto px-4 -mt-32 mb-20">
        <div className="bg-white rounded-[40px] shadow-2xl shadow-blue-900/5 p-8 md:p-16">
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-20">
            <div className="flex-1 space-y-8">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                Наша Миссия
              </h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
                <p>
                  Миссия нашей платформы заключается в создании уникальной
                  экосистемы, где дети могут не только получать академические
                  знания, но и развивать критическое мышление, эмоциональный
                  интеллект и творческие способности.
                </p>
                <p>
                  Мы верим, что каждый ребенок уникален, и наша задача — помочь
                  ему найти свой путь к успеху и счастью в быстро меняющемся
                  мире.
                </p>
              </div>
            </div>

            <div className="flex-1 flex gap-6">
              <div className="mt-12 flex-1 aspect-4/5 rounded-4xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop"
                  alt="Students learning"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 aspect-4/5 rounded-4xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1000&auto=format&fit=crop"
                  alt="Educational environment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pt-12 border-t border-slate-100">
            <ValueCard
              icon={Heart}
              title="Любовь к детям"
              description="Мы строим отношения на доверии и искреннем интересе к каждому ребенку."
            />
            <ValueCard
              icon={Target}
              title="Целеустремленность"
              description="Помогаем детям ставить цели и достигать их через труд и творчество."
            />
            <ValueCard
              icon={Lightbulb}
              title="Инновации"
              description="Используем современные методики обучения и новейшее оборудование."
            />
            <ValueCard
              icon={Shield}
              title="Безопасность"
              description="Создаем комфортную и защищенную среду для обучения и досуга."
            />
          </div>
        </div>
      </div>
    </div>
  )
}

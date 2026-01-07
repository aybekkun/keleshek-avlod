import { cn } from '@/lib/utils'
import { Heart, Lightbulb, Shield, Target } from 'lucide-react'
import { useTranslation } from 'react-i18next'

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
        <div className="w-16 h-16 rounded-2xl bg-violet-50 flex items-center justify-center text-violet-600 transition-all duration-300 group-hover:bg-violet-600 group-hover:text-white shadow-sm group-hover:shadow-violet-200 group-hover:shadow-lg">
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
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* Blue Header Section */}
      <div className="bg-violet-600 pt-24 pb-48 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
          {t('about.title')}
        </h1>
        <p className="text-violet-100 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
          {t('about.subtitle')}
        </p>
      </div>

      {/* Main Content Overlapping Card */}
      <div className="max-w-6xl mx-auto px-4 -mt-32 mb-20">
        <div className="bg-white rounded-[40px] shadow-2xl shadow-violet-900/5 p-8 md:p-16">
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-20">
            <div className="flex-1 space-y-8">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                {t('about.mission.title')}
              </h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
                <p>{t('about.mission.p1')}</p>
                <p>{t('about.mission.p2')}</p>
              </div>
            </div>

            <div className="flex-1 flex gap-6">
              <div className="mt-12 flex-1 aspect-4/5 rounded-4xl overflow-hidden shadow-xl">
                <img
                  src="/1.avif"
                  alt="Students learning"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 aspect-4/5 rounded-4xl overflow-hidden shadow-xl">
                <img
                  src="/2.avif"
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
              title={t('about.values.heart.title')}
              description={t('about.values.heart.description')}
            />
            <ValueCard
              icon={Target}
              title={t('about.values.target.title')}
              description={t('about.values.target.description')}
            />
            <ValueCard
              icon={Lightbulb}
              title={t('about.values.lightbulb.title')}
              description={t('about.values.lightbulb.description')}
            />
            <ValueCard
              icon={Shield}
              title={t('about.values.shield.title')}
              description={t('about.values.shield.description')}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

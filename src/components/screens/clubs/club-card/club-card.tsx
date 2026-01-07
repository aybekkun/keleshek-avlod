import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Link } from '@tanstack/react-router'
import { Clock, User } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { type IClub } from '@/services/clubs'

type Props = {
  club: IClub
  className?: string
}

export const ClubCard = ({ club, className }: Props) => {
  const { t } = useTranslation()

  return (
    <Card
      className={cn(
        'group pt-0 pb-0 overflow-hidden border-none shadow-sm hover:shadow-xl transition-all duration-500 bg-white rounded-3xl flex flex-col',
        className,
      )}
    >
      {/* Image Section */}
      <div className="relative aspect-video w-full overflow-hidden">
        <Link to={`/clubs/$id`} params={{ id: String(club.id) }}>
          <img
            src={club.image || ''}
            alt={club.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
        </Link>

        {/* Age Badge */}
        <div className="absolute top-4 left-4">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm text-primary text-[10px] md:text-xs font-black rounded-lg shadow-sm border border-primary/10">
            <User className="w-3 h-3 text-primary" />
            <span>
              {t('clubs.age')}: {club.age}
            </span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <CardHeader className="p-6 flex-1 flex flex-col">
        <CardTitle className="text-xl md:text-2xl font-black text-slate-900 mb-2 leading-tight group-hover:text-primary transition-colors duration-300">
          <Link to={`/clubs/$id`} params={{ id: String(club.id) }}>
            {club.title}
          </Link>
        </CardTitle>
        {/* 
        <CardDescription className="text-slate-500 text-sm font-medium leading-relaxed mb-6 line-clamp-2">
          {club.description}
        </CardDescription>
 */}
        {/* Schedule Section */}
        <div className="mt-auto w-full">
          <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-2xl border border-primary/5 transition-colors group-hover:bg-primary/10">
            <div className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-xl shadow-lg shadow-primary/20">
              <Clock className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-primary uppercase tracking-widest">
                {t('clubs.schedule')}
              </span>
              <span className="text-sm font-bold text-slate-700">
                {club.days.join(', ')}
              </span>
            </div>
          </div>
        </div>
      </CardHeader>
    </Card>
  )
}

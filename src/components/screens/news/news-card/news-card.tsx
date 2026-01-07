import { Button } from '@/components/ui'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import type { INews } from '@/services/news'
import { Link } from '@tanstack/react-router'
import { ArrowRight, Calendar } from 'lucide-react'

type Props = {
  className?: string
  data: INews
}

export const NewsCard = ({ data, className = `` }: Props) => {
  return (
    <Card
      key={data.id}
      className={cn(
        'group overflow-hidden pt-0 border-none shadow-sm hover:shadow-xl transition-all duration-500 bg-white rounded-3xl',
        className,
      )}
    >
      <div className="relative aspect-16/10 w-full overflow-hidden">
        <Link to={`/news/$id`} params={{ id: String(data.id) }}>
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </Link>

        {/* Category Badge on Image */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-primary text-[10px] font-black uppercase tracking-wider rounded-lg shadow-sm border border-primary/10">
            {data.category?.name}
          </span>
        </div>
      </div>

      <CardHeader className="p-6">
        <div className="flex items-center gap-4 text-xs font-bold text-slate-400">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary/60" />
            <span>{data.created_at}</span>
          </div>
        </div>

        <CardTitle className="text-xl font-black text-slate-900 mb-3 leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
          <Link to={`/news/$id`} params={{ id: String(data.id) }}>
            {data.title}
          </Link>
        </CardTitle>

        {/*         <CardDescription className="text-slate-500 text-sm line-clamp-3 leading-relaxed mb-6 font-medium">
          {news.excerpt}
        </CardDescription>
 */}
        <div className="pt-2 border-t border-slate-50">
          <Button
            asChild
            variant="ghost"
            className="text-primary hover:text-primary p-0 h-auto font-black text-xs uppercase tracking-widest hover:bg-transparent group/btn transition-all"
          >
            <Link
              to={`/news/$id`}
              params={{ id: String(data.id) }}
              className="flex items-center gap-2"
            >
              Read more
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </Button>
        </div>
      </CardHeader>
    </Card>
  )
}

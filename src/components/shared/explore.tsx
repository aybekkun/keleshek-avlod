import { Button } from '@/components/ui'
import { cn } from '@/lib/utils'
import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

type Props = {
  title: string
  subtitle: string
  to: string
  className?: string
}

export const Explore = ({ title, subtitle, to, className }: Props) => {
  return (
    <div
      className={cn(
        'mt-20 text-center animate-fade-in-up animation-delay-400',
        className,
      )}
    >
      <div className="inline-flex flex-col md:flex-row items-center bg-white/50 backdrop-blur-sm p-4 md:p-2 pl-8 rounded-3xl border border-primary/10 shadow-sm gap-6 md:gap-10">
        <span className="text-lg font-black text-slate-900">{title}</span>
        <Button
          className="bg-primary hover:bg-slate-900 text-white rounded-2xl py-7 px-10 shadow-xl shadow-primary/20 hover:shadow-slate-200 transition-all duration-500 hover:scale-105 active:scale-95 font-black uppercase tracking-widest"
          asChild
        >
          <Link to={to}>
            {subtitle}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

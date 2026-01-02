import { cn } from '@/lib/utils'

type Props = {
  className?: string
  title: string
  subtitle: string
}

export const SectionHeader = ({ className = ``, title, subtitle }: Props) => {
  return (
    <div className={cn('mb-16 animate-fade-in-up', className)}>
      <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-4 block">
        {subtitle}
      </span>
      <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
        {title}
      </h2>
    </div>
  )
}

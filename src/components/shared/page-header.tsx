import { Container } from '@/components/ui/container'
import { cn } from '@/lib/utils'

type Props = {
  className?: string
  title: string
  subtitle?: string
}

export const PageHeader = ({ className = ``, title, subtitle }: Props) => {
  return (
    <section
      className={cn(
        'relative py-10 md:py-12 bg-primary/5 overflow-hidden',
        className,
      )}
    >
      {/* Decorative background elements consistent with your theme */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-primary/10 rounded-full blur-3xl -mr-64 -mt-64 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-75 h-75 bg-primary/5 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-4 h-4 bg-primary/10 rounded-full animate-ping" />

      <Container className="relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
          {subtitle && (
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-4 block">
              {subtitle}
            </span>
          )}
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight uppercase md:normal-case">
            {title}
          </h1>
        </div>
      </Container>
    </section>
  )
}

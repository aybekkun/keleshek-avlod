import { cn } from '@/lib/utils'

type Props = {
  className?: string
  children?: React.ReactNode
}

export const Container = ({ className = ``, children }: Props) => {
  return (
    <div className={cn('container mx-auto px-2', className)}>{children}</div>
  )
}

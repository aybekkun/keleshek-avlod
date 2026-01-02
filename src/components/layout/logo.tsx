import { cn } from '@/lib/utils'
import { Link } from '@tanstack/react-router'

type Props = {
  className?: string
}

export const Logo = ({ className = `` }: Props) => {
  return (
    <Link
      to="/"
      className={cn(
        'text-2xl font-extrabold text-blue-600 tracking-tight',
        className,
      )}
    >
      Keleshek.uz
    </Link>
  )
}

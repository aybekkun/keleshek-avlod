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
        'text-base uppercase md:text-xl lg:text-2xl font-extrabold text-violet-500 flex items-center gap-2 tracking-tight h-10 ',
        className,
      )}
    >
      <img
        src="/logo192.png"
        alt="Logo"
        className="w-10 aspect-square object-cover"
      />
      KELESHEK ORAYI
    </Link>
  )
}

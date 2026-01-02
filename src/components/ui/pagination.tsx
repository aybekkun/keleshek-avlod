import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'
import { Button } from './button'

type Props = {
  total: number
  current: number
  pageSize: number
  onChange: (page: number) => void
  className?: string
}

export const Pagination = ({
  total,
  current,
  pageSize,
  onChange,
  className,
}: Props) => {
  const totalPages = Math.ceil(total / pageSize)

  if (totalPages <= 1) return null

  const getPages = () => {
    const siblingCount = 1

    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    const leftSiblingIndex = Math.max(current - siblingCount, 1)
    const rightSiblingIndex = Math.min(current + siblingCount, totalPages)

    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < totalPages - 2

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount
      const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1)
      return [...leftRange, 'DOTS', totalPages]
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount
      const rightRange = Array.from(
        { length: rightItemCount },
        (_, i) => totalPages - rightItemCount + i + 1,
      )
      return [1, 'DOTS', ...rightRange]
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = Array.from(
        { length: rightSiblingIndex - leftSiblingIndex + 1 },
        (_, i) => leftSiblingIndex + i,
      )
      return [1, 'DOTS', ...middleRange, 'DOTS', totalPages]
    }

    return []
  }

  const pages = getPages()

  return (
    <div className={cn('flex items-center justify-center gap-2', className)}>
      <Button
        variant="outline"
        size="icon"
        onClick={() => onChange(current - 1)}
        disabled={current === 1}
        className="rounded-xl border-slate-200 text-slate-600 hover:text-primary hover:border-primary transition-all"
      >
        <ChevronLeft className="w-5 h-5" />
      </Button>

      {pages.map((page, index) => {
        if (page === 'DOTS') {
          return (
            <div
              key={`dots-${index}`}
              className="w-10 h-10 flex items-center justify-center text-slate-400"
            >
              <MoreHorizontal className="w-5 h-5" />
            </div>
          )
        }

        const pageNum = page as number
        return (
          <Button
            key={pageNum}
            variant={current === pageNum ? 'default' : 'outline'}
            onClick={() => onChange(pageNum)}
            className={cn(
              'w-10 h-10 rounded-xl font-black transition-all',
              current === pageNum
                ? 'bg-primary text-white shadow-lg shadow-primary/20'
                : 'border-slate-200 text-slate-600 hover:text-primary hover:border-primary',
            )}
          >
            {pageNum}
          </Button>
        )
      })}

      <Button
        variant="outline"
        size="icon"
        onClick={() => onChange(current + 1)}
        disabled={current === totalPages}
        className="rounded-xl border-slate-200 text-slate-600 hover:text-primary hover:border-primary transition-all"
      >
        <ChevronRight className="w-5 h-5" />
      </Button>
    </div>
  )
}

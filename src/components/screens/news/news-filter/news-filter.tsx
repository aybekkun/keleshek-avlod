import { useFilters } from '@/hooks'
import { cn } from '@/lib/utils'
import { useCategories } from '@/services/category'

type Props = {
  className?: string
}
/* const CATEGORIES = [
  'All',
  'Образование',
  'События',
  'Кружки',
  'Новости',
  'Спорт',
]
 */
export const NewsFilter = ({ className = `` }: Props) => {
  const { data } = useCategories({})
  const { filters, setFilters } = useFilters('/_layout/news/')
  return (
    <>
      <div
        className={cn(
          'flex flex-col md:flex-row md:items-center justify-between gap-6',
          className,
        )}
      >
        {/* Categories */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setFilters({ category: '' })}
            className={cn(
              'px-6 py-2.5 uppercase rounded-xl text-sm font-black transition-all border shrink-0',

              !filters.category
                ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-105'
                : 'bg-white text-slate-500 border-slate-100 hover:border-primary/30 hover:text-primary',
            )}
          >
            All
          </button>
          {data?.data.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilters({ category: cat.id })}
              className={cn(
                'px-6 py-2.5 uppercase rounded-xl text-sm font-black transition-all border shrink-0',

                cat.id === filters.category
                  ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-105'
                  : 'bg-white text-slate-500 border-slate-100 hover:border-primary/30 hover:text-primary',
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Search */}
        {/*   <form className="group relative max-w-sm w-full">
          <input
            type="text"
            placeholder="Search blog..."
            className="w-full bg-white border border-slate-200 rounded-2xl py-3.5 pl-5 pr-12 text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-slate-400 group-hover:border-slate-300"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-primary transition-colors"
          >
            <Search className="w-5 h-5" />
          </button>
        </form> */}
      </div>
    </>
  )
}

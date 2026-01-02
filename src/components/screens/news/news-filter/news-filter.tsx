import { cn } from '@/lib/utils'
import { Search } from 'lucide-react'
import { useState } from 'react'

type Props = {
  className?: string
}
const CATEGORIES = [
  'All',
  'Образование',
  'События',
  'Кружки',
  'Новости',
  'Спорт',
]

export const NewsFilter = ({ className = `` }: Props) => {
  const [activeCategory, setActiveCategory] = useState('All')
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
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                'px-6 py-2.5 rounded-xl text-sm font-black transition-all border shrink-0',

                cat === activeCategory
                  ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-105'
                  : 'bg-white text-slate-500 border-slate-100 hover:border-primary/30 hover:text-primary',
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search */}
        <form className="group relative max-w-sm w-full">
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
        </form>
      </div>
    </>
  )
}

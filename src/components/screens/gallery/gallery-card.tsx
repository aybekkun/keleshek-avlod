import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import { Maximize2 } from 'lucide-react'

interface GalleryCardProps {
  image: string
  category: string
  description: string
  className?: string
}

export const GalleryCard = ({
  image,
  category,
  description,
  className,
}: GalleryCardProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className={cn(
            'group relative aspect-square overflow-hidden rounded-3xl cursor-pointer bg-muted',
            className,
          )}
        >
          {/* Background Image */}
          <img
            src={image}
            alt={description}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Category Tag */}
          <div className="absolute bottom-4 left-4">
            <span className="bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium text-slate-900 shadow-sm">
              {category}
            </span>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
            <div className="bg-white rounded-full p-4 scale-75 transition-transform duration-300 group-hover:scale-100">
              <Maximize2 className="w-6 h-6 text-slate-900" />
            </div>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-5xl p-0 pt-4 overflow-hidden rounded-3xl border-none">
        <DialogTitle className="sr-only">{category}</DialogTitle>
        <DialogDescription className="sr-only">{description}</DialogDescription>
        <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
          <div className="md:w-2/3 flex items-center justify-center min-h-75">
            <img
              src={image}
              alt={description}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="md:w-1/3 p-8 overflow-y-auto bg-white flex flex-col justify-center">
            <div className="space-y-6">
              <span className="inline-block bg-primary/10 px-4 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-widest">
                {category}
              </span>
              <p className="text-slate-700 leading-relaxed text-lg font-medium">
                {description}
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

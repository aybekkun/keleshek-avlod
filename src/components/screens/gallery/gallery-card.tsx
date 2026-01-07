import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import type { IGallery } from '@/services/gallery'
import { Maximize2 } from 'lucide-react'

interface GalleryCardProps {
  data: IGallery
  className?: string
}

export const GalleryCard = ({ data, className }: GalleryCardProps) => {
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
            src={data.image}
            alt={data.content || ''}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Category Tag */}
          <div className="absolute bottom-4 left-4">
            <span className="bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium text-slate-900 shadow-sm">
              {data.title}
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

      <DialogContent className="sm:max-w-5xl  overflow-hidden rounded-3xl border-none">
        <DialogTitle className="sr-only">{data.title}</DialogTitle>
        <DialogDescription className="sr-only">
          {data.content}
        </DialogDescription>
        <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
          <div className="md:w-2/3 flex items-center justify-center min-h-75">
            <img
              src={data.image}
              alt={data.content || ''}
              className="h-full w-full object-contain rounded-xl"
            />
          </div>
          <div className="md:w-1/3 p-8 overflow-y-auto bg-white flex flex-col justify-center">
            <div className="space-y-6">
              <span className="inline-block bg-primary/10 px-4 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-widest">
                {data.title}
              </span>
              <p className="text-slate-700 leading-relaxed text-lg font-medium">
                {data.content}
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

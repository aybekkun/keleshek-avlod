import { cn } from '@/lib/utils'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

export interface IStaff {
  id: string
  name: string
  position: string
  imageUrl: string
  socials?: {
    facebook?: string
    instagram?: string
    linkedin?: string
  }
}

type Props = {
  staff: IStaff
  className?: string
}

export const StaffCard = ({ staff, className }: Props) => {
  return (
    <div
      className={cn('group flex flex-col items-center text-center', className)}
    >
      {/* Image Container */}
      <div className="relative aspect-square w-full mb-6 overflow-hidden rounded-2xl bg-primary/10">
        <img
          src={staff.imageUrl}
          alt={staff.name}
          className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-500"
        />

        {/* Social Links Overlay */}
        <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4 gap-3">
          {staff.socials?.facebook && (
            <a
              href={staff.socials.facebook}
              className="text-white hover:text-white/80 transition-colors"
            >
              <Facebook className="w-5 h-5 fill-current" />
            </a>
          )}
          {staff.socials?.instagram && (
            <a
              href={staff.socials.instagram}
              className="text-white hover:text-white/80 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          )}
          {staff.socials?.linkedin && (
            <a
              href={staff.socials.linkedin}
              className="text-white hover:text-white/80 transition-colors"
            >
              <Linkedin className="w-5 h-5 fill-current" />
            </a>
          )}
        </div>
      </div>

      {/* Info Section */}
      <h3 className="text-xl font-black text-slate-900 mb-1 group-hover:text-primary transition-colors duration-300">
        {staff.name}
      </h3>
      <p className="text-sm font-medium text-slate-500">{staff.position}</p>
    </div>
  )
}

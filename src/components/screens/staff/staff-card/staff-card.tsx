import { cn } from '@/lib/utils'
import type { IStaff } from '@/services/staff'
import { Facebook, Instagram, Linkedin, Mail, Phone, Send } from 'lucide-react'

type Props = {
  data: IStaff
  className?: string
}

export const StaffCard = ({ data, className }: Props) => {
  return (
    <div
      className={cn('group flex flex-col items-center text-center', className)}
    >
      {/* Image Container */}

      <div className="relative aspect-square w-full mb-6 overflow-hidden rounded-2xl bg-primary/10">
        <img
          src={data.image || ''}
          alt={data.full_name}
          className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-500"
        />

        {/* Social Links Overlay */}
        <div className="absolute  inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4 gap-3">
          {data?.facebook && (
            <a
              href={data.facebook}
              className="text-white hover:text-white/80 transition-colors"
            >
              <Facebook className="w-5 h-5 fill-current" />
            </a>
          )}
          {data?.instagram && (
            <a
              href={data.instagram}
              className="text-white hover:text-white/80 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          )}
          {data?.linkedin && (
            <a
              href={data.linkedin}
              className="text-white hover:text-white/80 transition-colors"
            >
              <Linkedin className="w-5 h-5 fill-current" />
            </a>
          )}
          {data?.telegram && (
            <a
              href={data.telegram}
              className="text-white hover:text-white/80 transition-colors"
            >
              <Send className="w-5 h-5 fill-current" />
            </a>
          )}
          {data?.contact && (
            <a
              href={`tel:${data.contact}`}
              className="text-white hover:text-white/80 transition-colors"
            >
              <Phone className="w-5 h-5 fill-current" />
            </a>
          )}
          {data?.email && (
            <a
              href={`mailto:${data.email}`}
              className="text-white hover:text-white/80 transition-colors"
            >
              <Mail className="w-5 h-5 fill-current" />
            </a>
          )}
        </div>
      </div>

      {/* Info Section */}
      <h3 className="text-xl font-black text-slate-900 mb-1 group-hover:text-primary transition-colors duration-300">
        {data.full_name}
      </h3>
      <p className="text-sm font-medium text-slate-500 mb-3">{data.position}</p>
    </div>
  )
}

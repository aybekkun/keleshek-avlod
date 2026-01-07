import { Button, Container } from '@/components/ui'
import { type IClub } from '@/services/clubs'
import { Link } from '@tanstack/react-router'
import { ChevronLeft, Clock, Share2, Users } from 'lucide-react'
import parse from 'html-react-parser'
interface ClubDetailProps {
  data: IClub
}

export const ClubDetail = ({ data }: ClubDetailProps) => {
  return (
    <article className=" bg-white pb-20 pt-10">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="flex-2 min-w-0">
            <Link
              to="/clubs"
              className="inline-flex items-center text-slate-500 hover:text-primary transition-colors text-sm font-medium mb-8 group"
            >
              <ChevronLeft className="w-4 h-4 mr-1 transition-transform group-hover:-translate-x-1" />
              Назад к кружкам
            </Link>

            <div className="relative aspect-video w-full overflow-hidden rounded-[40px] shadow-2xl shadow-slate-200 mb-12 group">
              <img
                src={data.image || ''}
                alt={data.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {data.title && (
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-6 py-2 rounded-2xl shadow-lg border border-primary/10">
                  <span className="text-xs font-black text-primary uppercase tracking-widest">
                    {data.title}
                  </span>
                </div>
              )}
            </div>

            <div className="space-y-6 mb-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
                {data.title}
              </h1>
            </div>

            <div className="max-w-none prose prose-lg prose-slate">
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                {parse(data.content || '')}
              </div>
            </div>

            {/* Share Section */}
            <div className="mt-16 pt-8 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                  Поделиться
                </span>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="flex-1 lg:max-w-100 space-y-8">
            <div className="bg-slate-50/50 rounded-4xl p-8 space-y-8 border border-slate-100 sticky top-24">
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  Информация
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                    <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center shrink-0">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        Возраст
                      </p>
                      <p className="font-bold text-slate-900">{data.age}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                    <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        Расписание
                      </p>
                      <p className="font-bold text-slate-900">{data.days}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </article>
  )
}

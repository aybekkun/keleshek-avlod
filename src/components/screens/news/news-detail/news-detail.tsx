import { Container } from '@/components/ui'
import type { INews } from '@/services/news'
import { MOCK_NEWS } from '@/services/news'
import { Link } from '@tanstack/react-router'
import { ArrowRight, Calendar, ChevronLeft } from 'lucide-react'

interface NewsDetailProps {
  news: INews
}

export const NewsDetail = ({ news }: NewsDetailProps) => {
  const otherNews = MOCK_NEWS.filter((item) => item.id !== news.id).slice(0, 3)

  return (
    <article className="bg-white pb-20 pt-10">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content Area */}
          <div className="flex-[2] min-w-0">
            <Link
              to="/news"
              className="inline-flex items-center text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium mb-8 group"
            >
              <ChevronLeft className="w-4 h-4 mr-1 transition-transform group-hover:-translate-x-1" />
              Назад к новостям
            </Link>
            <div className="relative aspect-video w-full overflow-hidden rounded-[40px] shadow-2xl shadow-blue-900/10 mb-12">
              <img
                src={news.imageUrl}
                alt={news.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="space-y-6 mb-10">
              <div className="flex flex-wrap gap-4 items-center">
                <span className="bg-blue-600/10 text-blue-600 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em]">
                  {news.category}
                </span>
                <div className="flex items-center text-slate-400 text-sm font-medium">
                  <Calendar className="w-4 h-4 mr-2 opacity-50" />
                  {news.date}
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
                {news.title}
              </h1>
            </div>

            <div className="max-w-none prose prose-lg prose-slate">
              <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed mb-10 border-l-4 border-blue-600 pl-6 py-2 italic font-serif">
                {news.excerpt}
              </p>

              <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
                <p>
                  Сегодня в нашем центре произошло значимое событие, которое
                  подчеркивает стремление современного поколения к инновациям и
                  знаниям. Участники мероприятия смогли обменяться опытом,
                  узнать о новейших тенденциях в сфере образования и получить
                  практические навыки, которые помогут им в будущем.
                </p>
                <p>
                  Организаторы подчеркнули важность подобных встреч для
                  формирования активного сообщества молодых профессионалов.
                  Программа включала в себя как теоретические доклады, так и
                  интерактивные воркшопы, где каждый мог проявить свои таланты и
                  креативность.
                </p>
                <blockquote className="border-l-4 border-blue-200 pl-6 italic text-slate-500 my-8">
                  "Наша главная цель — создать среду, в которой каждый ребенок
                  сможет найти свой уникальный путь и развить те качества,
                  которые будут востребованы в будущем," — отметил один из
                  спикеров мероприятия.
                </blockquote>
                <p>
                  В завершение дня состоялось награждение наиболее активных
                  участников, чьи проекты вызвали наибольший интерес у
                  экспертов. Мы продолжим работу в этом направлении, создавая
                  новые возможности для развития и самореализации нашей
                  молодежи.
                </p>
              </div>
            </div>

            {/* Tags */}
          </div>

          {/* Sidebar Area */}
          <aside className="flex-1 lg:max-w-[400px] space-y-12">
            <div className="bg-slate-50/50 rounded-3xl p-8 sticky top-24">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  Читайте также
                </h3>
                <Link
                  to="/news"
                  className="text-blue-600 hover:opacity-70 transition-opacity"
                >
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="space-y-8">
                {otherNews.map((item) => (
                  <Link
                    key={item.id}
                    to="/news/$id"
                    params={{ id: item.id }}
                    className="group flex gap-4 items-start"
                  >
                    <div className="relative w-24 h-24 rounded-2xl overflow-hidden shrink-0 shadow-sm transition-transform duration-500 group-hover:scale-95">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest block">
                        {item.category}
                      </span>
                      <h4 className="text-sm font-bold text-slate-800 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                        {item.title}
                      </h4>
                      <div className="flex items-center text-[10px] text-slate-400 font-medium">
                        <Calendar className="w-3 h-3 mr-1 opacity-50" />
                        {item.date}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <Link
                to="/news"
                className="mt-10 w-full inline-flex items-center justify-center py-4 rounded-xl border border-slate-200 text-sm font-bold text-slate-600 hover:bg-white hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm"
              >
                Посмотреть все новости
              </Link>
            </div>
          </aside>
        </div>
      </Container>
    </article>
  )
}

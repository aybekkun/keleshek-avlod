import { Explore } from '@/components/shared/explore'
import { SectionHeader } from '@/components/shared/section-header'
import { Container } from '@/components/ui/container'
import { cn } from '@/lib/utils'
import { NewsList } from '../news-list/news-list'

type Props = {
  className?: string
}

export const LatestNewsSection = ({ className = `` }: Props) => {
  return (
    <section className={cn('py-10', className)}>
      <Container>
        <SectionHeader
          title="Последние новости"
          subtitle="Новости"
          className="text-center"
        />
        {/*  <div className="flex justify-between items-center mb-10">
          <h2 className="title">Последние новости</h2>
          <Button asChild className="rounded-2xl">
            <Link
              to="/news"
              className="text-blue-600 font-bold flex items-center hover:gap-2 transition-all"
            >
              Explore more <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div> */}
        <NewsList />
        <Explore
          title="Хотите узнать больше?"
          subtitle="Все новости"
          to="/news"
        />
      </Container>
    </section>
  )
}

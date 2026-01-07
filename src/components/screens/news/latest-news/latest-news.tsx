import { Explore } from '@/components/shared/explore'
import { SectionHeader } from '@/components/shared/section-header'
import { Container } from '@/components/ui/container'
import { cn } from '@/lib/utils'
import { useNews } from '@/services/news'
import { useTranslation } from 'react-i18next'
import { NewsList } from '../news-list/news-list'

type Props = {
  className?: string
}

export const LatestNewsSection = ({ className = `` }: Props) => {
  const { t } = useTranslation()
  const { data } = useNews({
    page: 1,
    limit: 3,
  })
  return (
    <section className={cn('py-10', className)}>
      <Container>
        <SectionHeader
          title={t('sections.latest_news.title')}
          subtitle={t('sections.latest_news.subtitle')}
          className="text-center"
        />
        <NewsList data={data?.data || []} />
        <Explore
          title={t('sections.latest_news.explore_title')}
          subtitle={t('sections.latest_news.explore_subtitle')}
          to="/news"
        />
      </Container>
    </section>
  )
}

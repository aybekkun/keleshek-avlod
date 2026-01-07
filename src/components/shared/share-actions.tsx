import { Button } from '@/components/ui'
import { Check, Copy, Share2 } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

interface ShareActionsProps {
  title: string
  url?: string
  className?: string
}

export const ShareActions = ({
  title,
  url,
  className = '',
}: ShareActionsProps) => {
  const { t } = useTranslation()
  const [copied, setCopied] = useState(false)

  const shareUrl =
    url || (typeof window !== 'undefined' ? window.location.href : '')

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title,
          url: shareUrl,
        })
      } catch (err) {
        console.error('Error sharing:', err)
      }
    }
  }

  return (
    <div className={`flex flex-wrap items-center gap-4 ${className}`}>
      <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">
        {t('common.share')}
      </span>
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white hover:bg-slate-50 transition-colors shadow-sm"
          onClick={handleCopy}
          title={t('common.copy_link')}
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-500" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </Button>
        {typeof navigator !== 'undefined' && (
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-white hover:bg-slate-50 transition-colors shadow-sm"
            onClick={handleShare}
            title={t('common.share')}
          >
            <Share2 className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  )
}

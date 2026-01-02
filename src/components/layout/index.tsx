import { type FC } from 'react'
import { Header } from './header'
import { Footer } from './footer'

interface Props {
  children?: React.ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-blue-50">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  )
}

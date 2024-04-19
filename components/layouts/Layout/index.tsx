import { Header } from '@components/modules/Header'

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    {children}
    <div className='' />
  </>
)

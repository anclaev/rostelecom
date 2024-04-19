import { useCallback, useState } from 'react'
import { useUnit } from 'effector-react'

import { $menuIsOpen, closeMenu } from '@context/modals'
import { useLang } from '@hooks/useLang'

import { removeOverflowHiddenFromBody } from '@lib/utils/common'

import './index.css'

const Menu = () => {
  const [showCatalogList, setShowCatalogList] = useState<boolean>(false)
  const [showBuyersList, setShowBuyersList] = useState<boolean>(false)
  const [showContactsList, setShowContactsList] = useState<boolean>(false)
  const { lang, translations } = useLang()
  const menuIsOpen = useUnit($menuIsOpen)

  const handleCloseMenu = useCallback(() => {
    console.log('hi')
    removeOverflowHiddenFromBody()
    closeMenu()
  }, [])

  return (
    <nav className={`nav-menu ${menuIsOpen ? 'open' : 'close'}`}>
      <button
        className={`btn-reset nav-menu__close ${menuIsOpen ? 'open' : ''}`}
        onClick={handleCloseMenu}
      />
      <h1>Menu</h1>
    </nav>
  )
}

export default Menu

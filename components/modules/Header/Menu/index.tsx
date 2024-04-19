/* eslint-disable @next/next/no-img-element */
'use client'
import { useCallback, useState } from 'react'
import { useUnit } from 'effector-react'

import { removeOverflowHiddenFromBody } from '@lib/utils/common'

import { $menuIsOpen, closeMenu } from '@context/modals'
import { setLang } from '@context/lang'

import Logo from '@components/elements/Logo'
import { useLang } from '@hooks/useLang'

import { LANGS } from '@constants/lang'

import './index.css'

const Menu = () => {
  const [showCatalogList, setShowCatalogList] = useState<boolean>(false)
  const [showBuyersList, setShowBuyersList] = useState<boolean>(false)
  const [showContactsList, setShowContactsList] = useState<boolean>(false)
  const { lang, translations } = useLang()
  const menuIsOpen = useUnit($menuIsOpen)

  const handleCloseMenu = useCallback(() => {
    removeOverflowHiddenFromBody()
    closeMenu()
  }, [])

  const handleSwitchLang = useCallback((lang: LANGS) => {
    setLang(lang)
    localStorage.setItem('lang', JSON.stringify(lang))
  }, [])

  const handleSwitchLangToEn = useCallback(
    () => handleSwitchLang(LANGS.EN),
    [handleSwitchLang]
  )

  const handleSwitchLangToRu = useCallback(
    () => handleSwitchLang(LANGS.RU),
    [handleSwitchLang]
  )

  return (
    <nav className={`nav-menu ${menuIsOpen ? 'open' : 'close'}`}>
      <div className='container nav-menu__container'>
        <div className={`nav-menu__logo ${menuIsOpen ? 'open' : ''}`}>
          <Logo />
        </div>
        <img
          src='/img/menu-bg.png'
          alt='Menu background'
          className={`nav-menu__bg ${menuIsOpen ? 'open' : ''}`}
        />
        <button
          className={`btn-reset nav-menu__close ${menuIsOpen ? 'open' : ''}`}
          onClick={handleCloseMenu}
        />
        <div className={`nav-menu__lang ${menuIsOpen ? 'open' : ''}`}>
          <button
            className={`btn-reset nav-menu__lang__btn ${lang === 'ru' ? 'lang-active' : ''}`}
            onClick={handleSwitchLangToRu}
          >
            RU
          </button>
          <button
            className={`btn-reset nav-menu__lang__btn ${lang === 'en' ? 'lang-active' : ''}`}
            onClick={handleSwitchLangToEn}
          >
            EN
          </button>
          <ul
            className={`list-reset nav-menu__list ${menuIsOpen ? 'open' : ''}`}
          >
            <li className='nav-menu__list__item'></li>
            <li className='nav-menu__list__item'></li>
            <li className='nav-menu__list__item'></li>
          </ul>
        </div>
        <h1>menu</h1>
      </div>
    </nav>
  )
}

export default Menu

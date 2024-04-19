import { createDomain } from 'effector'

const modals = createDomain()

export const openMenu = modals.createEvent<void>()
export const closeMenu = modals.createEvent<void>()

export const $menuIsOpen = modals
  .createStore<boolean>(false)
  .on(openMenu, () => true)
  .on(closeMenu, () => false)

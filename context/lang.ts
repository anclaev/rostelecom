import { createDomain } from 'effector'

import { LANGS } from '@constants/lang'

const lang = createDomain()

export const setLang = lang.createEvent<LANGS>()
export const $lang = lang.createStore(LANGS.RU).on(setLang, (_, lang) => lang)

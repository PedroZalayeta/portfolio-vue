import { createI18n } from 'vue-i18n'
import es from './locals/es.json'
import en from './locals/en.json'

const i18n = createI18n({
  legacy: false,         
  globalInjection: true, 
  locale: 'es',
  fallbackLocale: 'en',
  messages: { es, en }
})

export default i18n


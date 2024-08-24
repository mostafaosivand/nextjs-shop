export function getDirection(locale: string | undefined) {
  if (!locale) return 'ltr';
  const rtlLanguages = ['ar', 'he' , 'fa'];
  return rtlLanguages.includes(locale) ? 'rtl' : 'rtl';
}

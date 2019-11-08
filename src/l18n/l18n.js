import { derived, writable } from 'svelte/store';

let currentLocale;
const defaultLocale = 'en';
const supportedLocales = ['en', 'ga'];

const localizer = (localizeableString) => {
    if (!localizeableString)
        return "";
    
    let localizedString = localizeableString;
    const segments = localizeableString.split('|');

    for (let i = 0; i < segments.length; i++) {
        const segment = segments[i].trim();

        if (segment.indexOf(`${currentLocale}:`) === 0) {
            localizedString = segment.substring((`${currentLocale}:`).length, localizedString.length);
            break;
        }
    }

    return localizedString.trim();
}

const applicationLocale = writable(defaultLocale);
const setLocale = applicationLocale.set;

applicationLocale.set = newLocale => {
    if (!supportedLocales.includes(newLocale)) {
        console.warn(`[documental] Locale "${newLocale}" not found.`);
        newLocale = defaultLocale;
    }
    
    return setLocale(newLocale);
}

applicationLocale.update = () => {
    setLocale(() => currentLocale);
};

applicationLocale.subscribe(newLocale => {
    currentLocale = newLocale
})

const localize = derived([applicationLocale], () => localizer);

export { 
    applicationLocale as locale, 
    localize, 
    localize as _L
};
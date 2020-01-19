import { defaultLocale } from 'i18n/settings';

export function get(req, res) {
    res.writeHead(302, {
        'Location': `/${req.locale || defaultLocale}`
    });
    res.end();
};
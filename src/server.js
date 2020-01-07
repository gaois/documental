import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';

import enthusiast from 'enthusiast';
import 'i18n';
import { cookieName, defaultLocale, excludedRoutes, locales } from 'i18n/settings';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka()
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		enthusiast({
			cookieName: cookieName,
			defaultLocale: defaultLocale,
			excludedRoutes: excludedRoutes,
			locales: locales
		}),
		sapper.middleware({
			session: (req) => ({
				locale: req.locale || ''
			})
		})
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});